/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cyberpunk: ['"Kode Mono"', "cursive"],
      },
      textColor: {
        greenyellow: "#ADFF2F",
        neonblue: "#00FFFF",
        yellow: "#FFFF00",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00ff00",

          "primary-content": "#0a1301",

          secondary: "#FFFF00",

          "secondary-content": "#150f00",

          accent: "#00FFFF",

          "accent-content": "#001616",

          neutral: "#ff00ff",

          "neutral-content": "#160016",

          "base-100": "#111827",

          "base-200": "#0d1320",

          "base-300": "#090f1a",

          "base-content": "#00ff00",

          info: "#0000ff",

          "info-content": "#c6dbff",

          success: "#00ff00",

          "success-content": "#001600",

          warning: "#facc15",

          "warning-content": "#001600",

          error: "#ff0000",

          "error-content": "#160000",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
