import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FRONTEND = ROOT / "frontend"
BASE = "https://disruptive-consultancy-services.vercel.app"
IMAGE = f"{BASE}/new_world_map2.png"

PAGES = {
    "index.html": (
        "/",
        "Disruptive Consultancy Services",
        "Evidence-led consulting for monitoring, evaluation, infrastructure and sustainable development programmes.",
    ),
    "about-us/index.html": (
        "/about-us/",
        "Who We Are | Disruptive Consultancy Services",
        "Meet the experts behind evidence-led monitoring, evaluation, infrastructure and institutional development programmes.",
    ),
    "services/index.html": (
        "/services/",
        "What We Offer | Disruptive Consultancy Services",
        "Explore monitoring, evaluation, climate resilience, water, infrastructure and institutional development services.",
    ),
    "projects/index.html": (
        "/projects/",
        "Our Projects | Disruptive Consultancy Services",
        "Explore development consulting assignments delivered across South Asia, the Middle East and fragile contexts.",
    ),
    "locations/index.html": (
        "/locations/",
        "Where We Have Worked | Disruptive Consultancy Services",
        "Discover countries where our teams have delivered monitoring, evaluation and development advisory assignments.",
    ),
    "contact/index.html": (
        "/contact/",
        "Contact Us | Disruptive Consultancy Services",
        "Contact our Delhi team about proposals, partnerships and monitoring, evaluation or programme advisory assignments.",
    ),
    "legal/privacy/index.html": (
        "/legal/privacy/",
        "Privacy Policy | Disruptive Consultancy Services",
        "Read how Disruptive Consultancy Services collects, uses and protects information submitted through this website.",
    ),
    "legal/terms/index.html": (
        "/legal/terms/",
        "Terms of Use | Disruptive Consultancy Services",
        "Read the terms governing use of the Disruptive Consultancy Services website and its published materials.",
    ),
    "projects/locations/afghanistan/index.html": (
        "/projects/locations/afghanistan/",
        "Projects in Afghanistan | Disruptive Consultancy Services",
        "Explore monitoring, education, infrastructure and disaster-risk assignments delivered in Afghanistan.",
    ),
    "projects/locations/india/index.html": (
        "/projects/locations/india/",
        "Projects in India | Disruptive Consultancy Services",
        "Explore water, infrastructure, monitoring and development advisory assignments delivered in India.",
    ),
    "projects/locations/nepal/index.html": (
        "/projects/locations/nepal/",
        "Projects in Nepal | Disruptive Consultancy Services",
        "Explore watershed management, monitoring and development advisory assignments delivered in Nepal.",
    ),
    "projects/locations/yemen/index.html": (
        "/projects/locations/yemen/",
        "Projects in Yemen | Disruptive Consultancy Services",
        "Explore climate resilience, food security, infrastructure and monitoring assignments delivered in Yemen.",
    ),
    "projects/locations/washington/index.html": (
        "/projects/locations/washington/",
        "Global Projects from Washington | Disruptive Consultancy Services",
        "Explore international development assignments supported through partners and institutions based in Washington.",
    ),
}


def structured_data(route: str, title: str) -> str:
    if route == "/":
        payload = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "Organization",
                    "@id": f"{BASE}/#organization",
                    "name": "Disruptive Consultancy Services Pvt. Ltd.",
                    "url": f"{BASE}/",
                    "logo": f"{BASE}/DM_logo.png",
                    "email": "utiwari@developmentmonitors.com",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Delhi",
                        "addressCountry": "IN",
                    },
                },
                {
                    "@type": "ProfessionalService",
                    "@id": f"{BASE}/#service",
                    "name": "Disruptive Consultancy Services",
                    "url": f"{BASE}/",
                    "image": IMAGE,
                    "areaServed": ["India", "Nepal", "Afghanistan", "Yemen", "Bangladesh"],
                    "provider": {"@id": f"{BASE}/#organization"},
                },
            ],
        }
    elif route.startswith("/projects/locations/"):
        payload = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{BASE}/"},
                {"@type": "ListItem", "position": 2, "name": "Projects", "item": f"{BASE}/projects/"},
                {"@type": "ListItem", "position": 3, "name": title.split(" | ")[0], "item": f"{BASE}{route}"},
            ],
        }
    else:
        payload = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "url": f"{BASE}{route}",
            "isPartOf": {"@id": f"{BASE}/#organization"},
        }
    return json.dumps(payload, ensure_ascii=False, separators=(",", ":"))


def metadata(route: str, title: str, description: str) -> str:
    url = f"{BASE}{route}"
    return f"""<!-- Canonical URL -->
    <link rel="canonical" href="{url}" />
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content="{title}" />
    <meta name="description" content="{description}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Disruptive Consultancy Services" />
    <meta property="og:url" content="{url}" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{description}" />
    <meta property="og:image" content="{IMAGE}" />
    <meta property="og:image:alt" content="Disruptive Consultancy Services global programme network" />
    <meta property="og:image:width" content="1024" />
    <meta property="og:image:height" content="576" />
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="{url}" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:description" content="{description}" />
    <meta name="twitter:image" content="{IMAGE}" />
    <meta name="twitter:image:alt" content="Disruptive Consultancy Services global programme network" />
    <script type="application/ld+json">{structured_data(route, title)}</script>
    <!-- Sitemap -->"""


for relative_path, (route, title, description) in PAGES.items():
    path = FRONTEND / relative_path
    html = path.read_text(encoding="utf-8")
    html, count = re.subn(
        r"<!-- Canonical URL -->.*?<!-- Sitemap -->",
        metadata(route, title, description),
        html,
        count=1,
        flags=re.DOTALL,
    )
    if count != 1:
        raise RuntimeError(f"Metadata block not found in {relative_path}")

    html = re.sub(
        r"<!-- RSS Feed -->.*?(?=<!-- Global Scripts -->)",
        "",
        html,
        count=1,
        flags=re.DOTALL,
    )
    html = re.sub(
        r"(</header>)\s*<script>\s*function toggleDrawer\(\).*?<main>",
        r"\1 <main>",
        html,
        count=1,
        flags=re.DOTALL,
    )

    if route != "/":
        html = re.sub(
            r'<p(\s+class="[^"]*\banimated\b[^"]*")\s*>(.*?)</p>',
            r"<h1\1>\2</h1>",
            html,
            count=1,
            flags=re.DOTALL,
        )
        html = re.sub(
            r'<div class="page-heading">\s*(.*?)\s*</div>',
            r'<h1 class="page-heading">\1</h1>',
            html,
            count=1,
            flags=re.DOTALL,
        )

    path.write_text(html, encoding="utf-8")

not_found = FRONTEND / "404.html"
html = not_found.read_text(encoding="utf-8")
if 'name="robots"' not in html:
    html = html.replace("</title>", '</title><meta name="robots" content="noindex, follow" />', 1)
not_found.write_text(html, encoding="utf-8")
