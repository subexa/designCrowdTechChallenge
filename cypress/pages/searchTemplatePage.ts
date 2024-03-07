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

  verifySearchResults(searchTerm: string) {
    this.searchResultsHeader.should("contain.text", `${searchTerm} Templates`);
    this.templateMasonry
      .findAllByRole("figure")
      .should("have.length.greaterThan", 0);
  }
}
