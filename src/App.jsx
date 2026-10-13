import { useState } from 'react'
import './App.css'

const Icon = ({ name, size = 22 }) => {
  const paths = {
    truck: <><path d="M3 6h12v12H3z"/><path d="M15 10h4l3 4v4h-7z"/><circle cx="7.5" cy="19" r="2"/><circle cx="18.5" cy="19" r="2"/></>,
    arrow: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
    package: <><path d="m12 3 9 5-9 5-9-5z"/><path d="M3 8v9l9 5 9-5V8"/><path d="M12 13v9"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m18 6-12 12M6 6l12 12"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    users: <><circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2"/><path d="M16 4a4 4 0 0 1 0 8M19 15a6 6 0 0 1 3 5v1"/></>,
    chart: <><path d="M3 3v18h18"/><path d="m7 14 4-4 4 3 5-7"/></>,
    globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></>,
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const services = [
  {
    icon: 'package',
    number: '01',
    title: 'Post a move',
    text: 'Tell us what you need moved, where it needs to go, and when.',
    action: 'Start a request',
    href: '#get-started',
  },
  {
    icon: 'truck',
    number: '02',
    title: 'Find transport jobs',
    text: 'Discover customer requests, submit offers and grow your transport business.',
    action: 'Explore opportunities',
    href: '#transporters',
  },
  {
    icon: 'pin',
    number: '03',
    title: 'Track a delivery',
    text: 'Access your booking and follow available delivery updates.',
    action: 'View tracking options',
    href: '#tracking',
  },
]

const benefits = [
  {
    icon: 'users',
    title: 'Choice that works for you',
    text: 'Compare transport offers and choose the option that suits your needs.',
  },
  {
    icon: 'shield',
    title: 'Confidence at every step',
    text: 'Verification and delivery confirmation features help build trust.',
  },
  {
    icon: 'clock',
    title: 'Your move, your schedule',
    text: 'Organise transport requests and manage bookings in one place.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [role, setRole] = useState('customer')
  const [notice, setNotice] = useState('')

  const closeMenu = () => setMenuOpen(false)

  const showNotice = (message) => {
    setNotice(message)
    closeMenu()
  }

  return (
    <div className="app-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        A smarter way to move goods
        <span className="announcement-divider">/</span>
        Built for customers and transporters
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="MOVVAL home" onClick={closeMenu}>
          <span className="brand-mark"><Icon name="truck" size={25} /></span>
          <span className="brand-copy">
            <strong>MOVVAL<span>.</span></strong>
            <small>MOVE WITH CONFIDENCE</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={25} />
        </button>

        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#services" onClick={closeMenu}>How it works</a>
          <a href="#transporters" onClick={closeMenu}>For transporters</a>
          <a href="#plans" onClick={closeMenu}>Plans</a>
          <a href="#tracking" onClick={closeMenu}>Track delivery</a>
          <button className="nav-cta" onClick={() => showNotice('Account sign-in will be connected when Firebase Authentication is integrated.')}>
            Sign in <Icon name="arrow" size={16} />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              YOUR GOODS. YOUR JOURNEY. YOUR CHOICE.
            </div>

            <h1>
              Moving goods.<br />
              <span>Moving business</span><br />
              forward.
            </h1>

            <p className="hero-description">
              Connect with transporters, compare offers and organise
              deliveries through one smarter marketplace.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#get-started">
                Get started <Icon name="arrow" size={18} />
              </a>
              <a className="button button-secondary" href="#services">
                Explore MOVVAL
              </a>
            </div>

            <div className="hero-trust">
              <span className="trust-icon"><Icon name="shield" size={19} /></span>
              <span>Designed for transparent offers and more confident bookings.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="MOVVAL transport marketplace illustration">
            <div className="visual-label visual-label-top">
              <span className="live-dot" />
              THE SMARTER WAY TO MOVE
            </div>

            <div className="route-card">
              <div className="route-heading">
                <span>YOUR NEXT MOVE</span>
                <span className="route-badge">MOVVAL</span>
              </div>

              <div className="route-stops">
                <div className="route-stop">
                  <span className="stop-icon stop-start" />
                  <div>
                    <small>COLLECTION</small>
                    <strong>Your starting point</strong>
                  </div>
                </div>
                <div className="route-connector" />
                <div className="route-stop">
                  <span className="stop-icon stop-end"><Icon name="pin" size={15} /></span>
                  <div>
                    <small>DELIVERY</small>
                    <strong>Your destination</strong>
                  </div>
                </div>
              </div>

              <div className="route-footer">
                <div>
                  <span className="mini-icon"><Icon name="package" size={17} /></span>
                  <span>Goods to move</span>
                </div>
                <span className="route-arrow"><Icon name="arrow" size={20} /></span>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon green-icon"><Icon name="check" size={18} /></span>
              <span><strong>More choice</strong><small>Compare offers</small></span>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon blue-icon"><Icon name="truck" size={19} /></span>
              <span><strong>One marketplace</strong><small>Customers & transporters</small></span>
            </div>

            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
          </div>

          <div className="hero-bottom">
            <span>ONE MARKETPLACE</span>
            <span className="hero-bottom-line" />
            <span>MORE TRANSPORT CHOICE</span>
            <span className="hero-bottom-line" />
            <span>BETTER CONNECTIONS</span>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-dark">
                <span className="eyebrow-line" />
                THE MOVVAL MARKETPLACE
              </div>
              <h2>What brings you <span>here?</span></h2>
            </div>
            <p>
              Whether you're moving goods or looking for your next job,
              there's a place for you on MOVVAL.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon"><Icon name={service.icon} size={25} /></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={service.href} className="text-link">
                  {service.action} <Icon name="arrow" size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="audience-section" id="get-started">
          <div className="audience-inner">
            <div className="audience-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                LET'S GET MOVING
              </div>
              <h2>Start with what<br />you need to <span>do.</span></h2>
              <p>Choose your path. We'll help you find the right tools for your journey.</p>
            </div>

            <div className="audience-panel">
              <div className="role-switch" role="group" aria-label="Choose your role">
                <button
                  className={role === 'customer' ? 'role-active' : ''}
                  onClick={() => setRole('customer')}
                >
                  I'm a customer
                </button>
                <button
                  className={role === 'transporter' ? 'role-active' : ''}
                  onClick={() => setRole('transporter')}
                >
                  I'm a transporter
                </button>
              </div>

              {role === 'customer' ? (
                <div className="role-content">
                  <span className="role-icon"><Icon name="package" size={27} /></span>
                  <h3>Let's move your goods.</h3>
                  <p>Describe your move and connect with transporters who can make an offer.</p>
                  <button className="button button-primary full-button" onClick={() => showNotice('Posting a move will be available when customer accounts and marketplace requests are connected.')}>
                    Post a move <Icon name="arrow" size={18} />
                  </button>
                </div>
              ) : (
                <div className="role-content">
                  <span className="role-icon"><Icon name="truck" size={27} /></span>
                  <h3>Let's grow your business.</h3>
                  <p>Explore customer requests, submit competitive offers and manage your bookings.</p>
                  <button className="button button-primary full-button" onClick={() => showNotice('The transporter workspace will be connected to the existing marketplace backend.')}>
                    Explore transport jobs <Icon name="arrow" size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="benefits-section section-wrap" id="tracking">
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-dark">
                <span className="eyebrow-line" />
                BUILT AROUND YOUR MOVE
              </div>
              <h2>Transport with more <span>confidence.</span></h2>
            </div>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <article className="benefit" key={benefit.title}>
                <span className="benefit-icon"><Icon name={benefit.icon} size={24} /></span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="plans-section" id="plans">
          <div className="section-wrap">
            <div className="plans-heading">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                ROOM TO GROW
              </div>
              <h2>More ways to move <span>your business forward.</span></h2>
              <p>Start with essential marketplace tools. Upgrade when your business needs more.</p>
            </div>

            <div className="plans-grid">
              <article className="plan-card">
                <span className="plan-label">GET STARTED</span>
                <h3>MOVVAL <span>FREE</span></h3>
                <p>Essential tools to join the marketplace.</p>
                <ul>
                  <li><Icon name="check" size={17} /> Create a marketplace profile</li>
                  <li><Icon name="check" size={17} /> Access core marketplace features</li>
                  <li><Icon name="check" size={17} /> Manage your available bookings</li>
                </ul>
                <a className="plan-link" href="#get-started">Explore free access <Icon name="arrow" size={17} /></a>
              </article>

              <article className="plan-card plan-featured">
                <span className="plan-label plan-label-featured">FOR INDEPENDENT OPERATORS</span>
                <h3>MOVVAL <span>PRO</span></h3>
                <p>More tools for transporters ready to grow.</p>
                <ul>
                  <li><Icon name="check" size={17} /> Enhanced business insights</li>
                  <li><Icon name="check" size={17} /> Advanced job-management tools</li>
                  <li><Icon name="check" size={17} /> Performance reporting</li>
                </ul>
                <button className="plan-link" onClick={() => showNotice('MOVVAL PRO pricing and entitlements will be finalised before subscriptions launch.')}>Discover PRO <Icon name="arrow" size={17} /></button>
              </article>

              <article className="plan-card">
                <span className="plan-label">FOR GROWING FLEETS</span>
                <h3>MOVVAL <span>BUSINESS</span></h3>
                <p>Organised tools for transport companies.</p>
                <ul>
                  <li><Icon name="check" size={17} /> Centralised booking management</li>
                  <li><Icon name="check" size={17} /> Fleet and driver workflows</li>
                  <li><Icon name="check" size={17} /> Business-level reporting</li>
                </ul>
                <button className="plan-link" onClick={() => showNotice('MOVVAL BUSINESS features and pricing will be confirmed before launch.')}>Explore Business <Icon name="arrow" size={17} /></button>
              </article>
            </div>
            <p className="plans-note">Premium features and pricing are subject to final product configuration. No subscription is being charged on this preview.</p>
          </div>
        </section>

        <section className="final-cta section-wrap">
          <div className="cta-symbol"><Icon name="globe" size={29} /></div>
          <div>
            <h2>Your next move starts here.</h2>
            <p>Connect your goods, your transport and your next opportunity.</p>
          </div>
          <a className="button button-primary" href="#get-started">Get started <Icon name="arrow" size={18} /></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><Icon name="truck" size={23} /></span>
          <span className="brand-copy">
            <strong>MOVVAL<span>.</span></strong>
            <small>MOVE WITH CONFIDENCE</small>
          </span>
        </a>
        <p>Connecting customers and transporters.</p>
        <span className="footer-copy">© {new Date().getFullYear()} MOVVAL. All rights reserved.</span>
      </footer>

      {notice && (
        <div className="notice-backdrop" role="presentation" onClick={() => setNotice('')}>
          <div className="notice-dialog" role="dialog" aria-modal="true" aria-label="MOVVAL information" onClick={(event) => event.stopPropagation()}>
            <span className="notice-icon"><Icon name="truck" size={25} /></span>
            <h3>Coming up on MOVVAL</h3>
            <p>{notice}</p>
            <button className="button button-primary full-button" onClick={() => setNotice('')}>Got it</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
