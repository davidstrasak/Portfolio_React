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
      },
    },
  },
  plugins: [],
};
