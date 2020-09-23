<template>
  <div>
    <HomeListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>

import HomeListLayout from './HomeListLayout'

export default {
 components: {
    HomeListLayout
    } 
}
</script>


