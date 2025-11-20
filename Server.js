const express =require("express");
const cors =require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// ⭐ Company data in a variable
const companies=[
  { id: 1, name: "TechNova Solutions", location: "California", industry: "Technology" },
  { id: 2, name: "BluePeak Systems", location: "India", industry: "IT Services" },
  { id: 3, name: "Infinexa Labs", location: "Texas", industry: "AI & Machine Learning" },
  { id: 4, name: "AuroraSoft Global", location: "Canada", industry: "Software Services" },
  { id: 5, name: "NextWave Corp", location: "Australia", industry: "Fintech" },
  { id: 6, name: "SkyBridge Networks", location: "New York", industry: "Cloud Computing" },
  { id: 7, name: "PrimeLogic Tech", location: "Berlin", industry: "Cybersecurity" },
  { id: 8, name: "Nexora Digital", location: "India", industry: "Digital Services" },
  { id: 9, name: "BrightPath Innovations", location: "Singapore", industry: "EdTech" },
  { id: 10, name: "VeloCore Dynamics", location: "London", industry: "Automation" },
  { id: 11, name: "AstraLink Analytics", location: "California", industry: "Data Analytics" },
  { id: 12, name: "Zenora Networks", location: "Dubai", industry: "Network Solutions" },
  { id: 13, name: "CoreFusion Labs", location: "Texas", industry: "Software Consulting" },
  { id: 14, name: "PixelCraft Media", location: "India", industry: "Media & Advertising" },
  { id: 15, name: "OptiWave Systems", location: "Japan", industry: "Hardware Solutions" },
  { id: 16, name: "ElevateTech Ventures", location: "Sweden", industry: "Green Energy" },
  { id: 17, name: "NimbusEdge Cloud", location: "Canada", industry: "Cloud Services" },
  { id: 18, name: "SoftLoom IT", location: "India", industry: "IT Services" },
  { id: 19, name: "QuantumShift AI", location: "San Francisco", industry: "AI Research" },
  { id: 20, name: "GoldLeaf Enterprises", location: "Chicago", industry: "E-Commerce" },
  { id: 21, name: "MetaSphere Labs", location: "Amsterdam", industry: "Metaverse" },
  { id: 22, name: "CyberHive Security", location: "Israel", industry: "Cybersecurity" },
  { id: 23, name: "WavePoint Robotics", location: "Boston", industry: "Robotics" },
  { id: 24, name: "OrbitX Solutions", location: "India", industry: "SaaS" },
  { id: 25, name: "AlphaCloud Corp", location: "California", industry: "Cloud Computing" },
  { id: 26, name: "FutureLink Innovations", location: "UK", industry: "IoT" },
  { id: 27, name: "NovaDesk Business", location: "India", industry: "BPO" },
  { id: 28, name: "SkyMint Retail", location: "Malaysia", industry: "Retail" },
  { id: 29, name: "ZenFlux Technologies", location: "California", industry: "Tech Services" },
  { id: 30, name: "AirBridge Logistics", location: "Texas", industry: "Logistics" }
]

// ⭐ API endpoint to send companies
app.get("/api/companies", (req, res) => {
  res.json(companies);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
