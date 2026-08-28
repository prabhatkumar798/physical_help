/* =====================================================
   USER CURRENT CITY
===================================================== */

let userCity = "Location unavailable";


/* =====================================================
   SHOW USER CITY
===================================================== */

function showUserCity(city) {

    userCity = city || "Location unavailable";

    document
        .querySelectorAll(".user-location")
        .forEach(function(element) {

            element.textContent =
                "📍 " + userCity;

        });

}


/* =====================================================
   GET USER LOCATION
===================================================== */

function getUserLocation() {

    if (!navigator.geolocation) {

        showUserCity("Location unavailable");

        return;

    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            reverseGeocode(
                latitude,
                longitude
            );

        },

        function(error) {

            console.log(
                "Location permission/error:",
                error.message
            );

            showUserCity(
                "Location unavailable"
            );

        },

        {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 300000
        }

    );

}


/* =====================================================
   REVERSE GEOCODING
===================================================== */

function reverseGeocode(
    latitude,
    longitude
) {

    const url =
        "https://nominatim.openstreetmap.org/reverse" +
        "?format=json" +
        "&lat=" + encodeURIComponent(latitude) +
        "&lon=" + encodeURIComponent(longitude) +
        "&zoom=10" +
        "&addressdetails=1";


    fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    })

    .then(function(response) {

        if (!response.ok) {

            throw new Error(
                "Reverse geocoding failed"
            );

        }

        return response.json();

    })

    .then(function(data) {

        const address =
            data.address || {};


        /*
         * Prefer city.
         * If city is not available,
         * use town / municipality / village.
         */

        const city =
            address.city ||
            address.town ||
            address.municipality ||
            address.village ||
            address.city_district;


        if (city) {

            showUserCity(city);

        } else {

            showUserCity(
                "Location unavailable"
            );

        }

    })

    .catch(function(error) {

        console.error(
            "Reverse geocoding error:",
            error
        );

        showUserCity(
            "Location unavailable"
        );

    });

}


/* =====================================================
   PAGE LOADED
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "EliteProfiles website loaded successfully."
        );


        /*
         * Ask for browser location permission
         */

        getUserLocation();

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const nav =
        document.querySelector(".nav nav");


    if (!nav) return;


    nav.classList.toggle("show");

}