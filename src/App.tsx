import { useRef, useState } from "react"

const A = "/assets"

type MenuItem = {
  name: string
  category: string
  price: string
  description: string
  image: string
}

const menuItems: MenuItem[] = [
  {
    name: "The Mediterranean",
    category: "Signature Salad",
    price: "£14",
    description:
      "Crisp romaine, feta, olives, cucumber, cherry tomatoes, red onion with lemon herb dressing",
    image: "fc381.png",
  },
  {
    name: "The Caesar Royale",
    category: "Signature Salad",
    price: "£16",
    description:
      "Baby gem lettuce, grilled chicken, parmesan crisps, sourdough croutons, classic Caesar dressing",
    image: "52695.png",
  },
  {
    name: "The Tokyo Bowl",
    category: "Signature Salad",
    price: "£15",
    description:
      "Mixed greens, edamame, sesame tofu, pickled ginger, avocado with miso ginger dressing",
    image: "e892d.png",
  },
  {
    name: "The Power Bowl",
    category: "Breakfast Salad",
    price: "£13",
    description:
      "Quinoa, kale, poached eggs, avocado, roasted sweet potato, pumpkin seeds with tahini drizzle",
    image: "d6263.png",
  },
  {
    name: "Soup of the Day",
    category: "Warm Option",
    price: "£16",
    description:
      "House-made seasonal soup served with artisan bread and herb butter",
    image: "bcd5a.png",
  },
  {
    name: "Citrus Parfait",
    category: "Desert",
    price: "£7",
    description:
      "Layers of Greek yogurt, citrus segments, granola, honey drizzle and fresh mint",
    image: "a5be4.png",
  },
]

const features = [
  [
    "Premium Ingredients",
    "Sourced daily from the finest suppliers, each ingredient is selected for peak freshness and flavor.",
    "b7863.png",
    "pink",
  ],
  [
    "Wholesome Philosophy",
    "Fresh, nourishing, and balanced meals that fuel both body and soul with natural goodness.",
    "a4e9a.png",
    "orange",
  ],
  [
    "Global Inspiration",
    "Our menu draws from international cuisines, bringing cosmopolitan flavors to every bowl.",
    "ce0fb.png",
    "blue",
  ],
  [
    "Personalized Experience",
    "Every guest creates their perfect meal. Your tastes, your choices, crafted just for you.",
    "c8340.png",
    "yellow",
  ],
]

const ingredients = [
  ["Avocado", "6a07f.png", "yellow"],
  ["Roasted Chickpeas", "250aa.png", "brown"],
  ["Watermelon Radish", "9dba2.png", "pink"],
  ["Heirloom Tomatoes", "65aab.png", "orange"],
]

const dressings = [
  ["Olive Oil", "e4da7.png"],
  ["Lemon Vinaigrette Oil", "68592.png"],
  ["Truffle oil", "6a07f.png"],
]

const testimonials = [
  [
    '"The Salad Bar has completely changed how I think about healthy eating. Every ingredient is perfectly fresh, and the flavor combinations are incredible."',
    "Emma Richardson",
    "Regular Guest",
    "51f37.png",
  ],
  [
    '"Finally, a place that takes salads seriously! The quality of ingredients and creative combinations are unmatched. This is proper culinary artistry."',
    "Sophie Martinez",
    "Food Enthusiast",
    "8e113.png",
  ],
  [
    '"I come here at least twice a week. The personalized service and attention to detail make every visit special. It’s not just a meal, it’s an experience."',
    "James Chen",
    "Local Professional",
    "9da14.png",
  ],
  [
    '"Inventive, generous and beautifully presented. Lunch here always feels like a small celebration in the middle of the day."',
    "Marvin McKinney",
    "Regular Guest",
    "de249.png",
  ],
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

function Arrow({ light = false }: { light?: boolean }) {
  return (
    <img
      className="button-icon"
      src={`${A}/${light ? "61e8e.svg" : "6f439.svg"}`}
      alt=""
    />
  )
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: React.ReactNode
  body: string
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{body}</p>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <button
        className="wordmark"
        onClick={() => scrollTo("home")}
        aria-label="The Salad Bar home"
      >
        The Salad Bar
      </button>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
      </button>
      <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
        <button
          onClick={() => {
            scrollTo("story")
            setOpen(false)
          }}
        >
          Our Story
        </button>
        <button
          onClick={() => {
            scrollTo("builder")
            setOpen(false)
          }}
        >
          Build Yours
        </button>
        <button
          onClick={() => {
            scrollTo("menu")
            setOpen(false)
          }}
        >
          Menu
        </button>
        <button
          onClick={() => {
            scrollTo("space")
            setOpen(false)
          }}
        >
          Our Space
        </button>
        <button
          className="nav-order"
          onClick={() => {
            scrollTo("ready")
            setOpen(false)
          }}
        >
          Order now
        </button>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <Header />
      <div className="hero-content">
        <p className="hero-kicker">London&apos;s Premier Salad Experience</p>
        <h1>
          <span>Fresh. Personal. </span>
          <em>Extraordinary.</em>
        </h1>
        <p className="hero-copy">
          Artistically crafted salads inspired by global flavors. Each bowl is a
          personalized journey through premium ingredients, designed for the
          modern cosmopolitan lifestyle.
        </p>
        <div className="hero-actions">
          <button
            className="button primary"
            onClick={() => scrollTo("builder")}
          >
            Buy Salad <Arrow />
          </button>
          <button className="button outline" onClick={() => scrollTo("menu")}>
            Explore Menu
          </button>
        </div>
        <div className="guest-proof">
          <div className="avatar-stack">
            {["8e113.png", "a42eb.png", "51f37.png", "b4b65.png"].map(
              (image) => (
                <img key={image} src={`${A}/${image}`} alt="" />
              ),
            )}
          </div>
          <div>
            <strong>2,000+ happy guests</strong>
            <span>Served this month</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="story section" id="story">
      <div className="story-copy">
        <p className="eyebrow">Our Story</p>
        <h2>Redefining the salad experience</h2>
        <p className="section-copy">
          The Salad Bar was born from a simple belief: healthy food should be as
          exciting as it is nourishing. We&apos;ve created a space where premium
          ingredients meet artistic presentation, where global flavors inspire
          everyday wellness, and where every guest can craft their perfect meal.
        </p>
        <div className="feature-grid">
          {features.map(([name, body, image, color]) => (
            <article className={`feature ${color}`} key={name}>
              <span className="feature-icon">
                <img src={`${A}/${image}`} alt="" />
              </span>
              <div>
                <h3>{name}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <img
        className="story-image"
        src={`${A}/1c791.png`}
        alt="A bright, colorful salad served in a white bowl"
      />
    </section>
  )
}

function Builder() {
  const [selected, setSelected] = useState([
    "Avocado",
    "Heirloom Tomatoes",
    "Olive Oil",
  ])
  const toggle = (name: string) =>
    setSelected((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    )
  return (
    <section className="builder section-wrap" id="builder">
      <SectionIntro
        eyebrow="Personalized Creation"
        title={
          <>
            Build your perfect <em>salad</em>
          </>
        }
        body="Craft a meal that’s uniquely yours. Mix and match from our premium selection of fresh ingredients, proteins, and house-made dressings."
      />
      <div className="builder-card">
        <style>{`
          .builder-card .spiral-plate-stage {
            position: relative;
            display: grid;
            width: min(100%, 540px);
            aspect-ratio: 1;
            margin: 0 auto;
            place-items: center;
            perspective: 900px;
          }

          .builder-card .spiral-plate-stage::before,
          .builder-card .spiral-plate-stage::after {
            position: absolute;
            content: "";
            border: 1px solid rgb(216 255 87 / 38%);
            border-radius: 50%;
            pointer-events: none;
          }

          .builder-card .spiral-plate-stage::before {
            inset: 5%;
            animation: builder-orbit 9s linear infinite;
          }

          .builder-card .spiral-plate-stage::after {
            inset: 14%;
            border-color: rgb(75 179 253 / 25%);
            animation: builder-orbit 6s linear infinite reverse;
          }

          .builder-card .spiral-plate {
            position: relative;
            z-index: 1;
            width: 88%;
            aspect-ratio: 1;
            border: 12px solid white;
            border-radius: 50%;
            object-fit: cover;
            box-shadow:
              0 28px 60px rgb(30 30 30 / 20%),
              0 8px 18px rgb(30 30 30 / 12%);
            animation: builder-spiral-in 900ms cubic-bezier(.16, 1, .3, 1) both;
            will-change: transform, opacity, filter;
          }

          .builder-card .bowl-wrap span {
            z-index: 2;
            min-width: max-content;
            text-align: center;
          }

          @keyframes builder-spiral-in {
            0% {
              opacity: 0;
              filter: blur(12px) saturate(.6);
              transform: rotate(-760deg) translateX(190px) rotate(760deg) scale(.08);
            }
            58% {
              opacity: 1;
              filter: blur(1px) saturate(1.1);
              transform: rotate(42deg) translateX(22px) rotate(-42deg) scale(1.08);
            }
            78% {
              transform: rotate(-12deg) translateX(5px) rotate(12deg) scale(.97);
            }
            100% {
              opacity: 1;
              filter: blur(0) saturate(1);
              transform: rotate(0) translateX(0) scale(1);
            }
          }

          @keyframes builder-orbit {
            to { transform: rotate(360deg); }
          }

          @media (prefers-reduced-motion: reduce) {
            .builder-card .spiral-plate,
            .builder-card .spiral-plate-stage::before,
            .builder-card .spiral-plate-stage::after {
              animation: none;
            }
          }
        `}</style>
        <div className="bowl-wrap">
          <div className="spiral-plate-stage">
            <img
              key={selected.at(-1) ?? "base"}
              className="spiral-plate"
              src={`${A}/${
                {
                  Avocado: "fc381.png",
                  "Roasted Chickpeas": "e892d.png",
                  "Watermelon Radish": "d6263.png",
                  "Heirloom Tomatoes": "bcd5a.png",
                  "Olive Oil": "52695.png",
                  "Lemon Vinaigrette Oil": "a5be4.png",
                  "Truffle oil": "e892d.png",
                }[selected.at(-1) ?? ""] ?? "ac023.png"
              }`}
              alt={
                selected.at(-1)
                  ? `Plate featuring ${selected.at(-1)}`
                  : "A bowl of fresh green salad"
              }
            />
          </div>
          <span>
            {selected.at(-1) ?? "Build your bowl"} · {selected.length} selected
          </span>
        </div>
        <div className="choices">
          <fieldset>
            <legend>Choose your toppings</legend>
            <div className="chip-grid">
              {ingredients.map(([name, image, color]) => (
                <button
                  className={`choice-chip ${color} ${
                    selected.includes(name) ? "selected" : ""
                  }`}
                  key={name}
                  onClick={() => toggle(name)}
                  aria-pressed={selected.includes(name)}
                >
                  <img src={`${A}/${image}`} alt="" />
                  {name}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Select your oil &amp; dressing</legend>
            <div className="chip-grid dressing-grid">
              {dressings.map(([name, image]) => (
                <button
                  className={`choice-chip yellow ${
                    selected.includes(name) ? "selected" : ""
                  }`}
                  key={name}
                  onClick={() => toggle(name)}
                  aria-pressed={selected.includes(name)}
                >
                  <img src={`${A}/${image}`} alt="" />
                  {name}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  )
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="menu-card">
      <img className="menu-image" src={`${A}/${item.image}`} alt={item.name} />
      <div className="menu-meta">
        <span>{item.category}</span>
        <strong>{item.price}</strong>
      </div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <div className="ingredient-dots" aria-label="Featured ingredients">
        {["04aef.png", "68592.png", "ba193.png"].map((image, index) => (
          <span key={image}>
            <img src={`${A}/${image}`} alt="" />
            <i>{index + 1}</i>
          </span>
        ))}
      </div>
    </article>
  )
}

function Menu() {
  const [expanded, setExpanded] = useState(false)
  return (
    <section className="menu-section section-wrap" id="menu">
      <SectionIntro
        eyebrow="Our Menu"
        title="Signature creations"
        body="Expertly crafted salads and bowls that showcase our culinary artistry. Or create your own masterpiece."
      />
      <div className="menu-grid">
        {menuItems.slice(0, expanded ? menuItems.length : 3).map((item) => (
          <MenuCard item={item} key={item.name} />
        ))}
      </div>
      <button
        className="button dark-outline"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "View Full Menu"}
      </button>
    </section>
  )
}

function Space() {
  return (
    <section className="space section-wrap" id="space">
      <SectionIntro
        eyebrow="Our Space"
        title="From daylight to candlelight"
        body="A dining environment designed to adapt to your mood. Bright and energizing by day, intimate and sophisticated by evening."
      />
      <div className="space-grid">
        <article className="space-card">
          <img
            src={`${A}/c7e03.png`}
            alt="The Salad Bar dining room in daylight"
          />
          <div>
            <h3>From daylight to candlelight</h3>
            <p>
              Natural light floods through floor-to-ceiling windows,
              illuminating blonde wood and white marble surfaces. A fresh,
              energizing space perfect for lunch meetings and casual gatherings.
            </p>
          </div>
        </article>
        <article className="space-card">
          <img
            src={`${A}/a1b3e.png`}
            alt="The Salad Bar dining room in the evening"
          />
          <div>
            <h3>Evening Ambience</h3>
            <p>
              As the sun sets, soft candlelight creates an intimate atmosphere.
              The same space transforms into a sophisticated evening
              destination, perfect for relaxed dinners and special occasions.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function GuestStories() {
  const rail = useRef<HTMLDivElement>(null)
  return (
    <section className="stories stories-original section-wrap">
      <style>{`
        .stories-original {
          position: relative;
          min-height: 1237px;
          padding: 123px 0 108px;
          overflow: hidden;
          background: white;
        }

        .stories-original .section-intro {
          position: relative;
          z-index: 3;
          width: min(971px, calc(100% - 40px));
          margin-bottom: 92px;
        }

        .stories-original .stories-rows {
          position: relative;
          display: grid;
          gap: 26px;
          width: 100%;
        }

        .stories-original .stories-row {
          width: 100%;
          overflow: hidden;
        }

        .stories-original .stories-track {
          display: flex;
          width: max-content;
          gap: 46px;
        }

        .stories-original .stories-row:first-child .stories-track {
          animation: stories-scroll-left 42s linear infinite;
        }

        .stories-original .stories-row:last-child .stories-track {
          animation: stories-scroll-right 42s linear infinite;
        }

        .stories-original .stories-track {
          will-change: transform;
        }

        .stories-original .stories-row:hover .stories-track {
          animation-play-state: paused;
        }

        @keyframes stories-scroll-left {
          from {
            transform: translateX(-90px);
          }
          to {
            transform: translateX(calc(-50% - 113px));
          }
        }

        @keyframes stories-scroll-right {
          from {
            transform: translateX(calc(-50% - 204px));
          }
          to {
            transform: translateX(-181px);
          }
        }

        .stories-original .original-quote-card {
          display: flex;
          flex: 0 0 461px;
          width: 461px;
          height: 270px;
          flex-direction: column;
          justify-content: space-between;
          padding: 27px;
          border: 1px solid #e6e6e6;
          border-radius: 15px;
          background: white;
        }

        .stories-original .original-quote-card > p {
          color: #1e1e1e;
          font-family: "DM Sans:Regular", sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 30px;
          letter-spacing: -0.8px;
          font-variation-settings: "opsz" 14;
        }

        .stories-original .original-quote-card > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stories-original .original-quote-card strong,
        .stories-original .original-quote-card small {
          display: block;
          font-family: "DM Sans:Medium", sans-serif;
          font-weight: 500;
          font-variation-settings: "opsz" 14;
        }

        .stories-original .original-quote-card strong {
          color: #1e1e1e;
          font-size: 20px;
          letter-spacing: -0.8px;
        }

        .stories-original .original-quote-card small {
          color: #adadad;
          font-size: 16px;
          letter-spacing: -0.64px;
        }

        .stories-original .original-quote-card img {
          width: 50px;
          height: 50px;
          border: 1px solid white;
          border-radius: 50%;
          object-fit: cover;
        }

        .stories-original .stories-edge {
          position: absolute;
          z-index: 2;
          top: 375px;
          bottom: 70px;
          width: min(24vw, 421px);
          pointer-events: none;
        }

        .stories-original .stories-edge.left {
          left: 0;
          background: linear-gradient(90deg, white 10%, rgb(255 255 255 / 86%) 45%, transparent 100%);
        }

        .stories-original .stories-edge.right {
          right: 0;
          background: linear-gradient(-90deg, white 10%, rgb(255 255 255 / 86%) 45%, transparent 100%);
        }

        @media (max-width: 700px) {
          .stories-original {
            min-height: auto;
            padding: 80px 0;
          }

          .stories-original .section-intro {
            margin-bottom: 56px;
          }

          .stories-original .stories-track {
            gap: 16px;
          }

          .stories-original .stories-row:first-child .stories-track {
            animation-name: stories-scroll-left-mobile;
          }

          .stories-original .stories-row:last-child .stories-track {
            animation-name: stories-scroll-right-mobile;
          }

          .stories-original .original-quote-card {
            flex-basis: min(82vw, 380px);
            width: min(82vw, 380px);
            height: 260px;
            padding: 24px;
          }

          .stories-original .original-quote-card > p {
            font-size: 17px;
            line-height: 25px;
          }

          .stories-original .stories-edge {
            top: 340px;
            bottom: 40px;
            width: 36px;
          }

          @keyframes stories-scroll-left-mobile {
            from {
              transform: translateX(-36px);
            }
            to {
              transform: translateX(calc(-50% - 44px));
            }
          }

          @keyframes stories-scroll-right-mobile {
            from {
              transform: translateX(calc(-50% - 124px));
            }
            to {
              transform: translateX(-116px);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stories-original .stories-row:first-child .stories-track {
            animation: none;
            transform: translateX(-90px);
          }

          .stories-original .stories-row:last-child .stories-track {
            animation: none;
            transform: translateX(-181px);
          }
        }
      `}</style>
      <SectionIntro
        eyebrow="Guest Stories"
        title="What our guests say"
        body="We’re proud to serve London’s most discerning diners. Here’s what they have to say about their experience."
      />
      <div className="stories-rows">
        {[0, 1].map((row) => (
          <div className="stories-row" key={row}>
            <div className="stories-track" ref={row === 0 ? rail : undefined}>
              {[...testimonials, ...testimonials].map(
                ([quote, name, role, avatar], index) => (
                  <article
                    className="original-quote-card"
                    key={`${row}-${name}-${index}`}
                  >
                    <p>{quote}</p>
                    <div>
                      <span>
                        <strong>{name}</strong>
                        <small>{role}</small>
                      </span>
                      <img src={`${A}/${avatar}`} alt="" />
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="stories-edge left" />
      <div className="stories-edge right" />
    </section>
  )
}

function Ready() {
  return (
    <section className="ready" id="ready">
      <img src={`${A}/8f308.png`} alt="" />
      <div className="ready-content">
        <h2>Ready to experience something fresh?</h2>
        <p>
          Join us today and discover why London&apos;s food lovers are choosing
          The Salad Bar for their daily wellness ritual.
        </p>
        <div>
          <button className="button cta" onClick={() => scrollTo("builder")}>
            Order Now <Arrow light />
          </button>
          <button
            className="button reserve"
            onClick={() =>
              alert("Table reservations open daily from 11am to 9pm.")
            }
          >
            Reserve a Table{" "}
            <img className="button-icon" src={`${A}/c7d02.svg`} alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const [email, setEmail] = useState("")
  const [joined, setJoined] = useState(false)
  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    if (email.trim()) setJoined(true)
  }
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <h2>The Salad Bar</h2>
          <p>
            London&apos;s premier destination for artistically crafted salads.
            Fresh ingredients, global inspiration, personalized for you.
          </p>
          <div className="socials">
            <a href="https://instagram.com" aria-label="Instagram">
              <img src={`${A}/5dc8d.svg`} alt="" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <img src={`${A}/8e9d8.svg`} alt="" />
            </a>
            <a href="https://x.com" aria-label="X">
              <img src={`${A}/fea10.svg`} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>Menu</h3>
            {[
              "Build Your Salad",
              "Signature Menu",
              "Seasonal Specials",
              "Catering",
            ].map((item) => (
              <button key={item} onClick={() => scrollTo("menu")}>
                {item}
              </button>
            ))}
          </div>
          <div>
            <h3>Company</h3>
            {["About Us", "Our Story", "Careers", "Press"].map((item) => (
              <button key={item} onClick={() => scrollTo("story")}>
                {item}
              </button>
            ))}
          </div>
          <div>
            <h3>Support</h3>
            {["Contact Us", "FAQs", "Delivery Info", "Gift Cards"].map(
              (item) => (
                <button key={item}>{item}</button>
              ),
            )}
          </div>
        </div>
        <div className="newsletter">
          <h3>Stay Fresh</h3>
          <p>
            {joined
              ? "Thank you — fresh updates are on their way."
              : "Subscribe for seasonal updates and exclusive offers."}
          </p>
          <form onSubmit={submit}>
            <label className="sr-only" htmlFor="email">
              Your email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Your Mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
      <div className="contact-row">
        <div>
          <img src={`${A}/66b5a.svg`} alt="" />
          <span>
            <strong>Location</strong>123 High Street, Mayfair
            <br />
            London, W1K 6TH
          </span>
        </div>
        <div>
          <img src={`${A}/0ed45.svg`} alt="" />
          <span>
            <strong>Phone</strong>+44 20 7123 4567
          </span>
        </div>
        <div>
          <img src={`${A}/1e6fa.svg`} alt="" />
          <span>
            <strong>Email</strong>hello@thesaladbar.london
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 The Salad Bar London. All rights reserved.</span>
        <span>
          Privacy Policy &nbsp;&nbsp; Terms of Service &nbsp;&nbsp;
          Accessibility
        </span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <main>
      <Hero />
      <Story />
      <Builder />
      <Menu />
      <Space />
      <GuestStories />
      <Ready />
      <Footer />
    </main>
  )
}
