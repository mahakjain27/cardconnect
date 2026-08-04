// Per-person data keyed by URL slug (/:personSlug). useCompany() merges
// the matched entry onto the shared company record in company.js.
import adityaPhoto from "../assets/aditya.jpeg";
import uttamPhoto from "../assets/uttam.jpeg";

const people = {
  "aditya-kothari": {
    name: "Aditya Kothari",
    title: "Business Development Manager",
    photo: adityaPhoto,
    contact: {
      phoneDisplay: "+91 98400 51115",
      phone: "+919840051115",
      whatsapp: "919840051115",
      email: "aaditya@aadrik.co.in",
    },
    social: {
      whatsapp: "https://wa.me/919840051115",
    },
  },
  "uttam-kothari": {
    name: "Uttam Kothari",
    title: "Managing Director",
    photo: uttamPhoto,
    contact: {
      phoneDisplay: "+91 98402 52115",
      phone: "+919840252115",
      whatsapp: "919840036001",
      email: "uttam@aadrik.co.in",
    },
    social: {
      whatsapp: "https://wa.me/919840036001",
    },
  },
};

export const defaultSlug = "aditya-kothari";

export default people;
