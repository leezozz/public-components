import {
  ref
} from 'vue'

// 找出当前子级以及它的所有父级path
export const findArrayTreePath = (arrayTree: any, code: any, pathStack = []) => {
  // console.log('找出当前子级以及它的所有父级path', code, arrayTree)
  const findPath: any = (tree: any, code: any, pathStack: any = []) => {

    pathStack.push(tree.path)

    // tree.path === code
    // 判断是否包含了tree.path
    if (tree.path && code.includes(tree.path)) {
      return {
        path: tree.path,
        tree,
        clump: pathStack
      }

    }

    for (const node of tree.children || []) {
      const result = findPath(node, code, [...pathStack])
      if (result) return result
    }
  }
  for (const node of arrayTree) {
    const result = findPath(node, code, [...pathStack])
    if (result) return result
  }
}

// 判断数组中是否含有某项
export const findSelectAllPath = (item: any, data: any) => {
  return data.includes(item)
}

// 拼出path
export const getRoutePath = (pathArr: any) => {
  const routePath = ref('')

  pathArr.forEach((item: string) => {
    if (!item) return
    routePath.value += item + '/'
  })

  // console.log('routePath.value.substring(0, routePath.value.length - 1)', routePath.value.substring(0, routePath.value.length - 1))
  return routePath.value.substring(0, routePath.value.length - 1)
}