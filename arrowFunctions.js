/* As funções de array foram criadas para facilitar 
na manipulação de arrays Javascript. Essas funções de array
são implementações de funções continuamente utilizadas no dia a dia.
-> São para adicionar valor, remover valor, percorrer a lista, 
juntar listas, fazer filtros e entre outros.

1. Add valor: Para o começo e o final, há funções próprias para isso,
são elas unshift e push.*/
//Add final
let linguagens = ["Javascript", "PHP", "Python"];
linguagens.push("Java");
console.log(linguagens);

console.log("__________________");
console.log("add valor inicio");

//Add inicio
linguagens.unshift("Cobol");
console.log(linguagens); 

//Splice - para remover ou add no meio, nesse caso eu add na posição 2,
//que é depois de javascript

console.log("__________________");
console.log("add valor ao meio");

let posicaoDoRuby = 2;
linguagens.splice(posicaoDoRuby, 0, "Ruby");
console.log(linguagens);

//ForEach - percorre a lista sem fazer alterações
console.log("__________________");
console.log("ForEach");

linguagens.forEach(linguagem => { 
    console.log(`Linguagem: ${linguagem}`);
  });
