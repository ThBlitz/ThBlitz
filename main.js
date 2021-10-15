let menue_icon = document.getElementsByClassName("menue_icon")[0];
let menue_bars = document.getElementsByClassName("menu_bars")[0];
let drop_down_menue = document.getElementsByClassName("drop_down_menue")[0];

console.log(drop_down_menue);

menue_icon.addEventListener("click", function() {

    menue_bars.classList.toggle("change");

    if (drop_down_menue.classList.contains("hide")) {
        drop_down_menue.className = drop_down_menue.className.replace(" hide", " unhide");
        menue_icon.className = menue_icon.className.replace(" close", " open");
    } else {
        drop_down_menue.className = drop_down_menue.className.replace(" unhide", " hide");
        menue_icon.className = menue_icon.className.replace(" open", " close");
    }
})
