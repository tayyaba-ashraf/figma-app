/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "Blue1":"#091133",
        "Blue2":"#505F98",
        "Blue3":"#37447E",
        "white1":"#FFF",
        "Blue4":"#091133",
        "Blue5":"#6F7CB2",
        "Blue6":"#222F65",
        "Gray1":"#5D6970",
        "Gray2":"#939EA4",
        "Blue7":"#929ECC",
        "Gray3":"#CDD1D4",
        "Gray4":"#B0B8BC"
      },
      fontFamily:{
        "h2family":"Roboto",
      },
      fontSize:{
       "h2size":"2.125rem",
       "landingfontsize":"1.625rem",
       "buttonfontsize":"3.125rem",

      },
      fontWeight:{
      "snLandingFontweight":"500rem"
      },
      lineHeight:{
        "h2line":"3.125rem",
        "smintropline":"4.2rem",
        "smh2line":"5.125rem",
        "landingheight":"2.375rem",
        "buttonheight":"1.125rem",
        "purchaseheight":"1.625rem",
        "seconedh2height":"3rem",
        "seconedpheight":"1.625rem",
        "seconedp2height":"1.125rem",
        "sevenh1height":"4.625rem",
        "seven40height":"5.5rem",
        
      },
      letterSpacing:{
        "h2letter":"0.0625rem",
        "tracking40":"0.5rem"
        
      },
      backgroundColor:{
        "bg-blue":"#091133"
      },
      width:{
        "uibuttonwidth":"11.8125rem",
        "uibuttonwidth2":"15.81rem",
        "seconedh2width":"31.9375rem",
        "seconedh5width":"15.9375rem",
        "thirdh2width":"27.8125rem",
        "sevenh1width":"37.5rem",
        "sevenh1width2":"45.5rem",
        "sevenh1width3":"66.5rem",
        "sevenhrsmwidth":"70.5rem",
        "sevendivwidth":"21.875rem",
        "purchase1buttonwidth":" 9.375rem",
        "smdatapurchase1buttonwidth":" 20.375rem",
        "purchasebuttonwidth":"11.8125rem",
        "footerpurchasebutton":"6.8125rem",
        "smwidth":"1250px",
        "smwidth2":"1200px",
        "smpicturedivw":"1250px",
        'smpicwidth':'1200px',
        'smpicwidth2':'1100px',
        "smdatadivwidth":"1100px",
        "smdatah2width":"1090px",
        "smdatapwidth":"65.8125rem",
        "smintroh2width":"50.81rem",
        "smintropwidth":"65.81rem",
        "mediumscreenwidth":"35.6875rem",
        "mediumscreenh1width":"30.6875rem"
        
      },
      height:{
       "smheight":"1600px",
       "smheight2":"1700px",
       "smheight3":"722px",
       "smpicturedivh":"800px",
       "smpicturedivh2":"865px",
       "smpicturedivh3":"800px",
       "smdatadivheight":"800px",
       "smdatadivheight3":"270px",
       "smdatadivheight4":"740px",
       "smdatadivheight2":"900px",
       "smpicheight":"800px",
       "smpicheight2":"730px",
       'end-height':'500px'
       
      },
      screens:{
        'sm':'320px'
      },
      margin:{
        'taybaaaaaaaaaaaaaaaaaaaaaaaaaaaa' : '900px'
      },
      

    },
  },
  plugins: [],
}