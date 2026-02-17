import { AppModule } from "../../src/app.module";

describe("Backend integration (example)", () => {
  it("AppModule should be defined", () => {
    // simple sanity check that module imports without runtime error
    expect(AppModule).toBeDefined();
  });
});
