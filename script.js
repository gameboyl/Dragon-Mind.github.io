document.addEventListener('DOMContentLoaded', function() {
    let join = document.getElementById("join")



    const ClickEvent = () => {
        join.style.filter = "brightness(0.8)"
    }

    join.addEventListener('click', ClickEvent)
})