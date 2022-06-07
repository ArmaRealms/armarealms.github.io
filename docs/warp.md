---
title: Warp
description: Tudo sobre o sistema de warp de jogadores.
sidebar_position: 12
---

import APITable from '/src/components/APITable';

# Warp de Jogadores

Warp de jogadores (Go) serve para que os jogadores tenham um ponto de teleporte público pelo mapa.

## Comandos

<APITable>

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
| `/go descricao remover [warp]` | Remover descrição de uma warp |
| `/go listar` | Listar todas warps disponíveis |
| `/go quantia` | Visualizar quantas warps você possui |
| `/go redefinir [warp]` | Redefinir a localização de uma warp |
| `/go remover [warp]` | Remover uma warp | 
| `/go renomear [warp] [novo-nome]` | Renomear uma warp | 
| `/go senha definir [warp] [senha]` | Definir senha de uma warp |
| `/go senha remover [warp]` | Remover senha de uma warp |
| `/go travar [warp]` | Travar ou destravar uma warp |

</APITable>

## Criar uma Go

> ⚠️ Custo: $5.000 coins

1. Envie `/go definir [nome-da-warp]` no local onde deseja criar uma warp.

🎯 Exemplo: `/go definir Livrum` - Criar uma warp com nome `Livrum`

## Slot VIP da Go

Slot VIP são locais especiais para que sua warp tenha maior visibilidade.  
Sua Go ficará disponível no menu ao usar `/go` ou `/pwarp`.  

> ⚠️ Custo: $10.000 coins  
> ⏲️ Duração: 7 dias

1. Acesse o menu com `/go` ou `/pwarp`.
2. Clique na `Estrela do Nether`.
3. Envie no chat o nome da sua Go.

![imagem](https://i.imgur.com/h2ZT97X.png)

## Categorias da Go

> ⚠️ Toda loja ao ser criada é adicionada a categoria `Outras`.

### Definir uma Categoria

1. Envie `/go categoria [warp] [categoria]` para definir uma categoria da warp.

🎯 Exemplo: `/go categoria Livrum loja` - Definir a warp na categoria `Loja`

#### Lista de Categorias:
- Cidade (Warp de cidade ou vila)
- Farm (Warp que tenha locais para obter XP)
- Loja (Warp que tenha [lojas físicas](./lojas/ploja.md))
- Outras (Warp sem categoria definida)

### Abrir Categoria Especifica

1. Envie `/go abrir [categoria]` para abrir menu da categoria especifica.

🎯 Exemplo: `/go abrir mywarps` - Abrir menu com todas as suas warps definidas.

#### Lista de Categorias:
- all (Todas as Warps disponíveis)
- favourite (Suas warps favoritas)
- mywarps (Suas warps definidas)
- visitedwarps (Warps que você visitou)
- cidade (Warp de cidade ou vila)
- farm (Warp que tenha locais para obter XP)
- loja (Warp que tenha lojas físicas)
- outras (Warp sem categoria definida)

## Descrição da Go

### Definir uma Descrição

> ⚠️ A descrição pode conter no máximo 30 caracteres.

1. Envie `/go descricao definir [warp] [descrição]` para definir a descrição da warp.

🎯 Exemplo: `/go descricao definir Livrum Loja TOP!` - Definir a descrição `Loja TOP!` para a warp.

### Remover uma Descrição

1. Envie `/go descricao remover [warp]` para remover a descrição da warp.

🎯 Exemplo: `/go descricao remover Livrum` - Remover a descrição da warp.

## Redefinir uma Go

> ✅ Não perde dados de visitação e avaliações ao renomear uma warp.  
> ⚠️ Custo: $5.000 coins

1. Envie `/go redefinir [warp]` para redefinir a warp no local onde você estiver.

## Renomear uma Go

> ✅ Não perde dados de visitação e avaliações ao renomear uma warp.  
> ⚠️ Custo: $5.000 coins

1. Envie `/go renomear [warp] [nome-novo]` para renomear a warp.

🎯 Exemplo: `/go renomear Livrum Carbon` - Renomear warp para `Carbon`.

## Banimento da Go

### Banir um Jogador

1. Envie `/go ban definir [warp] [jogador]` para banir jogador da warp.

🎯 Exemplo: `/go ban definir Livrum ThiagoROX` - Banir o jogador ThiagoROX da warp.

### Desbanir um Jogador

1. Envie `/go ban remover [warp] [jogador]` para desbanir um jogador da warp.

🎯 Exemplo: `/go ban remover Livrum ThiagoROX` - Desbanir o jogador ThiagoROX da warp.

### Listar Jogadores Banidos

1. Envie `/go ban listar [warp]` para listar jogadores banidos da warp.

🎯 Exemplo: `/go ban listar Livrum` - Listar jogadores banidos da warp.

## Avaliar uma Go

> ⚠️ Valor da avaliação deve ser entre `1` (ruim) e `5` (ótima).

1. Envie `/go avaliar [warp] [valor]` para avaliar uma warp.

🎯 Exemplo: `/go avaliar Livrum 5` - Avaliar em 5 (ótima) a warp.

## Senha da Go

### Adicionar Senha

1. Envie `/go senha definir [warp] [senha]` para definir a senha da warp.

### Remover Senha

1. Envie `/go senha remover [warp]` para remover a senha da warp.

## Travar uma Go

> ⚠️ A warp não funcionará para nenhum jogador além de seu dono.  
> ⚠️ A warp não aparecerá na sugestão de comandos ou no menu `/go`.

1. Envie `/go travar [warp]` para travar ou destravar uma go.

🎯 Exemplo: `/go travar Livrum` - Travar ou destravar a warp.

## Excluir uma Go

> ⚠️ Cuidado ao usar este comando! Ação irreversível!

1. Envie `/go remover [warp]` para excluir a warp especificada.

🎯 Exemplo: `/go remover Livrum` - Excluir a warp `Livrum`.