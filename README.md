# Automação API Trello

### Aviso
As atividades 1 e 2 para elaborar testes para a tela bancária e desafio SQL estão na pasta other na raiz do projeto.

### Configuração do ambiente
- Instalação das dependências
  ```
  npm install
  ```
- Para criar seu API Key siga as instruções no guia oficial do Trello: https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/
-  Crie o diretório config/env dentro do pacote cypress e o arquivo prod.env.json então substitua os valores pelo seu API Key:
  ```
{
  "TRELLO_KEY": "",
  "TRELLO_TOKEN": "",  
  "API_HOST": "https://api.trello.com"
}
```

### Observações para o avaliador
- Nessa situação decidi fazer as specs de teste pelo recurso para ter um volume menor de arquivos, ao invés de fazer cada spec por ação.
- Decidi criar pacotes boards, cards para manter escalável o projeto, caso as specs de testes aumentem para esses recursos, ou crie specs de testes específicas para alguma ação ou cenário futuro.
- Não estou excluindo a lista criada no teste de criar card(arquivo manage-cards.spec.cy.js) porque não existe recurso na API do Trello para deletar uma lista, somente criar, então por isso na ListRequest.js só tem o método createAList().

### Para execução do projeto
```
npx cypress run
```
 
### Print execução via terminal
<img width="1848" height="961" alt="image" src="https://github.com/user-attachments/assets/442a7372-bee5-493f-ba1b-eb50aaf1a1b5" />

### Prints execução via interface gráfica
<img width="1848" height="961" alt="image" src="https://github.com/user-attachments/assets/715ef0c1-36f9-41a9-9a23-25ecc4fea034" />
<img width="1848" height="961" alt="image" src="https://github.com/user-attachments/assets/0980ab3c-fa09-4fd0-b95e-1d690482c3d8" />
