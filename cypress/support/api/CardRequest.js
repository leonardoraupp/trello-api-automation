class CardRequest {
  createACard(name, idList) {
    return cy.request({
      method: "POST",
      url: "/1/cards",
      qs: {
        name: name,
        idList: idList,
        key: Cypress.env("TRELLO_KEY"),
        token: Cypress.env("TRELLO_TOKEN"),
      },
      failOnStatusCode: false,
    });
  }

  deleteACard(id) {
    return cy.request({
      method: "DELETE",
      url: `/1/cards/${id}`,
      qs: {
        key: Cypress.env("TRELLO_KEY"),
        token: Cypress.env("TRELLO_TOKEN"),
      },
    });
  }
}
export default new CardRequest();
