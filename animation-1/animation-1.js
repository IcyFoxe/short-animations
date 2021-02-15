// cog wheels animation
anime({
  targets: '#anim-pink-wheel',
  easing: 'linear',
  rotate: 560,
  duration: 3100
})

anime({
  targets: '#anim-gray-wheel',
  easing: 'linear',
  rotate: -540,
  duration: 3100
})

// graph paper animation
anime({
  targets: '#anim-graph-1',
  easing: 'easeOutQuad',
  left: '12%',
  top: '29%',
  scale: 1,
  duration: 1000,
  delay: 800
})

anime({
  targets: '#anim-graph-2',
  easing: 'easeOutQuad',
  left: '65%',
  top: '5%',
  scale: 1,
  duration: 1000,
  delay: 1300
})

// circle animation
anime({
  targets: ['#anim-circle-pink', '#anim-circle-gray'],
  easing: 'linear',
  opacity: [
    { value: 1, duration: 0 },
    { value: 0, duration: 250, delay: 2200}
  ]
});

anime({
  targets: '#anim-circle-pink',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
  duration: 2000
});

// check mark animation
anime({
  targets: '#anim-check-mark',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 500,
  delay: 2600,
  opacity: [{ value: 1, duration: 0 }]
});

// magnifier animation
let magnifierPath = anime.path('#anim-magnifier-path');

anime({
  targets: '#anim-magnifier',
  translateX: magnifierPath('x'),
  translateY: magnifierPath('y'),
  scale: 1,
  opacity: [
    { value: 1 },
    { value: 1 }
  ],
  easing: 'easeOutQuad',
  duration: 1000,
  delay: 2000
});