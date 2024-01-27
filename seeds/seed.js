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
    title: "Cozy Coffee House",
    description:
      "A charming coffee shop with a relaxed ambiance, serving freshly brewed coffee and homemade pastries.",
    location: "123 Main Street, Cityville",
  },
  {
    title: "Tech Innovators Meetup",
    description:
      "An event for tech enthusiasts and innovators to network, share ideas, and collaborate on exciting projects.",
    location: "Innovation Hub, Tech Park Avenue, Tech City",
  },
  {
    title: "Fitness Bootcamp",
    description:
      "Get in shape with our high-intensity fitness bootcamp. Expert trainers, motivating atmosphere, and real results!",
    location: "FitZone Gym, 456 Fitness Street, Healthville",
  },
  {
    title: "Artisanal Craft Fair",
    description:
      "Explore unique handmade crafts and art pieces from local artisans. Support the community and discover one-of-a-kind treasures.",
    location: "Community Center, Art Street, Craftsville",
  },
  {
    title: "Nature Photography Workshop",
    description:
      "Learn the art of capturing stunning nature photographs. Hands-on experience, tips from professionals, and breathtaking locations.",
    location: "Green Valley Nature Reserve, Photography Lane, Shuttertown",
  },
  {
    title: "Healthy Cooking Class",
    description:
      "Join us for a fun and interactive cooking class focused on preparing delicious and nutritious meals.",
    location: "Culinary Studio, 789 Culinary Avenue, Foodsville",
  },
  {
    title: "Book Club Meeting",
    description:
      "Discussing the latest literary masterpiece. Join fellow book lovers for stimulating conversations and shared insights.",
    location: "Library Lounge, 101 Reading Street, Bookland",
  },
  {
    title: "DJ Night at The Lounge",
    description:
      "Groove to the beats of our resident DJ, enjoy signature cocktails, and dance the night away in a vibrant atmosphere.",
    location: "The Lounge, 567 Party Lane, Nightlife City",
  },
  {
    title: "DIY Home Decor Workshop",
    description:
      "Unleash your creativity with a hands-on workshop on creating beautiful and personalized home decor items.",
    location: "Creative Space, 246 Crafty Corner, Decorville",
  },
  {
    title: "Historical Walking Tour",
    description:
      "Explore the rich history of the city with a guided walking tour through its iconic landmarks and hidden gems.",
    location: "City History Center, 333 Heritage Street, Historica",
  },
  {
    title: "Yoga in the Park",
    description:
      "Connect with nature and rejuvenate your body and mind with a relaxing yoga session in the serene city park.",
    location: "City Park, Yoga Plaza, Serenity Town",
  },
  {
    title: "Live Jazz Concert",
    description:
      "Immerse yourself in the soulful sounds of live jazz performed by talented musicians. An evening of musical delight awaits!",
    location: "Jazz Lounge, 789 Melody Avenue, Jazztopia",
  },
  {
    title: "Virtual Reality Gaming Tournament",
    description:
      "Compete in an exciting virtual reality gaming tournament. Prizes, challenges, and immersive gaming experiences await!",
    location: "VR Arena, 101 Tech Street, Gamers Haven",
  },
  {
    title: "Community Garden Planting Day",
    description:
      "Join hands with neighbors to plant flowers, herbs, and vegetables in our community garden. A day of green initiatives and fun!",
    location: "Community Garden, Green Thumb Lane, EcoVillage",
  },
  {
    title: "Language Exchange Meetup",
    description:
      "Practice and improve your language skills in a friendly and multicultural environment. Make new friends and learn together!",
    location: "Language Hub, 222 Polyglot Street, LinguaLand",
  },
  {
    title: "Science and Innovation Symposium",
    description:
      "Explore the latest advancements in science and technology. Engage with experts, attend workshops, and be part of the innovation conversation.",
    location: "Science Center, 555 Innovation Avenue, SciTech City",
  },
  {
    title: "Family Movie Night",
    description:
      "Bring your blankets and join us for a family-friendly movie night under the stars. Popcorn, snacks, and good times guaranteed!",
    location: "City Park, Movie Corner, Familyville",
  },
  {
    title: "Photography Exhibition Opening",
    description:
      "Discover the beauty captured through the lenses of talented photographers. Join us for the grand opening of a captivating photography exhibition.",
    location: "Art Gallery, 777 Shutter Street, PhotoCity",
  },
  {
    title: "Entrepreneurship Workshop",
    description:
      "Gain insights into starting and growing your own business. Learn from successful entrepreneurs and turn your ideas into reality.",
    location: "Startup Hub, 888 Business Street, Entrepreneurial City",
  },
  {
    title: "Acoustic Music Jam Session",
    description:
      "Bring your instruments or just your love for music. Join our acoustic jam session and enjoy an evening of musical creativity and collaboration.",
    location: "Music Cafe, 123 Harmony Lane, Melodyville",
  },
  {
    title: "Sustainable Living Seminar",
    description:
      "Explore eco-friendly practices and sustainable living. Discover simple steps to make a positive impact on the environment.",
    location: "Green Living Center, 444 Eco Street, Sustainia",
  },
  {
    title: "Charity Run for Education",
    description:
      "Participate in a charity run to support education initiatives. Lace up your shoes, make a difference, and enjoy a day of fitness and giving back.",
    location: "City Park, Charity Lane, EduRun City",
  },
  {
    title: "Board Game Night",
    description:
      "Bring your favorite board games or try out new ones. Join us for a night of strategy, competition, and board game fun!",
    location: "Game Lounge, 999 Strategy Street, Boardtopolis",
  },
  {
    title: "Flea Market Extravaganza",
    description:
      "Explore a variety of treasures and unique finds at our flea market. From vintage goods to handmade crafts, there's something for everyone.",
    location: "Flea Market Grounds, 666 Bargain Avenue, Treasuresville",
  },
  {
    title: "Wellness Retreat Weekend",
    description:
      "Escape the hustle and bustle. Join us for a rejuvenating wellness retreat weekend filled with yoga, meditation, and healthy living workshops.",
    location: "Wellness Resort, 345 Serene Street, Relaxation Haven",
  },
  {
    title: "Comedy Night at The Jester's Den",
    description:
      "Laugh out loud with hilarious stand-up comedians. Enjoy a night of comedy, good company, and lots of laughter.",
    location: "The Jester's Den, 456 Humor Lane, Laughtertown",
  },
  {
    title: "Gardening Workshop for Beginners",
    description:
      "Discover the joys of gardening! Join our workshop for beginners and learn the basics of planting, watering, and nurturing your own garden.",
    location: "Green Thumb Center, 777 Garden Street, Bloomville",
  },
  {
    title: "Mindfulness Meditation Class",
    description:
      "Find peace and balance in our mindfulness meditation class. Learn techniques to calm the mind and cultivate a sense of inner tranquility.",
    location: "Mindful Oasis, 888 Zen Street, Calmington",
  },
];

const seedDB = async () => {
  await Place.deleteMany({});
  await Place.insertMany(seed);
  console.log("DB seeded!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
