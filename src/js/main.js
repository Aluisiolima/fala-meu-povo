const nav = document.getElementById('nav.componentes');



async function buscarComponentes(componente,localComponents) {
    
    try {
        const response = await fetch(`./components/${componente}.html`);
        if (!response.ok) {
            console.error("NOT found componente");
            return "NOT found componente";
        }
        const data = await response.text();
        localComponents.innerHTML = data;

    } catch (error) {
        console.error("Error fetching componente:", error);
        return "Error fetching componente";
    }
}





//funcao idiota so pra apaga mesmo jaja vai embora 
function enviarProspota(){
    window.location.href = "./pages/tela2.html";
}
function geradorDeTela(telas){
    for (let chaves in telas) {
        buscarComponentes(`${chaves}` ,telas[chaves])
    }
}
geradorDeTela(pages)