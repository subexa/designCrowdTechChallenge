export class SearchTemplatesPage {
  get searchInput() {
    // return cy.get("#searchTerm");
    return cy.findByRole("textbox", { name: "Search Close" });
  }

  get searchButton() {
    return cy.findByRole("button", { name: /search/i });
  }

  get searchResultsHeader() {
    return cy.findAllByRole("heading", { level: 1 });
  }

  get templateMasonry() {
    return cy.get("[data-test-template-masonry]");
  }

  get masonryItem() {
    return cy.get(".masonry-item");
  }

  getCategoryFilterCheckbox(category: string) {
    return cy.findByRole("checkbox", { name: category });
  }

  verifySearchResults(searchTerm: string) {
    this.searchResultsHeader.should("contain.text", `${searchTerm} Templates`);
    this.templateMasonry
      .findAllByRole("figure")
      .should("have.length.greaterThan", 0);
  }
}
