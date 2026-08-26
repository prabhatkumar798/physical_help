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

    whatsapp: "https://wa.me/91XXXXXXXXXX",
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

    whatsapp: "https://wa.me/91XXXXXXXXXX",
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

    whatsapp: "https://wa.me/91XXXXXXXXXX",
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

    whatsapp: "https://wa.me/91XXXXXXXXXX",
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

    whatsapp: "https://wa.me/91XXXXXXXXXX",
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

    whatsapp: "https://wa.me/91XXXXXXXXXX",
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

    whatsapp: "https://wa.me/91XXXXXXXXXX",
  },
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

    whatsapp: "https://wa.me/91XXXXXXXXXX",
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
    bookingButton.href = "booking.html?id=" + profileId;
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
