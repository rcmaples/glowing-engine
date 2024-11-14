"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var sanity = require("sanity"), jsxRuntime = require("react/jsx-runtime"), ui = require("@sanity/ui"), react = require("react"), styledComponents = require("styled-components");
const scale = "1px", speed = "1s", pink = "#ff99ff", tan = "#ffcc99", magenta = "#ff3399", gray = "#999999", peach = "#ff9999", sky = "#003366", red = "#ff0000", orange = "#ff9900", yellow = "#ffff00", green = "#33ff00", lightBlue = "#0099ff", blue = "#6636ff", NyanCatStyles = styledComponents.createGlobalStyle`
// ==================================
// Layout, General
// ==================================

body {
  overflow: hidden;
  margin: 0;
}

.cat,
.poptart,
.head,
.feet,
.tail,
.rainbow,
.sprite,
.stars li,
.stars li i {
  position: absolute;
  background-repeat: no-repeat;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-timing-function: step-end;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.overlay {
  position: relative;
  left: 45vw;
  top: 5px;
  animation-name: flyIn;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
}

@keyframes flyIn {
  0% {
    left: -50vw;
  }
  100% {
    left: 45vw;
  }
}

// ==================================
// Cat Container
// ==================================

.cat {
  top: 50%;
  left: 50%;
  margin-left: ${scale} * -10;
  margin-top: ${scale} * -10;
  animation-name: catCycle;
  animation-duration: calc(${speed}/2);
}

@keyframes catCycle {
  0%,
  100% {
    margin-top: ${scale} * -10;
  } // frames 1-2
  33.3% {
    margin-top: ${scale} * -9;
  } // frames 3-6
}

// ==================================
// Poptart
// ==================================

.poptart {
  left: 0;
  top: 0;
  width: ${scale} * 21;
  height: ${scale} * 18;
  background-image:
    // sprinkles
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    linear-gradient(to right, ${magenta} 0%, ${magenta} 100%),
    // frosting
    linear-gradient(
        to right,
        transparent 0%,
        transparent calc(100% / 21 * 2),
        ${pink} calc(100% / 21 * 2),
        ${pink} calc(100% / 21 * 19),
        transparent calc(100% / 21 * 19),
        transparent 100%
      ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 21 * 3),
      ${pink} calc(100% / 21 * 3),
      ${pink} calc(100% / 21 * 18),
      transparent calc(100% / 21 * 18),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 21 * 4),
      ${pink} calc(100% / 21 * 4),
      ${pink} calc(100% / 21 * 17),
      transparent calc(100% / 21 * 17),
      transparent 100%
    ),
    // bread
    linear-gradient(
        to right,
        black 0%,
        black calc(100% / 21),
        ${tan} calc(100% / 21),
        ${tan} calc(100% / 21 * 20),
        black calc(100% / 21 * 20),
        black 100%
      ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 21),
      black calc(100% / 21),
      black calc(100% / 21 * 2),
      ${tan} calc(100% / 21 * 2),
      ${tan} calc(100% / 21 * 19),
      black calc(100% / 21 * 19),
      black calc(100% / 21 * 20),
      transparent calc(100% / 21 * 19),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 21 * 2),
      black calc(100% / 21 * 2),
      black calc(100% / 21 * 19),
      transparent calc(100% / 21 * 19),
      transparent 100%
    );
  background-position:
    // sprinkles
    ${scale} * 9 ${scale} * 3, ${scale} * 12 ${scale} * 3, ${scale} * 4 ${scale} * 4,
    ${scale} * 16 ${scale} * 5, ${scale} * 8 ${scale} * 7, ${scale} * 5 ${scale} * 9,
    ${scale} * 9 ${scale} * 10, ${scale} * 3 ${scale} * 11, ${scale} * 7 ${scale} * 13,
    ${scale} * 4 ${scale} * 14, ${scale} * 11 ${scale} * 14,
    // frosting
    0 ${scale} * 4,
    0 ${scale} * 3, 0 ${scale} * 2,
    // bread
    0 ${scale} * 2,
    0 ${scale}, 0 0;
  background-size:
    // sprinkles
    ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale},
    ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale},
    ${scale} ${scale},
    // frosting
    100% ${scale} * 10,
    100% ${scale} * 12, 100% ${scale} * 14,
    // bread
    100% ${scale} * 14,
    100% ${scale} * 16, 100% 100%;
}

// ==================================
// Head
// ==================================

.head {
  left: ${scale} * 10;
  top: ${scale} * 5;
  width: ${scale} * 16;
  height: ${scale} * 13;
  background-image: linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16 * 2),
      black calc(100% / 16 * 2),
      black calc(100% / 16 * 4),
      transparent calc(100% / 16 * 4),
      transparent calc(100% / 16 * 12),
      black calc(100% / 16 * 12),
      black calc(100% / 16 * 14),
      transparent calc(100% / 16 * 14),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16),
      black calc(100% / 16),
      black calc(100% / 16 * 2),
      ${gray} calc(100% / 16 * 2),
      ${gray} calc(100% / 16 * 4),
      black calc(100% / 16 * 4),
      black calc(100% / 16 * 5),
      transparent calc(100% / 16 * 5),
      transparent calc(100% / 16 * 11),
      black calc(100% / 16 * 11),
      black calc(100% / 16 * 12),
      ${gray} calc(100% / 16 * 12),
      ${gray} calc(100% / 16 * 14),
      black calc(100% / 16 * 14),
      black calc(100% / 16 * 15),
      transparent calc(100% / 16 * 15),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16),
      black calc(100% / 16),
      black calc(100% / 16 * 2),
      ${gray} calc(100% / 16 * 2),
      ${gray} calc(100% / 16 * 5),
      black calc(100% / 16 * 5),
      black calc(100% / 16 * 6),
      transparent calc(100% / 16 * 6),
      transparent calc(100% / 16 * 10),
      black calc(100% / 16 * 10),
      black calc(100% / 16 * 11),
      ${gray} calc(100% / 16 * 11),
      ${gray} calc(100% / 16 * 14),
      black calc(100% / 16 * 14),
      black calc(100% / 16 * 15),
      transparent calc(100% / 16 * 15),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16),
      black calc(100% / 16),
      black calc(100% / 16 * 2),
      ${gray} calc(100% / 16 * 2),
      ${gray} calc(100% / 16 * 6),
      black calc(100% / 16 * 6),
      black calc(100% / 16 * 10),
      ${gray} calc(100% / 16 * 10),
      ${gray} calc(100% / 16 * 14),
      black calc(100% / 16 * 14),
      black calc(100% / 16 * 15),
      transparent calc(100% / 16 * 15),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16),
      black calc(100% / 16),
      black calc(100% / 16 * 2),
      ${gray} calc(100% / 16 * 2),
      ${gray} calc(100% / 16 * 14),
      black calc(100% / 16 * 14),
      black calc(100% / 16 * 15),
      transparent calc(100% / 16 * 15),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 16),
      ${gray} calc(100% / 16),
      ${gray} calc(100% / 16 * 15),
      black calc(100% / 16 * 15),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 16),
      ${gray} calc(100% / 16),
      ${gray} calc(100% / 16 * 4),
      white calc(100% / 16 * 4),
      white calc(100% / 16 * 5),
      black calc(100% / 16 * 5),
      black calc(100% / 16 * 6),
      ${gray} calc(100% / 16 * 6),
      ${gray} calc(100% / 16 * 11),
      white calc(100% / 16 * 11),
      white calc(100% / 16 * 12),
      black calc(100% / 16 * 12),
      black calc(100% / 16 * 13),
      ${gray} calc(100% / 16 * 13),
      ${gray} calc(100% / 16 * 15),
      black calc(100% / 16 * 15),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 16),
      ${gray} calc(100% / 16),
      ${gray} calc(100% / 16 * 4),
      black calc(100% / 16 * 4),
      black calc(100% / 16 * 6),
      ${gray} calc(100% / 16 * 6),
      ${gray} calc(100% / 16 * 9),
      black calc(100% / 16 * 9),
      black calc(100% / 16 * 10),
      ${gray} calc(100% / 16 * 10),
      ${gray} calc(100% / 16 * 11),
      black calc(100% / 16 * 11),
      black calc(100% / 16 * 13),
      ${gray} calc(100% / 16 * 13),
      ${gray} calc(100% / 16 * 15),
      black calc(100% / 16 * 15),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 16),
      ${gray} calc(100% / 16),
      ${gray} calc(100% / 16 * 2),
      ${peach} calc(100% / 16 * 2),
      ${peach} calc(100% / 16 * 4),
      ${gray} calc(100% / 16 * 4),
      ${gray} calc(100% / 16 * 13),
      ${peach} calc(100% / 16 * 13),
      ${peach} calc(100% / 16 * 15),
      black calc(100% / 16 * 15),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 16),
      ${gray} calc(100% / 16),
      ${gray} calc(100% / 16 * 2),
      ${peach} calc(100% / 16 * 2),
      ${peach} calc(100% / 16 * 4),
      ${gray} calc(100% / 16 * 4),
      ${gray} calc(100% / 16 * 5),
      black calc(100% / 16 * 5),
      black calc(100% / 16 * 6),
      ${gray} calc(100% / 16 * 6),
      ${gray} calc(100% / 16 * 8),
      black calc(100% / 16 * 8),
      black calc(100% / 16 * 9),
      ${gray} calc(100% / 16 * 9),
      ${gray} calc(100% / 16 * 11),
      black calc(100% / 16 * 11),
      black calc(100% / 16 * 12),
      ${gray} calc(100% / 16 * 12),
      ${gray} calc(100% / 16 * 13),
      ${peach} calc(100% / 16 * 13),
      ${peach} calc(100% / 16 * 15),
      black calc(100% / 16 * 15),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16),
      black calc(100% / 16),
      black calc(100% / 16 * 2),
      ${gray} calc(100% / 16 * 2),
      ${gray} calc(100% / 16 * 5),
      black calc(100% / 16 * 5),
      black calc(100% / 16 * 12),
      ${gray} calc(100% / 16 * 12),
      ${gray} calc(100% / 16 * 14),
      black calc(100% / 16 * 14),
      black calc(100% / 16 * 15),
      transparent calc(100% / 16 * 15),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16 * 2),
      black calc(100% / 16 * 2),
      black calc(100% / 16 * 3),
      ${gray} calc(100% / 16 * 3),
      ${gray} calc(100% / 16 * 13),
      black calc(100% / 16 * 13),
      black calc(100% / 16 * 14),
      transparent calc(100% / 16 * 14),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 16 * 3),
      black calc(100% / 16 * 3),
      black calc(100% / 16 * 13),
      transparent calc(100% / 16 * 13),
      transparent 100%
    );
  background-position: 0 0, 0 ${scale}, 0 ${scale} * 2, 0 ${scale} * 3, 0 ${scale} * 4,
    0 ${scale} * 5, 0 ${scale} * 6, 0 ${scale} * 7, 0 ${scale} * 8, 0 ${scale} * 9,
    0 ${scale} * 10, 0 ${scale} * 11, 0 ${scale} * 12;
  background-size: 100% ${scale};
  background-repeat: no-repeat;
  animation-name: headCycle;
  animation-duration: calc(${speed}/2);
}

@keyframes headCycle {
  0%,
  100% {
    // frame 1
    margin-left: 0;
    margin-top: 0;
  }
  16.7% {
    // frames 2-4
    margin-left: ${scale};
    margin-top: 0;
  }
  66.7% {
    // frame 5
    margin-left: 0;
    margin-top: 0;
  }
  83.3% {
    // frame 6
    margin-left: 0;
    margin-top: ${scale} * -1;
  }
}

// ==================================
// Feet
// ==================================

.feet {
  width: ${scale} * 24;
  height: ${scale} * 5;
  overflow: hidden;
  left: ${scale} * -2;
  top: ${scale} * 15;
  animation-name: feetCycle;
  animation-duration: calc(${speed}/2);
}

.feet .sprite {
  top: 0;
  width: ${scale} * 24;
  height: ${scale} * 15;
  background-image:
    // frame 1
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 24 * 2),
      black calc(100% / 24 * 2),
      black calc(100% / 24 * 4),
      ${gray} calc(100% / 24 * 4),
      ${gray} calc(100% / 24 * 5),
      transparent calc(100% / 24 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 24),
      black calc(100% / 24),
      black calc(100% / 24 * 3),
      ${gray} calc(100% / 24 * 3),
      ${gray} calc(100% / 24 * 6),
      transparent calc(100% / 24 * 6),
      transparent calc(100% / 24 * 19),
      ${gray} calc(100% / 24 * 19),
      ${gray} calc(100% / 24 * 22),
      black calc(100% / 24 * 22),
      black calc(100% / 24 * 23),
      transparent calc(100% / 24 * 23),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      ${gray} calc(100% / 24),
      ${gray} calc(100% / 24 * 4),
      black calc(100% / 24 * 4),
      black calc(100% / 24 * 6),
      ${gray} calc(100% / 24 * 6),
      ${gray} calc(100% / 24 * 10),
      black calc(100% / 24 * 10),
      black calc(100% / 24 * 11),
      transparent calc(100% / 24 * 11),
      transparent calc(100% / 24 * 14),
      black calc(100% / 24 * 14),
      black calc(100% / 24 * 15),
      ${gray} calc(100% / 24 * 15),
      ${gray} calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 20),
      ${gray} calc(100% / 24 * 20),
      ${gray} calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      ${gray} calc(100% / 24),
      ${gray} calc(100% / 24 * 3),
      black calc(100% / 24 * 3),
      black calc(100% / 24 * 5),
      transparent calc(100% / 24 * 5),
      transparent calc(100% / 24 * 6),
      black calc(100% / 24 * 6),
      black calc(100% / 24 * 7),
      ${gray} calc(100% / 24 * 7),
      ${gray} calc(100% / 24 * 9),
      black calc(100% / 24 * 9),
      black calc(100% / 24 * 10),
      transparent calc(100% / 24 * 10),
      transparent calc(100% / 24 * 15),
      black calc(100% / 24 * 15),
      black calc(100% / 24 * 16),
      ${gray} calc(100% / 24 * 16),
      ${gray} calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 19),
      transparent calc(100% / 24 * 19),
      transparent calc(100% / 24 * 20),
      black calc(100% / 24 * 20),
      black calc(100% / 24 * 21),
      ${gray} calc(100% / 24 * 21),
      ${gray} calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24 * 4),
      transparent calc(100% / 24 * 4),
      transparent calc(100% / 24 * 6),
      black calc(100% / 24 * 6),
      black calc(100% / 24 * 9),
      transparent calc(100% / 24 * 8),
      transparent calc(100% / 24 * 16),
      black calc(100% / 24 * 16),
      black calc(100% / 24 * 19),
      transparent calc(100% / 24 * 19),
      transparent calc(100% / 24 * 21),
      black calc(100% / 24 * 21),
      black calc(100% / 24 * 23),
      transparent calc(100% / 24 * 23),
      transparent 100%
    ),
    // frames 2-5
    linear-gradient(
        to right,
        transparent 0%,
        transparent calc(100% / 24 * 2),
        black calc(100% / 24 * 2),
        black calc(100% / 24 * 4),
        ${gray} calc(100% / 24 * 4),
        ${gray} calc(100% / 24 * 5),
        transparent calc(100% / 24 * 5),
        transparent 100%
      ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 24),
      black calc(100% / 24),
      black calc(100% / 24 * 2),
      ${gray} calc(100% / 24 * 2),
      ${gray} calc(100% / 24 * 6),
      transparent calc(100% / 24 * 6),
      transparent calc(100% / 24 * 19),
      ${gray} calc(100% / 24 * 19),
      ${gray} calc(100% / 24 * 22),
      black calc(100% / 24 * 22),
      black calc(100% / 24 * 23),
      transparent calc(100% / 24 * 23),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      ${gray} calc(100% / 24),
      ${gray} calc(100% / 24 * 4),
      black calc(100% / 24 * 4),
      black calc(100% / 24 * 6),
      ${gray} calc(100% / 24 * 6),
      ${gray} calc(100% / 24 * 9),
      black calc(100% / 24 * 9),
      black calc(100% / 24 * 10),
      transparent calc(100% / 24 * 10),
      transparent calc(100% / 24 * 14),
      black calc(100% / 24 * 14),
      black calc(100% / 24 * 15),
      ${gray} calc(100% / 24 * 15),
      ${gray} calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 20),
      ${gray} calc(100% / 24 * 20),
      ${gray} calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      ${gray} calc(100% / 24),
      ${gray} calc(100% / 24 * 3),
      black calc(100% / 24 * 3),
      black calc(100% / 24 * 4),
      transparent calc(100% / 24 * 4),
      transparent calc(100% / 24 * 5),
      black calc(100% / 24 * 5),
      black calc(100% / 24 * 6),
      ${gray} calc(100% / 24 * 6),
      ${gray} calc(100% / 24 * 8),
      black calc(100% / 24 * 8),
      black calc(100% / 24 * 9),
      transparent calc(100% / 24 * 9),
      transparent calc(100% / 24 * 15),
      black calc(100% / 24 * 15),
      black calc(100% / 24 * 16),
      ${gray} calc(100% / 24 * 16),
      ${gray} calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 19),
      transparent calc(100% / 24 * 19),
      transparent calc(100% / 24 * 20),
      black calc(100% / 24 * 20),
      black calc(100% / 24 * 21),
      ${gray} calc(100% / 24 * 21),
      ${gray} calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24 * 3),
      transparent calc(100% / 24 * 3),
      transparent calc(100% / 24 * 6),
      black calc(100% / 24 * 6),
      black calc(100% / 24 * 9),
      transparent calc(100% / 24 * 9),
      transparent calc(100% / 24 * 16),
      black calc(100% / 24 * 16),
      black calc(100% / 24 * 19),
      transparent calc(100% / 24 * 19),
      transparent calc(100% / 24 * 21),
      black calc(100% / 24 * 21),
      black 100%
    ),
    // frame 6
    linear-gradient(
        to right,
        transparent 0%,
        transparent calc(100% / 24 * 2),
        black calc(100% / 24 * 2),
        black calc(100% / 24 * 4),
        ${gray} calc(100% / 24 * 4),
        ${gray} calc(100% / 24 * 5),
        transparent calc(100% / 24 * 5),
        transparent 100%
      ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 24),
      black calc(100% / 24),
      black calc(100% / 24 * 2),
      ${gray} calc(100% / 24 * 2),
      ${gray} calc(100% / 24 * 6),
      transparent calc(100% / 24 * 6),
      transparent calc(100% / 24 * 19),
      ${gray} calc(100% / 24 * 19),
      ${gray} calc(100% / 24 * 22),
      black calc(100% / 24 * 22),
      black calc(100% / 24 * 23),
      transparent calc(100% / 24 * 23),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      ${gray} calc(100% / 24),
      ${gray} calc(100% / 24 * 4),
      black calc(100% / 24 * 4),
      black calc(100% / 24 * 6),
      ${gray} calc(100% / 24 * 6),
      ${gray} calc(100% / 24 * 9),
      black calc(100% / 24 * 9),
      black calc(100% / 24 * 10),
      transparent calc(100% / 24 * 10),
      transparent calc(100% / 24 * 14),
      black calc(100% / 24 * 14),
      black calc(100% / 24 * 15),
      ${gray} calc(100% / 24 * 15),
      ${gray} calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 20),
      ${gray} calc(100% / 24 * 20),
      ${gray} calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24),
      ${gray} calc(100% / 24),
      ${gray} calc(100% / 24 * 3),
      black calc(100% / 24 * 3),
      black calc(100% / 24 * 4),
      transparent calc(100% / 24 * 4),
      transparent calc(100% / 24 * 5),
      black calc(100% / 24 * 5),
      black calc(100% / 24 * 6),
      ${gray} calc(100% / 24 * 6),
      ${gray} calc(100% / 24 * 8),
      black calc(100% / 24 * 8),
      black calc(100% / 24 * 9),
      transparent calc(100% / 24 * 9),
      transparent calc(100% / 24 * 15),
      black calc(100% / 24 * 15),
      black calc(100% / 24 * 16),
      ${gray} calc(100% / 24 * 16),
      ${gray} calc(100% / 24 * 18),
      black calc(100% / 24 * 18),
      black calc(100% / 24 * 19),
      transparent calc(100% / 24 * 19),
      transparent calc(100% / 24 * 20),
      black calc(100% / 24 * 20),
      black calc(100% / 24 * 21),
      ${gray} calc(100% / 24 * 21),
      ${gray} calc(100% / 24 * 23),
      black calc(100% / 24 * 23),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 24 * 3),
      transparent calc(100% / 24 * 3),
      transparent calc(100% / 24 * 5),
      black calc(100% / 24 * 5),
      black calc(100% / 24 * 8),
      transparent calc(100% / 24 * 8),
      transparent calc(100% / 24 * 15),
      black calc(100% / 24 * 15),
      black calc(100% / 24 * 18),
      transparent calc(100% / 24 * 18),
      transparent calc(100% / 24 * 21),
      black calc(100% / 24 * 21),
      black 100%
    );
  background-position: 0 0, 0 ${scale}, 0 ${scale} * 2, 0 ${scale} * 3, 0 ${scale} * 4,
    0 ${scale} * 5, 0 ${scale} * 6, 0 ${scale} * 7, 0 ${scale} * 8, 0 ${scale} * 9,
    0 ${scale} * 10, 0 ${scale} * 11, 0 ${scale} * 12, 0 ${scale} * 13, 0 ${scale} * 14;
  background-size: 100% ${scale};
  background-repeat: no-repeat;
  animation-name: feetSpriteCycle;
  animation-duration: calc(${speed}/2);
}

@keyframes feetCycle {
  0%,
  100% {
    margin-left: 0;
  } // frame 1
  16.7% {
    margin-left: ${scale};
  } // frame 2
  33.3% {
    margin-left: ${scale} * 2;
  } // frame 3
  50% {
    margin-left: ${scale};
  } // frame 4
  66.7% {
    margin-left: ${scale} * -1;
  } // frames 5-6
}

@keyframes feetSpriteCycle {
  0%,
  100% {
    top: 0;
  } // frame 1
  16.7% {
    top: ${scale} * -5;
  } // frames 2-5
  83.3% {
    top: ${scale} * -10;
  } // frame 6
}

// ==================================
// Tail
// ==================================

.tail {
  width: ${scale} * 7;
  height: ${scale} * 7;
  overflow: hidden;
  left: ${scale} * -7;
  top: ${scale} * 7;
  animation-name: tailCycle;
  animation-duration: calc(${speed}/2);
}

.tail .sprite {
  width: ${scale} * 7;
  height: ${scale} * 35;
  background-image:
    // frames 1 & 6
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 5),
      transparent calc(100% / 7 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black calc(100% / 7 * 6),
      transparent calc(100% / 7 * 6),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 3),
      ${gray} calc(100% / 7 * 3),
      ${gray} calc(100% / 7 * 5),
      black calc(100% / 7 * 5),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 4),
      ${gray} calc(100% / 7 * 4),
      ${gray} calc(100% / 7 * 6),
      black calc(100% / 7 * 6),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 3),
      black calc(100% / 7 * 3),
      black calc(100% / 7 * 5),
      ${gray} calc(100% / 7 * 5),
      ${gray} 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 6),
      black calc(100% / 7 * 6),
      black 100%
    ),
    // frame 2
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 4),
      transparent calc(100% / 7 * 4),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black calc(100% / 7 * 5),
      transparent calc(100% / 7 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 3),
      ${gray} calc(100% / 7 * 3),
      ${gray} 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 3),
      black calc(100% / 7 * 3),
      black calc(100% / 7 * 5),
      ${gray} calc(100% / 7 * 5),
      ${gray} 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 5),
      black calc(100% / 7 * 5),
      black 100%
    ),
    // frame 3
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 6),
      black calc(100% / 7 * 6),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 3),
      black calc(100% / 7 * 3),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 3),
      ${gray} calc(100% / 7 * 3),
      ${gray} 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 5),
      black calc(100% / 7 * 5),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 6),
      transparent calc(100% / 7 * 6),
      transparent 100%
    ),
    // frame 4
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 5),
      black calc(100% / 7 * 5),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 3),
      black calc(100% / 7 * 3),
      black calc(100% / 7 * 5),
      ${gray} calc(100% / 7 * 5),
      ${gray} 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 3),
      ${gray} calc(100% / 7 * 3),
      ${gray} 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black calc(100% / 7 * 5),
      transparent calc(100% / 7 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 4),
      transparent calc(100% / 7 * 4),
      transparent 100%
    ),
    // frame 5
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(to right, transparent 0%, transparent 100%),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7),
      black calc(100% / 7),
      black calc(100% / 7 * 5),
      transparent calc(100% / 7 * 5),
      transparent 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 7),
      ${gray} calc(100% / 7),
      ${gray} calc(100% / 7 * 4),
      black calc(100% / 7 * 4),
      black 100%
    ),
    linear-gradient(
      to right,
      black 0%,
      black calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 2),
      ${gray} calc(100% / 7 * 6),
      black calc(100% / 7 * 6),
      black 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 2),
      black calc(100% / 7 * 2),
      black calc(100% / 7 * 6),
      ${gray} calc(100% / 7 * 6),
      ${gray} 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent calc(100% / 7 * 5),
      black calc(100% / 7 * 5),
      black 100%
    );
  background-position: 0 0, 0 ${scale}, 0 ${scale} * 2, 0 ${scale} * 3, 0 ${scale} * 4,
    0 ${scale} * 5, 0 ${scale} * 6, 0 ${scale} * 7, 0 ${scale} * 8, 0 ${scale} * 9,
    0 ${scale} * 10, 0 ${scale} * 11, 0 ${scale} * 12, 0 ${scale} * 13, 0 ${scale} * 14,
    0 ${scale} * 15, 0 ${scale} * 16, 0 ${scale} * 17, 0 ${scale} * 18, 0 ${scale} * 19,
    0 ${scale} * 20, 0 ${scale} * 21, 0 ${scale} * 22, 0 ${scale} * 23, 0 ${scale} * 24,
    0 ${scale} * 25, 0 ${scale} * 26, 0 ${scale} * 27, 0 ${scale} * 28, 0 ${scale} * 29,
    0 ${scale} * 30, 0 ${scale} * 31, 0 ${scale} * 32, 0 ${scale} * 33, 0 ${scale} * 34;
  background-size: 100% ${scale};
  background-repeat: no-repeat;
  animation-name: tailSpriteCycle;
  animation-duration: calc(${speed}/2);
}

@keyframes tailCycle {
  0%,
  100% {
    margin-top: 0;
  } // frames 1-2
  33.3% {
    margin-top: ${scale};
  } // frame 3
  50% {
    margin-top: ${scale} * 2;
  } // frame 4
  66.7% {
    margin-top: ${scale} * -1;
  } // frame 5-6
}

@keyframes tailSpriteCycle {
  0%,
  83.3% {
    margin-top: 0;
  } // frames 1 & 6
  16.7% {
    margin-top: ${scale} * -7;
  } // frame 2
  33.3% {
    margin-top: ${scale} * -14;
  } // frame 3
  50% {
    margin-top: ${scale} * -21;
  } // frame 4
  66.7% {
    margin-top: ${scale} * -28;
  } // frame 5
}

// ==================================
// Rainbow
// ==================================

.rainbow {
  left: -100vw;
  right: 50%;
  top: 50%;
  margin-top: ${scale} * -9;
  height: ${scale} * 19;
  overflow: hidden;
}

.rainbow .sprite {
  left: 0;
  right: ${scale} * 8;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(
      to right,
      ${red} 0%,
      ${red} 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      ${red} 50%,
      ${red} 100%
    ),
    linear-gradient(
      to right,
      ${orange} 0%,
      ${orange} 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      ${orange} 50%,
      ${orange} 100%
    ),
    linear-gradient(
      to right,
      ${yellow} 0%,
      ${yellow} 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      ${yellow} 50%,
      ${yellow} 100%
    ),
    linear-gradient(
      to right,
      ${green} 0%,
      ${green} 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      ${green} 50%,
      ${green} 100%
    ),
    linear-gradient(
      to right,
      ${lightBlue} 0%,
      ${lightBlue} 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      ${lightBlue} 50%,
      ${lightBlue} 100%
    ),
    linear-gradient(
      to right,
      ${blue} 0%,
      ${blue} 50%,
      transparent 50%,
      transparent 100%
    ),
    linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      ${blue} 50%,
      ${blue} 100%
    );
  background-position: 0 0, 0 ${scale}, 0 ${scale} * 3, 0 ${scale} * 4, 0 ${scale} * 6,
    0 ${scale} * 7, 0 ${scale} * 9, 0 ${scale} * 10, 0 ${scale} * 12, 0 ${scale} * 13,
    0 ${scale} * 15, 0 ${scale} * 16;
  background-size: ${scale} * 16 ${scale} * 3;
  background-repeat: repeat-x;
  animation-name: rainbowCycle;
  animation-duration: (${speed});
}

@keyframes rainbowCycle {
  0%,
  33.3%,
  66.7%,
  100% {
    left: 0;
  } // frames 1-2, 5-6, 9-10
  16.7%,
  50%,
  83.3% {
    left: ${scale} * -9;
  } // frames 3-4, 7-8, 11-12
}

/* this prevents the rainbow from peeking out from under the cat's back foot. */
.rainbow .sprite:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${scale} * 1.5;
  height: ${scale} * 1.5;
  background: ${sky};
}

// ==================================
// Stars
// ==================================

.stars li {
  width: ${scale} * 47;
  height: ${scale} * 7;
  overflow: hidden;
  margin-left: ${scale} * -4;
}

.stars li i {
  display: block;
  width: ${scale} * 47;
  height: ${scale} * 49;
  top: ${scale} * -42;
  background-image:
    // frame 1
    linear-gradient(to right, white 0%, white 100%),
    // frame 2
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    // frame 3
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    // frame 4
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    // frame 5
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    // frame 6
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%),
    linear-gradient(to right, white 0%, white 100%);
  background-position:
    // frame 1
    ${scale} * 43 ${scale} * 3,
    // frame 2
    ${scale} * 35 ${scale} * 9,
    ${scale} * 34 ${scale} * 10, ${scale} * 36 ${scale} * 10, ${scale} * 35 ${scale} * 11,
    // frame 3
    ${scale} * 27 ${scale} * 15,
    ${scale} * 25 ${scale} * 17, ${scale} * 28 ${scale} * 17, ${scale} * 27 ${scale} * 18,
    // frame 4
    ${scale} * 19 ${scale} * 21,
    ${scale} * 16 ${scale} * 24, ${scale} * 19 ${scale} * 24, ${scale} * 21 ${scale} * 24,
    ${scale} * 19 ${scale} * 26,
    // frame 5
    ${scale} * 11 ${scale} * 28,
    ${scale} * 9 ${scale} * 29, ${scale} * 13 ${scale} * 29, ${scale} * 8 ${scale} * 31,
    ${scale} * 14 ${scale} * 31, ${scale} * 9 ${scale} * 33, ${scale} * 13 ${scale} * 33,
    ${scale} * 11 ${scale} * 34,
    // frame 6
    ${scale} * 3 ${scale} * 35,
    0 ${scale} * 38, ${scale} * 6 ${scale} * 38, ${scale} * 3 ${scale} * 41;
  background-size:
    // frame 1
    ${scale} ${scale},
    // frame 2
    ${scale} ${scale},
    ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale},
    // frame 3
    ${scale} ${scale} * 2,
    ${scale} * 2 ${scale}, ${scale} * 2 ${scale}, ${scale} ${scale} * 2,
    // frame 4
    ${scale} ${scale} * 2,
    ${scale} * 2 ${scale}, ${scale} ${scale}, ${scale} * 2 ${scale}, ${scale} ${scale} * 2,
    // frame 5
    ${scale} ${scale},
    ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale},
    ${scale} ${scale}, ${scale} ${scale},
    // frame 6
    ${scale} ${scale},
    ${scale} ${scale}, ${scale} ${scale}, ${scale} ${scale};
  background-repeat: no-repeat;
  animation-name: starSpriteCycle;
  animation-duration: (${speed});
}

@keyframes starSpriteCycle {
  0%,
  100% {
    top: ${scale} * -42;
  } // blank
  50% {
    top: 0;
  } // frame 1
  58.3% {
    top: ${scale} * -7;
  } // frame 2
  66.7% {
    top: ${scale} * -14;
  } // frame 3
  75% {
    top: ${scale} * -21;
  } // frame 4
  83.3% {
    top: ${scale} * -28;
  } // frame 5
  91.7% {
    top: ${scale} * -35;
  } // frame 6
}

.stars {
  li:nth-child(1) {
    left: 66%;
    top: 80%;
  }
  li:nth-child(2) {
    left: 70%;
    top: 54%;
    i {
      animation-delay: calc(${speed}/12);
    }
  }
  li:nth-child(3) {
    left: 4%;
    top: 31%;
    i {
      animation-delay: calc(${speed}/12 * 2);
    }
  }
  li:nth-child(4) {
    left: 49%;
    top: 12%;
    i {
      animation-delay: calc(${speed}/12 * 3);
    }
  }
  li:nth-child(5) {
    left: 35%;
    top: 30%;
    i {
      animation-delay: calc(${speed}/12 * 4);
    }
  }
  li:nth-child(6) {
    left: 48%;
    top: 29%;
    i {
      animation-delay: calc(${speed}/12 * 5);
    }
  }
  li:nth-child(7) {
    left: 22%;
    top: 70%;
    i {
      animation-delay: calc(${speed}/12 * 8);
    }
  }
  li:nth-child(8) {
    left: 56%;
    top: 67%;
    i {
      animation-delay: calc(${speed}/12 * 7);
    }
  }
  li:nth-child(9) {
    left: 49%;
    top: 12%;
    i {
      animation-delay: calc(${speed}/12 * 8);
    }
  }
  li:nth-child(10) {
    left: 9%;
    top: 92%;
    i {
      animation-delay: calc(${speed}/12 * 9);
    }
  }
  li:nth-child(11) {
    left: 44%;
    top: 20%;
    i {
      animation-delay: calc(${speed}/12 * 10);
    }
  }
  li:nth-child(12) {
    left: 6%;
    top: 19%;
    i {
      animation-delay: calc(${speed}/12 * 11);
    }
  }
}
`, NyanCat = () => {
  const [currentIndex, setCurrentIndex] = react.useState(0), positions = ["minimal", "left", "middle", "right"], handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % positions.length);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(NyanCatStyles, {}),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { id: "nyanCatOverly", className: `overlay cat-${positions[currentIndex]}`, children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "rainbow", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "sprite" }) }),
      /* @__PURE__ */ jsxRuntime.jsx("button", { type: "button", className: "button--no-display", onClick: handleClick, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "cat", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "tail", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "sprite" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "feet", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "sprite" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "poptart" }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "head" })
      ] }) })
    ] })
  ] });
};
function FancyPixelNavbar(props) {
  return /* @__PURE__ */ jsxRuntime.jsxs(ui.Stack, { children: [
    props.renderDefault(props),
    " ",
    /* @__PURE__ */ jsxRuntime.jsx(NyanCat, {})
  ] });
}
const fancyPixelPlugin = sanity.definePlugin({
  name: "sanity-plugin-fancy-pixel",
  studio: {
    components: {
      navbar: FancyPixelNavbar
    }
  }
});
exports.fancyPixelPlugin = fancyPixelPlugin;
//# sourceMappingURL=index.js.map
