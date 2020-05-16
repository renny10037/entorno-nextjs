const path = require("path");

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
  },

  devIndicators: {
    autoPrerender: false
  }
};
// next.config.js
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true
});

const withFonts = require("nextjs-fonts");
module.exports = withSass(withFonts({}));
