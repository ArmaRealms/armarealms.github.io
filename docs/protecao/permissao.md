---
title: Permissões da Proteção
description: Como dar permissão para outros jogadores na sua proteção.
sidebar_position: 2
---

# Permissões na Proteção

Argumentos entre \[ \] são obrigatórios - Argumentos entre \( \) são opcionais.

:::info Permissão em todas as proteções!
Para adicionar ou remover permissões em **todas** as suas proteções basta **ficar fora da proteção** e executar os comandos abaixo.
:::

:::warning Permissão para membros do clã!
Use **group.\[tag-do-clã\]** para adicionar ou remover permissões de todos os membros do clã.  
Exemplo: **/accesstrust group.cdl** ou **/containertrust group.cdl**  
Permissão para todos os membros do clã com TAG **CDL**.
:::

:::warning Permissão para todos os jogadores
Use **public** para dar permissão a todos os jogadores.  
Exemplo: **/accesstrust public** ou **/containertrust public**
:::

## Permissão AccessTrust

**Permissão para acessar sua proteção.**
Permissão para usar botões, alavancas, camas e definir `/home` na sua proteção ou sub-proteção.

Comando: `/accesstrust [jogador]`
Exemplo: `/accesstrust ThiagoROX`

## Permissão ContainerTrust

**Permissão para acessar baús na sua proteção.**
Permissão para usar botões, alavancas, camas, mesa de trabalho, **baús**, fornalhas, animais e aldeões na sua proteção ou sub-proteção.

Comando: `/containertrust [jogador]`
Exemplo: `/containertrust ThiagoROX`

:::info Acesso ao Baú do Fim!
A utilização de baú do fim não precisa de permissão.
:::

## Permissão PermissionTrust

> **Permissão para gerenciar sua proteção.**
Jogador poderá dar permissões que ele possui para outros jogadores.
O jogador que tenha a permissão `PermissionTrust` e `Trust` poderá dar a permissão `Trust` para outros jogadores.

Comando: `/permissiontrust [jogador]`
Exemplo: `/permissiontrust ThiagoROX`

## Permissão Trust

> **Permissão para construir na sua proteção.**
Permissão para usar botões, alavancas, camas, mesa de trabalho **baús**, fornalhas, animais e aldeões **e construir** na sua proteção ou sub-proteção.

Comando: `/trust [jogador]`
Exemplo: `/trust ThiagoROX`

## Listar jogadores com permissão na proteção

**Comando para listar jogadores com permissão na proteção.**

Comando: `/trustlist`

## Remover permissões de jogadores

**Comando para remover permissões de um jogador na sua proteção.**

Comando: `/untrust [jogador]`
Exemplo: `/untrust ThiagoROX`
