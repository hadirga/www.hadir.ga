
let bursty = (x, y) => {
    const burst = new mojs.Burst({
      left: 0,
      top: 0,
      radius: {0: 200},
      count: 20,
      degree: 360,
      children: {
        fill: { white: '#34e1ff' },
        duration: 2000
      }
    }).tune({
      x: x,
      y: y
    });
    burst.replay();
  }
  
  document.addEventListener('click', (event) => {
    bursty(event.pageX, event.pageY);
  });
  
  let randomizedConfetti = () => {
    let randomX = Math.floor(Math.random() * (document.body.clientWidth-100) + 0);
    let randomY = Math.floor(Math.random() * (window.innerHeight-200) + 0);
    const burst = new mojs.Burst({
      left: 0,
      right: 0,
      radius: {0: 200},
      count: 20,
      degree: 360,
      children: {
        fill: { white: '#34e1ff' },
        duration: 2000
      }
    }).tune({
      x: randomX,
      y: randomY
    });
    burst.replay();
  }
  
  setInterval(() => randomizedConfetti(), 500);
  
  Splitting();


  /* -------------------------------- */