
/*jquery "referente ao modal"*/

$(document).ready(function(){
    $('.modal').modal();
  });



/*javascript*/

/* input do 'criar' tarefa*/
let input=document.querySelector('#icon_prefix2');

/*input do botao Cadastrar*/
let botao=document.querySelector('#cadastro');

/*input da lista de atividades*/

let lista=document.querySelector('#listagem');

/*input do botao abre-tabela*/

let abrir=document.querySelector('#mostrar');


let tarefas=[
  'tomar banho',
  'jantar',
  'estudar javascript',
  'ler um livro',
  'ver um filme'
];


function renderizarTarefas() {

  //limpar lista de refas antes de renderizar novamente a tela.
  listagem.innerHTML='';
  for (tarefa of tarefas) {
      //criando itens da lista
  let itemLista=document.createElement('li');
     //adcionar classes aos itens da lista
  itemLista.setAttribute('class','collection-item');
  /*aqui*/

  //deletando item da lista
  itemLista.onclick=function(){
    deletarTarefa(this);
  }

  /*aqui*/
    //criar um texto
   let itemTexto=document.createTextNode(tarefa);
    //adcionar texto nos itens da lista
   itemLista.appendChild(itemTexto);
    //adcionar o item da lista na lista
   lista.appendChild(itemLista);
  }
}

renderizarTarefas();
/*ate aqui tudo certo*/

//criando nova tarefa
cadastro.onclick=function(){
    //recuperando o valor do input
    let novaTarefa=input.value;
    //incluindo a nova tarefa no array de tarefas
    tarefas.push(novaTarefa);
    //renderizando a tela
    renderizarTarefas();
    //limpar input
    input.value='';
}

/*ate aqui tudo certo*/

function deletarTarefa(tar) {
  //remove tarefas do array
  tarefas.splice(tarefas.indexOf(tar.textContent),1);
  //renderiza a tela após excluir tarefa
  renderizarTarefas();
}
