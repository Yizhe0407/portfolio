import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { resumeProfile } from "@/data/resume";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const comicReliefRegular = fetch(
  new URL("./assets/fonts/comic-relief-400.woff2", import.meta.url)
).then((response) => response.arrayBuffer());

const comicReliefBold = fetch(
  new URL("./assets/fonts/comic-relief-700.woff2", import.meta.url)
).then((response) => response.arrayBuffer());

export default async function OpenGraphImage() {
  const displayUrl = siteConfig.url.replace(/^https?:\/\//, "");
  const techLine = "Next.js · React · TypeScript";
  const avatarUrl = new URL("/avatar.png", siteConfig.url).toString();
  const tagline =
    "Building end-to-end solutions with modern tech stacks.";
  const subTagline =
    "From database architecture to seamless user interfaces.";
  let fonts: Array<{
    name: string;
    data: ArrayBuffer;
    weight: 400 | 700;
    style: "normal";
  }> = [];

  try {
    const [regular, bold] = await Promise.all([
      comicReliefRegular,
      comicReliefBold,
    ]);
    fonts = [
      {
        name: "Comic Relief",
        data: regular,
        weight: 400,
        style: "normal",
      },
      {
        name: "Comic Relief",
        data: bold,
        weight: 700,
        style: "normal",
      },
    ];
  } catch {
    fonts = [];
  }

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fafafa 0%, #ffffff 45%, #f8fafc 100%)",
          fontFamily: "\"Comic Relief\", sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 56,
            bottom: 56,
            left: 84,
            width: 2,
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(161, 161, 170, 0.8) 0 10px, transparent 10px 26px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 56,
            bottom: 56,
            right: 84,
            width: 2,
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(161, 161, 170, 0.8) 0 10px, transparent 10px 26px)",
          }}
        />
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
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid #e4e4e7",
                background: "#f8fafc",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#a1a1aa",
                width: "fit-content",
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
                }}
              >
                <img
                  src={avatarUrl}
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
                    fontSize: 22,
                    fontWeight: 400,
                    color: "#a1a1aa",
                  }}
                >
                  Hey, I’m
                </div>
                <div
                  style={{
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 20,
              }}
            >
              <span style={{ fontWeight: 700, color: "#71717a" }}>
                {displayUrl}
              </span>
              <span>{techLine}</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
