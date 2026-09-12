function animate() {
  document.querySelectorAll('.animate').forEach((element, index) => {
    setTimeout(() => element.classList.add('show'), index * 150)
  })
}

function applySiteChrome() {
  let style = document.getElementById('home-hero-enhancements')
  if (!style) {
    style = document.createElement('style')
    style.id = 'home-hero-enhancements'
    document.head.appendChild(style)
  }

  style.textContent = `
    html { scroll-behavior: smooth; }
    html, body {
      background: #fff !important;
      color: #111 !important;
      overflow-x: hidden !important;
      overflow-y: auto !important;
      scrollbar-width: thin !important;
      scrollbar-color: #c9a227 #f3f3f3 !important;
    }
    html::-webkit-scrollbar, body::-webkit-scrollbar { display: block !important; width: 10px !important; }
    html::-webkit-scrollbar-track, body::-webkit-scrollbar-track { background: #f3f3f3 !important; }
    html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb { background: #c9a227 !important; border-radius: 999px !important; border: 2px solid #f3f3f3 !important; }
    html.dark, html.dark body, main, footer, .relative.dark\\:bg-black { background: #fff !important; color: #111 !important; }
    header.home-page-header { background: #fff !important; border-bottom: 1px solid #ececec !important; box-shadow: 0 1px 0 rgba(0,0,0,.04); color: #111 !important; }
    header.home-page-header > div { max-width: none !important; padding-left: 3.2vw; padding-right: 3.2vw; }
    header.home-page-header > div > div { display: flex; align-items: center; justify-content: space-between; }
    header.home-page-header .home-brand { align-items: center; color: #111 !important; display: flex; font-size: .98rem; gap: .45rem; }
    header.home-page-header nav { position: static !important; transform: none !important; }
    header.home-page-header nav a { color: #222 !important; }
    header.home-page-header nav a:hover { background: #f6f6f6 !important; color: #111 !important; }
    header.home-page-header nav a.bg-black, header.home-page-header nav a.bg-white { background: #f5b942 !important; color: #111 !important; }
    .home-cta {
      align-items: center; background: #111; border-radius: 999px; color: #fff !important; display: none;
      font-size: .82rem; font-weight: 600; gap: .4rem; letter-spacing: .02em; padding: .55rem 1.05rem; position: absolute; right: 0; text-decoration: none; top: 50%; transform: translateY(-50%); white-space: nowrap; z-index: 2;
    }
    @media (min-width: 768px) { .home-cta { display: inline-flex; } }
    .home-cta:hover { background: #c9a227; color: #111 !important; }

    .home-hero-stacked {
      align-items: center !important; background: #fff !important; display: flex !important; flex-direction: column !important;
      height: auto !important; justify-content: flex-start !important; min-height: 0 !important; padding: 6.2rem 1rem 1.25rem !important;
    }
    .home-hero-title-block {
      background: none !important; left: auto !important; max-width: 72rem; padding: .35rem 1rem .2rem !important;
      position: relative !important; text-align: center !important; top: auto !important; transform: none !important; width: 100%; z-index: 5;
    }
    .home-hero-welcome { display: block; font-size: .78rem; font-weight: 700; letter-spacing: .22em; margin: 0 0 .35rem; text-transform: uppercase; color: #111 !important; }
    .home-hero-title { color: #0b1b33 !important; font-size: clamp(1.45rem, 3.1vw, 2.55rem) !important; letter-spacing: .08em !important; line-height: 1.15; margin: 0 auto; max-width: 100%; white-space: normal; }
    .home-hero-tagline { color: #7a5a12 !important; font-size: 1rem; font-style: italic; letter-spacing: .04em; margin-top: .45rem !important; }
    .world_map.home-hero-map {
      background-color: #fff !important; background-position: center center !important; background-repeat: no-repeat !important;
      background-size: contain !important; height: min(38vh, 360px) !important; inset: auto !important; margin: .6rem auto 0 !important;
      max-width: 820px; opacity: 1 !important; position: relative !important; width: min(78vw, 820px) !important; z-index: 1;
    }
    .home-network-pulse, .home-connection-lines { display: none !important; }

    .page-hero {
      background: #fff !important; height: auto !important; min-height: 0 !important; padding: 7.2rem 1.25rem 1.4rem !important;
    }
    .page-hero .mt-40 { margin-top: 0 !important; }
    .page-hero p, .locations-hero p {
      background: none !important; color: #111 !important; -webkit-text-fill-color: #111 !important; font-size: clamp(1.7rem, 3vw, 2.4rem) !important; letter-spacing: .12em;
    }
    .locations-hero { background: #fff !important; padding: 7.2rem 1.25rem 1.2rem !important; }
    .locations-hero .world_map_location { display: none !important; }
    .inner-page main, .inner-page .relative.dark\\:bg-black, .inner-page article, .inner-page h1, .inner-page h2, .inner-page h3, .inner-page p, .inner-page li {
      background-color: transparent; color: #111 !important;
    }
    .inner-page .mx-auto.max-w-6xl { max-width: 72rem !important; }
    .prose-block {
      background: #fff; border: 1px solid #ececec; border-radius: 18px; box-shadow: 0 10px 30px rgba(0,0,0,.04);
      color: #222 !important; font-size: 1.02rem; line-height: 1.8; margin: 0 auto; max-width: 58rem; padding: 1.6rem 1.7rem;
    }
    .service-grid { display: grid; gap: 1.15rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
    .service-offer-card {
      background: #fff; border: 1px solid #ececec; border-radius: 16px; box-shadow: 0 12px 28px rgba(0,0,0,.05);
      min-height: 100%; padding: 1.35rem 1.2rem 1.2rem; position: relative;
    }
    .service-offer-card::before { background: #111; border-radius: 16px 16px 0 0; content: ''; height: 4px; left: 0; position: absolute; right: 0; top: 0; }
    .service-offer-card h2, .service-offer-card p { color: #111 !important; margin: 0 !important; text-align: left !important; }
    .service-offer-card h2 { font-size: 1.05rem !important; letter-spacing: .02em; margin-bottom: .55rem !important; }
    .service-offer-card p { color: #444 !important; font-size: .95rem; line-height: 1.6; }
    .team-card {
      background: #fff; border: 1px solid #ececec; border-radius: 16px; box-shadow: 0 12px 28px rgba(0,0,0,.05);
      min-width: 280px; padding: 1.6rem 1.3rem !important; position: relative;
    }
    .team-card, .team-card * { background: #fff !important; color: #111 !important; opacity: 1 !important; }
    .location-card { background: #fff !important; border: 1px solid #ececec !important; border-radius: 18px !important; box-shadow: 0 12px 28px rgba(0,0,0,.05) !important; color: #111 !important; }
    .location-card h2, .location-card p { color: #111 !important; -webkit-text-fill-color: #111 !important; background: none !important; }

    .projects-layout { align-items: flex-start; display: grid; gap: 1.5rem; grid-template-columns: 240px 1fr; }
    .projects-filter {
      background: #fff; border: 1px solid #ececec; border-radius: 18px; box-shadow: 0 12px 28px rgba(0,0,0,.05); padding: 1.2rem;
    }
    .projects-filter h2 { color: #111 !important; font-size: 1rem !important; letter-spacing: .08em; margin-bottom: .9rem !important; text-transform: uppercase; }
    .filter-button { background: #fafafa !important; border: 1px solid #e6e6e6 !important; border-radius: 10px !important; color: #111 !important; margin-bottom: .45rem; }
    .filter-button:hover, .filter-button.active { background: #111 !important; color: #fff !important; }
    #projects-container { display: grid; gap: 1.1rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
    .project-item {
      background: #fff !important; border: 1px solid #ececec !important; border-radius: 16px !important;
      box-shadow: 0 14px 32px rgba(0,0,0,.05) !important; display: flex; flex-direction: column; gap: .45rem; min-height: 188px; padding: 1.25rem 1.2rem !important;
    }
    .project-item h3, .project-item h3 a, .project-item p { color: #111 !important; }
    .project-item h3 { font-size: 1.08rem; line-height: 1.35; }
    .project-chip { align-self: flex-start; background: #111; border-radius: 999px; color: #fff; font-size: .7rem; letter-spacing: .08em; padding: .22rem .6rem; text-transform: uppercase; }

    .contact-shell { display: grid; gap: 1.5rem; grid-template-columns: 1.1fr .9fr; }
    .contact-card, .contact-side {
      background: #fff; border: 1px solid #ececec; border-radius: 18px; box-shadow: 0 14px 32px rgba(0,0,0,.05); padding: 1.6rem;
    }
    .contact-card h2, .contact-side h3, .contact-card label, .contact-card p, .contact-side p, .contact-side a { color: #111 !important; }
    .contact-card input, .contact-card textarea {
      background: #fafafa; border: 1px solid #e4e4e4; border-radius: 10px; color: #111; padding: .75rem .85rem; width: 100%;
    }
    .contact-card button {
      background: #111; border: 0; border-radius: 999px; color: #fff; cursor: pointer; font-weight: 700; padding: .75rem 1.4rem;
    }
    .contact-card button:hover { background: #c9a227; color: #111; }
    .contact-meta { color: #555 !important; font-size: .95rem; line-height: 1.7; }
    .home-contact-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); margin-top: 1.2rem; }
    .home-contact-tile {
      background: #fff; border: 1px solid #ececec; border-radius: 16px; box-shadow: 0 10px 24px rgba(0,0,0,.04);
      color: #111; padding: 1.2rem 1.1rem; text-align: left;
    }
    .home-contact-tile b { display: block; font-size: .78rem; letter-spacing: .12em; margin-bottom: .35rem; text-transform: uppercase; }

    .site-footer { background: #fff !important; border-top: 1px solid #eee; color: #111 !important; padding: 3.2rem 6vw 2rem; }
    .site-footer * { color: #111; }
    .footer-top { align-items: center; display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between; margin-bottom: 2.4rem; }
    .footer-brand { align-items: center; color: #111 !important; display: flex; font-size: 1.35rem; font-weight: 800; gap: .55rem; text-decoration: none; }
    .footer-brand img { height: 34px; width: auto; }
    .footer-badges { display: flex; flex-wrap: wrap; gap: 1.15rem; }
    .footer-badges span { align-items: center; color: #333; display: inline-flex; font-size: .92rem; gap: .4rem; }
    .footer-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(5, minmax(0, 1fr)); }
    .footer-grid h4 { font-size: .92rem; font-weight: 800; margin: 0 0 .85rem; }
    .footer-grid a { color: #2563eb !important; display: block; font-size: .95rem; line-height: 1.9; text-decoration: none; }
    .footer-grid a:hover { text-decoration: underline; }
    .footer-bottom { border-top: 1px solid #f0f0f0; color: #666; font-size: .85rem; margin-top: 2.4rem; padding-top: 1.1rem; }

    .meet-the-team-section h2, .meet-the-team-content, .meet-the-team-content * { color: #111 !important; }
    .what-we-do-shell { position: relative; }
    .what-we-do-scroller { cursor: grab; overflow-x: auto; overflow-y: hidden; padding: .25rem 0 1.5rem; scrollbar-width: thin; }
    .what-we-do-scroller.is-dragging { cursor: grabbing; }
    .what-we-do-track { align-items: stretch !important; display: flex !important; flex-wrap: nowrap !important; gap: 1.25rem; justify-content: flex-start !important; min-width: max-content; padding: .5rem 4.5rem .75rem; }
    .what-we-do-card { background: #fff; border: 1px solid #ececec; border-radius: 1.35rem; box-shadow: 0 18px 40px rgba(16,42,67,.08); flex: 0 0 17.5rem; margin: 0 !important; min-height: 19.5rem; padding: 1.35rem 1.2rem 1.2rem; position: relative; }
    .what-we-do-card:hover { box-shadow: 0 24px 48px rgba(16,42,67,.14); transform: translateY(-6px); }
    .what-we-do-card::before { background: #111; border-radius: 1.35rem 1.35rem 0 0; content: ''; height: 5px; left: 0; position: absolute; right: 0; top: 0; }
    .what-we-do-card .round-10rem { background-color: #f6f6f6 !important; border-color: #ddd !important; flex-shrink: 0; height: 7.5rem !important; margin-bottom: .85rem; width: 7.5rem !important; }
    .what-we-do-card > p, .what-we-do-card > p span { color: #111 !important; }
    .what-we-do-nav { display: flex; gap: .6rem; justify-content: flex-end; margin: 0 0 .75rem; }
    .what-we-do-nav button { background: #fff; border: 1px solid #ddd; border-radius: 999px; color: #111; cursor: pointer; height: 2.5rem; width: 2.5rem; }
    .who-we-are-text p { color: #111 !important; line-height: 1.85; }
    .where-we-worked-section { background: #fff !important; border: 1px solid #ececec; border-radius: 20px; box-shadow: 0 12px 28px rgba(0,0,0,.04); margin: 0; padding: 1.5rem; }
    .where-we-worked-title { color: #111 !important; -webkit-text-fill-color: #111 !important; }

    @media (max-width: 980px) {
      .projects-layout, .contact-shell, .home-contact-grid, .footer-grid { grid-template-columns: 1fr; }
      .home-hero-title { white-space: normal; }
      .world_map.home-hero-map { height: 38vh !important; }
    }
  `
}

function enhanceHomeHero() {
  applySiteChrome()
  document.body.classList.toggle('inner-page', location.pathname.replace(/\/$/, '') !== '')

  const brand = document.querySelector('header a[href="/"]')
  const header = document.querySelector('header')
  if (header) header.classList.add('home-page-header')
  if (brand) {
    brand.classList.add('home-brand')
    brand.setAttribute('aria-label', 'Return to the home page')
  }

  const headerInner = header?.querySelector(':scope > div > div')
  if (headerInner && !header.querySelector('.home-cta')) {
    const cta = document.createElement('a')
    
    
    headerInner.appendChild(cta)
  }

  enhanceMeetTheTeam()
  enhanceWhatWeDo()
  enhanceInnerPages()
  enhanceProjects()
  enhanceContact()
  replaceDummyCopy()
  replaceSiteFooter()

  const hero = document.querySelector('section.relative.h-screen')
  if (!hero) return

  hero.classList.add('home-hero-stacked')
  hero.classList.remove('h-screen')

  const map = hero.querySelector('.world_map')
  if (map) {
    map.classList.add('home-hero-map')
    applyHomeMapBackground(map)
  }

  const title = [...hero.querySelectorAll('p')].find((element) =>
    element.textContent.trim().toLowerCase().includes('disruptive consultancy')
  )
  if (title) {
    title.textContent = 'DISRUPTIVE CONSULTANCY SERVICES'
    title.classList.add('home-hero-title')
    title.parentElement.classList.add('home-hero-title-block')
    if (map) hero.insertBefore(title.parentElement, map)
  }

  let welcome = [...hero.querySelectorAll('p')].find((element) =>
    element.textContent.trim().toLowerCase() === 'welcome to'
  )
  if (!welcome && title?.parentElement && !title.parentElement.querySelector('.home-hero-welcome')) {
    welcome = document.createElement('p')
    welcome.textContent = 'DISRUPTIVE CONSULTANCY SERVICES'
    welcome.className = 'home-hero-welcome'
    title.parentElement.insertBefore(welcome, title)
    welcome.textContent = 'Disruptive Consultancy Services'
  }
  if (welcome) {
    welcome.classList.add('home-hero-welcome')
    welcome.textContent = 'Disruptive Consultancy Services'
    if (title?.parentElement && welcome.parentElement !== title.parentElement) {
      title.parentElement.insertBefore(welcome, title)
    }
  }

  const tagline = [...hero.querySelectorAll('p')].find((element) =>
    element.textContent.includes('Transforming Ideas into Impact')
  )
  if (tagline) tagline.classList.add('home-hero-tagline')
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
    next.querySelectorAll('.relative.w-80, .bg-gray-300').forEach((card) => card.classList.add('team-card'))
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

  const scrollByCard = (direction) => scroller.scrollBy({ left: direction * 300, behavior: 'smooth' })
  nav.querySelector('.what-we-do-prev')?.addEventListener('click', () => scrollByCard(-1))
  nav.querySelector('.what-we-do-next')?.addEventListener('click', () => scrollByCard(1))
}

function enhanceInnerPages() {
  document.querySelectorAll('section.relative.h-96, section.relative.h-72').forEach((section) => {
    section.classList.add('page-hero')
    section.classList.remove('h-96', 'h-72')
  })

  document.querySelectorAll('article p').forEach((paragraph) => {
    if (paragraph.closest('.service-offer-card, .project-item, .contact-card, form')) return
    if (paragraph.textContent.trim().length > 180) paragraph.classList.add('prose-block')
  })

  const servicesHeading = [...document.querySelectorAll('h2')].find((element) =>
    element.textContent.trim().toUpperCase().includes('PROFESSIONAL SERVICES')
  )
  const servicesGrid = servicesHeading?.closest('section')?.nextElementSibling?.querySelector('.dblock-470')
  if (servicesGrid && servicesGrid.dataset.redesigned !== 'true') {
    servicesGrid.dataset.redesigned = 'true'
    servicesGrid.classList.add('service-grid')
    ;[...servicesGrid.children].forEach((card) => card.classList.add('service-offer-card'))
  }
}

function enhanceProjects() {
  const container = document.getElementById('projects-container')
  if (!container) return

  const wrapper = container.closest('.mx-auto')
  if (wrapper) wrapper.classList.add('projects-layout')
  wrapper?.querySelector('aside')?.classList.add('projects-filter')

  container.querySelectorAll('.project-item').forEach((card) => {
    if (card.querySelector('.project-chip')) return
    const location = card.getAttribute('data-location') || 'Global'
    const chip = document.createElement('span')
    chip.className = 'project-chip'
    chip.textContent = location
    card.prepend(chip)
  })
}

function enhanceContact() {
  const path = location.pathname.replace(/\/$/, '')
  if (path === '/contact') {
    const article = document.querySelector('main article')
    if (article && article.dataset.redesigned !== 'true') {
      article.dataset.redesigned = 'true'
      article.innerHTML = contactMarkup()
      bindContactForm(article)
    }
    return
  }

  const heading = [...document.querySelectorAll('h2')].find((element) =>
    element.textContent.trim().toUpperCase() === 'CONTACT US'
  )
  const section = heading?.closest('section')?.nextElementSibling
  if (!section || section.dataset.redesigned === 'true') return
  section.dataset.redesigned = 'true'
  const article = section.querySelector('article') || section
  article.innerHTML = `
    <p class="prose-block" style="text-align:center;max-width:42rem;margin:0 auto 1.2rem;">
      We would like to hear from you. Share a project brief, partnership idea, or request for proposal and our team in Delhi will respond promptly.
    </p>
    <div class="home-contact-grid">
      <a class="home-contact-tile" href="mailto:utiwari@developmentmonitors.com">
        <b>Email</b>utiwari@developmentmonitors.com
      </a>
      <a class="home-contact-tile" href="/contact">
        <b>Enquiry desk</b>Send a structured brief through our contact form
      </a>
      <div class="home-contact-tile">
        <b>Office</b>Disruptive Consultancy Services Pvt. Ltd, Delhi, India
      </div>
    </div>
  `
}

function contactMarkup() {
  return `
    <div class="contact-shell">
      <div class="contact-card">
        <h2>Have a question, idea or assignment?</h2>
        <p class="contact-meta">Tell us about the programme, geography and timeline. We typically reply within two working days.</p>
        <form id="dcs-contact-form" class="mt-4">
          <div class="mb-4"><label for="name">Name</label><input id="name" name="name" type="text" required placeholder="Your name"></div>
          <div class="mb-4"><label for="email">Email</label><input id="email" name="email" type="email" required placeholder="you@organisation.org"></div>
          <div class="mb-4"><label for="organisation">Organisation</label><input id="organisation" name="organisation" type="text" placeholder="Agency, ministry or firm"></div>
          <div class="mb-4"><label for="message">Message</label><textarea id="message" name="message" rows="6" required placeholder="Project context, location and support required"></textarea></div>
          <button type="submit">Send message</button>
        </form>
      </div>
      <aside class="contact-side">
        <h3>Direct contact</h3>
        <p class="contact-meta">Disruptive Consultancy Services Pvt. Ltd was established in Delhi to support donor-funded monitoring, evaluation and infrastructure programmes across South Asia and the Middle East.</p>
        <p class="contact-meta"><strong>Email</strong><br><a href="mailto:utiwari@developmentmonitors.com">utiwari@developmentmonitors.com</a></p>
        <p class="contact-meta"><strong>Leadership</strong><br>Mr. Umesh Narwadeshwar Tiwari<br>Dr. James K. Weeks</p>
        <p class="contact-meta"><strong>Focus regions</strong><br>India, Nepal, Afghanistan, Yemen and Bangladesh</p>
      </aside>
    </div>
  `
}

function bindContactForm(root) {
  root.querySelector('#dcs-contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = root.querySelector('#name')?.value.trim() || ''
    const email = root.querySelector('#email')?.value.trim() || ''
    const organisation = root.querySelector('#organisation')?.value.trim() || ''
    const message = root.querySelector('#message')?.value.trim() || ''
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation}\n\n${message}`)
    window.location.href = `mailto:utiwari@developmentmonitors.com?subject=${encodeURIComponent('Website enquiry from ' + name)}&body=${body}`
  })
}

function replaceDummyCopy() {
  const serviceCopy = {
    'MONITORING AND EVALUATION': 'Independent monitoring, evaluation and remote verification for donor-funded infrastructure and social programmes, including survey design, data quality and performance reporting.',
    'WATERSHED MANAGEMENT': 'Technical support for watershed restoration, water-resource planning and community-based catchment management, including economic analysis of water investments.',
    'DISASTER RISK MANAGEMENT AND EARLY WARNING SYSTEMS': 'Disaster risk management training, climate-resilient planning and early-warning support for governments and implementing agencies in fragile settings.',
    'SOLID WASTE MANAGEMENT AND GENERAL ASSESSMENT': 'Solid waste diagnostics, gender-responsive assessments and operational planning to strengthen municipal and programme-level waste systems.',
    'MARKET ASSESSMENT AND VALUE CHAIN ANALAYSIS': 'Market diagnostics and agricultural value-chain analysis to identify constraints, opportunities and practical interventions for producers and local enterprise.',
    'DEVELOPMENT OF TOOLKIT': 'Design of practical diagnostic and planning toolkits, including quality-infrastructure tools for water supply systems that can be used by governments and utilities.',
    'AGRICULTURAL SECTOR ASSESSMENT': 'Agriculture and food-security studies covering production systems, nutrition outcomes and economic analysis to inform investment and policy decisions.',
    'INSTITUTIONAL DEVELOPMENT': 'Capacity building, grant administration, financial-management systems and institutional strengthening for ministries, utilities and implementing partners.'
  }

  document.querySelectorAll('.service-offer-card').forEach((card) => {
    const title = card.querySelector('h2, p')?.textContent.replace(/\s+/g, ' ').trim().toUpperCase()
    const body = [...card.querySelectorAll('p')].pop()
    if (title && body && serviceCopy[title]) body.textContent = serviceCopy[title]
    if (title && body && !body.textContent.trim() && serviceCopy[title]) body.textContent = serviceCopy[title]
  })

  replaceSectionCopy('OUR STORY & MISSION', 'DCSPL was established in 2022 in Delhi to bring senior monitoring, evaluation and programme-management expertise to governments and development partners. Our mission is to convert complex field evidence into decisions that improve infrastructure quality, climate resilience and community outcomes. We combine economist-led analysis with operational teams in India, Nepal, Afghanistan, Bangladesh and Yemen so that programmes can be designed, verified and course-corrected with reliable data.')
  replaceSectionCopy('AWARDS AND ACHIEVEMENTS', 'The founding team has led multi-million-dollar rural and urban development programmes with a cumulative contract value exceeding US$260 million for the World Bank, KfW, USAID, the European Commission, WHO, UNICEF and leading foundations. Assignments have included asset verification, climate-resilient infrastructure design, disaster-risk training for government officials, and food and nutrition security analysis. This record reflects trusted delivery in fragile and resource-constrained settings, not promotional awards.')
  replaceSectionCopy('OUR APPROACH AND TECHNOLOGIES', 'We use citizen- and community-based methods together with practical, low-cost tools: smartphone data collection, open-source applications, satellite imagery, sensors and UAVs. The aim is not technology for its own sake, but faster verification, clearer evidence and solutions that host governments can sustain. Remote management, monitoring and verification methods allow us to remain accountable even where access is limited.')

  document.querySelectorAll('p, li').forEach((node) => {
    const text = node.textContent
    if (!/lorem|ipsum|adipisicing|consectetur adipiscing/i.test(text)) return
    if (node.closest('footer')) return
    const heading = nearbyHeading(node)
    node.textContent = contextualCopy(heading, text)
  })
}

function nearbyHeading(node) {
  const article = node.closest('article')
  const heading = article?.querySelector('h2, h3, h4, .page-heading') || document.querySelector('h2, .page-heading')
  return heading?.textContent.trim() || ''
}

function contextualCopy(heading, original) {
  const key = heading.toUpperCase()
  if (key.includes('PRIVACY')) return 'Disruptive Consultancy Services collects only the information needed to respond to enquiries and deliver contracted services. We do not sell personal data. Contact details submitted through this website are used to reply to you and, where relevant, to prepare a proposal.'
  if (key.includes('PERSONAL IDENTIFICATION')) return 'If you contact us by form or email, we may store your name, organisation, email address and the content of your message so that our team can respond and keep a record of the enquiry.'
  if (key.includes('NON-PERSONAL')) return 'We may collect non-identifying information such as browser type, referring pages and general usage statistics to keep the site reliable and improve how information is presented.'
  if (key.includes('COOKIE')) return 'The site may use essential cookies to remember basic preferences. You can control cookies through your browser settings. We do not use them to build advertising profiles.'
  if (key.includes('HOW WE USE')) return 'Information is used to answer enquiries, manage assignments, meet contractual reporting duties and improve our professional services. It is not used for unrelated marketing.'
  if (key.includes('HOW WE PROTECT')) return 'We restrict access to enquiry and project information to authorised staff and service providers who need it to perform their work, and we take reasonable administrative and technical measures to keep it secure.'
  if (key.includes('SHARING')) return 'We share personal information only with staff and trusted processors who support delivery, or when required by law. We do not sell or rent client or visitor data.'
  if (key.includes('CHANGES TO THIS PRIVACY')) return 'If this policy is updated, the revised version will be posted on this page with a new effective date. Continued use of the site after an update constitutes acceptance of the revised policy.'
  if (key.includes('AGREEMENT TO TERMS') || key.includes('TERMS OF USE')) return 'By using this website you agree to these terms. The site provides information about Disruptive Consultancy Services and is not an offer of employment or a binding proposal until a written contract is signed.'
  if (key.includes('INTELLECTUAL PROPERTY')) return 'Text, logos, maps and project descriptions on this site belong to Disruptive Consultancy Services or their respective owners. You may not copy them for commercial use without written permission.'
  if (key.includes('USER REPRESENTATIONS')) return 'You agree to use the site lawfully, not to misuse enquiry forms, and not to submit confidential third-party information unless you are authorised to do so.'
  if (key.includes('LINKS TO OTHER')) return 'External links, including partner and donor sites, are provided for convenience. We are not responsible for the content or privacy practices of third-party websites.'
  if (key.includes('TERMINATION')) return 'We may suspend access to the website if it is misused or if we need to carry out maintenance. Termination of website access does not affect rights under any signed professional contract.'
  if (key.includes('GOVERNING LAW')) return 'These terms are governed by the laws of India. Disputes relating to use of the website will be subject to the courts of Delhi, unless a signed contract states otherwise.'
  if (key.includes('CHANGES TO THESE TERMS')) return 'We may revise these terms from time to time. The date at the top of the page shows when they were last updated.'
  if (key.includes('WATERSHED')) return 'We support watershed planning, catchment restoration and water-resource analysis so communities and utilities can protect water security over the long term.'
  if (key.includes('DISASTER')) return 'We help governments strengthen disaster-risk management, climate-resilient infrastructure design and early-warning processes.'
  if (key.includes('SOLID WASTE')) return 'We assess solid-waste systems and related social issues so municipalities and programmes can improve operations and inclusion.'
  if (key.includes('MARKET')) return 'We analyse markets and value chains to identify practical interventions for producers, traders and supporting institutions.'
  if (key.includes('TOOLKIT')) return 'We develop diagnostic and planning toolkits that agencies can use to assess infrastructure quality and prioritise investments.'
  if (key.includes('AGRICULTURAL')) return 'We undertake agricultural sector studies covering production, food and nutrition security, and the economic case for investment.'
  if (key.includes('INSTITUTIONAL')) return 'We strengthen institutions through capacity building, grant management, financial systems and operational support.'
  if (original.toLowerCase().includes('google') || original.toLowerCase().includes('french fryer')) {
    return 'Senior advisory work for donor-funded monitoring, evaluation and infrastructure programmes.'
  }
  return 'Disruptive Consultancy Services provides monitoring, evaluation, climate-resilience and institutional-development support for governments and development partners.'
}

function replaceSectionCopy(title, copy) {
  const heading = [...document.querySelectorAll('h2')].find((element) =>
    element.textContent.trim().toUpperCase() === title
  )
  const paragraph = heading?.closest('section')?.nextElementSibling?.querySelector('p')
  if (paragraph) paragraph.textContent = copy
}

function replaceSiteFooter() {
  const footer = document.querySelector('footer')
  if (!footer) return
  footer.className = 'site-footer'
  footer.innerHTML = `
    <div class="footer-top">
      <a class="footer-brand" href="/"><img src="/DM_logo.png" alt=""> Disruptive Consultancy Services</a>
      <div class="footer-badges">
        <span>Consulting</span>
        <span>Evidence-led</span>
        <span>Global delivery</span>
      </div>
    </div>
    <div class="footer-grid">
      <div>
        <h4>Company</h4>
        <a href="/">Home</a>
        <a href="/about-us">Who We Are</a>
        <a href="/contact">Contact</a>
      </div>
      <div>
        <h4>Services</h4>
        <a href="/services">What We Offer</a>
        <a href="/services">Monitoring &amp; Evaluation</a>
        <a href="/services">Watershed Management</a>
        <a href="/services">Disaster Risk Management</a>
      </div>
      <div>
        <h4>Portfolio</h4>
        <a href="/projects">Projects</a>
        <a href="/locations">Where We've Worked</a>
        <a href="/projects/locations/india">India</a>
        <a href="/projects/locations/nepal">Nepal</a>
      </div>
      <div>
        <h4>Regions</h4>
        <a href="/projects/locations/yemen">Yemen</a>
        <a href="/projects/locations/afghanistan">Afghanistan</a>
        <a href="/locations">All locations</a>
        <a href="mailto:utiwari@developmentmonitors.com">Email the team</a>
      </div>
      <div>
        <h4>Legal</h4>
        <a href="/legal/privacy">Privacy</a>
        <a href="/legal/terms">Terms</a>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} Disruptive Consultancy Services Pvt. Ltd. All rights reserved.</div>
  `
}

function applyHomeMapBackground(map) {
  if (!map) return
  map.style.setProperty('background-image', "url('/new_world_map.png')", 'important')
  map.style.setProperty('background-size', 'contain', 'important')
  map.style.setProperty('background-position', 'center center', 'important')
  map.style.setProperty('background-repeat', 'no-repeat', 'important')
  map.style.setProperty('opacity', '1', 'important')
}

document.addEventListener('DOMContentLoaded', animate)
document.addEventListener('astro:after-swap', animate)
document.addEventListener('DOMContentLoaded', enhanceHomeHero)
document.addEventListener('astro:after-swap', enhanceHomeHero)
