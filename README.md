# Disruptive Consultancy Services

Website is split into **frontend** (pages, assets, scripts) and **backend** (local server + contact API).

## Run locally

```bash
cd backend
node src/server.js
```

Open http://localhost:3000

## Where to edit

| What you want to change | Folder |
| --- | --- |
| Home page | `frontend/index.html` |
| About, services, projects, locations, contact | `frontend/<page>/index.html` |
| Maps, theme, animations | `frontend/js/` |
| Logos, partner/team/location images | `frontend/ico/` |
| Country map shapes | `frontend/map_boundaries/` |
| Contact form API | `backend/src/server.js` |
