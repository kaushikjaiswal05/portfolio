module.exports = {
  version: 2,
  builds: [
    {
      src: "src/server.js",
      use: "@vercel/node",
    },
    {
      src: "client/vite.config.js",
      use: "@vercel/static-build",
      config: { distDir: "client/dist" },
    },
  ],
  routes: [
    {
      src: "/api/(.*)",
      dest: "/src/server.js",
    },
    {
      src: "/(.*)",
      dest: "/client/$1",
    },
  ],
};
