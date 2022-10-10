const db = require("./connection");
const { User, Item } = require("../models");

db.once("open", async () => {
  // await Category.deleteMany();

  // const categories = await Category.insertMany([
  //   { name: 'Food' },
  //   { name: 'Household Supplies' },
  //   { name: 'Electronics' },
  //   { name: 'Books' },
  //   { name: 'Toys' }
  // ]);

  // console.log('categories seeded');

  await Item.deleteMany();

  const products = await Item.insertMany([
    {
      itemName: "Tin of Cookies",
      itemDesc:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      itemImage: "cookie-tin.jpg",
      itemPrice: 2.99,
    },
    {
      itemName: "Canned Coffee",
      itemDesc:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      itemImage: "canned-coffee.jpg",
      itemPrice: 1.99,
    },
    {
      itemName: "Toilet Paper",
      itemDesc:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit.",
      itemImage: "toilet-paper.jpg",
      itemPrice: 7.99,
    },
    {
      itemName: "Handmade Soap",
      itemDesc:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      itemImage: "soap.jpg",
      itemPrice: 3.99,
    },
    {
      itemName: "Set of Wooden Spoons",
      itemDesc:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      itemImage: "wooden-spoons.jpg",
      itemPrice: 14.99,
    },
    {
      itemName: "Camera",
      itemDesc:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis.",
      itemImage: "camera.jpg",
      itemPrice: 399.99,
    },
    {
      itemName: "Tablet",
      itemDesc:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem.",
      itemImage: "tablet.jpg",
      itemPrice: 199.99,
    },
    {
      itemName: "Tales at Bedtime",
      itemDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue.",
      itemImage: "bedtime-book.jpg",
      itemPrice: 9.99,
    },
    {
      itemName: "Spinning Top",
      itemDesc: "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      itemImage: "spinning-top.jpg",
      itemPrice: 1.99,
    },
    {
      itemName: "Set of Plastic Horses",
      itemDesc:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      itemImage: "plastic-horses.jpg",
      itemPrice: 2.99,
    },
    {
      itemName: "Teddy Bear",
      itemDesc:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum.",
      itemImage: "teddy-bear.jpg",
      itemPrice: 7.99,
    },
    {
      itemName: "Alphabet Blocks",
      itemDesc:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      itemImage: "alphabet-blocks.jpg",
      itemPrice: 9.99,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    username: "testers1",
    email: "testers1@testmail.com",
    password: "123456",
    items: [],
  });

  console.log("users seeded");

  process.exit();
});
