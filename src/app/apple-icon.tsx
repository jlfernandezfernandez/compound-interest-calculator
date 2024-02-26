// app/apple-icon.tsx
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '185px',
          height: '185px',
          background: '#e1e8ed',
          overflow: 'hidden',
        }}
      >
        📈
      </div>
    ),
    {
      ...size,
    }
  )
}
