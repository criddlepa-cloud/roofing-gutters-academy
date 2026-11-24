export type Material = {
  id: string;
  name: string;
  family: string;
  tier: string;
  life: string;
  hail: string;
  weight: string;
  summary: string;
  pros: string[];
  cons: string[];
  photo?: string;
  photoAlt?: string;
  photoCaption?: string;
};

export const materials: Material[] = [
  {
    id: "three-tab",
    name: "3-tab asphalt",
    family: "Asphalt shingle",
    tier: "$",
    life: "15–20 years, often less where it hails",
    hail: "Bruises and loses tabs readily",
    weight: "Light",
    summary:
      "A single-layer shingle with three distinct tabs and a flat look. It was the default American roof for decades. Most new Front Range roofs are laminated architectural shingles instead, but you will still walk plenty of 3-tab roofs in older neighborhoods.",
    pros: ["Lowest asphalt price", "Easy to spot-repair a tab", "Light on the frame"],
    cons: [
      "Thin, so hail shows quickly",
      "Wind lifts individual tabs",
      "Flat, dated look",
      "Fewer color and warranty options than a decade ago",
    ],
    photo: "shingle-damage.jpg",
    photoAlt: "Close view of gray 3-tab shingles with cracked and missing tabs",
    photoCaption:
      "3-tab shingles. The cutouts between tabs are the giveaway. These tabs are cracked and cupped. The photographer tied the damage to a thunderstorm; age can look similar, so the cause is confirmed up close.",
  },
  {
    id: "architectural",
    name: "Architectural asphalt",
    family: "Asphalt shingle",
    tier: "$$",
    life: "20–30 years if hail does not end it first",
    hail: "Tougher than 3-tab; still bruises",
    weight: "Light to moderate",
    summary:
      "Also called laminated or dimensional shingles. Two or more layers of asphalt-and-fiberglass are bonded so the roof has thickness and a random shadow line. This is the everyday replacement roof from Brighton through Denver.",
    pros: ["Better wind and hail resistance than 3-tab", "The look buyers expect", "Wide color range"],
    cons: [
      "A Front Range hailstorm still retires them before the warranty clock does",
      "Heavier than 3-tab",
      "A second layer over an old roof is a poor idea and often illegal",
    ],
    photo: "shingle-roof.jpg",
    photoAlt: "Architectural asphalt shingle roof on a house",
    photoCaption: "Laminated architectural shingles. The uneven shadow line is the laminated profile, not damage.",
  },
  {
    id: "class4",
    name: "Class 4 impact-resistant",
    family: "Asphalt shingle",
    tier: "$$–$$$",
    life: "Similar age to architectural; better odds in moderate hail",
    hail: "UL 2218 Class 4",
    weight: "Moderate",
    summary:
      "An architectural shingle that passed UL 2218 Class 4: a 2-inch steel ball dropped from 20 feet, twice in the same spot, without a crack through the shingle. Many Colorado carriers discount the premium when the whole roof is Class 4. The discount is filed by the carrier. It is not a state-mandated amount, and it is not a promise the next storm will be denied.",
    pros: [
      "The rating homeowners and agents ask for along the Front Range",
      "Often eligible for a wind/hail discount",
      "Looks like a normal architectural roof",
    ],
    cons: [
      "Not hail-proof. Large hail and soft-metal collateral still matter",
      "Costs more than a standard architectural",
      "The discount depends on the policy and usually requires proof of the rating",
    ],
    photo: "beach-shingles.jpg",
    photoAlt: "Asphalt shingle roofs on a residential street",
    photoCaption:
      "Class 4 shingles look like other architectural shingles from the yard. The rating is on the bundle and the UL listing, not in the color.",
  },
  {
    id: "standing-seam",
    name: "Standing seam metal",
    family: "Metal",
    tier: "$$$$",
    life: "40–70 years for the panels",
    hail: "Dents; may be cosmetic only",
    weight: "Light",
    summary:
      "Long metal panels with raised seams. Clips or a snap lock hold the panel without a screw through the face of the panel. The seam is the vertical rib you see from the street.",
    pros: ["Long service life", "Sheds snow", "No exposed screws in the field", "Can go on lower slopes than shingles when the panel is rated for it"],
    cons: [
      "Highest common residential price",
      "Hail dents the panel even when it does not leak",
      "Some policies exclude cosmetic metal damage",
      "Oil canning and a different interior noise in rain",
    ],
    photo: "standing-seam.jpg",
    photoAlt: "White standing seam metal roof with vertical ribs and dormers",
    photoCaption:
      "Standing seam. The ribs are the seams. Fasteners are hidden in or under the seam, not screwed through the flat of the panel.",
  },
  {
    id: "exposed-fastener",
    name: "Exposed-fastener metal",
    family: "Metal",
    tier: "$$",
    life: "20–40 years if the screws are maintained",
    hail: "Dents; screws and washers are the leak",
    weight: "Light",
    summary:
      "Corrugated or ribbed panels screwed through the face into the deck or purlins, with a rubber washer under each screw head. Common on barns, shops, and some houses. The panel can outlast the washers.",
    pros: ["Much cheaper than standing seam", "Fast to install", "Tough in wind when detailed right"],
    cons: [
      "Every screw is a future leak as washers dry out",
      "Washer-headed screws should be checked and replaced, not ignored for 40 years",
      "Looks agricultural unless the profile and trim are chosen carefully",
    ],
    photo: "exposed-fastener.jpg",
    photoAlt: "Green corrugated metal roof with exposed screw fasteners",
    photoCaption:
      "Exposed-fastener metal. The small fasteners through the panels are the system. The washers under those heads are what keep water out.",
  },
  {
    id: "concrete-tile",
    name: "Concrete tile",
    family: "Tile",
    tier: "$$$",
    life: "40–60 years",
    hail: "Can crack or shatter",
    weight: "Heavy",
    summary:
      "Molded cement tiles, often shaped to look like clay barrel tile or slate. The roof frame has to be designed for the weight. IRC allows clay and concrete tile from 2½:12 up, with extra underlayment below 4:12.",
    pros: ["Long life", "Class A fire performance is typical", "Distinct look"],
    cons: ["Heavy. An existing truss roof may not be able to take it", "Cracks in hail", "Walking it breaks tiles", "Repairs need matching tile"],
    photo: "clay-tile.jpg",
    photoAlt: "Red clay roof tiles on a building",
    photoCaption:
      "Clay tile, shown here because it reads the same from the street as many concrete barrel tiles. Concrete is cast; clay is fired. Both are heavy and both crack.",
  },
  {
    id: "clay-tile",
    name: "Clay tile",
    family: "Tile",
    tier: "$$$$",
    life: "50–100 years",
    hail: "Brittle in impact",
    weight: "Heavy",
    summary:
      "Fired clay, the traditional tile roof. In Colorado it shows up on custom homes more than on production roofs. The tiles can outlast several generations of underlayment and flashing, which is what actually gets replaced.",
    pros: ["Extremely long tile life", "Color is fired in", "Fire resistant"],
    cons: ["Cost and structure", "Fragile underfoot and in hail", "Underlayment and flashing still have a shorter life than the tile"],
    photo: "clay-tile.jpg",
    photoAlt: "Close view of overlapping red clay roof tiles",
    photoCaption: "Fired clay tiles, overlapped so water sheds from one course to the next.",
  },
  {
    id: "slate",
    name: "Slate",
    family: "Slate",
    tier: "$$$$",
    life: "75–150 years",
    hail: "Cracks and breaks",
    weight: "Heavy",
    summary:
      "Split natural stone. IRC R905.6 limits slate to slopes of 4:12 or greater. A slate roof in Colorado is a specialty install. The stone lasts; the nails, hooks, and flashing are on a shorter clock.",
    pros: ["The longest-lived steep roof", "Repairable one piece at a time if slate is available"],
    cons: ["Cost", "Weight", "Impact breaks it", "A roofer who walks it like asphalt will break it"],
    photo: "slate.jpg",
    photoAlt: "Gray natural slate roofing",
    photoCaption: "Natural slate. Pieces are individual stones, not a printed shingle pattern.",
  },
  {
    id: "synthetic",
    name: "Synthetic slate and shake",
    family: "Synthetic",
    tier: "$$$",
    life: "30–50 years, driven by the warranty",
    hail: "Better than real slate; still can mark",
    weight: "Much lighter than stone",
    summary:
      "Polymer or rubber composite tiles molded to look like slate or cedar. They exist so a house can have the look without the weight. Quality varies a lot by product. Read the hail rating and the fastening schedule for that brand.",
    pros: ["Lighter than slate or tile", "Can mimic slate or shake", "Some products carry impact ratings"],
    cons: ["Color can fade", "Not all products are equal", "Still a premium price", "Future crews may not know the brand's repair parts"],
    photo: "synthetic.jpg",
    photoAlt: "Faded synthetic slate roof on a commercial building",
    photoCaption:
      "A synthetic slate roof with sun fading. The photographer notes the color loss. That is a product and exposure issue, not hail.",
  },
  {
    id: "wood",
    name: "Wood shake and shingle",
    family: "Wood",
    tier: "$$$",
    life: "20–40 years with maintenance",
    hail: "Splits",
    weight: "Moderate",
    summary:
      "Shingles are sawn and relatively smooth. Shakes are split and rougher. Both are installed with gaps so they can dry, often over spaced sheathing and a breathable underlayment. IRC allows them from 3:12 up. Many Front Range cities care about the fire rating of the assembly. Confirm Class A requirements before promising wood.",
    pros: ["The look some historic and mountain houses are built around", "Repairable in small areas"],
    cons: ["Maintenance", "Fire restrictions in a lot of jurisdictions", "Moss, curl, and split", "Not the default hail roof"],
    photo: "wood-shake.jpg",
    photoAlt: "Cedar shingles being installed on spaced roof boards",
    photoCaption:
      "Wood shingles going on over spaced boards. The gaps between boards let the wood dry. That deck would not be correct for asphalt.",
  },
  {
    id: "tpo",
    name: "TPO",
    family: "Low slope",
    tier: "$$",
    life: "15–25 years",
    hail: "Can bruise or puncture",
    weight: "Light",
    summary:
      "Thermoplastic polyolefin, a single-ply membrane welded with hot air at the seams. Usually white. It is a low-slope roof, used on additions, porch roofs, and commercial-style residential sections. It is not a shingle product and it does not belong on a steep roof.",
    pros: ["Welded seams", "Reflective white surface", "Right tool for a roof below 2:12"],
    cons: ["Punctures from hail, tools, and foot traffic", "Needs a real slope to drain, typically ¼:12", "Detail work at walls and drains is the whole job"],
  },
  {
    id: "epdm",
    name: "EPDM",
    family: "Low slope",
    tier: "$$",
    life: "20–30 years",
    hail: "Rubber shrugs off small hail; can still puncture",
    weight: "Light",
    summary:
      "Synthetic rubber sheet, usually black, glued or taped at the seams rather than welded. A long-used low-slope membrane. You will see it on older flat additions and small commercial roofs around the metro.",
    pros: ["Flexible in cold", "Decades of track record", "Repairable with patches"],
    cons: ["Seams are the weak line", "Black holds heat", "Ponding water finds every bad seam"],
    photo: "epdm.jpg",
    photoAlt: "Black EPDM rubber membrane on a flat roof next to an older corrugated roof",
    photoCaption:
      "Black EPDM on a low-slope roof. The sheet is fully adhered here. The corrugated roof beside it is a different system.",
  },
  {
    id: "modbit",
    name: "Modified bitumen",
    family: "Low slope",
    tier: "$$",
    life: "15–20 years",
    hail: "Can bruise and crack as it ages",
    weight: "Moderate",
    summary:
      "Asphalt sheets modified with rubber or plastic, installed in layers. Some are torched, some are mopped, some are peel-and-stick. The cap sheet often has granules, so it looks a little like a flat roll of shingles. Common on parapet roofs and additions.",
    pros: ["Familiar to roofers who also do asphalt", "Redundant layers", "Granule cap can blend with shingle colors at a transition"],
    cons: ["Torch work is a fire risk in the wrong hands", "Seams and flashings age", "Heavier than single-ply"],
    photo: "epdm-finished.jpg",
    photoAlt: "A low-slope roof mid-install with a black membrane over insulation",
    photoCaption:
      "A low-slope membrane during install. This particular sheet is EPDM. Modified bitumen is the granulated, asphalt-based cousin used on the same kind of roof.",
  },
];
