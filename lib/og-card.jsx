import fs from "node:fs";
import path from "node:path";

function badgeDataUri() {
  const file = path.join(process.cwd(), "public", "logo-badge.png");
  const base64 = fs.readFileSync(file).toString("base64");
  return `data:image/png;base64,${base64}`;
}

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
          "linear-gradient(135deg, #0b1a2b 0%, #1a3a56 55%, #2f6796 100%)",
        padding: "80px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={badgeDataUri()} width={92} height={92} alt="" />
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
