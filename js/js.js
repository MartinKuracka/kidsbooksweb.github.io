let textWrapper = document.querySelector('.letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.letters',
    scale: [0, 1],
    duration: 2500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.letters',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 5000
  });

// let event = () => {
//     alert("eventlistener activated")
//   };

// let pokk = document.getElementById('pokus');
//   pokk.addEventListener("mouseover", event);

  
