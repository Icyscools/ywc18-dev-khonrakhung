<template>
  <div class="app">
    <div class="bar p-2">
      <div class="container">
        <img src="/logo-mini.png" class="block md:hidden h-full w-auto" />
        <img src="/logo.png" class="hidden md:block h-full w-auto" />
        <input
          v-model="filter.merchantName"
          class="rounded w-3/4 p-2 border border-1 border-gray-400 ml-3"
          placeholder="ค้นหา"
        />
      </div>
    </div>
    <div class="bar p-2" style="background: rgb(39, 57, 124)">
      <div class="container text-white">
        <span class="text-light">หน้าแรก</span>
        <span class="mx-2">/</span>
        <span class="text-bold">ค้นหา</span>
      </div>
    </div>
    <div class="main">
      <div class="search-header">
        <h1 class="text-bold text-xl">ผลการค้นหา {{ filter.selectCategory }} ทั้งหมด</h1>
      </div>
      <div class="main-content flex-col sm:flex-row">
        <div class="w-full sm:w-1/2 lg:w-1/4 min-h-full">
          <div class="rounded border border-gray-500 mb-2 sm:mr-5 p-3 bg-white">
            <FilterStoreBar
              :categories="data.categories"
              :priceRange="data.priceRange"
              :provinces="data.provinces"
              :filter="filter"
            />
          </div>
        </div>
        <div class="content-bar">
          <RenderStoreCard :merchants="filterMerchants" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      filter: {
        merchantName: '',
        selectCategory: '',
        selectSubCategory: '',
        selectProvince: '',
        selectPriceRange: '',
      },
    };
  },
  computed: {
    filterMerchants() {
      let merchants = this.data.merchants;

      if (this.filter.selectProvince) {
        merchants = merchants.filter(
          (m) =>
            m.addressProvinceName == this.filter.selectProvince ||
            this.filter.selectProvince == 'พื้นที่ใกล้คุณ' ||
            ths.filter.selectProvince == 'สถานที่ทั้งหมด'
        );
      }

      if (this.filter.selectPriceRange) {
        const priceLevel =
          this.filter.selectPriceRange == 'ไม่เกิน 100 บาท'
            ? 1
            : this.filter.selectPriceRange == '100 - 300 บาท'
            ? 2
            : this.filter.selectPriceRange == '300 - 600 บาท'
            ? 3
            : this.filter.selectPriceRange == 'มากกว่า 600 บาท'
            ? 4
            : -1;
        merchants = merchants.filter((m) => m.priceLevel == priceLevel || priceLevel == -1);
      }
      return merchants;
    },
  },
  async fetch() {
    this.data = await fetch('https://panjs.com/ywc18.json').then((res) => res.json());
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.app {
  @apply min-h-screen bg-gradient-to-b from-white to-blue-500;
  font-family: 'Prompt', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji' !important;
}

.container {
  @apply flex justify-start items-center;
}

.bar {
  @apply flex justify-center items-center w-full mx-auto;
}

.main {
  @apply m-4;
}

.main-content {
  @apply flex justify-start;
}

.search-header {
  @apply mb-12;
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
