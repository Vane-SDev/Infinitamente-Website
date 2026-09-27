"use client";

import { useReducer } from "react";
import { indicesPintados } from "@/lib/figuras";
import { pasosDelEjercicio } from "@/lib/tiposRespuesta";
import EntradaComparar from "./EntradaComparar";
import EntradaCompletar from "./EntradaCompletar";
import EntradaPintar from "./EntradaPintar";
import EntradaPlanteo from "./EntradaPlanteo";
import EntradaTexto from "./EntradaTexto";
import Expresion from "./Expresion";
import FiguraFraccion from "./FiguraFraccion";
import ResultadoCTA from "./ResultadoCTA";

const INTENTOS_POR_DEFECTO = 3;

// El tipo de respuesta elige cuál de estas entradas se muestra.
const entradas = {
  texto: EntradaTexto,
  pintar: EntradaPintar,
  completar: EntradaCompletar,
  planteo: EntradaPlanteo,
  comparar: EntradaComparar,
};

function valorInicial(paso, ejercicio) {
  return typeof paso.valorInicial === "function"
    ? paso.valorInicial(ejercicio)
    : paso.valorInicial;
}

function crearEstado({ pasos, ejercicio }) {
  return {
    paso: 0, // la mayoría de los ejercicios tiene un solo paso
    valor: valorInicial(pasos[0], ejercicio), // lo que escribió o pintó
    intentosUsados: 0, // se cuentan por paso
    estado: "respondiendo", // "respondiendo" | "acertado" | "sinIntentos"
    feedback: null, // { tono: "aviso" | "error" | "exito", texto }
    evaluacion: null, // la última corrección, para marcar casilleros
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "escribir":
      return { ...state, valor: action.valor, evaluacion: null };

    case "responder": {
      const { evaluacion, paso, texto, textoCorrecto, valorSiguiente, maxIntentos } = action;
      const haySiguiente = valorSiguiente !== undefined;
      const pasarAlSiguiente = (feedback) => ({
        ...state,
        paso: state.paso + 1,
        valor: valorSiguiente,
        intentosUsados: 0,
        evaluacion: null,
        feedback,
      });

      // Un formato inválido o una respuesta equivalente mal escrita no
      // descuentan intento.
      if (evaluacion.resultado === "invalido") {
        return {
          ...state,
          feedback: { tono: "aviso", texto: paso.mensajesError[evaluacion.error] },
        };
      }
      if (evaluacion.resultado === "equivalente") {
        return {
          ...state,
          feedback: {
            tono: "aviso",
            texto: paso.mensajesEquivalente[evaluacion.motivo](texto),
          },
        };
      }
      if (evaluacion.resultado === "correcto") {
        const feedback = { tono: "exito", texto: textoCorrecto };
        if (haySiguiente) return pasarAlSiguiente(feedback);
        return { ...state, estado: "acertado", evaluacion, feedback };
      }

      const intentosUsados = state.intentosUsados + 1;
      if (intentosUsados >= maxIntentos) {
        if (haySiguiente && paso.alAgotar === "continuar") {
          return pasarAlSiguiente({ tono: "error", texto: paso.textoAgotado });
        }
        return {
          ...state,
          intentosUsados,
          evaluacion,
          estado: "sinIntentos",
          feedback: {
            tono: "error",
            texto: "Esta vez no salió, pero no pasa nada. Mirá cómo se resuelve paso a paso.",
          },
        };
      }

      const restantes = maxIntentos - intentosUsados;
      const pista = paso.pistas[intentosUsados - 1];
      const partes = [
        "Todavía no.",
        paso.textoIncorrecto?.(evaluacion, state.valor),
        `Te ${restantes === 1 ? "queda 1 intento" : `quedan ${restantes} intentos`}.`,
        pista && `Pista: ${pista}`,
      ];
      return {
        ...state,
        intentosUsados,
        evaluacion,
        feedback: { tono: "error", texto: partes.filter(Boolean).join(" ") },
      };
    }

    default:
      return state;
  }
}

const estilosFeedback = {
  aviso: "bg-amber-50 border-amber-300 text-amber-900",
  error: "bg-red-50 border-red-300 text-red-900",
  exito: "bg-green-50 border-green-300 text-green-900",
};

export default function Ejercicio({ ejercicio }) {
  const pasos = pasosDelEjercicio(ejercicio);
  const [state, dispatch] = useReducer(reducer, { pasos, ejercicio }, crearEstado);
  const paso = pasos[state.paso];
  const Entrada = entradas[paso.entrada];
  const maxIntentos = ejercicio.intentos ?? INTENTOS_POR_DEFECTO;
  const terminado = state.estado !== "respondiendo";
  const operacion = paso.incluyeOperacion ? null : (paso.operacion ?? ejercicio.operacion);
  const graficoFijo = ejercicio.grafico && !paso.incluyeGrafico;
  const pistasVistas = paso.pistas.slice(
    0,
    Math.min(state.intentosUsados, paso.pistas.length),
  );

  function handleSubmit(e) {
    e.preventDefault();
    const texto = paso.mostrar(state.valor, ejercicio);
    const siguiente = pasos[state.paso + 1];
    dispatch({
      type: "responder",
      evaluacion: paso.evaluar(state.valor, ejercicio),
      paso,
      texto,
      textoCorrecto:
        paso.textoCorrecto?.(texto, ejercicio) ?? `¡Excelente! ${texto} es correcto.`,
      valorSiguiente: siguiente && valorInicial(siguiente, ejercicio),
      maxIntentos,
    });
  }

  return (
    <article className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {ejercicio.tema}
        </span>
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <span className="sr-only">
            Intentos usados: {state.intentosUsados} de {maxIntentos}
          </span>
          <span aria-hidden="true">Intentos</span>
          <span aria-hidden="true" className="flex gap-1">
            {Array.from({ length: maxIntentos }, (_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${i < state.intentosUsados ? "bg-gray-300" : "bg-brand-primary"}`}
              />
            ))}
          </span>
        </p>
      </div>

      {ejercicio.contexto && (
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {ejercicio.contexto}
        </p>
      )}

      {pasos.length > 1 && (
        <h3 className="font-bold text-brand-dark text-lg mb-3">
          {paso.titulo}
          <span className="sr-only"> (paso {state.paso + 1} de {pasos.length})</span>
        </h3>
      )}

      {(operacion || graficoFijo) && (
        <div className="py-6 px-4 mb-6 rounded-xl bg-gray-50 border border-gray-100 space-y-6">
          {operacion && <Expresion texto={operacion} />}
          {graficoFijo && (
            <FiguraFraccion
              grafico={ejercicio.grafico}
              pintadas={indicesPintados(ejercicio.grafico)}
            />
          )}
        </div>
      )}

      <Entrada
        tipo={paso}
        ejercicio={ejercicio}
        valor={state.valor}
        evaluacion={state.evaluacion}
        onCambiar={(valor) => dispatch({ type: "escribir", valor })}
        onComprobar={handleSubmit}
        terminado={terminado}
      />

      <div aria-live="polite" role="status">
        {state.feedback && (
          <p
            className={`mt-4 p-4 rounded-xl border ${estilosFeedback[state.feedback.tono]}`}
          >
            {state.feedback.texto}
          </p>
        )}
      </div>

      {state.estado === "respondiendo" && pistasVistas.length > 1 && (
        <div className="mt-4 text-sm text-gray-600">
          <p className="font-semibold text-brand-dark mb-1">Pistas anteriores</p>
          <ul className="list-disc pl-5 space-y-1">
            {pistasVistas.slice(0, -1).map((pista) => (
              <li key={pista}>{pista}</li>
            ))}
          </ul>
        </div>
      )}

      {state.estado === "sinIntentos" && (
        <div className="mt-6">
          <h3 className="font-bold text-brand-dark text-lg mb-3">
            Resolución paso a paso
          </h3>
          <ol className="space-y-2">
            {ejercicio.resolucion.map((paso, index) => (
              <li key={paso} className="flex gap-3 text-gray-700">
                <span className="shrink-0 w-7 h-7 rounded-full bg-brand-primary text-white text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="pt-0.5">{paso}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {terminado && <ResultadoCTA acerto={state.estado === "acertado"} />}
    </article>
  );
}
