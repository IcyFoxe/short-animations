// background circle animation
anime({
  targets: '#anim-circle-gray',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'cubicBezier(0.325, 0.140, 0.380, 0.940)',
  duration: 2000,
  delay: 500
})

// 1st circle animation
anime({
  targets: '#anim-circle-net',
  scale: 1,
  easing: 'easeInOutQuad',
  duration: 500
})

// sliding circles
let circles = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1250
})

circles.add({
  targets: '#anim-circle-data',
  x: 46,
  y: 296,
  opacity: { value: 1, duration: 1 },
  delay: 750
})

circles.add({
  targets: '#anim-circle-human',
  x: 95,
  y: 380,
  opacity: { value: 1, duration: 1 }
}, '-=900')

circles.add({
  targets: '#anim-circle-mail',
  x: 150,
  y: 440,
  opacity: { value: 1, duration: 1 }
}, '-=900')