const mongoose = require("mongoose");
const Place = require("../models/place");

mongoose
  .connect("mongodb://127.0.0.1:27017/Munch-Mysteries")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB...", err);
  });

const seed = [
  {
    title: "Cozy Apartment",
    averagePrice: 1200,
    description: "A comfortable and modern apartment for rent.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "City Center",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Spacious House",
    averagePrice: 2500,
    description: "A large and inviting house with a beautiful garden.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Suburbia",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Charming Studio",
    averagePrice: 800,
    description: "A small and charming studio apartment with a view.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Art District",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Luxury Penthouse",
    averagePrice: 5000,
    description: "An extravagant penthouse with breathtaking city views.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Downtown",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Rustic Cottage",
    averagePrice: 1500,
    description: "A cozy cottage in the countryside with a fireplace.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Rural Retreat",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Modern Loft",
    averagePrice: 1800,
    description: "A stylish and contemporary loft apartment for lease.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Tech Hub",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Seaside Villa",
    averagePrice: 3500,
    description: "A luxurious villa by the beach with stunning ocean views.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Coastal Paradise",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Urban Duplex",
    averagePrice: 2200,
    description: "A two-story duplex in the heart of the city.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Metropolis",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Mountain Retreat",
    averagePrice: 2800,
    description: "A secluded cabin in the mountains for a peaceful getaway.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Alpine Haven",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Historic Mansion",
    averagePrice: 4500,
    description: "A grand and historic mansion available for rent.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Heritage District",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Sunny Bungalow",
    averagePrice: 1200,
    description: "A bright and cheerful bungalow with a spacious garden.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Sunshine Suburb",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Industrial Loft",
    averagePrice: 2000,
    description: "A loft with an industrial aesthetic and open floor plan.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Warehouse District",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Elegant Townhouse",
    averagePrice: 2800,
    description: "An elegant townhouse with classic architecture.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Historic Quarter",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Lakefront Cottage",
    averagePrice: 1600,
    description: "A charming cottage with a view of the tranquil lake.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Lakeside Haven",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Cityscape Condo",
    averagePrice: 1800,
    description: "A modern condo with panoramic views of the city skyline.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Sky High Living",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Serenity Villa",
    averagePrice: 3200,
    description: "A tranquil villa surrounded by lush greenery and peace.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Nature Retreat",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Contemporary Duplex",
    averagePrice: 2400,
    description: "A sleek and contemporary two-story duplex apartment.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Modern Living",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Beachfront Retreat",
    averagePrice: 3800,
    description: "A luxurious retreat right on the sandy shores of the beach.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Oceanfront Paradise",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Artistic Loft",
    averagePrice: 2000,
    description: "A loft with artistic decor and creative vibes.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Arts District",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Majestic Mansion",
    averagePrice: 5000,
    description: "A majestic mansion with opulent interiors and gardens.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Regal Estate",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Countryside Cabin",
    averagePrice: 1400,
    description: "A charming cabin nestled in the peaceful countryside.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Rural Getaway",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Skyline Penthouse",
    averagePrice: 4500,
    description: "A penthouse with breathtaking views of the city skyline.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "High-rise Living",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Peaceful Cottage",
    averagePrice: 1600,
    description: "A peaceful cottage surrounded by nature and tranquility.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Serene Haven",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "City Center Condo",
    averagePrice: 2000,
    description: "A condo in the bustling heart of the city with all amenities.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Central Hub",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Treehouse Retreat",
    averagePrice: 1200,
    description: "A unique and charming treehouse for a one-of-a-kind stay.",
    imgUrl: "https://images.unsplash.com/photo-1507584359040-f44a16355689?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Forest Haven",
    author: "65bf503c662d2f54e5b7092f"
  }
]
;

const seedDB = async () => {
  await Place.deleteMany({});
  await Place.insertMany(seed);
  console.log("DB seeded!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
