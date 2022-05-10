---
title: Leilão Virtual dos Jogadores
description: Tudo sobre o leilão virtual do jogador.
sidebar_position: 3
---

# Leilão Virtual dos Jogadores

## Comprar Itens do Servidor
1. Acesse a loja com `/sloja` ou `/sshop`;
2. Clique na categoria do item que deseja comprar;
4. Clique com o **botão direito** do mouse no item que deseja comprar.

## Vender Itens para o Servidor
* `/sellgui` - Abrir o menu onde você pode colocar itens que deseja vender, ao fechar o menu os itens serão vendidos.
* `/sellall` - Vende todos os itens do inventário de qualquer categoria.
* `/sellall (categoria)` - Vende todos os itens do inventário que sejam da categoria blocos.
  * `/sellall blocos` - Vender todos os itens da categoria blocos que estiver no inventário.
* `/sell hand ` - Vender o item que estiver segunrando;
* `/sell hand (quantia)` - Vender a quantidade especificada do item que estiver segurando;
  * `/sell hand 32` - Vende 32 itens que estiverem na sua mão.
* `/sell handall` - Vender todos os itens do inventário que seja igual ao que estiver segurando;

# Loja Física do Jogador

**Quantidade de Lojas Físicas por Rank**

|   Rank   | Quantidade de Lojas Físicas |
| :------: | :-------------------------: |
|  Membro  |       20                    |
|  Premium |       50                    |
|  Master  |      100                    |
| Ultimate |      200                    |

## Abrir uma Loja de Venda

Com o item que deseja vender ou comprar na mão, segure **shift** e clique com o **botão esquerdo** no baú. Em seguida envie o valor de venda ou compra no chat. Criar uma loja custa $100 coins.

Toda loja será aberta no modo de venda, você poderá alterar o modo da loja após a sua criação por comando ou usando o painel de controle da loja.

A quantidade do item que você utilizar ao criar a loja será definida como a quantidade do stack que será vendido.

:::danger Atenção!
Lojas são protegidas pelo sistema de proteção de terrenos!

[Saiba como criar uma proteção clicando aqui!](../docs/protecao/basica.md)
:::

## Alterar o Item da Loja

Olhando para a loja que deseja alterar e com o novo item na mão, envie o comando:
* `/ploja item`

## Alterar o Modo da Loja

**Usando o Painel de Controle:**

Clique com o **botão direito** na loja para acessar o painel de controle e clique em **\[Mudar]** ao lado de Modo.

**Usando Comando:**

Olhando para a loja que deseja alterar o modo, envie:
* `/ploja buy` - Comando para **COMPRAR** itens na loja.
* `/ploja sell` - Comando para **VENDER** itens na loja.

## Alterar o Valor da Loja

Alterar o valor de uma loja custa $50 coins


**Usando o Painel de Controle:**

Clique com o **botão direito** na loja para acessar o painel de controle e clique em **\[Mudar]** ao lado de Preço:

**Usando Comando:**

Olhando para a loja que deseja alterar o valor, envie o comando:
* `/ploja price [novo-preço]`
  * `/ploja price 200`

## Alterar o Stack da loja

**Usando o Painel de Controle:**

Clique com o **botão direito** na loja para acessar o painel de controle e clique em **\[Mudar]** ao lado de Stack:

**Usando Comando:**

Olhando para a loja que deseja alterar a quantidade do stack, envie:
* `/ploja size [quantidade]`
  * `/ploja size 64`

## Remover uma Loja

**Usando o Painel de Controle:**

Clique com o **botão direito** na loja para acessar o painel de controle e clique em **\[Remover Loja]**:

**Usando Comando:**

Olhando para a loja que deseja remover, envie o comando:
* `/ploja remove`