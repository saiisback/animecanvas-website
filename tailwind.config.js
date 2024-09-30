/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#e7e7e3",
        gray1: {
          "100": "#fafafa",
          "200": "#707e6e",
          "300": "rgba(35, 35, 33, 0.25)",
          "400": "rgba(35, 35, 33, 0.8)",
        },
        "dark-gray": "#232321",
        blue: "#4a69e2",
        white: "#fff",
        whitesmoke: {
          "100": "#f6f6f6",
          "200": "#f5f2f2",
          "300": "#eceef0",
        },
        yellow: "#ffa52f",
        "neutrals-gray-9": "#36323b",
        "neutrals-gray-6": "#79767c",
        "dark-grey-2": "#bcbcbc",
        "neutrals-gray-2": "#d2d1d3",
        "neutrals-gray-5": "#8f8c91",
        darksalmon: "#bb8056",
        saddlebrown: "#925513",
        slategray: "#677282",
        lightgray: "#c9ccc6",
        coral: "#f08155",
        darkslategray: {
          "100": "#234d41",
          "200": "#353336",
        },
      },
      spacing: {},
      fontFamily: {
        "open-sans-regular-16": "'Open Sans'",
        "rubik-16": "Rubik",
        "copy-caption": "Inter",
        "regular-12": "Poppins",
        inherit: "inherit",
      },
      borderRadius: {
        "13xl": "32px",
        "29xl": "48px",
        "45xl": "64px",
        "9xl": "28px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      "55xl": "74px",
      "25xl": "44px",
      "40xl": "59px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      xs: "12px",
      "29xl": "48px",
      "19xl": "38px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
