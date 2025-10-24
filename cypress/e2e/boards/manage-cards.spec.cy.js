import BoardRequest from "../../support/api/BoardRequest";
import ListRequest from "../../support/api/ListRequest";
import CardRequest from "../../support/api/CardRequest";

let idList;

before(() => {
  let idBoard;

  cy.fixture("board").then((board) => {
    BoardRequest.createABoard(board.name).then((response) => {
      idBoard = response.body.id;
    });
  });

  cy.fixture("list").then((list) => {
    ListRequest.createAList(list.name, idBoard).then((response) => {
      idList = response.body.id;
    });
  });
});

describe("Manage boards", () => {
  it("Should create and delete a card successfully", () => {
    cy.fixture("card").then((card) => {
      CardRequest.createACard(card.name, idList).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.be.a("string").and.not.be.empty;
        expect(response.body.name).to.eq(card.name);
        expect(response.body.closed).to.be.false;
        const idCard = response.body.id;

        CardRequest.deleteACard(idCard).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
    });
  });
});
