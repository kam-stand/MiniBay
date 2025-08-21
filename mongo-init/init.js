/**
 * init.js to add data into MongoDB
 */

const DATABASE = 'productdb';

db.createUser({
  user: 'admin',
  pwd: 'password',
  roles: [{ role: 'readWrite', db: DATABASE }],
});

db = new Mongo().getDB(DATABASE);

db.createCollection('product', { capped: false });

db.product.insertMany([
  {
    name: "Classic T-Shirt",
    brand: "Cottonio",
    categories: ["clothing", "men", "tops"],
    price: 19.99,
    averageRating: 4,
    description: "Comfortable cotton t-shirt for everyday wear.",
    reviews: [
      { userId: "1", username: "Alice", review: "Very soft!", rating: 5 },
      { userId: "2", username: "Bob", review: "Good value.", rating: 4 }
    ]
  },
  {
    name: "Wireless Mouse",
    brand: "TechWare",
    categories: ["electronics", "accessories"],
    price: 27.50,
    averageRating: 5,
    description: "Ergonomic wireless mouse with long battery life.",
    reviews: [
      { userId: "3", username: "Charlie", review: "Works perfectly.", rating: 5 }
    ]
  },
  {
    name: "Ceramic Mug",
    brand: "HomeCraft",
    categories: ["kitchen", "drinkware"],
    price: 11.95,
    averageRating: 4,
    description: "Durable ceramic mug, dishwasher safe.",
    reviews: [
      { userId: "4", username: "Dana", review: "Lovely design.", rating: 4 }
    ]
  },
  {
    name: "Bluetooth Headphones",
    brand: "SoundPeak",
    categories: ["electronics", "audio"],
    price: 64.99,
    averageRating: 5,
    description: "Noise-cancelling headphones with rich sound.",
    reviews: [
      { userId: "5", username: "Eve", review: "Great sound quality.", rating: 5 },
      { userId: "6", username: "Frank", review: "Very comfortable.", rating: 5 }
    ]
  },
  {
    name: "Yoga Mat",
    brand: "FlexFit",
    categories: ["fitness", "equipment"],
    price: 29.99,
    averageRating: 4,
    description: "Non-slip yoga mat, perfect for home or studio.",
    reviews: []
  },
  {
    name: "Laptop Stand",
    brand: "ErgoDesk",
    categories: ["office", "furniture"],
    price: 35.00,
    averageRating: 5,
    description: "Adjustable laptop stand for better ergonomics.",
    reviews: [
      { userId: "7", username: "Grace", review: "Stable and sturdy.", rating: 5 }
    ]
  },
  {
    name: "Travel Backpack",
    brand: "Voyage",
    categories: ["bags", "travel"],
    price: 44.95,
    averageRating: 4,
    description: "Spacious backpack with multiple compartments.",
    reviews: []
  },
  {
    name: "Electric Kettle",
    brand: "BrewPro",
    categories: ["appliance", "kitchen"],
    price: 23.49,
    averageRating: 4,
    description: "Fast-boiling electric kettle, safe and easy to use.",
    reviews: [
      { userId: "8", username: "Hank", review: "Boils quickly!", rating: 4 }
    ]
  },
  {
    name: "LED Desk Lamp",
    brand: "Luminex",
    categories: ["lighting", "office"],
    price: 18.25,
    averageRating: 5,
    description: "Bright and energy-efficient LED desk lamp.",
    reviews: []
  },
  {
    name: "Water Bottle",
    brand: "HydroFlow",
    categories: ["outdoors", "drinkware"],
    price: 13.85,
    averageRating: 4,
    description: "Reusable water bottle with leak-proof lid.",
    reviews: [
      { userId: "9", username: "Ivy", review: "Keeps water cold.", rating: 4 }
    ]
  },
  {
    name: "Gaming Keyboard",
    brand: "KeyBlaze",
    categories: ["electronics", "gaming"],
    price: 52.20,
    averageRating: 5,
    description: "Mechanical keyboard with RGB backlight.",
    reviews: [
      { userId: "10", username: "Jake", review: "Perfect for gaming.", rating: 5 }
    ]
  },
  {
    name: "Summer Dress",
    brand: "LaMode",
    categories: ["clothing", "women", "dresses"],
    price: 31.00,
    averageRating: 4,
    description: "Lightweight dress ideal for summer days.",
    reviews: []
  },
  {
    name: "Cookware Set",
    brand: "HomeCraft",
    categories: ["kitchen", "cookware"],
    price: 82.99,
    averageRating: 5,
    description: "Non-stick cookware set for all your cooking needs.",
    reviews: [
      { userId: "11", username: "Liam", review: "Excellent quality.", rating: 5 }
    ]
  },
  {
    name: "Winter Jacket",
    brand: "LaMode",
    categories: ["clothing", "outerwear"],
    price: 79.50,
    averageRating: 4,
    description: "Warm jacket perfect for cold weather.",
    reviews: []
  },
  {
    name: "Smart Watch",
    brand: "TechWare",
    categories: ["electronics", "wearables"],
    price: 120.00,
    averageRating: 5,
    description: "Feature-rich smartwatch with fitness tracking.",
    reviews: [
      { userId: "12", username: "Mia", review: "Love the features!", rating: 5 }
    ]
  }
]);
