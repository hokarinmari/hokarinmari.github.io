import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hokarinmari | Human', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Hokarinmari's landing page", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello I'm not",
  name: 'Hokarinmari',
  subtitle: "I'am not a Unity Developer",
  cta: "OK, I don't care!",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "My name is Hokarinmari and I'm Unity developer.",
  paragraphTwo: "I'm 18 yrs old and live in Burma.",
  paragraphThree: 'Currently learning 3D modelling and I like to play CSGO.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  /* {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  }, */
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'example@example.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://facebook.com/kyaw.z.soe.96592',
    },
    /*    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, 
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hokarinmari',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
