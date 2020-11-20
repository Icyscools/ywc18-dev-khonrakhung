import { mount } from '@vue/test-utils';
import StoreCard from '@/components/StoreCard.vue';

describe('Store Card', () => {
  test('can display store name?', () => {
    const storeName = 'test store';
    const wrapper = mount(StoreCard, {
      propsData: {
        shopNameTH: storeName,
      },
    });

    const nameDiv = wrapper.find({ ref: 'store-name' });
    expect(nameDiv.text()).toContain(storeName);
  });

  test('can display store cover image?', () => {
    const storeImage = 'https://picsum.photos/200';
    const wrapper = mount(StoreCard, {
      propsData: {
        coverImageId: storeImage,
      },
    });

    const img = wrapper.find({ ref: 'cover-img' });
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(storeImage);
  });

  test('can display store category?', () => {
    const storeCategoryName = 'test category';
    const wrapper = mount(StoreCard, {
      propsData: {
        categoryName: storeCategoryName,
      },
    });

    const categoryDiv = wrapper.find({ ref: 'category-name' });
    expect(categoryDiv.exists()).toBe(true);
    expect(categoryDiv.text()).toContain(storeCategoryName);
  });

  test('can display store subcategory?', () => {
    const storeSubCategoryName = 'test subcategory';
    const wrapper = mount(StoreCard, {
      propsData: {
        categoryName: storeSubCategoryName,
      },
    });

    const subcategoryDiv = wrapper.find({ ref: 'subcategory-name' });
    expect(subcategoryDiv.exists()).toBe(true);
    expect(subcategoryDiv.text()).toContain(storeSubCategoryName);
  });

  test('can display store facilities?', () => {
    const storeFacilities = ['Test facilities 1', 'Test facilities 2', 'Test facilities 3'];
    const wrapper = mount(StoreCard, {
      propsData: {
        facilities: storeFacilities,
      },
    });

    const facilitiesDiv = wrapper.find({ ref: 'facilities' });
    expect(facilitiesDiv.exists()).toBe(true);

    const faculitiesDivList = facilitiesDiv.findAll('div.faculity-icon');
    expect(facilitiesDivList.length).toBe(3);
  });

  test('can display store price level 1?', () => {
    const wrapper = mount(StoreCard, {
      propsData: {
        priceLevel: 1,
      },
    });

    const priceLevelDiv = wrapper.find({ ref: 'price-level' });
    expect(priceLevelDiv.exists()).toBe(true);
    expect(priceLevelDiv.text()).toBe('฿฿฿฿');

    const priceChars = priceLevelDiv.findAll('span');
    expect(priceChars.length).toBe(4);
    expect(priceChars.at(0).classes()).toContain('active');
  });

  test('can display store price level 1?', () => {
    const wrapper = mount(StoreCard, {
      propsData: {
        priceLevel: 1,
      },
    });

    const priceLevelDiv = wrapper.find({ ref: 'price-level' });
    expect(priceLevelDiv.exists()).toBe(true);
    expect(priceLevelDiv.text()).toBe('฿฿฿฿');

    const priceChars = priceLevelDiv.findAll('span');
    expect(priceChars.length).toBe(4);
    expect(priceChars.at(0).classes()).toContain('active');
  });

  test('can display store price level 2?', () => {
    const wrapper = mount(StoreCard, {
      propsData: {
        priceLevel: 2,
      },
    });

    const priceLevelDiv = wrapper.find({ ref: 'price-level' });
    expect(priceLevelDiv.exists()).toBe(true);
    expect(priceLevelDiv.text()).toBe('฿฿฿฿');

    const priceChars = priceLevelDiv.findAll('span');
    expect(priceChars.length).toBe(4);
    expect(priceChars.at(0).classes()).toContain('active');
    expect(priceChars.at(1).classes()).toContain('active');
  });

  test('can display store price level 3?', () => {
    const wrapper = mount(StoreCard, {
      propsData: {
        priceLevel: 3,
      },
    });

    const priceLevelDiv = wrapper.find({ ref: 'price-level' });
    expect(priceLevelDiv.exists()).toBe(true);
    expect(priceLevelDiv.text()).toBe('฿฿฿฿');

    const priceChars = priceLevelDiv.findAll('span');
    expect(priceChars.length).toBe(4);
    expect(priceChars.at(0).classes()).toContain('active');
    expect(priceChars.at(1).classes()).toContain('active');
    expect(priceChars.at(2).classes()).toContain('active');
  });

  test('can display store price level 4?', () => {
    const wrapper = mount(StoreCard, {
      propsData: {
        priceLevel: 3,
      },
    });

    const priceLevelDiv = wrapper.find({ ref: 'price-level' });
    expect(priceLevelDiv.exists()).toBe(true);
    expect(priceLevelDiv.text()).toBe('฿฿฿฿');

    const priceChars = priceLevelDiv.findAll('span');
    expect(priceChars.length).toBe(4);
    expect(priceChars.at(0).classes()).toContain('active');
    expect(priceChars.at(1).classes()).toContain('active');
    expect(priceChars.at(2).classes()).toContain('active');
    expect(priceChars.at(3).classes()).toContain('active');
  });

  test('can display store open state?', () => {
    const wrapper = mount(StoreCard, {
      propsData: {
        isOpen: 'Y',
      },
    });

    const openStateDiv = wrapper.find({ ref: 'open-state' });
    expect(openStateDiv.exists()).toBe(true);
    expect(openStateDiv.text()).toBe('เปิดอยู่');
    expect(openStateDiv.classes()).toContain('active');
  });

  test('can display store close state?', () => {
    const wrapper = mount(StoreCard, {
      propsData: {
        isOpen: 'N',
      },
    });

    const openStateDiv = wrapper.find({ ref: 'open-state' });
    expect(openStateDiv.exists()).toBe(true);
    expect(openStateDiv.text()).toBe('ปิดอยู่');
    expect(openStateDiv.classes()).not.toContain('active');
  });

  test('can not display store N/A state?', () => {
    const wrapper = mount(StoreCard, {
      propsData: {
        isOpen: 'N/A',
      },
    });

    const openStateDiv = wrapper.find({ ref: 'open-state' });
    expect(openStateDiv.exists()).not.toBe(true);
  });

  test('can display store highlight text?', () => {
    const highlightText = '<strong>Test strong</strong> and <i>italic</i>';
    const wrapper = mount(StoreCard, {
      propsData: {
        highlightText: highlightText,
      },
    });

    const highlightDiv = wrapper.find({ ref: 'highlight-text' });
    expect(highlightDiv.exists()).toBe(true);
    expect(highlightDiv.html()).toBe(highlightText);
  });

  test('can display store recommended items?', () => {
    const recommendItems = ['A', 'B', 'C'];
    const wrapper = mount(StoreCard, {
      propsData: {
        recommendItems: recommendItems,
      },
    });

    const recommendDiv = wrapper.find({ ref: 'recommends' });
    expect(recommendDiv.exists()).toBe(true);

    const recommendDivList = recommendDiv.findAll('div');
    expect(recommendDivList.length).toBe(3);
  });

  test('can display store address province?', () => {
    const addressProvinceName = 'test province';
    const wrapper = mount(StoreCard, {
      propsData: {
        addressProvinceName: addressProvinceName,
      },
    });

    const provinceDiv = wrapper.find({ ref: 'address-province' });
    expect(provinceDiv.exists()).toBe(true);
    expect(provinceDiv.text()).toBe(addressProvinceName);
  });

  test('can display store address district?', () => {
    const addressDistrictName = 'test district';
    const wrapper = mount(StoreCard, {
      propsData: {
        addressDistrictName: addressDistrictName,
      },
    });

    const districtDiv = wrapper.find({ ref: 'address-district' });
    expect(districtDiv.exists()).toBe(true);
    expect(districtDiv.text()).toBe(addressDistrictName);
  });

  test('can display dummy data correctly?', () => {
    const wrapper = mount(StoreCard, {
      propsData: {
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
    });

    expect(wrapper.exists()).toBe(true);
  });
});
