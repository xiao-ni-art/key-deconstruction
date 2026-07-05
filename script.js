const root = document.documentElement;

const stepData = [
  {
    kicker: "Step 01",
    title: "日常物件：钥匙",
    body: "从手柄、匙身、牙花、挂孔、材料与开锁动作进入观察，保留它作为“入口”的核心身份。",
    tags: ["携带", "开门", "识别", "安全"],
    turn: 0,
    shift: 0
  },
  {
    kicker: "Step 02",
    title: "解构分析：拆开结构与制造逻辑",
    body: "把钥匙拆成封构件、工程材料、常用材料、3D 打印、注塑、电镀、CNC 与批量生产线索。",
    tags: ["牙花", "匙身", "挂孔", "ABS / PLA / TPU"],
    turn: 8,
    shift: 22
  },
  {
    kicker: "Step 03",
    title: "意义发散：从开门到开启知识",
    body: "让“打开”脱离物理门锁，转向权限、入口、记忆、边界、信任与知识启蒙。",
    tags: ["入口", "权限", "记忆", "知识的大门"],
    turn: 28,
    shift: 44
  },
  {
    kicker: "Step 04",
    title: "功能转译：把动作变成体验",
    body: "旋转、插入、匹配、点亮、发声、拼插，都可以转译为用户与产品之间的互动机制。",
    tags: ["触摸", "声音", "反馈", "仪式感"],
    turn: 56,
    shift: 72
  },
  {
    kicker: "Step 05",
    title: "产品生成：进入新的产品系统",
    body: "输出面向 3D 打印的创意产品方向：知识钥匙、沙滩开启套装、记忆门禁挂件。",
    tags: ["教育产品", "沙滩玩具", "随身挂件", "体验设计"],
    turn: 86,
    shift: 96
  }
];

const domainData = [
  {
    kicker: "Domain 01",
    title: "结构域：手柄、匙身、牙花、挂孔",
    body: "钥匙的轮廓不是装饰，它决定握持、识别、携带和插入动作。结构拆开后可以转译成模块、轨道、拼插和游戏关卡。",
    chips: ["手柄", "匙身", "牙花", "挂孔", "模块"]
  },
  {
    kicker: "Domain 02",
    title: "材料域：金属、ABS、ASA、PA6、PLA、PETG、TPU",
    body: "材料决定重量、温度、弹性和加工方式。柔性材料可以带来护套与握持，硬质材料适合结构和模具。",
    chips: ["金属", "PLA", "PETG", "TPU", "工程塑料"]
  },
  {
    kicker: "Domain 03",
    title: "工艺域：3D 打印、注塑、机加工、电镀",
    body: "制作工艺从“钥匙怎样被制造”延伸到“新产品怎样被生产”。3D 打印适合快速验证与个性化定制。",
    chips: ["FDM", "SLA", "CNC", "注塑", "表面处理"]
  },
  {
    kicker: "Domain 04",
    title: "功能域：打开、锁定、识别、携带、防丢",
    body: "功能不只等于用途，也包含用户动作的反馈。每一次插入、旋转和匹配，都可以成为互动设计。",
    chips: ["打开", "识别", "匹配", "防丢", "反馈"]
  },
  {
    kicker: "Domain 05",
    title: "情绪域：安全感、拥有感、仪式感",
    body: "钥匙随身携带，和人的记忆、地点与归属感有关。它可以成为情绪挂件，也可以成为学习仪式的触发器。",
    chips: ["安全感", "归属", "陪伴", "记忆", "仪式"]
  },
  {
    kicker: "Domain 06",
    title: "象征域：边界、权限、入口、未来",
    body: "钥匙象征一个人能否进入某个空间。解域后，它可以指向知识入口、数字身份和新的社会关系。",
    chips: ["边界", "权限", "入口", "信任", "未来"]
  },
  {
    kicker: "Domain 07",
    title: "用户域：儿童、学习者、收藏者、场景使用者",
    body: "不同人群会把钥匙理解成不同的东西。儿童看到的是游戏，学习者看到的是知识入口，收藏者看到的是记忆载体。",
    chips: ["儿童", "学习者", "收藏者", "亲子", "课程展示"]
  }
];

const unlockData = [
  {
    title: "阶段 1：识别原物",
    body: "拖动滑杆，让钥匙从“物”逐步转向“知识入口”。",
    turn: 0,
    color: "#d8aa4c"
  },
  {
    title: "阶段 2：拆出结构",
    body: "手柄、匙身、牙花、挂孔被拆成可重组的模块语言。",
    turn: 18,
    color: "#fff6cc"
  },
  {
    title: "阶段 3：打开象征",
    body: "打开不再只是开门，也可以是进入知识、权限和记忆的入口。",
    turn: 42,
    color: "#55e2d8"
  },
  {
    title: "阶段 4：设计体验",
    body: "把插入、旋转、点亮、发声变成完整的用户体验。",
    turn: 68,
    color: "#a8ff68"
  },
  {
    title: "阶段 5：生成产品",
    body: "最终形成知识钥匙、沙滩开启套装和记忆门禁挂件三个方向。",
    turn: 92,
    color: "#ff6a57"
  }
];

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function renderTags(containerId, tags) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join("");
}

function setStep(index) {
  const data = stepData[index];
  if (!data) return;

  document.querySelectorAll(".step-button").forEach((button, buttonIndex) => {
    const active = buttonIndex === index;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });

  setText("stepKicker", data.kicker);
  setText("stepTitle", data.title);
  setText("stepBody", data.body);
  renderTags("stepTags", data.tags);
  root.style.setProperty("--lab-turn", `${data.turn}deg`);
  root.style.setProperty("--step-shift", data.shift);
}

function setDomain(index) {
  const data = domainData[index];
  if (!data) return;

  document.querySelectorAll(".domain-node").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
  });

  setText("domainKicker", data.kicker);
  setText("domainTitle", data.title);
  setText("domainBody", data.body);
  renderTags("domainChips", data.chips);
}

function setUnlock(index) {
  const data = unlockData[index];
  if (!data) return;

  setText("unlockTitle", data.title);
  setText("unlockBody", data.body);
  root.style.setProperty("--unlock-turn", `${data.turn}deg`);
  const key = document.querySelector(".turn-key");
  if (key) key.style.fill = data.color;
}

document.querySelectorAll(".step-button").forEach((button) => {
  button.addEventListener("click", () => setStep(Number(button.dataset.step)));
});

document.querySelectorAll(".domain-node").forEach((button) => {
  button.addEventListener("click", () => setDomain(Number(button.dataset.domain)));
  button.addEventListener("mouseenter", () => setDomain(Number(button.dataset.domain)));
});

const unlockRange = document.getElementById("unlockRange");
if (unlockRange) {
  unlockRange.addEventListener("input", (event) => setUnlock(Number(event.target.value)));
}

const progressBar = document.querySelector(".scroll-meter span");
function updateScrollProgress() {
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

window.addEventListener(
  "pointermove",
  (event) => {
    const offsetX = (event.clientX / window.innerWidth - 0.5) * 18;
    const offsetY = (event.clientY / window.innerHeight - 0.5) * 18;
    document.querySelectorAll("[data-depth]").forEach((node) => {
      node.style.setProperty("--mx", `${offsetX}px`);
      node.style.setProperty("--my", `${offsetY}px`);
    });
  },
  { passive: true }
);

function startCircuitCanvas() {
  const canvas = document.getElementById("circuitCanvas");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const palette = ["rgba(168, 255, 104, 0.62)", "rgba(85, 226, 216, 0.52)", "rgba(216, 170, 76, 0.45)"];
  let points = [];
  let width = 0;
  let height = 0;
  let ratio = 1;

  function resize() {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const count = Math.min(88, Math.max(34, Math.floor(width / 18)));
    points = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: palette[index % palette.length],
      phase: Math.random() * Math.PI * 2
    }));
  }

  function draw(time) {
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);

    points.forEach((point) => {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < -20) point.x = width + 20;
      if (point.x > width + 20) point.x = -20;
      if (point.y < -20) point.y = height + 20;
      if (point.y > height + 20) point.y = -20;
    });

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const first = points[i];
        const second = points[j];
        const distance = Math.hypot(first.x - second.x, first.y - second.y);
        if (distance < 132) {
          context.strokeStyle = `rgba(255, 246, 204, ${0.13 * (1 - distance / 132)})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(second.x, second.y);
          context.stroke();
        }
      }
    }

    points.forEach((point) => {
      const pulse = 1.8 + Math.sin(time * 0.002 + point.phase) * 1.1;
      context.fillStyle = point.color;
      context.fillRect(point.x - pulse / 2, point.y - pulse / 2, pulse, pulse);
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(draw);
}

setStep(0);
setDomain(0);
setUnlock(0);
updateScrollProgress();
startCircuitCanvas();
