require("dotenv").config();

const db = require("../models");

const categories = [
  {
    name: "Advertising",
    description: "i.e. (Social Media Ads, Posters, Flyers, PR, Business Cards, Stage Banner"
  },
  {
    name: "Contract Labor",
    description: "i.e. (Pay to Band Members, Session Artist, Production, Studio Time. Over 600 will require 1099 Filing)"
  },
  {
    name: "Dues",
    description: "i.e. (Spotify, iTunes, Software Subscriptions, DAW, Monthly App Subscriptions)"
  },
  {
    name: "Equipment",
    description: "i.e. (Amps, Computer, Guitars, Drums, Keyboard. Note: If over 1,000 for an item it may derpeciate)"
  },
  {
    name: "Insurace",
    description: "i.e. (Car Insurance, Gear Insurance, Disability Insurance)"
  },
  {
    name: "Legal and Professional",
    description: "i.e. (Tax Preparation, Bookkeeping, Lawyer Fees)"
  },
  { 
    name: "Meals and Entertainment",
    description: "i.e. (Meals with Clients, Networing Functions, Concerts)"
  },
  {
    name: "Office Expenses",
    description: "i.e. (Paper, Ink, Printer, Envelopes, Organizational Items"
  },
  {
    name: "Per Diem Days",
    description: "i.e. (Days spent overnight more than 50 miles from home"
  },
  {
    name: "Rental Equipment",
    description: "i.e. (Rental Equipment, Rental Car, Rehearsal Space, Storage)"
  },
  {
    name: "Repairs",
    description: "i.e. (Instrument Repair, Equipment Repair, Computer Repair, Auto Repair)"
  },
  {
    name: "Supplies",
    description: "i.e. (Picks, Strings, Drum Heads, Drum Sticks)"
  },
  {
    name: "Transportation",
    description: "i.e. (Uber, Lyft, Taxi, Train)"
  },
  {
    name: "Travel",
    description: "i.e. (Flights, Lodging, Subway)"
  },
  {
    name: "Wireless",
    description: "i.e. (Cellular Phone, Internet)"
  }
];

db.sequelize.sync().then(() => db.Category.bulkCreate(categories));