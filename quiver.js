const myLetter = document.getElementById("character");

// {"tag":"ital","minValue":0,"defaultValue":0,"maxValue":12,"name":{}}

// ital Range: 0 - 12
const italics = myLetter.animate(
  [
    { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
    { fontVariationSettings: `"wght" 150, "wdth" 140, "ital" 12, "cont" 0` }
  ],
  {
    id: "animaItalics",
    delay: 0,
    direction: "alternate",
    duration: 50,
    // easing: "cubic-bezier(0.87, 0, 0.13, 1)",
    easing: "linear",
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "add",
    iterationComposite: "replace"
  }
);
