/* =====================================================
   BOOKING PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Booking JS Loaded");


    /* =================================================
       ELEMENTS
    ================================================= */

    const bookingForm =
        document.getElementById("bookingForm");

    const service =
        document.getElementById("service");

    const dateInput =
        document.getElementById("date");

    const timeInput =
        document.getElementById("time");

    const nameInput =
        document.getElementById("name");

    const mobileInput =
        document.getElementById("mobile");

    const emailInput =
        document.getElementById("email");

    const messageInput =
        document.getElementById("message");

    const terms =
        document.getElementById("terms");

    const summaryService =
        document.getElementById("summaryService");

    const summaryPrice =
        document.getElementById("summaryPrice");

    const paymentSection =
        document.getElementById("paymentSection");

    const copyUpi =
        document.getElementById("copyUpi");

    const transactionId =
        document.getElementById("transactionId");

    const finalSubmit =
        document.getElementById("finalSubmit");

    const paymentError =
        document.getElementById("paymentError");

    const successMessage =
        document.getElementById("successMessage");


    /* =================================================
       CHECK
    ================================================= */

    if (!bookingForm) {
        console.error("bookingForm not found.");
        return;
    }


    /* =================================================
       TODAY DATE
    ================================================= */

    if (dateInput) {

        const today =
            new Date()
                .toISOString()
                .split("T")[0];

        dateInput.min = today;
    }


    /* =================================================
       SERVICE CHANGE
    ================================================= */

    if (service) {

        service.addEventListener("change", () => {

            const option =
                service.options[
                    service.selectedIndex
                ];

            const serviceName =
                option.value;

            const price =
                Number(
                    option.dataset.price || 0
                );


            if (summaryService) {

                summaryService.textContent =
                    serviceName ||
                    "Not selected";
            }


            if (summaryPrice) {

                summaryPrice.textContent =
                    "₹" +
                    price.toLocaleString("en-IN");
            }

        });
    }


    /* =================================================
       MOBILE ONLY NUMBERS
    ================================================= */

    if (mobileInput) {

        mobileInput.addEventListener("input", () => {

            mobileInput.value =
                mobileInput.value.replace(
                    /\D/g,
                    ""
                );

        });
    }


    /* =================================================
       CONFIRM BOOKING
       FORM -> PAYMENT
    ================================================= */

    bookingForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            /* -----------------------------------------
               VALUES
            ----------------------------------------- */

            const name =
                nameInput.value.trim();

            const mobile =
                mobileInput.value.trim();

            const email =
                emailInput.value.trim();

            const selectedService =
                service.value;

            const date =
                dateInput.value;

            const time =
                timeInput.value;

            const message =
                messageInput.value.trim();


            /* -----------------------------------------
               VALIDATION
            ----------------------------------------- */

            if (
                !name ||
                !mobile ||
                !email ||
                !selectedService ||
                !date ||
                !time
            ) {

                alert(
                    "Please complete all required fields."
                );

                return;
            }


            /* -----------------------------------------
               MOBILE
            ----------------------------------------- */

            if (
                !/^[0-9]{10}$/.test(mobile)
            ) {

                alert(
                    "Please enter a valid 10 digit mobile number."
                );

                mobileInput.focus();

                return;
            }


            /* -----------------------------------------
               TERMS
            ----------------------------------------- */

            if (!terms.checked) {

                alert(
                    "Please accept the confirmation checkbox."
                );

                terms.focus();

                return;
            }


            /* -----------------------------------------
               PRICE
            ----------------------------------------- */

            const option =
                service.options[
                    service.selectedIndex
                ];

            const price =
                Number(
                    option.dataset.price || 0
                );


            /* -----------------------------------------
               BOOKING DATA
            ----------------------------------------- */

            const bookingData = {

                name: name,

                mobile: mobile,

                email: email,

                service: selectedService,

                servicePrice: price,

                confirmationAmount: 300,

                date: date,

                time: time,

                message: message,

                paymentStatus:
                    "Pending",

                bookingStatus:
                    "Awaiting Payment",

                createdAt:
                    new Date().toISOString()
            };


            /* -----------------------------------------
               SAVE
            ----------------------------------------- */

            sessionStorage.setItem(
                "bookingData",
                JSON.stringify(bookingData)
            );


            console.log(
                "Booking Data:",
                bookingData
            );


            /* -----------------------------------------
               HIDE FORM
            ----------------------------------------- */

            bookingForm.style.display =
                "none";


            /* -----------------------------------------
               SHOW PAYMENT
            ----------------------------------------- */

            paymentSection.classList.add(
                "show"
            );

            paymentSection.style.display =
                "block";


            /* -----------------------------------------
               SCROLL
            ----------------------------------------- */

            setTimeout(() => {

                paymentSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        }
    );


    /* =================================================
       COPY UPI
    ================================================= */

    if (copyUpi) {

        copyUpi.addEventListener(
            "click",
            async () => {

                const upiElement =
                    document.getElementById("upiId");


                if (!upiElement) {
                    return;
                }


                const upi =
                    upiElement.textContent.trim();


                try {

                    await navigator.clipboard
                        .writeText(upi);


                    copyUpi.textContent =
                        "Copied!";


                    setTimeout(() => {

                        copyUpi.textContent =
                            "Copy";

                    }, 1500);


                } catch (error) {

                    console.error(
                        "Copy error:",
                        error
                    );

                    alert(
                        "Could not copy UPI ID. Please copy it manually."
                    );

                }

            }
        );
    }


    /* =================================================
       TRANSACTION INPUT
    ================================================= */

    if (transactionId) {

        transactionId.addEventListener(
            "input",
            () => {

                transactionId.value =
                    transactionId.value
                        .replace(/\s/g, "");


                if (paymentError) {

                    paymentError.style.display =
                        "none";

                }

            }
        );
    }


    /* =================================================
       FINAL SUBMIT
       PAYMENT -> SUCCESS
    ================================================= */

    if (finalSubmit) {

        finalSubmit.addEventListener(
            "click",
            () => {

                const txn =
                    transactionId.value.trim();


                /* -------------------------------------
                   EMPTY
                ------------------------------------- */

                if (!txn) {

                    paymentError.textContent =
                        "Please enter your transaction/reference ID.";

                    paymentError.style.display =
                        "block";

                    transactionId.focus();

                    return;
                }


                /* -------------------------------------
                   LENGTH
                ------------------------------------- */

                if (txn.length < 6) {

                    paymentError.textContent =
                        "Please enter a valid transaction/reference ID.";

                    paymentError.style.display =
                        "block";

                    transactionId.focus();

                    return;
                }


                /* -------------------------------------
                   GET BOOKING
                ------------------------------------- */

                const savedData =
                    sessionStorage.getItem(
                        "bookingData"
                    );


                let bookingData = null;


                if (savedData) {

                    try {

                        bookingData =
                            JSON.parse(savedData);

                    } catch (error) {

                        console.error(
                            "Invalid booking data.",
                            error
                        );

                    }
                }


                if (!bookingData) {

                    alert(
                        "Booking data not found. Please start the booking again."
                    );

                    return;
                }


                /* -------------------------------------
                   PAYMENT DATA
                ------------------------------------- */

                bookingData.transactionId =
                    txn;

                bookingData.paymentAmount =
                    300;

                bookingData.paymentStatus =
                    "Submitted";

                bookingData.bookingStatus =
                    "Payment Verification Pending";

                bookingData.submittedAt =
                    new Date().toISOString();


                /* -------------------------------------
                   SAVE FINAL BOOKING
                ------------------------------------- */

                sessionStorage.setItem(
                    "finalBooking",
                    JSON.stringify(
                        bookingData
                    )
                );


                console.log(
                    "Final Booking:",
                    bookingData
                );


                /* -------------------------------------
                   HIDE PAYMENT
                ------------------------------------- */

                paymentSection.classList.remove(
                    "show"
                );

                paymentSection.style.display =
                    "none";


                /* -------------------------------------
                   SHOW SUCCESS
                ------------------------------------- */

                successMessage.classList.add(
                    "show"
                );

                successMessage.style.display =
                    "block";


                /* -------------------------------------
                   DISABLE BUTTON
                ------------------------------------- */

                finalSubmit.disabled =
                    true;

                finalSubmit.textContent =
                    "Submitted ✓";


                /* -------------------------------------
                   SCROLL SUCCESS
                ------------------------------------- */

                setTimeout(() => {

                    successMessage.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 100);

            }
        );
    }

});