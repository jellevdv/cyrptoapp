describe('failed login',()=>{

  const email = 'jelle@gmail.com'
  const pass = 'azerty';

  beforeEach(()=>{
    cy.server({ delay: 1000 });
    cy.visit('/');
  })


  it('Has button portfoliomanager', () =>{
    cy.contains('PortfolioManager');
  });

  it('blocks protected portfolio',()=>{
    cy.get('#pm').click();
    cy.contains('To use our portfolio module');
  });

  it('succesful login attempt',()=>{
    cy.get('#pm').click();
    cy.get("#login").click();
    cy.get('[data-cy=login-email]').type(email);
    cy.get('[data-cy=login-password]').type(pass);
    cy.get('[data-cy=login-button]' ).click();
    cy.contains("Error");

  });


});
