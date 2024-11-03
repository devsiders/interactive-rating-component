function chooseNumber() {
    const buttons = document.querySelectorAll(".number-item");
    let selectedValue = null;

    // Buscar el botón seleccionado
    buttons.forEach(button => {
        if (button.classList.contains("selected")) {
            selectedValue = button.value;
        }
    });

    const error = document.getElementById("error");
    const modal = document.getElementById("myModal");
    const selectedNumberSpan = document.getElementById("number");

    if (!selectedValue) {
        error.style.display = "block";
        document.querySelector(".card").style.paddingBottom = "300px";
    } else {
        selectedNumberSpan.textContent = selectedValue; 
        modal.style.display = "block"; 
        document.querySelector(".card").style.display = "none";
    }
}

// Añadir eventos de clic para los botones de número
document.querySelectorAll(".number-item").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".number-item").forEach(btn => btn.classList.remove("selected"));
        this.classList.add("selected");
    });
});
