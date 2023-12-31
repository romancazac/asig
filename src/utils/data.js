export const dataCountries = [
  { value: "csi", label: "CSI" },
  { value: "europa", label: "Europa" },
  { value: "toata lumea", label: "Toata Lumea" },
  { value: "ucraina", label: "Ucraina" },
  { value: "moldova", label: "Moldova" },
  { value: "romania", label: "Romania" },
  { value: "turcia", label: "Turcia" },
  { value: "egipt", label: "Egipt" },
  { value: "Albania", label: "Albania" },

];
export const dataDays = [
  { value: "5", label: "5" },
  { value: "7", label: "7" },
  { value: "10", label: "10" },
  { value: "15", label: "15" },
  { value: "20", label: "20" },
  { value: "25", label: "25" },
  { value: "40", label: "40" },
  { value: "60", label: "60" },
  { value: "90", label: "90" },
  { value: "120", label: "120" },
  { value: "160", label: "160" },
  { value: "365", label: "365" },

];
export const dataMonth = [
  { value: "15", label: "15 Zile" },
  { value: "30", label: "1 Luna" },
  { value: "60", label: "2 Luni" },
  { value: "90", label: "3 Luni" },
  { value: "120", label: "4 Luni" },
  { value: "150", label: "5 Luni" },
  { value: "180", label: "6 Luni" },
  { value: "210", label: "7 Luni" },
  { value: "240", label: "8 Luni" },
  { value: "270", label: "9 Luni" },
  { value: "300", label: "10 Luni" },
  { value: "330", label: "11 Luni" },
  { value: "360", label: "12 Luni" }

];
export const dataScope = [
  { value: "turism", label: "Turism" },
  { value: "turism (incl. sport de agrement)", label: "Turism (incl. sport de agrement)" },
  { value: "ski", label: "Ski" },
  { value: "afaceri", label: "Afaceri" },
  { value: "studii", label: "Studii" },
  { value: "muncă fizica", label: "Muncă fizică" },


];

export const dataContrysGreenCard = [
  { value: 0.14, name: "Ucraina" },
  { value: 2.3, name: "Toate țările sistemului „CarteVerde” (UE)" }
]
export const dataCompany = [
  {
    name: "Donaris",
    price: "0.2",
    options: [
      {
        name: "Asistență medicală de urgență",
        include: true
      },
      {
        name: "Costul medicamentelor prescrise",
        include: true
      },
      {
        name: "Cheltuieli de transport",
        include: true
      },
      {
        name: "Tratament stomatologic de urgență (200 EUR)",
        include: true
      },
      {
        name: "Complicații ale sarcinii",
        include: true
      },
      {
        name: "Repatriere medicală și postmortem",
        include: true
      },
      {
        name: "Cheltuieli legate de anularea călătoriei",
        include: false
      },
    ]


  },
  {
    name: "Transelit",
    price: "0.24",
    options: [
      {
        name: "Asistență medicală de urgență",
        include: true
      },
      {
        name: "Costul medicamentelor prescrise",
        include: true
      },
      {
        name: "Cheltuieli de transport",
        include: true
      },
      {
        name: "Tratament stomatologic de urgență (150 USD)",
        include: true
      },
      {
        name: "Repatriere medicală și postmortem",
        include: true
      },
      {
        name: "Complicații ale sarcinii",
        include: false
      },
      {
        name: "Cheltuieli legate de anularea călătoriei",
        include: false
      },
    ]


  },
  {
    name: "Intact",
    price: "0.30",
    options: [
      {
        name: "Asistență medicală de urgență",
        include: true
      },
      {
        name: "Costul medicamentelor prescrise",
        include: true
      },
      {
        name: "Cheltuieli de transport",
        include: true
      },
      {
        name: "Repatriere medicală și postmortem",
        include: true
      },
      {
        name: "Tratament stomatologic de urgență",
        include: false
      },

      {
        name: "Complicații ale sarcinii",
        include: false
      },
      {
        name: "Cheltuieli legate de anularea călătoriei",
        include: false
      },
    ]


  },
  {
    name: "General",
    price: "0.30",
    options: [
      {
        name: "Asistență medicală de urgență",
        include: true
      },
      {
        name: "Costul medicamentelor prescrise",
        include: true
      },
      {
        name: "Cheltuieli de transport",
        include: true
      },
      {
        name: "Repatriere medicală și postmortem",
        include: true
      },
      {
        name: "Tratament stomatologic de urgență (150 EUR)",
        include: true
      },

      {
        name: "Complicații ale sarcinii (500 EUR)",
        include: true
      },
      {
        name: "Cheltuieli legate de anularea călătoriei",
        include: false
      },
    ]


  },

]

export const dataFactori = [
  { value: 0.10, label: " Prezența bolilor cronice" },
  { value: 0.15, label: " Condiții nocive de muncă" }

]
export const dataImobile = [
  { value: "rooms", label: "Încăpere (apartament, oficiu)" },
  { value: "building", label: "Construcţie (casă, clădire)" },
  { value: "terrain", label: "Teren" }

]
export const dataBase = [
  { value: "VL", label: "Valoarea de înlocuire" },
  { value: "VP", label: "Valoare de piață" },

]
export const dataBenefice = [
  { value: "micb", label: "BC Moldindconbank S.A." },
  { value: "maib", label: "BC Agroindbank S.A." },
  { value: "victoria", label: "BC Victoriabank S.A." },
  { value: "other", label: "Altul" },

]
export const dataAsk = [
  {

    "id":0,
    "title": "Asigurarea comandată online este valabilă instant?",
    "body":"Da. Toate tipurile de asigurări care sunt comandate și achitate online sunt emise imediat în regim automat."
  },
   {

    "id":1,
    "title": "Care sunt metodele disponibile de achitare?",
    "body":"Orice comandă poate fi achitată online cu cardul bancar sau la terminale de plată, ghișeu bancar sau la poștă prin intermediul mPay."
  },
   {

    "id":2,
    "title": "Asigurarea comandată online este valabilă instant?",
    "body":"Da. Toate tipurile de asigurări care sunt comandate și achitate online sunt emise imediat în regim automat."
  },
   {

    "id":3,
    "title": "Cum primesc asigurarea?",
    "body":"Asigurarea o puteți descarca de pe site imediat dupa ce ați efectuat plata sau o primiţi in format PDF pe adresa de email indicată.."
  },
   {

    "id":4,
    "title": "Este valabilă asigurarea în format electronic?",
    "body":"Da. Asigurările în format electronic sunt valide și legale. Valabilitatea RCA și Carte Verde poate fi verificată pe rca.bnm.md Polița și contractul de asigurare sunt semnate electronic, valabilitatea semnăturii poate fi verificată pe msign.gov.md"
  },
  
]