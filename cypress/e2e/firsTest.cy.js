//<references types="Cypress">
describe('Test suite', ()=>{
    it.only('Test case', ()=>{
        // cy.visit('https://testautomationpractice.blogspot.com/');
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('h6').should('have.text', 'Dashboard')
        cy.get('[class="oxd-topbar-header-title"]').click()
        cy.get('[class="oxd-sidepanel"]')
        cy.get('li').find('span').contains('Leave').click()

        //chaining
        cy.get('ul')
        .get('li')
        .get('a')
        .contains('Apply')
        .click()
        // cy.get('[class="orangehrm-card-container"]').contains('Apply Leave')
       
        //cypress alias
        cy.get('[class="orangehrm-card-container"]').as('card')
        cy.get('@card').find('h6').should('contain', 'Apply Leave')
        cy.get('@card').find('label').should('contain', 'Leave Type')
        cy.get('@card').find('[class="oxd-select-wrapper"]').click()


// Leave Type
    })
    it('Second test', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.contains('Login')
        
    })
})

    // expect(true).to.equal(true);