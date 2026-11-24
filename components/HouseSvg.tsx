"use client";

import type { KeyboardEvent } from "react";

type Pt = [number, number];
type Pt3 = [number, number, number];

function project([x, y, z]: Pt3): Pt {
  return [
    Math.round((360 + (x - y) * 34) * 10) / 10,
    Math.round((530 + (x + y) * 10 - z * 50) * 10) / 10,
  ];
}

function closed(pts: Pt3[]): string {
  return (
    pts
      .map((p, i) => {
        const [x, y] = project(p);
        return `${i === 0 ? "M" : "L"}${x},${y}`;
      })
      .join(" ") + " Z"
  );
}

function open(pts: Pt3[]): string {
  return pts
    .map((p, i) => {
      const [x, y] = project(p);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
}

function lerp(a: Pt3, b: Pt3, t: number): Pt3 {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

type Props = {
  active: string | null;
  onSelect: (id: string) => void;
};

const labels: { id: string; text: string; at: Pt3; lx: number; ly: number }[] = [
  { id: "ridge", text: "Ridge", at: [5.2, 3.15, 7.05], lx: 300, ly: 58 },
  { id: "ridge-vent", text: "Ridge vent", at: [8.2, 3.15, 7.4], lx: 620, ly: 58 },
  { id: "hip", text: "Hip", at: [0.8, 1.4, 5.6], lx: 16, ly: 150 },
  { id: "rake", text: "Rake", at: [11.05, 0.4, 5.7], lx: 820, ly: 150 },
  { id: "gable", text: "Gable", at: [10.4, 5.2, 2.4], lx: 820, ly: 300 },
  { id: "valley", text: "Valley", at: [4.2, 0.2, 5.2], lx: 16, ly: 230 },
  { id: "dormer", text: "Dormer", at: [5.25, -1.4, 6.5], lx: 150, ly: 108 },
  { id: "chimney", text: "Chimney", at: [8.75, 1.35, 9.15], lx: 700, ly: 108 },
  { id: "pipe-boot", text: "Pipe boot", at: [6.8, 2.15, 6.7], lx: 470, ly: 132 },
  { id: "eave", text: "Eave", at: [8.2, -0.85, 4.2], lx: 640, ly: 470 },
  { id: "fascia", text: "Fascia", at: [4.2, -0.85, 3.9], lx: 250, ly: 490 },
  { id: "soffit", text: "Soffit", at: [2.0, -0.15, 3.7], lx: 16, ly: 400 },
  { id: "drip-edge", text: "Drip edge", at: [10.2, -0.85, 4.15], lx: 780, ly: 430 },
  { id: "step-flashing", text: "Step flashing", at: [6.45, -0.1, 5.5], lx: 16, ly: 310 },
];

export function HouseSvg({ active, onSelect }: Props) {
  const eaveZ = 4.2;
  const ridgeZ = 6.95;
  const ridgeY = 3.15;
  const FL: Pt3 = [-0.75, -0.85, eaveZ];
  const FR: Pt3 = [11.05, -0.85, eaveZ];
  const BR: Pt3 = [11.05, 6.9, eaveZ];
  const BL: Pt3 = [-0.75, 6.9, eaveZ];
  const R1: Pt3 = [2.3, ridgeY, ridgeZ];
  const R2: Pt3 = [11.05, ridgeY, ridgeZ];

  const courses = Array.from({ length: 7 }, (_, i) => {
    const t = (i + 1) / 8;
    return [lerp(FL, R1, t), lerp(FR, R2, t)] as [Pt3, Pt3];
  });

  const cls = (id: string) => `shape${active === id ? " is-hot" : active ? " is-dim" : ""}`;
  const pick = (id: string) => () => onSelect(id);
  const key = (id: string) => (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(id);
    }
  };

  const dormerFront: Pt3 = [4.15, -1.55, 5.15];
  const dormerFrontR: Pt3 = [6.35, -1.55, 5.15];
  const dormerPeak: Pt3 = [5.25, -1.55, 6.55];
  const dormerRidge: Pt3 = [5.25, 0.35, 6.35];

  return (
    <svg viewBox="-10 0 980 540" role="img" aria-label="House roof with selectable parts">
      <rect x="-10" y="0" width="980" height="540" fill="#d7e6ee" />
      <ellipse cx="430" cy="470" rx="340" ry="42" fill="#e4d3b0" />
      <path d={closed([[-0.2, 0.15, 0], [10.4, 0.15, 0], [10.4, 0.15, 3.72], [-0.2, 0.15, 3.72]])} fill="#f4ecdf" stroke="#2c241c" strokeWidth="1.4" />
      <path d={closed([[10.4, 0.15, 0], [10.4, 6.5, 0], [10.4, 6.5, 3.72], [10.4, 0.15, 3.72]])} fill="#e7dcc9" stroke="#2c241c" strokeWidth="1.4" />
      <path d={closed([[1.1, 0.15, 1.15], [2.5, 0.15, 1.15], [2.5, 0.15, 2.45], [1.1, 0.15, 2.45]])} fill="#f7f4ee" stroke="#2c241c" />
      <path d={closed([[3.3, 0.15, 1.15], [4.7, 0.15, 1.15], [4.7, 0.15, 2.45], [3.3, 0.15, 2.45]])} fill="#f7f4ee" stroke="#2c241c" />
      <path d={closed([[7.5, 0.15, 0], [9.1, 0.15, 0], [9.1, 0.15, 2.5], [7.5, 0.15, 2.5]])} fill="#8c4a32" stroke="#2c241c" />
      <path d={closed([[8.1, 0.15, 1.15], [8.5, 0.15, 1.15], [8.5, 0.15, 2.15], [8.1, 0.15, 2.15]])} fill="#d8ecf2" stroke="#2c241c" />

      <path
        d={closed([[10.4, 0.15, 3.72], [10.4, 6.5, 3.72], [10.4, ridgeY, ridgeZ - 0.25]])}
        className={cls("gable")}
        fill="#efe4d2"
        stroke="#2c241c"
        strokeWidth="1.4"
        tabIndex={0}
        role="button"
        aria-label="Gable"
        onClick={pick("gable")}
        onKeyDown={key("gable")}
      />

      <path
        d={closed([BL, BR, R2, R1])}
        fill="#5e4538"
        stroke="#3a2a22"
        strokeWidth="1"
      />
      <path
        d={closed([FL, FR, R2, R1])}
        fill="#6d5142"
        stroke="#3a2a22"
        strokeWidth="1.2"
      />
      {courses.map((line, index) => (
        <path key={index} d={open(line)} stroke="#4a342b" strokeWidth="1.3" fill="none" opacity="0.85" />
      ))}
      <path
        d={closed([FL, BL, R1])}
        className={cls("hip")}
        fill="#7b5b49"
        stroke="#3a2a22"
        strokeWidth="1.4"
        tabIndex={0}
        role="button"
        aria-label="Hip"
        onClick={pick("hip")}
        onKeyDown={key("hip")}
      />
      <path d={open([R1, lerp(FL, BL, 0.5)])} stroke="#4a342b" strokeWidth="1.2" fill="none" />

      <path
        d={open([R1, R2])}
        className={cls("ridge")}
        stroke="#3a2a22"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        tabIndex={0}
        role="button"
        aria-label="Ridge"
        onClick={pick("ridge")}
        onKeyDown={key("ridge")}
      />
      <path
        d={closed([[3.4, ridgeY, ridgeZ], [8.8, ridgeY, ridgeZ], [8.8, ridgeY, ridgeZ + 0.38], [3.4, ridgeY, ridgeZ + 0.38]])}
        className={cls("ridge-vent")}
        fill="#d9dde0"
        stroke="#2c241c"
        strokeWidth="1.4"
        tabIndex={0}
        role="button"
        aria-label="Ridge vent"
        onClick={pick("ridge-vent")}
        onKeyDown={key("ridge-vent")}
      />

      <path
        d={open([R2, FR])}
        className={cls("rake")}
        stroke="#f2e2c4"
        strokeWidth="7"
        fill="none"
        tabIndex={0}
        role="button"
        aria-label="Rake"
        onClick={pick("rake")}
        onKeyDown={key("rake")}
      />
      <path
        d={open([R2, BR])}
        className={cls("rake")}
        stroke="#e2d0ae"
        strokeWidth="6"
        fill="none"
        onClick={pick("rake")}
      />

      <path
        d={open([FL, FR])}
        className={cls("eave")}
        stroke="#f4e6cf"
        strokeWidth="7"
        fill="none"
        tabIndex={0}
        role="button"
        aria-label="Eave"
        onClick={pick("eave")}
        onKeyDown={key("eave")}
      />

      <path
        d={closed([
          [-0.75, -0.85, eaveZ],
          [11.05, -0.85, eaveZ],
          [11.05, -0.85, eaveZ - 0.42],
          [-0.75, -0.85, eaveZ - 0.42],
        ])}
        className={cls("fascia")}
        fill="#f7f1e6"
        stroke="#2c241c"
        strokeWidth="1.2"
        tabIndex={0}
        role="button"
        aria-label="Fascia"
        onClick={pick("fascia")}
        onKeyDown={key("fascia")}
      />
      <path
        d={closed([
          [-0.2, 0.15, 3.72],
          [10.4, 0.15, 3.72],
          [11.05, -0.85, eaveZ - 0.42],
          [-0.75, -0.85, eaveZ - 0.42],
        ])}
        className={cls("soffit")}
        fill="#efe6d4"
        stroke="#2c241c"
        strokeWidth="1"
        tabIndex={0}
        role="button"
        aria-label="Soffit"
        onClick={pick("soffit")}
        onKeyDown={key("soffit")}
      />
      <path
        d={open([[-0.75, -0.85, eaveZ], [11.05, -0.85, eaveZ], [11.05, -1.05, eaveZ - 0.18]])}
        className={cls("drip-edge")}
        stroke="#c5ccd1"
        strokeWidth="4"
        fill="none"
        tabIndex={0}
        role="button"
        aria-label="Drip edge"
        onClick={pick("drip-edge")}
        onKeyDown={key("drip-edge")}
      />

      <path d={closed([dormerFront, dormerFrontR, [6.35, 0.15, 5.05], [4.15, 0.15, 5.05]])} fill="#f7f1e6" stroke="#2c241c" />
      <path
        d={closed([dormerFront, dormerPeak, dormerFrontR])}
        className={cls("dormer")}
        fill="#f3e7d4"
        stroke="#2c241c"
        strokeWidth="1.3"
        tabIndex={0}
        role="button"
        aria-label="Dormer"
        onClick={pick("dormer")}
        onKeyDown={key("dormer")}
      />
      <path d={closed([dormerFront, dormerPeak, dormerRidge, [4.15, 0.45, 5.35]])} fill="#6a4d3e" stroke="#3a2a22" onClick={pick("dormer")} />
      <path d={closed([dormerFrontR, dormerPeak, dormerRidge, [6.35, 0.45, 5.35]])} fill="#5c4336" stroke="#3a2a22" onClick={pick("dormer")} />
      <path d={closed([[4.7, -1.55, 5.3], [5.8, -1.55, 5.3], [5.8, -1.55, 5.95], [4.7, -1.55, 5.95]])} fill="#d5ebf3" stroke="#2c241c" />

      <path
        d={open([[4.15, -0.85, eaveZ], [4.55, 1.15, 5.55]])}
        className={cls("valley")}
        stroke="#d7dee3"
        strokeWidth="7"
        fill="none"
        tabIndex={0}
        role="button"
        aria-label="Valley"
        onClick={pick("valley")}
        onKeyDown={key("valley")}
      />
      <path
        d={open([[6.35, -0.85, eaveZ], [5.95, 1.15, 5.55]])}
        className={cls("valley")}
        stroke="#c5ced4"
        strokeWidth="7"
        fill="none"
        onClick={pick("valley")}
      />

      <path
        d={open([[6.35, -0.4, 5.15], [6.55, -0.4, 5.55], [6.35, 0.05, 5.35], [6.55, 0.05, 5.75]])}
        className={cls("step-flashing")}
        stroke="#e8eef1"
        strokeWidth="5"
        fill="none"
        tabIndex={0}
        role="button"
        aria-label="Step flashing"
        onClick={pick("step-flashing")}
        onKeyDown={key("step-flashing")}
      />
      <path
        d={open([[6.5, -0.55, 5.7], [6.5, 0.25, 5.9]])}
        className={cls("counter-flashing")}
        stroke="#9aa3a8"
        strokeWidth="4"
        fill="none"
        tabIndex={0}
        role="button"
        aria-label="Counter flashing"
        onClick={pick("counter-flashing")}
        onKeyDown={key("counter-flashing")}
      />

      <path
        d={closed([[8.15, 1.35, 5.35], [9.35, 1.35, 5.35], [9.35, 2.25, 5.7], [8.15, 2.25, 5.7]])}
        fill="#d9dee2"
        stroke="#2c241c"
      />
      <path d={closed([[8.15, 2.25, 5.7], [9.35, 2.25, 5.7], [8.75, 2.7, 6.35]])} fill="#c5ccd1" stroke="#2c241c" />
      <path
        d={closed([[8.15, 1.35, 5.35], [9.35, 1.35, 5.35], [9.35, 1.35, 9.1], [8.15, 1.35, 9.1]])}
        className={cls("chimney")}
        fill="#9a4638"
        stroke="#2c241c"
        strokeWidth="1.3"
        tabIndex={0}
        role="button"
        aria-label="Chimney flashing and cricket"
        onClick={pick("chimney")}
        onKeyDown={key("chimney")}
      />
      <path d={closed([[9.35, 1.35, 5.35], [9.35, 2.25, 5.7], [9.35, 2.25, 9.1], [9.35, 1.35, 9.1]])} fill="#7d382e" stroke="#2c241c" onClick={pick("chimney")} />
      <path d={closed([[8.15, 1.35, 9.1], [9.35, 1.35, 9.1], [9.35, 2.25, 9.1], [8.15, 2.25, 9.1]])} fill="#b85a48" stroke="#2c241c" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const p = project([8.28 + col * 0.28, 1.35, 8.7 - row * 0.7]);
          return <rect key={`${row}-${col}`} x={p[0]} y={p[1]} width="7" height="4" fill="#6d2e28" opacity="0.45" />;
        }),
      )}

      <path
        d={closed([[6.45, 2.05, 5.85], [7.15, 2.05, 5.85], [7.15, 2.35, 6.05], [6.45, 2.35, 6.05]])}
        className={cls("pipe-boot")}
        fill="#2f3438"
        stroke="#1c1712"
        strokeWidth="1.2"
        tabIndex={0}
        role="button"
        aria-label="Pipe boot"
        onClick={pick("pipe-boot")}
        onKeyDown={key("pipe-boot")}
      />
      <path d={open([[6.8, 2.15, 5.95], [6.8, 2.15, 6.7]])} stroke="#9aa3a8" strokeWidth="5" fill="none" />
      <ellipse cx={project([6.8, 2.15, 6.7])[0]} cy={project([6.8, 2.15, 6.7])[1]} rx="4.5" ry="2.2" fill="#c5ccd1" stroke="#1c1712" />

      {labels.map((label) => {
        const [ax, ay] = project(label.at);
        const hot = active === label.id;
        const width = label.text.length * 6.7 + 16;
        return (
          <g key={label.id} className={hot ? "label is-hot" : "label"} onClick={pick(label.id)}>
            <path className="leader" d={`M${ax},${ay} L${label.lx + 8},${label.ly}`} />
            <circle className="dot" cx={ax} cy={ay} r="3.5" />
            <g tabIndex={0} role="button" aria-label={label.text} aria-pressed={hot} onKeyDown={key(label.id)}>
              <rect x={label.lx} y={label.ly - 14} width={width} height="22" rx="11" />
              <text x={label.lx + 8} y={label.ly + 2}>
                {label.text}
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}
