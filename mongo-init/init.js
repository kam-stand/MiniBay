/**
 * init.js to add data into mongodb
 */


const DATABASE = 'productdb'

db.createUser({
    user: 'admin',
    pwd: 'password',
    roles: [
        {
            role: 'readWrite',
            db: DATABASE,
        },
    ],
});

db = new Mongo().getDB(DATABASE);

db.createCollection('product', { capped: false });

db.product.insertMany([
    {
        name: "Classic T-Shirt",
        brand: "Cottonio",
        categories: ["clothing", "men", "tops"],
        price: 19.99
    },
    {
        name: "Wireless Mouse",
        brand: "TechWare",
        categories: ["electronics", "accessories"],
        price: 27.50
    },
    {
        name: "Ceramic Mug",
        brand: "HomeCraft",
        categories: ["kitchen", "drinkware"],
        price: 11.95
    },
    {
        name: "Bluetooth Headphones",
        brand: "SoundPeak",
        categories: ["electronics", "audio"],
        price: 64.99
    },
    {
        name: "Yoga Mat",
        brand: "FlexFit",
        categories: ["fitness", "equipment"],
        price: 29.99
    },
    {
        name: "Laptop Stand",
        brand: "ErgoDesk",
        categories: ["office", "furniture"],
        price: 35.00
    },
    {
        name: "Travel Backpack",
        brand: "Voyage",
        categories: ["bags", "travel"],
        price: 44.95
    },
    {
        name: "Electric Kettle",
        brand: "BrewPro",
        categories: ["appliance", "kitchen"],
        price: 23.49
    },
    {
        name: "LED Desk Lamp",
        brand: "Luminex",
        categories: ["lighting", "office"],
        price: 18.25
    },
    {
        name: "Water Bottle",
        brand: "HydroFlow",
        categories: ["outdoors", "drinkware"],
        price: 13.85
    },
    {
        name: "Gaming Keyboard",
        brand: "KeyBlaze",
        categories: ["electronics", "gaming"],
        price: 52.20
    },
    {
        name: "Summer Dress",
        brand: "LaMode",
        categories: ["clothing", "women", "dresses"],
        price: 31.00
    },
    {
        name: "Stainless Steel Knife Set",
        brand: "ChefLine",
        categories: ["kitchen", "cutlery"],
        price: 38.99
    },
    {
        name: "Portable Charger",
        brand: "ChargeMaster",
        categories: ["electronics", "mobile"],
        price: 21.49
    },
    {
        name: "Noise Cancelling Earbuds",
        brand: "SoundPeak",
        categories: ["audio", "electronics"],
        price: 54.75
    },
    {
        name: "Athletic Socks (5 Pack)",
        brand: "Cottonio",
        categories: ["clothing", "unisex", "athletic"],
        price: 16.95
    },
    {
        name: "Running Shoes",
        brand: "FlexFit",
        categories: ["footwear", "sports"],
        price: 66.40
    },
    {
        name: "Smart Watch",
        brand: "TechWare",
        categories: ["electronics", "wearables"],
        price: 120.00
    },
    {
        name: "Cookware Set",
        brand: "HomeCraft",
        categories: ["kitchen", "cookware"],
        price: 82.99
    },
    {
        name: "Winter Jacket",
        brand: "LaMode",
        categories: ["clothing", "outerwear"],
        price: 79.50
    }
]);
