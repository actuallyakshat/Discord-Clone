/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        'discordPurple' : '#404EED',
        'discordGray' : '#23272A',
        'discordWhite' : '#FFFFFF',
        'discordLightGray' : '#F6F6F6',
      }
    },
    
  },
  plugins: [],
  fontFamily:{
    Whitney:["Whitney"],
    Ginto:["Ginto"],
    ggSans:["ggSans"],
  },
}