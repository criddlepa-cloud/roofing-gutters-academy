"use client";

function ShingleRows({ cut }: { cut: "open" | "closed" | "woven" }) {
  const rows = [0, 1, 2, 3, 4, 5];
  return (
    <g>
      <path d="M20 20 H280 V200 H20 Z" fill="#efe6d6" />
      <path d="M150 20 L40 200" stroke="#c6a36a" strokeWidth="18" />
      <path d="M150 20 L260 200" stroke="#c6a36a" strokeWidth="18" />
      {cut === "open" && <path d="M150 24 L78 196 H222 Z" fill="#d5dde2" stroke="#5d6a72" />}
      {rows.map((row) => {
        const y = 36 + row * 26;
        if (cut === "open") {
          return (
            <g key={row}>
              <path d={`M30 ${y} H${128 - row * 4} L${118 - row * 4} ${y + 18} H30 Z`} fill={row % 2 ? "#6d5142" : "#7d6150"} stroke="#3a2a22" />
              <path d={`M${172 + row * 4} ${y} H270 V${y + 18} H${182 + row * 4} Z`} fill={row % 2 ? "#5e4538" : "#6d5142"} stroke="#3a2a22" />
            </g>
          );
        }
        if (cut === "closed") {
          return (
            <g key={row}>
              <path d={`M30 ${y} H176 L168 ${y + 18} H30 Z`} fill={row % 2 ? "#6d5142" : "#7d6150"} stroke="#3a2a22" />
              <path d={`M150 ${y} H270 V${y + 18} H158 Z`} fill={row % 2 ? "#5e4538" : "#6d5142"} stroke="#3a2a22" />
            </g>
          );
        }
        const leftFirst = row % 2 === 0;
        return (
          <g key={row}>
            <path d={`M30 ${y} H${leftFirst ? 176 : 150} L${leftFirst ? 168 : 146} ${y + 18} H30 Z`} fill="#6d5142" stroke="#3a2a22" />
            <path d={`M${leftFirst ? 150 : 124} ${y} H270 V${y + 18} H${leftFirst ? 158 : 132} Z`} fill="#7d6150" stroke="#3a2a22" />
          </g>
        );
      })}
      <path d="M150 28 V190" stroke="#8c3f1e" strokeDasharray="3 3" fill="none" />
    </g>
  );
}

export function ValleySvg({ kind }: { kind: "open" | "closed" | "woven" }) {
  const title = kind === "open" ? "Open valley" : kind === "closed" ? "Closed-cut valley" : "Woven valley";
  const note =
    kind === "open"
      ? "Metal stays visible. Shingles are cut back on both sides."
      : kind === "closed"
        ? "One side runs through. The other is cut on the valley line."
        : "Courses alternate across the center. No metal is visible.";
  return (
    <svg viewBox="0 0 300 250" role="img" aria-label={`${title}. ${note}`}>
      <rect width="300" height="250" fill="#fffcf7" />
      <ShingleRows cut={kind} />
      <text x="16" y="230" fontSize="14" fontFamily="Georgia, serif" fill="#1c1712">
        {title}
      </text>
    </svg>
  );
}

export function FlashingSvg({ kind }: { kind: "step" | "chimney" | "boot" }) {
  if (kind === "boot") {
    return (
      <svg viewBox="0 0 360 220" role="img" aria-label="Pipe boot with shingles lapping the top of the flange">
        <rect width="360" height="220" fill="#f7f3ea" />
        <text x="16" y="24" fontSize="15" fontFamily="Georgia, serif">Pipe boot</text>
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="20" y={40 + i * 36} width="320" height="32" fill={i % 2 ? "#6d5142" : "#7d6150"} stroke="#3a2a22" />
        ))}
        <rect x="130" y="78" width="100" height="70" fill="#d5dde2" stroke="#2c241c" />
        <rect x="150" y="70" width="60" height="28" fill="#6d5142" stroke="#3a2a22" />
        <circle cx="180" cy="112" r="16" fill="#2f3438" />
        <rect x="172" y="48" width="16" height="70" fill="#c5ccd1" stroke="#2c241c" />
        <text x="16" y="200" fontSize="13">Top of the flange tucks under the shingles. Bottom sits on top.</text>
      </svg>
    );
  }
  if (kind === "chimney") {
    return (
      <svg viewBox="0 0 360 230" role="img" aria-label="Chimney apron, step flashing, counter flashing, and cricket">
        <rect width="360" height="230" fill="#f7f3ea" />
        <text x="16" y="22" fontSize="15" fontFamily="Georgia, serif">Chimney, from above</text>
        <path d="M40 40 H320 V200 H40 Z" fill="#7d6150" />
        <path d="M180 40 V200" stroke="#b85c32" strokeWidth="2" strokeDasharray="4 3" />
        <text x="200" y="56" fontSize="12" fill="white">Upslope</text>
        <rect x="130" y="90" width="100" height="70" fill="#9a4638" stroke="#2c241c" />
        <path d="M130 90 L180 58 L230 90 Z" fill="#d5dde2" stroke="#2c241c" />
        <text x="156" y="82" fontSize="11">Cricket</text>
        <rect x="130" y="154" width="100" height="16" fill="#e8eef1" stroke="#2c241c" />
        <text x="154" y="184" fontSize="12" fill="white">Apron</text>
        <path d="M118 100 h12 v14 h-12 z M118 122 h12 v14 h-12 z M230 100 h12 v14 h-12 z M230 122 h12 v14 h-12 z" fill="#e8eef1" stroke="#2c241c" />
        <text x="16" y="218" fontSize="13">Steps on the sides, apron downhill, cricket uphill, counter flashing over the metal.</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 360 230" role="img" aria-label="Step flashing woven with shingle courses and covered by counter flashing">
      <rect width="360" height="230" fill="#f7f3ea" />
      <text x="16" y="22" fontSize="15" fontFamily="Georgia, serif">Step and counter flashing</text>
      <rect x="200" y="36" width="140" height="170" fill="#e7dcc8" stroke="#2c241c" />
      <text x="230" y="120" fontSize="13">Sidewall</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="30" y={40 + i * 30} width="190" height="26" fill={i % 2 ? "#6d5142" : "#7d6150"} stroke="#3a2a22" />
          <path d={`M176 ${48 + i * 30} h36 v22 h-14 v-10 h-22 z`} fill="#e8eef1" stroke="#2c241c" />
        </g>
      ))}
      <rect x="206" y="44" width="18" height="150" fill="#9aa3a8" stroke="#2c241c" />
      <text x="16" y="214" fontSize="13">Each L laps the one below. Counter flashing covers the upright legs.</text>
    </svg>
  );
}
