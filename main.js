//DESAFIO 1
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function mensagem(endereco) {
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`
}
console.log(`Desafio 1: `, mensagem(endereco));

//DESAFIO 2
function pares(x, y) {
    var pares = "";
    for (x; x <= y; x++) {
        if (x % 2 == 0) {
            pares += x + `, `;
        }
    }
    return pares;
}
console.log(`Desafio 2: `, pares(32, 321));

//DESAFIO 3
function temHabilidade(skills) {
    var valor;
    if (skills.indexOf("ReactJS")) {
        valor = true;
    }
    else {
        valor = false;
    }
    return valor;
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(`Desafio 3: `, temHabilidade(skills));

//DESAFIO 4
function experiencia(anos) {
    var experiencia;
    if (anos <= 1) {
        experiencia = `Iniciante`;
    }
    else if (anos <= 3) {
        experiencia = `Iniciante`;
    }
    else if (anos <= 6) {
        experiencia = `Avançado`;
    }
    else {
        experiencia = 'Jedi Master';
    }
    return experiencia;
}
var anosEstudo = 7;
console.log(`Desafio 4: `, experiencia(anosEstudo));

//DESAFIO 5
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function habilidade(usuarios) {
    var mensagem;
    for (var i = 0; i < usuarios.length; i++) {
        mensagem = `O ${usuarios[i].nome} possui as habilidades: ${usuarios[i].habilidades}`
        console.log(mensagem);
    }
}
console.log("Desafio 5: ");
habilidade(usuarios);

//DESAFIO 6
function checaIdade(idade) {
        return new Promise(function(resolve, reject){
            if(idade > 18){
                resolve();
            }
            else{
                reject();
            }
        });
    
   }
   checaIdade(20)
    .then(function(response) {
    console.log("Desafio 6: Maior que 18");
    })
    .catch(function(error) {
    console.log("Desafio 6: Menor que 18");
    });

    //DESAFIO 7
    var repos = [];

    function searchRepo(){
        var inputElement = document.querySelector('#app input');
        var usuario = inputElement.value;
        repos = [];
        axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then(function(response){
            for(var i = 0; i < response.data.length; i++){
                repos.push(response.data[i].name);
                inputElement.value = '';
                carregarRepos();
            }
            })
        .catch(function(error){
            inputElement.value = '';
            carregarRepos();
            if(error.response.status == 404){
                alert('Usuário não encontrado!')
            }
            else{
                alert('Erro')
            }
        });
        
    }

    function carregarRepos()
    {
        var listElement = document.querySelector('#app ul');
        listElement.innerHTML = '';
        for (repo of repos){
            var repoElement = document.createElement('li');
            var repoText = document.createTextNode(repo);
            repoElement.appendChild(repoText);
            listElement.appendChild(repoElement);
        }
    }