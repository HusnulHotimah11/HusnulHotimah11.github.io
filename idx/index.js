var menus = document.querySelectorAll(".menu");
menus.forEach((menu) => {
    console.log('Hai ',menu);

    menu.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("clicked", menu);
        var submenu = menu.getElementsByClassName("submenu");
        Array.from(submenu).forEach((item_menu) => {
            item_menu.classList.toggle("muncul");
        });
    });
});