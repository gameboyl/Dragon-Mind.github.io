document.addEventListener('DOMContentLoaded', function() {

    let keyCode;

    let body = document.querySelector("body");
    let title = document.querySelector("title");

    let join = document.getElementById("join");
    let bodyID = document.getElementById("bodyID");
    let HideBody = document.getElementById("HideBody");
    let FrontPage = document.getElementById("FrontPage");
    let RulesPopup = document.getElementById("RulesPopup");
    let rules = document.getElementById("rules");
    let RulesWritten = document.getElementById("RulesWritten");
    let ErrorAccept = document.getElementById("ErrorAccept");
    let next = document.getElementById("next");
    let LastPage = document.getElementById("LastPage")

    let red = document.querySelector(".red");
    let redc = document.querySelector(".redc");
    let bluec = document.querySelector(".bluec");
    let greenc = document.querySelector(".greenc");
    let EnterName = document.querySelector(".EnterName");
    let password = document.querySelector(".password");
    let show = document.querySelector(".show");
    let Submit = document.querySelector(".Submit");
    let spanned = document.querySelector(".spanned");
    let code = document.querySelector(".code");
    let name = document.querySelector(".name");
    let Heading = document.querySelector(".Heading");
    let ErrorPassword = document.querySelector(".ErrorPassword");
    let ErrorName = document.querySelector(".ErrorName");
    let greet = document.querySelector(".greet");
    let blur = document.querySelector(".blur");
    let buttonT = document.querySelector(".buttonT");
    let textButtonT = document.querySelector(".textButtonT");
    let accept = document.querySelector(".accept");
    let acceptT = document.querySelector(".acceptT");
    let li = document.querySelector(".li");
    let HeadingOfTerms = document.querySelector(".HeadingOfTerms");

    const IfVerified = () => {
        if (localStorage.getItem('name') == 'gameboyl') {
            FrontPage.style.display = "none";
            document.body.style.background = "gray";
            RulesPopup.style.display = "block";
            title.innerHTML = "Terms and Conditions";
            RulesPopup.style.top = "10px";
        }
    };

    const ClickEvent = () => {
        join.style.filter = "brightness(0.8)";
        setTimeout(() => {
            join.style.filter = "";
        }, 0);
        bodyID.style.display = "none";
        HideBody.style.display = "block";

        document.addEventListener('keydown', function() {
            keyCode = event.which || event.keyCode;
            keyChar = String.fromCharCode(keyCode);

            if (keyCode == 13) {
                Submit.click();
            }
        });
    };

    const ShowStart = () => {
        if (
            event.target == HideBody ||
            event.target == EnterName ||
            event.target == password ||
            event.target == join ||
            event.target == show ||
            event.target == Submit ||
            event.target == spanned ||
            event.target == code ||
            event.target == name ||
            event.target == Heading ||
            event.target == ErrorPassword ||
            event.target == ErrorName ||
            event.target == HeadingOfTerms
        ) {
            return;
        } else {
            HideBody.style.display = "none";
            bodyID.style.display = "block";
        }
    };

    const ShowPass = () => {
        if (password.type == "password") {
            password.type = "text";
        } else if (password.type == "text") {
            password.type = "password";
        }
    };

    const verified = () => {
        Submit.style.filter = "brightness(0.7)";

        setTimeout(() => {
            Submit.style.filter = "brightness(0.9)";
        }, 10);

        Submit.onmouseenter = () => {
            Submit.style.filter = "brightness(0.8)";
        };

        if (
            EnterName.value == "FUCK" ||
            EnterName.value == "shit" ||
            EnterName.value == "bitch" ||
            EnterName.value == "dick" ||
            EnterName.value == "ass" ||
            EnterName.value == "retard" ||
            EnterName.value == "moron"
        ) {
            ErrorName.innerHTML = "No swears allowed in users names";
        } else if (EnterName.value.length < 8) {
            ErrorName.innerHTML = "Name must be at least 8 letters long";
        } else if (EnterName.value.length > 12) {
            ErrorName.innerHTML = "Name must be below or should be 12 letters length only";
        } else if (password.value != "4DM6") {
            if (password.value.length == 0) {
                ErrorPassword.innerHTML = "Please enter a password";
            } else {
                ErrorPassword.innerHTML = "Invalid password";
            }
        } else {
            greet.innerHTML = `Welcome: <br> ${EnterName.value}`;
            Submit.style.filter = "brightness(0.7)";
            HideBody.classList.add("blur");
            localStorage.setItem("name", EnterName.value);

            body.removeEventListener("click", ShowStart);

            setTimeout(() => {
                FrontPage.style.display = "none";
                document.body.style.background = "gray";
                RulesPopup.style.display = "block";
                title.innerHTML = "Terms and Conditions";
                greet.style.bottom = "1000px";
            }, 2000);
        }
    };

    const ShowTermsAndConditions = () => {
        if (event.target == buttonT || event.target == textButtonT) {
            rules.style.display = "block";
        }
    };

    const RemoveTerms = () => {
        if (
            event.target == buttonT ||
            event.target == textButtonT ||
            event.target == rules ||
            event.target == accept ||
            event.target == acceptT ||
            event.target.closest(".li") ||
            event.target == next ||
            event.target == RulesWritten
        ) {
            return;
        } else {
            rules.style.display = "none";
        }
    };

    if (localStorage.getItem("TermsAndConditions") == "true") {
        console.log("Hello")

        setTimeout(() => {
            RulesPopup.style.display = "none";
            document.body.style.background = "white";

            LastPage.style.display = "block";

            title.innerHTML = "Home"

            body.removeEventListener('click', ShowStart)
        }, 0);
    }

    const PageAfterNext = () => {
        if (accept.checked) {
            console.log("It's checked");
            rules.style.display = "none";

            localStorage.setItem("TermsAndConditions", "true");

            RulesPopup.style.display = "none";
            document.body.style.background = "white";
            LastPage.style.display = "block";
        } else {
            console.log("It's not checked");
            ErrorAccept.innerHTML = "Please accept the terms and conditions";
            next.style.bottom = "10px";
        }
    };

    join.addEventListener("click", ClickEvent);
    body.addEventListener("click", ShowStart);
    show.addEventListener("click", ShowPass);
    Submit.addEventListener("click", verified);
    buttonT.addEventListener("click", ShowTermsAndConditions);
    body.addEventListener("click", RemoveTerms);
    IfVerified();
    next.addEventListener("click", PageAfterNext);
});
