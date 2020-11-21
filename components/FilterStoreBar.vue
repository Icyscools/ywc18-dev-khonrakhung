<template>
  <div>
    <div class="section">
      <h1 class="font-bold text-black my-2">ประเภทร้านค้า</h1>
      <div v-for="(cat, index) in categories" :key="index">
        <input type="radio" :id="cat.name" :value="cat.name" v-model="filter.selectCategory" />
        <label :for="cat.name" class="text-sm font-light text-gray-800"> {{ cat.name }}</label>
      </div>
    </div>

    <div class="section">
      <h1 class="font-bold text-black my-2">จังหวัด/ใกล้ฉัน</h1>
      <select v-model="filter.selectProvince" class="rounded w-full border p-2">
        <option value="" disabled selected>กรุณาเลือก</option>
        <option
          :class="[
            'py-3 text-sm font-light text-gray-800',
            filter.selectProvince == 'พื้นที่ใกล้ฉัน' ? 'bg-red-200' : '',
          ]"
        >
          พื้นที่ใกล้ฉัน
        </option>
        <option
          :class="[
            'py-3 text-sm font-light text-gray-800',
            filter.selectProvince == 'สถานที่ทั้งหมด' ? 'bg-red-200' : '',
          ]"
        >
          สถานที่ทั้งหมด
        </option>
        <option
          :class="['py-3 text-sm font-light text-gray-800', filter.selectProvince == province ? 'bg-red-200' : '']"
          v-for="(province, index) in provinces"
          :key="index"
        >
          {{ province }}
        </option>
      </select>
    </div>

    <div class="section">
      <h1 class="font-bold text-black my-2">ราคา</h1>
      <select v-model="filter.selectPriceRange" class="rounded w-full border p-2">
        <option value="" disabled selected>กรุณาเลือก</option>
        <option
          :class="['py-3 text-sm font-light text-gray-800', filter.selectPriceRange == 'ทั้งหมด' ? 'bg-red-200' : '']"
        >
          ทั้งหมด
        </option>
        <option
          :class="['py-3 text-sm font-light text-gray-800', filter.selectPriceRange == price ? 'bg-red-200' : '']"
          v-for="(price, index) in priceRange"
          :key="index"
        >
          {{ price }}
        </option>
      </select>
    </div>

    <div class="section" v-if="filter.selectCategory != ''">
      <h1 class="font-bold text-black my-2">ประเภท{{ filter.selectCategory }}</h1>
      <div v-for="(sub, index) in subcategories" :key="index">
        <input type="radio" :id="sub" :value="sub" v-model="filter.selectSubCategory" />
        <label :for="sub" class="text-sm font-light text-gray-800"> {{ sub }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['categories', 'provinces', 'priceRange', 'filter'],
  computed: {
    subcategories() {
      const cat = this.categories.filter((v) => v.name == this.filter.selectCategory)[0];
      return cat.subcategories ?? [];
    },
  },
};
</script>

<style scoped>
.section {
  @apply mb-3;
}
</style>
