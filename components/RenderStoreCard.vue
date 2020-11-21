<template>
  <div class="render-stores">
    <div v-for="(store, index) in merchants" :key="index">
      <StoreCard :store="store" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['merchants'],
};
</script>

<style lang="scss"></style>
