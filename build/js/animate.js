function animate() {
  const animateElements = document.querySelectorAll('.animate')

  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('show')
    }, index * 150)
  });
}

function applySiteChrome() {
  let style = document.getElementById('home-hero-enhancements')
  if (!style) {
    style = document.createElement('style')
    style.id = 'home-hero-enhancements'
    document.head.appendChild(style)
  }

  style.textContent = `
    html, body { background: #fff !important; color: #102a43 !important; overflow-x: hidden !important; scrollbar-width: none !important; -ms-overflow-style: none !important; }
    html::-webkit-scrollbar, body::-webkit-scrollbar, *::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
    * { scrollbar-width: none !important; -ms-overflow-style: none !important; }
    html.dark, html.dark body, main, footer, footer.bg-white, footer.dark\\:bg-black, .relative.dark\\:bg-black, .dark .dark\\:bg-black { background: #fff !important; }
    html.dark, html.dark body, .dark .dark\\:text-white, .dark .dark\\:text-gray-200 { color: #102a43 !important; }
    header.home-page-header { background: #fff !important; border-bottom: 1px solid rgba(16, 42, 67, .16) !important; box-shadow: 0 2px 14px rgba(16, 42, 67, .08); color: #102a43 !important; }
    header.home-page-header > div { max-width: none !important; padding-left: 3.5vw; padding-right: 3.5vw; }
    header.home-page-header > div > div { display: flex; justify-content: space-between; }
    header.home-page-header .home-brand { align-items: center; color: #102a43 !important; display: flex; font-size: 1rem; gap: .45rem; letter-spacing: .02em; text-shadow: none; transition: color .25s ease, transform .25s ease; }
    header.home-page-header .home-brand:hover { color: #b77908 !important; transform: translateY(-1px); }
    header.home-page-header nav { position: static !important; transform: none !important; }
    header.home-page-header nav a { color: #102a43 !important; }
    header.home-page-header nav a:hover { background: rgba(245, 185, 66, .18) !important; color: #102a43 !important; }
    header.home-page-header nav a.bg-black, header.home-page-header nav a.bg-white { background: #f5b942 !important; color: #102a43 !important; }
    section.relative.h-screen { background: #fff !important; }
    .world_map.home-hero-map { background-image: url('/new_world_map.png') !important; background-color: #fff !important; background-position: center 18% !important; background-size: auto 108% !important; background-repeat: no-repeat !important; opacity: 1 !important; inset: 0 !important; height: auto !important; }
    .home-hero-map { filter: none !important; transform-origin: center; }
    .home-hero-welcome-block { display: none !important; }
    .home-hero-title-block { left: 50% !important; right: auto !important; max-width: min(94vw, 70rem); position: absolute !important; text-align: center !important; top: 4.55rem; transform: translateX(-50%); z-index: 4; background: linear-gradient(180deg, rgba(255,255,255,.94) 0%, rgba(255,255,255,.78) 70%, rgba(255,255,255,0) 100%); border: 0; border-radius: 0; padding: .35rem 1.25rem .7rem; width: max-content; }
    .home-hero-title-block p { text-align: center !important; }
    .home-hero-welcome { display: block; font-size: .95rem; font-weight: 600; letter-spacing: .16em; margin: 0 0 .12rem; text-transform: uppercase; }
    .home-hero-title { font-size: clamp(1.55rem, 3.1vw, 2.7rem) !important; letter-spacing: .07em !important; line-height: 1.05; margin: 0; max-width: 100%; overflow-wrap: normal; white-space: nowrap; word-break: normal; }
    .home-hero-tagline { font-size: .92rem; letter-spacing: .12em; margin-top: .18rem !important; }
    .home-network-pulse { animation: home-pulse-travel 5s linear infinite; border: 2px solid rgba(245, 158, 11, .72); border-radius: 50%; height: 9px; left: 50%; pointer-events: none; position: absolute; top: 62%; transform: translate(-50%, -50%); width: 9px; z-index: 1; }
    .home-network-pulse::before, .home-network-pulse::after { border: 1px solid rgba(245, 158, 11, .55); border-radius: 50%; content: ''; inset: -18px; position: absolute; }
    .home-network-pulse::after { animation: home-pulse-ring 2.5s ease-out infinite; inset: -42px; }
    .home-connection-lines { inset: 0; pointer-events: none; position: absolute; z-index: 2; }
    .home-connection-lines span { animation: home-route 4s ease-in-out infinite; border-top: 2px solid rgba(245, 185, 66, .9); border-radius: 50%; height: 15%; position: absolute; transform: rotate(-18deg); width: 32%; }
    .home-connection-lines span:nth-child(1) { left: 48%; top: 28%; }
    .home-connection-lines span:nth-child(2) { left: 58%; top: 42%; animation-delay: 1s; transform: rotate(12deg); }
    .home-connection-lines span:nth-child(3) { left: 53%; top: 56%; animation-delay: 2s; transform: rotate(-8deg); }
    .home-connection-lines span:nth-child(4) { left: 68%; top: 24%; animation-delay: 3s; transform: rotate(20deg); }
    .home-connection-lines i { animation: home-node 1.8s ease-in-out infinite; background: #f5b942; border: 2px solid #fff; border-radius: 50%; height: 9px; position: absolute; width: 9px; }
    .home-connection-lines i:nth-of-type(1) { left: 48%; top: 36%; }
    .home-connection-lines i:nth-of-type(2) { left: 79%; top: 30%; animation-delay: .45s; }
    .home-connection-lines i:nth-of-type(3) { left: 59%; top: 62%; animation-delay: .9s; }
    .home-connection-lines i:nth-of-type(4) { left: 88%; top: 52%; animation-delay: 1.35s; }
    .home-hero-welcome { color: #102a43 !important; text-shadow: none; }
    .home-hero-title { color: #102a43 !important; letter-spacing: .08em; text-shadow: none; }
    .home-hero-tagline { color: #9a6700 !important; text-shadow: none; }
    @keyframes home-map-drift { from { transform: scale(1); } to { transform: scale(1.025); } }
    @keyframes home-pulse-travel { 0% { left: 42%; top: 58%; } 25% { left: 57%; top: 52%; } 50% { left: 63%; top: 68%; } 75% { left: 47%; top: 72%; } 100% { left: 42%; top: 58%; } }
    @keyframes home-pulse-ring { 0% { opacity: .8; transform: scale(.35); } 100% { opacity: 0; transform: scale(1.5); } }
    @keyframes home-route { 0%, 100% { opacity: .2; clip-path: inset(0 100% 0 0); } 45%, 70% { opacity: 1; clip-path: inset(0 0 0 0); } }
    @keyframes home-node { 0%, 100% { box-shadow: 0 0 0 0 rgba(245, 185, 66, .7); } 50% { box-shadow: 0 0 0 12px rgba(245, 185, 66, 0); } }
    .meet-the-team-section h2, .meet-the-team-content, .meet-the-team-content * { color: #000 !important; }
    .meet-the-team-content .text-gray-800, .meet-the-team-content .dark\\:text-gray-200 { color: #000 !important; }
    .what-we-do-shell { position: relative; }
    .what-we-do-scroller { -ms-overflow-style: none; cursor: grab; overflow-x: auto; overflow-y: hidden; padding: .25rem 0 1.5rem; scrollbar-width: none; }
    .what-we-do-scroller::-webkit-scrollbar { display: none; height: 0; }
    .what-we-do-scroller.is-dragging { cursor: grabbing; }
    .what-we-do-track { align-items: stretch !important; display: flex !important; flex-wrap: nowrap !important; gap: 1.25rem; justify-content: flex-start !important; min-width: max-content; padding: .5rem 4.5rem .75rem; scroll-snap-type: x mandatory; }
    .what-we-do-card { background: linear-gradient(180deg, #fff 0%, #fbf7ee 100%); border: 1px solid rgba(16, 42, 67, .12); border-radius: 1.35rem; box-shadow: 0 18px 40px rgba(16, 42, 67, .08); flex: 0 0 17.5rem; margin: 0 !important; min-height: 19.5rem; padding: 1.35rem 1.2rem 1.2rem; position: relative; scroll-snap-align: start; transition: transform .25s ease, box-shadow .25s ease; }
    .what-we-do-card:hover { box-shadow: 0 24px 48px rgba(16, 42, 67, .14); transform: translateY(-6px); }
    .what-we-do-card::before { background: linear-gradient(90deg, #f5b942, #c58a12); border-radius: 1.35rem 1.35rem 0 0; content: ''; height: 5px; left: 0; position: absolute; right: 0; top: 0; }
    .what-we-do-card .round-10rem { background-color: #f4ead2 !important; border-color: rgba(197, 138, 18, .35) !important; box-shadow: inset 0 0 0 6px rgba(255,255,255,.7); flex-shrink: 0; height: 7.5rem !important; margin-bottom: .85rem; width: 7.5rem !important; }
    .what-we-do-card > p { color: #102a43 !important; font-size: 1.02rem; letter-spacing: .01em; line-height: 1.35; margin: 0 .25rem !important; }
    .what-we-do-card > p span { color: #102a43 !important; font-weight: 700; }
    .what-we-do-card .overlay { background: rgba(16, 42, 67, .72); border-radius: 999px; color: #fff !important; font-size: .72rem; letter-spacing: .08em; padding: .35rem .7rem; text-transform: uppercase; }
    .what-we-do-nav { display: flex; gap: .6rem; justify-content: flex-end; margin: 0 0 .75rem; }
    .what-we-do-nav button { align-items: center; background: #fff; border: 1px solid rgba(16, 42, 67, .16); border-radius: 999px; box-shadow: 0 8px 18px rgba(16, 42, 67, .08); color: #102a43; cursor: pointer; display: inline-flex; font-size: 1.15rem; height: 2.5rem; justify-content: center; transition: background .2s ease, transform .2s ease; width: 2.5rem; }
    .what-we-do-nav button:hover { background: #f5b942; transform: translateY(-1px); }
    @media (max-width: 767px) {
      header.home-page-header > div { padding-left: 1rem; padding-right: 1rem; }
      .home-hero-title-block { left: 50% !important; max-width: calc(100vw - 1.5rem); padding: .3rem .8rem .55rem; top: 4.4rem; width: calc(100vw - 1.5rem); }
      .home-hero-title { font-size: 1.35rem !important; white-space: normal; }
      .world_map.home-hero-map { background-position: 72% 22% !important; background-size: auto 100% !important; }
      .what-we-do-track { padding-left: 1rem; padding-right: 1rem; }
      .what-we-do-card { flex-basis: 15.5rem; }
    }
    @media (prefers-reduced-motion: reduce) { .home-hero-map { animation: none !important; } }
  `
}

function enhanceHomeHero() {
  applySiteChrome()

  const brand = document.querySelector('header a[href="/"]')
  const header = document.querySelector('header')
  if (header) header.classList.add('home-page-header')
  if (brand) {
    brand.classList.add('home-brand')
    brand.setAttribute('aria-label', 'Return to the home page')
  }

  enhanceMeetTheTeam()
  enhanceWhatWeDo()

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
    if (title?.parentElement && welcome.parentElement !== title.parentElement) {
      title.parentElement.insertBefore(welcome, title)
    }
  }

  const tagline = [...hero.querySelectorAll('p')].find((element) =>
    element.textContent.includes('Transforming Ideas into Impact')
  )
  if (tagline) tagline.classList.add('home-hero-tagline')

  applyHomeMapBackground(map)
}

function enhanceMeetTheTeam() {
  const heading = [...document.querySelectorAll('h2')].find((element) =>
    element.textContent.trim().toUpperCase().includes('MEET THE TEAM')
  )
  if (!heading) return

  const section = heading.closest('section')
  if (section) section.classList.add('meet-the-team-section')

  let next = section?.nextElementSibling
  while (next && !next.querySelector('h2')) {
    next.classList.add('meet-the-team-content')
    next.querySelectorAll('*').forEach((node) => {
      node.style.setProperty('color', '#000', 'important')
    })
    next = next.nextElementSibling
  }
}

function enhanceWhatWeDo() {
  const heading = [...document.querySelectorAll('h2')].find((element) =>
    element.textContent.trim().toUpperCase() === 'WHAT WE DO'
  )
  if (!heading) return

  const contentSection = heading.closest('section')?.nextElementSibling
  if (!contentSection || contentSection.dataset.premiumReady === 'true') return
  contentSection.dataset.premiumReady = 'true'

  const track = contentSection.querySelector('.dblock-470') || contentSection.querySelector('.flex.flex-wrap')
  if (!track) return

  const article = track.parentElement
  const shell = document.createElement('div')
  shell.className = 'what-we-do-shell'
  article.insertBefore(shell, track)

  const nav = document.createElement('div')
  nav.className = 'what-we-do-nav'
  nav.innerHTML = '<button type="button" class="what-we-do-prev" aria-label="Previous services">‹</button><button type="button" class="what-we-do-next" aria-label="Next services">›</button>'

  const scroller = document.createElement('div')
  scroller.className = 'what-we-do-scroller'
  shell.appendChild(nav)
  shell.appendChild(scroller)
  scroller.appendChild(track)

  track.classList.add('what-we-do-track')
  ;[...track.children].forEach((card) => card.classList.add('what-we-do-card'))

  const scrollByCard = (direction) => {
    scroller.scrollBy({ left: direction * 300, behavior: 'smooth' })
  }
  nav.querySelector('.what-we-do-prev')?.addEventListener('click', () => scrollByCard(-1))
  nav.querySelector('.what-we-do-next')?.addEventListener('click', () => scrollByCard(1))

  scroller.addEventListener('wheel', (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
    event.preventDefault()
    scroller.scrollLeft += event.deltaY
  }, { passive: false })

  let isDragging = false
  let startX = 0
  let startLeft = 0
  scroller.addEventListener('pointerdown', (event) => {
    isDragging = true
    startX = event.clientX
    startLeft = scroller.scrollLeft
    scroller.classList.add('is-dragging')
    scroller.setPointerCapture(event.pointerId)
  })
  scroller.addEventListener('pointermove', (event) => {
    if (!isDragging) return
    scroller.scrollLeft = startLeft - (event.clientX - startX)
  })
  const stopDrag = () => {
    isDragging = false
    scroller.classList.remove('is-dragging')
  }
  scroller.addEventListener('pointerup', stopDrag)
  scroller.addEventListener('pointercancel', stopDrag)
}

function applyHomeMapBackground(map) {
  if (!map) return
  map.style.setProperty('background-image', "url('/new_world_map.png')", 'important')
  map.style.setProperty('background-size', 'auto 108%', 'important')
  map.style.setProperty('background-position', 'center 18%', 'important')
  map.style.setProperty('background-repeat', 'no-repeat', 'important')
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