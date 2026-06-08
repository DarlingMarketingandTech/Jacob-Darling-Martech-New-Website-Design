import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Darling Martech — Marketing Systems, Websites & AI Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), "public/logo-horizontal-dark.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#0b1320",
          padding: "72px 80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Crimson glow */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(153,0,0,0.22) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <img
          src={logoSrc}
          alt="Darling Martech"
          style={{ height: 52, marginBottom: 36, objectFit: "contain" }}
        />

        {/* Headline */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#f5f3ee",
            lineHeight: 1.05,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Marketing systems that work like one system.
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 20,
            color: "#aab4c0",
            lineHeight: 1.5,
            maxWidth: 660,
            marginBottom: 40,
          }}
        >
          Strategy, websites, CRM, automation, AI, and reporting — connected and measurable.
        </div>

        {/* URL rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 22, height: 2, background: "#990000" }} />
          <div
            style={{
              fontSize: 13,
              color: "#8896a6",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            darlingmartech.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
