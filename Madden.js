import { TeamInventory } from "./inventory.js";

function renderProduct(TeamInventory) {
    var source = document.getElementById("item").innerHTML;
    var template = Handlebars.compile(source);
    var html = template({
        product: TeamInventory
    });
    var product = document.querySelector("#product");

    product.insertAdjacentHTML("beforeend", html);
}
function renderSlide() {
    var picks = document.querySelectorAll("div.team");

    for (const pick of picks) {
        pick.addEventListener("click", () => {
            document.querySelectorAll("#product > *").forEach(div => {
                div.style.display = "none";
                div.classList.remove("d-flex");
            });
            product.classList.add("showing");

            document.querySelector(`#team-${pick.dataset.team}`).style.display =
                "flex";
        });
    }
}

renderProduct(TeamInventory);
renderSlide();
