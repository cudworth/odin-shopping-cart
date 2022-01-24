import i1 from "./assets/images/alley-gf43a0e48d_1280.jpg";
import i2 from "./assets/images/barn-g831bace64_1280.jpg";
import i3 from "./assets/images/house-g81243becb_1280.jpg";
import i4 from "./assets/images/house-gd581af691_1280.jpg";
import i5 from "./assets/images/house-gef02a836b_1280.jpg";
import i6 from "./assets/images/lake-g1db1e76a8_1280.jpg";
import i7 from "./assets/images/mountains-g3d72add6b_1280.jpg";
import i8 from "./assets/images/sydney-opera-house-g2d6dab75c_1280.jpg";
import i9 from "./assets/images/villa-g1a20a9a65_1280.jpg";

function uniqueID(n) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const arr = [];
  while (arr.length < n) {
    arr.push(alpha[Math.floor(Math.random() * alpha.length)]);
  }
  return arr.join("");
}

function randomVal() {
  const maxPrice = 2200;
  return Math.floor(Math.random() * maxPrice) * 1000;
}

function lorem() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

const items = {};

[
  {
    name: "Alley House",
    price: randomVal(),
    src: i1,
    description: lorem(),
  },
  {
    name: "Ramshackle",
    price: randomVal(),
    src: i2,
    description: lorem(),
  },
  {
    name: "Earthen Home",
    price: randomVal(),
    src: i3,
    description: lorem(),
  },
  {
    name: "Roblox",
    price: randomVal(),
    src: i4,
    description: lorem(),
  },
  {
    name: "Beach View Villa",
    price: randomVal(),
    src: i5,
    description: lorem(),
  },
  {
    name: "Boat House",
    price: randomVal(),
    src: i6,
    description: lorem(),
  },
  {
    name: "Lake House",
    price: randomVal(),
    src: i7,
    description: lorem(),
  },
  {
    name: "Opera House",
    price: randomVal(),
    src: i8,
    description: lorem(),
  },
  {
    name: "Haunted House",
    price: randomVal(),
    src: i9,
    description: lorem(),
  },
].forEach((item) => {
  items[uniqueID(8)] = item;
});

export default items;
