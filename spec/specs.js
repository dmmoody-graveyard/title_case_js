describe("titleCase", function() {
  it("capitalizes the first letter of the word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("makes the rest of the letters lowercase", function() {
    expect(titleCase("CAT")).to.equal("Cat");
  });

  it("capitalizes multiple words", function() {
    expect(titleCase("cat car")).to.equal("Cat Car");
  });

  it("does not capitalize common small words", function() {
    expect(titleCase("cat the cat")).to.equal("Cat the Cat");
  });

  it("does capitalize first word", function() {
    expect(titleCase("the cat cat")).to.equal("The Cat Cat");
  });

  it("does capitalize the last word", function() {
    expect(titleCase("the cat the")).to.equal("The Cat The");
  });
});
