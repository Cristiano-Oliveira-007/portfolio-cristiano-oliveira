const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    
    const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
    alert("Mensagem enviada com sucesso!");
    form.reset();
    } else {
    alert("Erro ao enviar, tente novamente.");
    }
});