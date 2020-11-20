<template>
  <div class="render-stores">
    <div v-for="(store, index) in stores" :key="index">
      <StoreCard :store="store" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stores: [
        {
          shopNameTH: 'Kanysorn Cafe',
          categoryName: 'งานบริการอื่นๆ / เบ็ดเตล็ด',
          subcategoryName: 'สินค้า และ บริการ เกี่ยวกับการตกแต่งบ้าน',
          coverImageId:
            'https://images.unsplash.com/photo-1597227772909-a6d166b48b79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          facilities: ['ที่จอดรถ'],
          priceLevel: 1,
          isOpen: 'Y',
          highlightText: '<strong>ร้านทุกอย่าง</strong> โต๊ะ ตู้ เตียง',
          recommendedItems: ['แจกัน', 'จานชาม', 'เก้าอี้สามขา'],
          addressProvinceName: 'กรุงเทพมหานคร',
          addressDistrictName: 'เขตธนบุรี',
        },
        {
          shopNameTH: 'Wiput Shop',
          categoryName: 'แฟชั่น',
          subcategoryName: 'ร้านขายเสื้อผ้า / เครื่องประดับ / สินค้าแฟชั่น',
          coverImageId:
            'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
          facilities: ['ที่จอดรถ', 'สามารถนำสัตว์เลี้ยงเข้าได้'],
          priceLevel: 2,
          isOpen: 'N/A',
          highlightText: 'Custom Keyboard By <strong>Wiput</strong>, จัดจำหน่าย Keychron ทุกรุ่น',
          recommendedItems: ['Keychron K2', 'Keychron K4'],
          addressProvinceName: 'กรุงเทพมหานคร',
          addressDistrictName: 'เขตพระนคร',
        },
        {
          shopNameTH: 'วายดับบลิวซีหมูกระทะ',
          categoryName: 'ร้านอาหาร',
          subcategoryName: 'อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว',
          coverImageId:
            'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          facilities: ['ที่จอดรถ', 'รับจองล่วงหน้า'],
          priceLevel: 3,
          isOpen: 'N',
          highlightText: 'สด สะอาด <strong>ราคาเป็นมิตร</strong> จนต้องมากินซ้ำ',
          recommendedItems: ['หมูกระทะ', 'สุกี้'],
          addressProvinceName: 'กรุงเทพมหานคร',
          addressDistrictName: 'เขตธนบุรี',
        },
        {
          shopNameTH: 'วายดับบลิวซีหมูกระทะ',
          categoryName: 'ร้านอาหาร',
          subcategoryName: 'อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว',
          coverImageId:
            'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          facilities: ['ที่จอดรถ', 'รับจองล่วงหน้า'],
          priceLevel: 3,
          isOpen: 'N',
          highlightText: 'สด สะอาด <strong>ราคาเป็นมิตร</strong> จนต้องมากินซ้ำ',
          recommendedItems: ['หมูกระทะ', 'สุกี้'],
          addressProvinceName: 'กรุงเทพมหานคร',
          addressDistrictName: 'เขตธนบุรี',
        },
        {
          shopNameTH: 'วายดับบลิวซีหมูกระทะ',
          categoryName: 'ร้านอาหาร',
          subcategoryName: 'อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว',
          coverImageId:
            'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          facilities: ['ที่จอดรถ', 'รับจองล่วงหน้า'],
          priceLevel: 3,
          isOpen: 'Y',
          highlightText: 'สด สะอาด <strong>ราคาเป็นมิตร</strong> จนต้องมากินซ้ำ',
          recommendedItems: ['หมูกระทะ', 'สุกี้'],
          addressProvinceName: 'กรุงเทพมหานคร',
          addressDistrictName: 'เขตธนบุรี',
        },
        {
          shopNameTH: 'วายดับบลิวซีหมูกระทะ',
          categoryName: 'ร้านอาหาร',
          subcategoryName: 'อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว',
          coverImageId:
            'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          facilities: ['ที่จอดรถ', 'รับจองล่วงหน้า'],
          priceLevel: 3,
          isOpen: 'N',
          highlightText: 'สด สะอาด <strong>ราคาเป็นมิตร</strong> จนต้องมากินซ้ำ',
          recommendedItems: ['หมูกระทะ', 'สุกี้'],
          addressProvinceName: 'กรุงเทพมหานคร',
          addressDistrictName: 'เขตธนบุรี',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
