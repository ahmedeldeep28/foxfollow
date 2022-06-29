let open_sidebar = document.getElementById("open_sidebar");
let close_sidebar = document.getElementById("close_sidebar");
let show_text_btn = document.getElementById("show_text_btn");

open_sidebar.addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("active")
})
close_sidebar.addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("active")
})
show_text_btn.addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("show-text")
    document.getElementById("content-page").classList.toggle("show-text")
})