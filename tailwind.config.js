module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [ require('daisyui') ],
  daisyui: {
  
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
    darkTheme: "dark",
    themes: [
      {
        mytheme: {

          "primary": "#343232",

          "secondary": "#343232",

          "accent": "#343232",

          "neutral": "#272626",

          "base-100": "#000000",

          "info": "#0000FF",

          "success": "#008000",

          "warning": "#FFFF00",

          "error": "#FF0000",
        },
      },
    ],
  },
};
