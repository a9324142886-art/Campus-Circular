import './App.css'

const stats = [
  { value: '12k+', label: 'students connected' },
  { value: '2.4k', label: 'items shared this month' },
  { value: '98%', label: 'return rate' },
]

const features = [
  {
    title: 'Borrow essentials',
    text: 'Find calculators, chargers, books, and dorm gear from students nearby.',
  },
  {
    title: 'Share with trust',
    text: 'List items securely, set pickup windows, and build a campus reputation.',
  },
  {
    title: 'Save money',
    text: 'Reduce waste and costs by reusing what your campus already has.',
  },
]

function App() {
  return (
    <div className="campus-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">C</div>
          <span>Campus Circular</span>
        </div>
        <nav className="nav">
          <a href="#discover">Discover</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </nav>
        <button className="nav-button" type="button">
          Join now
        </button>
      </header>

      <main className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Built for campus life</span>
          <h1>Share what you have. Borrow what you need.</h1>
          <p>
            Campus Circular helps students borrow and lend everyday essentials,
            saving money, reducing waste, and making campus life easier.
          </p>

          <div className="cta-row">
            <button type="button" className="primary-btn">
              Explore resources
            </button>
            <button type="button" className="secondary-btn">
              List an item
            </button>
          </div>

          <div className="stats-row">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-box">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase" aria-label="Platform preview">
          <div className="card card-top">
            <div className="icon-box">
              <span className="atom" aria-hidden="true" />
            </div>
          </div>
          <div className="card card-bottom">
            <div className="mini-icon" aria-hidden="true">
              <span className="refresh" />
            </div>
          </div>
        </div>
      </main>

      <section className="feature-section" id="how-it-works">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div className="feature-icon" aria-hidden="true" />
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default App
