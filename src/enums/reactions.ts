const cryEmogi = require("../../assets/cry.svg");
const cryGif = require("../../assets/cry.webp");
const sadEmogi = require("../../assets/sad.svg");
const sadGif = require("../../assets/sad.webp");
const neutralEmogi = require("../../assets/neutral.svg");
const neutralGif = require("../../assets/neutral.webp");
const smileEmogi = require("../../assets/smile.svg");
const smileGif = require("../../assets/smile.webp");
const happyEmogi = require("../../assets/happy.svg");
const happyGif = require("../../assets/happy.webp");

enum Reactions {
  CRY_EMOGI = cryEmogi,
  CRY_GIF = cryGif,
  SAD_EMOGI = sadEmogi,
  SAD_GIF = sadGif,
  NEUTRAL_EMOGI = neutralEmogi,
  NEUTRAL_GIF = neutralGif,
  SMILE_EMOGI = smileEmogi,
  SMILE_GIF = smileGif,
  HAPPY_EMOGI = happyEmogi,
  HAPPY_GIF = happyGif,
}

export default Reactions;
