describe('Application main view', () => {
  beforeEach(() => {
    cy.intercept('Get', 'https://https://developer.github.com/v3/search/ussers', {
      fixture: 'SearchListOfUsers.json',
    });
    cy.visit('/');
  });

 
  it("is expected to display results of search querry", () => {
    cy.get('[data-cy="user-search-input"]').type("barack");
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="results"]').should("be.visible");
  });

});