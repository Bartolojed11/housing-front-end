function initScript() {
    let menu = document.getElementById('mobile_menu');
    let navigation = document.getElementById('navigation');
    let toggle = false;

    menu.addEventListener('click', function() {
        toggle = !toggle;
        console.log(toggle)
        if (toggle) {
            navigation.classList.add("navbar__open");
            navigation.classList.remove("navbar__close");
        } else {
            navigation.classList.add("navbar__close");
            navigation.classList.remove("navbar__open");
        }
    })
}