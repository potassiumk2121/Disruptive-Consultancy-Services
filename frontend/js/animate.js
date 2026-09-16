const DCS_EMAIL = 'utiwari@developmentmonitors.com'
const DCS_LINKEDIN = 'https://www.linkedin.com/in/umesh-kumar-tiwari-62162816'
const DCS_ADDRESS = {
  name: 'Disruptive Consultancy Services Pvt. Ltd',
  street: 'Flat 307, 2nd Floor, Janta Flats, Pocket B-9, Sector 3, Rohini',
  city: 'New Delhi 110085, India',
  maps: 'https://www.google.com/maps/search/?api=1&query=Flat+307+Janta+Flats+Pocket+B-9+Sector+3+Rohini+Delhi+110085'
}

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
    header.home-page-header > div > div { display: flex; align-items: center; gap: 1rem; justify-content: space-between; }
    header.home-page-header > div > div > div { left: auto !important; position: static !important; top: auto !important; transform: none !important; }
    header.home-page-header .home-brand { align-items: center; color: #111 !important; display: flex; flex: 0 1 auto; font-size: .98rem; gap: .55rem; min-width: 0; }
    header.home-page-header .home-brand img {
      background: #f7f9fc; border: 1px solid #e1e7ef; border-radius: 50%; box-shadow: 0 3px 10px rgba(15,31,61,.1);
      flex: 0 0 42px; height: 42px !important; object-fit: contain; transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; width: 42px !important;
    }
    header.home-page-header .home-brand:hover img { border-color: #cfaa4a; box-shadow: 0 4px 14px rgba(15,31,61,.15); transform: translateY(-1px); }
    #drawer { display: none !important; height: 0 !important; pointer-events: none !important; }
    header.home-page-header nav { flex: 1 1 auto; justify-content: flex-end; min-width: 0; position: static !important; transform: none !important; }
    header.home-page-header nav a { color: #222 !important; font-family: Atkinson, sans-serif; }
    @media (min-width: 768px) and (max-width: 1100px) {
      header.home-page-header .home-brand { font-size: .8rem; }
      header.home-page-header nav { gap: .1rem; }
      header.home-page-header nav a { font-size: .72rem; height: 2rem; padding-left: .45rem; padding-right: .45rem; }
    }
    header.home-page-header nav a:hover {
      background: transparent !important;
      color: #0a1f3d !important;
    }
    header.home-page-header nav a.bg-black,
    header.home-page-header nav a.bg-white {
      background: transparent !important;
      border-bottom: 2px solid #d4a72c;
      border-radius: 0 !important;
      box-shadow: none !important;
      color: #0a1f3d !important;
      font-weight: 700;
      padding-left: .2rem !important;
      padding-right: .2rem !important;
    }
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
      background: linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.84), rgba(255,255,255,0)) !important;
      left: auto !important; max-width: 72rem; padding: .45rem 1rem .85rem !important;
      position: relative !important; text-align: center !important; top: auto !important; transform: none !important; width: 100%; z-index: 5;
    }
    .home-hero-welcome { display: block; font-size: .78rem; font-weight: 700; letter-spacing: .22em; margin: 0 0 .35rem; text-transform: uppercase; color: #111 !important; }
    .home-hero-title { color: #0b1b33 !important; font-size: clamp(1.45rem, 3.1vw, 2.55rem) !important; letter-spacing: .08em !important; line-height: 1.15; margin: 0 auto; max-width: 100%; white-space: normal; }
    .home-hero-tagline {
      align-items: center; color: #8a6512 !important; display: inline-flex !important; font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(.92rem, 1.45vw, 1.12rem) !important; font-style: italic; font-weight: 500; gap: .75rem;
      letter-spacing: .06em; line-height: 1.3; margin: .65rem auto 0 !important; position: relative; text-shadow: 0 1px 0 rgba(255,255,255,.9);
    }
    .home-hero-tagline::before, .home-hero-tagline::after {
      background: linear-gradient(90deg, transparent, #d4a72c); content: ''; display: block; height: 1px; width: clamp(28px, 5vw, 68px);
    }
    .home-hero-tagline::after { background: linear-gradient(90deg, #d4a72c, transparent); }
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
    .service-grid { display: grid; gap: 1.15rem; grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .service-offer-card {
      background: #fff; border: 1px solid #ececec; border-radius: 16px; box-shadow: 0 12px 28px rgba(0,0,0,.05);
      min-height: 420px; overflow: hidden; padding: 0 0 1.25rem; position: relative; transition: box-shadow .25s ease, transform .25s ease;
    }
    .service-offer-card:hover { box-shadow: 0 22px 46px rgba(15,23,42,.12); transform: translateY(-5px); }
    .service-media {
      background-color: #eef1f4; background-position: center; background-repeat: no-repeat; background-size: cover;
      height: 175px; margin-bottom: 1rem; overflow: hidden; position: relative; width: 100%;
    }
    .service-media::after { background: linear-gradient(180deg, transparent 55%, rgba(15,23,42,.18)); content: ""; inset: 0; position: absolute; }
    .service-offer-card h2, .service-offer-card > p { color: #111 !important; margin-left: 1.1rem !important; margin-right: 1.1rem !important; text-align: left !important; }
    .service-offer-card h2 p { margin: 0 !important; text-align: left !important; }
    .service-offer-card h2 { font-size: 1.05rem !important; letter-spacing: .02em; margin-bottom: .65rem !important; }
    .service-offer-card p { color: #444 !important; font-size: .95rem; line-height: 1.6; }
    .team-card {
      background: #fff; border: 1px solid #ececec; border-radius: 16px; box-shadow: 0 12px 28px rgba(0,0,0,.05);
      min-width: 280px; padding: 1.6rem 1.3rem !important; position: relative;
    }
    .team-card, .team-card * { background: #fff !important; color: #111 !important; opacity: 1 !important; }
    .locations-catalog { display: grid !important; gap: 1.25rem; grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .location-card {
      background: #fff !important; border: 1px solid #e8e8e8 !important; border-radius: 18px !important;
      box-shadow: 0 12px 32px rgba(15,23,42,.07) !important; color: #111 !important; margin: 0 !important;
      overflow: hidden; padding: 0 !important; transition: box-shadow .25s ease, transform .25s ease;
    }
    .location-card:hover { box-shadow: 0 20px 46px rgba(15,23,42,.12) !important; transform: translateY(-5px); }
    .location-card > div[id^="Project_locations_"] { height: 240px !important; width: 100% !important; }
    .location-card h2 { border-top: 1px solid #eee; margin: 0 !important; padding: 1rem .7rem 1.15rem; }
    .location-card h2, .location-card p { background: none !important; color: #111 !important; -webkit-text-fill-color: #111 !important; }
    .location-card p { font-size: 1rem !important; font-weight: 750; margin: 0 !important; }

    .projects-layout {
      align-items: flex-start; display: grid !important; gap: 2rem; grid-template-columns: 250px minmax(0, 1fr);
      max-width: 1380px !important; padding-bottom: 5rem !important;
    }
    .projects-filter {
      background: #fff; border: 1px solid #e4e7eb !important; border-radius: 16px; box-shadow: 0 14px 38px rgba(15,23,42,.07);
      min-width: 0 !important; overflow: hidden; padding: 0 !important; position: sticky; top: 5.2rem; width: 100% !important;
    }
    .filter-panel-head { align-items: center; border-bottom: 1px solid #e7e9ed; display: flex; justify-content: space-between; padding: 1.05rem 1.1rem; }
    .filter-panel-head h2 { color: #111827 !important; font-size: 1.05rem !important; letter-spacing: 0; margin: 0 !important; text-transform: none; }
    .filter-clear {
      background: transparent; border: 0; color: #3267a8; cursor: pointer; font-size: .68rem; font-weight: 800;
      letter-spacing: .06em; padding: .2rem; text-transform: uppercase;
    }
    .filter-clear:hover { color: #a66b00; }
    .filter-group { padding: 1.15rem 1.1rem 1.3rem; }
    .filter-group-title { color: #111827; font-size: .76rem; font-weight: 850; letter-spacing: .11em; margin: 0 0 .85rem; text-transform: uppercase; }
    .location-filter-list { display: grid; gap: .72rem; list-style: none; margin: 0; padding: 0; }
    .location-filter-option { align-items: center; color: #252b35; cursor: pointer; display: grid; font-size: .9rem; gap: .65rem; grid-template-columns: 18px 1fr auto; }
    .location-filter-option input {
      appearance: none; background: #fff; border: 1.5px solid #aeb5bf; border-radius: 3px; cursor: pointer;
      display: block; height: 18px; margin: 0; position: relative; transition: all .18s ease; width: 18px;
    }
    .filter-checkbox { display: none; }
    .location-filter-option input:checked { background: #111827; border-color: #111827; }
    .location-filter-option input:checked::after {
      border: solid #fff; border-width: 0 2px 2px 0; content: ""; height: 9px; left: 5px; position: absolute; top: 2px; transform: rotate(45deg); width: 5px;
    }
    .location-filter-option:hover input { border-color: #111827; }
    .filter-count { background: #f2f4f7; border-radius: 999px; color: #667085; font-size: .7rem; min-width: 24px; padding: .18rem .42rem; text-align: center; }
    .project-result-count { color: #667085; display: block; font-size: .85rem; font-weight: 500; margin-top: .25rem; }
    .projects-content { min-width: 0; padding: 0 !important; width: 100% !important; }
    .projects-content > h2 { font-size: clamp(1.65rem, 2.4vw, 2.25rem) !important; margin: 0 0 1.5rem !important; text-align: left !important; }
    #projects-container { display: grid !important; gap: 1.25rem; grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .project-item {
      background: #fff !important; border: 1px solid #ececec !important; border-radius: 16px !important;
      box-shadow: 0 12px 30px rgba(15,23,42,.06) !important; display: flex !important; flex-direction: column; gap: .5rem;
      min-height: 390px; overflow: hidden; padding: 0 0 1.15rem !important; position: relative; transition: box-shadow .25s ease, transform .25s ease;
    }
    .project-item:hover { box-shadow: 0 22px 48px rgba(15,23,42,.12) !important; transform: translateY(-5px); }
    .project-media {
      background-color: #f3f5f7; background-position: center; background-repeat: no-repeat; background-size: cover;
      height: 190px; margin-bottom: .55rem; overflow: hidden; position: relative; width: 100%;
    }
    .project-media::after { background: linear-gradient(180deg, transparent 55%, rgba(15,23,42,.18)); content: ""; inset: 0; position: absolute; }
    .project-item > h3, .project-item > p { margin-left: 1.05rem !important; margin-right: 1.05rem !important; }
    .project-item h3, .project-item h3 a, .project-item p { color: #111 !important; }
    .project-item h3 { font-size: 1.03rem; line-height: 1.35; min-height: 2.75rem; }
    .project-item p { color: #4b5563 !important; font-size: .87rem; line-height: 1.55; }
    .project-item p:last-child { margin-top: auto !important; }
    .project-item p:last-child span { color: #a66b00 !important; }
    .project-chip {
      align-self: flex-start; background: #111827; border-radius: 999px; color: #fff; font-size: .65rem; font-weight: 750;
      left: .85rem; letter-spacing: .08em; padding: .32rem .65rem; position: absolute; text-transform: uppercase; top: .85rem; z-index: 2;
    }

    .about-page { background: #f7f8fa !important; }
    .about-page .page-hero { background: #f7f8fa !important; padding-bottom: 2.5rem !important; }
    .about-intro-section { padding: 0 1.25rem 4rem; }
    .about-intro {
      background: #fff; border: 1px solid #e7e9ed; border-radius: 24px; box-shadow: 0 20px 55px rgba(15,23,42,.08);
      display: grid; grid-template-columns: 1.05fr .95fr; margin: 0 auto; max-width: 1120px; overflow: hidden;
    }
    .about-intro-copy { padding: clamp(2rem, 4vw, 3.5rem); }
    .about-eyebrow { color: #a66b00 !important; font-size: .72rem !important; font-weight: 850; letter-spacing: .16em; margin: 0 0 .8rem !important; text-transform: uppercase; }
    .about-intro-title { color: #111827 !important; font-size: clamp(2rem, 3.6vw, 3.25rem); font-weight: 500; letter-spacing: -.035em; line-height: 1.08; margin: 0 0 1.1rem; }
    .about-lead { color: #4b5563 !important; font-size: 1rem !important; line-height: 1.8 !important; margin: 0 !important; text-align: left !important; }
    .about-intro-media { background: url('/new_world_map2.png') center/cover no-repeat; min-height: 420px; position: relative; }
    .about-intro-media::after { background: linear-gradient(135deg, rgba(15,23,42,.04), rgba(15,23,42,.36)); content: ""; inset: 0; position: absolute; }
    .about-metrics { display: grid; gap: .8rem; grid-template-columns: repeat(3, 1fr); margin-top: 1.7rem; }
    .about-metric { border-left: 2px solid #d4a72c; padding-left: .75rem; }
    .about-metric strong { color: #111827; display: block; font-size: 1.35rem; line-height: 1; }
    .about-metric span { color: #667085; display: block; font-size: .72rem; line-height: 1.3; margin-top: .3rem; }
    .about-page .mx-auto.max-w-6xl { max-width: 1120px !important; }
    .about-page .mx-auto.max-w-6xl.space-y-24 { padding-bottom: 5rem !important; }
    .about-page .meet-the-team-section, .about-page .about-divider { margin-top: 1rem; }
    .about-page .meet-the-team-section h2, .about-page .about-divider h2 { color: #111827 !important; font-size: clamp(1.5rem, 2.5vw, 2rem) !important; letter-spacing: -.02em; }
    .about-page .meet-the-team-content > article > div { gap: 1.25rem; }
    .about-page .team-card {
      align-items: flex-start !important; background: #fff !important; border: 1px solid #e7e9ed; border-radius: 18px;
      box-shadow: 0 12px 34px rgba(15,23,42,.06); height: auto !important; min-height: 150px; padding: 1.5rem !important;
    }
    .about-page .team-card > .text-lg { font-size: 1.15rem; margin: 0 0 .35rem !important; }
    .team-role { color: #a66b00 !important; display: block; font-size: .78rem; font-weight: 750; letter-spacing: .06em; text-transform: uppercase; }
    .about-page .team-card > .absolute { bottom: 1.2rem !important; left: 1.5rem !important; opacity: 1 !important; transform: none !important; }
    .about-page .about-content-section article {
      background: #fff; border: 1px solid #e7e9ed; border-radius: 20px; box-shadow: 0 12px 34px rgba(15,23,42,.05); padding: 1.8rem 2rem;
    }
    .about-page .about-content-section .prose-block { border: 0; box-shadow: none; margin: 0; max-width: none; padding: 0; }
    .about-section-copy { margin: 0 auto; max-width: 66rem; }
    .about-section-copy > p { color: #344054 !important; font-size: .98rem; line-height: 1.8; margin: 0; }
    .about-section-copy > p + p { margin-top: .75rem; }
    .about-section-copy .about-section-lead { color: #111827 !important; font-size: 1.05rem; font-weight: 650; }
    .about-section-points { display: grid; gap: .85rem; grid-template-columns: repeat(3, minmax(0, 1fr)); list-style: none; margin: 1.35rem 0 0; padding: 0; }
    .about-section-points li { background: #f8f9fb; border: 1px solid #e8ebef; border-radius: 14px; min-height: 112px; padding: 1rem; }
    .about-section-points strong { color: #9a6900; display: block; font-size: .72rem; letter-spacing: .11em; margin-bottom: .45rem; text-transform: uppercase; }
    .about-section-points span { color: #344054; display: block; font-size: .88rem; line-height: 1.55; }

    .contact-page main { background: linear-gradient(180deg, #fff 0, #fbfaf7 58%, #fff 100%); }
    .contact-page .page-hero { padding: 5.6rem 1.25rem .9rem !important; }
    .contact-page .page-hero > div { padding: .5rem 0 0 !important; }
    .contact-page .page-hero p { font-size: clamp(1.55rem, 2.5vw, 2rem) !important; }
    .contact-page main > .relative > .mx-auto { padding-bottom: 2.25rem !important; padding-top: .75rem !important; }
    .contact-shell { display: grid; gap: 1.25rem; grid-template-columns: 1.16fr .84fr; margin: 0 auto; max-width: 1080px; }
    .contact-card, .contact-side {
      background: #fff; border: 1px solid #e7e7e7; border-radius: 20px; box-shadow: 0 16px 42px rgba(15,23,42,.075); padding: 1.6rem;
    }
    .contact-card h2, .contact-side h3, .contact-card label, .contact-card p, .contact-side p, .contact-side a { color: #111 !important; }
    .contact-card h2 { font-size: 1.3rem; line-height: 1.25; margin: 0 0 .5rem; }
    .contact-card form { display: grid; gap: .7rem .85rem; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: .9rem !important; }
    .contact-card form > div { margin-bottom: 0 !important; }
    .contact-card form > .full { grid-column: 1 / -1; }
    .contact-card label { display: block; font-size: .84rem; margin-bottom: .3rem; }
    .contact-card input, .contact-card textarea {
      background: #fafafa; border: 1px solid #e4e4e4; border-radius: 9px; box-sizing: border-box; color: #111; padding: .5rem .7rem; width: 100%;
    }
    .contact-card input { height: 38px; }
    .contact-card textarea { height: 70px !important; min-height: 70px; resize: vertical; }
    .contact-card form > .full { grid-column: 1 / -1; }
    .contact-honeypot { display: none !important; }
    .contact-card button {
      background: #111; border: 0; border-radius: 999px; color: #fff; cursor: pointer; font-weight: 700; height: 38px; justify-self: start; padding: .45rem 1.2rem;
    }
    .contact-card button:hover { background: #c9a227; color: #111; }
    .contact-card button:disabled { cursor: wait; opacity: .65; }
    .contact-form-status { color: #374151 !important; font-size: .9rem; line-height: 1.5; margin: .15rem 0 0; }
    .contact-form-status.is-success { color: #166534 !important; }
    .contact-form-status.is-error { color: #991b1b !important; }
    .contact-meta { color: #555 !important; font-size: .9rem; line-height: 1.55; margin: 0; }
    .contact-side { background: linear-gradient(145deg, #6484ae, #58789f) !important; border: 0; color: #0f0101 !important; overflow: hidden; position: relative; }
    .contact-side::before { background: #d4a72c; border-radius: 50%; content: ""; height: 180px; opacity: .16; position: absolute; right: -75px; top: -75px; width: 180px; }
    .contact-side h3, .contact-side p, .contact-side a, .contact-side strong { color: #fff !important; }
    .contact-side h3 { font-size: 1.45rem; line-height: 1.2; margin: 0 0 .6rem; }
    .contact-side-intro { color: #e6edf5 !important; font-size: .88rem; line-height: 1.55; margin: 0 0 1rem; }
    .contact-detail { align-items: flex-start; border-top: 1px solid rgba(255,255,255,.16); display: grid; gap: .75rem; grid-template-columns: 34px 1fr; padding: .72rem 0; }
    .contact-detail-icon { align-items: center; background: #d4a72c; border-radius: 9px; color: #111827 !important; display: flex; font-size: .8rem; font-weight: 850; height: 34px; justify-content: center; width: 34px; }
    .contact-detail b { color: #f8fafc; display: block; font-size: .68rem; letter-spacing: .12em; line-height: 1.2; margin-bottom: .16rem; text-transform: uppercase; }
    .contact-detail span, .contact-detail a { color: #f8fafc !important; font-size: .86rem; line-height: 1.42 !important; }
    .home-contact-panel {
      background: #5771a1; border-radius: 24px; box-shadow: 0 20px 50px rgba(15,23,42,.14); color: #fff;
      display: grid; gap: 2rem; grid-template-columns: 1.05fr 1fr; overflow: hidden; padding: 2.3rem;
    }
    .home-contact-copy h3 { color: #fff !important; font-size: clamp(1.5rem, 2.6vw, 2.2rem); line-height: 1.18; margin: 0 0 .7rem; }
    .home-contact-copy p { color: #cbd5e1 !important; line-height: 1.7; margin: 0 0 1.25rem; }
    .home-contact-button { background: #d4a72c; border-radius: 999px; color: #111827 !important; display: inline-flex; font-weight: 800; padding: .75rem 1.15rem; text-decoration: none; }
    .home-contact-grid { display: grid; gap: .8rem; grid-template-columns: 1fr; margin: 0; }
    .home-contact-tile {
      background: rgba(255,255,255,.075); border: 1px solid rgba(255,255,255,.12); border-radius: 14px;
      color: #f8fafc !important; padding: .9rem 1rem; text-align: left; text-decoration: none;
    }
    .home-contact-tile b { color: #d4a72c !important; display: block; font-size: .68rem; letter-spacing: .12em; margin-bottom: .3rem; text-transform: uppercase; }

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
    .legal-page article h4 { color: #111 !important; font-size: 1.05rem; font-weight: 750; margin: 1.5rem 0 .45rem; }
    .legal-page article p { color: #222 !important; line-height: 1.8; margin: 0 0 1rem; }
    .legal-page article a { color: #1d4ed8 !important; }

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
      #projects-container, .locations-catalog, .service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .projects-layout { grid-template-columns: 220px minmax(0, 1fr); }
      .contact-shell, .home-contact-panel, .footer-grid, .about-intro { grid-template-columns: 1fr; }
      .about-intro-media { min-height: 320px; }
      .home-hero-title { white-space: normal; }
      .world_map.home-hero-map { height: 38vh !important; }
    }
    @media (max-width: 700px) {
      .projects-layout, #projects-container, .locations-catalog, .service-grid { grid-template-columns: 1fr; }
      .projects-filter { position: static; }
      .project-item { min-height: 365px; }
      .contact-card form { grid-template-columns: 1fr; }
      .contact-card form > div, .contact-card form > button { grid-column: 1; }
      .home-contact-panel { padding: 1.4rem; }
      .about-metrics { grid-template-columns: 1fr; }
      .about-intro-copy { padding: 1.6rem; }
      .about-intro-media { min-height: 240px; }
      .about-section-points { grid-template-columns: 1fr; }
      .about-page .about-content-section article { padding: 1.35rem; }
    }
    .mobile-nav-rail { display: none; }
    @media not all and (min-width: 768px) {
      header.home-page-header > div { padding-left: .75rem !important; padding-right: .75rem !important; }
      header.home-page-header .home-brand { font-size: .78rem; gap: .35rem; max-width: calc(100vw - 1.5rem); min-width: 0; }
      header.home-page-header .home-brand img { flex-basis: 36px; height: 36px !important; width: 36px !important; }
      header.home-page-header .home-brand div { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      header.home-page-header nav:not(.mobile-nav-rail) { display: none !important; }
      .mobile-nav-rail {
        background: rgba(255,255,255,.98); border-bottom: 1px solid #e7e9ed; display: block; height: 48px;
        left: 0; overflow: hidden; position: fixed; right: 0; top: 64px; z-index: 49;
      }
      .mobile-nav-track {
        align-items: center; display: flex; gap: .45rem; height: 100%; overflow-x: auto; overflow-y: hidden;
        padding: .35rem .75rem; scroll-padding-inline: .75rem; scroll-snap-type: x proximity; scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
      }
      .mobile-nav-track::-webkit-scrollbar { display: none; }
      .mobile-nav-link {
        align-items: center; border: 1px solid transparent; border-radius: 0; color: #273244 !important; display: inline-flex;
        flex: 0 0 auto; font-family: Atkinson, sans-serif; font-size: .78rem; font-weight: 650; height: 34px; justify-content: center; padding: 0 .85rem;
        scroll-snap-align: center; text-decoration: none; white-space: nowrap;
      }
      .mobile-nav-link[aria-current="page"] {
        background: transparent; border: 0; border-bottom: 2px solid #d4a72c;
        color: #0a1f3d !important; font-weight: 700;
      }
      .page-hero, .locations-hero { padding-top: 8.4rem !important; }
      .contact-page .page-hero { padding-top: 8.4rem !important; }
      .hero-heading-wrap { top: 7.35rem !important; }
      .home-hero-stacked { padding-top: 7rem !important; }
      .what-we-do-nav { gap: .4rem; margin: 0 0 .35rem; }
      .what-we-do-nav button { height: 1.85rem; width: 1.85rem; }
      .what-we-do-scroller { padding: 0 0 .4rem; }
      .what-we-do-track { gap: .65rem; padding: .15rem .75rem .3rem; }
      .what-we-do-card {
        border-radius: 1rem; flex: 0 0 min(64vw, 12.75rem); min-height: 0 !important;
        padding: .75rem .65rem .7rem;
      }
      .what-we-do-card::before { height: 3px; }
      .what-we-do-card .round-10rem {
        height: 4.15rem !important; margin-bottom: .4rem !important; width: 4.15rem !important;
      }
      .what-we-do-card > p { font-size: .78rem !important; line-height: 1.3; margin-top: 0 !important; }
      .what-we-do-card .mb-8 { margin-bottom: 0 !important; }
      main .space-y-24 > section:has(.what-we-do-shell) { margin-top: .85rem !important; }
      .site-footer { padding: 2rem 1rem 1.25rem; }
      .footer-top { align-items: flex-start; margin-bottom: 1.5rem; }
      .footer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .footer-bottom { margin-top: 1.5rem; }
      .about-intro-section { padding-left: .75rem; padding-right: .75rem; }
      .about-intro-title { font-size: clamp(1.8rem, 9vw, 2.5rem); }
      .contact-card, .contact-side { padding: 1.25rem; }
      .contact-detail span, .contact-detail a { overflow-wrap: anywhere; }
      .projects-content { margin-top: 0 !important; }
      .projects-content, .locations-catalog { min-width: 0; }
      .filter-panel-head { padding: .8rem .9rem; }
      .filter-group { padding: .8rem .9rem .9rem; }
      .filter-group-title { margin-bottom: .55rem; }
      .location-filter-list {
        display: flex; gap: .5rem; margin-left: -.1rem; overflow-x: auto; padding: .1rem .1rem .3rem;
        scroll-snap-type: x proximity; scrollbar-width: none; -webkit-overflow-scrolling: touch;
      }
      .location-filter-list::-webkit-scrollbar { display: none; }
      .location-filter-option {
        background: #f8f9fb; border: 1px solid #e1e5ea; border-radius: 999px; flex: 0 0 auto;
        gap: .45rem; grid-template-columns: 18px auto auto; padding: .45rem .65rem; scroll-snap-align: start; white-space: nowrap;
      }
      .project-item, .location-card, .service-offer-card { max-width: 100%; min-width: 0; }
      .inner-page h1, .inner-page h2, .inner-page h3, .inner-page p { overflow-wrap: anywhere; }
      .page-hero p, .page-hero h1, .locations-hero p, .locations-hero h1 { font-size: clamp(1.35rem, 7vw, 1.9rem) !important; letter-spacing: .02em !important; text-transform: none !important; }
      .about-page .meet-the-team-section h2, .about-page .about-divider h2 { white-space: normal; }
      main .flex.mb-5.items-center.w-full { flex-wrap: wrap; justify-content: center; }
      main .flex.mb-5.items-center.w-full h2 { font-size: clamp(1.2rem, 6vw, 1.7rem) !important; text-align: center; white-space: normal; }
      [id^="Project_locations_"], .location-card > div[id^="Project_locations_"] { height: min(320px, 52vh) !important; }
      .footer-grid { grid-template-columns: 1fr; }
      .partners-section { overflow: hidden; padding: 1rem 0 .35rem !important; }
      .partner-row {
        display: flex !important; gap: .7rem; grid-template-columns: none !important;
        max-width: none; overflow-x: auto; overflow-y: hidden; padding: .1rem .75rem .55rem;
        scroll-snap-type: x proximity; scrollbar-width: none; -webkit-overflow-scrolling: touch;
      }
      .partner-row::-webkit-scrollbar { display: none; }
      .partner-card { flex: 0 0 8.4rem; padding: .8rem .6rem; scroll-snap-align: start; }
      .partner-logo { height: 58px; margin-bottom: .4rem; width: 58px; }
      .partner-name { font-size: .75rem; }
      .prose-block { padding: 1.15rem; }
      .who-we-are-text p { font-size: .95rem; }
    }
    @media (max-width: 480px) {
      .home-brand { font-size: .72rem !important; }
      .hero-title-primary { font-size: clamp(1.7rem, 9vw, 2.2rem) !important; }
      .hero-title-secondary { letter-spacing: .16em !important; }
      .hero-section-inner { min-height: 460px !important; }
    }
  `
}

function enhanceMobileNavigation() {
  const header = document.querySelector('header')
  if (!header || document.querySelector('.mobile-nav-rail')) return

  const links = [
    ['/', 'Home'],
    ['/about-us', 'Who we are'],
    ['/services', 'What we offer'],
    ['/projects', 'Projects'],
    ['/locations', "Where we've worked"],
    ['/contact', 'Contact us']
  ]
  const currentPath = location.pathname.replace(/\/$/, '') || '/'
  const rail = document.createElement('nav')
  rail.className = 'mobile-nav-rail'
  rail.setAttribute('aria-label', 'Mobile primary navigation')
  const track = document.createElement('div')
  track.className = 'mobile-nav-track'

  links.forEach(([href, label]) => {
    const link = document.createElement('a')
    const normalizedHref = href.replace(/\/$/, '') || '/'
    const isCurrent = normalizedHref === '/'
      ? currentPath === '/'
      : currentPath === normalizedHref || currentPath.startsWith(`${normalizedHref}/`)
    link.className = 'mobile-nav-link'
    link.href = href
    link.textContent = label
    if (isCurrent) link.setAttribute('aria-current', 'page')
    track.appendChild(link)
  })

  rail.appendChild(track)
  header.insertAdjacentElement('afterend', rail)
  requestAnimationFrame(() => {
    track.querySelector('[aria-current="page"]')?.scrollIntoView({ block: 'nearest', inline: 'center' })
  })
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
  enhanceMobileNavigation()

  enhanceMeetTheTeam()
  enhanceWhatWeDo()
  enhanceInnerPages()
  enhanceAboutPage()
  enhanceProjects()
  enhanceLocations()
  enhanceContact()
  replaceDummyCopy()
  replaceSiteFooter()
  copyEditSite()
  enhanceLegalPages()

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

  let tagline = hero.querySelector('.home-hero-tagline') ||
    [...hero.querySelectorAll('p')].find((element) =>
      element.textContent.toLowerCase().includes('transforming ideas into impact')
    )
  if (!tagline && title) {
    tagline = document.createElement('p')
  }
  if (tagline && title) {
    tagline.textContent = 'Transforming Ideas into Impact'
    tagline.classList.add('home-hero-tagline')
    title.insertAdjacentElement('afterend', tagline)
  }
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

  document.querySelectorAll('.page-hero p, .locations-hero p').forEach((paragraph) => {
    if (document.querySelector('h1') || paragraph.closest('article, form')) return
    const heading = document.createElement('h1')
    heading.className = paragraph.className
    heading.textContent = paragraph.textContent.trim()
    paragraph.replaceWith(heading)
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
    const serviceImages = [
      '/new_world_map2.png',
      '/ico/Services/water-suppy.jpg',
      '/new_world_map2.png',
      '/new_world_map2.png',
      '/new_world_map2.png',
      '/new_world_map2.png',
      '/new_world_map2.png',
      '/new_world_map2.png'
    ]
    ;[...servicesGrid.children].forEach((card, index) => {
      card.classList.add('service-offer-card')
      if (card.querySelector('.service-media')) return
      const title = card.querySelector('h2')?.textContent.replace(/\s+/g, ' ').trim() || 'Professional service'
      const media = document.createElement('div')
      media.className = 'service-media'
      media.setAttribute('role', 'img')
      media.setAttribute('aria-label', title)
      media.style.backgroundImage = `url("${serviceImages[index % serviceImages.length]}")`
      card.prepend(media)
    })
  }
}

function enhanceAboutPage() {
  if (location.pathname.replace(/\/$/, '') !== '/about-us') return
  document.body.classList.add('about-page')

  const introSection = document.querySelector('main > section.relative.text-center')
  if (introSection && introSection.dataset.redesigned !== 'true') {
    introSection.dataset.redesigned = 'true'
    introSection.className = 'about-intro-section'
    introSection.innerHTML = `
      <div class="about-intro">
        <div class="about-intro-copy">
          <p class="about-eyebrow">Evidence-led development consulting</p>
          <h2 class="about-intro-title">Experience that turns complex programmes into measurable progress.</h2>
          <p class="about-lead">Disruptive Consultancy Services combines more than three decades of leadership in monitoring, evaluation, infrastructure and institutional development. We help governments and development partners make confident decisions with credible field evidence and practical delivery support.</p>
          <div class="about-metrics">
            <div class="about-metric"><strong>30+</strong><span>Years of leadership experience</span></div>
            <div class="about-metric"><strong>$260M+</strong><span>Programmes led by our founders</span></div>
            <div class="about-metric"><strong>5</strong><span>Core operating countries</span></div>
          </div>
        </div>
        <div class="about-intro-media" role="img" aria-label="DCS field programme in India"></div>
      </div>
    `
  }

  document.querySelectorAll('main h2').forEach((heading) => {
    const title = heading.textContent.trim().toUpperCase()
    if (['OUR STORY & MISSION', 'AWARDS AND ACHIEVEMENTS', 'OUR APPROACH AND TECHNOLOGIES'].includes(title)) {
      const divider = heading.closest('section')
      const content = divider?.nextElementSibling
      divider?.classList.add('about-divider')
      content?.classList.add('about-content-section')
    }
  })

  document.querySelectorAll('.team-card').forEach((card) => {
    const name = card.querySelector('.text-lg')
    if (!name || card.querySelector('.team-role')) return
    const role = document.createElement('span')
    role.className = 'team-role'
    role.textContent = 'Co-founder & Senior Adviser'
    name.insertAdjacentElement('afterend', role)
  })
}

function enhanceProjects() {
  const container = document.getElementById('projects-container')
  if (!container) return

  const wrapper = container.closest('.mx-auto')
  if (wrapper) wrapper.classList.add('projects-layout')
  const filterPanel = wrapper?.querySelector('aside')
  filterPanel?.classList.add('projects-filter')
  container.closest('section')?.classList.add('projects-content')

  const projectImages = {
    Nepal: ['/ico/locations/Nepal/Picture1.jpg', '/ico/locations/Nepal/Picture2.jpg'],
    Yemen: ['/ico/locations/Yemen/Picture1.jpg', '/ico/locations/Yemen/Picture3.jpg', '/new_world_map2.png'],
    India: ['/ico/locations/India/Picture1.jpg', '/ico/locations/India/Picture2.jpg', '/ico/locations/India/Picture3.png'],
    Afghanistan: ['/ico/locations/Afghanistan/Picture1.png', '/ico/locations/Afghanistan/Picture3.png', '/ico/locations/Afghanistan/Picture5.png'],
    Others: ['/new_world_map2.png']
  }
  const imageCounters = {}
  const locationCounts = {}

  container.querySelectorAll('.project-item').forEach((card) => {
    const location = card.getAttribute('data-location') || 'Global'
    locationCounts[location] = (locationCounts[location] || 0) + 1
    if (card.querySelector('.project-chip')) return
    const images = projectImages[location] || ['/new_world_map.png']
    const imageIndex = imageCounters[location] || 0
    imageCounters[location] = imageIndex + 1
    const media = document.createElement('div')
    media.className = 'project-media'
    media.setAttribute('role', 'img')
    media.setAttribute('aria-label', `${location} project`)
    media.style.backgroundImage = `url("${images[imageIndex % images.length]}")`
    card.prepend(media)
    const chip = document.createElement('span')
    chip.className = 'project-chip'
    chip.textContent = location
    card.prepend(chip)
  })

  if (filterPanel && filterPanel.dataset.filterReady !== 'true') {
    filterPanel.dataset.filterReady = 'true'
    filterPanel.innerHTML = `
      <div class="filter-panel-head">
        <h2>Filters</h2>
        <button class="filter-clear" type="button">Clear all</button>
      </div>
      <div class="filter-group">
        <h3 class="filter-group-title">Location</h3>
        <ul class="location-filter-list">
          ${Object.keys(locationCounts).sort().map((location) => `
            <li>
              <label class="location-filter-option">
                <input class="location-filter-input" type="checkbox" value="${location}">
                <span class="filter-checkbox" aria-hidden="true"></span>
                <span>${location}</span>
                <span class="filter-count">${locationCounts[location]}</span>
              </label>
            </li>
          `).join('')}
        </ul>
      </div>
    `
  }

  const projectsHeading = container.previousElementSibling
  if (projectsHeading && !projectsHeading.querySelector('.project-result-count')) {
    const count = document.createElement('span')
    count.className = 'project-result-count'
    count.textContent = `${container.children.length} projects`
    projectsHeading.appendChild(count)
  }
}

function enhanceLocations() {
  const locationCards = [...document.querySelectorAll('.location-card')]
  if (!locationCards.length) return
  const grid = locationCards[0].parentElement
  if (grid) grid.classList.add('locations-catalog')
}

function enhanceContact() {
  const path = location.pathname.replace(/\/$/, '')
  if (path === '/contact') {
    document.body.classList.add('contact-page')
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
    <div class="home-contact-panel">
      <div class="home-contact-copy">
        <h3>Let’s turn your programme challenge into measurable impact.</h3>
        <p>Share your assignment, geography and delivery timeline. Our senior team will respond with a practical next step.</p>
        <a class="home-contact-button" href="/contact">Start a conversation&nbsp; →</a>
      </div>
      <div class="home-contact-grid">
        <a class="home-contact-tile" href="mailto:${DCS_EMAIL}">
          <b>Email</b>${DCS_EMAIL}
        </a>
        <a class="home-contact-tile" href="${DCS_LINKEDIN}" target="_blank" rel="noopener noreferrer">
          <b>LinkedIn</b>Umesh Kumar Tiwari
        </a>
        <a class="home-contact-tile" href="${DCS_ADDRESS.maps}" target="_blank" rel="noopener noreferrer">
          <b>Registered office</b>${DCS_ADDRESS.name}, ${DCS_ADDRESS.street}, ${DCS_ADDRESS.city}
        </a>
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
        <form id="dcs-contact-form" class="mt-4" novalidate>
          <label class="contact-honeypot">Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
          <div><label for="name">Name</label><input id="name" name="name" type="text" required placeholder="Your name"></div>
          <div><label for="email">Email</label><input id="email" name="email" type="email" required placeholder="you@organisation.org"></div>
          <div class="full"><label for="organisation">Organisation</label><input id="organisation" name="organisation" type="text" placeholder="Agency, ministry or firm"></div>
          <div class="full"><label for="message">Message</label><textarea id="message" name="message" rows="4" required placeholder="Project context, location and support required"></textarea></div>
          <button class="full" type="submit">Send message</button>
          <p class="contact-form-status full" id="dcs-contact-status" role="status" aria-live="polite"></p>
        </form>
      </div>
      <aside class="contact-side">
        <h3>Direct contact</h3>
        <p class="contact-side-intro">Write to the senior advisory team about donor-funded monitoring, evaluation and infrastructure programmes.</p>
        <div class="contact-detail">
          <span class="contact-detail-icon">@</span>
          <div><b>Email</b><a href="mailto:${DCS_EMAIL}">${DCS_EMAIL}</a></div>
        </div>
        <div class="contact-detail">
          <span class="contact-detail-icon">in</span>
          <div><b>LinkedIn</b><a href="${DCS_LINKEDIN}" target="_blank" rel="noopener noreferrer">Umesh Kumar Tiwari</a></div>
        </div>
        <div class="contact-detail">
          <span class="contact-detail-icon">D</span>
          <div><b>Registered office</b><a href="${DCS_ADDRESS.maps}" target="_blank" rel="noopener noreferrer">${DCS_ADDRESS.name}<br>${DCS_ADDRESS.street}<br>${DCS_ADDRESS.city}</a></div>
        </div>
        <div class="contact-detail">
          <span class="contact-detail-icon">L</span>
          <div><b>Leadership</b><span>Umesh Kumar Tiwari, Managing Director<br>Dr James K. Weeks</span></div>
        </div>
      </aside>
    </div>
  `
}

function bindContactForm(root) {
  const form = root.querySelector('#dcs-contact-form')
  const status = root.querySelector('#dcs-contact-status')
  const button = form?.querySelector('button[type="submit"]')
  if (!form || !status || !button) return

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const name = root.querySelector('#name')?.value.trim() || ''
    const email = root.querySelector('#email')?.value.trim() || ''
    const organisation = root.querySelector('#organisation')?.value.trim() || ''
    const message = root.querySelector('#message')?.value.trim() || ''
    const website = root.querySelector('input[name="website"]')?.value.trim() || ''

    status.className = 'contact-form-status full'
    if (!name || !email || !message) {
      status.classList.add('is-error')
      status.textContent = 'Please complete your name, email and message.'
      return
    }

    button.disabled = true
    status.textContent = 'Sending your message…'

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, organisation, message, website })
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'The message could not be sent.')
      status.classList.add('is-success')
      status.textContent = data.emailed === false
        ? `Your message was received. If you do not hear back within two working days, please write to ${DCS_EMAIL}.`
        : 'Thank you. Your message has been emailed to the team. We typically reply within two working days.'
      form.reset()
    } catch (error) {
      status.classList.add('is-error')
      status.innerHTML = `${error.message || 'The message could not be sent.'} You can also write directly to <a href="mailto:${DCS_EMAIL}">${DCS_EMAIL}</a>.`
    } finally {
      button.disabled = false
    }
  })
}

function replaceDummyCopy() {
  const serviceCopy = {
    'MONITORING AND EVALUATION': 'Independent monitoring, evaluation and remote verification for donor-funded infrastructure and social programmes, including survey design, data quality and performance reporting.',
    'WATERSHED MANAGEMENT': 'Technical support for watershed restoration, water-resource planning and community-based catchment management, including economic analysis of water investments.',
    'DISASTER RISK MANAGEMENT AND EARLY WARNING SYSTEMS': 'Disaster risk management training, climate-resilient planning and early-warning support for governments and implementing agencies in fragile settings.',
    'SOLID WASTE MANAGEMENT AND GENERAL ASSESSMENT': 'Solid waste diagnostics, gender-responsive assessments and operational planning to strengthen municipal and programme-level waste systems.',
    'MARKET ASSESSMENT AND VALUE CHAIN ANALYSIS': 'Market diagnostics and agricultural value-chain analysis to identify constraints, opportunities and practical interventions for producers and local enterprise.',
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

  replaceSectionCopy('OUR STORY & MISSION', {
    lead: 'DCSPL was established in Delhi in 2022 to bring senior monitoring, evaluation and programme-management expertise closer to governments and development partners.',
    body: 'Our mission is to turn complex field evidence into practical decisions that improve infrastructure quality, climate resilience and community outcomes. We combine economist-led analysis with experienced operational teams across South Asia and fragile contexts, helping programmes move from design to verification and measurable delivery.',
    points: [
      ['Our purpose', 'Make development investments more transparent, accountable and responsive to the people they serve.'],
      ['Our model', 'Connect senior strategic advice with dependable local teams, field evidence and clear reporting.'],
      ['Our commitment', 'Deliver independent findings, practical recommendations and solutions that partners can sustain.']
    ]
  })
  replaceSectionCopy('AWARDS AND ACHIEVEMENTS', {
    lead: 'Our strongest achievement is a record of trusted delivery across complex rural, urban and humanitarian programmes.',
    body: 'The founding team has led assignments with a cumulative programme value exceeding US$260 million for institutions including the World Bank, KfW, USAID, the European Commission, WHO, UNICEF and leading foundations. This experience includes infrastructure verification, climate-resilient design, disaster-risk training, food-security analysis and institutional strengthening.',
    points: [
      ['Programme scale', 'Leadership across multi-million-dollar portfolios with demanding technical and fiduciary requirements.'],
      ['Institutional trust', 'Assignments delivered for global development agencies, governments, foundations and implementing partners.'],
      ['Field achievement', 'Credible evidence and recommendations produced in fragile, remote and resource-constrained settings.']
    ]
  })
  replaceSectionCopy('OUR APPROACH AND TECHNOLOGIES', {
    lead: 'We combine participatory field methods, rigorous analysis and fit-for-purpose technology to produce evidence that decision-makers can use.',
    body: 'Our teams use smartphone data collection, open-source applications, satellite imagery, sensors and UAVs where they improve accuracy, speed or access. Technology is supported by quality assurance, local consultation and senior technical review, ensuring that digital evidence reflects real programme conditions and leads to practical action.',
    points: [
      ['Evidence first', 'Clear indicators, representative data and independent quality checks guide every assessment.'],
      ['Smart technology', 'Remote monitoring and geospatial tools extend oversight where travel or access is limited.'],
      ['Sustainable delivery', 'Low-cost, transferable systems help host institutions continue using the approach independently.']
    ]
  })

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

function replaceSectionCopy(title, content) {
  const heading = [...document.querySelectorAll('h2')].find((element) =>
    element.textContent.trim().toUpperCase() === title
  )
  const article = heading?.closest('section')?.nextElementSibling?.querySelector('article')
  if (!article) return

  if (typeof content === 'string') {
    const paragraph = article.querySelector('p')
    if (paragraph) paragraph.textContent = content
    return
  }

  const points = content.points.map(([label, text]) =>
    `<li><strong>${label}</strong><span>${text}</span></li>`
  ).join('')

  article.innerHTML = `
    <div class="about-section-copy">
      <p class="about-section-lead">${content.lead}</p>
      <p>${content.body}</p>
      <ul class="about-section-points">${points}</ul>
    </div>
  `
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
        <a href="/about-us">Who we are</a>
        <a href="/contact">Contact</a>
      </div>
      <div>
        <h4>Services</h4>
        <a href="/services">What we offer</a>
        <a href="/services">Monitoring and evaluation</a>
        <a href="/services">Watershed management</a>
        <a href="/services">Disaster risk management</a>
      </div>
      <div>
        <h4>Portfolio</h4>
        <a href="/projects">Projects</a>
        <a href="/locations">Where we've worked</a>
        <a href="/projects/locations/india">India</a>
        <a href="/projects/locations/nepal">Nepal</a>
      </div>
      <div>
        <h4>Regions</h4>
        <a href="/projects/locations/yemen">Yemen</a>
        <a href="/projects/locations/afghanistan">Afghanistan</a>
        <a href="/locations">All locations</a>
        <a href="mailto:${DCS_EMAIL}">${DCS_EMAIL}</a>
      </div>
      <div>
        <h4>Legal</h4>
        <a href="/legal/privacy">Privacy</a>
        <a href="/legal/terms">Terms</a>
        <a href="${DCS_LINKEDIN}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="${DCS_ADDRESS.maps}" target="_blank" rel="noopener noreferrer">Rohini, New Delhi</a>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} Disruptive Consultancy Services Pvt. Ltd. All rights reserved.</div>
  `
}

function copyEditSite() {
  const headingFixes = {
    'WHO WE ARE': 'Who we are',
    'WHAT WE DO': 'What we do',
    'WHAT WE OFFER': 'What we offer',
    "WHERE WE'VE WORKED": "Where we've worked",
    'WHERE WEVE WORKED': "Where we've worked",
    'PARTNERS': 'Partners',
    'CONTACT US': 'Contact us',
    'REACH US': 'Reach us',
    'OUR PROJECTS': 'Our projects',
    'PROFESSIONAL SERVICES': 'Professional services',
    'LOCATIONS WITH PROJECTS': 'Locations with projects',
    'OUR STORY & MISSION': 'Our story and mission',
    'OUR STORY AND MISSION': 'Our story and mission',
    'AWARDS AND ACHIEVEMENTS': 'Awards and achievements',
    'OUR APPROACH AND TECHNOLOGIES': 'Our approach and technologies',
    'MEET THE TEAM': 'Meet the team',
    'WHO WE ARE': 'Who we are',
    'WHAT WE OFFER': 'What we offer',
    'MONITORING AND EVALUATION': 'Monitoring and evaluation',
    'WATERSHED MANAGEMENT': 'Watershed management',
    'DISASTER RISK MANAGEMENT AND EARLY WARNING SYSTEMS': 'Disaster risk management and early warning systems',
    'SOLID WASTE MANAGEMENT AND GENERAL ASSESSMENT': 'Solid waste management and general assessment',
    'MARKET ASSESSMENT AND VALUE CHAIN ANALYSIS': 'Market assessment and value chain analysis',
    'MARKET ASSESSMENT AND VALUE CHAIN ANALAYSIS': 'Market assessment and value chain analysis',
    'DEVELOPMENT OF TOOLKIT': 'Development of toolkit',
    'AGRICULTURAL SECTOR ASSESSMENT': 'Agricultural sector assessment',
    'INSTITUTIONAL DEVELOPMENT': 'Institutional development',
    'PRIVACY POLICY': 'Privacy policy',
    'TERMS OF USE': 'Terms of use'
  }

  const navFixes = {
    'who we are': 'Who we are',
    'what we offer': 'What we offer',
    'what we offer': 'What we offer',
    "where we've worked": "Where we've worked",
    'contact us': 'Contact us'
  }

  document.querySelectorAll('h1, h2, h3, h4, p').forEach((node) => {
    node.classList.remove('uppercase')
    const compact = node.textContent.replace(/\s+/g, ' ').trim()
    if (!compact || node.closest('form, .contact-card, .footer-grid, .about-intro-copy, .home-hero-title, .hero-main-title')) return
    const key = compact.toUpperCase().replace(/['’]/g, "'")
    if (headingFixes[key]) {
      node.textContent = headingFixes[key]
      return
    }
    if (compact.includes('Analaysis') || compact.includes('analaysis')) {
      node.textContent = compact.replace(/Analaysis/g, 'Analysis').replace(/analaysis/g, 'analysis')
    }
  })

  document.querySelectorAll('header nav a, .mobile-nav-link, .footer-grid a').forEach((link) => {
    const key = link.textContent.replace(/\s+/g, ' ').trim().toLowerCase()
    if (navFixes[key]) link.textContent = navFixes[key]
    if (link.textContent.includes('What we Offer')) link.textContent = link.textContent.replace('What we Offer', 'What we offer')
  })

  document.querySelectorAll('p, li, span, a, h2, h3').forEach((node) => {
    if (!node.childElementCount && /Analaysis|analaysis/.test(node.textContent)) {
      node.textContent = node.textContent.replace(/Analaysis/g, 'Analysis').replace(/analaysis/g, 'analysis')
    }
  })
}

function enhanceLegalPages() {
  const path = location.pathname.replace(/\/$/, '')
  const article = document.querySelector('main article')
  if (!article) return
  if (path === '/legal/privacy' || path === '/legal/terms') document.body.classList.add('legal-page')
  if (path === '/legal/privacy') {
    article.innerHTML = privacyMarkup()
    const updated = document.querySelector('main .page-heading')?.nextElementSibling
    if (updated && updated.tagName === 'P') updated.textContent = 'Last updated: 15 September 2026'
  }
  if (path === '/legal/terms') {
    article.innerHTML = termsMarkup()
    const updated = document.querySelector('main .page-heading')?.nextElementSibling
    if (updated && updated.tagName === 'P') updated.textContent = 'Last updated: 15 September 2026'
  }
}

function privacyMarkup() {
  return `
    <p>This privacy notice explains how Disruptive Consultancy Services Private Limited (“DCS”, “we”, “us”) collects, uses and protects information when you visit this website or contact us. It is written for a professional services firm incorporated in India (CIN U74999DL2022PTC400214) and is intended to sit alongside the Digital Personal Data Protection Act, 2023. It is not a substitute for the confidentiality or data-processing clauses in a signed assignment contract.</p>
    <h4 id="who-we-are">Who we are</h4>
    <p>The data fiduciary for this website is Disruptive Consultancy Services Pvt. Ltd, registered at Flat 307, 2nd Floor, Janta Flats, Pocket B-9, Sector 3, Rohini, New Delhi 110085, India. Enquiries: <a href="mailto:${DCS_EMAIL}">${DCS_EMAIL}</a>.</p>
    <h4 id="personal-identification-information">Personal information we collect</h4>
    <p>If you use the contact form or email us, we collect your name, email address, organisation name if you provide one, and the content of your message. We do not ask for government identity numbers, financial credentials or special-category data through this website. Please do not send confidential third-party information unless you are authorised to do so.</p>
    <h4 id="non-personal-identification-information">Technical information</h4>
    <p>Our hosting provider may record standard server logs such as IP address, browser type, referring URL and pages requested. We use this information to keep the site available, diagnose faults and understand which pages are useful. We do not use it to build advertising profiles.</p>
    <h4 id="web-browser-cookies">Cookies</h4>
    <p>This site uses only cookies or local storage that are needed for basic operation, such as remembering a display preference. We do not set advertising or cross-site tracking cookies. You can block or delete cookies in your browser; essential functions of the site will still work.</p>
    <h4 id="how-we-use-collected-information">How we use information</h4>
    <p>We use enquiry data to reply to you, assess whether we can help, prepare a proposal where relevant, and keep a short record of correspondence. We may also use anonymised usage data to improve the website. We do not sell, rent or trade personal information.</p>
    <h4 id="how-we-protect-your-information">How we protect information</h4>
    <p>Access to enquiry records is limited to staff and processors who need them to respond or host the site. Messages are transmitted to us by email. Email is not a perfectly secure channel; do not send passwords or highly sensitive personal data through the form. Assignment files are handled under the security terms of the relevant contract.</p>
    <h4 id="sharing-your-personal-information">When we share information</h4>
    <p>We share personal information with our email and hosting providers, and with professional advisers, only as needed to operate the site or respond to you. We may disclose information if required by Indian law, a court or a regulator. We do not pass website enquiries to unrelated third parties for marketing.</p>
    <h4 id="retention-and-your-rights">Retention and your rights</h4>
    <p>We keep unsuccessful or general enquiries only as long as needed to complete the correspondence and any follow-up, then delete or anonymise them. If you become a client, retention follows the contract and our statutory record-keeping duties. You may request access, correction or erasure of personal data we hold about you by writing to <a href="mailto:${DCS_EMAIL}">${DCS_EMAIL}</a>, subject to legal exceptions.</p>
    <h4 id="changes-to-this-privacy-policy">Changes</h4>
    <p>If we change this notice we will update this page and the date above. Continued use of the website after a change means you have had notice of the revised practice. For questions about privacy, contact the registered office or email listed above.</p>
  `
}

function termsMarkup() {
  return `
    <p>These terms of use govern access to the public website of Disruptive Consultancy Services Private Limited (“DCS”). By using the site you agree to them. They apply to website use only. Professional services are provided solely under a separate written contract, purchase order or terms of engagement.</p>
    <h4 id="agreement-to-terms">Using this website</h4>
    <p>You may browse the site for information about our firm, services and experience. You must not misuse the enquiry form, attempt to disrupt the site, scrape it in a way that impairs others, or submit content that is unlawful, defamatory or confidential to a third party. We may suspend access for maintenance or misuse.</p>
    <h4 id="intellectual-property-rights">Intellectual property</h4>
    <p>Unless otherwise stated, the text, layout, logo, maps and photographs on this site belong to DCS or to licensors who have allowed us to display them. You may quote a short extract for non-commercial reference with acknowledgement. You may not copy the site, our project descriptions or our visual identity for commercial use without written permission. Client and donor names appear as factual descriptions of work; their logos remain their property.</p>
    <h4 id="information-on-the-site">Information on the site</h4>
    <p>Project summaries, maps and service descriptions are provided for general professional communication. They are not an offer, a bid, a guarantee of outcome, or advice on which you should rely for a specific decision. Dates, values and geographies are stated in good faith from our records and may be summarised. Always confirm current facts with us before relying on them in a procurement or legal process.</p>
    <h4 id="user-representations">Enquiries and proposals</h4>
    <p>Submitting an enquiry does not create a client relationship. We are not obliged to respond to every message or to bid for every assignment. Any proposal, fee, timeline or methodology we later send is valid only on the terms stated in that document until a contract is signed.</p>
    <h4 id="links-to-other-websites">Third-party sites</h4>
    <p>The site may link to donor, partner, mapping or social-media services, including LinkedIn. Those sites have their own terms and privacy practices. DCS is not responsible for their content or for any loss arising from your use of them.</p>
    <h4 id="liability">Limitation of liability</h4>
    <p>To the extent permitted by Indian law, DCS is not liable for loss arising from use of this website, including interruption, inaccurate summary information, or reliance on material that is not a signed deliverable. Nothing in these terms excludes liability that cannot be excluded by law, including for fraud or personal injury caused by negligence.</p>
    <h4 id="governing-law">Governing law</h4>
    <p>These website terms are governed by the laws of India. Courts at New Delhi have exclusive jurisdiction over disputes about use of the website, unless a signed professional contract names a different forum for that assignment.</p>
    <h4 id="changes-to-these-terms-of-use">Changes</h4>
    <p>We may revise these terms from time to time. The date at the top of the page is the effective date. If you continue to use the site after a revision, the updated terms apply to that later use.</p>
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
