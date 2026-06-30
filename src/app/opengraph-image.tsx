import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Carlos Suprema — Tatuador. Línea Fina · Realismo · Blackwork";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imageData = await readFile(
    join(process.cwd(), "public/images/dragon-sleeve.jpg")
  );
  const imageSrc = `data:image/jpeg;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0908",
        }}
      >
        <div
          style={{
            width: "58%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 0 72px",
          }}
        >
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              color: "#c9a44c",
              marginBottom: 18,
            }}
          >
            TATUADOR
          </div>
          <div
            style={{
              fontSize: 92,
              color: "#f3ede1",
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            CARLOS
          </div>
          <div
            style={{
              fontSize: 92,
              color: "#c9a44c",
              lineHeight: 1,
              fontWeight: 700,
              marginBottom: 28,
            }}
          >
            SUPREMA
          </div>
          <div style={{ fontSize: 30, color: "#a89a86", display: "flex" }}>
            Línea Fina · Realismo · Blackwork
          </div>
        </div>
        <div
          style={{
            width: "42%",
            height: "100%",
            display: "flex",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, #0a0908 0%, rgba(10,9,8,0) 25%)",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
