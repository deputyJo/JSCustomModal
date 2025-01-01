
const showModalButton = document.getElementById("show-modal");


//Create the modal
showModalButton.addEventListener("click", () => {
    createModal();
});


//Close the modal
document.body.addEventListener("click", (event) => {

    //button or overlay click
    if (event.target.classList.contains("closeButton") || event.target.classList.contains("modalOverlay")) {
        closeModal();
    }

});



function handleKeyUp(e) {
    if (e.key === "Escape") closeModal();
}



//Create the modal
function createModal(heading = "Welcome!", message = "Click the close button to exit.") {

    const overlay = createElement("div", "modalOverlay");
    const modal = createElement("div", "modal");
    const modalHeading = createElement("h2", "modalHeading", heading);
    const modalParagraph = createElement("p", "modalParagraph", message);
    const closeButton = createElement("button", "closeButton", "close");

    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-labelledby", "modalHeading");
    overlay.setAttribute("aria-describedby", "modalParagraph");

    modal.append(modalHeading, modalParagraph, closeButton);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    document.addEventListener("keyup", handleKeyUp);

    closeButton.focus()

    document.body.style.overflow = "hidden";

}

//Create an element
function createElement(type, className, textContent = "") {
    const element = document.createElement(type);
    element.className = className;
    element.textContent = textContent;

    return element;
}

//Close the modal
function closeModal() {

    document.body.querySelector(".modalOverlay").remove();
    document.removeEventListener("keyup", handleKeyUp);


    document.body.style.overflow = "";
}
