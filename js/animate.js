function animate() {
  const animateElements = document.querySelectorAll('.animate')

  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('show')
    }, index * 150)
  });
}

function enhanceHomeHero() {
  const hero = document.querySelector('section.relative.h-screen')
  if (!hero) return

  const map = hero.querySelector('.world_map')
  if (map) {
    map.classList.add('home-hero-map')
    applyHomeMapBackground(map)
  }

  if (!hero.querySelector('.home-network-pulse')) {
    const pulse = document.createElement('span')
    pulse.className = 'home-network-pulse'
    pulse.setAttribute('aria-hidden', 'true')
    hero.appendChild(pulse)
  }

  if (!hero.querySelector('.home-connection-lines')) {
    const lines = document.createElement('div')
    lines.className = 'home-connection-lines'
    lines.setAttribute('aria-hidden', 'true')
    lines.innerHTML = '<span></span><span></span><span></span><span></span><i></i><i></i><i></i><i></i>'
    hero.appendChild(lines)
  }

  const title = [...hero.querySelectorAll('p')].find((element) =>
    element.textContent.trim().toLowerCase().includes('disruptive consultancy')
  )
  if (title) {
    title.textContent = 'DISRUPTIVE CONSULTANCY SERVICES'
    title.classList.add('home-hero-title')
    title.parentElement.classList.add('home-hero-title-block')
  }

  const welcome = [...hero.querySelectorAll('p')].find((element) =>
    element.textContent.trim().toLowerCase() === 'welcome to'
  )
  if (welcome) {
    welcome.classList.add('home-hero-welcome')
    welcome.parentElement.classList.add('home-hero-welcome-block')
  }

  const tagline = [...hero.querySelectorAll('p')].find((element) =>
    element.textContent.includes('Transforming Ideas into Impact')
  )
  if (tagline) tagline.classList.add('home-hero-tagline')

  const brand = document.querySelector('header a[href="/"]')
  const header = document.querySelector('header')
  if (header) header.classList.add('home-page-header')
  if (brand) {
    brand.classList.add('home-brand')
    brand.setAttribute('aria-label', 'Return to the home page')
  }

  if (!document.getElementById('home-hero-enhancements')) {
    const style = document.createElement('style')
    style.id = 'home-hero-enhancements'
    style.textContent = `
      html:has(.home-page-header), body:has(.home-page-header) { overflow-x: hidden !important; }
      header.home-page-header { background: rgba(255, 255, 255, .92) !important; border-bottom: 1px solid rgba(16, 42, 67, .16) !important; box-shadow: 0 2px 14px rgba(16, 42, 67, .08); color: #102a43 !important; }
      header.home-page-header > div { max-width: none !important; padding-left: 3.5vw; padding-right: 3.5vw; }
      header.home-page-header > div > div { display: flex; justify-content: space-between; }
      header.home-page-header .home-brand { align-items: center; color: #102a43 !important; display: flex; font-size: 1rem; gap: .45rem; letter-spacing: .02em; text-shadow: none; transition: color .25s ease, transform .25s ease; }
      header.home-page-header .home-brand:hover { color: #b77908 !important; transform: translateY(-1px); }
      header.home-page-header nav { position: static !important; transform: none !important; }
      header.home-page-header nav a { color: #102a43 !important; }
      header.home-page-header nav a:hover { background: rgba(245, 185, 66, .18) !important; color: #102a43 !important; }
      header.home-page-header nav a.bg-black, header.home-page-header nav a.bg-white { background: #f5b942 !important; color: #102a43 !important; }
      .world_map.home-hero-map { background-image: url('/new_world_map.png') !important; background-color: #fff !important; background-position: 78% center !important; background-size: auto 100% !important; background-repeat: no-repeat !important; opacity: 1 !important; }
      .home-hero-map { filter: none !important; transform-origin: center; }
      .home-hero-welcome-block, .home-hero-title-block { left: 4vw; max-width: min(34rem, 35vw); position: absolute !important; text-align: left !important; z-index: 3; }
      .home-hero-welcome-block { top: 38%; }
      .home-hero-title-block { top: 45%; }
      .home-hero-welcome-block p, .home-hero-title-block p { text-align: left !important; }
      .home-hero-welcome { font-size: 1.35rem; font-weight: 600; }
      .home-hero-title-block { background: rgba(255, 255, 255, .9); border-left: 4px solid #f5b942; border-radius: 0 8px 8px 0; padding: 1.25rem 1.5rem 1.5rem; }
      .home-hero-title { font-size: clamp(1.8rem, 3vw, 3.5rem) !important; letter-spacing: .04em !important; line-height: 1.02; max-width: 100%; overflow-wrap: normal; word-break: normal; }
      .home-hero-tagline { font-size: 1.05rem; letter-spacing: .12em; margin-top: 1rem; }
      .home-network-pulse { animation: home-pulse-travel 5s linear infinite; border: 2px solid rgba(245, 158, 11, .72); border-radius: 50%; height: 9px; left: 50%; pointer-events: none; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 9px; z-index: 1; }
      .home-network-pulse::before, .home-network-pulse::after { border: 1px solid rgba(245, 158, 11, .55); border-radius: 50%; content: ''; inset: -18px; position: absolute; }
      .home-network-pulse::after { animation: home-pulse-ring 2.5s ease-out infinite; inset: -42px; }
      .home-connection-lines { inset: 0; pointer-events: none; position: absolute; z-index: 2; }
      .home-connection-lines span { animation: home-route 4s ease-in-out infinite; border-top: 2px solid rgba(245, 185, 66, .9); border-radius: 50%; height: 15%; position: absolute; transform: rotate(-18deg); width: 32%; }
      .home-connection-lines span:nth-child(1) { left: 48%; top: 35%; }
      .home-connection-lines span:nth-child(2) { left: 58%; top: 46%; animation-delay: 1s; transform: rotate(12deg); }
      .home-connection-lines span:nth-child(3) { left: 53%; top: 57%; animation-delay: 2s; transform: rotate(-8deg); }
      .home-connection-lines span:nth-child(4) { left: 68%; top: 32%; animation-delay: 3s; transform: rotate(20deg); }
      .home-connection-lines i { animation: home-node 1.8s ease-in-out infinite; background: #f5b942; border: 2px solid #fff; border-radius: 50%; height: 9px; position: absolute; width: 9px; }
      .home-connection-lines i:nth-of-type(1) { left: 48%; top: 42%; }
      .home-connection-lines i:nth-of-type(2) { left: 79%; top: 37%; animation-delay: .45s; }
      .home-connection-lines i:nth-of-type(3) { left: 59%; top: 63%; animation-delay: .9s; }
      .home-connection-lines i:nth-of-type(4) { left: 88%; top: 55%; animation-delay: 1.35s; }
      .home-hero-welcome { color: #102a43 !important; text-shadow: 0 1px 0 rgba(255, 255, 255, .9); }
      .home-hero-title { color: #102a43 !important; letter-spacing: .08em; text-shadow: 0 2px 0 rgba(255, 255, 255, .9); }
      .home-hero-tagline { color: #9a6700 !important; text-shadow: 0 1px 0 rgba(255, 255, 255, .9); }
      @keyframes home-map-drift { from { transform: scale(1); } to { transform: scale(1.025); } }
      @keyframes home-pulse-travel { 0% { left: 42%; top: 45%; } 25% { left: 57%; top: 39%; } 50% { left: 63%; top: 55%; } 75% { left: 47%; top: 58%; } 100% { left: 42%; top: 45%; } }
      @keyframes home-pulse-ring { 0% { opacity: .8; transform: scale(.35); } 100% { opacity: 0; transform: scale(1.5); } }
      @keyframes home-route { 0%, 100% { opacity: .2; clip-path: inset(0 100% 0 0); } 45%, 70% { opacity: 1; clip-path: inset(0 0 0 0); } }
      @keyframes home-node { 0%, 100% { box-shadow: 0 0 0 0 rgba(245, 185, 66, .7); } 50% { box-shadow: 0 0 0 12px rgba(245, 185, 66, 0); } }
      @media (max-width: 767px) { header.home-page-header > div { padding-left: 1rem; padding-right: 1rem; } .home-hero-welcome-block, .home-hero-title-block { left: 1.25rem; max-width: calc(100vw - 2.5rem); } .home-hero-title-block { padding: 1rem 1.15rem 1.25rem; } .home-hero-title { font-size: 2rem !important; } .world_map.home-hero-map { background-position: 78% center !important; background-size: auto 82% !important; } }
      @media (prefers-reduced-motion: reduce) { .home-hero-map { animation: none !important; } }
    `
    document.head.appendChild(style)
  }

  applyHomeMapBackground(map)
}

function applyHomeMapBackground(map) {
  if (!map) return
  map.style.setProperty('background-image', "url('/new_world_map.png')", 'important')
  map.style.setProperty('background-size', 'auto 100%', 'important')
  map.style.setProperty('background-position', '78% center', 'important')
  map.style.setProperty('opacity', '1', 'important')
  map.style.animation = 'home-map-drift 22s ease-in-out infinite alternate'
  window.setTimeout(() => {
    map.style.setProperty('background-image', "url('/new_world_map.png')", 'important')
  }, 100)
}

document.addEventListener("DOMContentLoaded", animate)
document.addEventListener("astro:after-swap", animate)
document.addEventListener("DOMContentLoaded", enhanceHomeHero)
document.addEventListener("astro:after-swap", enhanceHomeHero)