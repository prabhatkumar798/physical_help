/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const nav = document.querySelector(".nav nav");

    if (!nav) return;

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.padding = "20px";

        nav.style.background = "#101015";
        nav.style.borderBottom = "1px solid #292932";
    }
}


/* =====================================================
   SEARCH PROFILES
===================================================== */

function searchProfiles() {

    const searchInput =
        document.getElementById("searchInput");

    const profileCards =
        document.querySelectorAll(".profile-card");

    if (!searchInput) return;

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    profileCards.forEach(function(card) {

        const name =
            card.dataset.name.toLowerCase();

        const location =
            card.dataset.location.toLowerCase();


        if (
            name.includes(searchText) ||
            location.includes(searchText)
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });
}


/* =====================================================
   LOCATION FILTER
===================================================== */

function filterProfiles() {

    const locationFilter =
        document.getElementById("locationFilter");

    const profileCards =
        document.querySelectorAll(".profile-card");

    if (!locationFilter) return;

    const selectedLocation =
        locationFilter.value;


    profileCards.forEach(function(card) {

        const cardLocation =
            card.dataset.location;


        if (
            selectedLocation === "all" ||
            cardLocation === selectedLocation
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });
}


/* =====================================================
   COMBINED SEARCH + LOCATION FILTER
===================================================== */

function filterAllProfiles() {

    const searchInput =
        document.getElementById("searchInput");

    const locationFilter =
        document.getElementById("locationFilter");

    const profileCards =
        document.querySelectorAll(".profile-card");


    const searchText =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

    const selectedLocation =
        locationFilter
            ? locationFilter.value
            : "all";


    profileCards.forEach(function(card) {

        const name =
            card.dataset.name.toLowerCase();

        const location =
            card.dataset.location.toLowerCase();


        const matchesSearch =
            name.includes(searchText) ||
            location.includes(searchText);


        const matchesLocation =
            selectedLocation === "all" ||
            location === selectedLocation;


        if (
            matchesSearch &&
            matchesLocation
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });
}


/* =====================================================
   CONNECT SEARCH INPUT
===================================================== */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterAllProfiles
    );

}


/* =====================================================
   CONNECT LOCATION FILTER
===================================================== */

const locationFilter =
    document.getElementById("locationFilter");

if (locationFilter) {

    locationFilter.addEventListener(
        "change",
        filterAllProfiles
    );

}


/* =====================================================
   PROFILE CARD CLICK EFFECT
===================================================== */

document
    .querySelectorAll(".profile-card")
    .forEach(function(card) {

        card.addEventListener("mouseenter", function() {

            card.style.cursor = "pointer";

        });

    });


/* =====================================================
   PAGE LOADED
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "EliteProfiles website loaded successfully."
        );

    }
);
function toggleMenu() {

    const nav = document.querySelector(".nav nav");

    if (!nav) return;

    nav.classList.toggle("show");
}