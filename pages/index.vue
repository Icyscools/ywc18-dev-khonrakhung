<template>
  <div class="app">
    <div class="bar">
      <div class="container">Navbar</div>
    </div>
    <div class="bar">
      <div class="container">History</div>
    </div>
    <div class="main">
      <div class="hidden w-1/2 lg:w-1/4 md:block min-h-full">
        <div class="rounded border border-gray-500 mr-3 p-3" style="height: 1000px">
          <FilterStoreBar />
        </div>
      </div>
      <div class="content-bar">
        <RenderStoreCard />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //need fetching
  //https://panjs.com/ywc18.json
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.app {
  @apply min-h-screen;
  font-family: 'Prompt', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji' !important;
}

.container {
  @apply flex justify-start items-center;
}

.bar {
  @apply flex justify-center items-center w-full bg-red-200 mx-auto;
}

.main {
  @apply flex justify-start m-3;
}

.sidebar {
  @apply w-1/4;
}

.content-bar {
  @apply flex-1;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
