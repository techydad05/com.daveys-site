const daisyui = require("daisyui");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 2s infinite',
      }
    },
  },

  plugins: [daisyui],
};

module.exports = config;
