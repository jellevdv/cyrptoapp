/// <reference types="cypress" />

import { getMaxListeners } from "cluster";
import { createArrayBindingPattern } from "typescript";

describe('Login',()=>{

  const email = 'jelle@gmail.com'
  const pass = 'P@ssword1';
  const name= 'WatchList';

  beforeEach(()=>{
    cy.server({ delay: 1000 });
    cy.visit('/');
  })



  it('succesful login attempt',()=>{
    cy.get('#pm').click();
    cy.get("#login").click();
    cy.get('[data-cy=login-email]').type(email);
    cy.get('[data-cy=login-password]').type(pass);
    cy.get('[data-cy=login-button]' ).click();
    cy.get('#pm').click();
  });

  it('make new portfolio',()=>{
    cy.get('#pm').click();
    cy.get('#new-port-btn').click();
    cy.get('[data-cy=name]').type(name);
    cy.get('[data-cy=submit-btn]').click();
    cy.contains(name);
  });


});
