class BoardRequest {
  createABoard(name) {
    return cy.request({
      method: "POST",
      url: "/1/boards/",
      qs: {
        name: name,
        key: Cypress.env("TRELLO_KEY"),
        token: Cypress.env("TRELLO_TOKEN"),
      },
      failOnStatusCode: false,
    });
  }

  deleteABoard(id) {
    return cy.request({
      method: "DELETE",
      url: `/1/boards/${id}`,
      qs: {
        key: Cypress.env("TRELLO_KEY"),
        token: Cypress.env("TRELLO_TOKEN"),
      },
    });
  }
}
export default new BoardRequest();
