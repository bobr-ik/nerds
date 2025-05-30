const BASE_URL = 'https://nerdspum.online/api'


async function fetchTeamData() {
  const response = await fetch(`${BASE_URL}/participants`);
  const data = await response.json();
  return data;
  
  return Promise.resolve([
    {
      img: 'profile01.png',
      name: 'Граф Бомбус Дэбчанский',
      telegram: '@Boberus',
      level: 1,
      levelProgress: 70,
      profileLink: 'profile/profile.html',
    },
    {
      img: 'profile02.png',
      name: 'Президент',
      telegram: '@LevBeregovoy',
      level: 99,
      levelProgress: 100,
      profileLink: 'profile.html',
    },
    {
      img: 'profile03.png',
      name: 'Дак Долька',
      telegram: '@dak_dolka',
      level: 2,
      levelProgress: 40,
      profileLink: 'profile.html',
    },
    {
      img: 'profile04.png',
      name: 'Днёк',
      telegram: '@OlegFedor0v',
      level: 3,
      levelProgress: 60,
      profileLink: 'profile.html',
    },
    {
      img: 'profile05.png',
      name: 'Алёксис',
      telegram: '@arm_et_tut',
      level: 228,
      levelProgress: 80,
      profileLink: 'profile.html',
    },
    {
      img: 'profile06.png',
      name: 'Артемида',
      telegram: '@markelovartemmai',
      level: 7,
      levelProgress: 77,
      profileLink: 'profile.html',
    },
    {
      img: 'profile07.png',
      name: 'Bombillius',
      telegram: '@Derivomy',
      level: 666,
      levelProgress: 66,
      profileLink: 'profile.html',
    },
    {
      img: 'profile08.png',
      name: 'АйДаТаЛяН',
      telegram: '@CooperYankel',
      level: 123,
      levelProgress: 73,
      profileLink: 'profile.html',
    },
  ]);
}

async function generateTeam() {
  const teamData = await fetchTeamData();
  const teamContainer = document.querySelector('#team');
  const memberCards = teamData.map(member => {
    return `
      <div class="member-card">
        <img src="${member.avatar}" alt="${member.name}" />
        <h3>${member.name}</h3>
        <p>${member.telegram}</p>
        <div class="level-indicator" title="Уровень ${member.level} — ${member.levelProgress}% до следующего уровня">
          <div class="level-label">Уровень ${member.level}</div>
          <div class="level-bar">
            <div class="level-fill" style="width: ${member.levelProgress}%;"></div>
          </div>
        </div>
        <a href="profile/profile.html?id=${member.id}">Профиль</a>
      </div>
    `;
  }).join('');

  teamContainer.innerHTML += memberCards;
}

async function fetchAwardsData() {
  const response = await fetch(`${BASE_URL}/badges`);
  const data = await response.json();
  return data;
  return Promise.resolve([
    {
      icon: 'fas fa-brain',
      title: 'Математик-решала',
      description: 'За выдающиеся успехи в решении олимпиадных задач по математике.',
    },
    {
      icon: 'fas fa-microscope',
      title: 'Физик-теоретик',
      description: 'За глубокое понимание и объяснение физических процессов.',
    },
    {
      icon: 'fas fa-code',
      title: 'Кодовый маг',
      description: 'За написание чистого и мощного кода.',
    },
  ]);
}

async function generateAwards() {
  const awardsData = await fetchAwardsData();
  const awardsSection = document.getElementById('awards');

  awardsData.forEach(award => {
    const awardDiv = document.createElement('div');
    awardDiv.classList.add('award');

    const title = document.createElement('h3');
    title.innerHTML = `<i class="${award.icon}"></i> ${award.title}`;

    const description = document.createElement('p');
    description.textContent = award.description;

    awardDiv.appendChild(title);
    awardDiv.appendChild(description);
    awardsSection.appendChild(awardDiv);
  });
}

// Инициализация
(async function init() {
  await generateTeam();
  await generateAwards();
})();





const toggleButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const barsIcon = toggleButton.querySelector('.fa-bars');
  const timesIcon = toggleButton.querySelector('.fa-times');

  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    barsIcon.style.display = barsIcon.style.display === 'none' ? 'inline' : 'none';
    timesIcon.style.display = timesIcon.style.display === 'none' ? 'inline' : 'none';
  });

let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 50) {
    header.classList.add('visible');
  } else if (window.scrollY < 50) {
    header.classList.remove('visible');
  }
  lastScrollY = window.scrollY;

  // Кнопка "Наверх"
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// Прокрутка наверх при клике
document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

