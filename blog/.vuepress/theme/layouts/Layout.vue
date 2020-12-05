<template>
  <div>
    <ListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>

import ListLayout from './ListLayout'

export default {
 components: {
    ListLayout
  },
}
</script>


