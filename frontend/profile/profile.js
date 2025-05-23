const profileData = {
  name: "Граф Бомбус Дэбчанский",
  realName: "Авраменко Антон",
  joinDate: "31.05.2025",
  telegram: "Boberus",
  telegramLink: "https://t.me/Boberus",
  avatar: "profile01.png",
  idNumber: "01",
  idBinary: "1110",
  no_az: 228,
  level: 7,
  levelProgress: 65,
  badges: [
    {icon: "fas fa-brain", text: "Математик-решала"},
    {icon: "fas fa-code", text: "Кодовый маг"},
    {icon: "fas fa-user-secret", text: "Детектив NERDS"},
  ],
  bio: [
    "Граф Бомбус — сочетание точной логики и творческого подхода. Мастер алгоритмов и чисел, способный решать сложнейшие задачи и оптимизировать код для максимальной эффективности.",
    "Владеет глубокими знаниями в области математики, физики и программирования. Известен способностью видеть структуру там, где другие видят хаос. Активный участник разработки ядра NERDS CORE, вдохновляющий команду на новые достижения.",
    "Его подход — это баланс аналитики и креатива, дисциплины и свободы, что делает его незаменимым участником сообщества."
  ],
  skills: [
    {icon: "fas fa-square-root-alt", name: "Математика", value: 1.0},
    {icon: "fas fa-atom", name: "Физика", value: 9.5},
    {icon: "fas fa-code", name: "Программирование", value: 10.0},
    {icon: "fas fa-users-cog", name: "Командная работа", value: 9.8},
  ],
  moodLevel: 5,
  energyLevel: 5
};




const moodBoxes = document.querySelectorAll('.mood-scale .mood-box');
const moodIcon = document.querySelector('.mood-icon');
const moodScale = document.querySelector('.mood-scale');

function getMoodColor(level) {
  const hue = Math.round((level / 10) * 120);
  return `hsl(${hue}, 80%, 50%)`;
}

function updateMoodIcon(level) {
  if (level >= 7) {
    moodIcon.className = 'fas fa-smile-beam mood-icon';       // веселый
  } else if (level >= 4) {
    moodIcon.className = 'fas fa-meh mood-icon';              // нейтральный
  } else {
    moodIcon.className = 'fas fa-frown mood-icon';            // грустный
  }
}

function updateMoodScale(level) {
  moodBoxes.forEach((box, idx) => {
    if (idx < level) {
      box.classList.add('filled');
    } else {
      box.classList.remove('filled');
    }
  });
  moodScale.style.setProperty('--mood-color', getMoodColor(level));
}

// Обновляем интерфейс

const energyScale = document.querySelector('.energy-scale');

function getEnergyColor(level) {
  const hue = Math.round((level / 10) * 120); // от красного к зелёному
  return `hsl(${hue}, 80%, 50%)`;
}

function renderEnergy(level) {
  energyScale.innerHTML = '';
  for(let i = 1; i <= 10; i++) {
    const bolt = document.createElement('i');
    bolt.className = 'fas fa-bolt energy-bolt';
    if (i <= level) {
      bolt.classList.add('filled');
      bolt.style.color = getEnergyColor(level);
    } else {
      bolt.style.color = '#333'; // неактивные серые
    }
    energyScale.appendChild(bolt);
  }
}





function updateProfile(profile) {
  // Заголовок
  document.querySelector("h1#name").textContent = profile.name;
  document.querySelector("img").src = profile.avatar;
  document.querySelector("img").alt = profile.name;
  document.getElementById("real_name").innerHTML = `<strong>Настоящее имя:</strong> ${profile.realName}`;
  document.getElementById("join_date").innerHTML = `<strong>Дата вступления:</strong> ${profile.joinDate}`;
  document.getElementById("telegram").innerHTML = `<strong>Telegram:</strong> <a href="${profile.telegramLink}">@${profile.telegram}</a>`;
  document.getElementById("number").innerHTML = `<strong>Порядковый номер:</strong> ${profile.idNumber} <span style="color:#888;">(${profile.idBinary})</span>`;
  document.getElementById("days_no_az").innerHTML = profile.no_az

  // Уровень
  document.getElementById("level-label").textContent = `Уровень ${profile.level}`;
  document.getElementById("level-fill").style.width = `${profile.levelProgress}%`;

  // Бейджи
  const badgesContainer = document.getElementById("badges");
  badgesContainer.innerHTML = "";
  profile.badges.forEach(badge => {
    const el = document.createElement("div");
    el.className = "badge neon";
    el.innerHTML = `<i class="${badge.icon}"></i><span>${badge.text}</span>`;
    badgesContainer.appendChild(el);
  });

  // Биография
  const bio = document.getElementById("bio");
  profile.bio.forEach(text => {
    const p = document.createElement("p");
    p.className = "glow-text";
    p.textContent = text;
    bio.appendChild(p);
  });

  // Матрица знаний
  const matrix = document.getElementById("matrix");
  const skills = matrix.querySelectorAll(".skill");
  skills.forEach(s => s.remove());
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


  updateMoodIcon(profileData.moodLevel);
  updateMoodScale(profileData.moodLevel);
  renderEnergy(profileData.energyLevel);
}

updateProfile(profileData);

