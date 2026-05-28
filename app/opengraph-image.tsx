import { ImageResponse } from "next/og";

// Root-level OG image — Next.js serves this for the whole site and injects the
// og:image / twitter:image meta automatically. Replaces the old 404 reference
// to /og-image.png. Generated at the edge, cached by Vercel.

export const runtime = "edge";
export const alt =
  "Daybreak Studio — Websites for small businesses in North Jersey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF8F3",
          padding: "84px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark with horizon mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div style={{ position: "relative", display: "flex", width: "72px", height: "44px" }}>
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "29px",
                height: "3px",
                background: "#1A1A1A",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: "13px",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "#6B8CAE",
              }}
            />
          </div>
          <div style={{ fontSize: "32px", fontWeight: 600, color: "#1A1A1A" }}>
            Daybreak Studio
          </div>
        </div>

        {/* Tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "78px",
              fontWeight: 600,
              color: "#1A1A1A",
              letterSpacing: "-2.5px",
              lineHeight: 1.04,
              maxWidth: "940px",
            }}
          >
            Websites that work as hard as you do.
          </div>
          <div style={{ fontSize: "30px", color: "#666666", marginTop: "30px" }}>
            Clean, fast websites for small businesses in North Jersey. From $350.
          </div>
        </div>

        {/* Footer line */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "26px", color: "#6B8CAE" }}>
            daybreakstudio.studio
          </div>
          <div style={{ fontSize: "22px", color: "#999999" }}>
            Booking June–July 2026
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
