const getUsers = async () => {
    //Hacer un request a la API y obtener un objeto que contenga los datos
    const res = await fetch(`http://localhost:3000/api/publications`, {
        "method": "GET",
        "headers": {
            "Content-Type": "Application/json",
        }
    })
    const data = await res.json();

    printMuro(data);
}
getUsers();

function printMuro(publications){
    let muro = document.getElementById('muro');
    console.log(publications);

    for(publication of publications){
        let date = moment(publication.date).fromNow(); 
        muro.innerHTML += `
        
        <div class="card">
            <div class="card-header">
                ${publication.author}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>${publication.content}.</p>
                <footer class="blockquote-footer"><cite title="Sourcer Title"></cite>${date}</footer>
                </blockquote>
            </div>
        </div>
        <br>
        `;
    };   
}