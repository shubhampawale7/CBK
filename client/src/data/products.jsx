import React from "react";
import { FaBroadcastTower, FaCogs, FaIndustry, FaBolt } from "react-icons/fa";

// --- Import Images from src/assets ---
import MicroEco from "../assets/micro-cbk-eco.png";
import MicroStd from "../assets/micro-cbk-std.png";
import Micro1 from "../assets/micro-cbk-1.png";
import Micro1Plus from "../assets/micro-cbk-1-plus.png";

// This data is for the "Industries We Serve" section on the homepage
export const industriesData = [
  {
    icon: <FaIndustry />,
    title: "Cement Plants",
    description:
      "Wear solutions for crushers, chutes, mills, and fans in cement production.",
  },
  {
    icon: <FaBroadcastTower />,
    title: "Steel Manufacturing",
    description:
      "Durable plates for blast furnaces, sinter plants, and material handling.",
  },
  {
    icon: <FaCogs />,
    title: "Ore Processing",
    description:
      "Liners for chutes, crushers, and feeders to handle abrasive ores.",
  },
  {
    icon: <FaBolt />,
    title: "Power Plants",
    description:
      "Wear protection for coal handling plants, mills, and boiler components.",
  },
];

// This is the comprehensive data for all wear plate products
export const productGrades = [
  {
    name: "CBK ECO",
    description: "Abrasion Resistant and Mild Impact Resistant.",
    hardness: "55-58 Rc",
    temp: "100°C",
    composition: { C: true, Mn: true, Cr: true },
    microstructure: {
      hardness: "55 to 58 Hrc",
      observation:
        "Structure consists of spheroidal, angular and rod shape carbides in martensite matrix. Martensite seems to be tempered.",
      primaryCarbide: "25%",
      secondaryCarbide: "37%",
      image: MicroEco,
    },
  },
  {
    name: "CBK STD",
    description: "Abrasion Resistant and Mild Impact Resistant.",
    hardness: "58-60 Rc",
    temp: "100°C",
    composition: { C: true, Mn: true, Cr: true },
    microstructure: {
      hardness: "58 to 62 Hrc",
      observation:
        "Structure consists of spheroidal, angular and rod shape carbides in martensite matrix. Martensite seems to be tempered.",
      primaryCarbide: "25%",
      secondaryCarbide: "35%",
      image: MicroStd,
    },
  },
  {
    name: "CBK 1",
    description: "Heavy Abrasion with Little Impact.",
    hardness: "58-62 Rc",
    temp: "100°C",
    composition: { C: true, Mn: true, Cr: true },
    microstructure: {
      hardness: "58 to 65 Hrc",
      observation:
        "Structure consists of spheroidal, angular and rod shape carbides in martensite matrix. Martensite seems to be tempered.",
      primaryCarbide: "35%",
      secondaryCarbide: "32%",
      image: Micro1,
    },
  },
  {
    name: "CBK 1 Plus",
    description: "Primary & Secondary Carbides for Severe Abrasion Resistance.",
    hardness: "58-62 Rc",
    temp: "100°C",
    composition: { C: true, Mn: true, Cr: true, B: true },
    microstructure: {
      hardness: "58 to 65 Hrc",
      observation:
        "Structure consists of spheroidal, angular and rod shape carbides in martensite matrix. Martensite seems to be tempered.",
      primaryCarbide: "25%",
      secondaryCarbide: "35%",
      image: Micro1Plus,
    },
  },
  {
    name: "CBK 5",
    description: "Severe Abrasion Resistance up to 300°C.",
    hardness: "58-62 Rc",
    temp: "300°C",
    composition: { C: true, Mn: true, Cr: true, Mo: true },
  },
  {
    name: "CBK 5S",
    description: "Severe Abrasion Resistance up to 400°C.",
    hardness: "58-62 Rc",
    temp: "400°C",
    composition: { C: true, Mn: true, Cr: true, Mo: true, V: true },
  },
  {
    name: "CBK Ni",
    description: "Abrasion Resistance for Fans in High Temperature.",
    hardness: "55 Rc",
    temp: "350°C",
    composition: { C: true, Mn: true, Cr: true, Ni: true },
  },
  {
    name: "CBK 14",
    description: "Complex Carbides of Chromium and Niobium.",
    hardness: "60-64 Rc",
    temp: "600°C",
    composition: { C: true, Mn: true, Cr: true, Nb: true },
  },
  {
    name: "CBK 23",
    description: "Complex Carbide of Cr, Nb, V, W, Mo.",
    hardness: "60-65 Rc",
    temp: "750°C",
    composition: {
      C: true,
      Mn: true,
      Cr: true,
      Nb: true,
      V: true,
      W: true,
      Mo: true,
    },
  },
  {
    name: "CBK B CARB",
    description: "Boron Carbide for Extreme Abrasion Resistance.",
    hardness: "61-64 Rc",
    temp: "Not Specified",
    composition: { C: true, Mn: true, Cr: true, B: true },
  },
  {
    name: "CBK Ti",
    description: "Titanium Carbide for Impact Resistance.",
    hardness: "56-58 Rc",
    temp: "Not Specified",
    composition: { C: true, Mn: true, Cr: true, Ti: true },
  },
  {
    name: "CBK V CARB",
    description: "Extreme Sliding Abrasion Resistance.",
    hardness: "62-64 Rc",
    temp: "Not Specified",
    composition: { C: true, Mn: true, Cr: true, V: true },
  },
  {
    name: "CBK W CARB",
    description: "Tungsten Carbide.",
    hardness: "60-65 Rc",
    temp: "Not Specified",
    composition: { C: true, Mn: true, Cr: true, W: true },
  },
];
