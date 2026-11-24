export type Part = {
  id: string;
  name: string;
  summary: string;
  look: string;
  field: string;
  photo?: string;
  photoAlt?: string;
  photoCaption?: string;
};

export const roofParts: Part[] = [
  {
    id: "rake",
    name: "Rake",
    summary:
      "The sloped outer edge of a gable roof, where the roof plane ends over the gable wall. The board that finishes it is the rake board, sometimes called a barge board.",
    look: "Stand at the gable end and look at the diagonal edge from the eave up to the ridge. Wind gets under shingles here first, so rakes are a common place to find lifted or missing tabs after a storm.",
    field:
      "On a walkthrough, look along both rakes for unsealed shingles, a bent drip edge, and exposed underlayment. A clean rake line is also what a homeowner notices from the street.",
    photo: "wind-damage.jpg",
    photoAlt: "Gable roof with missing shingle tabs along the field and near the rake",
    photoCaption:
      "Missing tabs on a gable roof. Wind damage often starts at the rake, the ridge, and any shingle whose seal strip never grabbed.",
  },
  {
    id: "eave",
    name: "Eave",
    summary:
      "The horizontal lower edge of the roof, where water is supposed to leave the slope and fall into the gutter. The overhang past the wall is the eave overhang.",
    look: "It is the long level edge, not the sloped one. Soffit and fascia live under it. Ice dams form here when meltwater refreezes.",
    field:
      "Ask where water goes. If the eave has no gutter, or the gutter sits too high and water runs behind it, the fascia and the siding below rot. That is a gutter-apron and drip-edge conversation, not just a shingle conversation.",
    photo: "eave-wear.jpg",
    photoAlt: "Asphalt shingles worn through first along the eave",
    photoCaption:
      "Shingles often wear out first along the eave, where the most water leaves the roof. That pattern is age and runoff, not a hail map.",
  },
  {
    id: "valley",
    name: "Valley",
    summary:
      "The inside corner where two roof planes meet and water concentrates. Valleys move more water than any other part of a steep roof, so they are lined, not just shingled.",
    look: "Open valleys show a metal trough, usually a W-profile that keeps water from running under the shingles. Closed-cut valleys run one side of shingles through the valley and cut the other side on a line. Woven valleys lace both sides across the center.",
    field:
      "Photograph every valley. Debris, a dead-end valley that dumps on a lower roof, and open metal that has rusted through are all common Front Range findings. Closed and woven valleys are harder to inspect for hail because the shingles are doubled.",
  },
  {
    id: "hip",
    name: "Hip",
    summary:
      "The outside corner where two roof planes meet and slope down to the eaves. A hip roof has no gable wall on that end. The hip is capped with hip shingles or a metal hip cap.",
    look: "From the ground it reads as a diagonal ridge running from the peak down to a corner. Hipped roofs are common on ranch houses and on the ends of more complicated plans.",
    field:
      "Hips take wind from the side and are a place caps blow off. Count the hips when you are explaining why one roof costs more than a simple gable of the same square footage: more edge, more cap, more labor.",
    photo: "hip-roof.jpg",
    photoAlt: "Brick cottage with a hipped tile roof and no gable walls",
    photoCaption:
      "A fully hipped roof: every side slopes, and the hips run from the short ridge down to the corners. This example is clay tile, not asphalt.",
  },
  {
    id: "ridge",
    name: "Ridge",
    summary:
      "The horizontal peak where two opposing roof planes meet. It is the highest line on a gable or hip roof and is covered with ridge cap.",
    look: "The long top line. On a ventilated roof, a ridge vent sits here and is capped over, so you see a low hump rather than a row of box vents.",
    field:
      "Lifted ridge cap is one of the first wind signs a homeowner can see from the yard. Do not call a stained ridge cap 'storm damage' if the granules are simply worn and the cap is still sealed.",
  },
  {
    id: "gable",
    name: "Gable",
    summary:
      "The triangular wall at the end of a ridge roof, and the roof shape that has a ridge, two slopes, and a rake on each end. A gable roof is the simple house shape most people draw.",
    look: "If you can see a triangle of siding under the roof, that end is a gable. The sloped edges of that triangle are the rakes.",
    field:
      "Gables are easy to measure and easy to explain. When a house has several gables, each one adds rakes, and the places they intersect add valleys. That is the complexity, not the shingle brand.",
    photo: "beach-shingles.jpg",
    photoAlt: "House with asphalt shingle gable roofs",
    photoCaption: "Asphalt shingles on a gabled house. The triangle of wall under each peak is the gable.",
  },
  {
    id: "dormer",
    name: "Dormer",
    summary:
      "A framed structure that projects from a sloping roof and holds a window. A gable dormer has its own little ridge and two rakes. A shed dormer has one slope.",
    look: "It breaks the main roof plane. The side walls of the dormer meet the main shingles, which is where step flashing has to be woven in.",
    field:
      "Dormers leak at the cheeks and at the little valley or saddle where the dormer roof meets the main roof. They also add a lot of labor relative to their size. Point that out before someone compares two bids on square footage alone.",
    photo: "standing-seam.jpg",
    photoAlt: "Standing seam metal roof with several gable dormers",
    photoCaption:
      "Gable dormers on a standing-seam roof. Each cheek wall needs step flashing, and each dormer roof has its own ridge and rakes.",
  },
  {
    id: "soffit",
    name: "Soffit",
    summary:
      "The finished underside of the eave overhang. Vented soffit is the intake for attic air. Air should enter here and leave at the ridge or other exhaust vents.",
    look: "Look up under the overhang. Flat panels, often vinyl or aluminum, sometimes with continuous slots or round holes. Painted wood soffit is common on older Brighton and Denver houses.",
    field:
      "If the soffit is painted shut or has no vents, the attic cooks and ice dams get worse. A roof bid that adds a ridge vent without intake is only half a ventilation system.",
    photo: "seamless-gutter.jpg",
    photoAlt: "White vented soffit, fascia, gutter, and downspout at a roof corner",
    photoCaption:
      "Vented soffit panels under the overhang, with the fascia board and a K-style gutter in front of them.",
  },
  {
    id: "fascia",
    name: "Fascia",
    summary:
      "The vertical board at the outer face of the eave, nailed to the rafter tails. The gutter hangs on it. A rake fascia is the same idea on the sloped gable edge.",
    look: "The flat board you see edge-on from the yard, usually covered with aluminum coil or painted wood. The gutter is screwed to it.",
    field:
      "Soft fascia means the gutter has been overflowing or water has been running behind it. Call it out. Replacing rotten fascia is a separate line from the shingles, and it is often found after tear-off, not from the ground.",
    photo: "seamless-gutter.jpg",
    photoAlt: "Fascia board behind a white gutter at the eave",
    photoCaption: "The vertical white board behind the gutter is the fascia. The gutter is fastened to it.",
  },
  {
    id: "drip-edge",
    name: "Drip edge",
    summary:
      "A metal L-shaped flashing at the eaves and rakes that kicks water off the edge of the deck so it does not run back onto the fascia. Required on asphalt shingle roofs by IRC R905.2.8.5.",
    look: "A thin metal lip, often white, brown, or black, just under the first course of shingles. At the eave it sticks out past the fascia about a quarter inch.",
    field:
      "Older Front Range roofs often have no drip edge. On a replacement it is a code item, which is why it shows up on supplements when the policy has ordinance-and-law coverage. Remember the lap direction: underlayment goes over the drip edge at the eaves, and the drip edge goes over the underlayment at the rakes.",
  },
  {
    id: "step-flashing",
    name: "Step flashing",
    summary:
      "Small L-shaped metal pieces woven with each shingle course where a roof meets a sidewall, dormer cheek, or the side of a chimney. Each piece laps the one below it.",
    look: "You usually see only the upturned leg against the wall, or nothing at all if counter flashing covers it. If you see one long continuous piece of metal instead of steps, it is probably wrong.",
    field:
      "Step flashing is a leak that shows up inside a wall, not as a stained shingle. When a homeowner says the ceiling by a dormer stains in wind-driven rain, start here. Sealant smeared along the wall is a patch, not flashing.",
  },
  {
    id: "counter-flashing",
    name: "Counter flashing",
    summary:
      "The cap flashing that covers the top of step or base flashing and is set into the wall or into the mortar joints of a chimney. It is the piece that can be lifted when the roof is replaced, so the wall does not have to be rebuilt.",
    look: "A metal strip let into a brick joint or a siding reglet, turning down over the step flashing. It should not be face-nailed through the brick and gobbed with roof cement.",
    field:
      "Reusing bent, short counter flashing is a common shortcut. The photo on this card is what 'we reused the old metal' looks like. A proper chimney has counter flashing cut into the joints.",
    photo: "chimney-flashing.jpg",
    photoAlt: "Brick chimney with pieced, surface-mounted metal flashing and roof cement",
    photoCaption:
      "Failed chimney flashing: pieces of metal surface-mounted and sealed, not counter flashing cut into the mortar joints.",
  },
  {
    id: "chimney",
    name: "Chimney flashing and cricket",
    summary:
      "A chimney gets an apron on the downslope face, step flashing up both sides, counter flashing over those, and a cricket (also called a saddle) on the upslope face when the chimney is more than 30 inches wide across the slope. The cricket sheds water around the chimney instead of letting it pond.",
    look: "The cricket is a small peaked roof behind the chimney, covered in metal or in the same shingles. Wide chimneys without one collect debris and ice.",
    field:
      "IRC R903.2.2 requires a cricket on the ridge side of any chimney or penetration more than 30 inches wide measured across the slope. If a wide chimney has a flat pan of sealant behind it, that is a talking point, and it is a code item on a reroof when the local edition includes that section.",
    photo: "chimney-flashing.jpg",
    photoAlt: "Close view of damaged metal at the base of a brick chimney",
    photoCaption:
      "The downslope piece is the apron. This one is patched rather than rebuilt. A cricket would sit on the uphill side, out of this frame.",
  },
  {
    id: "pipe-boot",
    name: "Pipe boot",
    summary:
      "The flashing around a plumbing vent or other round penetration. A neoprene or rubber collar on a metal flange is the common modern boot. Older roofs used lead that was dressed around the pipe.",
    look: "A black or colored collar around the pipe, with shingles lapping over the top and sides of the flange and the bottom of the flange sitting on top of the shingles so water runs onto the roof.",
    field:
      "Cracked rubber boots are a leading small leak. They are a repair, not automatically a full roof. Hail also dents lead boots and splits dried-out rubber. Check the orientation: a boot installed backwards dumps water under the shingles.",
  },
  {
    id: "ridge-vent",
    name: "Ridge vent",
    summary:
      "A continuous exhaust vent cut along the ridge, covered by a baffled vent and then ridge cap. It lets hot, moist attic air out. It only works if the soffit or other intake can feed it.",
    look: "A slight lift in the ridge cap, sometimes with a dark mesh visible at the ends. It should run most of the horizontal ridge, stopping short of the hip or the rake so the cap can close.",
    field:
      "Homeowners confuse a ridge vent with a leak because they can see daylight from the attic. Daylight through a baffled ridge vent is normal. Water staining at the ridge usually means the vent was nailed wrong, the cap is blown off, or there is no underlayment detail at the cut.",
  },
  {
    id: "starter",
    name: "Starter strip",
    summary:
      "The first strip along the eave and usually the rake, installed under the first course of shingles. It puts sealant at the eave edge and fills the joints of the first course so water cannot run straight through the cutouts.",
    look: "You rarely see it once the roof is on. A cut shingle turned upside down, or a factory starter roll, sits under course one. The seal strip faces the eave.",
    field:
      "Missing starter is why the first course blows off in a straight line while the field still looks fine. On a claim, wind at the eave with the sealant never bonded is a real install defect and a real wind loss. Say what you can see, and let the adjuster and the crew confirm the rest at tear-off.",
  },
  {
    id: "underlayment",
    name: "Underlayment",
    summary:
      "The water-shedding layer between the deck and the shingles. Traditional is asphalt-saturated felt (15-pound or 30-pound). Most current residential roofs use a synthetic sheet. It is a backup, not the primary roof.",
    look: "During install it is the black, gray, or printed sheet covering the deck, with the course lines lapped shingle-fashion. On a finished roof you only see it where shingles are missing.",
    field:
      "IRC R905.1.1 wants one layer on slopes 4:12 and steeper, and two layers (or a lapped 19-inch pattern) from 2:12 up to 4:12. Asphalt shingles are not allowed below 2:12. When shingles are missing after wind, the underlayment is what is keeping the house dry until the repair.",
    photo: "underlayment.jpg",
    photoAlt: "Crew tearing off shingles and exposing dark roofing felt over wood decking",
    photoCaption:
      "Tear-off. The dark sheet is roofing felt over the wood deck. The pipe at the left is a penetration that has to be reflashed, not just shingled around.",
  },
  {
    id: "ice-water",
    name: "Ice and water shield",
    summary:
      "A sticky rubberized asphalt sheet that seals around nail holes. Where an ice barrier is required, it runs from the eave edge to a point at least 24 inches inside the exterior wall line, and farther on steep slopes. It is also the right material in valleys and around penetrations.",
    look: "A black or sanded sticky membrane, thicker than felt, stuck directly to the deck. You will not see it under a finished shingle roof.",
    field:
      "Do not tell every Brighton or Denver homeowner that ice-and-water is 'required by Colorado.' The IRC requires an ice barrier only where that city's Table R301.2 says ice forms along the eaves. Many cities still require it by amendment, and shingle makers want it in valleys and at penetrations regardless. Check the city, then follow the stricter of the code and the bundle instructions.",
  },
  {
    id: "decking",
    name: "Decking",
    summary:
      "The structural skin the roof is nailed to. On modern houses it is plywood or OSB. On older Denver and Brighton houses it is often spaced 1x boards. The deck has to be solid and sound before new shingles go down.",
    look: "From the attic, look up. Solid sheets, or gaps of several inches between boards. From outside you only see it when the roof is off. Soft spots underfoot, dark rot, and delaminated OSB are the findings.",
    field:
      "Spaced boards cannot take a modern shingle nail pattern. A reroof over them usually needs the gaps sheathed or the boards overlaid. Rotten deck is the classic supplement: nobody can see the full amount until tear-off. Do not quote a firm decking number from the driveway.",
    photo: "wood-shake.jpg",
    photoAlt: "Wood shingles being installed over spaced board sheathing",
    photoCaption:
      "Spaced sheathing, also called skip sheathing, under a wood shingle roof. Wood shakes are supposed to breathe. Asphalt shingles need a solid deck.",
  },
];

export const partById = Object.fromEntries(roofParts.map((part) => [part.id, part]));
