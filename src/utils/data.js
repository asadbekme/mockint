// * Directions Cards
const directionsCards = [
  {
    id: 0,
    title: "ANGULAR",
    names: ["UMAR SADULLAEV"],
    src: "../images/angular-icon.svg",
    description:
      "Ushbu yo'nalish Angular freymvorkiga bag'ishlangan. Angularning o'zini so'ralishi bilan bir qatorda, biroz TypeScript va RxJS kutubxonalaridan ham savollar darajaga qarab so'raladi.",
  },
  {
    id: 1,
    title: "REACT.JS",
    names: ["AZIZBEK JONIBEKOV", "MUHAMMADRASUL NURMUKHAMEDOV", "OTABEK RIZAKULOV"],
    src: "../images/react-icon.svg",
    description:
      "Ushbu yo'nalish React.js kutubxonasiga bag'ishlangan. Kandidat darajasiga qarab React.js ga aloqador mavzular so'raladi. Biladiganlar uchun Redux haqida savollar bo'lishi ham mumkin.",
  },
  {
    id: 2,
    title: "JAVA",
    names: ["YUSUF MURODOV"],
    src: "../images/java-icon.svg",
    description:
      "Bu yo'nalishda Java tilining asosiy mavzulari, Spring freymvorki, Database va OOP, SOLID kabi mavzulardan savollarni kutishingiz mumkin.",
  },
  {
    id: 3,
    title: "NODE.JS",
    names: ["MABRUR KHAYITBOEV"],
    src: "../images/nodejs-icon.svg",
    description:
      "Ushbu yo'nalishimiz Node.js backend yo'nalishi bo'lib, Node.js o'zi, Express(yoki Nest.js) va Mongo(yoki Postgres) texnologiyalari tanlov asosida so'raladi.",
  },
  {
    id: 4,
    title: "PYTHON",
    names: ["BOBOSHER MUSURMONOV"],
    src: "../images/python-icon.svg",
    description:
      "Ushbu bo'lim Python backend yo'nalishi bo'lib, Python Core, Django Framework va PostreSQL kabi texnologiyalardan savollar bo'ladi.",
  },
  {
    id: 5,
    title: "ANDROID",
    names: ["AXRORXO'JA YODGOROV"],
    src: "../images/android-icon.svg",
    description:
      "Ushbu yo'nalish Android dasturchilari uchun hisoblanadi va Java, Kotlin, Android kabi texnologiyalardan savollar bo'ladi.",
  },
  {
    id: 6,
    title: "UMUMIY FRONTEND",
    names: ["AZIZBEK JONIBEKOV", "UMAR SADULLAEV"],
    src: "../images/javascript-icon.svg",
    description:
      "Ushbu yo'nalish toza Frontend yo'nalishi. Hech qanday freymvorklarsiz. HTML, CSS, JS va shularga va umumiy Frontendga doir darajaga qarab chuqur savollar bo'ladi.",
  },
  {
    id: 7,
    title: "VUE.JS",
    names: ["MIRJALOL NORQULOV"],
    src: "../images/vue-icon.svg",
    description:
      "Ushbu yo'nalish Vue.js dasturchilari uchun mo'ljallangan. Yo'nalishda VueJs, VueRouter, NuxtJS, Vuex va shu kabi texnologiyalardan savollar bo'lishini kutishingiz mumkin.",
  },
  {
    id: 8,
    title: "PRODUCT/UX/UI DESIGN",
    names: ["BOBUR MAVLONOV"],
    src: "../images/design-icon.svg",
    description:
      "Ushbu yo'nalish Product/UX/UI dizaynerlari uchun mo'ljallangan. Yo'nalishga topshirishda intervyu uchun avval qilgan ishlaringizdan namuna kerak bo'ladi.",
  },
  {
    id: 9,
    title: ".NET",
    names: ["Mukhammadkarim Tukhtaboev"],
    src: "../images/dotnet.svg",
    description:
      "Bu yo'nalish .NET bo'lib, bunda .NET, ASP.NET, Patterns, SQL databases, RabbitMQ, Testing, Docker kabi texnologiya va mavzulardan savollar bo'ladi.",
  },
];
  
// * About Cards
const aboutCards = [
  {
    id: 0,
    src: "./images/about-card-1.png",
    text: `DASTURCHILARNI TEXNIK BILIM DARAJASINI HOLIS BAHOLASH`,
  },
  {
    id: 1,
    src: "./images/about-card-2.png",
    text: `INTERVYU NATIJASIGA QARAB NOMZODGA KERAKLI FEEDBACK'LAR BERISH`,
  },
  {
    id: 2,
    src: "./images/about-card-3.png",
    text: `O'ZBEKISTONDA INTERVYULAR O'TKAZISH ORQALI DASTURCHILAR SAVIYASINI OSHIRISH`,
  },
  {
    id: 3,
    src: "./images/about-card-4.png",
    text: `INTERVYU OLUVCHI MUTAXASSISLAR SONINI OSHIRISH`,
  },
];

// * Specialists Cards
const specialistsCards = [
  {
    id: 0,
    src: "../images/umar.png",
    url: "https://www.linkedin.com/in/joshdeveloper/",
    stacks: ["Angular", "Frontend"],
    name: "Umar Sadullayev",
    job: "Frontend Engineer",
    experience: "2.5 yil+",
    level: "Junior - Middle",
    socialSrc: "./images/linkedin-icon.svg",
  },
  {
    id: 1,
    src: "../images/mabrur.jpg",
    url: "https://www.linkedin.com/in/mabrurdev/",
    stacks: ["NodeJS", "Backend"],
    name: "Mabrur Khayitboev",
    job: "Software Engineer",
    experience: "3 yil+",
    level: "Junior - Middle",
    socialSrc: "./images/linkedin-icon.svg",
  },
  {
    id: 2,
    src: "../images/bobosher.jpg",
    url: "https://linkedin.com/in/bobosher-musurmonov",
    stacks: ["Python", "Backend"],
    name: "Bobosher Musurmonov",
    job: "Software engineer",
    experience: "2 yil+",
    level: "Junior - Middle",
    socialSrc: "./images/linkedin-icon.svg",
  },
  {
    id: 3,
    src: "../images/mirjalol.jpg",
    url: "https://www.linkedin.com/in/mirjalolnorkulov/",
    stacks: ["Vue JS", "Frontend"],
    name: "Mirjalol Norqulov",
    job: "Frontend Engineer",
    experience: "3 yil+",
    level: "Junior - Middle",
    socialSrc: "./images/linkedin-icon.svg",
  },
  {
    id: 4,
    src: "../images/axrorxoja.jpg",
    url: "https://www.linkedin.com/in/axrorxoja-yodgorov",
    stacks: ["Mobile", "Android"],
    name: "Axrorxo'ja Yodgorov",
    job: "Lead Android Engineer",
    experience: "7 yil+",
    level: "Junior - Senior",
    socialSrc: "./images/linkedin-icon.svg",
  },
  {
    id: 5,
    src: "../images/muhammadrasul.jpg",
    url: "https://www.linkedin.com/in/nurmukhamedov/",
    stacks: ["React", "Frontend"],
    name: "Muhammadrasul Nurmukhamedov",
    job: "Frontend Engineer",
    experience: "2 yil+",
    level: "Junior - Middle",
    socialSrc: "./images/linkedin-icon.svg",
  },
  {
    id: 6,
    src: "../images/azizbek.jpg",
    url: "https://www.linkedin.com/in/jonybekov/",
    stacks: ["React", "Frontend"],
    name: "Azizbek Jonibekov",
    job: "Frontend Engineer",
    experience: "4 yil+",
    level: "Junior - Middle",
    socialSrc: "./images/linkedin-icon.svg",
  },
  {
    id: 7,
    src: "../images/yusuf.jpg",
    url: "https://www.linkedin.com/in/yusuf-murodov/",
    stacks: ["Java", "Backend"],
    name: "Yusuf Murodov",
    job: "Software Engineer",
    experience: "1.5 yil+",
    level: "Junior - Middle",
    socialSrc: "./images/linkedin-icon.svg",
  },
  {
    id: 8,
    src: "../images/otabek.jpg",
    url: "https://www.linkedin.com/in/otabek-rizakulov/",
    stacks: ["ReactJS", "Frontend"],
    name: "Otabek",
    job: "Frontend Engineer",
    experience: "3 yil+",
    level: "Junior - Middle",
    socialSrc: "./images/linkedin-icon.svg",
  },
  {
    id: 9,
    src: "../images/bobur.jpg",
    url: "https://www.linkedin.com/in/boburjon/",
    stacks: ["Product Design", "UX/UI Design"],
    name: "Bobur Mavlonov",
    job: "Product designer",
    experience: "1.5 yil+",
    level: "Junior - Middle",
    socialSrc: "./images/linkedin-icon.svg",
  },
  {
    id: 10,
    src: "../images/muhammadkarim.jpg",
    url: "https://www.linkedin.com/in/mukhammadkarim-tukhtaboev",
    stacks: ["Backend", ".NET"],
    name: "Mukhammadkarim Tukhtaboev",
    job: "Senior Software Engineer",
    experience: "6 yil+",
    level: "Junior - Middle - Senior",
    socialSrc: "./images/linkedin-icon.svg",
  },
];
  
// * Interview Cards
const interviewCards = [
  {
    id: 0,
    title: "YO'NALISH TANLANG",
    description: "O'Z YO'NALISHINGIZNI TANLANG VA SAYTDAGI 'FAQ' BO'LIMI BILAN ALOHIDA TANISHING"
  },
  {
    id: 1,
    title: "ADMINSTRATORGA BOG'LANING ",
    description: "SHARTLAR BILAN TANISHGANINGIZDAN SO'NG ADMINGA BOG'LANING VA SUHBATNI REJALASHTIRING"
  },
  {
    id: 2,
    title: "INTERVYU JARAYONI",
    description: "MUTAXASSIS SIZ BILAN DARAJANGIZGA QARAB 1-2 SOAT ATROFIDA SUHBAT OLIB BORADI"
  },
  {
    id: 3,
    title: "INTERVYU NATIJASI",
    description: "SUHBATDAN SO'NG MUTAXASSIS SIZGA 3 KUN ICHIDA FEEDBACK BERADI VA DARAJANGIZ ANIQLANADI"
  },
];

// * Interview Prices
const interviewPrices = [
  {
    id: 0,
    position: "JUNIOR",
    price: "199 000 SO'M"
  },
  {
    id: 1,
    position: "MIDDLE",
    price: "299 000 SO'M"
  },
  {
    id: 3,
    position: "SENIOR",
    price: "399 000 SO'M"
  },  
];
  
// * Accordion Items
const accordionItems = [
  {
    id: 0,
    header: `KIMLAR TOPSHIRA OLMAYDI?`,
    description: `Junior yo'nalishiga dasturlashga kirganiga 6 oydan kam bo'lganlar, Middle yo'nalishga dasturlashdagi tajribasi 6 oydan kam bo'lganlar, Seniorga esa dasturlashdagi tajribasi 2 yil bo'lmaganlar topshira olmaydi.`
  },
  {
    id: 1,
    header: `INTERVYU NECHI SOAT DAVOM ETADI?`,
    description: `Intervyu intervyu oluvchi mutaxassisning xohishiga qarab, shuningdek yo'nalishni qanchalik keng va tor ekanligiga qarab, 1 soatdan 2 soatgacha bo'lgan vaqt oraliqida davom etadi.`
  },
  {
    id: 2,
    header: `FAQAT NAZARIY BO'LADIMI YOKI AMALIY BIROR VAZIFA HAM BERILADIMI?`,
    description: `Intervyular nafaqat nazariy, balki amaliy vazifalar bilan ham boyitilishi mumkin. Bu yo'nalishingiz va mutaxassis xohishiga bog'liq. Ammo katta ehtimol bilan amaliy topshiriq ham berilishini kutishingiz mumkin.`
  },
  {
    id: 3,
    header: `QANDAY QILIB MUTAXASSISLAR SAFIGA QO'SHILSAM BO'LADI?`,
    description: `Ayni damda mutaxassislar tajribali dasturchilar bo'lishi talab qilinadi. Agar tajribangizga ishonsangiz, MockInt orqali o'z yo'nalishingizdagi intervyudan 85%+ natijaga erishishingiz lozim. So'ngra adminga xohishingizni resume bilan birgalikda bildirasiz. Biz taklifingizni o'ylab ko'ramiz.`
  },
  {
    id: 4,
    header: `INTERVYU VAQTIDA KANDIDAT BA'ZI SABABLARGA KO'RA CHIQIB KETIB QOLSA NIMA BO'LADI, QAYTADAN BO'LADIMI?`,
    description: `Intervyu jarayonida internet, elektr energiyasi o'chishi yoki umuman boshqa sabablar bilan kandidat intervyudan chiqib ketsa, shu safargi to'lov uchun intervyu qayta o'tkazilmaydi. Bunga sabab intervyuver boshqa vaqtlariga boshqa kandidatlar yozilgan va ayni damda sizga ajratilgan vaqtida siz tomondan muommo sabab intervyu bo'lmay qolsa, ayb intervyuverda bo'lmaydi. To'lov ham qaytarib berilmaydi. Shu sabab texnik muommolarni oldini oling.`
  },
  {
    id: 5,
    header: `INTERVYUVER MA'LUM SABABLARGA KO'RA INTERVYUGA KIRMASA NIMA BO'LADI?`,
    description: `Agar intervyu oluvchi mutaxassis ma'lum sabablarga ko'ra intervyuga kira olmasa, yoki intervyuni tugatmasdan chiqib ketsa, intervyu qaytadan boshqa sanada bo'ladi yoki to'lov summasi qaytarib beriladi.`
  },
  {
    id: 6,
    header: `INTERVYU BELGILANGANDAN SO'NG, QAYTA VAQTINI O'ZGARTIRISH MUMKINMI?`,
    description: `Kandidat kelishilgan intervyu sanasini o'zgartirishi bizga moddiy zarar bo'lgani sabab, jiddiy sabablarga ko'ra faqatgina kamida 1 hafta oldin vaqtini o'zgartira oladi. Shu orqali moddiy zararni ham oldini olamiz. Intervyuver esa xohlagan vaqtda intervyu sanasiga yangi taklif bera oladi(Kandidat xohishiga ko'ra).`
  },
  {
    id: 7,
    header: `FEEDBACK'DA NIMALAR BO'LADI?`,
    description: `Feedback'da quyida sanab o'tgan qismlar bo'ladi: Kandidat haqida umumiy fikrlar, olgan natijasi, xato va kamchiliklari va ularga maslahatlar va manbalar.`
  },
  {
    id: 8,
    header: `INTERVYULAR YOZIB OLINADIMI?`,
    description: `INTERVYULAR YOZIB OLINISH OLINMASLIGI MUTAXASSIS O'Z XOHISHI. KANDIDAT SO'RASHGA HAQLI, MUTAXASSIS ROZI BO'LSA YOZIB OLINADI. BA'ZI INTERVYULAR MOCKINT.UZ TOMONIDAN YOUTUBE'GA HAM JOYLANIB TURISHI MUMKIN.`
  },
];

const partnersItems = [
  {
    id: 0,
    src: "../images/robocode-logo.svg",
    title: "Robocode"
  },
  {
    id: 1,
    src: "../images/webbrain-academy-logo.svg",
    title: "Webbrain Academy"
  },
  {
    id: 2,
    src: "../images/mohirdev-logo.png",
    title: "Mohirdev"
  },
];
  
// * Export
export { directionsCards, specialistsCards, aboutCards, interviewCards, interviewPrices, accordionItems, partnersItems };
