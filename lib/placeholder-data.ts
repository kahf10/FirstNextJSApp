import { hashSync } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "John Doe",
    email: "johndoe@example.com",
    password: hashSync("password123", 10),
  },
];

const vendors = [
  {
    id: uuidv4(),
    name: "Walmart",
    email: "contact@walmart.com",
    image_url: "/vendors/walmart.jpeg",
  },
  {
    id: uuidv4(),
    name: "Gas Station",
    email: "support@gasstation.com",
    image_url: "/vendors/gasstation.jpeg",
  },
  {
    id: uuidv4(),
    name: "Amazon",
    email: "help@amazon.com",
    image_url: "/vendors/amazon.jpeg",
  },
  {
    id: uuidv4(),
    name: "Grocery Store",
    email: "info@grocery.com",
    image_url: "/vendors/grocery.jpeg",
  },
  {
    id: uuidv4(),
    name: "Electric Company",
    email: "billing@electricco.com",
    image_url: "/vendors/electricco.jpeg",
  },
  {
    id: uuidv4(),
    name: "Internet Provider",
    email: "support@isp.com",
    image_url: "/vendors/isp.jpeg",
  },
];

const vendorIds = vendors.map((vendor) => vendor.id);

const receipts = [
  {
    vendor_id: vendorIds[0],
    amount: "152.99",
    category: "Groceries",
    date: "2023-12-06",
    status: "failed",
  },
  {
    vendor_id: vendorIds[1],
    amount: "50.45",
    category: "Gas",
    date: "2023-11-14",
    status: "paid",
  },
  {
    vendor_id: vendorIds[4],
    amount: "120.89",
    category: "Utilities",
    date: "2023-10-29",
    status: "paid",
  },
  {
    vendor_id: vendorIds[3],
    amount: "80.99",
    category: "Groceries",
    date: "2023-09-10",
    status: "paid",
  },
  {
    vendor_id: vendorIds[5],
    amount: "69.99",
    category: "Internet",
    date: "2023-08-05",
    status: "pending",
  },
  {
    vendor_id: vendorIds[2],
    amount: "220.49",
    category: "Shopping",
    date: "2023-07-16",
    status: "pending",
  },
  {
    vendor_id: vendorIds[0],
    amount: "35.99",
    category: "Groceries",
    date: "2023-06-27",
    status: "pending",
  },
  {
    vendor_id: vendorIds[3],
    amount: "60.75",
    category: "Groceries",
    date: "2023-06-09",
    status: "failed",
  },
  {
    vendor_id: vendorIds[4],
    amount: "95.99",
    category: "Electric Bill",
    date: "2023-06-17",
    status: "failed",
  },
  {
    vendor_id: vendorIds[5],
    amount: "89.99",
    category: "Internet",
    date: "2023-06-07",
    status: "pending",
  },
  {
    vendor_id: vendorIds[1],
    amount: "40.25",
    category: "Gas",
    date: "2023-08-19",
    status: "paid",
  },
  {
    vendor_id: vendorIds[5],
    amount: "75.49",
    category: "Internet",
    date: "2023-06-03",
    status: "paid",
  },
  {
    vendor_id: vendorIds[2],
    amount: "150.0",
    category: "Shopping",
    date: "2022-06-05",
    status: "failed",
  },
];

const expenses = [
  { month: "Jan", expense: 1200 },
  { month: "Feb", expense: 900 },
  { month: "Mar", expense: 1500 },
  { month: "Apr", expense: 1300 },
  { month: "May", expense: 1100 },
  { month: "Jun", expense: 1800 },
  { month: "Jul", expense: 2000 },
  { month: "Aug", expense: 1750 },
  { month: "Sep", expense: 1600 },
  { month: "Oct", expense: 1400 },
  { month: "Nov", expense: 1550 },
  { month: "Dec", expense: 2100 },
];

export { users, vendors, receipts, expenses };
