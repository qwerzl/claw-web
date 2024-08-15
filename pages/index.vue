<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>

<template>
  <Nav />
  <div class="flex items-center justify-center mt-4">
    <div class="max-w-[800px]">
      <NuxtPicture format="avif,webp" src="/image/inception.png" alt="Inception" :img-attrs="{ class: 'rounded' }" />
      <div class="px-3">
        <div class="italic font-serif text-5xl font-bold mt-4">
          Inception.
        </div>
        <div class="mt-4 font-serif text-muted-foreground">
          Officia laborum commodo esse fugiat et aliqua amet velit ad occaecat et nisi est deserunt. Ea mollit aliquip deserunt proident labore enim ipsum fugiat eiusmod tempor ullamco nulla magna aute. Aliquip tempor Lorem magna occaecat exercitation nostrud esse adipisicing ad laborum aliqua do Lorem reprehenderit. Quis commodo ut occaecat minim qui nostrud elit reprehenderit duis. Magna et deserunt non anim eiusmod id velit reprehenderit voluptate ipsum Lorem cillum ut.
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
