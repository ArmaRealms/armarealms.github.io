---
title: Proteção Básica
description: Como criar, expandir, excluir e listar uma proteção.
sidebar_position: 1
---

import APITable from '/src/components/APITable';

# Proteção Básica

## Comandos

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/prot` ou `/plot` | Comandos para abrir o menu de proteção | 
| `/claim (tamanho)` | Criar uma proteção no local que você estiver |
| `/claimexpand [tamanho]` | Aumentar o tamanho da proteção |
| `/claimlist` | Liste as informações das proteções | 
| `/abandonallclaims` | Apague todas as suas proteções no server | 
| `/abandonclaim` | Apague a proteção em que você está localizado |
| `/claimbuyblocks [quantia]` | Compre blocos de proteção |
| `/claimsellblocks [quantia]` | Venda seus blocos de proteção | 

</APITable>

## Criar Proteção

### Utilizando a Pá de Ouro

> Método recomendado!

1. Envie `/kit prot` e coloque a `pá de ouro` na mão.
2. Clique com botão direito nas quinas da proteção.

<details>
  <summary><b>Exemplo de como criar uma proteção com imagens!</b></summary>
  <div>
    <p>1. Vamos proteger a casa da imagem abaixo:</p>
    <img src="https://i.imgur.com/V482iUY.png" alt="Primeiro passo"></img>
    <br></br>
    <p>2. Envie `/kit prot` e coloque a pá de ouro na mão.</p>
    <br></br>
    <p>3. Faça uma torre no meio do local onde deseja proteger e suba nela:</p>
    <img src="https://i.imgur.com/OdiCgWg.png" alt="Quarto passo"></img>
    <br></br>
    <p>4. Clique com o botão direito para selecionar a primeira quina:</p>
    <img src="https://i.imgur.com/pi5wwS7.png" alt="Quinto passo"></img>
    <p>No local onde for selecionada a primeira quina aparecerá um bloco de diamante.</p>
    <br></br>
    <p>5. Clique com o botão direito para seleciona a segunda quina:</p>
    <img src="https://i.imgur.com/DQO5LXB.png" alt="Sexto passo"></img>
    <p>No local onde for selecionada a segunda quina aparecerá uma pedra luminosa.</p>
    <br></br>
    <p>6. <b>Pronto, proteção criada com sucesso!</b></p>
    <br></br>
    <p>7. Com o graveto na mão, clique com o **botão direito** no local para ver sua proteção:</p>
    <img src="https://i.imgur.com/kjbiJ4w.png" alt="Oitavo passo"></img>
    <br></br>
    <p>8. A proteção será circulada por bloco de ouro com pedra luminosa nas quinas:</p>
    <img src="https://i.imgur.com/3IuYIct.png" alt="Nono passo"></img>
  </div>
</details>

### Utilizando Comandos

1. Envie `/kit prot` e coloque a `pá de ouro` na mão.
2. Envie `/claim <tamanho>` para proteger o local onde você estiver.  

🎯 Exemplo: `/claim 10` - Proteger 10 blocos para cada lado onde você estiver.

## Visualizar Proteção

1. Envie `/kit prot` e coloque o graveto na mão.
2. Mire no local onde deseja inspecionar proteções.
3. Clique com o **botão direito** para visualizar a proteção.

## Expandir Proteção

1. Envie `/claimexpand <tamanho>` virado para a direção que deseja expandir.  

🎯 Exemplo 1: `/claimexpand 10` - Expande em 10 blocos para a direção que você estiver olhando.  
🎯 Exemplo 2: `/claimexpand -5` - Diminui em 5 blocos a proteção na direção que você estiver olhando.

## Excluir Proteção

1. Envie `/abandonclaim` dentro da proteção que você deseja excluir.

Você pode usar `/abandonallclaims` para excluir todas as suas proteções do servidor.

⚠️ [Lojas físicas](../lojas/jogador.md) serão removidas quando a proteção for excluida!

## Listar Proteção

1. Envie `/claimlist` para listar todas as suas proteções.

## Comprar Blocos de Proteção

> Cada bloco de proteção custa $10 coins. 

1. Envie `/claimbuyblocks [quantia]` para comprar blocos de proteção.

🎯 Exemplo: `/claimbuyblocks 100` - Comprará 100 blocos de proteção por 1.000 coins

## Vender Blocos de Proteção

> Cada bloco de proteção vale $8 coins. 

1. Envie `/claimsellblocks [quantia]` para comprar blocos de proteção.

🎯 Exemplo: `/claimsellblocks 100` - Venderá 100 blocos de proteção por 800 coins