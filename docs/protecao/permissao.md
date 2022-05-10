---
title: Permissões da Proteção
description: Como dar permissão para outros jogadores na sua proteção.
sidebar_position: 2
---

# Permissões na Proteção

Argumentos entre \[ \] são obrigatórios - Argumentos entre \( \) são opcionais.

:::tip Permissão em todas as proteções!
Para adicionar ou remover permissões em **todas** as suas proteções basta **ficar fora da proteção** e executar os comandos abaixo.
:::

:::tip Permissão para membros do clã!
Use **group.\[tag-do-clã\]** para adicionar ou remover permissões de todos os membros do clã.  
Exemplo: **/accesstrust group.cdl** ou **/containertrust group.cdl**  
Permissão para todos os membros do clã com TAG **CDL**.
:::

:::tip Permissão para todos os jogadores
Use **public** para dar permissão a todos os jogadores.  
Exemplo: **/accesstrust public** ou **/containertrust public**
:::

## Permissão AccessTrust

> **Permissão para acessar sua proteção.**

Permissão para usar botões, alavancas, camas e definir `/home` na sua proteção ou sub-proteção.
* `/accesstrust [jogador]`  
  * `/accesstrust ThiagoROX`

## Permissão ContainerTrust

> **Permissão para acessar baús na sua proteção.**

Permissão para usar botões, alavancas, camas, mesa de trabalho, **baús**, fornalhas, animais e aldeões na sua proteção ou sub-proteção.  
* `/containertrust [jogador]`  
  * `/containertrust ThiagoROX`

## Permissão PermissionTrust

> **Permissão para gerenciar sua proteção.**

Jogador poderá dar permissões que ele possui para outros jogadores.  
Exemplo: O jogador que tenha a permissão `PermissionTrust` e `Trust` poderá dar a permissão `Trust` para outros jogadores.
* `/permissiontrust [jogador]`  
  * `/permissiontrust ThiagoROX`

## Permissão Trust

> **Permissão para construir na sua proteção.**

Permissão para usar botões, alavancas, camas, mesa de trabalho **baús**, fornalhas, animais e aldeões **e construir** na sua proteção ou sub-proteção.
* `/trust [jogador]`  
  * `/trust ThiagoROX`

## Listar jogadores com permissão na proteção

**Comando para listar jogadores com permissão na proteção.**  
* `/trustlist`

## Remover permissões de jogadores

**Comando para remover permissões de um jogador na sua proteção.**  
* `/untrust [jogador]`  
  * `/untrust ThiagoROX`