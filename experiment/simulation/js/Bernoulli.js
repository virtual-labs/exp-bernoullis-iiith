let time_start = new Date().getTime();
let circle = document.getElementById("tap-pipe-before");
const xFinalPosition = 1;
let xPos = 0;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const interval = window.setInterval(() => {
  if (xPos > xFinalPosition) {
    let circle2 = document.getElementById("tap-pipe-after");
    const xFinalPosition2 = 1;
    let xPos2 = 0;
    const interval2 = window.setInterval(() => {
      if (xPos2 > xFinalPosition2) {
        let circle3 = document.getElementById("tap-stream-before");
        const xFinalPosition3 = 1;
        let xPos3 = 0;
        const interval3 = window.setInterval(() => {
          if (xPos3 > xFinalPosition3) {
            let circle4 = document.getElementById("tap-stream-after");
            const xFinalPosition4 = 1;
            let xPos4 = 0;
            const interval4 = window.setInterval(() => {
              if (xPos4 > xFinalPosition4) {
                let circle5 = document.getElementById("first-container");
                const xFinalPosition5 = 0.4;
                let xPos5 = 0;
                const interval5 = window.setInterval(() => {
                  if (xPos5 > xFinalPosition5) {
                    return window.clearInterval(interval5);
                  }
                  xPos5 += 0.01;
                  // console.log(xPos)
                  circle5.setAttribute("offset", xPos5);
                }, 1);
                return window.clearInterval(interval4);
              }
              xPos4 += 0.01;
              // console.log(xPos)
              circle4.setAttribute("offset", xPos4);
            }, 1);
            return window.clearInterval(interval3);
          }
          xPos3 += 0.01;
          // console.log(xPos)
          circle3.setAttribute("offset", xPos3);
        }, 1);

        return window.clearInterval(interval2);
      }
      xPos2 += 0.01;
      // console.log(xPos)
      circle2.setAttribute("offset", xPos2);
    }, 1);
    return window.clearInterval(interval);
  }
  xPos += 0.01;
  // console.log(xPos)
  circle.setAttribute("offset", xPos);
}, 1);
