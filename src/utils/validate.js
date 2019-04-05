import path from 'path'

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function resolvePath(routePath) {
  if (isExternal(routePath)) {
    return routePath
  }
  return path.resolve(this.basePath, routePath)
}
