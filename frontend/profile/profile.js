// Эмуляция асинхронной загрузки профиля

const BASE_URL = "https://nerdspum.online/api";

async function fetchProfileData() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  response = await fetch(`${BASE_URL}/profile/${id}`);
  data = await response.json();
  console.log(data);
  return data;

  return Promise.resolve({
    name: "Граф Бомбус Дэбчанский",
    realName: "Авраменко Антон",
    joinDate: "31.05.2025",
    telegram: "Boberus",
    telegramLink: "https://t.me/Boberus",
    avatar: "profile01.png",
    idNumber: "01",
    idBinary: "1110",
    noAz: 228,
    level: 7,
    levelProgress: 65,
    badges: [
      { icon: "fas fa-brain", text: "Математик-решала" },
      { icon: "fas fa-code", text: "Кодовый маг" },
      { icon: "fas fa-user-secret", text: "Детектив NERDS" },
    ],
    bio: [
      "Граф Бомбус — сочетание точной логики и творческого подхода...",
      "Владеет глубокими знаниями в области математики, физики и программирования...",
      "Его подход — это баланс аналитики и креатива...",
    ],
    skills: [
      { icon: "fas fa-square-root-alt", name: "Математика", value: 1.0 },
      { icon: "fas fa-atom", name: "Физика", value: 9.5 },
      { icon: "fas fa-code", name: "Программирование", value: 10.0 },
      { icon: "fas fa-users-cog", name: "Командная работа", value: 9.8 },
    ],
    moodLevel: 5,
    energyLevel: 5
  });
}

// Вспомогательные функции
function getMoodColor(level) {
  const hue = Math.round((level / 10) * 120);
  return `hsl(${hue}, 80%, 50%)`;
}

function updateMoodIcon(level) {
  const moodIcon = document.querySelector('.mood-icon');
  if (level >= 7) {
    moodIcon.className = 'fas fa-smile-beam mood-icon';
  } else if (level >= 4) {
    moodIcon.className = 'fas fa-meh mood-icon';
  } else {
    moodIcon.className = 'fas fa-frown mood-icon';
  }
}

function updateMoodScale(level) {
  const moodBoxes = document.querySelectorAll('.mood-scale .mood-box');
  const moodScale = document.querySelector('.mood-scale');
  moodBoxes.forEach((box, idx) => {
    box.classList.toggle('filled', idx < level);
  });
  moodScale.style.setProperty('--mood-color', getMoodColor(level));
}

function getEnergyColor(level) {
  const hue = Math.round((level / 10) * 120);
  return `hsl(${hue}, 80%, 50%)`;
}

function renderEnergy(level) {
  const energyScale = document.querySelector('.energy-scale');
  energyScale.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const bolt = document.createElement('i');
    bolt.className = 'fas fa-bolt energy-bolt';
    bolt.style.color = i <= level ? getEnergyColor(level) : '#333';
    if (i <= level) bolt.classList.add('filled');
    energyScale.appendChild(bolt);
  }
}

// Главная функция обновления профиля
function updateProfile(profile) {
  document.querySelector("h1#name").textContent = profile.name;
  const img = document.querySelector("img");
  img.src = profile.avatar;
  img.alt = profile.name;
  document.getElementById("real_name").innerHTML = `<strong>Настоящее имя:</strong> ${profile.realName}`;
  document.getElementById("join_date").innerHTML = `<strong>Дата вступления:</strong> ${profile.joinDate}`;
  document.getElementById("telegram").innerHTML = `<strong>Telegram:</strong> <a href="${profile.telegramLink}">@${profile.telegram}</a>`;
  document.getElementById("number").innerHTML = `<strong>Порядковый номер:</strong> ${profile.idNumber} <span style="color:#888;">(${profile.idBinary})</span>`;
  document.getElementById("days_no_az").textContent = profile.noAz;

  document.getElementById("level-label").textContent = `Уровень ${profile.level}`;
  document.getElementById("level-fill").style.width = `${profile.levelProgress}%`;

  const badgesContainer = document.getElementById("badges");
  badgesContainer.innerHTML = "";
  profile.badges.forEach(badge => {
    const el = document.createElement("div");
    el.className = "badge neon";
    el.innerHTML = `<i class="${badge.icon}"></i><span>${badge.title}</span>`;
    badgesContainer.appendChild(el);
  });

  const bio = document.getElementById("bio");
  bio.innerHTML = "<h2><i class='fas fa-info-circle'></i> Досье участника</h2>";
  const p = document.createElement("p");
  p.className = "glow-text";
  p.textContent = profile.bio;
  bio.appendChild(p);

  const matrix = document.getElementById("matrix");
  matrix.querySelectorAll(".skill").forEach(s => s.remove());
  profile.skills.forEach(skill => {
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill";
    const percent = (skill.value / 10) * 100;
    skillDiv.innerHTML = `
      <i class="${skill.icon}"></i> ${skill.name}
      <span class="skill-value">${skill.value.toFixed(1)}</span>
      <div class="skill-bar"><div class="fill" style="width: ${percent}%"></div></div>
    `;
    matrix.appendChild(skillDiv);
  });

  updateMoodIcon(profile.moodLevel);
  updateMoodScale(profile.moodLevel);
  renderEnergy(profile.energyLevel);
}

// Инициализация
(async function initProfilePage() {
  const profileData = await fetchProfileData();
  updateProfile(profileData);
})();
