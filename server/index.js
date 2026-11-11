// Entry point: satu proses yang menjalankan API Express (/api/*) dan Next.js (semua route lain).
const next = require("next");
const app = require("./app");

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 3000;

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Semua request yang tidak ditangani route /api diteruskan ke Next.js
  app.all("*", (req, res) => handle(req, res));

  app.listen(port, () => {
    console.log(
      `CrimeWatch berjalan di http://localhost:${port} (${dev ? "development" : "production"})`
    );
  });
});
