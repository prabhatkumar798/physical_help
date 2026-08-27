/* =====================================================
   PROFILE PAGE - DYNAMIC DATA
===================================================== */

console.log("Profile JS loaded");

/* =====================================================
   PROFILE DATA
===================================================== */

const profiles = {
  /* ================= PROFILE 1 ================= */

  1: {
    name: "Aahana",

    location: "Mumbai",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ Aahana 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile1/aanayana_01.jpeg",
      "images/profile1/aanayana_02.jpeg",
      "images/profile1/aanayana_03.jpeg",
      "images/profile1/aanayana_04.jpeg",
      "images/profile1/aanayana_05.jpeg",
      "images/profile1/aanayana_06.jpeg",
      "images/profile1/aanayana_07.jpeg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },

  /* ================= PROFILE 2 ================= */

  2: {
    name: "Priya",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ priya 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile2/profile2_pic_01.jpeg",
      "images/profile2/profile2_pic_02.jpeg",
      "images/profile2/profile2_pic_03.jpeg",
      "images/profile2/profile2_pic_04.jpeg",
      "images/profile2/profile2_pic_05.jpeg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },

  /* ================= PROFILE 3 ================= */

  3: {
    name: "Jyoity",

    location: "Delhi",

    description:
      "☎️ᴄᴀʟʟ Jyoity 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile3/image_01.jpg",
      "images/profile3/image_02.jpg",
      "images/profile3/image_03.jpg",
      "images/profile3/image_04.jpg",
      "images/profile3/image_05.jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 4 ================= */

  4: {
    name: "Upasana",

    location: "Mumbai",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ Upasana 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile4/image_01.jpg",
      "images/profile4/image_02.jpg",
      "images/profile4/image_03.jpg",
      "images/profile4/image_04.jpg",
      "images/profile4/image_05.jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 5 ================= */

  5: {
    name: "Neha",

    location: "Mumbai",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ Neha💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile5/image_01.jpg",
      "images/profile5/image_02.jpg",
      "images/profile5/image_03.jpg",
      "images/profile5/image_04.jpg",
      "images/profile5/image_05.jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 6 ================= */
  6: {
    name: "Neha",

    location: "Mumbai",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ Neha 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile6/image_01.jpg",
      "images/profile6/image_02.jpg",
      "images/profile6/image_03.jpg",
      "images/profile6/image_04.jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 7 ================= */
  7: {
    name: "Sharnam More",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile7/image_01.jpg",
      "images/profile7/image_02.jpg",
      "images/profile7/image_03.jpg",
      "images/profile7/image_04.jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 8 ================= */
  8: {
    name: "Anjali",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile8/image_01.jpg",
      "images/profile8/image_02.jpg",
      "images/profile8/image_03.jpg",
      "images/profile8/image_04.jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 9================= */
  9: {
    name: "Kiran",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile9/image_(80).jpg",
      "images/profile9/image_(78).jpg",
      "images/profile9/image_(79).jpg",
      "images/profile9/image_(80).jpg",
      "images/profile9/image_(81).jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 10 ================= */
  10: {
    name: "Kiran",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile10/image_01.jpg",
      "images/profile10/image_02.jpg",
      "images/profile10/image_03.jpg",
      "images/profile10/image_04.jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 11 ================= */
  11: {
    name: "Kiran",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile11/image_(44).jpg",
      "images/profile11/image_(45).jpg",
      "images/profile11/image_(46).jpg",
      "images/profile11/image_(47).jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 12 ================= */
  12: {
    name: "Suman",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Suman💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile12/image_(48).jpg",
      "images/profile12/image_(49).jpg",
      "images/profile12/image_(50).jpg",
      "images/profile12/image_(51).jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 13 ================= */
  13: {
    name: "Rani",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Rani💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile13/image_(52).jpg",
      "images/profile13/image_(53).jpg",
      "images/profile13/image_(54).jpg",
      "images/profile13/image_(55).jpg",
      "images/profile13/image_(56).jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 14 ================= */
  14: {
    name: "Roshni",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Roshni💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile14/image_(57).jpg",
      "images/profile14/image_(58).jpg",
      "images/profile14/image_(59).jpg",
      "images/profile14/image_(60).jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 15 ================= */
  15: {
    name: "Anushka",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Anushka💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile15/image_(61).jpg",
      "images/profile15/image_(62).jpg",
      "images/profile15/image_(63).jpg",
      "images/profile15/image_(64).jpg",
    ],

    whatsapp: "https://wa.me/91XXXXXXXXXX",
  },
  /* ================= PROFILE 16================= */
  16: {
    name: "Riya",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Riya 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile16/image_(66).jpg",
      "images/profile16/image_(67).jpg",
      "images/profile16/image_(68).jpg",
      "images/profile16/image_(69).jpg",
    ],

    whatsapp: "https://wa.me/91XXXXXXXXXX",
  },
  /* ================= PROFILE 17================= */
  17: {
    name: "Heena",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Heena 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile17/image_(70).jpg",
      "images/profile17/image_(71).jpg",
      "images/profile17/image_(72).jpg",
      "images/profile17/image_(73).jpg",
    ],

    whatsapp: "https://wa.me/91XXXXXXXXXX",
  },
  /* ================= PROFILE 18================= */
  18: {
    name: "Bhumika",

    location: "Delhi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Bhumika 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile18/image_(74).jpg",
      "images/profile18/image_(75).jpg",
      "images/profile18/image_(76).jpg",
      "images/profile18/image_(77).jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 19================= */
  19: {
    name: "Puja",

    location: "Delhi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Puja 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile19/image_(1).jpg",
      "images/profile19/image_(30).jpg",
      "images/profile19/image_(31).jpg",
      "images/profile19/image_(32).jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 20================= */
  20: {
    name: "Nandani",

    location: "Mumbai",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Nandani 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile20/image_ (6).jpg",
      "images/profile20/image_ (7).jpg",
      "images/profile20/image_ (8).jpg",
      "images/profile20/image_ (9).jpg",
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 21================= */
  21: {
    name: "Varsha",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Varsha 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile21/image_ (5).jpg",
      "images/profile21/image_ (4).jpg",
      "images/profile21/image_ (3).jpg",
      "images/profile21/image_ (2).jpg",
      
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 22================= */
  22: {
    name: "Anchal",

    location: "Mumbai",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Anchal 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
      "images/profile22/image_ (26).jpg",
      "images/profile22/image_ (27).jpg",
      "images/profile22/image_ (28).jpg",
      "images/profile22/image_ (29).jpg",
    
      
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 23================= */
  23: {
    name: "Shivani",

    location: "Mumbai",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Shivani 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
    "images/profile23/image_ (10).jpg",
    "images/profile23/image_ (11).jpg",
    "images/profile23/image_ (12).jpg",
    "images/profile23/image_ (13).jpg",
  
    
      
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 24================= */
  24: {
    name: "Kuritka",

    location: "Mumbai",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Kuritka 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
    "images/profile24/image_ (14).jpg",    
    "images/profile24/image_ (15).jpg",    
    "images/profile24/image_ (16).jpg",    
    "images/profile24/image_ (17).jpg",    
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 25================= */
  25: {
    name: "Radhika",

    location: "Mumbai",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Radhika 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
    "images/profile25/image_ (18).jpg",    
    "images/profile25/image_ (19).jpg",    
    "images/profile25/image_ (20).jpg",    
    "images/profile25/image_ (21).jpg",    
    ],

    whatsapp: "https://wa.me/9241271123",
  },
  /* ================= PROFILE 26================= */
  26: {
    name: "Nishu",

    location: "Ranchi",

    description:
      "☎️ᴄᴀʟʟ ᴍᴇ  Nishu 💯%ʀᴇᴀʟ ꜱᴇʀᴠɪᴄᴇ 1ʜʀ 𝟭𝟱𝟬𝟬 2ʜʀꜱ 𝟮𝟱𝟬𝟬 ɴɪɢʜᴛ 𝟰𝟬𝟬𝟬 ʜᴏᴍᴇ❣️ Low price hand to hand payment Vip 💯% genuine safe and secure home and hotel delivery CASH PEYMENT 100% GENUINE PROFILE BEST SERVICE AVAILABLE",

    images: [
    "images/profile26/image_ (22).jpg",    
    "images/profile26/image_ (24).jpg",    
    "images/profile26/image_ (25).jpg",    
    "images/profile26/image_ (23).jpg",    
     
    ],

    whatsapp: "https://wa.me/9241271123",
  },
};

/* =====================================================
   GET PROFILE ID FROM URL
===================================================== */

const urlParams = new URLSearchParams(window.location.search);

const profileId = urlParams.get("id") || "1";

/* =====================================================
   GET SELECTED PROFILE
===================================================== */

const profile = profiles[profileId] || profiles[1];

/* =====================================================
   LOAD PROFILE
===================================================== */

function loadProfile() {
  /* ================= ELEMENTS ================= */

  const profileName = document.getElementById("profileName");

  const profileLocation = document.getElementById("profileLocation");

  const profileDescription = document.getElementById("profileDescription");

  const infoLocation = document.getElementById("infoLocation");

  const mainPhoto = document.getElementById("mainPhoto");

  const whatsappButton = document.getElementById("whatsappButton");

  const bookingButton = document.getElementById("bookingButton");

  /* ================= NAME ================= */

  if (profileName) {
    profileName.textContent = profile.name;
  }

  /* ================= LOCATION ================= */

  if (profileLocation) {
    profileLocation.textContent = "📍 " + profile.location;
  }

  /* ================= DESCRIPTION ================= */

  if (profileDescription) {
    profileDescription.textContent = profile.description;
  }

  /* ================= INFORMATION ================= */

  if (infoLocation) {
    infoLocation.textContent = profile.location;
  }

  /* ================= MAIN IMAGE ================= */

  if (mainPhoto && profile.images.length > 0) {
    mainPhoto.src = profile.images[0];

    mainPhoto.alt = profile.name + " profile photo";
  }

  /* ================= WHATSAPP ================= */

  if (whatsappButton) {
    whatsappButton.href = profile.whatsapp;
  }

  /* ================= BOOKING ================= */

  if (bookingButton) {
    bookingButton.href = "https://docs.google.com/forms/d/e/1FAIpQLSfVe1q5mJTsLUEpRzniIOCiScTZqVDYCrYS-Hu_U9S0NFKj3A/viewform" + profileId;
  }

  /* ================= GALLERY ================= */

  loadGallery();
}

/* =====================================================
   CREATE GALLERY
===================================================== */

function loadGallery() {
  const sidePhotos = document.getElementById("sidePhotos");

  if (!sidePhotos) {
    return;
  }

  /* Clear old thumbnails */

  sidePhotos.innerHTML = "";

  /* ================= NO IMAGES ================= */

  if (profile.images.length === 0) {
    sidePhotos.innerHTML = `
            <div class="gallery-empty">
                No photos available
            </div>
        `;

    return;
  }

  /* ================= CREATE THUMBNAILS ================= */

  profile.images.forEach(function (imagePath, index) {
    /* Create container */

    const galleryPhoto = document.createElement("div");

    galleryPhoto.className = "gallery-photo";

    /* First image active */

    if (index === 0) {
      galleryPhoto.classList.add("active");
    }

    /* Create image */

    const image = document.createElement("img");

    image.src = imagePath;

    image.alt = profile.name + " profile photo " + (index + 1);

    /* ================= CLICK ================= */

    image.addEventListener("click", function () {
      changeMainPhoto(image, galleryPhoto);
    });

    /* ================= IMAGE ERROR ================= */

    image.addEventListener("error", function () {
      console.error("Image not found:", imagePath);

      galleryPhoto.style.display = "none";
    });

    /* Add image */

    galleryPhoto.appendChild(image);

    /* Add thumbnail */

    sidePhotos.appendChild(galleryPhoto);
  });
}

/* =====================================================
   CHANGE MAIN PHOTO
===================================================== */

function changeMainPhoto(image, galleryPhoto) {
  const mainPhoto = document.getElementById("mainPhoto");

  if (!mainPhoto || !image) {
    return;
  }

  /* Change main image */

  mainPhoto.src = image.src;

  /* Remove active */

  document.querySelectorAll(".gallery-photo").forEach(function (item) {
    item.classList.remove("active");
  });

  /* Add active */

  if (galleryPhoto) {
    galleryPhoto.classList.add("active");
  }
}

/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  loadProfile();
});
