// app/icon.tsx

import { ImageResponse } from "next/og";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 192, height: 192 },
      id: "icon-192",
    },
    {
      contentType: "image/png",
      size: { width: 512, height: 512 },
      id: "icon-512",
    },
    {
      contentType: "image/png",
      size: { width: 192, height: 192 },
      id: "icon-maskable",
    },
  ];
}

export default function Icon({ id }: { id: string }) {
  const isMaskable = id === "icon-maskable";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          ...(isMaskable && {
            borderRadius: "50%",
            padding: "25%",
          }),
        }}
      >
        📈
      </div>
    ),
    {
      ...{
        width: id === "icon-512" ? 512 : 192,
        height: id === "icon-512" ? 512 : 192,
      },
    }
  );
}
