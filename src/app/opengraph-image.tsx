import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const displayUrl = siteConfig.url.replace(/^https?:\/\//, "");
  const techLine = "Next.js · React · TypeScript";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #f5f5f4 0%, #ffffff 45%, #f1f5f9 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 980,
            height: 420,
            borderRadius: 36,
            border: "2px solid #e4e4e7",
            background: "rgba(255, 255, 255, 0.9)",
            padding: "64px 72px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 20px 50px rgba(15, 23, 42, 0.08)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 24,
                textTransform: "uppercase",
                letterSpacing: 6,
                color: "#94a3b8",
                fontWeight: 600,
              }}
            >
              Portfolio
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#0f172a",
                lineHeight: 1.05,
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: "#334155",
              }}
            >
              Full-Stack Developer
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#64748b",
              fontSize: 22,
            }}
          >
            <span>{displayUrl}</span>
            <span>{techLine}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
