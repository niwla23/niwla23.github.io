import { $content } from '@nuxt/content'
import { FetchReturn } from '@nuxt/content/types/query-builder'

export default async () => {
  const files = await $content({ deep: true }).only(['path']).fetch()

  return files.map((file: FetchReturn) =>
    file.path === '/index' ? '/' : file.path + '/'
  )
}
