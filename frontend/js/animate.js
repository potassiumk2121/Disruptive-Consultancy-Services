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
    header.home-page-header .home-brand { align-items: center; color: #111 !important; display: flex; font-size: .98rem; gap: .55rem; }
    header.home-page-header .home-brand img {
      background: #f7f9fc; border: 1px solid #e1e7ef; border-radius: 50%; box-shadow: 0 3px 10px rgba(15,31,61,.1);
      flex: 0 0 42px; height: 42px !important; object-fit: contain; transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; width: 42px !important;
    }
    header.home-page-header .home-brand:hover img { border-color: #cfaa4a; box-shadow: 0 4px 14px rgba(15,31,61,.15); transform: translateY(-1px); }
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
    .about-intro h1 { color: #111827 !important; font-size: clamp(2rem, 3.6vw, 3.25rem); letter-spacing: -.035em; line-height: 1.08; margin: 0 0 1.1rem; }
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
    .about-page .meet-the-team-section h2, .about-page .about-divider h2 { color: #111827 !important; font-size: clamp(1.5rem, 2.5vw, 2rem) !important; letter-spacing: -.02em; white-space: nowrap; }
    .about-page .meet-the-team-content > article > div { gap: 1.25rem; }
    .about-page .team-card {
      align-items: flex-start !important; background: #fff !important; border: 1px solid #e7e9ed; border-radius: 18px;
      box-shadow: 0 12px 34px rgba(15,23,42,.06); height: auto !important; min-height: 150px; padding: 1.5rem !important;
    }
    .about-page .team-card > .text-lg { font-size: 1.15rem; margin: 0 0 .35rem !important; }
    .team-role { color: #a66b00 !important; display: block; font-size: .78rem; font-weight: 750; letter-spacing: .06em; text-transform: uppercase; }
    .about-page .team-card > .absolute { bottom: 1.2rem !important; left: 1.5rem !important; opacity: 1 !important; transform: none !important; }
    .about-page .about-content-section article {
      background: #fff; border: 1px solid #e7e9ed; border-radius: 18px; box-shadow: 0 12px 34px rgba(15,23,42,.05); padding: 1.6rem 1.8rem;
    }
    .about-page .about-content-section .prose-block { border: 0; box-shadow: none; margin: 0; max-width: none; padding: 0; }

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
    .contact-card form > div:nth-child(3), .contact-card form > div:nth-child(4), .contact-card form > button { grid-column: 1 / -1; }
    .contact-card label { display: block; font-size: .84rem; margin-bottom: .3rem; }
    .contact-card input, .contact-card textarea {
      background: #fafafa; border: 1px solid #e4e4e4; border-radius: 9px; box-sizing: border-box; color: #111; padding: .5rem .7rem; width: 100%;
    }
    .contact-card input { height: 38px; }
    .contact-card textarea { height: 70px !important; min-height: 70px; resize: vertical; }
    .contact-card button {
      background: #111; border: 0; border-radius: 999px; color: #fff; cursor: pointer; font-weight: 700; height: 38px; justify-self: start; padding: .45rem 1.2rem;
    }
    .contact-card button:hover { background: #c9a227; color: #111; }
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
    
  }

  enhanceMeetTheTeam()
  enhanceWhatWeDo()
  enhanceInnerPages()
  enhanceAboutPage()
  enhanceProjects()
  enhanceLocations()
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
          <h1>Experience that turns complex programmes into measurable progress.</h1>
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
        <a class="home-contact-tile" href="mailto:utiwari@developmentmonitors.com">
          <b>Email</b>utiwari@developmentmonitors.com
        </a>
        <a class="home-contact-tile" href="/projects">
          <b>Relevant experience</b>Explore our international project portfolio
        </a>
        <div class="home-contact-tile">
          <b>Head office</b>Disruptive Consultancy Services Pvt. Ltd, Delhi, India
        </div>
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
          <div class="mb-4"><label for="message">Message</label><textarea id="message" name="message" rows="4" required placeholder="Project context, location and support required"></textarea></div>
          <button type="submit">Send message</button>
        </form>
      </div>
      <aside class="contact-side">
        <h3>Direct contact</h3>
        <p class="contact-side-intro">Connect with our senior advisory team for donor-funded monitoring, evaluation and infrastructure programmes.</p>
        <div class="contact-detail">
          <span class="contact-detail-icon">@</span>
          <div><b>Email</b><a href="mailto:utiwari@developmentmonitors.com">utiwari@developmentmonitors.com</a></div>
        </div>
        <div class="contact-detail">
          <span class="contact-detail-icon">D</span>
          <div><b>Office & regions</b><span>Delhi, India · India, Nepal, Afghanistan, Yemen and Bangladesh</span></div>
        </div>
        <div class="contact-detail">
          <span class="contact-detail-icon">L</span>
          <div><b>Leadership</b><span>Mr. Umesh Narwadeshwar Tiwari<br>Dr. James K. Weeks</span></div>
        </div>
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
