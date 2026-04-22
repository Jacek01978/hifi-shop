// ─── AFFILIATE TAG ────────────────────────────────────────────────────────────
// Ersetze "DEIN-TAG-21" mit deinem echten Amazon PartnerNet-Tag
const TAG = 'DEIN-TAG-21'

const amazon = (query) =>
  `https://www.amazon.de/s?k=${encodeURIComponent(query)}&tag=${TAG}`

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
export const CATEGORIES = [
  { id: 'all',          label: 'Alle Produkte' },
  { id: 'kabel',        label: 'Kabel' },
  { id: 'sicherungen',  label: 'Sicherungen' },
  { id: 'absorber',     label: 'Absorber & Dämpfer' },
  { id: 'reinigung',    label: 'Reinigungsmittel' },
  { id: 'netzleisten',    label: 'Netzleisten' },
  { id: 'phasendetektor', label: 'Phasendetektor' },
]

export const KABEL_SUBCATEGORIES = [
  { id: 'all',          label: 'Alle Kabel' },
  { id: 'cinch',        label: 'Cinch / RCA' },
  { id: 'xlr',          label: 'XLR' },
  { id: 'netz',         label: 'Netzkabel' },
  { id: 'lautsprecher', label: 'Lautsprecherkabel' },
]

export const REINIGUNG_SUBCATEGORIES = [
  { id: 'all',      label: 'Alle Mittel' },
  { id: 'vinyl',    label: 'Vinyl & Nadel' },
  { id: 'reiniger', label: 'Reinigungsmittel' },
  { id: 'fluid',    label: 'Kontaktflüssigkeit' },
]

export const ACCENT = {
  kabel:        'text-gold border-gold',
  sicherungen:  'text-blue-400 border-blue-400',
  absorber:     'text-green-400 border-green-400',
  reinigung:    'text-pink-400 border-pink-400',
  netzleisten:    'text-violet-400 border-violet-400',
  phasendetektor: 'text-cyan-400 border-cyan-400',
}

export const ACCENT_BAR = {
  kabel:        'bg-gold',
  sicherungen:  'bg-blue-400',
  absorber:     'bg-green-400',
  reinigung:    'bg-pink-400',
  netzleisten:    'bg-violet-400',
  phasendetektor: 'bg-cyan-400',
}

export const PRODUCTS = [
  // ── KABEL ──
  {
    id: 1, cat: 'kabel', subcat: 'cinch', groupId: 'cinch',
    icon: '🔌',
    iconComponent: 'CinchCableIcon',
    name: 'Cinch-Stereo Audiokabel',
    desc: 'Hochreines OFC-Kupfer, doppelt geschirmt. Minimaler Signalverlust für maximale Klangtreue. Ideal für Verstärker, CD-Player und DAC-Verbindungen.',
    price: 'ab 29,–',
    href: amazon('cinch audiokabel ofc kupfer hifi'),
  },
  {
    id: 40, cat: 'kabel', subcat: 'xlr', groupId: 'xlr',
    icon: '🎧',
    iconComponent: 'XLRCableIcon',
    name: 'Audioquest Red River High End XLR 2m',
    desc: 'High-End XLR-Kabel von AudioQuest mit Solid Long-Grain Copper Innenleitern und Carbon-Abschirmung. Hervorragende Rauschunterdrückung und audiophile Klangqualität für anspruchsvolle Stereo-Setups.',
    price: 'ab 230,–',
    href: `https://www.amazon.de/AudioQuest-PR-Red-River-XLR-Schwarz/dp/B00HZQOWYW/ref=sr_1_6?crid=1SW1RY63MBG2P&dib=eyJ2IjoiMSJ9.dDEk8lq0u1u01ORQkai1Tqh8ZgKNpKr9qd3uE5QAoXmxl1KCxGqOiOILmUc1Ljr64-rM5FV2J4xLp3DTXJAWMtVR6odb8IdlVyG_q1YKFttHTJo87fxr_b4Kv0dyXBeM8PLHZUe_p4fCMJQqt7dXaWf478Z1pUl0kEi1z6shAmnP3AP4Uh7xGwHtl73wPHiQTks-UaUXAZDqzFOpJdINyNVv4_AJBzyNTUSSc6kz9m1_2ICUoHx2GZL7RmatjTO315_V4mqRRuQyurYLjGAl_0VMYfAxvtWS2WZlzYSb3BM.edxBteZ-KKJRW8KXpilwrLxm9WQrEfAwPpkKnnKH7p8&dib_tag=se&keywords=audioquest%2Bxlr%2Bkabel&qid=1776784137&sprefix=audioquest%2Bxlr%2Caps%2C127&sr=8-6&th=1&tag=${TAG}`,
  },
  {
    id: 39, cat: 'kabel', subcat: 'xlr', groupId: 'xlr',
    icon: '🎧',
    iconComponent: 'XLRCableIcon',
    name: 'Inakustik Premium Stereo Audiokabel XLR',
    desc: 'Hochwertiges symmetrisches XLR-Stereo-Audiokabel von Inakustik. OFC-Kupferleiter mit geflochtener Abschirmung und vergoldeten XLR-Steckern für störungsfreie, transparente Signalübertragung.',
    price: 'ab 50,–',
    href: `https://www.amazon.de/Akustik-Premium-Audio-Cable-00405007-Blau-Silber/dp/B00RTMB4SE/ref=sr_1_8?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=UOHIWW9F7U0&dib=eyJ2IjoiMSJ9.WkaGUxWztEnt0cG9oWhRddPQBfa3FBVslAI9LHlW6lrX-_vzTa5WRGOJhRKMTauGoVgHbM3UsnobBXYxnB_KTOXB-lKQlY1RLJ8S95lv3vZ8l9HxCZ5K9XFm93MS2cHxZSdFP2Hm5swtUsVivPnnqHISCHymjn-ihubBYPNAwXGTp9jrzr_WtKLe9SyYQqeJSMKJnxXB5pNxkqB8Ju1sCsv7MnpzY-Q_3yLmHN-lhglspgl4AspQDzPG7LrhKK_Ovlx0gSAjxoRGXhx8sx29xuxv3uf9w08YAlShedxT66c.1O-ICPZRx1mqLkKQWpN43Px-Lc0DEUefqkxfWEcvKoA&dib_tag=se&keywords=xlr%2Bkabel%2Bhigh%2Bend&qid=1776783444&sprefix=xlr%2Bkabel%2Bhigh%2Ben%2Caps%2C207&sr=8-8&th=1&tag=${TAG}`,
  },
  {
    id: 2, cat: 'kabel', subcat: 'xlr', groupId: 'xlr',
    icon: '🎧',
    iconComponent: 'XLRCableIcon',
    name: 'XLR Symmetrisches Audiokabel',
    desc: 'Professionelles symmetrisches Kabel mit Neutrik-Steckern, optimal zur Brummunterdrückung. Unverzichtbar in störungsarmen Studio- und HiFi-Setups.',
    price: 'ab 18,–',
    href: amazon('xlr kabel neutrik hifi symmetrisch'),
  },
  {
    id: 3, cat: 'kabel', subcat: 'netz', groupId: 'netz',
    icon: '⚡',
    iconComponent: 'PowerCableIcon',
    name: 'HiFi Netzkabel audiophil 2,5mm²',
    desc: 'Abgeschirmtes Netzkabel mit 2,5mm² Querschnitt und Schuko-Stecker. Reduziert Netzrauschen spürbar für saubereren Klang.',
    price: 'ab 45,–',
    href: amazon('hifi netzkabel audiophil schuko'),
  },
  {
    id: 17, cat: 'kabel', subcat: 'netz', groupId: 'netz',
    icon: '⚡',
    iconComponent: 'PowerCableIcon',
    name: 'Audioquest Monsoon High End Netzkabel',
    desc: 'Das AudioQuest Monsoon ist ein High-End Netzkabel der Spitzenklasse. Drei getrennte Leiter für Phase, Neutral und Erde, geflochtener Kupferschirm und Kaltgeräteeinbaustecker für maximale Netzqualität.',
    price: 'ab 499,–',
    href: `https://www.amazon.de/AudioQuest-Monsoon-High-Netzkabel-Kaltger%C3%A4testecker/dp/B07VBMXF15/ref=sr_1_10?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1173098WT6UIE&dib=eyJ2IjoiMSJ9.kh8zmJ4ZXoqM5muy6TPTyXsam4xsRVjPPunT9Zjb4pSZzhSBEGp7KMkEVJACuJnbudBhDDNUaeHfrHU_O3e4l4V6r7aY6C7TRG2MjvxQXLrT82-ev-H32I3hICHnYMJDSbbf30EkgJw01N5zpJIovEIU0fRLTmwfkVtiA7ABS6y5XP5bq0pS5JSfjczGpjdNSQfQUq71lmVnX4H1WEQb3LdDcL2-bC1159U4wSDjeQ8.fd-qZCB2H263582ivsUyI-ePGVavQfZ3aJBl-peTM4M&dib_tag=se&keywords=audioquest+netzkabel&qid=1776528956&sprefix=audioquest+netzkabel%2Caps%2C115&sr=8-10&tag=${TAG}`,
  },
  {
    id: 36, cat: 'kabel', subcat: 'lautsprecher', groupId: 'lautsprecher',
    icon: '🔗',
    iconComponent: 'SpeakerCableIcon',
    name: 'QED XT40i Referenz-Lautsprecherkabel 2m',
    desc: 'Referenz-Lautsprecherkabel von QED mit patentierter X-Tube-Technologie. Hohle Leitergeometrie reduziert den Skin-Effekt für eine besonders offene und detailreiche Hochtonwiedergabe.',
    price: 'ab 150,–',
    href: `https://www.amazon.de/QED-XT40i-Referenz-Lautsprecherkabel-Spule-Terminated/dp/B07YTYV65F/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=36HV9VS3E11SV&dib=eyJ2IjoiMSJ9.sPNsPj7qSv9XSFUlSbbhZn1cvUjskq2ygI-K6pNAJO6VSyi7u2QaoMqiN_4tiGBWLEyu6xpyKRd_n_zKPKAN1cXn_Xmf65d5IfkhMKZ4HlfMEfgsjqMdL71x2Kyz_wdAzgemvIi4xOPXK97xASu9K0lFksmYdWkfL4Q3FaZkw3rXod5HLtVYYnOUo48Rle9blu4k7-QUEVux31lvQiyaOIZc1UEpkI5IbkKMeicZOtQ.JMcsyrmqvDcTNfY1d0ov2fWnRVwoRFwyYWAlLxpQh0o&dib_tag=se&keywords=lautsprecherkabel+qed&qid=1776778657&sprefix=lautsprecherkabel+qed%2Caps%2C179&sr=8-2&tag=${TAG}`,
  },
  {
    id: 35, cat: 'kabel', subcat: 'lautsprecher', groupId: 'lautsprecher',
    icon: '🔗',
    iconComponent: 'SpeakerCableIcon',
    name: 'Supra Cables Lautsprecherkabel PLY 3M',
    desc: 'Hochwertiges Lautsprecherkabel von Supra Cables in 3m Länge mit CombiCon Crimp Steckern. OFC-Leiter in verdrillter PLY-Ausführung für minimale Einstreuungen und natürliche Klangwiedergabe.',
    price: 'ab 249,–',
    href: `https://www.amazon.de/Supra-Cables-Lautsprecherkabel-CombiCon-Crimp/dp/B001AACE26/ref=sr_1_4?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=FWJ4RCONS3S&dib=eyJ2IjoiMSJ9.Q9eZyZDxQ6ZIgforquZtc1Bcp0e8FW5KKr_oOxtrpMH9Mc0Wo0ISp5TEw73_IFbT68c5SzeauYCh-DzB-AjSPSAzAlr8cM-VCssu9awfqD4RNfoJXEQu8Icf8aV9l9945-cpkHi9xZVHjIJKg4yqL1WGYYCaPIgCysvxjGhjvFscIK45Iv5L9NtyhpmbLexqBY3-g83UrMhOoAp-Wr4ku6lJWOSp4ZhLHqnbOkb-j19tYCSJnG9qlA-iY2QppeHrMHQOhpSrMN7eDUV3ddGlK8dJ0RXjoSJ-mYFWnxGcxpg.i5UTpa5RUwGP_U0TkveuHWAmga0gUSEbDr75C0QR3YM&dib_tag=se&keywords=lautsprecherkabel+supra&qid=1776778450&s=ce-de&sprefix=lautsprecherkabel+supr%2Celectronics%2C114&sr=1-4&tag=${TAG}`,
  },
  {
    id: 34, cat: 'kabel', subcat: 'lautsprecher', groupId: 'lautsprecher',
    icon: '🔗',
    iconComponent: 'SpeakerCableIcon',
    name: 'VIABLUE SC-2 Silver Single-Wire 3m',
    desc: 'Hochwertiges Lautsprecherkabel aus der ViaBlue SC-2 Silver Serie. Single-Wire Ausführung mit 3m Länge und Bananensteckern. Silberbeschichtete OFC-Leiter für eine natürliche, detailreiche Klangwiedergabe.',
    price: 'ab 329,–',
    href: `https://www.amazon.de/ViaBlue-Silver-Single-Wire-Lautsprecherkabel-Bananenstecker/dp/B000W3I0MU/ref=sr_1_18?crid=2KV035R5W3DW3&dib=eyJ2IjoiMSJ9.wu3C_-y-SS035bet09Gz2ui4jgQhENPYFNEQbqKxay-BX3TK4CwryBPmQ1akHuzfnitbjPoaeY-hRJVbBiMbB5qONWvR-HzZJ1ftemJsIAGr3XMorGYQQFEwdLgBt_4DZ1HihgqUEq0K7M_R05rhlk3RsAFRZW1BtL1UBtoGIYQA2PXmFXl4orryodZa72xkyisQFuBUtaB2v5AHPrza8zTPtH5J86MqsZljhQFBagE.3XO8gdWMgp83MDuL_dLdgkvIM8aFDYZbIX-lVMwSvMA&dib_tag=se&keywords=viablue+sc-6+lautsprecherkabel&qid=1776778176&sprefix=lautsprecherkabel+via%2Caps%2C107&sr=8-18&tag=${TAG}`,
  },
  {
    id: 4, cat: 'kabel', subcat: 'lautsprecher', groupId: 'lautsprecher',
    icon: '🔗',
    iconComponent: 'SpeakerCableIcon',
    name: 'Lautsprecherkabel OFC 2×2,5mm²',
    desc: 'Sauerstofffreies Kupfer in Bananencrimpausführung. Klarer, druckvoller Bassfundament durch minimierten Übergangswiderstand.',
    price: 'ab 34,–',
    href: amazon('lautsprecherkabel ofc 2x2.5mm hifi'),
  },

  {
    id: 13, cat: 'kabel', subcat: 'cinch', groupId: 'cinch',
    icon: '🔌',
    iconComponent: 'CinchCableIcon',
    name: 'Supra Cables Eff-ISL Cinch Kabel',
    desc: 'Hochwertiges Cinch-Kabel von Supra Cables mit Eff-ISL Technologie. Geringer Kapazitätsbelag, verdrillte Innenleiter und vergoldete Stecker für unverfärbte Signalübertragung.',
    price: 'ab 150,–',
    href: `https://www.amazon.de/Supra-Cables-Eff-ISL-Chinch-Kabel/dp/B001AA11FM/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1B82BRGEOCGPR&dib=eyJ2IjoiMSJ9.A98Dm7dHUaD-WLUA-asfo-dWcGzKtq4w9N5dBRNKIPetVn5rstIGxnuk1SF9lDjF2ul38NDc85goSgsBM4yTnA5kXzKxNVQHSSxc4PtpFzENtLoUVzLJ9VcshNdZAS3fEYp8Q_6ODx815yR7YIqT2rim68Bl78w4n2VSj6EJxjmyD-wGdEd7eKJQsfvv3ePg_YzRtWkA9GsIa69aK6iPmhnEe0wmjfM05knti2Fr1ns.xqBW_FlYNUPrEbK-CoDqY4wCg4E7ASQZsg-zp-0AEPo&dib_tag=se&keywords=Supra+Cables+Eff-ISL+Cinch&qid=1776525587&sprefix=supra+cables+eff-isl+cinch+%2Caps%2C93&sr=8-1&tag=${TAG}`,
  },
  {
    id: 14, cat: 'kabel', subcat: 'cinch', groupId: 'cinch',
    icon: '🔌',
    iconComponent: 'DualRCAIcon',
    name: 'Supra Cables Dual RCA',
    desc: 'Das Supra Dual RCA überzeugt mit zwei parallel geführten, symmetrisch aufgebauten Cinch-Adern. Ideal für Stereo-Verbindungen mit minimalem Übersprechen zwischen den Kanälen.',
    price: 'ab 79,–',
    href: amazon('Supra Cables Dual RCA Kabel HiFi Stereo'),
  },

  {
    id: 15, cat: 'kabel', subcat: 'cinch', groupId: 'cinch',
    icon: '🔌',
    iconComponent: 'CinchCableIcon',
    name: 'Audioquest Golden Gate',
    desc: 'Das AudioQuest Golden Gate Cinch-Kabel überzeugt mit Solid Long-Grain Copper (LGC) Innenleitern und Kaltschweißverbindungen. Minimale Verzerrung, warmer audiophiler Klang.',
    price: 'ab 99,–',
    href: `https://www.amazon.de/Audioquest-Stereo-Kabel-Golden-RCA-Steckern/dp/B005TI0P0S/ref=sr_1_1?dib=eyJ2IjoiMSJ9.fd1i6yIfYB0QpNRU52PrwC9NDc8Ohsu0oV31yzOBtM2fDsHfnSijFqxtBJlmBtAvEBO7HGw1Iap5W64CJnki9MFMqoAyhDJAjyLp1CnB71zWUrQwN8lWHqcHUrllmPf4QfZlRLnXszLHA5RY841DmizGBAMV3TPRgxHdK8KGyjG7U9XM_9YjSUWz80On5dQWA5i4Cqh2qtdSpe-0G6iLZHPEX6MFFElnVZI7kPyTVdQ.Wxc4GhzZsyIJnPl8Im4z8JHo5_7yeNOicf2RYiu88sc&dib_tag=se&keywords=Audioquest+Golden+Gate+Cinch+Kabel+RCA+HiFi&qid=1776526644&sr=8-1&tag=${TAG}`,
  },

  {
    id: 16, cat: 'kabel', subcat: 'cinch', groupId: 'cinch',
    icon: '🔌',
    iconComponent: 'CinchCableIcon',
    name: 'AudioQuest Tower Audiokabel',
    desc: 'Das AudioQuest Tower ist ein erschwinglicher Einstieg in die audiophile Welt. Solid Long-Grain Copper Innenleiter, direkt versilberte Stecker und ein geflochtener Außenmantel für saubere Signalführung.',
    price: 'ab 49,–',
    href: amazon('AudioQuest Tower Cinch Kabel RCA HiFi'),
  },

  {
    id: 18, cat: 'kabel', subcat: 'cinch', groupId: 'cinch',
    icon: '🔌',
    iconComponent: 'CinchCableIcon',
    name: 'Audioquest Evergreen Kabel',
    desc: 'Das AudioQuest Evergreen ist ein hochwertiges Einsteiger-Cinch-Kabel mit Solid Long-Grain Copper Innenleitern und vergoldeten Steckern. Ideal für den audiophilen Einstieg.',
    price: 'ab 90,–',
    href: `https://www.amazon.de/audioquest-Evergreen-Kabel-mit-Steckern/dp/B005T45C1E/ref=sr_1_56?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HD12Y9IJTMSU&dib=eyJ2IjoiMSJ9.yW41SuaTYcqYCuM0HvoOKAghwGMM_hHFLkShjfqhC5CICNGnCBZ6_MNEHC8wFJTzw9RHgx8zx2Dg0vE1UWBx9RAMP42WsE-U8T3viibUaLxaej3BnumwyF4d8FjINPSdWiJ2eVhv6fAe1puldNqW5vAIIqO7PhXHCz-Fb2V_JjVy9a6239zb7g8AAwR_DLO9UTpTmOyWD6Kz_YsLo7eH3ciOhlVARlc6bGi0QjaWXD4vSvEPpTmDUU6MGJTxgsoirimSyNBPyqxqMoT3xINfj10Y5pJ3qBEj8-3qSCcRrps.WhunlpAwJmJkj_VNaSS-BAsMQZTHkCTm-wUNTpvQGhc&dib_tag=se&keywords=xlr%2Bkabel%2Baudioquest&qid=1776529503&sprefix=xlr%2Bkabel%2Baudioquest%2Caps%2C135&sr=8-56&xpid=PszzYp-sVb2dt&th=1&tag=${TAG}`,
  },

  {
    id: 19, cat: 'kabel', subcat: 'netz', groupId: 'netz',
    icon: '⚡',
    iconComponent: 'PowerCableIcon',
    name: 'Supra Cables LoRad 2.5 MKII EU',
    desc: 'Das Supra LoRad 2.5 MKII ist ein audiophiles Netzkabel mit 2,5mm² Querschnitt, verdrillten Leitern und EU-Schukostecker. Reduziert effektiv Netzstörungen für einen ruhigeren Klanggrund.',
    price: 'ab 89,–',
    href: `https://www.amazon.de/Supra-Cables-Netzkabel-LoRad-MKII/dp/B00MFUU1VQ/ref=sr_1_1_mod_primary_new?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=368FU9E9JDBO3&dib=eyJ2IjoiMSJ9.-OFAfWPPtF7mSDRONgIS8auo5fukRwXQQBA7gmDFFAC1RZ4vAZTDHSfy1EaTJJdYDvy89kTu3FVOSJ-ykQPiLZLiEdktmlmBBmf71J-hwy0YRpOSRzrABWqdSmnguYsShp1oamUJ2qNCQLFSekpeXQTUSipcY0dRNn61Dvj6WWrbUDpuMZc2h1Cc7SD9AUCGROMXDgct28j0TLqQmStWu35JFC6b8vsrE8y03qKrJp0.uS9E68N3Jb6xE4qTQI5IsgZ2Trxg77YzIPUL30IV6v0&dib_tag=se&keywords=supra+netzkabel&qid=1776530797&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=supra+netzkabel%2Caps%2C123&sr=8-1&tag=${TAG}`,
  },

  {
    id: 20, cat: 'kabel', subcat: 'netz', groupId: 'netz',
    icon: '⚡',
    iconComponent: 'PowerCableIcon',
    name: 'AudioQuest NRG-X3 Netzkabel',
    desc: 'Das AudioQuest NRG-X3 überzeugt mit drei Solid Long-Grain Copper Leitern, Kaltgeräteeinbaustecker C13 und einem geflochtenen Schirmgeflecht. Merklich ruhigerer Klangboden gegenüber Standardkabeln.',
    price: 'ab 99,–',
    href: `https://www.amazon.de/AudioQuest-Netzkabel-NRG-X3-Version-C-13/dp/B08B14Y3KK/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25VTZXC50KZPI&dib=eyJ2IjoiMSJ9.til_bRnodLaM7nElw-te6jM1t9qxqlHWoagAT_prAYMzJjqGyJWsydObxEdeDJ2W_PI1jps9B7RXV6Mo_6AM9JzTXLGhF5ifu24Q5wF-E5aydTCcAYPX2lHBKgESlxwh_zsup1OL4Q1ylz1fgN4vzvzxMxgpJxHqQLg3p4hATwd6sQkjanybDJn5P-mozwXtlEvSorVD9DLXk4dScakxTA.nfk_f5HWe9nc-raaJ7dUY5RHK0Ni1xnXFV_HdD5lrA4&dib_tag=se&keywords=audioquest+nrg+x3&qid=1776531165&sprefix=audioquest+nrg+x3%2Caps%2C109&sr=8-1&tag=${TAG}`,
  },

  {
    id: 21, cat: 'kabel', subcat: 'xlr', groupId: 'xlr',
    icon: '🎧',
    iconComponent: 'XLRCableIcon',
    name: 'Supra Cables EFF-IXLR HiFi Kabel',
    desc: 'Das Supra EFF-IXLR ist ein symmetrisches XLR-Kabel mit verdrillten OFC-Innenleitern und Neutrik-kompatiblen XLR-Steckern. Ideal für störungsfreie Verbindungen zwischen Vorverstärker und Endverstärker.',
    price: 'ab 169,–',
    href: `https://www.amazon.de/Supra-Cables-eff-ixlr-Pair-1-M/dp/B00E3WXKYO/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=7RJ31DBVJZ7H&dib=eyJ2IjoiMSJ9.q6khPeiplNESKo8BCrgdP7Eos6GuhG-fGj-a5YCVyG2w52jo7dDUy1j4A3LAjEtsbPGURvTfKePnRgpWPRHZG9zwDoAHwrefN1TfZvF0yS5m_EFHvKmoQNdOnlp2fMLX95XoEILuq7TZRLwRAQgeuM9x-bPvn0XN6gUPabNPN_oMNHu6pMNOXNlbtkLag19pG3aczgJPPyRqvBrJpVHHmbLE8Zx3u1vbFw_kyeq_RV1REyfHtak5c-dNmlNVcKUOHg36zJow78S1zz0nfT5nS_oxuRmTrUly0Iz_T1edxk8.6WyyO2TqU0G6SbMvP0_ZzdSqNdnoRzqmJPsT7mzwPKY&dib_tag=se&keywords=supra+xlr+kabel&qid=1776531286&sprefix=supra+xlr+kabel%2Caps%2C117&sr=8-1&tag=${TAG}`,
  },

  {
    id: 22, cat: 'kabel', subcat: 'xlr', groupId: 'xlr',
    icon: '🎧',
    iconComponent: 'XLRCableIcon',
    name: 'enoaudio Mogami 2534 Quad Stereo Paar (L,R)',
    desc: 'Das Mogami 2534 Quad-Core XLR-Kabel gilt als Referenz im Profi-Studio. Vier verdrillte Innenleiter minimieren Einstreuungen auf ein Minimum – mit Neutrik-Steckern konfektioniert.',
    price: 'ab 80,–',
    href: `https://www.amazon.de/Mogami-Stereo-Audio-Neutrik-Female/dp/B07BLLDD14/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=11HXMVNM8VJJJ&dib=eyJ2IjoiMSJ9.NrfCckUNeRQZ9P9jy5kS-NT4W95cksihwHsbTaIHIpBj_ELLG6pBdZS9LuoMZJkTRfAkYv2KAuHrAFLpt2I3HDziJ-OapcW5WJM6mr-zKzuBk60Dp-ftPAz7NWzVKZ_fgP_npMz37S7GIT3yZEkseHb2pLjQJt4xJmkJhlqWULKSDnnzB-eJfAqdrl-GNlnGzn51zUu3_QwARKMaWyzCBVSJbxcTTc0j762kRQVr5dvdW7j4HSjGzvO7VZj4vlNCpSx2Prl7u-xaAnlEC07CIIQ-SJPQCKoAWrCdGsRxpv4.KDyH40-7KNqtTUuQzCrGrp0SJWleORPmAc3xDo_WpEU&dib_tag=se&keywords=enoaudio%2BMogami%2B2534%2Bxlr&qid=1776531933&sprefix=enoaudio%2Bmogami%2B2534%2Bxlr%2Caps%2C149&sr=8-1&th=1&tag=${TAG}`,
  },

  {
    id: 23, cat: 'kabel', subcat: 'netz', groupId: 'netz',
    icon: '⚡',
    iconComponent: 'PowerCableIcon',
    name: 'Lapp ÖLFLEX 110CY 3x2,5',
    desc: 'Das Lapp ÖLFLEX 110CY ist ein industrielles Steuerkabel mit 3×2,5mm² Querschnitt und CY-Abschirmung. Beliebt in der audiophilen DIY-Szene als hochwertiges Netzkabel-Grundmaterial.',
    price: 'ab 39,90',
    href: 'https://www.ebay.de/itm/187292060195?var=0&_ul=DE&mkevt=1&mkcid=1&mkrid=707-53477-19255-0&campid=5338973321&toolid=10029&customid=558139610362624402&loc_interest_ms=&loc_physical_ms=116084&gclid=e339075988311f1e508e6eba3500dec9',
  },

  {
    id: 24, cat: 'kabel', subcat: 'netz', groupId: 'netz',
    icon: '⚡',
    iconComponent: 'PowerCableIcon',
    name: 'Ultimate Netzkabel 3x2,5qmm Bals Schuko, Wattgate 320i',
    desc: 'Hochwertiges konfektioniertes Netzkabel mit 3×2,5mm² Querschnitt, Bals Schuko-Stecker und Wattgate 320i Kaltgerätestecker. Audiophile DIY-Qualität für anspruchsvolle HiFi-Anlagen.',
    price: 'ab 79,90',
    href: 'https://www.ebay.de/itm/180833697125?itmmeta=01KPGYK2ARVM3J97D9BJNV6FVM&hash=item2a1a873d65:g:NkcAAOSwPkJab0NL',
  },

  // ── NETZLEISTEN ──
  {
    id: 27, cat: 'netzleisten', groupId: 'netzleisten',
    icon: '🔌',
    iconComponent: 'PowerCableIcon',
    name: 'Dynavox HiFi-Netzfilter X4100S',
    desc: 'Mehrfach-Steckdose mit 8 Schukosteckplätzen, integriertem HiFi-Netzfilter und Überspannungsschutz. Integrierte LED-Anzeige für die korrekte Phasenlage – zeigt auf Anhieb, ob die Netzleiste phasenrichtig eingesteckt ist. Reduziert Netzstörungen spürbar und versorgt alle HiFi-Komponenten mit sauberem Strom.',
    price: 'ab 130,–',
    href: `https://www.amazon.de/gp/aw/d/B076Q7R396/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=5fe8a84b788c3656ba1975a1eea6c1cc&hsa_cr_id=0&qid=1776773498&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987&aref=Z7MrM4Ftpp&ref_=sbx_s_sparkle_sbtcd_asin_0_title&pd_rd_w=ulvlU&content-id=amzn1.sym.67616a74-5971-4136-9787-0edce4b0e77e%3Aamzn1.sym.67616a74-5971-4136-9787-0edce4b0e77e&pf_rd_p=67616a74-5971-4136-9787-0edce4b0e77e&pf_rd_r=SJZFXZ4SRSGQVFASM4NY&pd_rd_wg=PCNWg&pd_rd_r=426e4467-e0bb-4467-98e6-a775be26000e&th=1&tag=${TAG}`,
  },

  {
    id: 28, cat: 'netzleisten', groupId: 'netzleisten',
    icon: '🔌',
    iconComponent: 'PowerCableIcon',
    name: 'Dynavox HiFi-Netzfilter X2000',
    desc: 'Mehrfach-Steckdose mit 5 Schukosteckplätzen und integriertem HiFi-Netzfilter. Integrierte LED-Anzeige für die korrekte Phasenlage – zeigt auf Anhieb, ob die Netzleiste phasenrichtig eingesteckt ist. Kompakte Lösung für kleinere HiFi-Setups mit effektiver Netzstörungsunterdrückung.',
    price: 'ab 100,–',
    href: `https://www.amazon.de/dp/B083V15M3R?ref=emc_s_m_5_i_atc&th=1&tag=${TAG}`,
  },

  {
    id: 29, cat: 'netzleisten', groupId: 'netzleisten',
    icon: '🔌',
    iconComponent: 'PowerCableIcon',
    name: 'Audioquest Powerquest 3',
    desc: 'High-End Netzleiste von AudioQuest mit integriertem Netzfilter der Niagara-Technologie. Reduziert hochfrequente Störungen und sorgt für eine rauschfreie Stromversorgung aller HiFi-Komponenten.',
    price: 'ab 399,–',
    href: `https://www.amazon.de/AudioQuest-Netzleiste-Powerquest-3-Niagara-1200/dp/B082SX51NV/ref=sr_1_1?crid=YCKI9NGCOYAC&dib=eyJ2IjoiMSJ9.yPgBC-_1a-DeFcN2uSgaVTKO6FYmHo0OjF5wQDax5SjGjHj071QN20LucGBJIEps.SiMUXy8RNOnX29ffWVqKFwr-qYz7DAhM-Dj6K62ykx0&dib_tag=se&keywords=audioquest+steckerleiste&qid=1776776031&sprefix=audioquest+st%2Caps%2C211&sr=8-1&tag=${TAG}`,
  },

  {
    id: 30, cat: 'netzleisten', groupId: 'netzleisten',
    icon: '🔌',
    iconComponent: 'PowerCableIcon',
    name: 'Audioquest Powerquest 2',
    desc: 'Kompakte High-End Netzleiste von AudioQuest mit Niagara-Filtertechnologie. Effektive Unterdrückung von HF-Störungen für einen ruhigeren Klangboden in der HiFi-Anlage.',
    price: 'ab 269,–',
    href: `https://www.amazon.de/AudioQuest-Netzleiste-Powerquest-2-Niagara-1200/dp/B082SX8KS8/ref=sr_1_1?crid=2B2A25FHP1NP4&dib=eyJ2IjoiMSJ9.c_qKWYfH_Lia0BTOAcnSVIZf4ADirtKe6Y6g8dg-p6SQ1VZEY4_b4c8XdiZH65LmM0QFC9C71wjdlk5F3jf8E8JYG6mAjbyi1HJAScN8xBd-AO1o_sshaqhNhruKo492FacGotlxgGRokSIBu8fu2itiAKoMufI6sLZvlX3sqoFGf7AwzvMmljXtFLJeKQPshUllKXiyNOVBp7p79ySDXucbHRGnPfYxIk2x-ZWLLmU.W8ZytvfP8xO3W1h8gnoVycuAbbuo-IZSjVVqpCI4YhQ&dib_tag=se&keywords=audioquest+powerquest+2&qid=1776776796&sprefix=audioquest+powerq%2Caps%2C113&sr=8-1&tag=${TAG}`,
  },

  {
    id: 31, cat: 'netzleisten', groupId: 'netzleisten',
    icon: '🔌',
    iconComponent: 'PowerCableIcon',
    name: 'Supra Cables MK III Netzleiste',
    desc: 'Hochwertige audiophile Netzleiste von Supra Cables mit integriertem Netzschalter und vergoldeten Schukobuchsen. Solide Verarbeitung und effektive Entstörung für die anspruchsvolle HiFi-Anlage.',
    price: 'ab 200,–',
    href: `https://www.amazon.de/Supra-Netzleiste-MK-III-Switch/dp/B017TIM4RM/ref=sr_1_6?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Q5QGI2LL3HLR&dib=eyJ2IjoiMSJ9.ZgxKkU6QJYEpp4CKdjO86UGPG-3SdHhn8fk5GZ0F0n8c0nkr8pTB8UBIt6Ml0iaEj1z9NXCj8HqLO2w6P7-UPA-JPn841y0cTJO-paO74hjr4ucHgk9_UBZLYuHgcZcrOpdUaix4Nhh4UJaWvjSJfLFSCuVlhGTjaUW9hj9b08L5ot7RwljwZWAqy-OgvgNE5uFzB1TWWSkatZ9JN1ie2c8fBE50XiRo3WF1tWT0wvE.SqJUFSR1heeKRpDc7CfU4pmOTKK5hnuUGpoXBfrk84k&dib_tag=se&keywords=supra+netzleiste&qid=1776776860&sprefix=supra+netzleiste%2Caps%2C301&sr=8-6&tag=${TAG}`,
  },

  {
    id: 41, cat: 'netzleisten', groupId: 'netzleisten',
    icon: '🔌',
    iconComponent: 'PowerCableIcon',
    name: 'AudioQuest Jitterbug FMJ USB Filter',
    desc: 'USB Data & Power Noise Filter von AudioQuest. Reduziert parasitäre Resonanzen und Störungen auf USB-Leitungen – spürbar weniger digitales Rauschen für DACs, Streamer und andere USB-Audioquellen. Einfach zwischen USB-Netzteil und Gerät stecken.',
    price: 'ab 59,–',
    href: 'https://www.amazon.de/AudioQuest-USB-Filter-Reduzierung-parasit%C3%A4re-Resonanzen-schwarz/dp/B08YDFH63B/ref=sr_1_3_mod_primary_new?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=225TU8OIDRMB1&dib=eyJ2IjoiMSJ9.H7oW_WotmUN7fnatPql3zTqJnn46orD1w4389BVlDhkFpNx_p974suzgy1F7e2NC8SLjYAMN6loA9MZZNgmhWyNlTBO-Dep1muYVsZhCFxrnmMHJOZTED81u8RDd27EJFiSP-ef-JZ6O-F4St5OJSiejisPrGMz4zDJtW1N57MoQspgsBjYOtQH_Abq2XMP0idF8635YObDbq3BfBQvvOSAQLKBp2nY-nw9fR4jEHAF1DKyjNmrnWnTCh6vHTLOX.3NG4IKvS3mZBI6EDpr6Fdjtx5YiStrty4aHMFUlf6js&dib_tag=se&keywords=jitter+bug+audioquest&qid=1776875775&s=ce-de&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=jitter+bug+audioquest%2Celectronics%2C97&sr=1-3',
  },

  // ── PHASENDETEKTOR ──
  {
    id: 32, cat: 'phasendetektor',
    icon: '⚡',
    iconComponent: 'FuseIcon',
    name: 'Oehlbach Phasendetektor',
    desc: 'Praktisches Messgerät zur Bestimmung der korrekten Netzphase von HiFi-Geräten. Einfach in die Schukosteckdose stecken und per LED ablesen – für optimale Klangqualität durch korrekte Phasenlage aller Komponenten.',
    price: 'ab 60,–',
    href: `https://www.amazon.de/Oehlbach-Hochwertiger-Phasendetektor-Bestimmung-phasenrichtigen/dp/B001IK27YS/ref=pd_rhf_dp_s_pd_crcd_d_sccl_1_2/260-8413956-1206734?pd_rd_w=3KWSX&content-id=amzn1.sym.bdc976f5-091d-476e-babe-0eae24f1fc4c&pf_rd_p=bdc976f5-091d-476e-babe-0eae24f1fc4c&pf_rd_r=8W0HR43WH2SKPS4FEPWZ&pd_rd_wg=kUAvP&pd_rd_r=6e37cba7-af87-4580-b725-b6754faf52d5&pd_rd_i=B001IK27YS&psc=1&tag=${TAG}`,
  },

  // ── SICHERUNGEN ──

  {
    id: 33, cat: 'sicherungen',
    icon: '✨',
    iconComponent: 'GoldFuseIcon',
    name: 'AHP Feinsicherung II 6,3×32mm Gold träge 1,25A',
    desc: 'Audiophile Goldkontakt-Feinsicherung von AHP (250V, 1,25A, träge). Vergoldete Endkappen für minimalen Übergangswiderstand und optimale Signalübertragung in hochwertigen HiFi-Verstärkern.',
    price: 'ab 39,90',
    href: `https://www.amazon.de/AHP-Audiophile-HiFi-Produkte-Feinsicherung-Stromst%C3%A4rke/dp/B005LF1UMG/ref=sr_1_18?dib=eyJ2IjoiMSJ9.T9-bSlDUaWgHhAr4Bz1X2fnG10AsxxLNjy__U7GoghdPb1_DgB7w8z_qOXcfSZuN1OE5IBxm1cRz1MXUGdCp7tL67oF9LJ8fYz6ogjfgMoG0Uhh5dyHrjJyDakkEcP6UoqVTd6m5fYukrXtWeq58FUctS76QZ0CbGh7FBJY2_0vhDwGW5kBij4I_vIEqyRxqTHdw5bSmT0zeDwRUe3aN3x1J0Vada5aXkQ3VcfayntwqgD8btRGKNajIZaVUzQr8iE25FlMEscGQ48EArRTpfIIFeKRTSL2ex1FCTz7SStY.RWKFTE_QCGIDeoGDe_hOH6dmNM2GLsUtFsfq5uOZOOQ&dib_tag=se&keywords=hifi+sicherung+gold+6.3x32mm+audiophil&qid=1776776652&sr=8-18&tag=${TAG}`,
  },

  // ── ABSORBER ──
  {
    id: 38, cat: 'absorber', groupId: 'dynavox_absorber',
    icon: '🟢',
    iconComponent: 'DeviceFeetIcon',
    name: 'Dynavox Sub-Watt-Absorber 4er Set',
    desc: 'Vier hochwertige Gerätefüße zur Entkopplung von HiFi-Komponenten. Reduzieren Vibrationen und Körperschall effektiv – ideal für Verstärker, CD-Player und Plattenspieler.',
    price: 'ab 14,99',
    href: `https://www.amazon.de/gp/aw/d/B0039I1DTC/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=d455c89330797381f3deeab3dfcc8d75&hsa_cr_id=0&qid=1776779279&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987&aref=gTtRkGXGgg&ref_=sbx_s_sparkle_sbtcd_asin_0_title&pd_rd_w=yFzr5&content-id=amzn1.sym.67616a74-5971-4136-9787-0edce4b0e77e%3Aamzn1.sym.67616a74-5971-4136-9787-0edce4b0e77e&pf_rd_p=67616a74-5971-4136-9787-0edce4b0e77e&pf_rd_r=1M7V9PQXZJY4E6WZ6FSG&pd_rd_wg=zfmRo&pd_rd_r=8e9606b2-d5e1-4e7e-a14a-9d8ca0a75dab&th=1&tag=${TAG}`,
  },
  {
    id: 37, cat: 'absorber', groupId: 'dynavox_absorber',
    icon: '🟢',
    iconComponent: 'DeviceFeetIcon',
    name: 'Dynavox Silikon-Elastomer Dämpfer ED32 4er-Set',
    desc: 'Vier Silikon-Elastomer Resonanzdämpfer mit selbstklebender 3M-Klebefolie. Ideal für Plattenspieler, Verstärker und HiFi-Geräte – dämpfen Vibrationen zuverlässig und schützen vor Körperschall.',
    price: 'ab 9,99',
    href: `https://www.amazon.de/Dynavox-Silikon-Elastomer-Plattenspieler-Resonanzd%C3%A4mpfer-3M-Klebefl%C3%A4che-Schwarz/dp/B0CF22XHJD/ref=sr_1_10?dib=eyJ2IjoiMSJ9.wFmkDJUoeLlxVTPyg6K_e6HNCawVLKXKyXxpvP-Oz9XjTuNx2q6-8SrnCuI-lotw75yK0aNOiX4RdiWt5Z4GKppVzL-KiypfTyzHEhY9t7DevxEaLLouLWMoHzLykM-VjG4TL89YkCDGNoat4o-1LuiH3cDxoSwBrDOnIlMBjrN_phjJHWVT5OJL7bJPGaJ6q-KIGrUmWa0xmsvSFPc8_ENBQFQtcOP23zia0ojxgyo.qYPveoSGEyqpDyMU9VHUWuXPkVBSU5MT--KbjlbHqZo&dib_tag=se&keywords=hifi%2Bger%C3%A4tef%C3%BCsse%2Bentkoppler%2Bedelstahl%2Bspitzenlager&qid=1776779045&sr=8-10&th=1&tag=${TAG}`,
  },
  {
    id: 8, cat: 'absorber',
    icon: '🎛️',
    iconComponent: 'AcousticAbsorberIcon',
    name: 'Raumakustik Absorber Schaumstoff',
    desc: 'Breitband-Absorber aus akustischem Pyramidenschaum. Reduziert Raumreflexionen, Flatterechos und störende Frequenzüberhöhungen im Hörraum.',
    price: 'ab 49,–',
    href: amazon('raumakustik absorber pyramidenschaum hifi studio'),
  },

  // ── REINIGUNG ──
  {
    id: 10, cat: 'reinigung', subcat: 'vinyl', groupId: 'reinigung',
    icon: '💿',
    iconComponent: 'VinylCleanerIcon',
    name: 'Vinyl-Schallplatten Reinigungsflüssigkeit',
    desc: 'Antistatische Reinigungsflüssigkeit für Schallplatten. Löst Staub, Fett und Fingerabdrücke schonend. Inklusive Mikrofasertuch.',
    price: 'ab 16,–',
    href: amazon('vinyl schallplatten reinigungsflussigkeit antistatisch'),
  },
  {
    id: 11, cat: 'reinigung', subcat: 'reiniger', groupId: 'reinigung',
    icon: '🧹',
    iconComponent: 'ContactSprayIcon',
    name: 'Pflegemittel',
    desc: 'Mikrofasertücher, Wattepads und Reinigungstücher für die schonende Pflege von HiFi-Geräten, Gehäuseoberflächen und Anschlüssen. Rückstandsfrei, antistatisch und kratzfrei.',
    price: 'ab 11,–',
    href: amazon('mikrofasertücher hifi reinigung elektronik'),
  },
  {
    id: 26, cat: 'reinigung', subcat: 'reiniger', groupId: 'reinigung',
    icon: '🧴',
    iconComponent: 'ContactSprayIcon',
    name: 'Isopropanol 99,9 % Reinigungsalkohol',
    desc: 'Hochreiner Isopropylalkohol (IPA) zum Reinigen von Kontakten, Platinen und Steckverbindern. Rückstandsfrei, antistatisch und lösemittelverträglich – ideal als Basis für audiophile Kontaktpflege.',
    price: 'ab 8,–',
    href: `https://www.amazon.de/Maxxi-Clean-Reinigungsalkohol-L%C3%B6sungsmittel-r%C3%BCckstandsfrei/dp/B0849YHNK5/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.bis9HKV0iByasT1Gs__hOoXDZkD0sOr_-Hmy4Y62fsDNB_GjetP0Z22tr5NE1xs44XG3_-G5KteKYyerm6C0NK9j4r9WZ5qIVoviH7Xs5v_XqccANKdlzjl0yKip9HWZ6pRUv8hxrlCwU3mRavAvFdtDcKnkfBPqGE5fvnT7Ln6VTtplmuoLD8oQVgOKoX_8gHOpDGIhwapOymYitXYE6SJNRZ7MTrzexBV1ijYZ8Kohofaa19sBm3wwQn05dQE3FPyG0wje7mZdd_vJ0IQSS6zhGVlDuvvE9phhdXtVhpc.a7hiNq1o3QfDB-vd0vpc_vCMzJ7i3lnNKs-pEcnM3jY&dib_tag=se&keywords=isopropanol%2B99%2Breinigungsalkohol%2Belektronik%2Bkontakte&qid=1776541750&sr=8-1-spons&aref=swIwwyKVRo&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&tag=${TAG}`,
  },
  {
    id: 25, cat: 'reinigung', subcat: 'fluid', groupId: 'reinigung',
    icon: '💧',
    iconComponent: 'ContactSprayIcon',
    name: 'Kabel-Kontakt-Fluid',
    desc: 'Spezielles Kabel-Kontakt-Fluid für die professionelle Pflege von Steckverbindern, Cinch-Buchsen und Lautsprecherklemmen. Verbessert die Leitfähigkeit, schützt vor Oxidation und sorgt für eine langanhaltende, rauscharme Verbindung.',
    price: 'ab 15,–',
    href: 'https://www.hifi-regler.de/p/hifi-regler-kabel-kontakt-fluid.html',
  },
  {
    id: 12, cat: 'reinigung', subcat: 'vinyl', groupId: 'reinigung',
    icon: '🎼',
    iconComponent: 'NeedleBrushIcon',
    name: 'Carbon-Tonabnehmerbürste',
    desc: 'Antistatische Carbonfaserbürste für Vinyl-Nadeln. Schonende Entfernung von Staub und Partikeln, verlängert die Lebensdauer von Tonabnehmer und Platte.',
    price: 'ab 9,–',
    href: amazon('tonabnehmer nadelbürste carbon vinyl antistatisch'),
  },
]
