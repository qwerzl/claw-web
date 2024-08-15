import { createStorage } from 'unstorage'
import vercelKVDriver from 'unstorage/drivers/vercel-kv'
import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'

const schema = z.object({
  key: z.string(),
  gptResponse: z.string(),
  movementStats: z.string(),
  grabbedItem: z.string(),
  conceptName: z.string(),
})

const storage = createStorage({
  driver: vercelKVDriver({}),
})

export default defineEventHandler(async (event) => {
  const id = uuidv4()
  const body = await readValidatedBody(event, schema.parse)
  if (body.key !== useRuntimeConfig().apiSecret) {
    setResponseStatus(event, 401)
    return
  }
  await storage.setItem(id, body)

  return {
    id,
  }
})
