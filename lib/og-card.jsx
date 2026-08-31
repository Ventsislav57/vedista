export default function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(135deg, #0c1f17 0%, #163628 55%, #2d6a4f 100%)",
        padding: "80px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <svg width="84" height="84" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="23" fill="#fbf7ee" />
          <g stroke="#1b4332" strokeWidth="2.6" strokeLinecap="round">
            <path d="M24 38V15" />
          </g>
          <path d="M24 16c-2.6-1-4-3.4-4-6.5C22.6 10.5 24 12.9 24 16Z" fill="#e3a72f" />
          <path d="M24 16c2.6-1 4-3.4 4-6.5C25.4 10.5 24 12.9 24 16Z" fill="#c98a1f" />
          <path d="M24 23c-3-1-4.7-3.6-4.7-7C22.3 17 24 19.6 24 23Z" fill="#e3a72f" />
          <path d="M24 23c3-1 4.7-3.6 4.7-7C25.7 17 24 19.6 24 23Z" fill="#c98a1f" />
          <path d="M24 30c-3.2-1-5-3.8-5-7.4C21.8 23.6 24 26.4 24 30Z" fill="#e3a72f" />
          <path d="M24 30c3.2-1 5-3.8 5-7.4C26.2 23.6 24 26.4 24 30Z" fill="#c98a1f" />
        </svg>
        <span
          style={{
            fontSize: 76,
            color: "#fbf7ee",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Vedista
        </span>
      </div>

      <div
        style={{
          marginTop: 36,
          fontSize: 32,
          color: "#f7d98a",
          textAlign: "center",
          maxWidth: 880,
          lineHeight: 1.4,
          display: "flex",
        }}
      >
        Търговия със зърнени култури, маслодайни семена и фуражни суровини
      </div>

      <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
        {["Зърнени", "Маслодайни", "Шротове", "Фуражни"].map((t) => (
          <div
            key={t}
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              border: "1.5px solid rgba(251,247,238,0.35)",
              color: "#fbf7ee",
              fontSize: 22,
            }}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
