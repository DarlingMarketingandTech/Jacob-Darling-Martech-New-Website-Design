import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #0b1320 0%, #131c2b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f5f3ee",
          fontFamily: "serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1,
            padding: "80px",
          }}
        >
          <div
            style={{
              fontSize: 48,
              color: "#990000",
              marginBottom: 40,
              fontWeight: 700,
            }}
          >
            Resources
          </div>
          <div
            style={{
              fontSize: 56,
              color: "#f5f3ee",
              maxWidth: 1000,
              lineHeight: 1.3,
              fontWeight: 600,
            }}
          >
            Systems Thinking. Practical Tools.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#c47e61",
              marginTop: 40,
            }}
          >
            Darling Martech
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
