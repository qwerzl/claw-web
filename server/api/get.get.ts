import { createStorage } from 'unstorage'
import vercelKVDriver from 'unstorage/drivers/vercel-kv'
import { z } from 'zod'
import type { ClawData } from '~/types/clawData'

const schema = z.object({
  key: z.string(),
  id: z.string().uuid(),
})

const storage = createStorage({
  driver: vercelKVDriver({}),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse)
  if (body.key !== useRuntimeConfig().apiSecret) {
    setResponseStatus(event, 401)
    return
  }
  const clawData = await storage.getItem(body.id) as ClawData
  clawData.conceptDescription = await storage.getItem(clawData.conceptName) as string
  clawData.grabbedItemDetails = await storage.getItem(clawData.grabbedItem) as string

  return clawData
})
