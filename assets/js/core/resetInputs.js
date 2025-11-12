export function resetInputs() {
    window.addEventListener("load", () => {
        document.querySelectorAll("input").forEach(input => input.value = "");
    });
}