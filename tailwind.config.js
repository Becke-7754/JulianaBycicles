module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat"],
        hero: ["azo-sans-web, helvetica, arial, sans-serif"],
        Juli: ["ProximaNova, helvetica, arial, sans-serif"]
      },
      fontSize: {
        "2xs": "0.2rem",
        "4.5xl": "2.5rem"
      },
      colors: {
        dark: "#181818",
        primary: "#d29e0e",
        secondary: "#e5001c",
      },
      inset: {
        "1/2": "50%",
      },
      opacity: {
        "80": ".865",
        "95": ".95"
      },
    },
  },
  variants: {},
  plugins: [],
}
