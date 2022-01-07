function TabelaMulti (num) { 
  // todo: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.

  let tabela = [];

  for (let l = 0; l <= num; l++) {

      tabela.push (l)
      tabela [l] = []

  for (let c = 0; c <= num; c++) {

      tabela [l].push (l * c)
  }
  }
  console.table (tabela)
}
