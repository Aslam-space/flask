// ============================================================
// MOMENTUM ENGINE — SOLARIS ULTRA PRO 2026
// NEXT LEVEL GRAPHICS: SPARKLE STARS, PRE-BAKED TEXTURES,
// DYNAMIC LABELS, PARALLAX DEPTH, PREMIUM PLANET RENDERING
// ============================================================

// ============================================================
// PLANET DATABASE — complete scientific profiles
// ============================================================
const planets = [
  {
    name: 'Mercury', type: 'Terrestrial', rank: 1,
    r: 5, orbit: 62, speed: 0.04, angle: Math.random() * Math.PI * 2,
    gradient: ['#e0e0e0','#a6a6a6','#5a5a5a'],
    surfaceColors: ['#c8c8c8','#aaaaaa','#888888','#666666'],
    glowColor: 'rgba(180,180,180,', trailColor: 'rgba(170,170,170,',
    atmoColor: null,
    desc: 'Mercury is the smallest and fastest planet, completing an orbit every 88 Earth days. With no atmosphere to retain heat, surface temperatures swing wildly from -180\xb0C at night to 430\xb0C in daylight. Its heavily cratered surface resembles our Moon.',
    stats: { 'Diameter': '4,879 km', 'Mass': '3.3 \xd7 10\xb2\xb3 kg', 'Day': '1,408 hrs', 'Temp': '-180 to 430\xb0C', 'Gravity': '3.7 m/s\xb2', 'Moons': '0' },
    bars: { 'Size': 8, 'Gravity': 15, 'Temp': 72, 'Speed': 95 },
    moons: [],
    notable: '\u26a1 Fastest orbit \xb7 Extreme temp swings \xb7 Heavily cratered'
  },
  {
    name: 'Venus', type: 'Terrestrial', rank: 2,
    r: 9, orbit: 92, speed: 0.015, angle: Math.random() * Math.PI * 2,
    gradient: ['#fff2a8','#f5c842','#c89010'],
    surfaceColors: ['#ffd860','#f5c030','#d4a020','#b08010'],
    glowColor: 'rgba(245,200,66,', trailColor: 'rgba(245,200,66,',
    atmoColor: 'rgba(255,200,50,0.12)',
    desc: 'Venus is the hottest planet despite not being closest to the Sun. Its dense CO\u2082 atmosphere creates a crushing greenhouse effect, pushing surface temperatures to 465\xb0C. Oddly, it rotates backwards and slower than it orbits.',
    stats: { 'Diameter': '12,104 km', 'Mass': '4.87 \xd7 10\xb2\u2074 kg', 'Day': '5,832 hrs', 'Temp': '465\xb0C avg', 'Gravity': '8.87 m/s\xb2', 'Moons': '0' },
    bars: { 'Size': 48, 'Gravity': 62, 'Temp': 100, 'Speed': 55 },
    moons: [],
    notable: '\U0001F525 Hottest planet \xb7 Retrograde rotation \xb7 Sulfuric acid clouds'
  },
  {
    name: 'Earth', type: 'Terrestrial', rank: 3,
    r: 10, orbit: 134, speed: 0.01, angle: Math.random() * Math.PI * 2,
    gradient: ['#6ad4f5','#2a9fd6','#0d5986'],
    surfaceColors: ['#3090c0','#1a7090','#0a5070','#1060a0'],
    glowColor: 'rgba(42,159,214,', trailColor: 'rgba(42,159,214,',
    atmoColor: 'rgba(100,200,255,0.1)',
    desc: 'Earth is the only known planet with abundant liquid water, a breathable atmosphere, and life. Its protective magnetic field shields the surface from solar radiation. At 4.5 billion years old, it hosts over 8 million species.',
    stats: { 'Diameter': '12,742 km', 'Mass': '5.97 \xd7 10\xb2\u2074 kg', 'Day': '24 hrs', 'Temp': '-88 to 58\xb0C', 'Gravity': '9.8 m/s\xb2', 'Moons': '1' },
    bars: { 'Size': 50, 'Gravity': 68, 'Temp': 40, 'Speed': 40 },
    moons: ['Luna'],
    notable: '\U0001F4A7 Liquid water \xb7 Magnetic shield \xb7 Only known life'
  },
  {
    name: 'Mars', type: 'Terrestrial', rank: 4,
    r: 7, orbit: 176, speed: 0.008, angle: Math.random() * Math.PI * 2,
    gradient: ['#e8704a','#c1440e','#7a2000'],
    surfaceColors: ['#d05828','#b84010','#9a3008','#c04820'],
    glowColor: 'rgba(193,68,14,', trailColor: 'rgba(193,68,14,',
    atmoColor: 'rgba(200,100,40,0.08)',
    desc: 'Mars, the Red Planet, hosts Olympus Mons — the tallest volcano in the solar system at 21 km. Ancient river channels suggest it once harbored liquid water. Today its thin CO\u2082 atmosphere creates dust storms that engulf the entire planet.',
    stats: { 'Diameter': '6,779 km', 'Mass': '6.42 \xd7 10\xb2\xb3 kg', 'Day': '24.6 hrs', 'Temp': '-125 to 20\xb0C', 'Gravity': '3.72 m/s\xb2', 'Moons': '2' },
    bars: { 'Size': 26, 'Gravity': 26, 'Temp': 55, 'Speed': 32 },
    moons: ['Phobos','Deimos'],
    notable: '\U0001F30B Tallest volcano \xb7 Ancient water channels \xb7 Global dust storms'
  },
  {
    name: 'Jupiter', type: 'Gas Giant', rank: 5,
    r: 24, orbit: 240, speed: 0.004, angle: Math.random() * Math.PI * 2,
    gradient: ['#e8c07a','#c88b3a','#8c5a18'],
    surfaceColors: ['#d4a060','#c08040','#a06020','#e0b070'],
    glowColor: 'rgba(200,139,58,', trailColor: 'rgba(200,139,58,',
    atmoColor: 'rgba(200,140,60,0.08)',
    bands: true,
    desc: 'Jupiter is the undisputed giant, so massive it could contain all other planets combined. Its iconic Great Red Spot is a storm larger than Earth, raging for over 350 years. Jupiter emits more heat than it receives from the Sun.',
    stats: { 'Diameter': '139,820 km', 'Mass': '1.9 \xd7 10\xb2\u2077 kg', 'Day': '9.9 hrs', 'Temp': '-108\xb0C', 'Gravity': '24.79 m/s\xb2', 'Moons': '95' },
    bars: { 'Size': 100, 'Gravity': 100, 'Temp': 20, 'Speed': 16 },
    moons: ['Io','Europa','Ganymede','Callisto'],
    notable: '\U0001F300 Great Red Spot \xb7 95 moons \xb7 Strongest gravity'
  },
  {
    name: 'Saturn', type: 'Gas Giant', rank: 6,
    r: 20, orbit: 300, speed: 0.003, angle: Math.random() * Math.PI * 2,
    gradient: ['#f8edd0','#e8d5a3','#b8a070'],
    surfaceColors: ['#ecdab0','#d8c890','#c0b070','#e8d4a0'],
    glowColor: 'rgba(232,213,163,', trailColor: 'rgba(232,213,163,',
    atmoColor: 'rgba(240,220,160,0.07)',
    bands: true, ring: true,
    desc: 'Saturn\'s rings are one of the solar system\'s greatest spectacles \u2014 billions of ice particles and rocks spanning 282,000 km. Saturn is so light it would float on water. It holds the solar system record with 146 confirmed moons.',
    stats: { 'Diameter': '116,460 km', 'Mass': '5.68 \xd7 10\xb2\u2076 kg', 'Day': '10.7 hrs', 'Temp': '-139\xb0C', 'Gravity': '10.44 m/s\xb2', 'Moons': '146' },
    bars: { 'Size': 92, 'Gravity': 42, 'Temp': 18, 'Speed': 12 },
    moons: ['Titan','Enceladus','Mimas','Rhea'],
    notable: '\U0001F48D 282,000 km rings \xb7 146 moons \xb7 Least dense planet'
  },
  {
    name: 'Uranus', type: 'Ice Giant', rank: 7,
    r: 16, orbit: 360, speed: 0.002, angle: Math.random() * Math.PI * 2,
    gradient: ['#b8f4f4','#7de8e8','#3a9090'],
    surfaceColors: ['#90e8e8','#60d0d0','#40a8a8','#70d8d8'],
    glowColor: 'rgba(125,232,232,', trailColor: 'rgba(125,232,232,',
    atmoColor: 'rgba(100,240,240,0.1)',
    desc: 'Uranus is the only planet to rotate on its side with an axial tilt of 98\xb0, effectively rolling around the Sun. As an ice giant its mantle contains water, ammonia, and methane ices. Its methane atmosphere gives it a striking teal color.',
    stats: { 'Diameter': '50,724 km', 'Mass': '8.68 \xd7 10\xb2\u2075 kg', 'Day': '17.2 hrs', 'Temp': '-195\xb0C', 'Gravity': '8.87 m/s\xb2', 'Moons': '28' },
    bars: { 'Size': 40, 'Gravity': 62, 'Temp': 8, 'Speed': 8 },
    moons: ['Miranda','Ariel','Titania','Oberon'],
    notable: '\u21d4 98\xb0 axial tilt \xb7 Ice giant \xb7 Methane blue-green hue'
  },
  {
    name: 'Neptune', type: 'Ice Giant', rank: 8,
    r: 15, orbit: 415, speed: 0.0015, angle: Math.random() * Math.PI * 2,
    gradient: ['#8090ff','#4f6ee6','#1a2a90'],
    surfaceColors: ['#6070e0','#4050c0','#2030a0','#5060d0'],
    glowColor: 'rgba(79,110,230,', trailColor: 'rgba(79,110,230,',
    atmoColor: 'rgba(60,80,240,0.1)',
    desc: 'Neptune is the windiest world in the solar system, with storms reaching 2,100 km/h \u2014 faster than the speed of sound on Earth. Its moon Triton orbits backwards and is slowly spiraling inward, destined to be torn apart in ~3.6 billion years.',
    stats: { 'Diameter': '49,244 km', 'Mass': '1.02 \xd7 10\xb2\u2076 kg', 'Day': '16.1 hrs', 'Temp': '-201\xb0C', 'Gravity': '11.15 m/s\xb2', 'Moons': '16' },
    bars: { 'Size': 38, 'Gravity': 44, 'Temp': 2, 'Speed': 6 },
    moons: ['Triton','Nereid','Proteus'],
    notable: '\U0001F4A8 2100 km/h winds \xb7 Retrograde moon \xb7 Farthest planet'
  }
];

// ============================================================
// QUOTES (unchanged)
// ============================================================
const quotes = [
  { text: 'Discipline beats motivation.', author: 'Unknown', cat: 'discipline' },
  { text: 'Consistency creates dominance.', author: 'Unknown', cat: 'discipline' },
  { text: 'Focus. Execute. Improve.', author: 'Unknown', cat: 'focus' },
  { text: 'Small progress daily compounds.', author: 'Unknown', cat: 'growth' },
  { text: 'Momentum wins.', author: 'Unknown', cat: 'discipline' },
  { text: 'Professional growth requires daily effort.', author: 'Unknown', cat: 'growth' },
  { text: 'Efficiency is the ultimate productivity hack.', author: 'Unknown', cat: 'focus' },
  { text: 'Learn fast, execute faster.', author: 'Unknown', cat: 'focus' },
  { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain', cat: 'discipline' },
  { text: 'It does not matter how slowly you go, as long as you do not stop.', author: 'Confucius', cat: 'growth' },
  { text: 'Success is the sum of small efforts, repeated day in and day out.', author: 'R. Collier', cat: 'discipline' },
  { text: 'You do not rise to your goals. You fall to your systems.', author: 'James Clear', cat: 'growth' },
  { text: 'Do what you can, with what you have, where you are.', author: 'T. Roosevelt', cat: 'growth' },
  { text: 'Work hard in silence. Let your success be the noise.', author: 'Unknown', cat: 'focus' },
  { text: 'Action is the foundational key to all success.', author: 'Picasso', cat: 'focus' },
  { text: 'One day or day one. You decide.', author: 'Unknown', cat: 'discipline' },
  { text: 'Push yourself because no one else is going to do it for you.', author: 'Unknown', cat: 'discipline' },
  { text: 'Great things never come from comfort zones.', author: 'Unknown', cat: 'growth' },
  { text: 'Starve your distractions. Feed your focus.', author: 'Unknown', cat: 'focus' },
  { text: 'Wake up with determination. Go to bed with satisfaction.', author: 'Unknown', cat: 'discipline' },
  { text: 'Little things make big days.', author: 'Unknown', cat: 'growth' },
  { text: 'The harder you work for something, the greater you\'ll feel when you achieve it.', author: 'Unknown', cat: 'growth' },
  { text: 'Dream it. Plan it. Do it.', author: 'Unknown', cat: 'focus' },
  { text: 'Be the energy you want to attract.', author: 'Unknown', cat: 'focus' }
];

// ============================================================
// STATE
// ============================================================
let qIndex = 0, activeCategory = 'all', filteredQuotes = [...quotes];
let progressInterval = null, progressVal = 0;
let speedMultiplier = 1;
let orbitCount = 0;
let streak = parseInt(localStorage.getItem('streak') || '1');
let showOrbits = true, showLabels = true, showTrails = true;
let showAsteroids = true, showGlow = true;
let frameCount = 0, lastFpsTime = performance.now();
let mouseX = -9999, mouseY = -9999;
let cursorDotX = -9999, cursorDotY = -9999;

document.getElementById('statStreak').innerText = streak;
document.getElementById('statQuotes').innerText = quotes.length;
if (localStorage.getItem('theme')) setTheme(localStorage.getItem('theme'));

// ============================================================
// PRE-COMPUTE SURFACE DOTS — eliminates per-frame flicker
// ============================================================
planets.forEach((p, pidx) => {
  p.surfaceDots = [];
  for (let i = 0; i < Math.floor(p.r * 5); i++) {
    // Deterministic pseudo-random using index seed
    const s1 = ((pidx * 999 + i * 7919) % 10000) / 10000;
    const s2 = ((pidx * 1777 + i * 6271 + 3333) % 10000) / 10000;
    const angle = s1 * Math.PI * 2;
    const dist  = Math.sqrt(s2) * p.r * 0.95;
    p.surfaceDots.push({
      ox: Math.cos(angle) * dist,
      oy: Math.sin(angle) * dist,
      r:  s1 * 1.4 + 0.3,
      ci: Math.floor(s2 * p.surfaceColors.length)
    });
  }
});

// ============================================================
// CURSOR
// ============================================================
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left  = e.clientX + 'px';
  cursorDot.style.top   = e.clientY + 'px';
  document.getElementById('hudCoords').innerText = 'X: ' + e.clientX + '   Y: ' + e.clientY;
});
function animateCursor() {
  cursorDotX += (mouseX - cursorDotX) * 0.3;
  cursorDotY += (mouseY - cursorDotY) * 0.3;
  cursorRing.style.left = cursorDotX + 'px';
  cursorRing.style.top  = cursorDotY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();
document.querySelectorAll('button, .planet-pill').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ============================================================
// NEBULA
// ============================================================
const nebulaCanvas = document.getElementById('nebulaCanvas');
const nctx = nebulaCanvas.getContext('2d');
function resizeNebula() {
  nebulaCanvas.width  = window.innerWidth;
  nebulaCanvas.height = window.innerHeight;
}
resizeNebula();
function drawNebula() {
  nctx.clearRect(0, 0, nebulaCanvas.width, nebulaCanvas.height);
  const clouds = [
    { x:0.12, y:0.25, r:420, c:'rgba(90,0,160,0.55)' },
    { x:0.85, y:0.70, r:360, c:'rgba(0,40,120,0.5)' },
    { x:0.50, y:0.08, r:280, c:'rgba(0,90,70,0.42)' },
    { x:0.92, y:0.15, r:240, c:'rgba(120,0,100,0.42)' },
    { x:0.30, y:0.85, r:220, c:'rgba(0,60,150,0.38)' },
    { x:0.70, y:0.45, r:170, c:'rgba(60,0,120,0.32)' },
    { x:0.55, y:0.55, r:300, c:'rgba(0,100,200,0.18)' }
  ];
  clouds.forEach(c => {
    const g = nctx.createRadialGradient(
      c.x * nebulaCanvas.width, c.y * nebulaCanvas.height, 12,
      c.x * nebulaCanvas.width, c.y * nebulaCanvas.height, c.r
    );
    g.addColorStop(0, c.c);
    g.addColorStop(1, 'transparent');
    nctx.fillStyle = g;
    nctx.fillRect(0, 0, nebulaCanvas.width, nebulaCanvas.height);
  });
}
drawNebula();

// ============================================================
// MAIN CANVAS
// ============================================================
const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  resizeNebula(); drawNebula();
});

// ==================== ENHANCED STAR FIELD ====================
// Three depth layers for parallax feel
const starLayers = [
  Array.from({ length: 600 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 0.9 + 0.2,
    baseAlpha: Math.random() * 0.5 + 0.15,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.0008 + 0.0002,
    color: '#ffffff', bright: false
  })),
  Array.from({ length: 380 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.4 + 0.5,
    baseAlpha: Math.random() * 0.6 + 0.25,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.0012 + 0.0004,
    color: Math.random() < 0.15 ? '#ffd8a0' : (Math.random() < 0.12 ? '#a0c8ff' : '#ffffff'),
    bright: false
  })),
  Array.from({ length: 80 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 2.2 + 1.2,
    baseAlpha: Math.random() * 0.5 + 0.5,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.0018 + 0.0008,
    color: Math.random() < 0.4 ? '#ffd8a0' : (Math.random() < 0.3 ? '#a0c8ff' : '#ffffff'),
    bright: true
  }))
];
const allStars = [...starLayers[0], ...starLayers[1], ...starLayers[2]];

// ==================== SHOOTING STARS ====================
let shootingStars = [];
function addShootingStar() {
  if (Math.random() < 0.006) {
    shootingStars.push({
      x: Math.random() * w * 0.8 + w * 0.1,
      y: Math.random() * h * 0.35,
      length: Math.random() * 100 + 60,
      angle: Math.PI * 0.5 + (Math.random() - 0.5) * 0.5,
      speed: Math.random() * 7 + 5,
      alpha: 0.9,
      life: 1.0,
      width: Math.random() * 1.2 + 0.6
    });
  }
}
function drawShootingStars() {
  shootingStars = shootingStars.filter(s => s.life > 0.01);
  shootingStars.forEach(s => {
    s.x += Math.cos(s.angle) * s.speed;
    s.y += Math.sin(s.angle) * s.speed;
    s.life -= 0.012;
    const tail = ctx.createLinearGradient(
      s.x, s.y,
      s.x - Math.cos(s.angle) * s.length,
      s.y - Math.sin(s.angle) * s.length
    );
    tail.addColorStop(0, 'rgba(255,255,255,' + (s.alpha * s.life).toFixed(3) + ')');
    tail.addColorStop(0.3, 'rgba(180,220,255,' + (s.alpha * s.life * 0.6).toFixed(3) + ')');
    tail.addColorStop(1, 'rgba(100,160,255,0)');
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
    ctx.strokeStyle = tail;
    ctx.lineWidth = s.width;
    ctx.shadowColor = 'rgba(255,255,255,0.8)';
    ctx.shadowBlur = 8;
    ctx.stroke();
    // Head glow
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.width * 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,' + (s.life * 0.9).toFixed(3) + ')';
    ctx.fill();
    ctx.restore();
  });
}

// Asteroid belt
const asteroids = Array.from({ length: 300 }, () => ({
  angle: Math.random() * Math.PI * 2,
  dist: 196 + (Math.random() - 0.5) * 38,
  size: Math.random() * 1.8 + 0.3,
  speed: Math.random() * 0.0006 + 0.0001,
  alpha: Math.random() * 0.55 + 0.2
}));

// Particle bursts on click
let particles = [];

// ============================================================
// DRAW STARS — premium sparkle rendering
// ============================================================
function drawStars(now) {
  allStars.forEach(s => {
    const t1 = Math.sin(now * s.speed + s.phase);
    const t2 = Math.sin(now * s.speed * 2.7 + s.phase * 1.4) * 0.22;
    let a = s.baseAlpha + t1 * 0.28 + t2;
    a = Math.max(0.05, Math.min(1, a));

    const sx = s.x * w, sy = s.y * h;

    if (s.bright && s.r > 1.8) {
      // 4-point sparkle star for bright stars
      ctx.save();
      ctx.globalAlpha = a;
      ctx.shadowColor = s.color;
      ctx.shadowBlur = s.r * 5;
      // Core
      ctx.beginPath();
      ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      // Cross rays
      const rayLen = s.r * 4.5;
      ctx.strokeStyle = s.color === '#ffd8a0' ? 'rgba(255,216,160,' + a * 0.5 + ')' :
                        s.color === '#a0c8ff'  ? 'rgba(160,200,255,' + a * 0.5 + ')' :
                                                 'rgba(255,255,255,' + a * 0.45 + ')';
      ctx.lineWidth = s.r * 0.35;
      ctx.beginPath();
      ctx.moveTo(sx - rayLen, sy);
      ctx.lineTo(sx + rayLen, sy);
      ctx.moveTo(sx, sy - rayLen);
      ctx.lineTo(sx, sy + rayLen);
      ctx.stroke();
      // Diagonal rays (softer)
      ctx.lineWidth = s.r * 0.18;
      ctx.strokeStyle = s.color === '#ffd8a0' ? 'rgba(255,216,160,' + a * 0.25 + ')' :
                        s.color === '#a0c8ff'  ? 'rgba(160,200,255,' + a * 0.25 + ')' :
                                                 'rgba(255,255,255,' + a * 0.2 + ')';
      const drayLen = rayLen * 0.6;
      ctx.beginPath();
      ctx.moveTo(sx - drayLen * 0.707, sy - drayLen * 0.707);
      ctx.lineTo(sx + drayLen * 0.707, sy + drayLen * 0.707);
      ctx.moveTo(sx + drayLen * 0.707, sy - drayLen * 0.707);
      ctx.lineTo(sx - drayLen * 0.707, sy + drayLen * 0.707);
      ctx.stroke();
      ctx.restore();
    } else {
      ctx.save();
      ctx.globalAlpha = a;
      if (s.r > 1.0) {
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.r * 3;
      }
      ctx.beginPath();
      ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color === '#ffd8a0' ? '#ffd8a0' :
                      s.color === '#a0c8ff' ? '#a0c8ff' : '#ffffff';
      ctx.fill();
      ctx.restore();
    }
  });
  ctx.globalAlpha = 1;
}

// ============================================================
// DRAW SUN — multi-layer volumetric corona
// ============================================================
function drawSun(cx, cy, now) {
  if (showGlow) {
    for (let layer = 5; layer >= 1; layer--) {
      const pulse = 1 + Math.sin(now * 0.0007 + layer * 1.2) * 0.07;
      const outerR = (44 + layer * 30) * pulse;
      const alpha  = 0.055 / layer;
      const cg = ctx.createRadialGradient(cx, cy, 28, cx, cy, outerR);
      cg.addColorStop(0, 'rgba(255,200,50,' + alpha * 4.5 + ')');
      cg.addColorStop(0.4, 'rgba(255,150,20,' + alpha * 2.5 + ')');
      cg.addColorStop(1, 'rgba(255,80,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
      ctx.fillStyle = cg;
      ctx.fill();
    }
  }
  // Solar surface
  ctx.beginPath();
  ctx.arc(cx, cy, 42, 0, Math.PI * 2);
  const sg = ctx.createRadialGradient(cx - 14, cy - 14, 2, cx, cy, 44);
  sg.addColorStop(0, '#fffef0');
  sg.addColorStop(0.25, '#fff8a0');
  sg.addColorStop(0.6, '#FFD93B');
  sg.addColorStop(0.85, '#ff9500');
  sg.addColorStop(1, '#cc3300');
  ctx.fillStyle = sg;
  ctx.shadowColor = '#ff9500';
  ctx.shadowBlur = 30;
  ctx.fill();
  ctx.shadowBlur = 0;
  // Surface shimmer ring
  ctx.beginPath();
  ctx.arc(cx, cy, 42, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,220,80,' + (0.3 + Math.sin(now * 0.004) * 0.15) + ')';
  ctx.lineWidth = 2.5;
  ctx.stroke();
  // Sunspot
  ctx.beginPath();
  ctx.arc(cx + 13, cy + 9, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(180,80,0,0.35)';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx - 15, cy - 5, 3, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(160,60,0,0.25)';
  ctx.fill();
}

// ============================================================
// DRAW ASTEROID BELT
// ============================================================
function drawAsteroidBelt(cx, cy) {
  if (!showAsteroids) return;
  asteroids.forEach(a => {
    a.angle += a.speed * speedMultiplier;
    const ax = cx + a.dist * Math.cos(a.angle);
    const ay = cy + a.dist * Math.sin(a.angle);
    ctx.beginPath();
    ctx.arc(ax, ay, a.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(150,130,100,' + a.alpha + ')';
    ctx.fill();
  });
}

// ============================================================
// DRAW PLANET — ultra quality with pre-baked textures
// ============================================================
function drawPlanet(p, x, y, hovered, now) {
  // Orbit trail
  if (showTrails) {
    if (!p.trail) p.trail = [];
    p.trail.push({ x, y });
    if (p.trail.length > 90) p.trail.shift();
    ctx.save();
    for (let i = 1; i < p.trail.length; i++) {
      const t = i / p.trail.length;
      ctx.beginPath();
      ctx.moveTo(p.trail[i-1].x, p.trail[i-1].y);
      ctx.lineTo(p.trail[i].x, p.trail[i].y);
      ctx.strokeStyle = p.trailColor + (t * 0.28) + ')';
      ctx.lineWidth = p.r * 0.2 * t;
      ctx.stroke();
    }
    ctx.restore();
  }

  // Atmosphere halo
  if (p.atmoColor && showGlow) {
    const atmo = ctx.createRadialGradient(x, y, p.r * 0.8, x, y, p.r * 1.7);
    atmo.addColorStop(0, p.atmoColor);
    atmo.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(x, y, p.r * 1.7, 0, Math.PI * 2);
    ctx.fillStyle = atmo;
    ctx.fill();
  }

  // Hover glow rings
  if (hovered && showGlow) {
    const hoverPulse = 1 + Math.sin(now * 0.006) * 0.12;
    for (let ring = 4; ring >= 1; ring--) {
      const rg = ctx.createRadialGradient(x, y, p.r, x, y, p.r * (1.9 + ring * 0.75) * hoverPulse);
      rg.addColorStop(0, p.glowColor + (0.14 / ring) + ')');
      rg.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(x, y, p.r * (1.9 + ring * 0.75) * hoverPulse, 0, Math.PI * 2);
      ctx.fillStyle = rg;
      ctx.fill();
    }
  }

  // Saturn ring BEHIND planet
  if (p.ring) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.ellipse(0, 0, p.r * 2.4, p.r * 0.55, 0.22, Math.PI, Math.PI * 2);
    const rb = ctx.createLinearGradient(-p.r*2.4, 0, p.r*2.4, 0);
    rb.addColorStop(0, 'rgba(200,180,120,0)');
    rb.addColorStop(0.2, 'rgba(220,200,140,0.45)');
    rb.addColorStop(0.5, 'rgba(250,230,170,0.78)');
    rb.addColorStop(0.8, 'rgba(220,200,140,0.45)');
    rb.addColorStop(1, 'rgba(200,180,120,0)');
    ctx.strokeStyle = rb;
    ctx.lineWidth = p.r * 0.34;
    ctx.stroke();
    ctx.restore();
  }

  // Planet body — 3D sphere
  ctx.beginPath();
  ctx.arc(x, y, p.r, 0, Math.PI * 2);
  const pg = ctx.createRadialGradient(
    x - p.r * 0.38, y - p.r * 0.38, p.r * 0.04,
    x + p.r * 0.15, y + p.r * 0.15, p.r * 1.15
  );
  pg.addColorStop(0,    p.gradient[0]);
  pg.addColorStop(0.45, p.gradient[1]);
  pg.addColorStop(1,    p.gradient[2]);
  ctx.fillStyle = pg;
  ctx.fill();

  // PRE-BAKED surface texture (no flicker)
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, p.r, 0, Math.PI * 2);
  ctx.clip();
  p.surfaceDots.forEach(d => {
    ctx.beginPath();
    ctx.arc(x + d.ox, y + d.oy, d.r, 0, Math.PI * 2);
    ctx.fillStyle = p.surfaceColors[d.ci] + '55';
    ctx.fill();
  });
  ctx.restore();

  // Gas giant bands (Jupiter & Saturn)
  if (p.bands) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, p.r, 0, Math.PI * 2);
    ctx.clip();
    const bandCount = p.name === 'Jupiter' ? 10 : 7;
    for (let b = 0; b < bandCount; b++) {
      const by = y - p.r + (b / bandCount) * p.r * 2;
      const bAlpha = 0.12 + (b % 2) * 0.1;
      ctx.fillStyle = b % 2 === 0
        ? 'rgba(80,40,10,' + bAlpha + ')'
        : 'rgba(200,150,80,' + bAlpha + ')';
      ctx.fillRect(x - p.r, by, p.r * 2, p.r * 2 / bandCount);
    }
    if (p.name === 'Jupiter') {
      const spotX = x + p.r * 0.3;
      const spotY = y + p.r * 0.15;
      ctx.beginPath();
      ctx.ellipse(spotX, spotY, p.r * 0.35, p.r * 0.22, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(180,60,20,0.52)';
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(spotX, spotY, p.r * 0.24, p.r * 0.14, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(220,100,40,0.42)';
      ctx.fill();
    }
    ctx.restore();
  }

  // Earth continent silhouettes
  if (p.name === 'Earth') {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, p.r, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = 'rgba(60,140,60,0.55)';
    ctx.beginPath(); ctx.ellipse(x - p.r*0.1, y - p.r*0.2, p.r*0.3, p.r*0.25, 0.5, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x + p.r*0.25, y - p.r*0.1, p.r*0.22, p.r*0.32, -0.3, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x - p.r*0.3, y + p.r*0.25, p.r*0.28, p.r*0.18, 0.8, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = 'rgba(240,240,255,0.35)';
    ctx.beginPath(); ctx.ellipse(x, y - p.r*0.72, p.r*0.55, p.r*0.16, 0, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x, y + p.r*0.72, p.r*0.45, p.r*0.14, 0, 0, Math.PI*2); ctx.fill();
    ctx.restore();
  }

  // Saturn ring FRONT
  if (p.ring) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.ellipse(0, 0, p.r * 2.4, p.r * 0.55, 0.22, 0, Math.PI);
    const rf = ctx.createLinearGradient(-p.r*2.4, 0, p.r*2.4, 0);
    rf.addColorStop(0, 'rgba(200,180,120,0)');
    rf.addColorStop(0.2, 'rgba(230,210,150,0.55)');
    rf.addColorStop(0.5, 'rgba(250,230,170,0.82)');
    rf.addColorStop(0.8, 'rgba(220,200,140,0.55)');
    rf.addColorStop(1, 'rgba(200,180,120,0)');
    ctx.strokeStyle = rf;
    ctx.lineWidth = p.r * 0.34;
    ctx.stroke();
    ctx.restore();
  }

  // Specular highlight
  ctx.beginPath();
  ctx.arc(x - p.r * 0.32, y - p.r * 0.32, p.r * 0.28, 0, Math.PI * 2);
  const sp = ctx.createRadialGradient(x-p.r*0.32, y-p.r*0.32, 0, x-p.r*0.32, y-p.r*0.32, p.r*0.28);
  sp.addColorStop(0, 'rgba(255,255,255,0.48)');
  sp.addColorStop(0.55, 'rgba(255,255,255,0.1)');
  sp.addColorStop(1, 'transparent');
  ctx.fillStyle = sp;
  ctx.fill();

  // Atmospheric rim glow (gas/ice giants)
  if (p.type !== 'Terrestrial') {
    ctx.beginPath();
    ctx.arc(x, y, p.r + 1.5, 0, Math.PI * 2);
    ctx.strokeStyle = p.glowColor + '0.35)';
    ctx.lineWidth = 3.5;
    ctx.shadowColor = p.glowColor + '0.4)';
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
}

// ============================================================
// DRAW LABEL — premium background pill
// ============================================================
function drawLabel(p, x, y, hovered) {
  if (!showLabels) return;
  ctx.save();
  const lx = x + p.r + 8;
  const ly = y - p.r - 4;

  if (hovered) {
    const nameTxt = p.name.toUpperCase();
    const typeTxt = p.type.toUpperCase();
    // Measure
    ctx.font = 'bold 12px Orbitron, monospace';
    const nw = ctx.measureText(nameTxt).width;
    ctx.font = '9px Share Tech Mono, monospace';
    const tw = ctx.measureText(typeTxt).width;
    const boxW = Math.max(nw, tw) + 18;
    const boxH = 36;
    // Background pill
    ctx.fillStyle = 'rgba(0,5,15,0.82)';
    ctx.strokeStyle = p.glowColor + '0.55)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(lx - 2, ly - 24, boxW, boxH, 3) :
                    ctx.rect(lx - 2, ly - 24, boxW, boxH);
    ctx.fill();
    ctx.stroke();
    // Planet name
    ctx.font = 'bold 12px Orbitron, monospace';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = p.glowColor + '1)';
    ctx.shadowBlur = 14;
    ctx.fillText(nameTxt, lx + 7, ly - 6);
    // Planet type
    ctx.font = '9px Share Tech Mono, monospace';
    ctx.fillStyle = p.glowColor + '0.9)';
    ctx.shadowBlur = 6;
    ctx.fillText(typeTxt, lx + 7, ly + 8);
  } else {
    ctx.font = '9.5px Share Tech Mono, monospace';
    // Subtle background
    const tw2 = ctx.measureText(p.name).width;
    ctx.fillStyle = 'rgba(0,5,15,0.55)';
    ctx.fillRect(lx - 1, ly - 12, tw2 + 8, 15);
    ctx.fillStyle = 'rgba(180,210,255,0.52)';
    ctx.fillText(p.name, lx + 3, ly - 1);
  }
  ctx.restore();
}

// ============================================================
// PARTICLES
// ============================================================
function spawnParticles(x, y, color) {
  for (let i = 0; i < 22; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 4 + 1.2;
    particles.push({
      x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      r: Math.random() * 3.5 + 1, alpha: 1, color: color
    });
  }
}
function updateParticles() {
  particles = particles.filter(p => p.alpha > 0.02);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    p.vy += 0.035;
    p.alpha -= 0.022;
    p.r *= 0.975;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color.replace(/,[^,]+\)$/, ',' + p.alpha + ')');
    ctx.shadowColor = p.color.replace(/,[^,]+\)$/, ',0.8)');
    ctx.shadowBlur = 4;
    ctx.fill();
    ctx.shadowBlur = 0;
  });
}

// ============================================================
// MAIN ANIMATION LOOP
// ============================================================
function animateSolarSystem(now) {
  now = now || 0;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#000205';
  ctx.fillRect(0, 0, w, h);

  drawStars(now);
  addShootingStar();
  drawShootingStars();

  const cx = w / 2, cy = h / 2;

  // Orbit paths — subtle gradient
  if (showOrbits) {
    planets.forEach(p => {
      ctx.beginPath();
      ctx.arc(cx, cy, p.orbit, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.032)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 8]);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }

  drawAsteroidBelt(cx, cy);
  drawSun(cx, cy, now);

  // FPS counter
  frameCount++;
  if (now - lastFpsTime > 1000) {
    document.getElementById('statFPS').innerText = frameCount;
    frameCount = 0; lastFpsTime = now;
  }

  let hoveredPlanet = null;

  planets.forEach(p => {
    if (!p.trail) p.trail = [];
    p.angle += p.speed * speedMultiplier;
    const x = cx + p.orbit * Math.cos(p.angle);
    const y = cy + p.orbit * Math.sin(p.angle);
    const dist = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
    const hovered = dist < p.r + 18;
    if (hovered) hoveredPlanet = { p, x, y };
    drawPlanet(p, x, y, hovered, now);
    drawLabel(p, x, y, hovered);
  });

  updateParticles();

  // Tooltip & HUD
  const tooltip = document.getElementById('tooltip');
  if (hoveredPlanet) {
    const { p, x, y } = hoveredPlanet;
    tooltip.innerHTML =
      '<span class="t-name">' + p.name + '</span>' +
      '<span class="t-type">' + p.type.toUpperCase() + '</span>' +
      '<span class="t-stat">Diameter: <span>' + p.stats['Diameter'] + '</span></span>' +
      '<span class="t-stat">Gravity: <span>' + p.stats['Gravity'] + '</span></span>' +
      '<span class="t-stat">Moons: <span>' + p.stats['Moons'] + '</span></span>' +
      '<span class="t-stat">Temp: <span>' + p.stats['Temp'] + '</span></span>' +
      '<span class="t-hint">&#9654; CLICK FOR FULL PROFILE</span>';
    const tx = Math.min(x + p.r + 22, w - 310);
    const ty = Math.max(y - 65, 10);
    tooltip.style.left = tx + 'px';
    tooltip.style.top  = ty + 'px';
    tooltip.classList.add('visible');
    document.getElementById('planetInfoText').innerText =
      p.name.toUpperCase() + '  \xb7  ' + p.type + '  \xb7  ' + p.stats['Moons'] + ' Moon(s)';
    document.getElementById('pibIcon').style.color = p.gradient[1];
    document.getElementById('planetFocus').innerText = p.name.toUpperCase();
    canvas.style.cursor = 'none';
  } else {
    tooltip.classList.remove('visible');
    canvas.style.cursor = 'none';
  }

  // Earth orbit count
  if (planets[2].angle > Math.PI * 2) {
    planets[2].angle -= Math.PI * 2;
    orbitCount++;
    document.getElementById('statOrbits').innerText = orbitCount;
  }

  requestAnimationFrame(animateSolarSystem);
}

// ============================================================
// CANVAS CLICK
// ============================================================
canvas.addEventListener('click', e => {
  const cx = w / 2, cy = h / 2;
  planets.forEach((p, idx) => {
    const x = cx + p.orbit * Math.cos(p.angle);
    const y = cy + p.orbit * Math.sin(p.angle);
    if (Math.sqrt((e.clientX - x) ** 2 + (e.clientY - y) ** 2) < p.r + 18) {
      spawnParticles(x, y, p.glowColor + '0.85)');
      openModal(idx);
    }
  });
});

// ============================================================
// MODAL
// ============================================================
function focusPlanet(idx) { openModal(idx); }

function openModal(idx) {
  const p = planets[idx];
  document.getElementById('modalName').innerText = p.name.toUpperCase();
  document.getElementById('modalType').innerText = p.type;
  document.getElementById('modalRank').innerText = 'RANK #' + p.rank;
  document.getElementById('modalBadge').innerText = p.type.charAt(0).toUpperCase();
  document.getElementById('modalDesc').innerText = p.desc;
  document.getElementById('modalNotable').innerText = p.notable || '';

  const mg = document.getElementById('modalPlanetGlow');
  mg.style.background = 'radial-gradient(ellipse, ' + p.glowColor + '0.28) 0%, transparent 68%)';

  // Stats grid
  const grid = document.getElementById('modalStats');
  grid.innerHTML = '';
  Object.entries(p.stats).forEach(([k, v]) => {
    grid.innerHTML += '<div class="modal-stat-item"><div class="modal-stat-key">' + k + '</div><div class="modal-stat-val">' + v + '</div></div>';
  });

  // Comparative bars
  const barsEl = document.getElementById('modalBars');
  barsEl.innerHTML = '<div class="modal-desc-title" style="margin-bottom:12px">&#9642; COMPARATIVE METRICS</div>';
  Object.entries(p.bars).forEach(([label, pct]) => {
    barsEl.innerHTML +=
      '<div class="modal-bar-row">' +
        '<div class="modal-bar-label">' + label + '</div>' +
        '<div class="modal-bar-track"><div class="modal-bar-fill" style="width:0%" data-w="' + pct + '"></div></div>' +
        '<div class="modal-bar-val">' + pct + '/100</div>' +
      '</div>';
  });
  setTimeout(() => {
    document.querySelectorAll('.modal-bar-fill').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 80);

  // Moons
  const moonsEl = document.getElementById('modalMoons');
  moonsEl.innerHTML = '';
  if (p.moons.length > 0) {
    moonsEl.innerHTML = '<div class="modal-desc-title" style="margin-top:16px;margin-bottom:10px">&#9670; NOTABLE MOONS</div>';
    p.moons.forEach(m => { moonsEl.innerHTML += '<span class="moon-badge">' + m + '</span> '; });
  }

  // Spinning planet preview in modal
  const dc = document.getElementById('planetDetailCanvas');
  const dctx = dc.getContext('2d');
  let rot = 0, modalOn = true;
  if (dc._stop) dc._stop();
  dc._stop = () => { modalOn = false; };

  function drawMP() {
    if (!modalOn) return;
    dctx.clearRect(0, 0, 260, 260);
    const cx2 = 130, cy2 = 130, r = 88;

    // Outer glow layers
    for (let gi = 3; gi >= 1; gi--) {
      const gg = dctx.createRadialGradient(cx2, cy2, r*0.5, cx2, cy2, r*1.5*gi/1.5);
      gg.addColorStop(0, p.glowColor + (0.18/gi) + ')');
      gg.addColorStop(1, 'transparent');
      dctx.beginPath();
      dctx.arc(cx2, cy2, r*1.5*gi/1.5, 0, Math.PI*2);
      dctx.fillStyle = gg;
      dctx.fill();
    }

    // Saturn ring back
    if (p.ring) {
      dctx.save(); dctx.translate(cx2, cy2);
      dctx.beginPath();
      dctx.ellipse(0, 0, r*2.2, r*0.52, 0.18, Math.PI, Math.PI*2);
      const rb2 = dctx.createLinearGradient(-r*2.2, 0, r*2.2, 0);
      rb2.addColorStop(0, 'rgba(200,180,120,0)');
      rb2.addColorStop(0.3, 'rgba(240,220,160,0.62)');
      rb2.addColorStop(0.7, 'rgba(240,220,160,0.62)');
      rb2.addColorStop(1, 'rgba(200,180,120,0)');
      dctx.strokeStyle = rb2; dctx.lineWidth = r*0.32; dctx.stroke();
      dctx.restore();
    }

    // Sphere
    dctx.beginPath(); dctx.arc(cx2, cy2, r, 0, Math.PI*2);
    const pg2 = dctx.createRadialGradient(cx2-r*0.38, cy2-r*0.38, r*0.04, cx2+r*0.1, cy2+r*0.1, r*1.15);
    pg2.addColorStop(0, p.gradient[0]);
    pg2.addColorStop(0.45, p.gradient[1]);
    pg2.addColorStop(1, p.gradient[2]);
    dctx.fillStyle = pg2; dctx.fill();

    // Bands in modal
    if (p.bands) {
      dctx.save(); dctx.beginPath(); dctx.arc(cx2, cy2, r, 0, Math.PI*2); dctx.clip();
      const bc = p.name === 'Jupiter' ? 12 : 8;
      for (let b = 0; b < bc; b++) {
        const by2 = cy2 - r + (b/bc)*r*2;
        dctx.fillStyle = b%2===0 ? 'rgba(80,40,10,0.15)' : 'rgba(200,150,80,0.15)';
        dctx.fillRect(cx2-r, by2, r*2, r*2/bc);
      }
      if (p.name === 'Jupiter') {
        dctx.beginPath();
        dctx.ellipse(cx2+r*0.2, cy2+r*0.15, r*0.38, r*0.22, rot*0.1, 0, Math.PI*2);
        dctx.fillStyle = 'rgba(180,60,20,0.52)'; dctx.fill();
        dctx.beginPath();
        dctx.ellipse(cx2+r*0.2, cy2+r*0.15, r*0.26, r*0.14, rot*0.1, 0, Math.PI*2);
        dctx.fillStyle = 'rgba(220,100,40,0.42)'; dctx.fill();
      }
      dctx.restore();
    }

    // Earth in modal
    if (p.name === 'Earth') {
      dctx.save(); dctx.beginPath(); dctx.arc(cx2, cy2, r, 0, Math.PI*2); dctx.clip();
      dctx.fillStyle = 'rgba(60,140,60,0.5)';
      dctx.beginPath(); dctx.ellipse(cx2-r*0.1, cy2-r*0.2, r*0.34, r*0.28, 0.5+rot*0.01, 0, Math.PI*2); dctx.fill();
      dctx.beginPath(); dctx.ellipse(cx2+r*0.28, cy2-r*0.08, r*0.24, r*0.35, -0.3, 0, Math.PI*2); dctx.fill();
      dctx.beginPath(); dctx.ellipse(cx2-r*0.32, cy2+r*0.28, r*0.3, r*0.2, 0.8, 0, Math.PI*2); dctx.fill();
      dctx.fillStyle = 'rgba(240,240,250,0.3)';
      dctx.beginPath(); dctx.ellipse(cx2, cy2-r*0.73, r*0.55, r*0.15, 0, 0, Math.PI*2); dctx.fill();
      dctx.restore();
    }

    // Specular highlight
    dctx.beginPath(); dctx.arc(cx2-r*0.32, cy2-r*0.32, r*0.28, 0, Math.PI*2);
    const sp2 = dctx.createRadialGradient(cx2-r*0.32, cy2-r*0.32, 0, cx2-r*0.32, cy2-r*0.32, r*0.28);
    sp2.addColorStop(0, 'rgba(255,255,255,0.52)');
    sp2.addColorStop(1, 'transparent');
    dctx.fillStyle = sp2; dctx.fill();

    // Atmo rim
    dctx.beginPath(); dctx.arc(cx2, cy2, r+1, 0, Math.PI*2);
    dctx.strokeStyle = p.glowColor + '0.42)'; dctx.lineWidth = 3.5;
    dctx.shadowColor = p.glowColor + '0.5)';
    dctx.shadowBlur = 10;
    dctx.stroke(); dctx.shadowBlur = 0;

    // Saturn ring front in modal
    if (p.ring) {
      dctx.save(); dctx.translate(cx2, cy2);
      dctx.beginPath();
      dctx.ellipse(0, 0, r*2.2, r*0.52, 0.18, 0, Math.PI);
      const rf2 = dctx.createLinearGradient(-r*2.2, 0, r*2.2, 0);
      rf2.addColorStop(0, 'rgba(200,180,120,0)');
      rf2.addColorStop(0.3, 'rgba(240,220,160,0.72)');
      rf2.addColorStop(0.7, 'rgba(240,220,160,0.72)');
      rf2.addColorStop(1, 'rgba(200,180,120,0)');
      dctx.strokeStyle = rf2; dctx.lineWidth = r*0.32; dctx.stroke();
      dctx.restore();
    }

    rot += 0.018;
    requestAnimationFrame(drawMP);
  }
  drawMP();

  document.getElementById('planetModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('planetModal').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('open');
  const dc = document.getElementById('planetDetailCanvas');
  if (dc._stop) dc._stop();
}

// ============================================================
// TOGGLES
// ============================================================
function toggleOrbits()    { showOrbits    = !showOrbits;    document.getElementById('btnOrbits').classList.toggle('active', showOrbits); }
function toggleLabels()    { showLabels    = !showLabels;    document.getElementById('btnLabels').classList.toggle('active', showLabels); }
function toggleTrails()    { showTrails    = !showTrails;    if(!showTrails) planets.forEach(p=>p.trail=[]); document.getElementById('btnTrails').classList.toggle('active', showTrails); }
function toggleAsteroids() { showAsteroids = !showAsteroids; document.getElementById('btnAsteroids').classList.toggle('active', showAsteroids); }
function toggleGlow()      { showGlow      = !showGlow;      document.getElementById('btnGlow').classList.toggle('active', showGlow); }

// ============================================================
// QUOTES ENGINE
// ============================================================
function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
  filteredQuotes = cat === 'all' ? [...quotes] : quotes.filter(q => q.cat === cat);
  qIndex = 0; resetProgress();
}

function animateQuote() {
  progressVal = 0;
  clearInterval(progressInterval);
  document.getElementById('progressBar').style.width = '0%';
  progressInterval = setInterval(() => {
    progressVal += (100 / 50);
    document.getElementById('progressBar').style.width = progressVal + '%';
    document.getElementById('progressGlow').style.left = progressVal + '%';
    if (progressVal >= 100) {
      clearInterval(progressInterval);
      qIndex = (qIndex + 1) % filteredQuotes.length;
      animateQuote();
    }
  }, 100);
  updateQuote();
}

function updateQuote() {
  const el    = document.getElementById('quoteText');
  const au    = document.getElementById('quoteAuthor');
  const badge = document.getElementById('quoteCatBadge');
  el.classList.add('fade-out');
  setTimeout(() => {
    const q = filteredQuotes[qIndex];
    el.innerText = q.text;
    au.innerText = q.author !== 'Unknown' ? '\u2014 ' + q.author : '';
    badge.innerText = q.cat.toUpperCase();
    el.classList.remove('fade-out');
    el.classList.add('fade-in');
    setTimeout(() => el.classList.remove('fade-in'), 400);
  }, 200);
}

function nextQuote()   { qIndex = (qIndex + 1) % filteredQuotes.length; resetProgress(); }
function prevQuote()   { qIndex = (qIndex - 1 + filteredQuotes.length) % filteredQuotes.length; resetProgress(); }
function randomQuote() { qIndex = Math.floor(Math.random() * filteredQuotes.length); resetProgress(); }

function resetProgress() {
  clearInterval(progressInterval);
  progressVal = 0;
  document.getElementById('progressBar').style.width = '0%';
  animateQuote();
}

function setTheme(theme) {
  let bg;
  if (theme === 'day')         { bg = 'linear-gradient(to bottom, #87ceeb 0%, #ffb347 100%)'; }
  else if (theme === 'sunset') { bg = 'linear-gradient(to bottom, #ffb347 0%, #1e3c72 100%)'; }
  else                         { bg = 'linear-gradient(to bottom, #1e3c72 0%, #0d1b2a 100%)'; }
  document.body.style.background = bg;
  localStorage.setItem('theme', theme);
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === theme));
}

function setSpeed(s) {
  speedMultiplier = s;
  document.querySelectorAll('.btn-speed').forEach(b => b.classList.toggle('active', parseFloat(b.innerText) === s));
}

// ============================================================
// BOOT
// ============================================================
animateSolarSystem();
animateQuote();
updateQuote();