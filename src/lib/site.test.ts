import { siteConfig } from "./site";

describe("siteConfig", () => {
  it("keeps the regional targeting explicit", () => {
    expect(siteConfig.region).toBe("Краснодарский край");
    expect(siteConfig.cities).toContain("Краснодар");
    expect(siteConfig.cities).toContain("Сочи");
  });

  it("exposes placeholder contacts that can be replaced before publish", () => {
    expect(siteConfig.telegramLabel).toMatch(/^@/);
    expect(siteConfig.telegramUrl).toContain("t.me");
    expect(siteConfig.emailLabel).toContain("@");
  });
});
