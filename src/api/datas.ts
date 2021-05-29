import { AppIntroSlide1, IntroSlideXml1 } from './../svg/AppIntroSlide1';
import { IntroSlideXml2 } from './../svg/AppIntroSlide2';
import { IntroSlideXml3 } from './../svg/AppIntroSlide3';

export const advertData: {}[] = [
  { id: '001' },
  { id: '002' },
  { id: '003' },
  { id: '004' },
  { id: '005' },
  { id: '006' },
];

export const generalCategoryData: {}[] = [
  { id: '001', title: 'Italian Dish' },
  { id: '002', title: 'Drinks' },
  { id: '003', title: 'Soup' },
  { id: '004', title: 'Hot Combos' },
  { id: '005', title: 'Swallow' },
  { id: '006', title: 'Fast Food' },
];

export const topCategoryData: {}[] = [
  {
    id: '001',
    title: 'Swallow',
    imageSource: require('../assets/images/swallows.png'),
  },
  {
    id: '002',
    title: 'Drinks',
    imageSource: require('../assets/images/drinks.png'),
  },
  {
    id: '003',
    title: 'Fast Foods',
    imageSource: require('../assets/images/fast-foods.png'),
  },
  {
    id: '004',
    title: 'Noodles',
    imageSource: require('../assets/images/noodles.png'),
  },
];

export const menuData: {}[] = [
  {
    id: '001',
    title: 'Swallow',
    imageSource: require('../assets/images/swallows.png'),
  },
  {
    id: '002',
    title: 'Drinks',
    imageSource: require('../assets/images/drinks.png'),
  },
  {
    id: '003',
    title: 'Fast Foods',
    imageSource: require('../assets/images/fast-foods.png'),
  },
  {
    id: '004',
    title: 'Italian Dish',
    imageSource: require('../assets/images/menu-italian-dish.png'),
  },
  {
    id: '005',
    title: 'Combos',
    imageSource: require('../assets/images/menu-combos.png'),
  },
  {
    id: '006',
    title: 'Soup',
    imageSource: require('../assets/images/menu-soup.png'),
  },
  {
    id: '007',
    title: 'Sea Food',
    imageSource: require('../assets/images/menu-sea-food.png'),
  },
  {
    id: '008',
    title: 'Vegetables',
    imageSource: require('../assets/images/menu-vegetable.png'),
  },
  {
    id: '009',
    title: 'Noodles',
    imageSource: require('../assets/images/noodles.png'),
  },
];

export const specialCombosData: {}[] = [
  {
    id: '001',
    title: 'Jollof Rice and Chicken',
    imageSource: require('../assets/images/jollof-rice.png'),
    price: '3000',
    potion: '1',
  },
  {
    id: '002',
    title: 'Pounded Yam and Egusi Soup',
    imageSource: require('../assets/images/pounded-yam.png'),
    price: '3360',
    potion: '1',
  },
  {
    id: '003',
    title: 'Noodles mixed with Chicken',
    imageSource: require('../assets/images/noodles.png'),
    price: '2900',
    potion: '1',
  },
  {
    id: '004',
    title: 'Pizza mixed with Chicken',
    imageSource: require('../assets/images/pizza.png'),
    price: '1290',
    potion: '1',
  },
  {
    id: '005',
    title: 'Jollof Rice and Chicken',
    imageSource: require('../assets/images/jollof-rice.png'),
    price: '3000',
    potion: '1',
  },
  {
    id: '006',
    title: 'Pounded Yam and Egusi Soup',
    imageSource: require('../assets/images/pounded-yam.png'),
    price: '3360',
    potion: '1',
  },
  {
    id: '007',
    title: 'Noodles mixed with Chicken',
    imageSource: require('../assets/images/noodles.png'),
    price: '2900',
    potion: '1',
  },
  {
    id: '008',
    title: 'Pizza mixed with Chicken',
    imageSource: require('../assets/images/pizza.png'),
    price: '1290',
    potion: '1',
  },
  {
    id: '009',
    title: 'Jollof Rice and Chicken',
    imageSource: require('../assets/images/jollof-rice.png'),
    price: '3000',
    potion: '4',
  },
  {
    id: '010',
    title: 'Pounded Yam and Egusi Soup',
    imageSource: require('../assets/images/pounded-yam.png'),
    price: '3360',
    potion: '1',
  },
  {
    id: '011',
    title: 'Noodles mixed with Chicken',
    imageSource: require('../assets/images/noodles.png'),
    price: '2900',
    potion: '1',
  },
  {
    id: '012',
    title: 'Pizza mixed with Chicken',
    imageSource: require('../assets/images/pizza.png'),
    price: '1290',
    potion: '1',
  },
];

export const addOnData: {} = {
  meat: [
    { id: '001', title: 'chicken', price: '1234' },
    { id: '002', title: 'beef', price: '1934' },
    { id: '003', title: 'pork', price: '2734' },
    { id: '004', title: 'red meat', price: '2034' },
  ],
  drinks: [
    { id: '001', title: 'coke', price: '150' },
    { id: '002', title: 'fanta', price: '150' },
    { id: '003', title: 'sprite', price: '100' },
    { id: '004', title: 'pepsi', price: '130' },
    { id: '005', title: 'monster', price: '200' },
  ],
  others: [{ id: '001', title: 'coleslaw', price: '240' }],
};

export const listOfAddOn: string[] = [
  'chicken',
  'beef',
  'pork',
  'red meat',
  'coke',
  'fanta',
  'sprite',
  'pepsi',
  'monster',
  'coleslaw',
];

export const appIntroSlideData = [
  {
    id: '001',
    xml: IntroSlideXml1,
    title: 'Order Food',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu ut aliquet et cursus.',
  },
  {
    id: '002',
    xml: IntroSlideXml2,
    title: 'Schedule Time of Delivery',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu ut aliquet et cursus.',
  },
  {
    id: '003',
    xml: IntroSlideXml3,
    title: 'Enjoy Your Meal',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi arcu ut aliquet et cursus.',
  },
];

export const cartItemData: {}[] = [
  {
    id: '001',
    title: 'Mixed With Chicken and Coke',
    additions: '2',
    price: '1540',
    discountPercent: '9.2',
    quantity: '2',
    imageSource: require('../assets/images/burger.png'),
  },
  {
    id: '002',
    title: 'Mixed With Sauce and Sprite',
    additions: '3',
    price: '2190',
    discountPercent: '5',
    quantity: '1',
    imageSource: require('../assets/images/noodles.png'),
  },
  {
    id: '003',
    title: 'Mixed With Sauce and Sprite',
    additions: '1',
    price: '2001',
    discountPercent: '3',
    quantity: '3',
    imageSource: require('../assets/images/pounded-yam.png'),
  },
];

export const promoCodeData: {}[] = [
  { id: '001', title: '', code: 'abc123', discountPercent: '10' },
  { id: '002', title: '', code: 'efg456', discountPercent: '15' },
  { id: '003', title: '', code: 'ijk789', discountPercent: '9' },
];
