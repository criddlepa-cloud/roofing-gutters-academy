"use client";

type Props = {
  active: string | null;
  onSelect: (id: string) => void;
};

const bands = [
  { id: "decking", label: "Decking", y: 168, h: 28, fill: "#c6a36a" },
  { id: "ice-water", label: "Ice & water shield", y: 140, h: 28, fill: "#2c3338" },
  { id: "underlayment", label: "Underlayment", y: 112, h: 28, fill: "#6d6256" },
  { id: "starter", label: "Starter strip", y: 90, h: 22, fill: "#3d4a55" },
  { id: "shingle", label: "Shingles", y: 58, h: 32, fill: "#6d5142" },
];

export function LayerSvg({ active, onSelect }: Props) {
  const cls = (id: string) => `shape${active === id ? " is-hot" : active ? " is-dim" : ""}`;
  return (
    <svg viewBox="0 0 760 320" role="img" aria-label="Cross section of roof layers at the eave">
      <rect width="760" height="320" fill="#f7f3ea" />
      <text x="24" y="28" fill="#1b3a34" fontSize="16" fontFamily="Georgia, serif">
        Eave cross-section
      </text>
      <text x="520" y="28" fill="#6d645a" fontSize="13">
        Interior is to the left
      </text>

      <path d="M70 250 H250 V300 H70 Z" fill="#e7d7bf" stroke="#2c241c" />
      <text x="110" y="278" fontSize="13" fill="#1c1712">
        Wall
      </text>
      <path d="M40 230 H690" stroke="#2c241c" strokeWidth="3" />
      <path d="M80 230 L150 150 L250 230" fill="#f4ecdf" stroke="#2c241c" />
      <text x="78" y="214" fontSize="12" fill="#1c1712">
        Rafter
      </text>

      {bands.map((band) => (
        <g key={band.id} className={cls(band.id)} onClick={() => onSelect(band.id)} tabIndex={0} role="button" aria-label={band.label}>
          <rect x="150" y={band.y} width="470" height={band.h} fill={band.fill} stroke="#2c241c" />
        </g>
      ))}
      <path d="M250 58 H690" stroke="#4a342b" strokeWidth="2" />
      <path d="M300 58 H300" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${220 + i * 70} 58 l28 -16`} stroke="#4a342b" strokeWidth="2" fill="none" />
      ))}

      <path
        d="M610 168 L668 168 L668 196 L700 214 L610 214 Z"
        className={cls("drip-edge")}
        fill="#d5dde2"
        stroke="#2c241c"
        onClick={() => onSelect("drip-edge")}
        tabIndex={0}
        role="button"
        aria-label="Drip edge"
      />
      <path d="M700 214 L724 230" stroke="#8c3f1e" strokeWidth="3" fill="none" />

      <rect x="150" y="214" width="470" height="16" fill="#f7f1e6" stroke="#2c241c" className={cls("fascia")} onClick={() => onSelect("fascia")} />
      <path d="M250 230 H620 V268 H250 Z" className={cls("soffit")} fill="#efe6d4" stroke="#2c241c" onClick={() => onSelect("soffit")} />
      <path d="M270 248 H590" stroke="#9aa3a8" strokeWidth="4" />
      <text x="360" y="262" fontSize="12">
        Vented soffit
      </text>

      <path d="M250 196 V140" stroke="#b85c32" strokeDasharray="4 3" />
      <text x="24" y="150" fontSize="12" fill="#8c3f1e">
        24 in. inside
      </text>
      <text x="24" y="166" fontSize="12" fill="#8c3f1e">
        the wall line
      </text>

      <g fontSize="13" fill="#1c1712">
        <text x="160" y="80">Shingles</text>
        <text x="160" y="106">Starter</text>
        <text x="160" y="132">Underlayment, up the slope</text>
        <text x="160" y="160">Ice barrier, eave zone</text>
        <text x="160" y="186">Decking</text>
      </g>
      <text x="500" y="250" fontSize="12" fill="#6d645a">
        Fascia
      </text>
      <text x="560" y="188" fontSize="12">
        Drip edge
      </text>
    </svg>
  );
}

export function RakeLapSvg() {
  return (
    <svg viewBox="0 0 640 220" role="img" aria-label="Drip edge lap direction at the eave and the rake">
      <rect width="640" height="220" fill="#f7f3ea" />
      <text x="24" y="28" fontSize="16" fontFamily="Georgia, serif" fill="#1b3a34">
        Which piece sits on top
      </text>
      <g>
        <text x="40" y="58" fontSize="14" fontWeight="700">Eave</text>
        <rect x="40" y="80" width="240" height="22" fill="#c6a36a" stroke="#2c241c" />
        <text x="48" y="96" fontSize="12">Deck</text>
        <path d="M40 102 H250 L270 122 H40 Z" fill="#d5dde2" stroke="#2c241c" />
        <text x="48" y="116" fontSize="12">Drip edge</text>
        <rect x="40" y="70" width="230" height="18" fill="#2c3338" stroke="#2c241c" />
        <text x="48" y="84" fontSize="12" fill="white">Underlayment over the metal</text>
      </g>
      <g>
        <text x="340" y="58" fontSize="14" fontWeight="700">Rake</text>
        <rect x="340" y="80" width="240" height="22" fill="#c6a36a" stroke="#2c241c" />
        <text x="348" y="96" fontSize="12">Deck</text>
        <rect x="340" y="68" width="240" height="18" fill="#2c3338" stroke="#2c241c" />
        <text x="348" y="82" fontSize="12" fill="white">Underlayment</text>
        <path d="M340 68 H560 L590 96 H340 Z" fill="#d5dde2" stroke="#2c241c" />
        <text x="348" y="92" fontSize="12">Drip edge over the sheet</text>
      </g>
      <text x="40" y="180" fontSize="13" fill="#3f382f">
        IRC R905.2.8.5: underlayment over the drip edge along eaves, and under the drip edge along rakes.
      </text>
      <text x="40" y="202" fontSize="13" fill="#3f382f">
        Metal laps 2 inches, reaches at least 2 inches back onto the deck, and hangs at least 1/4 inch below the sheathing.
      </text>
    </svg>
  );
}
