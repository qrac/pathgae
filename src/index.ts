import path from "path"

type Options = {
  outBase?: string
  outDir?: string
  outExt?: string
}

const pathgae = (entryPath: string, options?: Options) => {
  const unixPath = entryPath.replaceAll("\\", "/")
  const extname = path.extname(unixPath)
  const basename = path.basename(unixPath, extname)

  const outBase = options?.outBase ? options.outBase.replaceAll("\\", "/") : ""
  const outDir = options?.outDir ? options.outDir.replaceAll("\\", "/") : ""
  const outExt = options?.outExt ? options.outExt : extname.replace(/^./, "")

  const dirname = path.dirname(unixPath).replace(outBase, outDir)
  const outPath = path.join(dirname, basename + `.${outExt}`)
  return outPath
}

export default pathgae
