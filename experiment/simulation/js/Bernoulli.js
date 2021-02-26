let time_start = new Date().getTime();
let flow = document.getElementById("tap-pipe-before");
const xFinalPosition = 1;
let xPos = 0;
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
const interval = window.setInterval(() => {
  if (xPos > xFinalPosition) {
    let flow2 = document.getElementById("tap-pipe-after");
    const xFinalPosition2 = 1;
    let xPos2 = 0;
    const interval2 = window.setInterval(() => {
      if (xPos2 > xFinalPosition2) {
        let flow3 = document.getElementById("tap-stream-before");
        const xFinalPosition3 = 1;
        let xPos3 = 0;
        const interval3 = window.setInterval(() => {
          if (xPos3 > xFinalPosition3) {
            let flow4 = document.getElementById("tap-stream-after");
            const xFinalPosition4 = 1;
            let xPos4 = 0;
            const interval4 = window.setInterval(() => {
              if (xPos4 > xFinalPosition4) {
                let flow5 = document.getElementById("first-container");
                const xFinalPosition5 = 1.0;
                let xPos5 = 0;
                const interval5 = window.setInterval(() => {
                  if (xPos5 > xFinalPosition5) {
                    let flow6 = document.getElementById("long-pipe");
                    const xFinalPosition6 = 1.0;
                    let xPos6 = 0;
                    const interval6 = window.setInterval(() => {
                      if (xPos6 > xFinalPosition6) {
                        let flow7 = document.getElementById("first-tube");
                        const xFinalPosition7 = 1.0;
                        let xPos7 = 0;
                        const interval7 = window.setInterval(() => {
                          if (xPos7 > xFinalPosition7) {
                            let flow8 = document.getElementById("second-tube");
                            const xFinalPosition8 = 1.0;
                            let xPos8 = 0;
                            const interval8 = window.setInterval(() => {
                              if (xPos8 > xFinalPosition8) {
                                let flow9 = document.getElementById(
                                  "third-tube"
                                );
                                const xFinalPosition9 = 1.0;
                                let xPos9 = 0;
                                const interval9 = window.setInterval(() => {
                                  if (xPos9 > xFinalPosition9) {
                                    let flow10 = document.getElementById(
                                      "fourth-tube"
                                    );
                                    const xFinalPosition10 = 1.0;
                                    let xPos10 = 0;
                                    const interval10 = window.setInterval(
                                      () => {
                                        if (xPos10 > xFinalPosition10) {
                                          let flow11 = document.getElementById(
                                            "fifth-tube"
                                          );
                                          const xFinalPosition11 = 1.0;
                                          let xPos11 = 0;
                                          const interval11 = window.setInterval(
                                            () => {
                                              if (xPos11 > xFinalPosition11) {
                                                let flow12 = document.getElementById(
                                                  "sixth-tube"
                                                );
                                                const xFinalPosition12 = 1.0;
                                                let xPos12 = 0;
                                                const interval12 = window.setInterval(
                                                  () => {
                                                    if (
                                                      xPos12 > xFinalPosition12
                                                    ) {
                                                      let flow13 = document.getElementById(
                                                        "seventh-tube"
                                                      );
                                                      const xFinalPosition13 = 1.0;
                                                      let xPos13 = 0;
                                                      const interval13 = window.setInterval(
                                                        () => {
                                                          if (
                                                            xPos13 >
                                                            xFinalPosition13
                                                          ) {
                                                            let flow14 = document.getElementById(
                                                              "second-container"
                                                            );
                                                            const xFinalPosition14 = 1.0;
                                                            let xPos14 = 0;
                                                            const interval14 = window.setInterval(
                                                              () => {
                                                                if (
                                                                  xPos14 >
                                                                  xFinalPosition14
                                                                ) {
                                                                  let flow15 = document.getElementById(
                                                                    "tap2-pipe-after"
                                                                  );
                                                                  const xFinalPosition15 = 1.0;
                                                                  let xPos15 = 0;
                                                                  const interval15 = window.setInterval(
                                                                    () => {
                                                                      if (
                                                                        xPos15 >
                                                                        xFinalPosition15
                                                                      ) {
                                                                        let flow16 = document.getElementById(
                                                                          "tap2-stream-before"
                                                                        );
                                                                        const xFinalPosition16 = 1.0;
                                                                        let xPos16 = 0;
                                                                        const interval16 = window.setInterval(
                                                                          () => {
                                                                            if (
                                                                              xPos16 >
                                                                              xFinalPosition16
                                                                            ) {
                                                                              let flow17 = document.getElementById(
                                                                                "last-container"
                                                                              );
                                                                              const xFinalPosition17 = 1.0;
                                                                              let xPos17 = 0;
                                                                              const interval17 = window.setInterval(
                                                                                () => {
                                                                                  if (
                                                                                    xPos17 >
                                                                                    xFinalPosition17
                                                                                  ) {
                                                                                    return window.clearInterval(
                                                                                      interval17
                                                                                    );
                                                                                  }
                                                                                  xPos17 += 0.01;
                                                                                  flow17.setAttribute(
                                                                                    "offset",
                                                                                    xPos17
                                                                                  );
                                                                                },
                                                                                1
                                                                              );
                                                                              return window.clearInterval(
                                                                                interval16
                                                                              );
                                                                            }
                                                                            xPos16 += 0.01;
                                                                            flow16.setAttribute(
                                                                              "offset",
                                                                              xPos16
                                                                            );
                                                                          },
                                                                          1
                                                                        );
                                                                        return window.clearInterval(
                                                                          interval15
                                                                        );
                                                                      }
                                                                      xPos15 += 0.01;
                                                                      flow15.setAttribute(
                                                                        "offset",
                                                                        xPos15
                                                                      );
                                                                    },
                                                                    1
                                                                  );
                                                                  return window.clearInterval(
                                                                    interval14
                                                                  );
                                                                }
                                                                xPos14 += 0.01;
                                                                flow14.setAttribute(
                                                                  "offset",
                                                                  xPos14
                                                                );
                                                              },
                                                              1
                                                            );
                                                            return window.clearInterval(
                                                              interval13
                                                            );
                                                          }
                                                          xPos13 += 0.01;
                                                          flow13.setAttribute(
                                                            "offset",
                                                            xPos13
                                                          );
                                                        },
                                                        1
                                                      );
                                                      return window.clearInterval(
                                                        interval12
                                                      );
                                                    }
                                                    xPos12 += 0.01;
                                                    flow12.setAttribute(
                                                      "offset",
                                                      xPos12
                                                    );
                                                  },
                                                  1
                                                );
                                                return window.clearInterval(
                                                  interval11
                                                );
                                              }
                                              xPos11 += 0.01;
                                              flow11.setAttribute(
                                                "offset",
                                                xPos11
                                              );
                                            }
                                          );
                                          return window.clearInterval(
                                            interval10
                                          );
                                        }
                                        xPos10 += 0.01;
                                        flow10.setAttribute("offset", xPos10);
                                      },
                                      1
                                    );
                                    return window.clearInterval(interval9);
                                  }
                                  xPos9 += 0.01;
                                  flow9.setAttribute("offset", xPos9);
                                }, 1);
                                return window.clearInterval(interval8);
                              }
                              xPos8 += 0.01;
                              flow8.setAttribute("offset", xPos8);
                            }, 1);
                            return window.clearInterval(interval7);
                          }
                          xPos7 += 0.01;
                          flow7.setAttribute("offset", xPos7);
                        }, 1);
                        return window.clearInterval(interval6);
                      }
                      xPos6 += 0.01;
                      flow6.setAttribute("offset", xPos6);
                    }, 1);
                    return window.clearInterval(interval5);
                  }
                  xPos5 += 0.01;
                  // console.log(xPos)
                  flow5.setAttribute("offset", xPos5);
                }, 1);
                return window.clearInterval(interval4);
              }
              xPos4 += 0.01;
              // console.log(xPos)
              flow4.setAttribute("offset", xPos4);
            }, 1);
            return window.clearInterval(interval3);
          }
          xPos3 += 0.01;
          // console.log(xPos)
          flow3.setAttribute("offset", xPos3);
        }, 1);

        return window.clearInterval(interval2);
      }
      xPos2 += 0.01;
      // console.log(xPos)
      flow2.setAttribute("offset", xPos2);
    }, 1);
    return window.clearInterval(interval);
  }
  xPos += 0.01;
  // console.log(xPos)
  flow.setAttribute("offset", xPos);
}, 1);
