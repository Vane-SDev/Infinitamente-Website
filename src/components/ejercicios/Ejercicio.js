"use client";

import { useId, useReducer } from "react";
import tiposRespuesta from "@/lib/tiposRespuesta";
import Expresion from "./Expresion";
import ResultadoCTA from "./ResultadoCTA";

const INTENTOS_POR_DEFECTO = 3;

const estadoInicial = {
  valor: "",
  intentosUsados: 0,
  estado: "respondiendo", // "respondiendo" | "acertado" | "sinIntentos"
  feedback: null, // { tono: "aviso" | "error" | "exito", texto }
};

function reducer(state, action) {
  switch (action.type) {
    case "escribir":
      return { ...state, valor: action.valor };

    case "responder": {
      const { evaluacion, tipo, pistas, maxIntentos } = action;
      const valor = state.valor.trim();

      // Un formato inválido o una fracción sin simplificar no descuentan intento.
      if (evaluacion.resultado === "invalido") {
        return {
          ...state,
          feedback: { tono: "aviso", texto: tipo.mensajesError[evaluacion.error] },
        };
      }
      if (evaluacion.resultado === "equivalente") {
        return {
          ...state,
          feedback: {
            tono: "aviso",
            texto: `¡Vas bien! ${valor} es equivalente al resultado. ¿Se puede simplificar? Escribila en su forma más simple.`,
          },
        };
      }
      if (evaluacion.resultado === "correcto") {
        return {
          ...state,
          estado: "acertado",
          feedback: { tono: "exito", texto: `¡Excelente! ${valor} es correcto.` },
        };
      }

      const intentosUsados = state.intentosUsados + 1;
      if (intentosUsados >= maxIntentos) {
        return {
          ...state,
          intentosUsados,
          estado: "sinIntentos",
          feedback: {
            tono: "error",
            texto: "Esta vez no salió, pero no pasa nada. Mirá cómo se resuelve paso a paso.",
          },
        };
      }

      const restantes = maxIntentos - intentosUsados;
      return {
        ...state,
        intentosUsados,
        feedback: {
          tono: "error",
          texto: `Todavía no. Te ${restantes === 1 ? "queda 1 intento" : `quedan ${restantes} intentos`}. Pista: ${pistas[intentosUsados - 1]}`,
        },
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
  const [state, dispatch] = useReducer(reducer, estadoInicial);
  const inputId = useId();
  const ayudaId = useId();

  const tipo = tiposRespuesta[ejercicio.tipoRespuesta];
  const maxIntentos = ejercicio.intentos ?? INTENTOS_POR_DEFECTO;
  const terminado = state.estado !== "respondiendo";
  const pistasVistas = ejercicio.pistas.slice(
    0,
    Math.min(state.intentosUsados, ejercicio.pistas.length),
  );

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "responder",
      evaluacion: tipo.evaluar(state.valor, ejercicio.respuesta),
      tipo,
      pistas: ejercicio.pistas,
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

      <div className="py-6 mb-6 rounded-xl bg-gray-50 border border-gray-100">
        <Expresion texto={ejercicio.operacion} />
      </div>

      {!terminado && (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
          <label htmlFor={inputId} className="sr-only">
            Tu respuesta
          </label>
          <input
            id={inputId}
            type="text"
            inputMode="text"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder={tipo.placeholder}
            aria-describedby={ayudaId}
            value={state.valor}
            onChange={(e) => dispatch({ type: "escribir", valor: e.target.value })}
            className="flex-1 min-w-0 text-xl text-center sm:text-left text-brand-dark font-semibold px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/20 transition-colors"
          />
          <button
            type="submit"
            className="bg-brand-dark hover:bg-brand-primary text-white font-bold py-3 px-8 rounded-xl transition-colors"
          >
            Comprobar
          </button>
        </form>
      )}
      {!terminado && (
        <p id={ayudaId} className="text-sm text-gray-500 mt-2">
          {tipo.ayudaFormato}
        </p>
      )}

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
