function switchLanguage(lang) {
    const translations = {
      en: {
        name: 'Santiago',
        job: 'IT Project Manager',
        greeting: 'Hi, my name is',
        contact: 'Contact me'
      },
      es: {
        name: 'Santiago',
        job: 'Gerente de Proyectos IT',
        greeting: 'Hola, mi nombre es',
        contact: 'Contáctame'
      },
      fr: {
        name: 'Santiago',
        job: 'Chef de projet IT',
        greeting: 'Bonjour, je m\'appelle',
        contact: 'Me contacter'
      },
      de: {
        name: 'Fuhrer',
        job: 'IT-Projektmanager',
        greeting: 'Hallo, mein Name ist',
        contact: 'Kontaktieren Sie mich'
      }
    };
  
    const section = document.getElementById('Accueil');
    const name = section.querySelector('.typed-text');
    const job = section.querySelector('.lead');
    const greeting = section.querySelector('.h1');
    const contact = section.querySelector('.btn');
    const canvas = document.getElementById('canvas');
  
    if (lang === 'de') {
      canvas.style.display = 'block';
    } else {
      canvas.style.display = 'none';
    }
  
    greeting.innerHTML = `${translations[lang].greeting} <span class="span ${name.className} typed-text">${translations[lang].name}</span><span class="cursor">&nbsp;</span>`;
    name.textContent = translations[lang].name;
    job.textContent = translations[lang].job;
    contact.textContent = translations[lang].contact;
  }
  