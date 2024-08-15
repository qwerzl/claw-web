<script lang="ts" setup>
import { ref } from 'vue'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

import type { ClawData } from '@/types/clawData'

const route = useRoute()

const isMoveDataOpen = ref(false)

const isCaughtOpen = ref(false)

const { data } = await useAsyncData<ClawData>(
  'pageData',
  () => $fetch('/api/get', {
    body: {
      key: useRuntimeConfig().apiSecret,
      id: route.params.id,
    },
  }),
)
</script>

<template>
  <Nav />
  <div class="flex items-center justify-center mt-4 mb-10">
    <div class="max-w-[1000px]">
      <div class="rounded aspect-[21/9] flex mx-4 shadow-2xl">
        <NuxtImg alt="Inception" class="rounded flex-1 object-cover" src="/image/inception.png" />
      </div>

      <div class="px-10">
        <div class="italic font-serif text-8xl font-bold mt-4 underline">
          {{ data?.conceptName }}.
        </div>
        <div class="mt-10 font-serif text-muted-foreground">
          {{ data?.conceptDescription }}
        </div>

        <Collapsible
          v-model:open="isMoveDataOpen"
          class="space-y-2 mt-6"
        >
          <div class="flex items-center justify-between space-x-4 px-4 py-3 border rounded p-2">
            <div class="text-sm font-semibold">
              Movement data
            </div>
            <CollapsibleTrigger as-child>
              <Button class="flex items-center" size="sm" variant="ghost">
                <Icon class="h-4 w-4" name="radix-icons:caret-sort" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent class="space-y-2">
            <ScrollArea class="h-[200px] rounded-md border px-4 py-3 font-mono text-sm bg-gray-200 font-mono">
              <pre>{{ JSON.stringify(data?.movementStats, null, 2) }}</pre>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          v-model:open="isCaughtOpen"
          class="space-y-2 mt-2"
        >
          <div class="flex items-center justify-between space-x-4 px-4 py-3 border rounded p-2">
            <div class="text-sm font-semibold">
              What Did I Catch?
            </div>
            <CollapsibleTrigger as-child>
              <Button class="flex items-center" size="sm" variant="ghost">
                <Icon class="h-4 w-4" name="radix-icons:caret-sort" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent class="space-y-2">
            <ScrollArea class="h-[600px] rounded-md border px-4 py-3">
              <div class="rounded aspect-[21/9] flex">
                <NuxtImg alt="Inception" class="rounded flex-1 object-cover" src="/image/caligraphy.png" />
              </div>
              <div class="space-y-2 mt-4 font-[450] font-serif">
                <p>
                  {{ data?.grabbedItemDetails }}
                </p>
              </div>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>

        <blockquote class="relative font-semibold font-serif mt-6">
          <Icon class="w-6 h-6 text-muted-foreground mb-4 absolute -left-8" name="bx:bxs-quote-left" />

          <p class="pt-1">
            {{ data?.gptResponse }}
          </p>
          <Icon class="w-6 h-6 text-muted-foreground absolute -right-8 -bottom-2" name="bx:bxs-quote-right" />
        </blockquote>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
