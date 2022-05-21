---
title: Comandos
description: Todos os comandos disponíveis no servidor.
sidebar_position: 4
---

# Lista de Comandos

> Use a barra de pesquisa da página para encontrar comandos.

## Diversos

### Informações
| Comando | Descrição |
| ------- | --------- |
| `/ajuda` | Listar comandos do servidor |
| `/discord` | Listar o Discord do servidor |
| `/forum` | Listar o Fórum do servidor |
| `/regras` | Listar link com as regras do servidor |
| `/site` | Listar todos os sites do servidor |
| `/topvotos` | Listar os jogadores que mais votaram no server |
| `/vip` | Site da loja onde vende VIP, chave e outros produtos |
| `/vote` <p>`/votar`</p> | Listar o site para votar no server |
| `/votos` | Listar a quantidades de votos que você possui |
| `/wiki` | Listar a Wiki do servidor |

### Melhorias
| Comando | Descrição |
| ------- | --------- |
| `/auto` | Ativar ou desativar o recolhimento de itens direto para o inventário |
| `/auto aviso` | Ativar ou desativar o aviso de inventário cheio |
| `/sentar` <p>`/chairs`</p> | Ativar ou desativar o sistema de caideiras |
| `/gps` | Lista jogadores próximos (até 200 blocos de distância) |
| `/lixo` | Abrir a lixeira para descartar itens |
| `/original` | Ative o login automático se você tiver minecraft original |
| `/sort` | Ativar ou desativar o arganizador de baús automático | 

### Kits
| Comando | Descrição |
| ------- | --------- |
| `/kits` | Abra o menu de kits |
| `/kit [nome-do-kit]` | Receba o kit solicitado |
| `/kit fome` | Receba o kit com pães |
| `/kit prot` | Receba o kit de proteção |
| `/kit pvp` | Receba o kit de PVP (custa $500) | 

### Skins
| Comando | Descrição |
| ------- | --------- |
| `/skin set [nick]` | Altere sua skin usando uma conta original |
| `/skin set [https://site.com/final.png]` | Altere sua skin usando uma imagem |
| `/skin clear` | Remove sua skin |
| `/skin update` | Atualiza sua skin | 

### Casamento
| Comando | Descrição |
| ------- | --------- |
| `/marry` | Listar todos os comandos do marry |
| `/marry listar` | Listar todos os jogadores casados |
| `/marry [jogador]` <p>`/marry casar [jogador]`</p> | Enviar pedido de casamento |
| `/marry divorciar` | Divorciar do seu atual parceiro(a) |
| `/mc [mensagem]` <p>`/marry chat [mensagem]`</p> | Enviarm mensagem para o parceiro |
| `/mca` <p>`/marry chat alternar`</p> | Entrar ou sair do chat do casal |
| `/marry tp` | Teleportar para o seu parceiro(a) |
| `/marry home` | Teleportar para a home do casal |
| `/marry sethome` | Definir home do casal |
| `/marry delhome` | Apagar home do casal |
| `/marry presentear` | Presentear o seu parceiro(a) |
| `/marry beijar` | Beijar seu parceiro(a) |
| `/marry abraçar` | Abraçar seu parceiro(a) |
| `/marry seen` | Exibir o último login do seu parceiro(a) |

## Chat

### Mensagem Privada
| Comando | Descrição |
| ------- | --------- |
| `/m [jogador] [sua mensagem]` | Envie mensagens privadas para outro jogador |
| `/m [jogador]` | Travar ou destravar mensagens privadas com outro jogador |
| `/r [mensagem]` | Responda a última mensagem privada recebida |
| `/ignore [jogador]` | Ignora/Designora um jogador |
| `/ignore list` | Listar jogadores ignorados |
| `/msgnotify` | Ativa ou desativa notificações ao receber mensagens |
| `/msgtoggle` | Ativa ou desativa o recebimento de mensagens privadas |

### Mensagem Global
| Comando | Descrição |
| ------- | --------- |
| `/g [mensagem]` | Enviar mensagem no chat global |
| `/g` <p>`/global`</p> | Entrar no chat global |
| `/leave global` | Sair do chat global |

### Mensagem Local
| Comando | Descrição |
| ------- | --------- |
| `/l [mensagem]` | Envie mensagem no chat local <p>Aparecerá para quem estiver a 200 blocos de distância</p> |
| `/l` <p>`/local`</p> | Entrar no chat local |

## Proteção

### Criar Proteções
| Comando | Descrição |
| ------- | --------- |
| `/prot` <p>`/plot`</p> | Comandos para abrir o menu de proteção | 
| `/claim (tamanho)` | Criar uma proteção no local que você estiver |
| `/claim 10` | Protege 10 blocos para cada lado, tamanho de 21x21 | 
| `/extendclaim [tamanho]` | Aumentar o tamanho da proteção |
| `/extendclaim 10` | Expande a proteção 10 blocos na sua direção | 
| `/claimlist` | Liste as informações das proteções | 

### Permissões da Proteção
| Comando | Descrição |
| ------- | --------- |
| `/trust [jogador]` | Permitir acesso a construir na sua proteção |
| `/accesstrust [jogador]` | Permitir acesso a cama, portas e etc.. na sua proteção |
| `/containertrust [jogador]` | Permitir acesso a baús na sua proteção |
| `/permissiontrust [jogador]` | Permitir gerenciamento de permissões na sua proteção |
| `/untrust [jogador]` | Remover a permissão do jogador na sua proteção | 
| `/trustlist` | Listar as permissões da proteção que você está |

### Excluir Proteção
| Comando | Descrição |
| ------- | --------- |
| `/abandonallclaims` | Apague todas as suas proteções no server | 
| `/abandonclaim` | Apague a proteção em que você está localizado |
| `/abandontoplevelclaim` | Apague uma proteção e todas suas subdivisões |

### Banimento da Proteção
| Comando | Descrição |
| ------- | --------- |
| `/claimban [jogador]` | Banir outro jogador da proteção |
| `/claimunban [jogador]` | Desbanir outro jogador da proteção |
| `/claimbanall` | Banir todos os jogadoresjogador da proteção |
| `/claimbanlist` | Listar jogadores banidos da sua proteção |

### Criar Sub-Proteção
| Comando | Descrição |
| ------- | --------- |
| `/subdivideclaims` | Altere a pá de ouro para o modo de subdivisão de proteções, usado para dividir suas proteções |
| `/restrictsubclaim` | Restrinja a subdivisão para que ela não herde as permissões da proteção principal | 
| `/basicclaims` | Altere a pá de ouro para o modo básico de proteção |

### Loja de Blocos de Proteção
| Comando | Descrição |
| ------- | --------- |
| `/buyclaimblocks [quantia]` | Compre blocos de proteção com dinheiro virtual |
| `/sellclaimblocks [quantia]` | Venda seus blocos de proteção para o servidor | 

### Outros Comandos
| Comando | Descrição |
| ------- | --------- |
| `/claimexplosions` | Alterna a proteção contra explosões nos terrenos protegidos | 
| `/givepet [jogador]` | Doe seu animal de estimação para outro jogador |

## Teleporte
| Comando | Descrição |
| ------- | --------- |
| `/spawn` | Teleporte para o inicio do server |
| `/wild` | Teleporte para um lugar aleatório do mapa que você estiver |
| `/fps` | Teleporte para a arena FPS (mcMMO desativado) |
| `/arena` | Teleporte para a arena (mcMMO ativado) |
| `/camarote` | Teleporte para o camarote de eventos de batalha | 
| `/rtp mundo` | Teleporte aleatório pelo mundo. |
| `/rtp nether` | Teleporte aleatório pela dimensão Nether. (Custa 5 mil coins) |
| `/rtp end` | Teleporte aleatório pela dimensão do End. (Custa 5 mil coins) |

### Definir Casa
| Comando | Descrição |
| ------- | --------- |
| `/sethome [nome-da-home]` | Defina uma home |
| `/home [nome-da-home]` | Teleporte para a home definida |
| `/delhome [nome-da-home]` | Apague sua home | 

### Teleporte entre Jogadores
| Comando | Descrição |
| ------- | --------- |
| `/tpa [jogador]` | Solicite a outro jogador teleporte até ele |
| `/tpacancel` | Cancele a solicitação de teleporte enviada por você |
| `/tpaccept` | Aceite solicitação de teleporte até você |
| `/tpdeny` | Negue solicitação de teleporte até você | 
| `/tptoggle` | Ative ou desative solicitações de teleporte até você |

### Warps de Jogadores
| Comando | Descrição |
| ------- | --------- |
| `/go` <p>`/pwarp`</p> | Abrir o menu principal de Warps de jogadores |
| `/go [warp]` | Teleportar para a warp de um jogador |
| `/go abrir [categoria]` | Abrir as warps da categoria |
| `/go ajuda` | Listar comandos do sistema de warp |
| `/go avaliar [warp] [valor]` | Avaliar uma warp |
| `/go categoria [warp] [categoria]` | Definir a categoria da warp | 
| `/go definir [warp]` | Definir uma warp Na localização atual |
| `/go descricao definir [warp] [desc]` | Definir descrição de uma warp |
| `/go descricao remover [warp]` | Remvoer descrição de uma warp |
| `/go listar` | Listar todas warps disponíveis |
| `/go quantia` | Visualizar quantas warps você possui |
| `/go redefinir [warp]` | Redefinir a localização de uma warp |
| `/go remover [warp]` | Remover uma warp | 
| `/go renomear [warp] [nome]` | Renomear uma warp | 
| `/go senha definir [warp] [senha]` | Definir senha de uma warp |
| `/go senha remover [warp]` | Remover senha de uma warp |
| `/go travar [warp]` | Travar ou Destravar uma warp |

## Economia

### Gerenciar Saldo
| Comando | Descrição |
| ------- | --------- |
| `/pay [jogador] [valor]` | Transfira dinheiro para outro jogador |
| `/payconfirmtoggle` | Ative e desative a confirmação de pagamento |
| `/paytoggle` | Ative e desative o recebimento de dinheiro |
| `/saldo (jogador)` | Visualize seu saldo ou de outro jogador no banco |
| `/topsaldo (página)` | Liste os jogadores mais ricos do server |

### Loja do Servidor
| Comando | Descrição |
| ------- | --------- |
| `/loja` <p>`/shop`</p> | Abrir o menu de lojas do servidor |
| `/sloja` <p>`/sshop`</p> | Abrir o menu da loja do servidor |
| `/sellgui` | Abrir o menu onde você pode colocar itens que deseja vender <p>Ao fechar o menu os itens serão vendidos</p> |
| `/sellall` | Vender todos os itens do inventário de qualquer categoria |
| `/sellhand ` | Vender o item que estiver segurando |
| `/sellhand (quantia)` | Vender a quantidade especificada do item que estiver segurando |
| `/sellhandall` | Vender todos os itens do inventário que seja igual ao que estiver segurando |
| `/sellall (categoria)` | Vender todos os itens do inventário que sejam da categoria blocos |

### Loteria
| Comando | Descrição |
| ------- | --------- |
| `/lot` <p>`/loteria`</p> | Abra o menu da loteria para realizar apostas |
| `/lot buy [quantia]` | Comprar bilhetes da loteria |
| `/lot status` | Visualizar status do sorteio atual |
| `/lot togglebuymsg` | Alterar notificações de compras na loteria |
| `/lot toggleremindmsg` | Alterar notificações de sorteios da loteria |

## mcMMO

### Habilidades
| Comando | Descrição |
| ------- | --------- |
| `/[habilidade]` | Lista as estatísticas de uma habilidade especifica |
| `/acrobacia` | Lista as estatísticas de acrobacia |
| `/[habilidade] ? (página)` | Abre o guia uma habilidade especifica |
| `/acrobacia ? 1` | Abre o guia para a habilidade de acrobacia | 

### Configuração
| Comando | Descrição |
| ------- | --------- |
| `/mcability` | Ativa ou desativa a super habilidade (ativada com botão direito) |
| `/mccooldown` | Exiba o placar de tempo de recarga de super habilidades |
| `/mcnotify` | Ativa ou desativa notificações de habilidades |
| `/mmoxpbar` | Configurar a barra de XP do mcMMO |
| `/mmoxpbar hide [habilidade]` |  Esconder a barra de XP de uma habilidade |
| `/mmoxpbar show [habilidade]` | Visualizar a barra de XP de uma habilidade |
| `/mmoxpbar reset` | Limpa todas as configurações anteriores | 

### Informação
| Comando | Descrição |
| ------- | --------- |
| `/topmcmmo` <p>`/mctop`</p> | Lista os top jogadores gerais das habilidades do mcMMO |
| `/inspect [jogador]` | Inspecione o nível de habilidade de outro jogador |
| `/mcrank` | Lista seu ranking em cada habilidade |
| `/mcstats` | Lista estatísticas de todas as habilidades | 
| `/mctop [habilitade]` | Lista os top jogadores numa habilidade especifica |
| `/mctop acrobacia` | Lista os top jogadores na habilidade acrobacia | 

### Equipe
| Comando | Descrição |
| ------- | --------- |
| `/p [on/off]` | Ativa ou desativa o chat da equipe |
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

## VIP
| Comando | Descrição |
| ------- | --------- |
| `/afk` | Ativar ou desativar o modo offline |
| `/auto baus` | Ativar ou desativar o recolhimento automatico de itens ao quebrar baús |
| `/auto blocos` | Ativar ou desativar o recolhimento automatico de itens ao quebrar blocos |
| `/auto mobs` | Ativar ou desativar o recolhimento automatico de itens ao matar mobs  |
| `/auto pesca` | Ativar ou desativar o recolhimento automatico ao pescar |
| `/bancada` | Abrir o menu de bancadas virtual |
| `/bigorna` | Abrir a bigorna virtual |
| `/bloco (hand)`| Transforma o item que você estiver segundando em blocos |
| `/bloco (inventory)` | Transforma todos os itens compatíveis do inventário em blocos |  
| `/bloco (item ou id)` | Transforma o item especificado no comando em blocos |
| `/bloco` | Transformar itens em blocos <p>Apenas blocos que possam ser transformados em itens novamente</p> |
| `/cartografia` | Abrir a bancada de cartografia virtual |
| `/cor` | Abrir o menu de cores do chat |
| `/cores` | Listar códigos de cores |
| `/cortador` | Abrir o cartador virtual |
| `/craft` | Abrir o Super Craft virtual |
| `/crafttoggle` | Ativar ou Desativa o Super Craft |
| `/ec` | Abrir o baú do fim virtual |
| `/ferraria` | abrir a bancada de ferreiro virtual |
| `/hat` | Colocar o bloco na mão no lugar do capacete | 
| `/isort` | Organizar apenas os itens no seu inventário  |
| `/isortall` | Organizar itens do seu inventário e da sua hotbar |
| `/isorthotbar` | Organizar apenas os itens da sua hotbar |
| `/isorttoggle` | Ativar ou desativar a organização de inventário automaticamente |
| `/kit mast` | Receber o KIT semanal Master |
| `/kit prem` | Receber o KIT semanal Premium |
| `/kit ulti` | Receber o KIT semanal Ultimate |
| `/luz` | Ativar oud esativar visão noturna |
| `/nick [novo-nick]` | Adicione cores ao seu nickname <p>[Site com formatação de cores!](https://rgb.armamc.com)</p> |
| `/nick off` | Remover o nick alterado anteriormente | 
| `/rebolo` | Abrir bancada do rebolo virtual |
| `/tear` | Abrir bancada do tear virtual |
| `/v [mensagem]` | Enviar mensagens no chat VIP |
| `/vipconfig` | Abrir menu de configurações VIP |
| `/viploja` | Abrir loja VIP. |
| `/vipmenu` | Abri o menu principal do VIP |
| `/wb` | Abrir a bancada de trabalho virtual |
