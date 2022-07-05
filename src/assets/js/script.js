const cabecalho = document.querySelector('header');

const twettar = document.querySelector('button');
const textarea = document.querySelector('textarea');
const feed = document.querySelector('.conteudo-Principal__lista-Tweet')

function pegarTweet(e){
  e.preventDefault();
  const tweetTextarea = textarea.value;

  criarTweet(tweetTextarea);
}

twettar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto) {
  
// CRIAR O TWEET
// TEXTO DO TWEET -> tweetTexto
// NOME  ''        -> **
// FOTO ''         -> 
// NOME DO USUARIO ->**
// HORARIO  


    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    //objeto
    const tweet = {
      nome: 'Cleitim',
      foto: '/src/assets/imagens/twitter.png',
      usuario: '@CleitimMilGrau',
      texto: tweetTexto,
      tempo: ` ${hora}:${minutos}`
    };
    
    listarTemplateTweet(tweet)

}

function listarTemplateTweet(tweet){

  //Desestruturando as informações do tweet
  const {nome,foto,usuario,texto, tempo} = tweet;
  // Com isso podemos pegar as informações separadas
  // Basta passar para os elementos criados agora.
  // console.log(nome)
  // console.log(foto)
  // console.log(usuario)
  // console.log(texto)
  // console.log(tempo)

  // Criando elementos para listar o Template
  let li = document.createElement('li');
  li.classList.add('conteudo-Principal__tweet')

  let img = document.createElement('img');
  img.src = foto;
  img.classList.add('tweet__foto-Perfil')

  let div = document.createElement('div');
  div.classList.add('tweet__conteudo');

  let h2 = document.createElement('h2');
  h2.innerText = nome;

  let span = document.createElement('span');
  span.innerText = ` ${usuario} - ${tempo}`

  let p = document.createElement('p');
  p.innerText = texto;
  
  //Adicionando elementos dentro da div
  div.appendChild(h2)
  div.appendChild(span)
  div.appendChild(p)

  //Adicionando elementos dentro da li
  li.appendChild(img)
  li.appendChild(div)

  feed.appendChild(li)

  textarea.value = '';
  // Zerando  o texto depois kakaka
  
}




