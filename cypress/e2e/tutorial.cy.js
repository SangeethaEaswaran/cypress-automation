//<references types="Cypress">
describe('Fixture Tutorial',()=> {
    before('Before hook ',function() {
        cy.fixture("example.json").then(function (data){
            this.data = data
            cy.log('this.data', this.data.name)
        })
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    })

    it('Fixture example', function() {
        cy.log('first test', this.data )
        cy.get('input[name="name"]').first().should('have.attr', 'minlength', '2')
        cy.get('input[name="name"]').first().type(this.data.name)
        cy.get('input[name="email"]').first().type(this.data.email)
        cy.get('#exampleInputPassword1').type(this.data.password)
        cy.get('#exampleCheck1').check()
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        cy.get('#inlineRadio1').check()
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('input[type="date"]').type(this.data.dob)
        cy.get('.btn-success').click()
    })

    it.only('Custom commands example', function(){
        cy.get('.nav-link').contains('Shop').click()
        this.data.productName.forEach(element => {
            cy.selectProduct(element)
        });
    })
})
