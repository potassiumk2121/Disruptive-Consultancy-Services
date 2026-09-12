const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = process.env.PORT || 3000;
const FRONTEND_DIR = path.resolve(__dirname, "../../frontend");
const INQUIRIES_DIR = path.resolve(__dirname, "../data/inquiries");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".geojson": "application/geo+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

function sendJson(res, status, data) {
  send(res, status, JSON.stringify(data), {
    "Content-Type": "application/json; charset=utf-8",
  });
}

function safeJoin(base, requestPath) {
  const decoded = decodeURIComponent(requestPath.split("?")[0]);
  const resolved = path.resolve(base, "." + decoded);
  if (!resolved.startsWith(base)) return null;
  return resolved;
}

function serveStatic(req, res) {
  let filePath = safeJoin(FRONTEND_DIR, req.url === "/" ? "/index.html" : req.url);
  if (!filePath) {
    send(res, 400, "Bad request");
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    const notFound = path.join(FRONTEND_DIR, "404.html");
    if (fs.existsSync(notFound)) {
      send(res, 404, fs.readFileSync(notFound), { "Content-Type": "text/html; charset=utf-8" });
      return;
    }
    send(res, 404, "Not found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  send(res, 200, fs.readFileSync(filePath), {
    "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
  });
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

async function handleContact(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Use POST" });
    return;
  }

  let payload;
  try {
    const raw = await readBody(req);
    payload = raw ? JSON.parse(raw) : {};
  } catch {
    sendJson(res, 400, { error: "Invalid JSON body" });
    return;
  }

  const inquiry = {
    name: String(payload.name || "").trim(),
    email: String(payload.email || "").trim(),
    message: String(payload.message || "").trim(),
    receivedAt: new Date().toISOString(),
  };

  if (!inquiry.name || !inquiry.email || !inquiry.message) {
    sendJson(res, 400, { error: "name, email, and message are required" });
    return;
  }

  fs.mkdirSync(INQUIRIES_DIR, { recursive: true });
  const file = path.join(INQUIRIES_DIR, `${Date.now()}.json`);
  fs.writeFileSync(file, JSON.stringify(inquiry, null, 2));
  sendJson(res, 201, { ok: true });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/api/health") {
    sendJson(res, 200, { ok: true });
    return;
  }

  if (url.pathname === "/api/contact") {
    await handleContact(req, res);
    return;
  }

  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Serving frontend from ${FRONTEND_DIR}`);
});
