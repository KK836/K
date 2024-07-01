const myPromise = new Promise((resolve, rejrect) => {
  setTimeout(() => {
    rejrect("I failed");
    rejrect("I failed");
  }, 1000);
});

myPromise
  .then((done) => {
    console.log("done:", done);
  })
  .catch((err) => {
    console.log("err:", err);
  });
