import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { resumeProfile } from "@/data/resume";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";


const comicReliefRegular = fetch(
  new URL("./assets/fonts/comic-relief-400.ttf", import.meta.url)
).then((response) => response.arrayBuffer());

const comicReliefBold = fetch(
  new URL("./assets/fonts/comic-relief-700.ttf", import.meta.url)
).then((response) => response.arrayBuffer());

const avatarImage = fetch(
  new URL("./assets/avatar.png", import.meta.url)
).then((response) => response.arrayBuffer());

const toBase64 = (data: ArrayBuffer) => {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(data).toString("base64");
  }

  let binary = "";
  const bytes = new Uint8Array(data);
  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(
      ...bytes.subarray(i, i + chunkSize)
    );
  }

  return btoa(binary);
};

export default async function OpenGraphImage() {
  const displayUrl = siteConfig.url.replace(/^https?:\/\//, "");
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

  let avatarSrc = "";
  try {
    const avatarData = await avatarImage;
    avatarSrc = `data:image/png;base64,${toBase64(avatarData)}`;
  } catch {
    avatarSrc = "";
  }

  const content = (
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
              {avatarSrc ? (
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
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a1a1aa",
                    fontSize: 22,
                    fontWeight: 700,
                  }}
                >
                  {siteConfig.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
              )}
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
      </div>
  );

  try {
    return new ImageResponse(content, {
      ...size,
      fonts,
    });
  } catch {
    return new ImageResponse(content, {
      ...size,
    });
  }
}
