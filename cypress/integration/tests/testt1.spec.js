describe('Test not logged in => login button', function() {
  it('on error should show error message', function() {
    cy.server();
    cy.route({
      url: '/api/portfolios',
      status: 500,
      response: 'ERROR'
    });
  });
});
