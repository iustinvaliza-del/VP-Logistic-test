export const COMPANY = {
  name: "VP Logistic & Distribution SRL",
  shortName: "VP Logistic",
  founded: 2013,
  employees: 9,
  locations: 4,
  productsDistributed: 50,
  cui: "32343201",
  regCom: "J20/1301/2537/402",
  address: {
    street: "Bdul. Timisoara 63, Bl. OD8, Sc. 4, Et. 6, Ap. 148",
    city: "Bucuresti",
    sector: "Sector 6",
    postalCode: "061319",
    country: "Romania",
  },
  contact: {
    phone: "+40 762 241 444",
    email: "vplogistic2013@gmail.com",
  },
  social: {
    facebook: "",
    linkedin: "",
  },
} as const;

export const SERVICES = [
  { key: "wholesale", icon: "Truck" },
  { key: "logistics", icon: "Route" },
  { key: "warehousing", icon: "Warehouse" },
  { key: "delivery", icon: "PackageCheck" },
  { key: "coverage", icon: "MapPin" },
  { key: "consulting", icon: "Handshake" },
] as const;

export const BRAND_CATEGORIES = [
  { key: "spirits", icon: "Wine" },
  { key: "wine", icon: "GlassWater" },
  { key: "beer", icon: "Beer" },
  { key: "softDrinks", icon: "CupSoda" },
  { key: "water", icon: "Droplets" },
  { key: "juice", icon: "Citrus" },
] as const;
