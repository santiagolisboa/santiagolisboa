function switchLanguage(lang) {
    const translations = {
      en: {
        title: 'About Me & Contact Me',
        name: 'Santiago',
        job: 'IT Project Manager',
        greeting: 'Hi, my name is',
        contact: 'Contact me',
        // Second Section
        moi: 'Über mich'
      },
      es: {
        //Firs Section
        title: 'Acerca de mí y Contacto',
        name: 'Santiago',
        job: 'Gerente de Proyectos IT',
        greeting: 'Hola, mi nombre es',
        contact: 'Contáctame',
        // Second Section
        moi: 'Über mich'
      },
      fr: {


        title: 'À propos de moi & Me Contacter',
        name: 'Santiago',
        job: 'Chef de projet IT',
        greeting: 'Bonjour, je m\'appelle',
        contact: 'Me contacter'
      },
      de: {

        //Firs Section
        title: 'Über mich & Kontaktieren Sie mich',
        name: 'Fuhrer',
        job: 'IT-Projektmanager',
        greeting: 'Hallo, mein Name ist',
        contact: 'Kontaktieren Sie mich',
        // Second Section
        moi: 'Über mich'

      }
    };


    // First Section
    const section  = document.getElementById('Accueil');
    const title = section.querySelector('.display-4');
    const name = section.querySelector('.typed-text');
    const job = section.querySelector('.lead');
    const greeting = section.querySelector('.h1');
    const contact = section.querySelector('.btn');
    const canvas = document.getElementById('canvas');

  
    // Second Section
    const secondsection = document.getElementById('Moi');
    const moi = secondsection.querySelector('.a_propos');



    if (lang === 'de') {
      canvas.style.display = 'block';
    } else {
      canvas.style.display = 'none';
    }

    //First Section
    greeting.innerHTML = `${translations[lang].greeting} <span class="span ${name.className} typed-text">${translations[lang].name}</span><span class="cursor">&nbsp;</span>`;
    title.textContent = translations[lang].title;
    name.textContent = translations[lang].name;
    job.textContent = translations[lang].job;
    contact.textContent = translations[lang].contact;
    
    //Second Section
    moi.textContent = translations[lang].moi;

  }
  