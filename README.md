# Pokédex
**1. Motivação**  
O aplicativo foi desenvolvido após um treinamento de React Native, onde o desafio final era criar essa aplicação. Foi fornecido o layout pelo Figma e construído sozinho por mim, após finalizadas as aulas, essa foi a forma de conclusão do treinamento.  
**2. Tecnologias Utilizadas** 
- JavaScript
- React Native
- Axios
- Json Server
 
**3. Telas**  
Foram criadas ao todo 6 (seis) telas, são elas:  
**3.1 Listagem de Pokémons**  
Consiste em listar todos os Pokémons registrados na API, apresentando imagem em miniatura, nome do personagem e tipo. Permite a renderização de mais de um tipo para cada Pokémon, sendo tudo isso feito de maneira dinâmica.  
![gif da listagem de Pokémons](https://i.ibb.co/NnPT8t9/listagem.gif)  
**3.2 Detalhes dos Pokémons**  
É possível clicar na listagem de Pokémons e entrar nos detalhes do personagem, onde é apresentando os níveis de cada habilidade, os textos descritivos e os movimentos.  
Perceba que a cor de fundo de cada personagem é de acordo com o seu tipo principal, ou seja, se o tipo principal for **water**, o fundo terá a cor azul, se for **fire** terá a cor laranja, com detalhes em gradiente.  
![gif de detalhes de Pokémons parte 1 ](https://i.ibb.co/3pPWs4c/detalhes.gif)
![gif de detalhes de Pokémons parte 2 ](https://i.ibb.co/JK08HKf/detalhes-2.gif)  
**3.3 Listagem de Movimentos**  
O aplicativo também lista todos os movimentos disponibilizados pela API. O diferencial dessa listagem é que o tipo do movimento fica bem evidente na listagem, destacando-se no canto direito.  
![gif listagem dos movimentos](https://i.ibb.co/Prg7cXx/listagem-moves.gif)  
**3.4 Detalhes dos Movimentos**  

Os detalhes dos movimentos são muito semelhantes a tela de detalhes dos Pokémons, note que as únicas diferenças significantes acabam sendo a remoção da tabview e a substituição da imagem pelo tipo do item.  
**3.5 Listagem dos Itens**  
A listagem de itens mostra uma miniatura da imagem do item, o respectivo nome e o preço do artefato.  
![gif listagem dos itens](https://i.ibb.co/kJQQMP2/listagem-itens.gif)  
**3.6 Detalhes dos Itens**  
A tela de detalhes dos itens é uma versão simplificada da tela de detalhes dos Pokémons, onde apenas foi trocado o componente de tabview por um componente que renderiza na tela os scores. Perceba que agora a cor de fundo gradiente não é dinâmica igual a outra tela de detalhes, isso porque os movimentos não possuem um tipo associado a eles.  
![gif detalhes dos itens](https://i.ibb.co/98c5qch/detalhes-itens.gif)
