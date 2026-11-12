import { useMemo, useState } from 'react'

type IconName =
  | 'plane'
  | 'pin'
  | 'clock'
  | 'wallet'
  | 'heart'
  | 'arrow'
  | 'search'
  | 'sparkle'
  | 'train'
  | 'shield'
  | 'sliders'
  | 'check'
  | 'utensils'
  | 'camera'
  | 'shopping'
  | 'leaf'
  | 'landmark'
  | 'menu'
  | 'close'

function Icon({ name, size = 20, className = '' }: { name: IconName; size?: number; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    plane: <><path d="m3 11 18-7-7 18-3-8-8-3Z" /><path d="m11 14 4-4" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    wallet: <><path d="M4 6.5h14a2 2 0 0 1 2 2v10H4a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h13" /><path d="M16 11h4v4h-4a2 2 0 0 1 0-4Z" /></>,
    heart: <path d="M20.8 5.8a5.4 5.4 0 0 0-7.6 0L12 7l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.6a5.4 5.4 0 0 0 0-7.6Z" />,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    sparkle: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
    train: <><rect x="5" y="3" width="14" height="15" rx="3" /><path d="M8 21l2-3m6 0 2 3M5 10h14M9 14h.01M15 14h.01" /></>,
    shield: <><path d="M12 3 4.5 6v5.5c0 4.5 3.2 7.8 7.5 9.5 4.3-1.7 7.5-5 7.5-9.5V6L12 3Z" /><path d="m9 12 2 2 4-4" /></>,
    sliders: <><path d="M4 7h10m4 0h2M4 17h2m4 0h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    utensils: <><path d="M7 3v7m-3-7v5a3 3 0 0 0 6 0V3M7 11v10M15 3v18M15 3c3 1 5 4 5 8h-5" /></>,
    camera: <><rect x="3" y="6" width="18" height="14" rx="2" /><path d="m8 6 1-3h6l1 3" /><circle cx="12" cy="13" r="4" /></>,
    shopping: <><path d="M6 8h12l1 13H5L6 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    leaf: <><path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16Z" /><path d="M4 21c3-5 7-8 12-11" /></>,
    landmark: <><path d="m3 9 9-6 9 6M5 10h14M6 10v8m4-8v8m4-8v8m4-8v8M3 21h18" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  }
  return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

const photos = {
  temple: 'https://images.unsplash.com/photo-1553292770-c3d14b814242?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000',
  ramen: 'https://images.unsplash.com/photo-1632709810780-b5a4343cebec?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000',
  tower: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000',
  city: 'https://images.unsplash.com/photo-1604928141064-207cea6f571f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000',
}

type Activity = {
  id: number
  title: string
  category: string
  duration: string
  minutes: number
  price: string
  cost: number
  distance: string
  rating: string
  image: string
  description: string
  inside?: boolean
}

const activities: Activity[] = [
  { id: 1, title: 'Senso-ji Temple & Nakamise', category: 'Sightseeing', duration: '1 hr 30 min', minutes: 90, price: 'Free', cost: 0, distance: '35 min from HND', rating: '4.8', image: photos.temple, description: 'Walk through Tokyo’s oldest temple and browse the lantern-lit market street.' },
  { id: 2, title: 'Ramen at Setagaya', category: 'Food', duration: '45 min', minutes: 45, price: '$$', cost: 18, distance: 'Inside Terminal 3', rating: '4.7', image: photos.ramen, description: 'A beloved bowl of rich shoyu ramen, conveniently located before security.', inside: true },
  { id: 3, title: 'Tokyo Tower Observatory', category: 'Photography', duration: '1 hr', minutes: 60, price: '$$', cost: 22, distance: '28 min from HND', rating: '4.6', image: photos.tower, description: 'Take in panoramic city views from one of Tokyo’s most iconic landmarks.' },
  { id: 4, title: 'Haneda Airport Onsen', category: 'Relaxation', duration: '1 hr 30 min', minutes: 90, price: '$$$', cost: 32, distance: 'Inside Terminal 3', rating: '4.5', image: photos.city, description: 'Reset between flights with a rooftop hot spring and runway views.', inside: true },
]

const interests = [
  ['Sightseeing', 'landmark'],
  ['Food', 'utensils'],
  ['Shopping', 'shopping'],
  ['Photography', 'camera'],
  ['Relaxation', 'leaf'],
] as const

function Logo() {
  return <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Side Quest home">
    <span className="logo-mark"><Icon name="plane" size={19} /></span>
    <span>Side<span>Quest</span></span>
  </button>
}

function App() {
  const [page, setPage] = useState<'home' | 'explore' | 'itinerary' | 'saved' | 'about'>('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedInterests, setSelectedInterests] = useState(['Sightseeing', 'Food', 'Photography'])
  const [favorites, setFavorites] = useState<number[]>([3])
  const [duration, setDuration] = useState('6 hours')
  const [airport, setAirport] = useState('HND')
  const [budget, setBudget] = useState('$100')
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => activities.filter(a =>
    (category === 'All' || a.category === category) &&
    a.title.toLowerCase().includes(search.toLowerCase())
  ), [category, search])

  function navigate(next: typeof page) {
    setPage(next)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function toggleFavorite(id: number) {
    setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id])
  }

  function Header() {
    const links: [typeof page, string][] = [['home', 'Plan a layover'], ['explore', 'Explore'], ['itinerary', 'My itinerary'], ['saved', 'Saved']]
    return <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <nav className={mobileOpen ? 'nav-links open' : 'nav-links'}>
          {links.map(([key, label]) => <button key={key} className={page === key ? 'active' : ''} onClick={() => navigate(key)}>{label}{key === 'saved' && favorites.length > 0 && <span className="nav-count">{favorites.length}</span>}</button>)}
          <button className={page === 'about' ? 'active' : ''} onClick={() => navigate('about')}>About</button>
        </nav>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}><Icon name={mobileOpen ? 'close' : 'menu'} /></button>
      </div>
    </header>
  }

  function Planner() {
    return <section className="planner-card">
      <div className="planner-heading">
        <div><span className="eyebrow"><Icon name="sparkle" size={14} /> SMART LAYOVER PLANNER</span><h2>Where’s your next stop?</h2></div>
        <span className="step-label">STEP 1 OF 2</span>
      </div>
      <div className="planner-grid">
        <label className="input-group wide">
          <span><Icon name="pin" size={15} /> LAYOVER AIRPORT</span>
          <div className="airport-select">
            <span className="flag">JP</span>
            <select value={airport} onChange={e => setAirport(e.target.value)}>
              <option value="HND">Tokyo Haneda (HND)</option>
              <option value="NRT">Tokyo Narita (NRT)</option>
              <option value="SIN">Singapore Changi (SIN)</option>
              <option value="LHR">London Heathrow (LHR)</option>
              <option value="AMS">Amsterdam Schiphol (AMS)</option>
            </select>
          </div>
        </label>
        <label className="input-group">
          <span><Icon name="clock" size={15} /> TOTAL LAYOVER</span>
          <select value={duration} onChange={e => setDuration(e.target.value)}><option>4 hours</option><option>6 hours</option><option>8 hours</option><option>12 hours</option></select>
        </label>
        <label className="input-group">
          <span><Icon name="plane" size={15} /> DEPARTURE GATE</span>
          <input defaultValue="T3 · Gate 112" aria-label="Departure gate" />
        </label>
        <label className="input-group">
          <span><Icon name="wallet" size={15} /> BUDGET</span>
          <select value={budget} onChange={e => setBudget(e.target.value)}><option>$50</option><option>$100</option><option>$200</option><option>No limit</option></select>
        </label>
      </div>
      <div className="interest-row">
        <div><span className="field-label">WHAT ARE YOU INTO?</span><p>Pick as many as you like</p></div>
        <div className="interest-pills">
          {interests.map(([label, icon]) => {
            const selected = selectedInterests.includes(label)
            return <button key={label} className={selected ? 'interest active' : 'interest'} onClick={() => setSelectedInterests(curr => selected ? curr.filter(x => x !== label) : [...curr, label])}><Icon name={icon} size={17} />{label}{selected && <Icon name="check" size={14} />}</button>
          })}
        </div>
        <button className="primary-btn" onClick={() => navigate('explore')}>Find my side quests <Icon name="arrow" size={18} /></button>
      </div>
    </section>
  }

  function ActivityCard({ activity }: { activity: Activity }) {
    const favorite = favorites.includes(activity.id)
    return <article className="activity-card">
      <div className="activity-image">
        <img src={activity.image} alt={activity.title} />
        <span className="match-badge">{activity.id === 1 ? '98' : activity.id === 2 ? '94' : activity.id === 3 ? '91' : '88'}% match</span>
        <button className={favorite ? 'heart-btn saved' : 'heart-btn'} aria-label={favorite ? `Remove ${activity.title} from saved` : `Save ${activity.title}`} onClick={() => toggleFavorite(activity.id)}><Icon name="heart" size={19} /></button>
      </div>
      <div className="activity-body">
        <div className="activity-meta"><span>{activity.category}</span><b>★ {activity.rating}</b></div>
        <h3>{activity.title}</h3>
        <p>{activity.description}</p>
        <div className="activity-stats"><span><Icon name="clock" size={15} /> {activity.duration}</span><span><Icon name="wallet" size={15} /> {activity.price}</span><span><Icon name={activity.inside ? 'plane' : 'train'} size={15} /> {activity.distance}</span></div>
      </div>
    </article>
  }

  function MiniItinerary() {
    return <aside className="mini-itinerary">
      <div className="mini-top">
        <div><span className="eyebrow"><Icon name="sparkle" size={13} /> BEST FIT</span><h3>Your ideal {duration.toLowerCase()}</h3></div>
        <span className="safe"><Icon name="shield" size={13} /> SAFE TIMING</span>
      </div>
      <div className="time-budget"><div><small>AVAILABLE ADVENTURE TIME</small><strong>3h 35m</strong></div><div className="time-ring"><span>2h 25m</span><small>buffer</small></div></div>
      <div className="timeline">
        <div className="timeline-item transport"><time>10:40</time><span className="dot"><Icon name="train" size={13} /></span><div><b>Train to Asakusa</b><small>48 min · ¥690</small></div></div>
        <div className="timeline-item"><time>11:30</time><span className="dot coral"></span><div><b>Senso-ji & Nakamise</b><small>1 hr 30 min · Free</small></div></div>
        <div className="timeline-item"><time>13:00</time><span className="dot yellow"></span><div><b>Quick ramen lunch</b><small>45 min · est. $18</small></div></div>
        <div className="timeline-item transport"><time>13:50</time><span className="dot"><Icon name="train" size={13} /></span><div><b>Return to Haneda</b><small>50 min · arrives 2h early</small></div></div>
      </div>
      <div className="schedule-note"><Icon name="shield" size={19} /><div><b>You’ll be back with time to spare.</b><span>Includes security and a 30 min safety buffer.</span></div></div>
      <button className="dark-btn" onClick={() => navigate('itinerary')}>View full itinerary <Icon name="arrow" size={17} /></button>
    </aside>
  }

  function Home() {
    return <>
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-kicker"><span></span> MAKE THE IN-BETWEEN COUNT</span>
          <h1>Your layover.<br />Your next <em>adventure.</em></h1>
          <p>Turn spare hours into stories worth telling. Side Quest finds experiences that fit your schedule—without risking your flight.</p>
        </div>
        <div className="hero-stamp"><Icon name="plane" size={21} /><span>BUILT FOR<br />THE CURIOUS</span></div>
      </section>
      <Planner />
      <section className="results-preview page-section">
        <div className="section-heading">
          <div><span className="section-kicker">CURATED FOR YOUR STOP</span><h2>A little Tokyo, perfectly timed.</h2><p>Based on your interests, budget, and the time you have.</p></div>
          <button className="text-link" onClick={() => navigate('explore')}>See all 18 activities <Icon name="arrow" size={17} /></button>
        </div>
        <div className="content-grid">
          <div className="activity-list">{activities.slice(0, 3).map(activity => <ActivityCard key={activity.id} activity={activity} />)}</div>
          <MiniItinerary />
        </div>
      </section>
    </>
  }

  function Explore() {
    return <main className="inner-page">
      <div className="inner-hero"><span className="section-kicker">TOKYO · HANEDA</span><h1>Find your side quest.</h1><p>Experiences that work with your clock, not against it.</p></div>
      <div className="toolbar">
        <label className="search-box"><Icon name="search" size={19} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search activities" /></label>
        <div className="filter-pills">{['All', 'Sightseeing', 'Food', 'Photography', 'Relaxation'].map(item => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <button className="filter-btn"><Icon name="sliders" size={17} /> Price & time</button>
      </div>
      <div className="explore-grid">{filtered.map(activity => <ActivityCard key={activity.id} activity={activity} />)}</div>
      {filtered.length === 0 && <div className="empty-state"><Icon name="search" size={32} /><h3>No side quests found</h3><p>Try a broader search or another category.</p></div>}
    </main>
  }

  function Itinerary() {
    return <main className="inner-page">
      <div className="itinerary-header"><div><span className="section-kicker">MY ITINERARY · TODAY</span><h1>Tokyo in a few good hours.</h1><p>Haneda Terminal 3 · Departing 16:55 from Gate 112</p></div><div className="countdown"><small>LEAVE FOR AIRPORT IN</small><strong>2:48:16</strong><span><span></span> On schedule</span></div></div>
      <div className="itinerary-layout">
        <section className="day-plan">
          <div className="plan-summary"><div><Icon name="clock" /><span><small>LAYOVER</small><b>{duration}</b></span></div><div><Icon name="wallet" /><span><small>EST. TOTAL</small><b>$34</b></span></div><div><Icon name="shield" /><span><small>AIRPORT BUFFER</small><b>2h 25m</b></span></div></div>
          <h2>Wednesday, 14 August</h2>
          {[
            ['10:40', '11:28', 'train', 'Airport express to Asakusa', 'Haneda Terminal 3 → Asakusa Station', '$5'],
            ['11:30', '13:00', 'landmark', 'Senso-ji Temple & Nakamise', 'Explore Tokyo’s oldest temple and market street', 'Free'],
            ['13:05', '13:50', 'utensils', 'Ramen lunch', 'Local shoyu ramen near Asakusa Station', '$18'],
            ['13:55', '14:45', 'train', 'Return to Haneda Airport', 'Arrive before the recommended check-in time', '$5'],
          ].map((row, i) => <div className="plan-row" key={row[0]}>
            <div className="plan-time"><b>{row[0]}</b><span>{row[1]}</span></div>
            <span className={`plan-icon p${i}`}><Icon name={row[2] as IconName} size={18} /></span>
            <div className="plan-detail"><h3>{row[3]}</h3><p>{row[4]}</p><small>{i === 0 || i === 3 ? '48–50 min' : i === 1 ? '1 hr 30 min' : '45 min'} · {row[5]}</small></div>
          </div>)}
        </section>
        <aside className="travel-alert">
          <Icon name="shield" size={28} />
          <span className="eyebrow">FLIGHT-SAFE PLAN</span>
          <h2>We’re watching the clock.</h2>
          <p>Your return trip, security estimate, and walking time to Gate 112 are already included.</p>
          <div className="alert-row"><span>Back at HND</span><b>14:45</b></div><div className="alert-row"><span>Boarding begins</span><b>16:15</b></div>
          <div className="alert-warning"><Icon name="clock" size={18} /><span><b>We’ll alert you at 13:40</b> if it’s time to wrap up early.</span></div>
        </aside>
      </div>
    </main>
  }

  function Saved() {
    const saved = activities.filter(a => favorites.includes(a.id))
    return <main className="inner-page"><div className="inner-hero"><span className="section-kicker">YOUR COLLECTION</span><h1>Saved for later.</h1><p>Keep the places that caught your eye close at hand.</p></div>
      {saved.length ? <div className="explore-grid">{saved.map(activity => <ActivityCard key={activity.id} activity={activity} />)}</div> : <div className="empty-state"><Icon name="heart" size={36} /><h3>No saved side quests yet</h3><p>Tap the heart on any activity to keep it here.</p><button className="primary-btn" onClick={() => navigate('explore')}>Explore activities <Icon name="arrow" size={17} /></button></div>}
    </main>
  }

  function About() {
    return <main className="about-page">
      <div className="about-photo"><img src={photos.tower} alt="Tokyo skyline at dusk" /><div className="photo-label">TOKYO, JAPAN<br /><span>35° 40′ N · 139° 45′ E</span></div></div>
      <div className="about-copy"><span className="section-kicker">WHY SIDE QUEST</span><h1>Great trips can happen <em>between</em> flights.</h1><p>Airports don’t have to be dead time. Side Quest turns the hours between flights into small, memorable adventures—planned around the one thing you can’t miss: your departure.</p><p>Every recommendation accounts for real travel time, airport security, your gate, and a comfortable safety buffer. So you can explore with confidence.</p>
        <div className="about-values"><div><Icon name="clock" /><h3>Time-aware</h3><p>Plans designed backwards from boarding.</p></div><div><Icon name="sparkle" /><h3>Made for you</h3><p>Matched to your mood and budget.</p></div><div><Icon name="shield" /><h3>Flight-safe</h3><p>Smart buffers keep you on schedule.</p></div></div>
        <button className="primary-btn" onClick={() => navigate('home')}>Plan your layover <Icon name="arrow" size={17} /></button>
      </div>
    </main>
  }

  return <div className="app"><Header />{page === 'home' && <Home />}{page === 'explore' && <Explore />}{page === 'itinerary' && <Itinerary />}{page === 'saved' && <Saved />}{page === 'about' && <About />}
    <footer><Logo /><p>Make the in-between count.</p><span>© 2025 Side Quest</span></footer>
  </div>
}

export default App
