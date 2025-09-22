let listaDeamigos = [];

function adicionarAmigo() {

    let lista =  document.getElementById('amigo').value
    if(lista.trim()==""){
        alert("Por favor, insira um nome.");
        return;
      }
 listaDeamigos.push(lista);
 document.getElementById('amigo').value = "";
 atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  for (let i = 0; i < listaDeamigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = listaDeamigos[i];
    lista.appendChild(li);
  }
}