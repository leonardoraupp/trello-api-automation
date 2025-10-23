import BoardRequest from "../../support/api/BoardRequest";

describe("Manage boards", () => {
  it("Should create and delete a board successfully", () => {
    cy.fixture("board").then((board) => {
      
      BoardRequest.createBoard(board.name).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.be.a("string").and.not.be.empty;
        expect(response.body.name).to.eq(board.name);
        expect(response.body.closed).to.be.false;
        const boardId = response.body.id;

        BoardRequest.deleteBoard(boardId).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
    });
  });
});
