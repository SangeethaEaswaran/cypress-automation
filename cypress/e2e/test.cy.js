import { before } from "lodash";

//<references types="Cypress">
describe('Test feature', function(){
    before('Before hook', ()=>{
        cy.log('Hook before all tests in spec')
    })
    beforeEach('BeforeEach hook',()=>{
        cy.log('Before each hook runs before a test')
    })
   

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
        cy.screenshot()
        cy.log('clicked on type')
    })

    it.skip('Skip test',()=>{
        cy.log('Skip this test')
    })
    it('Dont run in chrome', {browser: '!chrome'}, () =>{
    cy.log('dont run on chrome ')
    })
    after('After hook', ()=>{
        cy.log('After hook runs after all tests in a spec file')
    })
    afterEach('AfterEach hook',()=>{
        cy.log('Hook runs after each test in a spec')
    })
})