# Automação API Trello

### Observações para o avaliador
- Nessa situação decidi fazer as specs de teste pelo recurso para ter um volume menor de arquivos, ao invés de fazer cada spec por ação.
- Decidi criar pacotes boards, cards para manter escalável o projeto, caso as specs de testes aumentem para esses recursos, ou crie specs de testes específicas para alguma ação ou cenário futuro.
- Não estou excluindo a lista criada no teste de criar card(arquivo manage-cards.spec.cy.js) porque não existe recurso na API do Trello para deletar uma lista, somente criar, então por isso na ListRequest.js só tem o método createAList().

### Print execução via terminal
<img width="1848" height="961" alt="image" src="https://github.com/user-attachments/assets/442a7372-bee5-493f-ba1b-eb50aaf1a1b5" />

### Prints execução via interface gráfica
<img width="1848" height="961" alt="image" src="https://github.com/user-attachments/assets/715ef0c1-36f9-41a9-9a23-25ecc4fea034" />
<img width="1848" height="961" alt="image" src="https://github.com/user-attachments/assets/0980ab3c-fa09-4fd0-b95e-1d690482c3d8" />
