// * Navbar Items
const headerNavigationItems = [
  {
    id: 0,
    url: "#directions",
    text: "YO'NALISHLAR",
    isActive: true,
  },
  {
    id: 1,
    url: "#about",
    text: "LOYIHA HAQIDA",
    isActive: false,
  },
  {
    id: 2,
    url: "#specialists",
    text: "MUTAXASSISLAR",
    isActive: false,
  },
  {
    id: 3,
    url: "#interview",
    text: "INTERVYU",
    isActive: false,
  },
  {
    id: 4,
    url: "#FAQ",
    text: "FAQ",
    isActive: false,
  },
];
  
// * Footer Items
const footerSocialLinks = [
  {
    id: 0,
    url: "https://www.youtube.com/channel/UC8UZISuB71OaFuG6xGBNtCg",
    text: "YOUTUBE",
  },
  {
    id: 1,
    url: "https://www.linkedin.com/company/mockint-uz",
    text: "LINKEDIN",
  },
  {
    id: 2,
    url: "https://t.me/mockint",
    text: "TELEGRAM",
  },
];
  
// * Hero Info Items
const heroInfoItems = [
  {
    title: "YO'NALISHLAR:",
    subtitle: "8 TA (KO'PAYIB BORADI)",
  },
  {
    title: "MUTAXASSISLAR:",
    subtitle: "9 TA (KO'PAYIB BORADI)",
  },
  {
    title: "SUHBAT DAVOMIYLIGI:",
    subtitle: "1-2 SOAT",
  },
];
  
// * Modal Items
const modalTexts = {
  texts: [
    {
      id: 0,
      content: "Ism",
    },
    {
      id: 1,
      content: "Email",
    },
    {
      id: 2,
      content: "Intervyu yo'nalishi",
    },
    {
      id: 3,
      content: "Darajasi",
    },
    {
      id: 4,
      content: "Intervyu tili",
    },
    {
      id: 5,
      content: "Tajribangiz",
    },
  ],

  contactUrl: "https://t.me/MockIntAdmin",
};
  
const modalCardContent = `
  1. EMAIL - 
  2. INTERVYU YO'NALISHI - 
  3. INTERVYU DARAJASI - 
  4. INTERVYU TILI(Ingliz yoki O'zbek) -
  5. TAJRIBANGIZ(OY YOKI YILLARDA) -
`;
  
// * Export
export {
  headerNavigationItems,
  heroInfoItems,
  footerSocialLinks,
  modalTexts,
  modalCardContent,
};
  