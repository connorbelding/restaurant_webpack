import {
  WingsImg,
  BurgerImg,
  PastaImg,
  IceCreamImg,
  PizzaImg,
  SteakImg,
} from "./images";

const menuItems = [
  {
    name: "Chicken Wings",
    desc: "Served with dipping sauce and celery sticks",
    imgUrl: WingsImg,
    price: 11.99,
  },
  {
    name: "Hamburger",
    desc: "Served on a toasted bun with french fries",
    imgUrl: BurgerImg,
    price: 15.99,
  },
  {
    name: "Pasta",
    desc: "Served with breadsticks and salad",
    imgUrl: PastaImg,
    price: 14.99,
  },
  {
    name: "Ice Cream",
    desc: "8 different flavors served in a cone or cup",
    imgUrl: IceCreamImg,
    price: 6.99,
  },
  {
    name: "Pizza",
    desc: "Thick-crust pizza served with a variety of toppings",
    imgUrl: PizzaImg,
    price: 14.99,
  },
  {
    name: "Steak",
    desc: "Served with mashed potatoes",
    imgUrl: SteakImg,
    price: 18.99,
  },
];

export default menuItems;
