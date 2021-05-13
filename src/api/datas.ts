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
