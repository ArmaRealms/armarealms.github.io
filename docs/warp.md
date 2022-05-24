---
title: Warp
description: Tudo sobre o sistema de warp de jogadores.
sidebar_position: 11
---

# Warp de Jogadores

## Comandos

| Comando | Descrição |
| ------- | --------- |
| `/go` ou `/pwarp` | Abrir o menu principal de Warps de jogadores |
| `/go [warp]` | Teleportar para a warp de um jogador |
| `/go abrir [categoria]` | Abrir as warps da categoria |
| `/go ajuda` | Listar comandos do sistema de warp |
| `/go avaliar [warp] [valor]` | Avaliar uma warp de 1 a 5 |
| `/go ban definir [warp] [jogador]` | Banir jogador da warp |
| `/go ban remover [warp] [jogador]` | Desbanir jogador da warp |
| `/go ban listar [warp]` | Listar jogadores banidos da warp |
| `/go categoria [warp] [categoria]` | Definir a categoria da warp | 
| `/go definir [warp]` | Definir uma warp Na localização atual |
| `/go descricao definir [warp] [descrição]` | Definir descrição de uma warp |
| `/go descricao remover [warp]` | Remvoer descrição de uma warp |
| `/go listar` | Listar todas warps disponíveis |
| `/go quantia` | Visualizar quantas warps você possui |
| `/go redefinir [warp]` | Redefinir a localização de uma warp |
| `/go remover [warp]` | Remover uma warp | 
| `/go renomear [warp] [novo-nome]` | Renomear uma warp | 
| `/go senha definir [warp] [senha]` | Definir senha de uma warp |
| `/go senha remover [warp]` | Remover senha de uma warp |
| `/go travar [warp]` | Travar ou Destravar uma warp |

## Como Criar uma Go

1. Envie `/go definir [nome-da-warp]` no local onde deseja criar uma warp.

Exemplo: `/go definir LojaDeLivros` - Criar uma warp com nome `LojaDeLivros`

## Categorias da Go

1. Envie `/go categoria [warp] [categoria]` para definir uma categoria da warp.

Exemplo: `/go categoria LojaDeLivros loja` - Definir a warp na categoria `Loja`

## Categorias Disponíveis

- Cidade (Listar warp de uma cidade ou vila)
- Farm (Listar warp que tenha locais para obter XP)
- Loja (Listar warp que tenha [lojas físicas](./lojas/jogador.md))

Toda loja ao ser criada é adicionada a categoria `Outras`.

## Descrição de uma Go

### Definir uma Descrição

1. Envie `/go descricao definir [warp] [descrição]` para definir a descrição da warp.

Exemplo: `/go descricao definir LojaDeLivros Loja TOP!` - Definir a descrição `Loja TOP!` para a warp.

A descrição pode conter no máximo 30 caracteres.

### Remover uma Descrição

1. Envie `/go descricao remover [warp]` para remover a descrição da warp.

Exemplo: `/go descricao remover LojaDeLivros` - Remover a descrição da warp.
