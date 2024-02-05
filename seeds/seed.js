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
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
      }
    ],
    location: "City Center",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Spacious House",
    averagePrice: 2500,
    description: "A large and inviting house with a beautiful garden.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
      }
    ],
    location: "Suburbia",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Charming Studio",
    averagePrice: 800,
    description: "A small and charming studio apartment with a view.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Art District",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Luxury Penthouse",
    averagePrice: 5000,
    description: "An extravagant penthouse with breathtaking city views.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Downtown",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Rustic Cottage",
    averagePrice: 1500,
    description: "A cozy cottage in the countryside with a fireplace.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Rural Retreat",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Modern Loft",
    averagePrice: 1800,
    description: "A stylish and contemporary loft apartment for lease.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Tech Hub",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Seaside Villa",
    averagePrice: 3500,
    description: "A luxurious villa by the beach with stunning ocean views.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Coastal Paradise",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Urban Duplex",
    averagePrice: 2200,
    description: "A two-story duplex in the heart of the city.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Metropolis",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Mountain Retreat",
    averagePrice: 2800,
    description: "A secluded cabin in the mountains for a peaceful getaway.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Alpine Haven",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Historic Mansion",
    averagePrice: 4500,
    description: "A grand and historic mansion available for rent.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Heritage District",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Sunny Bungalow",
    averagePrice: 1200,
    description: "A bright and cheerful bungalow with a spacious garden.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Sunshine Suburb",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Industrial Loft",
    averagePrice: 2000,
    description: "A loft with an industrial aesthetic and open floor plan.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Warehouse District",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Elegant Townhouse",
    averagePrice: 2800,
    description: "An elegant townhouse with classic architecture.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Historic Quarter",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Lakefront Cottage",
    averagePrice: 1600,
    description: "A charming cottage with a view of the tranquil lake.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Lakeside Haven",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Cityscape Condo",
    averagePrice: 1800,
    description: "A modern condo with panoramic views of the city skyline.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Sky High Living",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Serenity Villa",
    averagePrice: 3200,
    description: "A tranquil villa surrounded by lush greenery and peace.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Nature Retreat",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Contemporary Duplex",
    averagePrice: 2400,
    description: "A sleek and contemporary two-story duplex apartment.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Modern Living",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Beachfront Retreat",
    averagePrice: 3800,
    description: "A luxurious retreat right on the sandy shores of the beach.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Oceanfront Paradise",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Artistic Loft",
    averagePrice: 2000,
    description: "A loft with artistic decor and creative vibes.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Arts District",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Majestic Mansion",
    averagePrice: 5000,
    description: "A majestic mansion with opulent interiors and gardens.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Regal Estate",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Countryside Cabin",
    averagePrice: 1400,
    description: "A charming cabin nestled in the peaceful countryside.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Rural Getaway",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Skyline Penthouse",
    averagePrice: 4500,
    description: "A penthouse with breathtaking views of the city skyline.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "High-rise Living",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Peaceful Cottage",
    averagePrice: 1600,
    description: "A peaceful cottage surrounded by nature and tranquility.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Serene Haven",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "City Center Condo",
    averagePrice: 2000,
    description: "A condo in the bustling heart of the city with all amenities.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
    location: "Central Hub",
    author: "65bf503c662d2f54e5b7092f"
  },
  {
    title: "Treehouse Retreat",
    averagePrice: 1200,
    description: "A unique and charming treehouse for a one-of-a-kind stay.",
    images: [
      {
        url: 'https://res.cloudinary.com/dhchj8s3k/image/upload/v1707152360/Munch-Mysteries/ktmdvmnyykyq5sw5ajnj.jpg',
        filename: 'Munch-Mysteries/ktmdvmnyykyq5sw5ajnj',
        
      }
    ],
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
