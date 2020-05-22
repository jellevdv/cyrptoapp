describe('add new coin',()=>{

  const name = 'jellecoin'
  const symbol = 'jel';
  const price=5;
  const procent=2;
  const description="hagzedhjzhedgfdhjszdbszjak";
  const url="https://previews.123rf.com/images/iamcitrus/iamcitrus1505/iamcitrus150500016/40016315-ge%C3%AFsoleerd-gouden-euro-muntstuk-op-de-witte-achtergrond.jpg"

  before(()=>{
    cy.server({ delay: 1000 });
    cy.visit('/');
  })


  it('Click new coin', () =>{
    cy.get('#addCoin').click();
  });


  it('Fill in the data',()=>{
    cy.get('[data-cy=cName]').type(name);
    cy.get('[data-cy=cSymbol]').type(symbol);
    cy.get('[data-cy=cPrice]').type(price);
    cy.get('[data-cy=cProcent]' ).type(procent);
    cy.get('[data-cy=cDescription]').type(description);
    cy.get('[data-cy=cLogo]').type(url);
    cy.get("#submitClicked").click();

  });

  it('New coin is in list', () =>{
    cy.get('#pm').click();
    cy.get('#all').click();
    cy.contains(name);
  });


});
