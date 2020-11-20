<template>
  <div class="container mb-3">
    <img :src="store.coverImageId" class="image-block" ref="cover-img" />
    <div class="py-3 px-5 text-left">
      <div class="card-line headline">
        <h1 ref="store-name" class="store-name">{{ store.shopNameTH }}</h1>
        <div ref="open-state" class="state-tag">
          <span v-if="store.isOpen == 'Y'" class="active">เปิดอยู่</span>
          <span v-else-if="store.isOpen == 'N'">ปิดอยู่</span>
        </div>
      </div>

      <div class="card-line subline">
        <span>
          <span ref="category-name">{{ store.categoryName }}</span>
          <span ref="subcategory-name">{{ store.subcategoryName }}</span>
        </span>
        <div ref="price-level" class="price">
          <span v-bind:class="store.priceLevel >= 1 ? 'active' : ''">฿</span>
          <span v-bind:class="store.priceLevel >= 2 ? 'active' : ''">฿</span>
          <span v-bind:class="store.priceLevel >= 3 ? 'active' : ''">฿</span>
          <span v-bind:class="store.priceLevel >= 4 ? 'active' : ''">฿</span>
        </div>
        <span>
          <span ref="address-district">{{ store.addressDistrictName }}</span>
          <span ref="address-province">{{ store.addressProvinceName }}</span>
        </span>
      </div>

      <div class="divider"></div>

      <div class="card-line">
        <div ref="highlight-text">
          <div v-html="store.highlightText"></div>
        </div>
      </div>

      <div class="card-line" ref="recommends">
        <div class="flex justify-start">
          <span class="mr-1 text-black font-medium">เมนูแนะนำ:</span>
          <div v-for="(item, index) in store.recommendedItems" :key="index">
            <span class="mr-1 recommend-item">{{ item }}</span>
          </div>
        </div>
      </div>

      <div class="card-line" ref="facilities">
        <div class="flex justify-start">
          <div v-for="(facility, index) in store.facilities" :key="index">
            <div class="faculity-item">
              <img v-if="facility == 'ที่จอดรถ'" src="~/assets/icons/ที่จอดรถ.png" />
              <img v-else-if="facility == 'บริการจัดส่งอาหาร'" src="~/assets/icons/บริการจัดส่งอาหาร.png" />
              <img v-else-if="facility == 'รับจองล่วงหน้า'" src="~/assets/icons/รับจองล่วงหน้า.png" />
              <img
                v-else-if="facility == 'สามารถนำสัตว์เลี้ยงเข้าได้'"
                src="~/assets/icons/สามารถนำสัตว์เลี้ยงเข้าได้.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['store'],
};
</script>

<style scoped>
.container {
  @apply justify-start items-start flex-col flex-shrink border rounded p-2;
}

.image-block {
  @apply object-cover rounded;
  width: 100%;
  height: 240px;
}

.divider {
  min-width: 100%;
  margin-top: 2em;
  border-bottom: 1px solid rgb(229, 231, 235);
}

@screen lg {
  .container {
    @apply flex-row;
    min-height: 240px;
  }

  .image-block {
    @apply object-cover;
    width: 240px;
    height: 240px;
  }

  .divider {
    width: 30em;
    max-width: 100%;
    margin-top: 1.25em;
    margin-bottom: 0.5em;
    border-bottom: 1px solid rgb(229, 231, 235);
  }
}

.store-name {
  @apply text-xl font-bold subpixel-antialiased !important;
}

.headline {
  @apply text-black !important;
}

.subline div::after {
  content: '|';
  margin: 0 5px;
}

.subline div::before {
  content: '|';
  margin: 0 5px;
}

.card-line {
  @apply flex flex-wrap justify-start items-center my-1 text-left text-gray-600 text-sm font-light;
}

.state-tag {
  @apply mx-2;
}

.state-tag span {
  @apply px-2 py-1 rounded text-white text-xs !important;
  @apply bg-gray-500;
}

.state-tag span.active {
  @apply bg-green-500;
}

.price {
  @apply flex text-gray-400;
}

.price .active {
  @apply text-gray-800;
}

.faculity-item {
  @apply rounded-full bg-white border-green-400 border flex justify-center items-center mr-2;
  width: 30px;
  height: 30px;
}

.faculity-item img {
  width: 19px;
  height: auto;
}
</style>
