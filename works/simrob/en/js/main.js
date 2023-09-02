document.addEventListener("DOMContentLoaded", function () {
    const scrollToLinks = document.querySelectorAll('a[href^="#"]');
    scrollToLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.hash.substring(1);
            const targetElement = document.getElementById(targetId) || document.querySelector(`a[name="${targetId}"]`) || document.documentElement;
            const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: targetOffset,
                behavior: "smooth",
            });
        });
    });

    const sendFormButton = document.querySelector(".js-send-form");
    if (sendFormButton) {
        sendFormButton.addEventListener("click", function (e) {
            e.preventDefault();
            const form = document.querySelector(".js-form");
            const successMessage = document.querySelector(".js-form-success");
            const inputs = form.querySelectorAll(".js-input");
            const data = {
                name: "",
                email: "",
                subject: "",
                message: "",
                gdpr: "",
            };

            let errors = Object.keys(data).length;

            inputs.forEach(function (input) {
                if (
                    input.value.trim().length <= 0 ||
                    (input.type === "checkbox" && !input.checked)
                ) {
                    input.closest(".js-input-parent").classList.add("has-error");
                } else {
                    input.closest(".js-input-parent").classList.remove("has-error");
                    data[input.name] = input.value;
                    errors--;
                }
            });

            if (errors === 0) {
                fetch("https://sim-rob.eu/form.php", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (data.status === "ok") {
                            successMessage.style.display = "block";
                            successMessage.scrollIntoView({
                                behavior: "smooth",
                            });
                            form.style.display = "none";
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }
        });
    }

    const navIcons = document.querySelectorAll(".nav-icon");
    navIcons.forEach(function (navIcon) {
        navIcon.addEventListener("click", function () {
            const nextUl = navIcon.nextElementSibling;
            if (nextUl) {
                nextUl.style.display =
                    nextUl.style.display === "block" ? "none" : "block";
            }
            navIcon.classList.toggle("nav-icon-close");
        });
    });
});
