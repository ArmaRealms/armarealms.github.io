---
title: Leilão Virtual
description: Tudo sobre o leilão virtual do jogador.
sidebar_position: 4
---

import APITable from '/src/components/APITable';

# Leilão Virtual de Jogadores

Leilão serve para venda de itens de forma virtual, onde o jogador pode comprar e vender estando em qualquer lugar do mapa utilizando seu saldo em coin.

## Quantidade de Itens

<APITable>

| Cargo    | Quantidade de Itens no Leilão |
| :------: | :---------------------------: |
| Membro   | 02 itens |
| Premium  | 05 itens |
| Master   | 10 itens |
| Ultimate | 15 itens |

</APITable>

## Tempo do Item em Leilão

<APITable>

| Cargo    | Tempo do Item no Leilão |
| :------: | :---------------------: |
| Membro   | 02 dias |
| Premium  | 04 dias |
| Master   | 07 dias |
| Ultimate | 10 dias |

</APITable>

## Comandos

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/ah` ou `/leilao` | Abrir o menu principal de leilão |
| `/ah ajuda` | Listar todos os comandos do leilão |
| `/ah vender [preço]` | Vender o item que estiver segurando por coins |
| `/ah vender [preço] cash` | Vender o item que estiver segurando por cash |
| `/ah leiloar [preço]` | Leiloar o item que estiver segurando por coins |
| `/ah leiloar [preço] cash` | Leiloar o item que estiver segurando por cash |
| `/ah cancel [id-do-leilão]` | Cancelar a venda de um item |
| `/ah coletar` | Coletar itens cancelados ou expirados do leilão |
| `/ah abrir [categoria]` | Abrir o menu da categoria especificada |
| `/ah cash vender [quantia] [valor]` | Vender cash por coins. |
| `/ah cash leiloar [quantia] [valor]` | Leiloar cash por coins. |

</APITable>