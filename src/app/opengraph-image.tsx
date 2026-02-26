import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site";
import { resumeProfile } from "@/data/resume";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const assetsDir = join(process.cwd(), "src/assets");
  const fontsDir = join(assetsDir, "fonts");
  const publicDir = join(process.cwd(), "public");

  const [regularFont, boldFont, avatarBuffer] = await Promise.all([
    readFile(join(fontsDir, "comic-relief-400.ttf")),
    readFile(join(fontsDir, "comic-relief-700.ttf")),
    readFile(join(publicDir, "avatar.png")),
  ]);

  const avatarSrc = `data:image/png;base64,${avatarBuffer.toString("base64")}`;
  const displayUrl = siteConfig.url.replace(/^https?:\/\//, "");
  const tagline =
    "Building end-to-end solutions with modern tech stacks.";
  const subTagline =
    "From database architecture to seamless user interfaces.";

  return new ImageResponse(
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        backgroundImage:
          "linear-gradient(135deg, #fafafa 0%, #ffffff 45%, #f8fafc 100%)",
        fontFamily: "\"Comic Relief\", sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 980,
          height: 420,
          borderRadius: 36,
          border: "2px solid #e4e4e7",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "44px 72px 78px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: -16,
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 36,
            right: 48,
            display: "flex",
            alignItems: "center",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "1px",
            color: "#a1a1aa",
          }}
        >
          {displayUrl}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid #e4e4e7",
              background: "#f8fafc",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#a1a1aa",
            }}
          >
            Portfolio
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: 999,
                border: "2px solid #e4e4e7",
                background: "#ffffff",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={avatarSrc}
                alt={siteConfig.name}
                width={120}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 22,
                  fontWeight: 400,
                  color: "#a1a1aa",
                }}
              >
                Hey, I’m
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 64,
                  fontWeight: 700,
                  color: "#18181b",
                  lineHeight: 1.05,
                }}
              >
                {siteConfig.name}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#3f3f46",
                }}
              >
                {resumeProfile.title}
              </div>
            </div>
          </div>
        </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              color: "#64748b",
              fontSize: 22,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 24, color: "#52525b", fontWeight: 400 }}>
                {tagline}
              </span>
              <span style={{ fontSize: 22, fontWeight: 400 }}>{subTagline}</span>
            </div>
          </div>
        </div>
      </div>,
    {
      ...size,
      fonts: [
        {
          name: "Comic Relief",
          data: regularFont,
          weight: 400 as const,
          style: "normal" as const,
        },
        {
          name: "Comic Relief",
          data: boldFont,
          weight: 700 as const,
          style: "normal" as const,
        },
      ],
    }
  );
}
