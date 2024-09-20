console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toninho DIVO</title>
    <style>
        body {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        .text {
            margin: 10px;
        }
    </style>
</head>
<body>

<script>
    const frase = "Toninho DIVO";
    const cores = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#E74C3C", "#3498DB"];
    const tamanhos = ["20px", "30px", "40px", "50px", "60px", "70px", "80px", "90px", "100px"];

    for (let i = 0; i < 20; i++) {
        const div = document.createElement('div');
        div.className = 'text';
        div.textContent = frase;
        div.style.color = cores[Math.floor(Math.random() * cores.length)];
        div.style.fontSize = tamanhos[Math.floor(Math.random() * tamanhos.length)];
        document.body.appendChild(div);
    }
</script>

</body>
</html>
