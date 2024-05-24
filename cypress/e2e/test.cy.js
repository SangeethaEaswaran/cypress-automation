//<references types="Cypress">
describe('Test feature', function(){
    it('Test case', function(){
        cy.visit("/");
        //by tag name 
        cy.get('a')
        //by id 
        cy.get('#utilities')
        //by class 
        cy.get('.navbar.navbar-inverse')
        cy.get('[class]')
        cy.get('[class="banner"]')
        cy.title().should('include', 'Kitchen Sink')
        // cy.debug();
        cy.contains('type').click();
        cy.log('clicked on type')
    
    })
})