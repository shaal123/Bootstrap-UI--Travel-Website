
/* =====================================================
   SEARCH FUNCTION
===================================================== */

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const searchTerm =
        searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {

        alert("Please enter something to search.");

        return;
    }


    /*
        Search inside:
        - Features
        - Gallery
        - Cards
    */

    const searchableItems =
        document.querySelectorAll(
            ".feature-box, .gallery-item, .custom-card"
        );


    let found = false;


    searchableItems.forEach(function (item) {

        const text =
            item.innerText.toLowerCase();


        if (text.includes(searchTerm)) {

            item.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


            /*
                Highlight the matching item
            */

            item.style.outline =
                "3px solid #0d6efd";


            setTimeout(function () {

                item.style.outline = "";

            }, 2000);


            found = true;
        }

    });


    if (!found) {

        alert("No matching content found.");

    }

});


/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   MOBILE NAVBAR CLOSE
===================================================== */

const navLinks =
    document.querySelectorAll(
        "#mainNavbar .nav-link"
    );

const navbarCollapse =
    document.getElementById("mainNavbar");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        /*
            Bootstrap navbar is collapsed
            on screens smaller than 992px.
        */

        if (window.innerWidth < 992) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(
                    navbarCollapse
                );


            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});

