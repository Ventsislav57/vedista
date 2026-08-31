const motifs = {
  pshenitsa: (c) => (
    <g stroke={c} strokeWidth="2.4" strokeLinecap="round" fill={c}>
      <path d="M0 120 C -3 70 -3 30 0 -10" fill="none" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(0 ${70 - i * 26})`}>
          <path d="M0 0 q -13 -5 -18 -20 q 13 3 18 20" />
          <path d="M0 0 q 13 -5 18 -20 q -13 3 -18 20" opacity="0.85" />
        </g>
      ))}
      <path d="M0 -12 q -3 -16 0 -30 q 3 14 0 30" />
    </g>
  ),
  echemik: (c) => (
    <g stroke={c} strokeWidth="2.2" strokeLinecap="round" fill={c}>
      <path d="M0 120 C -2 70 -2 20 0 -20" fill="none" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} transform={`translate(0 ${64 - i * 20})`}>
          <path d="M0 0 q -10 -4 -13 -16" fill="none" strokeWidth="1.6" />
          <path d="M0 0 q 10 -4 13 -16" fill="none" strokeWidth="1.6" />
          <ellipse cx="0" cy="-4" rx="4" ry="8" />
        </g>
      ))}
    </g>
  ),
  tsarevitsa: (c) => (
    <g fill={c} stroke={c} strokeWidth="2">
      <path d="M0 120 C -4 60 -4 10 0 -30" fill="none" strokeWidth="3" />
      <ellipse cx="0" cy="10" rx="15" ry="46" />
      <g stroke="#0b1a2b" strokeWidth="1" opacity="0.35">
        <path d="M0 -34 V54 M-8 -28 V50 M8 -28 V50" fill="none" />
      </g>
      <path d="M0 -20 q -34 -6 -46 22 q 30 -2 46 -22" opacity="0.7" />
      <path d="M0 30 q 34 -6 46 22 q -30 -2 -46 -22" opacity="0.7" />
    </g>
  ),
  slanchogled: (c) => (
    <g>
      <path d="M0 120 C -3 70 -3 30 0 6" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" />
      {[...Array(12)].map((_, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-34"
          rx="8"
          ry="22"
          fill={c}
          transform={`rotate(${i * 30})`}
          style={{ transformOrigin: "0px 0px" }}
        />
      ))}
      <circle cx="0" cy="0" r="16" fill="#3b2a12" />
    </g>
  ),
  rapitsa: (c) => (
    <g fill={c} stroke={c} strokeWidth="2" strokeLinecap="round">
      <path d="M0 120 C -3 70 -3 30 0 -6" fill="none" />
      {[
        [-18, -10],
        [18, -18],
        [0, -34],
        [-14, -40],
        [14, -44],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          {[0, 90, 180, 270].map((r) => (
            <circle key={r} cx="4" cy="0" r="3.4" transform={`rotate(${r})`} />
          ))}
        </g>
      ))}
      <path d="M0 40 q -22 -4 -30 14 q 20 -2 30 -14" opacity="0.8" />
    </g>
  ),
};

export default function CropArt({ slug, accent = "#e3a72f", className = "" }) {
  const motif = motifs[slug] || motifs.pshenitsa;
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Илюстрация на културата">
      <defs>
        <linearGradient id={`bg-${slug}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a3a56" />
          <stop offset="1" stopColor="#2f6796" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#bg-${slug})`} />
      <circle cx="322" cy="60" r="30" fill="#f7d98a" opacity="0.7" />
      <g transform="translate(90 250)">{motif(accent)}</g>
      <g transform="translate(200 260) scale(1.15)">{motif(accent)}</g>
      <g transform="translate(300 250)">{motif(accent)}</g>
      <rect y="262" width="400" height="38" fill="#0f2438" />
    </svg>
  );
}
