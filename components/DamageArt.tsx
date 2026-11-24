export function HailShingleArt() {
  return (
    <svg viewBox="0 0 720 280" role="img" aria-label="Three asphalt shingle hail patterns: bruise, granule loss, and exposed mat">
      <rect width="720" height="280" fill="#f7f3ea" />
      {[
        { x: 20, title: "Bruise", note: "Soft circle. Mat fractured." },
        { x: 250, title: "Granule loss", note: "Dark asphalt where grit left." },
        { x: 480, title: "Exposed mat", note: "Fiberglass showing through." },
      ].map((panel) => (
        <g key={panel.title}>
          <rect x={panel.x} y="36" width="210" height="150" rx="8" fill="#7d6150" stroke="#3a2a22" />
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M${panel.x + 16} ${70 + i * 24} H${panel.x + 194}`} stroke="#4a342b" strokeWidth="3" />
          ))}
          <text x={panel.x} y="24" fontSize="16" fontFamily="Georgia, serif">{panel.title}</text>
          <text x={panel.x} y="214" fontSize="13" fill="#3f382f">
            {panel.note}
          </text>
        </g>
      ))}
      <circle cx="110" cy="110" r="28" fill="none" stroke="#1c1712" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="360" cy="112" r="26" fill="#2a241e" opacity="0.85" />
      <circle cx="590" cy="108" r="24" fill="#d9d3c6" stroke="#1c1712" />
      <circle cx="590" cy="108" r="10" fill="#8a8f86" />
    </svg>
  );
}

export function SoftMetalArt() {
  return (
    <svg viewBox="0 0 720 240" role="img" aria-label="Hail dents in a gutter, a roof vent, and an air conditioner fin">
      <rect width="720" height="240" fill="#f7f3ea" />
      <text x="16" y="24" fontSize="16" fontFamily="Georgia, serif">Soft-metal collateral</text>
      <g>
        <path d="M30 70 H230 V130 H70 C80 160 150 160 160 130 H230" fill="#f4f4f2" stroke="#2c241c" strokeWidth="2" />
        <ellipse cx="120" cy="100" rx="16" ry="8" fill="none" stroke="#8c3f1e" strokeWidth="2" />
        <ellipse cx="170" cy="112" rx="10" ry="5" fill="none" stroke="#8c3f1e" strokeWidth="2" />
        <text x="30" y="190" fontSize="13">Gutter and downspout dents</text>
      </g>
      <g>
        <rect x="280" y="60" width="150" height="90" rx="6" fill="#d5dde2" stroke="#2c241c" strokeWidth="2" />
        <path d="M300 150 V70 M330 150 V70 M360 150 V70 M390 150 V70" stroke="#2c241c" />
        <circle cx="340" cy="100" r="12" fill="none" stroke="#8c3f1e" strokeWidth="2" />
        <text x="280" y="190" fontSize="13">Vent cap or flue cap</text>
      </g>
      <g>
        <rect x="500" y="60" width="180" height="100" fill="#c5ccd1" stroke="#2c241c" />
        {Array.from({ length: 16 }, (_, i) => (
          <path key={i} d={`M${512 + i * 10} 64 V156`} stroke="#8aa0ad" />
        ))}
        <path d="M540 80 l20 16 -20 10" fill="none" stroke="#8c3f1e" strokeWidth="2" />
        <path d="M600 100 l18 12 -16 8" fill="none" stroke="#8c3f1e" strokeWidth="2" />
        <text x="500" y="190" fontSize="13">AC condenser fins</text>
      </g>
      <text x="16" y="224" fontSize="13" fill="#3f382f">Dents in soft metal support a hail story. They do not, by themselves, prove the shingles are bruised.</text>
    </svg>
  );
}

export function WindArt() {
  return (
    <svg viewBox="0 0 720 230" role="img" aria-label="Wind creased, lifted, and missing shingles">
      <rect width="720" height="230" fill="#f7f3ea" />
      {[
        ["Creased", "A sharp fold across the tab. The shingle bent and did not spring back."],
        ["Lifted", "The seal strip let go. You can see the course underneath."],
        ["Missing", "The tab or the whole shingle is gone. Underlayment is open to weather."],
      ].map(([title], index) => {
        const x = 24 + index * 230;
        return (
          <g key={title}>
            <text x={x} y="28" fontSize="16" fontFamily="Georgia, serif">{title}</text>
            <rect x={x} y="44" width="210" height="100" fill="#7d6150" stroke="#3a2a22" />
            <path d={`M${x} 78 H${x + 210} M${x} 110 H${x + 210}`} stroke="#4a342b" strokeWidth="4" />
            {index === 0 && <path d={`M${x + 40} 78 L${x + 70} 96 L${x + 110} 78`} fill="none" stroke="#1c1712" strokeWidth="2" />}
            {index === 1 && <path d={`M${x + 30} 78 L${x + 150} 48 L${x + 180} 78`} fill="#6d5142" stroke="#1c1712" />}
            {index === 2 && <rect x={x + 50} y="82" width="90" height="26" fill="#2c3338" stroke="#1c1712" />}
            <text x={x} y="168" fontSize="13" fill="#3f382f">{title === "Creased" ? "A fold that stayed." : title === "Lifted" ? "Seal strip let go." : "Underlayment is open."}</text>
          </g>
        );
      })}
    </svg>
  );
}

export function IceDamArt() {
  return (
    <svg viewBox="0 0 720 250" role="img" aria-label="Ice dam cross section showing meltwater forced under shingles">
      <rect width="720" height="250" fill="#f7f3ea" />
      <text x="16" y="26" fontSize="16" fontFamily="Georgia, serif">How an ice dam leaks</text>
      <path d="M40 180 H250 V210 H40 Z" fill="#e7d7bf" stroke="#2c241c" />
      <text x="110" y="200" fontSize="13">Warm attic</text>
      <path d="M40 150 H640" stroke="#2c241c" strokeWidth="4" />
      <path d="M80 150 L200 70 H640 V150 Z" fill="#f4ecdf" stroke="#2c241c" />
      <path d="M200 90 H620 V130 H250 Z" fill="#7d6150" />
      <path d="M430 150 C480 150 500 80 560 90 C600 70 640 110 640 150 Z" fill="#d5eef8" stroke="#7aa0b5" />
      <text x="500" y="130" fontSize="13">Ice dam</text>
      <path d="M360 100 C420 110 450 140 470 150" fill="none" stroke="#2f6f9f" strokeWidth="3" />
      <text x="300" y="78" fontSize="13">Meltwater</text>
      <path d="M250 120 L230 168" stroke="#2f6f9f" strokeWidth="3" fill="none" />
      <text x="40" y="236" fontSize="13">Water backs up under the shingles and comes out inside the wall, often above the gutter, not at it.</text>
    </svg>
  );
}

export function WearArt() {
  return (
    <svg viewBox="0 0 720 200" role="img" aria-label="Comparison of normal wear and a storm hit">
      <rect width="720" height="200" fill="#f7f3ea" />
      <g>
        <text x="24" y="28" fontSize="16" fontFamily="Georgia, serif">Normal wear</text>
        <rect x="24" y="44" width="300" height="90" fill="#8a7568" stroke="#3a2a22" />
        <path d="M24 74 H324 M24 104 H324" stroke="#6d5b50" />
        <text x="24" y="160" fontSize="13">Even thinning, curled corners, algae streaks.</text>
      </g>
      <g>
        <text x="380" y="28" fontSize="16" fontFamily="Georgia, serif">Storm damage</text>
        <rect x="380" y="44" width="300" height="90" fill="#7d6150" stroke="#3a2a22" />
        <circle cx="460" cy="90" r="16" fill="#2a241e" />
        <circle cx="520" cy="80" r="12" fill="#2a241e" />
        <circle cx="560" cy="108" r="14" fill="none" stroke="#1c1712" strokeDasharray="2 2" />
        <text x="380" y="160" fontSize="13">Random hits in the field, plus soft-metal dents.</text>
      </g>
    </svg>
  );
}
