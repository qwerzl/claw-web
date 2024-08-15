import { createStorage } from 'unstorage'
import vercelKVDriver from 'unstorage/drivers/vercel-kv'
import { z } from 'zod'

const schema = z.object({
  key: z.string(),
  id: z.string().uuid(),
})

const storage = createStorage({
  driver: vercelKVDriver({}),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse)
  return await storage.getItem(body.id)
})
