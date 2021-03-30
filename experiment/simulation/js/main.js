let sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let arrayRemove = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
};


ids = [
  "tap-pipe-before",
  "tap-pipe-after",
  "tap-stream-before",
  "first-container",
  "long-pipe",
  "second-container",
  "tap2-pipe-after",
  "tap2-stream-before",
  "last-container",
];

let asyncMove = async (id, curPosition = 0, finalPosition = 1) => {
  let path = document.getElementById(id);
  let flags = [true, true, true, true, true, true, true];
  while (true) {
    speed2 = document.getElementById("water-flow").value;
    speed2 = speed2 * 0.0002;
    speed2 = speed2 == 0 ? 0.0002 : speed2;
    // For Moving water in all seven pipes asynchronusly
    if (id == "long-pipe") {
      if (curPosition > 0.1 && flags[0]) {
        asyncMove("first-tube");
        flags[0] = false;
      }
      if (curPosition > 0.25 && flags[1]) {
        asyncMove("second-tube");
        flags[1] = false;
      }
      if (curPosition > 0.35 && flags[2]) {
        asyncMove("third-tube");
        flags[2] = false;
      }
      if (curPosition > 0.45 && flags[3]) {
        asyncMove("fourth-tube");
        flags[3] = false;
      }
      if (curPosition > 0.65 && flags[4]) {
        asyncMove("fifth-tube");
        flags[4] = false;
      }
      if (curPosition > 0.8 && flags[5]) {
        asyncMove("sixth-tube");
        flags[5] = false;
      }
      if (curPosition > 0.9 && flags[6]) {
        asyncMove("seventh-tube");
        flags[6] = false;
      }
    }
    if (curPosition > finalPosition) break;
    curPosition += speed2;
    path.setAttribute("offset", curPosition);
    await sleep(0.5);
  }
};

let startAnimation = async () => {
  for (let i = 0; i < ids.length; i++) {
    id = ids[i];
    if (id == "long-pipe" || id == "tap2-pipe-after") {
      continue;
    }
    let path = document.getElementById(id);
    let finalPosition = 1;
    let curPosition = 0;
    flag = 1;
    while (true) {
      speed2 = document.getElementById("water-flow").value;
      speed2 = speed2 * 0.0002;
      speed2 = speed2 == 0 ? 0.0002 : speed2;
      if (id == "first-container" && flag) {
        if (curPosition > 0.25) {
          asyncMove(ids[i + 1]);
          flag = 0;
        }
      }
      if (id == "second-container" && flag) {
        if (curPosition > 0.4) {
          asyncMove(ids[i + 1]);
          flag = 0;
        }
      }
      if (curPosition > finalPosition) break;
      curPosition += speed2;
      path.setAttribute("offset", curPosition);
      await sleep(0.5);
    }
  }
};

let resetEverything = () => {
  tube_ids = [
    "first-tube",
    "second-tube",
    "third-tube",
    "fourth-tube",
    "fifth-tube",
    "sixth-tube",
    "seventh-tube",
  ];
  tube_ids.forEach((element) => {
    let path = document.getElementById(element);
    path.setAttribute("offset", 0);
  });
  ids.forEach((ele) => {
    let path = document.getElementById(ele);
    path.setAttribute("offset", 0);
  });
};
disablestart = false;
let startAn = async () => {
  resetEverything();
  document.getElementById("startbutton").disabled = true;
  document.getElementById("resetbutton").disabled = true;
  await startAnimation();
  document.getElementById("startbutton").disabled = false;
  document.getElementById("resetbutton").disabled = false;
};
