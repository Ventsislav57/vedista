import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="23" fill="#0f2438" />
          <g stroke="#e3a72f" strokeWidth="2.6" strokeLinecap="round">
            <path d="M24 38V15" />
          </g>
          <path d="M24 16c-2.6-1-4-3.4-4-6.5C22.6 10.5 24 12.9 24 16Z" fill="#e3a72f" />
          <path d="M24 16c2.6-1 4-3.4 4-6.5C25.4 10.5 24 12.9 24 16Z" fill="#f0c14b" />
          <path d="M24 23c-3-1-4.7-3.6-4.7-7C22.3 17 24 19.6 24 23Z" fill="#e3a72f" />
          <path d="M24 23c3-1 4.7-3.6 4.7-7C25.7 17 24 19.6 24 23Z" fill="#f0c14b" />
          <path d="M24 30c-3.2-1-5-3.8-5-7.4C21.8 23.6 24 26.4 24 30Z" fill="#e3a72f" />
          <path d="M24 30c3.2-1 5-3.8 5-7.4C26.2 23.6 24 26.4 24 30Z" fill="#f0c14b" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
