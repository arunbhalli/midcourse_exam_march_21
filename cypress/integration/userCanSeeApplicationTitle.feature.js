describe('Application main view', () => {
  beforeEach(() => {
   cy.visit("/")
  });

  it('contains titel', () => {
    cy.get("section[name='title']")
      .should('contain', 'GitHub Search engine')
  });
  it("display the expected dtails of user", () => {
    cy.get("[data-cy=search]").within(() => {
      cy.get("[data-cy=user-name]").should("contain","Barack")
    })
  })

});