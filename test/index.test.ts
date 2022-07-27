import { describe, expect, it } from "vitest"

import pathgae from "../src"

describe("Basic Test", () => {
  it("No options", () => {
    const result = pathgae("src/index.ts")
    expect(result).toEqual("src/index.ts")
  })

  it("Full", () => {
    const result = pathgae("src/index.ts", {
      outBase: "src",
      outDir: "dist",
      outExt: "js",
    })
    expect(result).toEqual("dist/index.js")
  })

  it("Full (win)", () => {
    const result = pathgae("src\\index.ts", {
      outBase: "src",
      outDir: "dist",
      outExt: "js",
    })
    expect(result).toEqual("dist/index.js")
  })

  it("Full nest entry", () => {
    const result = pathgae("src/pages/index.ts", {
      outBase: "src",
      outDir: "dist",
      outExt: "js",
    })
    expect(result).toEqual("dist/pages/index.js")
  })

  it("Full nest entry (win)", () => {
    const result = pathgae("src\\pages\\index.ts", {
      outBase: "src",
      outDir: "dist",
      outExt: "js",
    })
    expect(result).toEqual("dist/pages/index.js")
  })

  it("Full nest all", () => {
    const result = pathgae("pjt/pkg/src/pages/index.ts", {
      outBase: "pjt/pkg/src",
      outDir: "pjt/pkg/dist",
      outExt: "js",
    })
    expect(result).toEqual("pjt/pkg/dist/pages/index.js")
  })

  it("Full nest all (win)", () => {
    const result = pathgae("pjt\\pkg\\src\\pages\\index.ts", {
      outBase: "pjt\\pkg\\src",
      outDir: "pjt\\pkg\\dist",
      outExt: "js",
    })
    expect(result).toEqual("pjt/pkg/dist/pages/index.js")
  })

  it("Full nest all (mix)", () => {
    const result = pathgae("pjt/pkg\\src\\pages/index.ts", {
      outBase: "pjt\\pkg/src",
      outDir: "pjt/pkg\\dist",
      outExt: "js",
    })
    expect(result).toEqual("pjt/pkg/dist/pages/index.js")
  })
})
