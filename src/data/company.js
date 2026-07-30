// Placeholder data for a single company/person digital card.
// In the future multi-company version, this shape becomes the payload
// fetched per-tenant (by slug/subdomain) instead of a static import.

import { FiZap, FiTool, FiHeadphones } from "react-icons/fi";
import { LuHardHat, LuFlame } from "react-icons/lu";
import { TbGrain } from "react-icons/tb";
import {
  GiWireCoil,
  GiSafetyPin,
  GiPowerGenerator,
  GiToolbox,
} from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import adityaPhoto from "../assets/aditya.jpeg";
import aadrikLogo from "../assets/aadriklogo.jpeg";

const company = {
  slug: "aadrik-distributors",
  name: "Aadrik Distributors Pvt. Ltd.",
  shortName: "Aadrik",
  logoInitials: "AD",
  logo: aadrikLogo,

  person: {
    name: "Aditya Kothari",
    title: "Business Development Manager",
    photo: adityaPhoto,
  },

  tagline: "Empowering Industrial Solutions with AI",

  contact: {
    phoneDisplay: "+91 98400 51115",
    phone: "+919840051115",
    whatsapp: "919840051115",
    email: "aaditya@aadrik.co.in",
    enquiryEmail: "ea@aadrik.co.in",
    website: "https://aadrik.co.in/",
  },

  address: {
    line: "79 Natu Pillaiyar Koil Street, Chennai - 600001",
    mapsUrl:
      "https://maps.google.com/?q=79+Natu+Pillaiyar+Koil+Street,+Chennai-600001",
    embedUrl:
      "https://www.google.com/maps?q=79+Natu+Pillaiyar+Koil+Street,+George+Town,+Chennai,+Tamil+Nadu+600001&z=17&output=embed",
  },

  about: {
    title: "About Aadrik",
    description:
      "Aadrik Distributors Pvt. Ltd. is a trusted industrial distribution partner, supplying premium welding consumables, safety equipment, and power tools to manufacturers across the region. Backed by fast quotations and dependable technical support, we help industrial teams keep production moving without compromise.",
    highlights: [
      { icon: GiToolbox, label: "Industrial Distributor" },
      { icon: LuFlame, label: "Premium Welding Consumables" },
      { icon: LuHardHat, label: "Industrial Safety Equipment" },
      { icon: FiTool, label: "Power Tools" },
      { icon: FiZap, label: "Fast Quotations" },
      { icon: FiHeadphones, label: "Technical Support" },
    ],
  },

  products: [
    {
      icon: GiWireCoil,
      title: "CO₂ Welding Wire",
      description: "High-strength wire for consistent, clean welds.",
    },
    {
      icon: BsLightningCharge,
      title: "Electrodes",
      description: "Reliable electrodes for every welding application.",
    },
    {
      icon: TbGrain,
      title: "Grinding Wheels",
      description: "Precision abrasives built for heavy-duty finishing.",
    },
    {
      icon: GiSafetyPin,
      title: "Safety Equipment",
      description: "Certified gear to protect your workforce daily.",
    },
    {
      icon: FiTool,
      title: "Power Tools",
      description: "Trusted power tools for industrial performance.",
    },
    {
      icon: GiPowerGenerator,
      title: "Industrial Accessories",
      description: "Essential accessories to keep operations running.",
    },
  ],

  brochure: {
    url: "/company-profile-placeholder.pdf",
    fileName: "Aadrik-Company-Profile.pdf",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/aadrik-distributors",
    instagram: "https://www.instagram.com/aadrikdistributors",
    facebook: "https://www.facebook.com/aadrikdistributors",
    youtube: "https://www.youtube.com/@aadrikdistributors",
    website: "https://aadrik.co.in/",
    whatsapp: "https://wa.me/919840051115",
  },
};

export default company;
