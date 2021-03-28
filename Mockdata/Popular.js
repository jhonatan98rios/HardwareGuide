const hardware = {
  notebooks: {
    low: [
    {
      "name": "Chromebook Samsung XE501C13-AD3BR",
      "image": "https://i.imgur.com/B3mvhI0.png",
      "cpu": "Intel Celeron N3060",
      "storage": "32 GB - SSD",
      "ram": "4GB",
      "gpu": "Intel HD Graphics 400",
      "SO": "Google Chrome OS",
      "screen": "Tela 11,6' LED HD",
      "weight": "1,6kg",
      "price": "1.800,00"
    },
    {
      "name": "Lenovo Ideapad S145",
      "image": "https://i.imgur.com/QKxOZJA.png",
      "cpu": "Intel Celeron N4020",
      "storage": "128GB - SSD",
      "ram": "4GB",
      "gpu": "Intel HD Graphics 600",
      "SO": "Windows 10",
      "screen": "15.6” LED HD",
      "weight": "1,85kg",
      "price": "2.400,00"
    },
    {
      "name": "Dell Inspiron I15-3583-AS05P",
      "image": "https://i.imgur.com/ww0aPd4.png",
      "cpu": "Pentium Gold 5405U",
      "storage": "128GB - SSD",
      "ram": "4GB DDR4",
      "gpu": "Intel HD Graphics 600",
      "SO": "Windows 10",
      "screen": "Tela 15,6' LED HD",
      "weight": "2kg",
      "price": "R$2800,00",
    }],

    mid: [
    {
      "name": "Lenovo Ideapad S145",
      "image": "https://i.imgur.com/QKxOZJA.png",
      "cpu": "Intel Core i3",
      "storage": "128GB - SSD",
      "ram": "4GB",
      "gpu": "Intel UHD Graphics 620",
      "SO": "Windows 10",
      "screen": "15.6 LED HD",
      "weight": "1,85kg",
      "price": "3.300,00"
    },
    {
      "name": "Acer Aspire 3 A315-56-34a9",
      "image": "https://i.imgur.com/tkICaGs.png",
      "cpu": "Intel Core i3",
      "storage": "1TB - HD",
      "ram": "8GB",
      "gpu": "Intel UHD Graphics 620",
      "SO": "Windows 10 Home",
      "screen": "15.6 LED HD",
      "weight": "2.03kg",
      "price": "3.500,00"
    },
    {
      "name": "Acer Aspire 3 A315-23",
      "image": "https://i.imgur.com/tkICaGs.png",
      "cpu": "AMD Ryzen 5 3500U",
      "storage": "1TB - HD",
      "ram": "12GB",
      "gpu": "AMD Radeon Vega 8",
      "SO": "Windows 10 Home",
      "screen": "15,6 LED HD",
      "weight": "2,03kg",
      "price": "4.000,00"
    }],

    high: [
    {
      "name": "Acer Aspire Nitro 3 A315-23g-r759",
      "image": "https://i.imgur.com/TdqUoL6.png",
      "cpu": "AMD Ryzen 7",
      "storage": "256GB - SSD M.2",
      "ram": "8GB",
      "gpu": "Radeon RX Vega 10 - 2GB",
      "SO": "Windows 10 Home",
      "screen": "15,6 IPS HD",
      "weight": "2.7kg",
      "price": "4.600,00"
    },{
      "name": "Dell Inspiron 3583",
      "image": "https://i.imgur.com/ww0aPd4.png",
      "cpu": "Intel Core I7",
      "storage": "256GB - SSD M.2",
      "ram": "8GB",
      "gpu": "UHD Graphics 620",
      "SO": "Windows 10",
      "screen": "15,6 LED HD",
      "weight": "2.52kg",
      "price": "5.100,00"
    },{
      "name": "Acer Predator Helios 300 PH315-52-748U",
      "image": "https://i.imgur.com/HKUrokE.png",
      "cpu": "Intel Core I7 9750H",
      "storage": "128GB (SSD) - 1TB (HD)",
      "ram": "16GB",
      "gpu": "RTX 1660ti - 6GB",
      "SO": "Windows 10",
      "screen": "15,6 IPS Full HD",
      "weight": "2.4kg",
      "price": "7.489,00"
    }]
  },

  desktops: {
    low: [{
      "image": "https://i.imgur.com/JZTk1VU.png",
      "moba": "A320MH AM4 AMD A320",
      "cpu": "Ryzen 3 3200G",
      "storage": "SSD 128GB",
      "ram": "4GB DDR4",
      "gpu": "Radeon Vega 8 Graphics",
      "fonte": "500W",
      "price": "R$1800,00"
    },{
      "image": "https://i.imgur.com/IbvrFj5.png",
      "moba": "H310M LGA 1151",
      "cpu": "Intel Pentium G5400 (8 geração)",
      "storage": "SSD 120GB",
      "ram": "8GB DDR4",
      "gpu": "RADEON RX550 2GB",
      "fonte": "500W",
      "price": "R$2400,00"
    },{
      "image": "https://i.imgur.com/rBFW8zs.png",
      "moba": "H310M LGA 1151",
      "cpu": "Intel I3 8100 (8 geração)",
      "storage": "SSD 120GB",
      "ram": "8GB DDR4",
      "gpu": "RADEON RX550 2GB",
      "fonte": "500W",
      "price": "R$2800,00"
    }],

    mid: [{
      "image": "https://i.imgur.com/3WRCF8z.png",
      "moba": "A320MH AM4 AMD A320",
      "cpu": "Ryzen 5 3500X",
      "storage": "HD 1TB + SSD 120GB",
      "ram": "8GB DDR4",
      "gpu": "RADEON RX550 2GB",
      "fonte": "500W",
      "price": "R$3600,00"
    },{
      "image": "https://i.imgur.com/0ulDArM.png",
      "moba": "A320MH AM4 AMD A320",
      "cpu": "RYZEN 5 3500X",
      "storage": "HD 1TB + SSD 120GB",
      "ram": "8GB DDR4",
      "gpu": "GEFORCE GTX 1650 SUPER 4GB",
      "fonte": "500W",
      "price": "R$4100,00"
    },{
      "image": "https://i.imgur.com/FXYLT3k.png",
      "moba": "H310M LGA 1151",
      "cpu": "Intel I5 9400F",
      "storage": "HD 1TB + SSD 120GB",
      "ram": "8GB DDR4",
      "gpu": "GEFORCE GTX 1660 6GB OC",
      "fonte": "500W",
      "price": "R$4400,00"
    }],

    high: [{
      "image": "https://i.imgur.com/57dmial.png",
      "moba": "H310M LGA 1151",
      "cpu": "Intel I7 9700F",
      "storage": "HD 1TB + SSD 240GB",
      "ram": "16GB DDR4",
      "gpu": "GEFORCE GTX 1660 6GB OC",
      "fonte": "500W",
      "price": "R$5500,00"
    },{
      "image": "https://i.imgur.com/RvPnJZ0.png",
      "moba": "H310M LGA 1151",
      "cpu": "Intel I5 10400F",
      "storage": "HD 1TB + SSD 240GB",
      "ram": "16GB DDR4",
      "gpu": "GEFORCE RTX 2060 SUPER 8GB",
      "fonte": "600W",
      "price": "R$6200,00"
    },{
      "image": "https://i.imgur.com/KoLWRjD.png",
      "moba": "Z390M LGA 1151",
      "cpu": "Intel I9 9900K",
      "storage": "HD 1TB + SSD 480GB",
      "ram": "16GB DDR4",
      "gpu": " GEFORCE RTX 2060 6GB",
      "fonte": "650W",
      "price": "R$8500,00"
    }]
  }
}


export const options = [
  {
    name: 'Notebook Baixo Custo',
    itens: hardware.notebooks.low
  },
  {
    name: 'Notebook Custo Benefício',
    itens: hardware.notebooks.mid
  },
  {
    name: 'Notebook High-End',
    itens: hardware.notebooks.high
  },
  {
    name: 'PC Baixo Custo',
    itens: hardware.desktops.low
  },
  {
    name: 'PC Custo Benefício',
    itens: hardware.desktops.mid
  },
  {
    name: 'PC High-End',
    itens: hardware.desktops.high
  }
]

