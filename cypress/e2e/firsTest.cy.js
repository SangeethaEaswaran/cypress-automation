//<references types="Cypress">
import  {navigateTo}  from "../support/page-objects/navigationPage.js"
describe('Test suite', ()=>{
    beforeEach('Before Each', ()=>{
cy.log('Before each ')
// cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.visit('https://example.cypress.io/')
    })

    it('Test case', ()=>{
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
       
        //cypress alias-global in this page 
        cy.get('[class="orangehrm-card-container"]').as('card')
        cy.get('@card').find('h6').should('contain', 'Apply Leave')
        cy.get('@card').find('label').should('contain', 'Leave Type')
        cy.get('@card').find('[class="oxd-select-wrapper"]').click()

        //cypress then 
        cy.get('[class="orangehrm-card-container"]').then(card =>{
            cy.wrap(card).find('label').contains('Leave Balance')
            cy.wrap(card).find('label').contains('From Date')
        })


    })

    //radio button example 
    it('Second test', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('h6').should('have.text', 'Dashboard') 
        // cy.get('oxd-userdropdown-tab').find('span').click()
        // cy.get('oxd-dropdown-menu').find('li').find('a').should('contain', 'About')
        
        cy.get('[class="oxd-topbar-header-title"]').click()
        cy.get('[class="oxd-sidepanel"]')
        cy.get('li').find('span').contains('My Info').click()

        cy.contains('Personal Details').click()
        cy.get('label').contains('Gender');

        cy.get('[type="radio"]').as('radioButtons')
        cy.get('@radioButtons').eq(0).check({force: true}).should('be.checked')
        cy.get('@radioButtons').eq(1).check({force: true}).should('be.checked')
        cy.get('@radioButtons').eq(0).should('not.be.checked')
    })

    //checkbox example 
    it('Checkbox', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('h6').should('have.text', 'Dashboard') 

        cy.get('[class="oxd-topbar-header-title"]').click()
        cy.get('[class="oxd-sidepanel"]')
        cy.get('li').find('span').contains('PIM').click()

        cy.get('a').contains('Reports').click()
        cy.get('[type="checkbox"]').as('checkboxes')
        cy.get('@checkboxes').eq(3).check({force: true}).should('be.checked')
        cy.get('@checkboxes').uncheck({force:true})
    })

    //date picker 
    it('Date Picker', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('h6').should('have.text', 'Dashboard') 

        cy.get('[class="oxd-topbar-header-title"]').click()
        cy.get('[class="oxd-sidepanel"]')
        cy.get('li').find('span').contains('Time').click()
        cy.get('[class="oxd-topbar-body-nav-tab-item"]').contains("Attendance").click()
        cy.get('[class="oxd-topbar-body-nav-tab-link"]').contains("My Records").click()
        cy.get('[class="oxd-icon bi-calendar oxd-date-input-icon"]').click()


    })

    it('Dropdown list', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('h6').should('have.text', 'Dashboard') 

        cy.get('[class="oxd-topbar-header-title"]').click()
        cy.get('[class="oxd-sidepanel"]')
        cy.get('li').find('span').contains('Time').click()
        cy.get('[class="oxd-topbar-body-nav-tab --parent"]').contains("Reports").as('dropDown')
        cy.get('@dropDown').click()
        cy.get('[class="oxd-topbar-body-nav-tab-link"]').as('dropDownList')
       
        cy.get('@dropDownList').each((listItem, index)=> {
                // const text = listItem.text().trim();
                // cy.log('text', text, index)
                cy.wrap(listItem).click()
                // cy.get('@listItem').click()
            })
            // cy.get('@dropDown')
            cy.get('@dropDown').click()
            })

    it('Table example', ()=>{
                cy.visit('https://example.cypress.io/commands/traversal')
                cy.get('.table.traversal-table td').as('t').first().should('contain', 1)
                cy.get('t').last().should('contain', 2)
    })

    it.only('Tool tip', ()=>{
        // cy.visit('https://example.cypress.io/commands/actions')

        navigateTo.actionsPage()
        // cy.get('home-list').find('a').should('contain', 'Actions').click()
        cy.get('.action-btn').click()
        cy.get('[role="tooltip"]').should('contain', 'This popover shows up on click')
    })
    //popup , alert , modal 

})