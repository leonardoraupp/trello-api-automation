class ListRequest {
  createAList(name, idBoard) {
    return cy.request({
      method: "POST",
      url: "/1/lists",
      qs: {
        name: name,
        idBoard: idBoard,
        key: Cypress.env("TRELLO_KEY"),
        token: Cypress.env("TRELLO_TOKEN"),
      },
      failOnStatusCode: false,
    });
  }
}
export default new ListRequest();
