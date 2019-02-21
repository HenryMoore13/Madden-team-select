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
            // pick.addEventListener("", () => {
            //     if (product.classList.contains("showing")) {
            //         product.classList.remove("showing");
            //     }
            // });

            document.querySelector(`#team-${pick.dataset.team}`).style.display =
                "flex";
        });
    }
}
function endBtn() {
    var ends = document.querySelectorAll(".go-away");
    var slide = document.getElementById("product");

    for (const end of ends) {
        end.addEventListener("click", () => {
            debugger;
            slide.classList.remove("showing");
        });
    }
}

renderProduct(TeamInventory);
renderSlide();
endBtn();
