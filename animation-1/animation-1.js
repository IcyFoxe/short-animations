// cog wheels animation
anime({
  targets: '#anim-pink-wheel',
  easing: 'cubicBezier(0.8, 0.95, 0.85, 1)',
  rotate: 380,
  duration: 2600
})

anime({
  targets: '#anim-gray-wheel',
  easing: 'cubicBezier(0.8, 0.95, 0.85, 1)',
  rotate: -360,
  duration: 2600
})

// graph paper animation
anime({
  targets: '#anim-graph-1',
  easing: 'easeOutQuad',
  left: [{value: '12%', easing: 'easeOutSine'}],
  top: [{value: '29%', easing: 'easeOutSine'}],
  scale: 1,
  duration: 1000,
  delay: 400
})

anime({
  targets: '#anim-graph-2',
  easing: 'easeOutQuad',
  left: [{value: '65%', easing: 'easeOutSine'}],
  top: [{value: '5%', easing: 'easeOutSine'}],
  scale: 1,
  duration: 1000,
  delay: 800
})

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
  duration: 800,
  delay: 1700
});

// circle animation
anime({
  targets: ['#anim-circle-pink', '#anim-circle-gray'],
  easing: 'linear',
  opacity: [
    { value: 1, duration: 0 },
    { value: 0, duration: 250, delay: 1750}
  ]
});

anime({
  targets: '#anim-circle-pink',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeOutSine',
  duration: 1650
});

// check mark animation
anime({
  targets: '#anim-check-mark',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 400,
  delay: 2100,
  opacity: [{ value: 1, duration: 0 }]
});