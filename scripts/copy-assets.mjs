import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const root = path.resolve(__dirname, '..')

const copyDir = (src, dest) => {
  if (!fs.existsSync(src)) return
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

copyDir(path.join(root, 'src/tokens'), path.join(root, 'dist/tokens'))
copyDir(path.join(root, 'src/assets'), path.join(root, 'dist/assets'))
console.log('✓ Copied tokens and assets to dist/')
