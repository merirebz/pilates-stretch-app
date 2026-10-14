
const $ = id => document.getElementById(id);
const A = (n, v, d) => `<animate attributeName="${n}" values="${v}" dur="${d || 3}s" repeatCount="indefinite"/>`;
const L = (a, b, c, d, x) => `<line x1="${a}" y1="${b}" x2="${c}" y2="${d}">${x || ""}</line>`;
const H = (x, y, r, an) => `<circle cx="${x}" cy="${y}" r="${r || 9}">${an || ""}</circle>`;


const M = {
    bridge: {
        n: "Glute Bridge", a: "Core", t: "Glutes · Core · Spine", sec: 45, s: ["Lie on your back, knees bent, feet hip-width.", "Exhale and roll your spine up, one bone at a time.", "Pause at the top, squeeze your glutes.", "Inhale and roll down slowly."],
        svg: H(40, 140) + L(52, 146, 120, 146, A("y2", "146;104;146")) + L(120, 146, 165, 110, A("y1", "146;104;146") + A("x2", "165;172;165") + A("y2", "110;102;110")) + L(165, 110, 175, 146, A("x1", "165;172;165") + A("y1", "110;102;110")) + L(52, 146, 100, 148)
    },
    catcow: {
        n: "Cat–Cow", a: "Back", t: "Spine mobility · Back relief", sec: 45, s: ["Start on hands and knees, wrists under shoulders.", "Exhale: round your back, tuck chin and tailbone.", "Inhale: lift chest and tailbone, let the belly drop.", "Move slowly with your breath."],
        svg: H(66, 100, 9, A("cy", "112;86;112", 4)) + `<path d="M85 100 Q127 70 170 100">${A("d", "M85 100 Q127 70 170 100;M85 100 Q127 125 170 100;M85 100 Q127 70 170 100", 4)}</path>` + L(85, 100, 82, 146) + L(170, 100, 172, 146) + L(172, 146, 215, 146)
    },
    spine: {
        n: "Spine Stretch Forward", a: "Legs", t: "Hamstrings · Lower back", sec: 40, s: ["Sit tall, legs straight and slightly apart.", "Inhale, lengthen up through the crown of your head.", "Exhale, curl forward reaching past your toes.", "Stack your spine back up, bone by bone."],
        svg: L(100, 146, 210, 146) + L(100, 146, 100, 92, A("x2", "100;150;100", 4) + A("y2", "92;118;92", 4)) + H(100, 76, 9, A("cx", "100;164;100", 4) + A("cy", "76;110;76", 4)) + L(100, 92, 150, 92, A("x1", "100;150;100", 4) + A("y1", "92;118;92", 4) + A("x2", "150;205;150", 4) + A("y2", "92;128;92", 4))
    },
    hundred: {
        n: "The Hundred", a: "Core", t: "Core endurance", sec: 50, s: ["Lie on your back, lift head and shoulders.", "Extend legs to about 45° (bend knees if needed).", "Pump arms small and fast by your sides.", "Inhale for 5 pumps, exhale for 5 pumps."],
        svg: H(36, 126) + L(50, 140, 110, 146) + L(110, 146, 185, 100) + L(50, 140, 100, 140, A("y2", "138;150;138", 0.5))
    },
    leg: {
        n: "Supine Leg Stretch", a: "Legs", t: "Hamstrings · Hips", sec: 60, s: ["Lie on your back, one leg extended on the floor.", "Lift the other leg toward the ceiling.", "Hold behind the calf and gently draw it closer.", "Keep hips level and breathe. Switch sides halfway."],
        svg: H(40, 140) + L(52, 146, 120, 146) + L(120, 146, 200, 146) + L(120, 146, 125, 78, A("x2", "125;108;125", 4) + A("y2", "78;80;78", 4)) + L(52, 146, 123, 105, A("x2", "123;113;123", 4) + A("y2", "105;106;105", 4))
    },
    child: {
        n: "Child's Pose", a: "Back", t: "Back · Shoulders · Relax", sec: 45, s: ["Kneel and sit your hips back toward your heels.", "Fold forward, reaching your arms long in front.", "Rest your forehead down and soften your shoulders.", "Breathe into your back with slow breaths."],
        svg: L(110, 146, 195, 146) + L(110, 146, 170, 130) + L(170, 130, 165, 90, A("x2", "165;100;165", 5) + A("y2", "90;126;90", 5)) + H(165, 74, 9, A("cx", "165;86;165", 5) + A("cy", "74;128;74", 5)) + L(165, 90, 165, 120, A("x1", "165;100;165", 5) + A("y1", "90;126;90", 5) + A("x2", "165;50;165", 5) + A("y2", "120;146;120", 5))
    },
    side: {
        n: "Standing Side Stretch", a: "Upper", t: "Waist · Ribs · Shoulders", sec: 40, s: ["Stand tall, feet hip-width, one arm reaching up.", "Inhale and grow taller through your fingertips.", "Exhale and bend sideways, keeping hips square.", "Return to centre and switch sides."],
        svg: L(150, 110, 132, 150) + L(150, 110, 168, 150) + L(150, 110, 150, 60, A("x2", "150;188;150", 4) + A("y2", "60;66;60", 4)) + H(150, 44, 9, A("cx", "150;194;150", 4) + A("cy", "44;52;44", 4)) + L(150, 60, 150, 14, A("x1", "150;188;150", 4) + A("y1", "60;66;60", 4) + A("x2", "150;218;150", 4) + A("y2", "14;34;14", 4))
    },
    neck: {
        n: "Neck & Shoulder Release", a: "Upper", t: "Neck · Shoulders · Desk relief", sec: 40, s: ["Sit tall, shoulders relaxed away from your ears.", "Slowly tilt your ear toward one shoulder.", "Hold, breathing softly, then tilt to the other side.", "Finish with 3 slow shoulder rolls backward."],
        svg: L(150, 150, 150, 88) + L(122, 90, 178, 90, A("y1", "90;86;90;94;90", 5) + A("y2", "90;94;90;86;90", 5)) + H(150, 68, 9, A("cx", "150;136;150;164;150", 5) + A("cy", "68;72;68;72;68", 5))
    },
    cobra: {
        n: "Cobra Stretch", a: "Back", t: "Chest · Spine · Abs", sec: 40, s: ["Lie face down, hands under your shoulders.", "Press gently through your hands and lift your chest.", "Keep hips on the floor and shoulders away from ears.", "Lower slowly and rest."],
        svg: L(50, 146, 130, 146) + L(130, 146, 190, 146, A("x2", "190;178;190", 4) + A("y2", "146;108;146", 4)) + H(204, 140, 9, A("cx", "204;190;204", 4) + A("cy", "140;92;140", 4)) + L(188, 146, 190, 148, A("x1", "190;178;190", 4) + A("y1", "146;108;146", 4))
    },
    circles: {
        n: "Single Leg Circles", a: "Core", t: "Core stability · Hip mobility", sec: 50, s: ["Lie on your back, one leg extended up to the ceiling.", "Keep your pelvis still and the other leg long on the floor.", "Draw 5 slow circles in one direction.", "Reverse the direction, then switch legs."],
        svg: H(40, 140) + L(52, 146, 120, 146) + L(120, 146, 200, 146) + L(120, 146, 125, 78, A("x2", "125;145;125;105;125", 4) + A("y2", "78;86;78;86;78", 4)) + L(52, 146, 100, 148)
    },
    rollup: {
        n: "Roll Up", a: "Core", t: "Abs · Spine articulation", sec: 50, s: ["Lie flat, legs long, arms reaching overhead.", "Inhale, lift arms; exhale, curl head and chest up.", "Roll through your spine and reach over your toes.", "Roll back down slowly, one vertebra at a time."],
        svg: L(110, 146, 210, 146) + L(110, 146, 50, 146, A("x2", "50;105;155;105;50", 5) + A("y2", "146;94;120;94;146", 5)) + H(36, 142, 9, A("cx", "36;105;165;105;36", 5) + A("cy", "142;76;112;76;142", 5)) + L(50, 146, 95, 140, A("x1", "50;105;155;105;50", 5) + A("y1", "146;94;120;94;146", 5) + A("x2", "95;140;210;140;95", 5) + A("y2", "140;96;130;96;140", 5))
    },
    swim: {
        n: "Swimming", a: "Back", t: "Back extensors · Glutes", sec: 40, s: ["Lie face down, arms and legs long.", "Lift arms, legs and chest slightly off the floor.", "Flutter opposite arm and leg in small, quick beats.", "Keep your neck long and breathe steadily."],
        svg: L(60, 146, 180, 146) + H(198, 136) + L(180, 146, 228, 146, A("y2", "146;128;146", 1)) + L(60, 146, 14, 146, A("y2", "130;146;130", 1))
    },
    fig4: {
        n: "Figure-4 Hip Stretch", a: "Legs", t: "Hips · Glutes · Piriformis", sec: 60, s: ["Lie on your back, knees bent, feet on the floor.", "Cross one ankle over the opposite knee.", "Draw the supporting thigh gently toward your chest.", "Hold and breathe. Switch sides halfway."],
        svg: H(40, 140) + L(52, 146, 120, 146) + L(120, 146, 165, 100, A("x2", "165;158;165", 4) + A("y2", "100;92;100", 4)) + L(165, 100, 190, 146) + L(120, 146, 138, 92, A("x2", "138;128;138", 4) + A("y2", "92;86;92", 4)) + L(138, 92, 165, 100, A("x1", "138;128;138", 4) + A("y1", "92;86;92", 4))
    },
    rolldown: {
        n: "Standing Roll-Down", a: "Back", t: "Spine · Hamstrings · Posture", sec: 45, s: ["Stand tall, feet hip-width, arms relaxed.", "Tuck your chin and slowly roll down, vertebra by vertebra.", "Let your head and arms hang heavy, knees soft.", "Stack back up slowly, head last."],
        svg: L(150, 150, 150, 100) + L(150, 100, 150, 50, A("x2", "150;185;185;150", 6) + A("y2", "50;125;125;50", 6)) + H(150, 34, 9, A("cx", "150;196;196;150", 6) + A("cy", "34;136;136;34", 6)) + L(150, 50, 150, 95, A("x1", "150;185;185;150", 6) + A("y1", "50;125;125;50", 6) + A("x2", "150;190;190;150", 6) + A("y2", "95;148;148;95", 6))
    },
    lunge: {
        n: "Hip Flexor Lunge", a: "Legs", t: "Hip flexors · Quads", sec: 60, s: ["Kneel on one knee, other foot flat in front.", "Tuck your tailbone and stack your torso upright.", "Shift your hips gently forward until you feel a stretch.", "Hold, breathe, then switch sides."],
        svg: L(140, 100, 95, 146, A("x1", "140;152;140", 4)) + L(95, 146, 55, 146) + L(140, 100, 185, 106, A("x1", "140;152;140", 4)) + L(185, 106, 190, 146) + L(140, 100, 140, 50, A("x1", "140;152;140", 4) + A("x2", "140;152;140", 4)) + H(140, 34, 9, A("cx", "140;152;140", 4))
    },
    twist: {
        n: "Seated Spinal Twist", a: "Back", t: "Spine rotation · Detox the back", sec: 45, s: ["Sit tall, legs crossed or extended.", "Inhale and lengthen your spine.", "Exhale and rotate from your ribs, not your neck.", "Return to centre and twist to the other side."],
        svg: L(150, 146, 110, 150) + L(150, 146, 190, 150) + L(150, 146, 150, 88) + H(150, 70) + L(122, 92, 178, 92, A("x1", "122;138;122;116;122", 6) + A("x2", "178;162;178;184;178", 6))
    },
    butterfly: {
        n: "Butterfly Stretch", a: "Legs", t: "Inner thighs · Hips", sec: 45, s: ["Sit tall with the soles of your feet together.", "Hold your feet and let your knees fall open.", "Keep your spine long, gently flutter your knees.", "Hinge forward slightly to deepen the stretch."],
        svg: L(150, 140, 150, 85) + H(150, 68) + L(150, 140, 100, 118, A("y2", "118;142;118", 1.5)) + L(100, 118, 140, 148, A("y1", "118;142;118", 1.5)) + L(150, 140, 200, 118, A("y2", "118;142;118", 1.5)) + L(200, 118, 160, 148, A("y1", "118;142;118", 1.5))
    },
    knees: {
        n: "Knees to Chest", a: "Back", t: "Lower back release", sec: 40, s: ["Lie on your back with your legs extended.", "Draw both knees toward your chest.", "Hug your shins and let your lower back soften.", "Rock gently side to side, breathing slowly."],
        svg: H(40, 140) + L(52, 146, 120, 146) + L(120, 146, 165, 110, A("x2", "165;130;165", 4) + A("y2", "110;88;110", 4)) + L(165, 110, 175, 146, A("x1", "165;130;165", 4) + A("y1", "110;88;110", 4) + A("x2", "175;150;175", 4) + A("y2", "146;110;146", 4)) + L(52, 146, 150, 112, A("x2", "150;125;150", 4) + A("y2", "112;94;112", 4))
    },
    ball: {
        n: "Rolling Like a Ball", a: "Core", t: "Core control · Spine massage", sec: 40, s: ["Sit balanced on your tailbone, hugging your shins.", "Tuck your chin and round your back into a ball.", "Inhale and roll back to your shoulder blades.", "Exhale and roll up to balance, no feet touching."],
        svg: `<g><path d="M120 118a30 30 0 1 0 60 0a30 30 0 1 0-60 0"/>${H(136, 100)}<animateTransform attributeName="transform" type="rotate" values="0 150 150;-40 150 150;0 150 150;25 150 150;0 150 150" dur="3s" repeatCount="indefinite"/></g>`
    }
};

const R = [
    { n: "Morning wake-up", e: "🌅", ids: ["catcow", "child", "spine", "cobra"] },
    { n: "Core strength", e: "🔥", ids: ["bridge", "hundred", "circles", "rollup", "ball"] },
    { n: "Hips & legs", e: "🦵", ids: ["fig4", "butterfly", "lunge", "leg", "spine"] },
    { n: "Back relief", e: "🪷", ids: ["knees", "catcow", "twist", "cobra", "rolldown", "child"] },
    { n: "Desk relief", e: "💻", ids: ["neck", "side", "twist", "catcow", "child"] },
    { n: "Evening unwind", e: "🌙", ids: ["child", "knees", "leg", "butterfly"] },
    { n: "Full body flow", e: "✨", ids: ["rolldown", "catcow", "swim", "rollup", "bridge", "lunge", "fig4", "twist", "child"] },
    { n: "Quick 2-min reset", e: "⚡", ids: ["catcow", "side"] }
];
const AREAS = ["All", "★ Favorites", "Core", "Back", "Legs", "Upper"];

/* ===== helpers & storage ===== */
const ds = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
const ld = (k, d) => { try { const x = localStorage.getItem(k); return x ? JSON.parse(x) : d } catch (e) { return d } };
const sv = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) { } };
let log = ld("flow.log", []), fav = ld("flow.fav", []), voice = ld("flow.voice", false);
const say = t => { try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.rate = .95; speechSynthesis.speak(u) } catch (e) { } };
const fig = (m, extra) => `<svg class="f" viewBox="0 0 300 170" role="img" aria-label="${m.n} demo"><g class="fig"><line class="fl" x1="10" y1="154" x2="290" y2="154"/>${m.svg}</g></svg>`;
const rmin = r => Math.round(r.ids.reduce((a, i) => a + M[i].sec, 0) / 60);
const todayMin = () => log.filter(x => x.d === ds(new Date())).reduce((a, x) => a + x.m, 0);
function streak() { const s = new Set(log.map(x => x.d)); let c = 0, d = new Date(); if (!s.has(ds(d))) d.setDate(d.getDate() - 1); while (s.has(ds(d))) { c++; d.setDate(d.getDate() - 1) } return c }


let RS = R;
function home() {
    RS = fav.length > 1 ? [...R, { n: "My favorites", e: "💗", ids: fav }] : R;
    const t = todayMin();
    $("v-home").innerHTML = `<div class="row"><h1>Stretch <em>&amp; flow</em></h1><button class="sw" onclick="voice=!voice;sv('flow.voice',voice);home()">${voice ? "🔊 Voice on" : "🔈 Voice off"}</button></div>
 <p class="sub">Pilates stretches for your body, anywhere. No equipment, just a mat or a soft floor.</p>
 <div class="stats"><div class="stat"><b>${streak()}</b><span>day streak</span></div><div class="stat"><b>${log.reduce((a, x) => a + x.m, 0)}</b><span>minutes</span></div><div class="stat"><b>${log.length}</b><span>sessions</span></div></div>
 <div class="card"><div class="row"><b>Daily goal</b><span style="color:var(--muted);font-size:14px">${Math.min(t, 5)} / 5 min</span></div><div class="goal"><i style="width:${Math.min(100, t / 5 * 100)}%"></i></div><span style="color:var(--muted);font-size:13px">${t >= 5 ? "Goal reached! 🌸" : "Do one routine to reach today's goal."}</span></div>
 <h2 style="margin:18px 0 10px">Choose a routine</h2>
 ${RS.map((r, i) => `<div class="card rt"><div class="e">${r.e}</div><div class="i"><h3>${r.n}</h3><p>${rmin(r)} min · ${r.ids.length} moves</p></div><button class="btn sm" onclick="play(${i})">Start</button></div>`).join("")}`;
}


let area = "All";
function lib() {
    const list = Object.entries(M).filter(([id, m]) => area === "All" || (area === "★ Favorites" ? fav.includes(id) : m.a === area));
    $("v-moves").innerHTML = `<h1>Moves</h1><p class="sub">${Object.keys(M).length} movements. Watch, read the steps, then try. Tap ♥ to build your own routine.</p>
 <div class="chips">${AREAS.map(a => `<button class="chip ${a === area ? "on" : ""}" onclick="area='${a}';lib()">${a}</button>`).join("")}</div>
 ${list.length ? "" : '<p class="sub">No favorites yet. Tap ♥ on any move.</p>'}
 ${list.map(([id, m]) => `<div class="card mv">${fig(m)}<button class="heart" aria-label="Favorite" onclick="tf('${id}',this)">${fav.includes(id) ? "💗" : "🤍"}</button><span class="tag">${m.t}</span><h3>${m.n}</h3><ol>${m.s.map(x => "<li>" + x + "</li>").join("")}</ol><button class="btn ghost sm" onclick="pp(this)">Pause</button></div>`).join("")}`;
}
function tf(id, b) { fav = fav.includes(id) ? fav.filter(x => x !== id) : [...fav, id]; sv("flow.fav", fav); if (area === "★ Favorites") lib(); else b.textContent = fav.includes(id) ? "💗" : "🤍" }
function pp(b) { const s = b.closest(".mv").querySelector("svg"); if (b.textContent === "Pause") { s.pauseAnimations(); b.textContent = "Play" } else { s.unpauseAnimations(); b.textContent = "Pause" } }


function prog() {
    const days = []; for (let i = 6; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); const k = ds(d); days.push({ l: d.toLocaleDateString("en", { weekday: "short" }).slice(0, 2), m: log.filter(x => x.d === k).reduce((a, x) => a + x.m, 0) }) }
    const mx = Math.max(5, ...days.map(d => d.m)), s = streak();
    $("v-prog").innerHTML = `<h1>Progress</h1><p class="sub">Your last 7 days of practice (minutes).</p><div class="card"><div class="bars">${days.map(d => `<div class="bar"><i style="height:${d.m / mx * 85}%"></i>${d.l}</div>`).join("")}</div></div>
 <div class="card">${s ? `🔥 ${s}-day streak. Keep going, even 2 minutes counts.` : "Start a routine today to begin your streak 🌸"}</div><button class="btn ghost sm" onclick="if(confirm('Reset all progress?')){log=[];sv('flow.log',log);prog()}">Reset progress</button>`;
}


const draw = { home, moves: lib, prog };
document.querySelectorAll("nav button").forEach(b => b.onclick = () => {
    document.querySelectorAll("nav button").forEach(x => x.classList.toggle("on", x === b));
    document.querySelectorAll(".view").forEach(v => v.classList.toggle("on", v.id === "v-" + b.dataset.v));
    draw[b.dataset.v](); window.scrollTo(0, 0)
});

let cur, idx, left, paused, iv, elapsed;
function play(i) { cur = RS[i]; idx = 0; elapsed = 0; $("player").classList.add("on"); load(); clearInterval(iv); iv = setInterval(tick, 1000) }
function load() {
    const m = M[cur.ids[idx]]; left = m.sec; paused = false;
    if (voice) say(m.n + ". " + m.s[0]);
    $("pin").innerHTML = `<div class="top"><button onclick="closeP()" aria-label="Close">✕</button><span>${cur.n} · ${idx + 1}/${cur.ids.length}</span><span style="width:22px"></span></div><div class="pb"><i style="width:${idx / cur.ids.length * 100}%"></i></div>${fig(m)}<h2>${m.n}</h2><div class="sub" style="margin:2px 0 6px">${m.t}</div>
 <div class="ring"><svg width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="var(--accent2)" stroke-width="8"/><circle id="arc" cx="60" cy="60" r="52" fill="none" stroke="var(--accent)" stroke-width="8" stroke-linecap="round" stroke-dasharray="326.7" stroke-dashoffset="0"/></svg><div class="t" id="sec">${left}</div></div>
 <ol>${m.s.map(x => "<li>" + x + "</li>").join("")}</ol><div class="ctl"><button class="btn ghost sm" onclick="step(-1)">‹ Prev</button><button class="btn sm" id="pz" onclick="pause()">Pause</button><button class="btn ghost sm" onclick="step(1)">Next ›</button></div>`;
}
function tick() {
    if (paused) return; const m = M[cur.ids[idx]]; left--; elapsed++;
    if (voice && left === Math.floor(m.sec / 2)) say("Keep breathing, nice and slow.");
    if (left <= 0) { step(1); return }
    $("sec").textContent = left; $("arc").style.strokeDashoffset = 326.7 * (1 - left / m.sec);
}
function step(d) { const n = idx + d; if (n < 0) return; if (n >= cur.ids.length) { finish(); return } idx = n; load() }
function pause() { paused = !paused; const s = document.querySelector("#pin svg.f"); paused ? s.pauseAnimations() : s.unpauseAnimations(); $("pz").textContent = paused ? "Resume" : "Pause" }
function finish() {
    clearInterval(iv); const m = Math.max(1, Math.round(elapsed / 60)); log.push({ d: ds(new Date()), m }); sv("flow.log", log);
    if (voice) say("Well done. Session complete.");
    $("pin").innerHTML = `<div style="padding-top:80px"><div style="font-size:60px">🎉</div><h1>Well <em>done!</em></h1><p class="sub">${cur.n} complete · +${m} min</p><p class="sub">🔥 ${streak()}-day streak</p><button class="btn" onclick="closeP()">Done</button></div>`;
}
function closeP() { clearInterval(iv); try { speechSynthesis.cancel() } catch (e) { } $("player").classList.remove("on"); home() }

home();