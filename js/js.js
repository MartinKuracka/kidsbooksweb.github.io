
// var textWrapper = document.querySelector('.letters');
// console.log (textWrapper);
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.letters',
//     translateY: ["1.2em", 0],
//     translateZ: 0,
//     duration: 550,
//     delay: (el, i) => 50 * i
//   }).add({
//     targets: '.ml6',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

var textWrapper = document.querySelector('.letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.letters',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 4000,
    easing: "easeOutExpo",
    delay: 2000
  });