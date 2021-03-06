---
title: Loja dos Jogadores
description: Tudo sobre a loja física dos jogadores.
sidebar_position: 3
---

import APITable from '/src/components/APITable';

# Loja Física dos Jogadores

Loja físca por baús serve para que jogadores possam comprar e vender grande quantidade de itens.

## Quantidade de Lojas

<APITable>

| Cargo    | Quantidade de Lojas |
| :------: | :-----------------: |
| Membro   | 20 lojas            |
| Premium  | 50 lojas            |
| Master   | 100 lojas           |
| Ultimate | 200 lojas           |

</APITable>

## Comandos

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/ploja` | Listar comandos da loja de jogador |
| `/ploja create [valor]` | Criar uma loja com o valor especificado |
| `/ploja amount [quantidade]` | Definir a quantidade de itens da loja |
| `/ploja buy` | Alterar a loja para o modo de compra |
| `/ploja sell` | Alterar a loja para o modo de venda |
| `/ploja price [novo-preço]` | Alterar o preço de compra ou venda da loja |
| `/ploja remove` | Remover a loja que você estiver olhando |
| `/ploja size [quantidade]` | Alterar a quantidade do pack da loja |
| `/ploja item` | Alterar o item da loja |
| `/ploja list` | Listar todas as suas lojas no server |
| `/ploja buscar comprando [item]` | Pesquisar lojas que compram o item pesquisado |
| `/ploja buscar vendendo [item]` | Pesquisar lojas que vendem o item pesquisado |

</APITable>

## Criar uma Loja

> ⚠️ [Lojas são protegidas pelo sistema de proteção de terrenos!](../protecao/basica.md)  
> ⚠️ Lojas físicas serão removidas quando a proteção for excluida!  
> ⚠️ Custo: ¢100 coins por loja criada

> [Toda loja será criada no modo de venda de itens, para saber como alterar clique aqui!](#alterar-o-modo-da-loja)

1. Coloque o item e a quantidade que deseja comprar ou vender na mão.
2. Segure **shift** e clique com o **botão esquerdo** no baú.
3. Em seguida envie o valor de venda ou compra no chat.

## Painel de Controle da Loja

Para acessar o painel de controle da loja basta clicar com o **botão direito** na placa da loja.

⚠️ É possível alterar várias configurações da loja pelo painel de controle!

**Exemplo do Painel de Constrole da Loja:**  
![imagem](https://i.imgur.com/mUsQCqZ.png)

## Pesquisar Lojas

1. Envie `/ploja buscar [comprando|vendendo] [item]` para encontrar lojas.

**Atalhos do comando:**
- `/plojabuscar [comprando|vendendo] [item]`
- `/slojabuscar [comprando|vendendo] [item]`

**Primeiro argumento:**
- `comprando` = Loja que compra o item pesquisado
- `vendendo` = Loja que vende o item pesquisado

**Segundo argumento:**
- `tipo de item` = pesquisa pelo tipo de item (independete do nome do item)
  - Segure o item e envie `/iteminfo` para saber o tipo do item.
- `nome do item` = pesquisa pelo nome do item (itens renomeados)

🎯 Exemplo 1: `/ploja buscar comprando Voto` - Pesquisar lojas que compram chaves de voto.  
🎯 Exemplo 2: `/ploja buscar vendendo  BEEF` - Pesquisar lojas que vendem filé.

## Alterar o Item da Loja

1. Coloque o item que deseja comprar ou vender na mão.
2. Mire na placa da loja que deseja alterar.
3. Envie `/ploja item` para alterar o item da loja.

## Alterar o Modo da Loja

### Alterar para Modo de Compra

1. Mire na placa da loja que deseja alterar.
2. Envie `/ploja buy` para alterar a loja.

### Alterar para Modo de Venda

1. Mire na placa da loja que deseja alterar.
1. Envie `/ploja sell` para alterar a loja.

## Alterar o Valor da Loja

> ⚠️ Custo: ¢50 coins por loja alterada

1. Envie `/ploja price [novo-preço]` olhando para a loja que deseja alterar o valor.

🎯 Exemplo: `/ploja price 200`

## Alterar o Pack da loja

1. Envie `/ploja size [quantidade]` olhando para a loja que deseja alterar a quantidade do pack.

🎯 Exemplo: `/ploja size 64`

## Remover uma Loja

1. Envie `/ploja remove` olhando para a loja que deseja remover