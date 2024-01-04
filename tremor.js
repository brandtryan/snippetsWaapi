function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let randomWght = getRandomInt(100, 900);
let randomWdth = getRandomInt(100, 115);
// let randomItal = getRandomInt(0, 12);

// Keyframe OBjECT
var tremor = [
  // { fontVariationSettings: `"wght" ${randomWght}` },
  // { fontVariationSettings: `"wdth" ${randomWdth}` },
  { fontVariationSettings: `"wdth" ${randomWdth}` },
  // { fontVariationSettings: `"wdth" 200` },
];

// Timing Properties OBjECT
var tremorTiming = {
  duration: 100,
  iterations: Infinity
}

document.getElementById("letter").animate(
  tremor,
  tremorTiming
)