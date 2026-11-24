import Link from "next/link";
import { Figure } from "@/components/Figure";

const cards = [
  {
    href: "/anatomy/",
    title: "Roof anatomy",
    text: "Rakes, valleys, hips, flashing, and the layers you cannot see once the shingles are on.",
    file: "shingle-roof.jpg",
    alt: "Architectural asphalt shingle roof",
  },
  {
    href: "/materials/",
    title: "Materials",
    text: "3-tab, architectural, Class 4, metal, tile, slate, wood, and the low-slope membranes.",
    file: "standing-seam.jpg",
    alt: "Standing seam metal roof",
  },
  {
    href: "/gutters/",
    title: "Gutters",
    text: "K-style and half-round, sizes, pitch, and the parts that actually leak.",
    file: "seamless-gutter.jpg",
    alt: "Seamless aluminum gutter, soffit, and downspout",
  },
  {
    href: "/damage/",
    title: "Damage",
    text: "Hail bruises, soft-metal dents, wind, ice dams, and the wear that is not a storm.",
    file: "wind-damage.jpg",
    alt: "Roof with missing shingles after wind",
  },
  {
    href: "/codes/",
    title: "Colorado codes",
    text: "No statewide house code. What the IRC says, and who actually adopts it.",
    file: "underlayment.jpg",
    alt: "Roof tear-off exposing felt and decking",
  },
  {
    href: "/insurance/",
    title: "Insurance claims",
    text: "The path from the storm to the invoice, and the Colorado rules you cannot freelance.",
    file: "ice-dam.jpg",
    alt: "Icicles along an eave after an ice dam",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">For the driveway conversation</p>
          <h1>Learn the roof before you talk about the roof.</h1>
          <p className="lede">
            Roofing &amp; Gutters Academy is a field guide for someone new to sales and lead generation at a Brighton and Denver exteriors company. It names the parts, shows them, and says what they change on a bid, a permit, and a claim.
          </p>
          <div className="btn-row">
            <Link className="btn" href="/anatomy/">
              Start with the diagram
            </Link>
            <Link className="btn secondary" href="/quiz/">
              Quiz yourself
            </Link>
          </div>
        </div>
        <Figure
          file="shingle-roof.jpg"
          alt="Close view of an architectural asphalt shingle roof"
          caption="Architectural shingles, the roof you will see on most replacement jobs from Brighton to Denver."
        />
      </section>

      <section className="note">
        <strong>How to use this.</strong>
        <p>
          Click a label on the roof diagram and read the note. Then walk a real house in your head: eave or rake, where the water concentrates, what the deck is doing, what the city adopted, and what the policy will actually pay. The quiz at the end uses the same pictures.
        </p>
      </section>

      <section className="section">
        <div className="card-grid">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="card">
              <img src={`/images/${card.file}`} alt={card.alt} />
              <div>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section two">
        <article className="panel">
          <h2>A square is not the house.</h2>
          <p>
            Roofers measure in squares. One square is 100 square feet of roof surface, not of living space. A 24-square roof is 2,400 square feet of roof. Hips, valleys, starter, ridge, and waste sit on top of that number. Two houses with the same bedroom count can be very different roofs.
          </p>
        </article>
        <article className="panel">
          <h2>Hail writes the calendar.</h2>
          <p>
            Along the Front Range, most asphalt roofs are replaced because of hail, not because the warranty ran out. Class 4 shingles and metal change the conversation. They do not end it. Learn the difference between a bruise, a dent, and a dark streak of algae before you tell a homeowner what you are looking at.
          </p>
        </article>
      </section>
    </>
  );
}
