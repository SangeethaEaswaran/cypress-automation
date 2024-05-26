class NavigationPageObjects {
    actionsPage(){
        cy.get('.home-list').find('a').contains('Actions').click()
    }
}
export var navigateTo = new NavigationPageObjects();
