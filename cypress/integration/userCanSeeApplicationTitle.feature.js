describe('Application main view', () => {
  beforeEach(() => {
    cy.intercept(
      'Get',
      'https://https://developer.github.com/v3/search/ussers',
      {
        fixture: 'SearchListOfUsers.json',
      }
    );
    cy.visit('/');
  });

  it('is expected to display results of search querry', () => {
    cy.get('[data-cy="user-search-input"]').type('arunbhalli');
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="serial-no-of-user"]').should('contain', '1');
    cy.get('[data-cy=img-of-user]').should('be.visible');
    cy.get('[data-cy=user-name]').should('contain', 'arunbhalli');
  });
});
