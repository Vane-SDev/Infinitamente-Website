"use client";

import { InlineWidget } from "react-calendly";

export default function ClasePrueba() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(167,40,212,0.25)] ring-1 ring-brand-primary/30">
      <InlineWidget
        url="https://calendly.com/infinitamentematematico/20min?hide_gdpr_banner=1&primary_color=A728D4&text_color=37125C&background_color=ffffff"
        styles={{
          height: "900px",
          width: "100%",
        }}
      />
    </div>
  );
}
