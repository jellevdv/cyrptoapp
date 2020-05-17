/// <reference types="cypress" />

import { getMaxListeners } from "cluster";
import { createArrayBindingPattern } from "typescript";

describe('Login',()=>{

  const email = 'test@gmail.com'
  const pass = 'P@ssword1';
  const firstname="Jelle";
  const lastname="TestName";

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

  it('succesful register',()=>{
    cy.get('#pm').click();
    cy.get("#register").click();

    cy.get('[data-cy=register-firstname]').type(firstname);
    cy.get('[data-cy=register-lastname]').type(lastname);
    cy.get('[data-cy=register-email]').type(email);
    cy.get('[data-cy=register-password]').type(pass);
    cy.get('[data-cy=register-confirm-password]').type(pass);
    cy.get('[data-cy=register-button]' ).click();
    cy.get('#pm').click();
    cy.contains('Currency');

  });


});
