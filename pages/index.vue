<script lang="ts" setup>
import { ref } from 'vue'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const isMoveDataOpen = ref(false)

const isCaughtOpen = ref(false)

const movementStats = ref('[{"x":3,"y":22,"z":11,"em":true},{"x":46,"y":43,"z":63,"em":false},{"x":100,"y":97,"z":34,"em":false},{"x":41,"y":82,"z":27,"em":true},{"x":5,"y":95,"z":23,"em":true},{"x":76,"y":63,"z":80,"em":true},{"x":1,"y":90,"z":73,"em":false},{"x":78,"y":71,"z":27,"em":false},{"x":39,"y":49,"z":1,"em":false},{"x":34,"y":74,"z":70,"em":true},{"x":85,"y":50,"z":76,"em":false},{"x":12,"y":55,"z":79,"em":false},{"x":60,"y":26,"z":29,"em":true},{"x":90,"y":98,"z":46,"em":false},{"x":15,"y":26,"z":51,"em":false},{"x":46,"y":0,"z":1,"em":true},{"x":47,"y":12,"z":95,"em":true},{"x":28,"y":9,"z":25,"em":true},{"x":45,"y":35,"z":12,"em":false},{"x":94,"y":22,"z":92,"em":true},{"x":78,"y":6,"z":3,"em":true},{"x":33,"y":100,"z":65,"em":true},{"x":28,"y":11,"z":72,"em":true},{"x":18,"y":61,"z":76,"em":false},{"x":74,"y":47,"z":25,"em":true},{"x":61,"y":9,"z":91,"em":true},{"x":61,"y":82,"z":58,"em":true},{"x":94,"y":6,"z":16,"em":false},{"x":5,"y":53,"z":75,"em":false},{"x":16,"y":78,"z":85,"em":false},{"x":52,"y":56,"z":92,"em":false},{"x":6,"y":37,"z":75,"em":false},{"x":91,"y":38,"z":11,"em":true},{"x":74,"y":92,"z":47,"em":true},{"x":70,"y":64,"z":62,"em":true},{"x":68,"y":93,"z":86,"em":false},{"x":10,"y":47,"z":32,"em":true},{"x":10,"y":47,"z":6,"em":false},{"x":83,"y":1,"z":28,"em":false},{"x":35,"y":36,"z":16,"em":false},{"x":47,"y":3,"z":56,"em":true},{"x":65,"y":59,"z":72,"em":true},{"x":88,"y":24,"z":94,"em":false},{"x":50,"y":66,"z":75,"em":false},{"x":41,"y":22,"z":21,"em":true},{"x":28,"y":59,"z":79,"em":true},{"x":44,"y":69,"z":7,"em":true},{"x":41,"y":29,"z":86,"em":true},{"x":39,"y":11,"z":57,"em":false},{"x":11,"y":57,"z":39,"em":true},{"x":36,"y":26,"z":21,"em":true},{"x":26,"y":9,"z":76,"em":false},{"x":24,"y":8,"z":13,"em":true},{"x":83,"y":83,"z":0,"em":true},{"x":87,"y":76,"z":65,"em":false},{"x":71,"y":81,"z":78,"em":false},{"x":42,"y":35,"z":23,"em":true},{"x":43,"y":77,"z":19,"em":true},{"x":82,"y":27,"z":78,"em":false},{"x":61,"y":69,"z":10,"em":false}]')
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
          Inception.
        </div>
        <div class="mt-10 font-serif text-muted-foreground">
          [[Explanation of the concept (written by human)]] Officia laborum commodo esse fugiat et aliqua amet velit ad
          occaecat et nisi est deserunt. Ea mollit aliquip deserunt proident labore enim ipsum fugiat eiusmod tempor
          ullamco nulla magna aute. Aliquip tempor Lorem magna occaecat exercitation nostrud esse adipisicing ad laborum
          aliqua do Lorem reprehenderit. Quis commodo ut occaecat minim qui nostrud elit reprehenderit duis. Magna et
          deserunt non anim eiusmod id velit reprehenderit voluptate ipsum Lorem cillum ut.
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
              <pre>{{ JSON.stringify(JSON.parse(movementStats), null, 2) }}</pre>
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
                  In ancient China, the calligraphy brush was an essential tool for scholars, symbolizing literacy,
                  education, and the pursuit of knowledge. If a child selects the calligraphy brush during the 抓周
                  ceremony, it is often interpreted as a sign that the child may have a future in the arts, academia, or
                  literature. This object represents wisdom, learning, and a refined nature, reflecting the high value
                  placed on education and cultural accomplishments in Chinese society.
                </p>
                <p>
                  The inclusion of the calligraphy brush in the ceremony highlights the importance of intellectual and
                  artistic pursuits in Chinese culture, where scholars and literati have traditionally been held in high
                  esteem. The act of choosing the brush can be seen as a hopeful indication that the child will grow to
                  appreciate and contribute to the rich cultural and intellectual heritage of China.
                </p>
              </div>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>

        <blockquote class="relative font-semibold font-serif mt-6">
          <Icon class="w-6 h-6 text-muted-foreground mb-4 absolute -left-8" name="bx:bxs-quote-left" />

          <p class="pt-1">
            [[ChatGPT's Respond]] Reprehenderit sunt consequat eu quis adipisicing occaecat duis esse
            labore fugiat commodo. Aliqua cillum sint aute proident sunt occaecat exercitation elit irure consectetur
            proident. Velit incididunt quis ut exercitation reprehenderit occaecat Lorem cupidatat aliqua aliqua laborum
            cillum Lorem laborum. Anim pariatur do ea duis officia veniam. Proident ut ea fugiat consequat elit minim.
            Laborum reprehenderit culpa anim nisi consequat eiusmod voluptate id pariatur adipisicing ad elit nulla non.
            ChatGPT says this.
          </p>
          <p class="pt-3">
            Fugiat ea aute voluptate officia incididunt do anim magna excepteur nostrud fugiat id. Dolor
            exercitation eu aliqua. Et cillum officia et aute. Fugiat Lorem adipisicing consectetur nulla dolor est nisi
            quis ipsum quis in. Laborum excepteur eiusmod pariatur ea cupidatat eiusmod elit laboris reprehenderit
            dolore laborum tempor. ChatGPT says this.
          </p>
          <Icon class="w-6 h-6 text-muted-foreground absolute -right-8 -bottom-2" name="bx:bxs-quote-right" />
        </blockquote>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
