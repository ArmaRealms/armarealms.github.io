---
title: Loja dos Jogadores
description: Tudo sobre a loja física dos jogadores.
sidebar_position: 2
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
| `/ploja finditem [comprando|vendendo] [tipo de item|nome do item]` | Pesquisar lojas de outros jogadores |

</APITable>

## Criar uma Loja

> ⚠️ [Lojas são protegidas pelo sistema de proteção de terrenos!](../protecao/basica.md)  
> ⚠️ Lojas físicas serão removidas quando a proteção for excluida!  
> ⚠️ Custo: $100 coins.

> [Toda loja será criada no modo de venda de itens, para saber como alterar clique aqui!](#alterar-o-modo-da-loja)

### Sem Comando

> Método recomendado!

1. Coloque o item e a quantidade que deseja comprar ou vender na mão.
2. Segure **shift** e clique com o **botão esquerdo** no baú.
3. Em seguida envie o valor de venda ou compra no chat.

### Com Comando

1. Coloque o item e a quantidade que deseja comprar ou vender na mão.
2. Mire no baú que deseja transformar em loja.
3. Envie o comando `/ploja create [valor]` para criar uma loja

## Painel de Controle da Loja

Para acessar o painel de controle da loja basta clicar com o **botão direito** na placa da loja.

⚠️ É possível alterar várias configurações da loja pelo painel de controle!

**Exemplo do Painel de Constrole da Loja:**  
![imagem](https://i.imgur.com/mUsQCqZ.png)

## Pesquisar Lojas

1. Envie `/ploja finditem [comprando|vendendo] [tipo de item|nome do item]` para encontrar lojas.

⚠️ Atalhos: `/plojabuscar` ou `/lojabuscar`

⚠️ **Primeiro argumento do comando:**
- comprando = Loja que estiver comprando o item pesquisado
- vendendo = Loja que estiver vendendo o item pesquisado

⚠️ **Segundo argumento do comando:**
- tipo de item = pesquisa pelo tipo de item (independete do nome do item)
  - Segure o item e envie `/iteminfo` para saber o tipo do item.
- nome do item = pesquisa pelo nome do item (itens renomeados)

🎯 Exemplo 1: `/ploja finditem comprando Voto` - Pesquisar lojas que estejam comprando chaves de voto.
🎯 Exemplo 2: `/ploja finditem vendendo EXPERIENCE_BOTTLE` - Pesquisar lojas que estejam vendendo frasco de experiência.

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

> ⚠️ Custo: $50 coins

1. Envie `/ploja price [novo-preço]` olhando para a loja que deseja alterar o valor.

🎯 Exemplo: `/ploja price 200`

## Alterar o Pack da loja

1. Envie `/ploja size [quantidade]` olhando para a loja que deseja alterar a quantidade do pack.

🎯 Exemplo: `/ploja size 64`

## Remover uma Loja

1. Envie `/ploja remove` olhando para a loja que deseja remover