function enviarProspota(){
    window.location.href = "./pages/tela2.html";
}

async function buscarComponentes(componente) {
    try {
        const response = await fetch(`./components/${componente}.html`);
        if (!response.ok) {
            console.error("NOT found componente");
            return "NOT found componente";
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching componente:", error);
        return "Error fetching componente";
    }
}

const nav = document.getElementById('nav.componentes');
buscarComponentes("nav").then(data => {
    nav.innerHTML = data;
});
