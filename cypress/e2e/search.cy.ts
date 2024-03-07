import { SearchTemplatesPage } from "../pages/searchTemplatePage";

const path =
  "/maker/mydesigns/logodrafts/e937196b-fef2-4a43-892e-1bacfd5d9cb2/templatetypes?searchTerm=Tech%20Challenge";

const searchTemplatePage = new SearchTemplatesPage();

describe("Search templates tests", () => {
  beforeEach(() => {
    cy.visit(path);
  });

  it("should enter search term and generate results", async () => {
    searchTemplatePage.searchInput.clear().type("Tech");
    searchTemplatePage.searchButton.click();
    searchTemplatePage.verifySearchResults("Tech");
  });

  it("should filter results by category", () => {
    const instagramFilters = [
      "Instagram Post",
      "Instagram Story",
      "Instagram Reel",
    ];
    searchTemplatePage
      .getCategoryFilterCheckbox("Check Minus Instagram Check Minus Instagram")
      .click({ force: true });
    searchTemplatePage.masonryItem.each((item) => {
      cy.wrap(item)
        .findByRole("listitem")
        .invoke("text")
        .should((elem) => {
          expect(instagramFilters).to.contain(elem.trim());
        });
    });
  });

  it("opens select a design modal", () => {
    searchTemplatePage.masonryItem.first().click();
    searchTemplatePage.selectDesignModalHeader.invoke("text").should((elem) => {
      expect("Select a design type").to.eq(elem.trim());
    });
  });
});
