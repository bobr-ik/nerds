const teamData = [
  {
    img: 'profile01.png',
    name: 'Граф Бомбус Дэбчанский',
    telegram: '@Boberus',
    level: 1,
    progress: 70, // %
    profileLink: 'profile/profile.html',
  },
  {
    img: 'profile02.png',
    name: 'Президент',
    telegram: '@LevBeregovoy',
    level: 99,
    progress: 100,
    profileLink: 'profile.html',
  },
  {
    img: 'profile03.png',
    name: 'Дак Долька',
    telegram: '@dak_dolka',
    level: 2,
    progress: 40,
    profileLink: 'profile.html',
  },
  {
    img: 'profile04.png',
    name: 'Днёк',
    telegram: '@OlegFedor0v',
    level: 3,
    progress: 60,
    profileLink: 'profile.html',
  },
  {
    img: 'profile05.png',
    name: 'Алёксис',
    telegram: '@arm_et_tut',
    level: 228,
    progress: 80,
    profileLink: 'profile.html',
  },
  {
    img: 'profile06.png',
    name: 'Артемида',
    telegram: '@markelovartemmai',
    level: 7,
    progress: 77,
    profileLink: 'profile.html',
  },
  {
    img: 'profile07.png',
    name: 'Bombillius',
    telegram: '@Derivomy',
    level: 666,
    progress: 66,
    profileLink: 'profile.html',
  },
  {
    img: 'profile08.png',
    name: 'АйДаТаЛяН',
    telegram: '@CooperYankel',
    level: 123,
    progress: 73,
    profileLink: 'profile.html',
  },
  // Можно добавить сколько угодно человек
];

function generateTeam() {
  const teamContainer = document.querySelector('#team');
  const memberCards = teamData.map(member => {
    return `
        <div class="member-card">
          <img src="${member.img}" alt="${member.name}" />
          <h3>${member.name}</h3>
          <p>${member.telegram}</p>
          <div class="level-indicator" title="Уровень ${member.level} — ${member.progress}% до следующего уровня">
            <div class="level-label">Уровень ${member.level}</div>
            <div class="level-bar">
              <div class="level-fill" style="width: ${member.progress}%;"></div>
            </div>
          </div>
          <a href="${member.profileLink}">Профиль</a>
        </div>
      `;
  }).join('');

  // Вставляем все карточки в секцию #team
  teamContainer.innerHTML += memberCards;
}

generateTeam();


const awardsData = [
  {
    icon: 'fas fa-brain',
    title: 'Математик-решала',
    description: 'За выдающиеся успехи в решении олимпиадных задач по математике.'
  },
  {
    icon: 'fas fa-microscope',
    title: 'Физик-теоретик',
    description: 'За глубокое понимание и объяснение физических процессов.'
  },
  {
    icon: 'fas fa-code',
    title: 'Кодовый маг',
    description: 'За написание чистого и мощного кода.'
  }
  // Можно добавить больше наград сюда
];

// Контейнер для наград
const awardsSection = document.getElementById('awards');

// Добавляем каждую награду в DOM
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

