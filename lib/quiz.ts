export type QuizCard = {
  id: string;
  prompt: string;
  answer: string;
  accept: string[];
  explain: string;
  choices: [string, string, string, string];
  visual:
    | "house"
    | "layer"
    | "gutter"
    | "valley-open"
    | "valley-closed"
    | "valley-woven"
    | "step"
    | "boot"
    | "chimney"
    | "hail"
    | "wind"
    | "ice"
    | "photo";
  highlight?: string;
  photo?: string;
  photoAlt?: string;
};

export const quizDeck: QuizCard[] = [
  {
    id: "ridge",
    prompt: "What is the highlighted line at the peak?",
    answer: "Ridge",
    accept: ["ridge", "roof ridge"],
    explain: "The ridge is the horizontal peak where two slopes meet. Ridge cap covers it. A ridge vent, if there is one, sits under that cap.",
    choices: ["Ridge", "Hip", "Rake", "Valley"],
    visual: "house",
    highlight: "ridge",
  },
  {
    id: "hip",
    prompt: "The left end of this roof slopes down to a corner instead of ending in a triangle wall. What is that outside edge called?",
    answer: "Hip",
    accept: ["hip", "hip ridge"],
    explain: "A hip is the outside corner of two roof planes. A gable is the triangular wall. This roof is hipped on the left and gabled on the right.",
    choices: ["Hip", "Valley", "Rake", "Cricket"],
    visual: "house",
    highlight: "hip",
  },
  {
    id: "valley",
    prompt: "Two roof planes meet in an inside corner and the metal lining is visible. Which valley is this?",
    answer: "Open valley",
    accept: ["open valley", "open", "metal valley"],
    explain: "An open valley leaves the metal exposed and cuts the shingles back on both sides. A closed-cut valley covers the metal. A woven valley laces the shingles.",
    choices: ["Open valley", "Woven valley", "Closed-cut valley", "Cricket"],
    visual: "valley-open",
  },
  {
    id: "rake",
    prompt: "What is the sloped edge of the gable called?",
    answer: "Rake",
    accept: ["rake", "rake edge", "barge"],
    explain: "The rake is the sloped edge over the gable wall. The eave is the level lower edge. Wind likes to start at the rake.",
    choices: ["Rake", "Eave", "Fascia", "Soffit"],
    visual: "house",
    highlight: "rake",
  },
  {
    id: "drip",
    prompt: "At the eave in this cross-section, the metal kick that throws water off the deck is the…",
    answer: "Drip edge",
    accept: ["drip edge", "drip-edge"],
    explain: "Drip edge goes at eaves and rakes. At the eave, underlayment laps over it. At the rake, the drip edge laps over the underlayment. That is IRC R905.2.8.5.",
    choices: ["Drip edge", "Starter strip", "Gutter apron", "Counter flashing"],
    visual: "layer",
    highlight: "drip-edge",
  },
  {
    id: "ice",
    prompt: "Which layer is the sticky ice barrier at the eave?",
    answer: "Ice and water shield",
    accept: ["ice and water", "ice & water", "ice and water shield", "ice barrier"],
    explain: "Ice and water shield seals around the nails. Where the city requires an ice barrier, it reaches at least 24 inches inside the exterior wall, farther on steep slopes.",
    choices: ["Ice and water shield", "Starter strip", "Felt underlayment", "Ridge vent"],
    visual: "layer",
    highlight: "ice-water",
  },
  {
    id: "starter",
    prompt: "Name the strip under the first course of shingles.",
    answer: "Starter strip",
    accept: ["starter", "starter strip", "starter course"],
    explain: "Starter puts sealant at the eave and closes the joints of the first course. Missing starter is why a whole first course peels off in wind.",
    choices: ["Starter strip", "Ridge cap", "Drip edge", "Step flashing"],
    visual: "layer",
    highlight: "starter",
  },
  {
    id: "kstyle",
    prompt: "Which gutter profile is the flat-backed ogee shape on the left?",
    answer: "K-style",
    accept: ["k-style", "k style", "ogee", "kstyle"],
    explain: "K-style is the common residential gutter. Half-round is the semicircle, often copper. A 5-inch K-style holds more than a 5-inch half-round.",
    choices: ["K-style", "Half-round", "Box gutter", "Scupper"],
    visual: "gutter",
    highlight: "k-style",
  },
  {
    id: "standing",
    prompt: "What roof system is this?",
    answer: "Standing seam metal",
    accept: ["standing seam", "standing seam metal", "metal standing seam"],
    explain: "The raised ribs are the seams. Fasteners are not screwed through the flat of the panel. That is the difference from exposed-fastener metal.",
    choices: ["Standing seam metal", "Exposed-fastener metal", "TPO", "3-tab shingles"],
    visual: "photo",
    photo: "standing-seam.jpg",
    photoAlt: "White metal roof with raised vertical seams",
  },
  {
    id: "exposed",
    prompt: "Screws with washers pass through the face of these panels. What is the system called?",
    answer: "Exposed-fastener metal",
    accept: ["exposed fastener", "exposed-fastener", "screw-down metal", "corrugated metal"],
    explain: "Exposed-fastener panels are screwed through the face. The washers age out. Standing seam hides the fasteners in the seam.",
    choices: ["Exposed-fastener metal", "Standing seam", "Modified bitumen", "Slate"],
    visual: "photo",
    photo: "exposed-fastener.jpg",
    photoAlt: "Green corrugated metal roof with visible screws",
  },
  {
    id: "hail",
    prompt: "A dark spot of asphalt where the grit was knocked off, with the mat still covered, is called…",
    answer: "Granule loss",
    accept: ["granule loss", "granule", "lost granules"],
    explain: "Granule loss shows the asphalt. A bruise can still have granules over a fractured mat. Exposed mat means the asphalt itself is gone and the fiberglass shows. All three can be hail. All three can also be age, so the pattern and the soft metal matter.",
    choices: ["Granule loss", "Algae streak", "Blister", "Starter strip"],
    visual: "hail",
  },
  {
    id: "algae",
    prompt: "Dark streaks like these are growing on the shingles. What are you looking at?",
    answer: "Algae",
    accept: ["algae", "gloeocapsa", "streaks", "cosmetic staining"],
    explain: "Gloeocapsa magma stains shingles black. It is cosmetic. It is not a hail hit and it is not a reason, by itself, to call a roof storm-damaged.",
    choices: ["Algae staining", "Hail bruises", "Ice dam", "Exposed fiberglass"],
    visual: "photo",
    photo: "algae-shingles.jpg",
    photoAlt: "Dark biological streaks across asphalt shingles",
  },
  {
    id: "icedam",
    prompt: "Meltwater refreezes at the cold eave and backs up under the shingles. What is that called?",
    answer: "Ice dam",
    accept: ["ice dam", "ice dams"],
    explain: "The dam is the ridge of ice at the eave. The leak shows up inside, often well upslope of the gutter, because water ran sideways under the shingles.",
    choices: ["Ice dam", "Ridge vent", "Blister", "Open valley"],
    visual: "ice",
  },
  {
    id: "step",
    prompt: "The L-shaped pieces woven with each shingle course against a wall are…",
    answer: "Step flashing",
    accept: ["step flashing", "step"],
    explain: "Step flashing is one piece per course. Counter flashing is the cap that covers the upright legs and is let into the wall or the mortar.",
    choices: ["Step flashing", "Counter flashing", "Drip edge", "Pipe boot"],
    visual: "step",
  },
  {
    id: "cricket",
    prompt: "The little peaked diverter on the upslope side of a wide chimney is a…",
    answer: "Cricket",
    accept: ["cricket", "saddle", "chimney cricket"],
    explain: "A cricket, or saddle, sends water around a chimney. IRC R903.2.2 calls for one when the chimney is more than 30 inches wide across the slope.",
    choices: ["Cricket", "Apron", "Pipe boot", "Starter"],
    visual: "chimney",
  },
  {
    id: "boot",
    prompt: "What flashing goes around a plumbing vent?",
    answer: "Pipe boot",
    accept: ["pipe boot", "boot", "pipe jack", "vent boot"],
    explain: "The flange tucks under the shingles on the uphill side and sits on top of the shingles on the downhill side. Cracked rubber collars are a common small leak.",
    choices: ["Pipe boot", "Ridge vent", "End cap", "Miter"],
    visual: "boot",
  },
];
