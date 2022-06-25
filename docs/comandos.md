---
title: Comandos
description: Lista de comandos disponíveis no servidor.
sidebar_position: 4
---

import APITable from '/src/components/APITable';

# Lista de Comandos

> Use a barra de pesquisa da página para encontrar comandos.

## Diversos

### Informações

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/ajuda` | Listar comandos do servidor |
| `/discord` | Listar o Discord do servidor |
| `/forum` | Listar o Fórum do servidor |
| `/regras` | Listar link com as regras do servidor |
| `/site` | Listar todos os sites do servidor |
| `/topvotos` | Listar os jogadores que mais votaram no server |
| `/vip` | Site da loja onde vende VIP, chave e outros produtos |
| `/vote` ou `/votar` | Listar o site para votar no server |
| `/votos` | Listar sua quantidade de votos |
| `/votos [jogador]` | Listar a quantidade de votos do jogador especificado |
| `/wiki` | Listar a Wiki do servidor |

</APITable>

### Melhorias

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/auto` | Alternar o recolhimento de itens direto para o inventário |
| `/auto aviso` | Alternar o aviso de inventário cheio |
| `/copyright` | Bloquear cópia de mapas (Custo: ¢5.000 coins) |
| `/gps` | Listar quem estiver a 200 blocos de distância |
| `/lixo` | Abrir a lixeira para descartar itens |
| `/original` | Ative o login automático se você tiver minecraft original |
| `/perfil` | Visualizar seu perfil no server |
| `/perfil [jogador]` | Visualizar o perfil do jogador especificado |
| `/playtime` | Visualisar seu tempo de jogo no server |
| `/playtime [jogador]` | Visualisar o tempo de jogo do jogador especificado |
| `/sentar` ou `/chairs` | Alternar o sistema de caideiras |
| `/sort` | Alternar o arganizador de baús automático | 
| `/tags` | Abrir o menu de seleção de tags |

</APITable>

### Kits

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/kits` | Abrir o menu de kits |
| `/kit [nome-do-kit]` | Receber o kit solicitado |
| `/kit fome` | Receber o kit com pães |
| `/kit prot` | Receber o kit de proteção |
| `/kit pvp` | Receber o kit de PVP (Custo: ¢500 coins) | 

</APITable>

### Skins

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/skin set [nick]` | Alterar sua skin usando uma conta original |
| `/skin set [https://site.com/final.png]` | Alterar sua skin usando uma imagem |
| `/skin clear` | Remover sua skin |
| `/skin update` | Atualizar sua skin | 

</APITable>

### Duelo

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/x1` | Listar comandos do sistema de duelo |
| `/x1 [jogador]` | Enviar pedido de duelo para outro jogador |
| `/x1 [jogador] [valor]` | Enviar pedido de duelo com aposta para outro jogador |
| `/x1 accept [jogador]` | Aceitar pedido de duelo do jogador |
| `/x1 deny [jogador]` | Negar pedido de duelo do jogador |
| `/x1 stats` | Listar o seu status de duelos |
| `/x1 stats [jogador]` | Listar status de duelos do jogador |
| `/x1 toggle` | Alternar pedidos de duelo |
| `/topduelos` | Listar melhores duelistas |

</APITable>

### Casamento

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/marry` | Listar todos os comandos do marry |
| `/marry listar` | Listar todos os jogadores casados |
| `/marry casar [jogador]` | Enviar pedido de casamento |
| `/marry divorciar` | Divorciar do seu parceiro(a) |
| `/mc [mensagem]` | Enviarm mensagem para o parceiro |
| `/mca` | Entrar ou sair do chat do casal |
| `/marry tp` | Teleportar para o seu parceiro(a) |
| `/marry home` | Teleportar para a home do casal |
| `/marry sethome` | Definir home do casal |
| `/marry delhome` | Apagar home do casal |
| `/marry presentear` | Presentear o seu parceiro(a) |
| `/marry beijar` | Beijar seu parceiro(a) |
| `/marry abraçar` | Abraçar seu parceiro(a) |
| `/marry seen` | Exibir o último login do seu parceiro(a) |

</APITable>

## Chat

### Mensagem Privada

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/m [jogador] [mensagem]` | Enviar mensagens privadas para outro jogador |
| `/m [jogador]` | Travar ou destravar mensagens privadas com outro jogador |
| `/r [mensagem]` | Responder a última mensagem privada recebida |
| `/ignore [jogador]` | Ignorar ou designorar um jogador |
| `/ignore list` | Listar jogadores ignorados |
| `/msgnotify` | Alternar notificações ao receber mensagens |
| `/msgtoggle` | Alternar recebimento de mensagens privadas |

</APITable>

### Mensagem Global

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/g [mensagem]` | Enviar mensagem no chat global |
| `/g` ou `/global` | Entrar no chat global |
| `/leave global` | Sair do chat global |

</APITable>

### Mensagem Local

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/l [mensagem]` | Envie mensagem no chat local<p>Aparecerá para quem estiver a 200 blocos de distância</p> |
| `/l` ou `/local` | Entrar no chat local |

</APITable>

## Proteção

### Criar Proteções

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/prot` ou `/plot` | Comandos para abrir o menu de proteção | 
| `/claim (tamanho)` | Criar uma proteção no local que você estiver |
| `/extendclaim [tamanho]` | Aumentar o tamanho da proteção |
| `/claimlist` | Liste as informações das proteções | 

</APITable>

### Permissões da Proteção

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/trust [jogador]` | Permitir acesso a construir na sua proteção |
| `/accesstrust [jogador]` | Permitir acesso a cama, portas e etc.. na sua proteção |
| `/containertrust [jogador]` | Permitir acesso a baús na sua proteção |
| `/permissiontrust [jogador]` | Permitir gerenciamento de permissões na sua proteção |
| `/trustnear [jogador]` | Permitir que jogador proteja perto de você |
| `/untrustnear [jogador]` | Remover permissão TrustNear do jogador |
| `/untrust [jogador]` | Remover a permissão do jogador na sua proteção | 
| `/trustlist` | Listar as permissões da proteção que você está |

</APITable>

### Excluir Proteção

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/abandonallclaims` | Apague todas as suas proteções no server | 
| `/abandonclaim` | Apague a proteção em que você está localizado |
| `/abandontoplevelclaim` | Apague uma proteção e todas suas sub-proteções |

</APITable>

### Banimento da Proteção

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/claimkick [jogador]` | Expulsar jogador da proteção |
| `/claimban [jogador]` | Banir outro jogador da proteção |
| `/claimunban [jogador]` | Desbanir outro jogador da proteção |
| `/claimbanlist` | Listar jogadores banidos da sua proteção |

</APITable>

### Criar Sub-Proteção

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/subdivideclaims` | Alterar a pá de ouro para o modo de subdivisão de proteções |
| `/restrictsubclaim` | Restrinjir a sub-proteção para que ela não herde as permissões da proteção principal | 
| `/basicclaims` | Alterar a pá de ouro para o modo básico de proteção |

</APITable>

### Loja de Blocos de Proteção

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/buyclaimblocks [quantia]` | Comprar blocos de proteção |
| `/sellclaimblocks [quantia]` | Vender seus blocos de proteção | 

</APITable>

### Outros Comandos

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/claimexplosions` | Alternar a proteção contra explosões nos terrenos protegidos | 
| `/givepet [jogador]` | Doar seu animal de estimação para outro jogador |

</APITable>

## Teleporte

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/spawn` | Teleportar para o inicio do server |
| `/wild` ou `/rtp mundo` | Teleportar para um lugar aleatório no mundo principal |
| `/recursos` ou `/minerar` | Teleportar para um lugar aleatório do mundo de recursos |
| `/fps` | Teleportar para a arena FPS (mcMMO desativado) |
| `/arena` | Teleportar para a arena (mcMMO ativado) |
| `/camarote` | Teleportar para o camarote de eventos de batalha | 
| `/nether` ou `/rtp nether` | Teleportar aleatório pela dimensão Nether. (Custo: ¢5.000 coins) |
| `/end` ou `/rtp end` | Teleportar aleatório pela dimensão do End. (Custo: ¢5.000 coins) |

</APITable>

### Definir Casa

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/sethome [nome-da-home]` | Definir uma home |
| `/home [nome-da-home]` | Teleportar para a home definida |
| `/delhome [nome-da-home]` | Apagar sua home | 

</APITable>

### Teleporte entre Jogadores

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/tpa [jogador]` | Solicitar a outro jogador teleporte até ele |
| `/tpacancel` | Cancelar a solicitação de teleporte enviada por você |
| `/tpaccept` | Aceitar solicitação de teleporte até você |
| `/tpdeny` | Negar solicitação de teleporte até você | 
| `/tptoggle` | Alternar solicitações de teleporte até você |

</APITable>

### Warps de Jogadores

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/go` ou `/pwarp` | Abrir o menu principal de Warps de jogadores |
| `/go [warp]` | Teleportar para a warp de um jogador |
| `/go abrir [categoria]` | Abrir as warps da categoria |
| `/go ajuda` | Listar comandos do sistema de warp |
| `/go avaliar [warp] [valor]` | Avaliar uma warp de 1 a 5 |
| `/go ban definir [warp] [jogador]` | Banir jogador da warp |
| `/go ban definir [warp] [jogador]` | Desbanir jogador da warp |
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
| `/go travar [warp]` | Travar ou destravar uma warp |

</APITable>

## Economia

### Gerenciar Coins

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/coins [jogador] [valor]` | Transferir coins para outro jogador |
| `/coinsconfirmtoggle` | Alternar a confirmação de pagamento em coins |
| `/coinstoggle` | Alternar o recebimento de coins |
| `/coins` | Visualizar seu saldo em coins |
| `/topcoins (página)` | Listar os jogadores mais ricos em coins do server |

</APITable>

### Gerenciar Cash

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/cash pagar [jogador] [valor]` | Transferir cash para outro jogador |
| `/cash` | Visualizar seu saldo em cash |

</APITable>

### Loteria

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/lot` ou `/loteria` | Abra o menu da loteria para realizar apostas |
| `/lot buy [quantia]` | Comprar bilhetes da loteria |
| `/lot status` | Visualizar status do sorteio atual |
| `/lot togglebuymsg` | Alterar notificações de compras na loteria |
| `/lot toggleremindmsg` | Alterar notificações de sorteios da loteria |

</APITable>

## Lojas

### Loja de Cash

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/loja` ou `/shop` | Abrir o menu de lojas do servidor |
| `/lojacash` ou `/cashloja` | Abrir o menu da loja de cash do servidor |
| `/lojavip` ou `/viploja` | Abrir o menu da loja de VIP do servidor |
| `/lojachave` ou `/chaveloja` | Abrir o menu da loja de chave do servidor |
| `/lojatags` ou `/tagsloja` | Abrir o menu da loja de tag do servidor |

</APITable>

### Loja do Servidor

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/loja` ou `/shop` | Abrir o menu de lojas do servidor |
| `/sloja` ou `/sshop` | Abrir o menu da loja do servidor |
| `/sloja (categoria)`  | Abrir a categoria da loja do servidor especificada |
| `/sellgui` | Abrir o menu onde você pode colocar itens que deseja vender<p>Ao fechar o menu os itens serão vendidos</p> |
| `/sellall` | Vender todos os itens do inventário de qualquer categoria |
| `/sellall (categoria)` | Vender todos os itens do inventário que sejam da categoria blocos |
| `/sellhand ` | Vender o item que estiver segurando |
| `/sellhand (quantia)` | Vender a quantidade especificada do item que estiver segurando |
| `/sellhandall` | Vender todos os itens do inventário que seja igual ao que estiver segurando |

</APITable>

### Loja do Jogador

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/ploja help` | Listar comandos da loja de jogador |
| `/ploja amount` | Definir a quantidade de itens da loja |
| `/ploja buy` | Alterar a loja para o modo de compra |
| `/ploja sell` | Alterar a loja para o modo de venda |
| `/ploja price` | Alterar o preço de compra ou venda da loja |
| `/ploja remove` | Remvover a loja que você estiver olhando |
| `/ploja size` | Alterar a quantidade do pack da loja |
| `/ploja item` | Alterar o item da loja |
| `/ploja list` | Listar todas as suas lojas no server |

</APITable>

### Leilão Virtual

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/ah` ou `/leilao` | Abrir o menu principal de leilão |
| `/ah ajuda` | Listar todos os comandos do leilão |
| `/ah vender [preço]` | Vender um item no leilão |
| `/ah leiloar [preço]` | Leiloar um item no leilão |
| `/ah cancel [id-do-item]` | Cancelar a venda de um item no leilão |
| `/ah coletar` | Coletar itens cancelados ou expirados do leilão |
| `/ah abrir [categoria]` | Abrir o menu da categoria especificada |

</APITable>

## mcMMO

### Habilidades

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/[habilidade]` | Lista as estatísticas de uma habilidade especifica |
| `/acrobacia` | Lista as estatísticas de acrobacia |
| `/[habilidade] ? (página)` | Abre o guia uma habilidade especifica |
| `/acrobacia ? 1` | Abre o guia para a habilidade de acrobacia | 

</APITable>

### Configuração

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/mcability` | Alternar a super habilidade (ativada com botão direito) |
| `/mccooldown` | Exiba o placar de tempo de recarga de super habilidades |
| `/mcnotify` | Alternar notificações de habilidades |
| `/mmoxpbar` | Configurar a barra de XP do mcMMO |
| `/mmoxpbar hide [habilidade]` |  Esconder a barra de XP de uma habilidade |
| `/mmoxpbar show [habilidade]` | Visualizar a barra de XP de uma habilidade |
| `/mmoxpbar reset` | Limpa todas as configurações anteriores | 

</APITable>

### Informação

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/topmcmmo` ou `/mctop` | Lista os top jogadores gerais das habilidades do mcMMO |
| `/inspect [jogador]` | Inspecione o nível de habilidade de outro jogador |
| `/mcrank` | Lista seu ranking em cada habilidade |
| `/mcstats` | Lista estatísticas de todas as habilidades | 
| `/mctop [habilitade]` | Lista os top jogadores numa habilidade especifica |
| `/mctop acrobacia` | Lista os top jogadores na habilidade acrobacia | 

</APITable>

### Equipe

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/p [on/off]` | Alternar o chat da equipe |
| `/p` | Alterna entre on e off o chat da equipe |
| `/p [msg]` | Envie mensagens no chat da equipe sem entrar no chat |
| `/party create [nome] (senha)` | Para criar um equipe |
| `/party disband` | Para apagar sua equipe | 
| `/party help` | Para listar todos os comandos da equipe | 
| `/party itemshare` | Para compartilhar itens recolhidos entre a equipe |
| `/party join [jogador] (senha)` | Para entrar de uma equipe |
| `/party kick [jogador]` | Para expulsar um membro da sua equipe |
| `/party leader [jogador]` | Para transferir o proprietário da equip4e |
| `/party lock` | Para bloquear uma equipe |
| `/party password [senha]` | Para proteger sua equipe com senha | 
| `/party quit` | Para sair de uma equipe | 
| `/party unlock` | Para desbloquear uma equipe |
| `/party xpshare` | Para compatilhar XP com membros da equipe | 

</APITable>

## VIP

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/afk` | Alternar o modo offline |
| `/auto baus` | [Alternar o recolhimento itens ao quebrar baús](./melhorias/auto.md#comandos-para-vip) |
| `/auto blocos` | [Alternar o recolhimento itens ao quebrar blocos](./melhorias/auto.md#comandos-para-vip) |
| `/auto mobs` | [Alternar o recolhimento itens ao matar mobs](./melhorias/auto.md#comandos-para-vip)  |
| `/auto pesca` | [Alternar o recolhimento ao pescar](./melhorias/auto.md#comandos-para-vip) |
| `/bancada` | Abrir o menu de bancadas virtual |
| `/bigorna` | Abrir a bigorna virtual |
| `/bloco` | Transformar itens em blocos<p>Apenas blocos que possam ser transformados em itens novamente</p> |
| `/bloco (hand)`| Transforma o item que você estiver segundando em blocos |
| `/bloco (inventory)` | Transforma todos os itens compatíveis do inventário em blocos |  
| `/bloco (item ou id)` | Transforma o item especificado no comando em blocos |
| `/cartografia` | Abrir a bancada de cartografia virtual |
| `/cor` | Abrir o menu de cores do chat |
| `/cores` | Listar códigos de cores |
| `/cortador` | Abrir o cartador virtual |
| `/craft` | [Abrir o Super Craft virtual](./melhorias/craft.md) |
| `/crafttoggle` | [Ativar ou desativa o Super Craft](./melhorias/craft.md) |
| `/ec` | Abrir o baú do fim virtual |
| `/ferraria` | abrir a bancada de ferreiro virtual |
| `/hat` | Colocar o bloco na mão no lugar do capacete | 
| `/isort` | [Organizar apenas os itens no seu inventário](./melhorias/sort.md#organizar-inventário) |
| `/isortall` | [Organizar itens do seu inventário e da sua hotbar](./melhorias/sort.md#organizar-inventário) |
| `/isorthotbar` |[ Organizar apenas os itens da sua hotbar](./melhorias/sort.md#organizar-inventário) |
| `/isorttoggle` | [Alternar a organização de inventário automaticamente](./melhorias/sort.md#organizar-inventário) |
| `/kit mast` | Receber o KIT semanal Master |
| `/kit prem` | Receber o KIT semanal Premium |
| `/kit ulti` | Receber o KIT semanal Ultimate |
| `/luz` | Ativar oud esativar visão noturna |
| `/nick [novo-nick]` | Adicione cores ao seu nickname<p>[Site com formatação de cores!](https://rgb.armamc.com)</p> |
| `/nick off` | Remover o nick alterado anteriormente | 
| `/rebolo` | Abrir bancada do rebolo virtual |
| `/tear` | Abrir bancada do tear virtual |
| `/v [mensagem]` | Enviar mensagens no chat VIP |
| `/vipconfig` | Abrir menu de configurações VIP |
| `/viploja` | Abrir loja VIP. |
| `/vipmenu` | Abri o menu principal do VIP |
| `/wb` | Abrir a bancada de trabalho virtual |

</APITable>