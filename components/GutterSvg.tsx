"use client";

type Props = {
  active: string | null;
  onSelect: (id: string) => void;
};

export function GutterSvg({ active, onSelect }: Props) {
  const cls = (id: string) => `shape${active === id ? " is-hot" : active ? " is-dim" : ""}`;
  const go = (id: string) => () => onSelect(id);
  return (
    <svg viewBox="0 0 880 560" role="img" aria-label="Gutter profiles and a labeled gutter run">
      <rect width="880" height="560" fill="#f7f3ea" />
      <text x="24" y="28" fontSize="16" fontFamily="Georgia, serif" fill="#1b3a34">
        Profiles
      </text>

      <g className={cls("k-style")} onClick={go("k-style")} tabIndex={0} role="button" aria-label="K-style gutter">
        <path
          d="M78 48 H96 V138 H150 C186 138 196 96 176 78"
          fill="none"
          stroke="#f7f7f5"
          strokeWidth="16"
          strokeLinejoin="round"
          strokeLinecap="butt"
        />
        <path
          d="M78 48 H96 V138 H150 C186 138 196 96 176 78"
          fill="none"
          stroke="#2c241c"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <text x="70" y="196" fontSize="14">K-style</text>
      </g>
      <g className={cls("half-round")} onClick={go("half-round")} tabIndex={0} role="button" aria-label="Half-round gutter">
        <path d="M250 56 H268 V70 C268 150 392 150 392 70 V56 H410 V78 C410 176 250 176 250 78 Z" fill="#e7b48a" stroke="#6a3e22" strokeWidth="2" />
        <text x="270" y="196" fontSize="14">Half-round</text>
      </g>
      <text x="450" y="78" fontSize="14" fill="#3f382f">Same nominal size, less water in the half-round.</text>
      <text x="450" y="102" fontSize="14" fill="#3f382f">5-inch K-style is the usual house gutter.</text>
      <text x="450" y="126" fontSize="14" fill="#3f382f">6-inch is the step up for long runs and steep roofs.</text>

      <text x="24" y="240" fontSize="16" fontFamily="Georgia, serif" fill="#1b3a34">
        One run, sloped toward the outlet
      </text>
      <path d="M36 268 H700 V296 H36 Z" fill="#f4ecdf" stroke="#2c241c" />
      <text x="44" y="286" fontSize="13">Fascia</text>

      <path
        d="M48 296 H430 L444 322 H64 Z"
        className={cls("k-style")}
        fill="#f7f7f5"
        stroke="#2c241c"
        strokeWidth="2"
        onClick={go("k-style")}
      />
      <path d="M64 296 L48 322" className={cls("pitch")} stroke="#b85c32" strokeWidth="3" fill="none" onClick={go("pitch")} />
      <text x="48" y="520" fontSize="13" fill="#8c3f1e">Pitch falls about 1/16 in. per foot toward the outlet</text>

      <g className={cls("guard")} onClick={go("guard")}>
        <path d="M70 292 H420" stroke="#5d6a72" strokeWidth="4" />
      </g>
      <text x="330" y="258" fontSize="12" fill="#3f382f">Guard</text>

      {[110, 180, 250, 330, 400].map((x) => (
        <g key={x} className={cls("hanger")} onClick={go("hanger")}>
          <path d={`M${x} 272 V310`} stroke="#8c3f1e" strokeWidth="3" />
          <circle cx={x} cy="270" r="3.5" fill="#8c3f1e" />
        </g>
      ))}
      <text x="150" y="352" fontSize="13">Hangers</text>

      <path d="M48 296 V326 H70 V296" className={cls("end-cap")} fill="#e6e6e2" stroke="#2c241c" strokeWidth="2" onClick={go("end-cap")} />
      <text x="36" y="352" fontSize="13">End cap</text>

      <path d="M430 296 L560 346 L590 328 L458 286 Z" className={cls("miter")} fill="#f7f7f5" stroke="#2c241c" strokeWidth="2" onClick={go("miter")} />
      <text x="500" y="380" fontSize="13">Miter</text>

      <g className={cls("outlet")} onClick={go("outlet")}>
        <rect x="230" y="318" width="26" height="14" fill="#d9dde0" stroke="#2c241c" />
      </g>
      <text x="210" y="420" fontSize="13">Outlet</text>
      <g className={cls("downspout")} onClick={go("downspout")}>
        <rect x="232" y="332" width="22" height="78" fill="#f7f7f5" stroke="#2c241c" strokeWidth="2" />
      </g>
      <text x="268" y="380" fontSize="13">Downspout</text>
      <path d="M232 410 L200 446 H232" className={cls("elbow")} fill="none" stroke="#2c241c" strokeWidth="3" onClick={go("elbow")} />
      <text x="150" y="470" fontSize="13">Elbow</text>
      <path d="M300 446 h90 v18 h-100 z" className={cls("splash")} fill="#9a4638" stroke="#2c241c" onClick={go("splash")} />
      <text x="300" y="486" fontSize="13">Splash block</text>
      <text x="430" y="470" fontSize="13">2x3 downspout with 5-inch gutter. 3x4 with 6-inch.</text>
    </svg>
  );
}

export const gutterParts: { id: string; name: string; text: string }[] = [
  {
    id: "k-style",
    name: "K-style",
    text: "The ogee face that looks like crown molding. It holds more water than a half-round of the same nominal width. Five-inch is the standard house size. Six-inch is the upgrade when a five-inch run overflows, the roof is steep, or one downspout is doing too much.",
  },
  {
    id: "half-round",
    name: "Half-round",
    text: "A semicircular trough. It is the traditional profile, especially in copper, and it sits a little proud of the fascia. Because the shape is round, a 5-inch half-round carries less than a 5-inch K-style. Hangers usually cradle it from the outside or hook over a bead.",
  },
  {
    id: "hanger",
    name: "Hanger",
    text: "What holds the gutter on the fascia. Hidden hangers screw inside the trough and are the current default. Spike-and-ferrule hangers are the old nail through the gutter into the fascia; they loosen and the gutter sags. Strap hangers wrap the gutter and are common on half-round. Space them about every 2 to 3 feet, closer in a snow country eave.",
  },
  {
    id: "end-cap",
    name: "End cap",
    text: "The flat stop at a dead end. Left and right are not the same. A leaking end cap is usually a bad seal or a cap that was forced onto a crushed end, not a mystery.",
  },
  {
    id: "miter",
    name: "Miter",
    text: "The corner piece, inside or outside. On a seamless run the miter is still a joint, and it is a common leak. Corners also collect the debris that a valley dumps.",
  },
  {
    id: "outlet",
    name: "Outlet",
    text: "The hole and drop that lets water out of the trough into the downspout. It should sit at the low end of the pitch. A gutter with the outlet in the middle of a run that was never sloped will hold water on both sides.",
  },
  {
    id: "downspout",
    name: "Downspout",
    text: "The vertical pipe. A 2x3 downspout pairs with 5-inch K-style. A 3x4 pairs with 6-inch. Two undersized downspouts on a big roof will overflow in a Colorado thunderstorm even if the trough is clean.",
  },
  {
    id: "elbow",
    name: "Elbow",
    text: "The bends at the top, to get from the outlet back to the wall, and at the bottom, to turn water out onto a block or into an extension. A missing bottom elbow dumps water into the foundation.",
  },
  {
    id: "splash",
    name: "Splash block",
    text: "A concrete or plastic pad that throws the downspout discharge away from the house. Better is a buried drain or a long extension, at least several feet. Water that lands at the footing is a basement conversation.",
  },
  {
    id: "guard",
    name: "Gutter guard",
    text: "A screen, a reverse-curve hood, a brush, or a foam insert meant to keep leaves out. Guards help with large debris and do not make a gutter maintenance-free. Pine needles and roof grit still get in, and a guard that sits too high can send water over the front lip.",
  },
  {
    id: "pitch",
    name: "Pitch",
    text: "The gutter is not level. It falls toward the outlet, commonly about 1/16 inch per foot, sometimes up to 1/8. Too flat and water stands. Too steep and the run looks crooked and can pull on the high-end hangers. A run longer than about 40 feet often needs an outlet at both ends or a high point in the middle.",
  },
];
