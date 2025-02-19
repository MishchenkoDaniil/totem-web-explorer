import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class GradientService {
  gradients = [
    {
        name: "Sel",
        colors: ["#00467F", "#A5CC82"]
    },
    {
        name: "Skyline",
        colors: ["#1488CC", "#2B32B2"]
    },
    {
        name: "DIMIGO",
        colors: ["#ec008c", "#fc6767"]
    },
    {
        name: "Purple Love",
        colors: ["#cc2b5e", "#753a88"]
    },
    {
        name: "Sexy Blue",
        colors: ["#2193b0", "#6dd5ed"]
    },
    {
        name: "Blooker20",
        colors: ["#e65c00", "#F9D423"]
    },
    {
        name: "Sea Blue",
        colors: ["#2b5876", "#4e4376"]
    },
    {
        name: "nimvelo",
        colors: ["#314755", "#26a0da"]
    },
    {
        name: "Hazel",
        colors: ["#77A1D3", "#79CBCA", "#E684AE"]
    },
    {
        name: "noon to Dusk",
        colors: ["#ff6e7f", "#bfe9ff"]
    },
    {
        name: "YouTube",
        colors: ["#e52d27", "#b31217"]
    },
    {
        name: "Cool Brown",
        colors: ["#603813", "#b29f94"]
    },
    {
        name: "Harmonic Energy",
        colors: ["#16A085", "#F4D03F"]
    },
    {
        name: "Playing with Reds",
        colors: ["#D31027", "#EA384D"]
    },
    {
        name: "Sunny Days",
        colors: ["#EDE574", "#E1F5C4"]
    },
    {
        name: "Green Beach",
        colors: ["#02AAB0", "#00CDAC"]
    },
    {
        name: "Intuitive Purple",
        colors: ["#DA22FF", "#9733EE"]
    },
    {
        name: "Emerald Water",
        colors: ["#348F50", "#56B4D3"]
    },
    {
        name: "Lemon Twist",
        colors: ["#3CA55C", "#B5AC49"]
    },
    {
        name: "Monte Carlo",
        colors: ["#CC95C0", "#DBD4B4", "#7AA1D2"]
    },
    {
        name: "Horizon",
        colors: ["#003973", "#E5E5BE"]
    },
    {
        name: "Rose Water",
        colors: ["#E55D87", "#5FC3E4"]
    },
    {
        name: "Frozen",
        colors: ["#403B4A", "#E7E9BB"]
    },
    {
        name: "Mango Pulp",
        colors: ["#F09819", "#EDDE5D"]
    },
    {
        name: "Bloody Mary",
        colors: ["#FF512F", "#DD2476"]
    },
    {
        name: "Aubergine",
        colors: ["#AA076B", "#61045F"]
    },
    {
        name: "Aqua Marine",
        colors: ["#1A2980", "#26D0CE"]
    },
    {
        name: "Sunrise",
        colors: ["#FF512F", "#F09819"]
    },
    {
        name: "Purple Paradise",
        colors: ["#1D2B64", "#F8CDDA"]
    },
    {
        name: "Stripe",
        colors: ["#1FA2FF", "#12D8FA", "#A6FFCB"]
    },
    {
        name: "Sea Weed",
        colors: ["#4CB8C4", "#3CD3AD"]
    },
    {
        name: "Pinky",
        colors: ["#DD5E89", "#F7BB97"]
    },
    {
        name: "Cherry",
        colors: ["#EB3349", "#F45C43"]
    },
    {
        name: "Mojito",
        colors: ["#1D976C", "#93F9B9"]
    },
    {
        name: "Juicy Orange",
        colors: ["#FF8008", "#FFC837"]
    },
    {
        name: "Mirage",
        colors: ["#16222A", "#3A6073"]
    },
    {
        name: "Steel Gray",
        colors: ["#1F1C2C", "#928DAB"]
    },
    {
        name: "Kashmir",
        colors: ["#614385", "#516395"]
    },
    {
        name: "Electric Violet",
        colors: ["#4776E6", "#8E54E9"]
    },
    {
        name: "Venice Blue",
        colors: ["#085078", "#85D8CE"]
    },
    {
        name: "Bora Bora",
        colors: ["#2BC0E4", "#EAECC6"]
    },
    {
        name: "Moss",
        colors: ["#134E5E", "#71B280"]
    },
    {
        name: "Shroom Haze",
        colors: ["#5C258D", "#4389A2"]
    },
    {
        name: "Mystic",
        colors: ["#757F9A", "#D7DDE8"]
    },
    {
        name: "Midnight City",
        colors: ["#232526", "#414345"]
    },
    {
        name: "Sea Blizz",
        colors: ["#1CD8D2", "#93EDC7"]
    },
    {
        name: "Opa",
        colors: ["#3D7EAA", "#FFE47A"]
    },
    {
        name: "Titanium",
        colors: ["#283048", "#859398"]
    },
    {
        name: "Mantle",
        colors: ["#24C6DC", "#514A9D"]
    },
    {
        name: "Dracula",
        colors: ["#DC2424", "#4A569D"]
    },
    {
        name: "Peach",
        colors: ["#ED4264", "#FFEDBC"]
    },
    {
        name: "Moonrise",
        colors: ["#DAE2F8", "#D6A4A4"]
    },
    {
        name: "Clouds",
        colors: ["#ECE9E6", "#FFFFFF"]
    },
    {
        name: "Stellar",
        colors: ["#7474BF", "#348AC7"]
    },
    {
        name: "Bourbon",
        colors: ["#EC6F66", "#F3A183"]
    },
    {
        name: "Calm Darya",
        colors: ["#5f2c82", "#49a09d"]
    },
    {
        name: "Influenza",
        colors: ["#C04848", "#480048"]
    },
    {
        name: "Shrimpy",
        colors: ["#e43a15", "#e65245"]
    },
    {
        name: "Army",
        colors: ["#414d0b", "#727a17"]
    },
    {
        name: "Miaka",
        colors: ["#FC354C", "#0ABFBC"]
    },
    {
        name: "Pinot Noir",
        colors: ["#4b6cb7", "#182848"]
    },
    {
        name: "Day Tripper",
        colors: ["#f857a6", "#ff5858"]
    },
    {
        name: "namn",
        colors: ["#a73737", "#7a2828"]
    },
    {
        name: "Blurry Beach",
        colors: ["#d53369", "#cbad6d"]
    },
    {
        name: "Vasily",
        colors: ["#e9d362", "#333333"]
    },
    {
        name: "A Lost Memory",
        colors: ["#DE6262", "#FFB88C"]
    },
    {
        name: "Petrichor",
        colors: ["#666600", "#999966"]
    },
    {
        name: "Jonquil",
        colors: ["#FFEEEE", "#DDEFBB"]
    },
    {
        name: "Sirius Tamed",
        colors: ["#EFEFBB", "#D4D3DD"]
    },
    {
        name: "Kyoto",
        colors: ["#c21500", "#ffc500"]
    },
    {
        name: "Misty Meadow",
        colors: ["#215f00", "#e4e4d9"]
    },
    {
        name: "Aqualicious",
        colors: ["#50C9C3", "#96DEDA"]
    },
    {
        name: "Moor",
        colors: ["#616161", "#9bc5c3"]
    },
    {
        name: "Almost",
        colors: ["#ddd6f3", "#faaca8"]
    },
    {
        name: "Forever Lost",
        colors: ["#5D4157", "#A8CABA"]
    },
    {
        name: "Winter",
        colors: ["#E6DADA", "#274046"]
    },
    {
        name: "Autumn",
        colors: ["#DAD299", "#B0DAB9"]
    },
    {
        name: "Candy",
        colors: ["#D3959B", "#BFE6BA"]
    },
    {
        name: "Reef",
        colors: ["#00d2ff", "#3a7bd5"]
    },
    {
        name: "The Strain",
        colors: ["#870000", "#190A05"]
    },
    {
        name: "Dirty Fog",
        colors: ["#B993D6", "#8CA6DB"]
    },
    {
        name: "Earthly",
        colors: ["#649173", "#DBD5A4"]
    },
    {
        name: "Virgin",
        colors: ["#C9FFBF", "#FFAFBD"]
    },
    {
        name: "Ash",
        colors: ["#606c88", "#3f4c6b"]
    },
    {
        name: "Shadow Night",
        colors: ["#000000", "#53346D"]
    },
    {
        name: "Cherryblossoms",
        colors: ["#FBD3E9", "#BB377D"]
    },
    {
        name: "Parklife",
        colors: ["#ADD100", "#7B920A"]
    },
    {
        name: "Dance To Forget",
        colors: ["#FF4E50", "#F9D423"]
    },
    {
        name: "Starfall",
        colors: ["#F0C27B", "#4B1248"]
    },
    {
        name: "Red Mist",
        colors: ["#000000", "#e74c3c"]
    },
    {
        name: "Teal Love",
        colors: ["#AAFFA9", "#11FFBD"]
    },
    {
        name: "neon Life",
        colors: ["#B3FFAB", "#12FFF7"]
    },
    {
        name: "Man of Steel",
        colors: ["#780206", "#061161"]
    },
    {
        name: "Amethyst",
        colors: ["#9D50BB", "#6E48AA"]
    },
    {
        name: "Cheer Up Emo Kid",
        colors: ["#556270", "#FF6B6B"]
    },
    {
        name: "Shore",
        colors: ["#70e1f5", "#ffd194"]
    },
    {
        name: "Facebook Messenger",
        colors: ["#00c6ff", "#0072ff"]
    },
    {
        name: "SoundCloud",
        colors: ["#fe8c00", "#f83600"]
    },
    {
        name: "Behongo",
        colors: ["#52c234", "#061700"]
    },
    {
        name: "ServQuick",
        colors: ["#485563", "#29323c"]
    },
    {
        name: "Friday",
        colors: ["#83a4d4", "#b6fbff"]
    },
    {
        name: "Martini",
        colors: ["#FDFC47", "#24FE41"]
    },
    {
        name: "Metallic Toad",
        colors: ["#abbaab", "#ffffff"]
    },
    {
        name: "Between The Clouds",
        colors: ["#73C8A9", "#373B44"]
    },
    {
        name: "Crazy Orange I",
        colors: ["#D38312", "#A83279"]
    },
    {
        name: "Hersheys",
        colors: ["#1e130c", "#9a8478"]
    },
    {
        name: "Talking To Mice Elf",
        colors: ["#948E99", "#2E1437"]
    },
    {
        name: "Purple Bliss",
        colors: ["#360033", "#0b8793"]
    },
    {
        name: "Predawn",
        colors: ["#FFA17F", "#00223E"]
    },
    {
        name: "Endless River",
        colors: ["#43cea2", "#185a9d"]
    },
    {
        name: "Pastel Orange at the Sun",
        colors: ["#ffb347", "#ffcc33"]
    },
    {
        name: "Twitch",
        colors: ["#6441A5", "#2a0845"]
    },
    {
        name: "Atlas",
        colors: ["#FEAC5E", "#C779D0", "#4BC0C8"]
    },
    {
        name: "Instagram",
        colors: ["#833ab4", "#fd1d1d", "#fcb045"]
    },
    {
        name: "Flickr",
        colors: ["#ff0084", "#33001b"]
    },
    {
        name: "Vine",
        colors: ["#00bf8f", "#001510"]
    },
    {
        name: "Turquoise flow",
        colors: ["#136a8a", "#267871"]
    },
    {
        name: "Portrait",
        colors: ["#8e9eab", "#eef2f3"]
    },
    {
        name: "Virgin America",
        colors: ["#7b4397", "#dc2430"]
    },
    {
        name: "Koko Caramel",
        colors: ["#D1913C", "#FFD194"]
    },
    {
        name: "Fresh Turboscent",
        colors: ["#F1F2B5", "#135058"]
    },
    {
        name: "Green to dark",
        colors: ["#6A9113", "#141517"]
    },
    {
        name: "Ukraine",
        colors: ["#004FF9", "#FFF94C"]
    },
    {
        name: "Curiosity blue",
        colors: ["#525252", "#3d72b4"]
    },
    {
        name: "Dark Knight",
        colors: ["#BA8B02", "#181818"]
    },
    {
        name: "Piglet",
        colors: ["#ee9ca7", "#ffdde1"]
    },
    {
        name: "Lizard",
        colors: ["#304352", "#d7d2cc"]
    },
    {
        name: "Sage Persuasion",
        colors: ["#CCCCB2", "#757519"]
    },
    {
        name: "Between Night and Day",
        colors: ["#2c3e50", "#3498db"]
    },
    {
        name: "Timber",
        colors: ["#fc00ff", "#00dbde"]
    },
    {
        name: "Passion",
        colors: ["#e53935", "#e35d5b"]
    },
    {
        name: "Clear Sky",
        colors: ["#005C97", "#363795"]
    },
    {
        name: "Master Card",
        colors: ["#f46b45", "#eea849"]
    },
    {
        name: "Back To Earth",
        colors: ["#00C9FF", "#92FE9D"]
    },
    {
        name: "Deep Purple",
        colors: ["#673AB7", "#512DA8"]
    },
    {
        name: "Little Leaf",
        colors: ["#76b852", "#8DC26F"]
    },
    {
        name: "netflix",
        colors: ["#8E0E00", "#1F1C18"]
    },
    {
        name: "Light Orange",
        colors: ["#FFB75E", "#ED8F03"]
    },
    {
        name: "Green and Blue",
        colors: ["#c2e59c", "#64b3f4"]
    },
    {
        name: "Poncho",
        colors: ["#403A3E", "#BE5869"]
    },
    {
        name: "Back to the Future",
        colors: ["#C02425", "#F0CB35"]
    },
    {
        name: "Blush",
        colors: ["#B24592", "#F15F79"]
    },
    {
        name: "Inbox",
        colors: ["#457fca", "#5691c8"]
    },
    {
        name: "Purplin",
        colors: ["#6a3093", "#a044ff"]
    },
    {
        name: "Pale Wood",
        colors: ["#eacda3", "#d6ae7b"]
    },
    {
        name: "Haikus",
        colors: ["#fd746c", "#ff9068"]
    },
    {
        name: "Pizelex",
        colors: ["#114357", "#F29492"]
    },
    {
        name: "Joomla",
        colors: ["#1e3c72", "#2a5298"]
    },
    {
        name: "Christmas",
        colors: ["#2F7336", "#AA3A38"]
    },
    {
        name: "Minnesota Vikings",
        colors: ["#5614B0", "#DBD65C"]
    },
    {
        name: "Miami Dolphins",
        colors: ["#4DA0B0", "#D39D38"]
    },
    {
        name: "Forest",
        colors: ["#5A3F37", "#2C7744"]
    },
    {
        name: "nighthawk",
        colors: ["#2980b9", "#2c3e50"]
    },
    {
        name: "Superman",
        colors: ["#0099F7", "#F11712"]
    },
    {
        name: "Suzy",
        colors: ["#834d9b", "#d04ed6"]
    },
    {
        name: "Dark Skies",
        colors: ["#4B79A1", "#283E51"]
    },
    {
        name: "Deep Space",
        colors: ["#000000", "#434343"]
    },
    {
        name: "Decent",
        colors: ["#4CA1AF", "#C4E0E5"]
    },
    {
        name: "colors Of Sky",
        colors: ["#E0EAFC", "#CFDEF3"]
    },
    {
        name: "Purple White",
        colors: ["#BA5370", "#F4E2D8"]
    },
    {
        name: "Ali",
        colors: ["#ff4b1f", "#1fddff"]
    },
    {
        name: "Alihossein",
        colors: ["#f7ff00", "#db36a4"]
    },
    {
        name: "Shahabi",
        colors: ["#a80077", "#66ff00"]
    },
    {
        name: "Red Ocean",
        colors: ["#1D4350", "#A43931"]
    },
    {
        name: "Tranquil",
        colors: ["#EECDA3", "#EF629F"]
    },
    {
        name: "Transfile",
        colors: ["#16BFFD", "#CB3066"]
    },

    {
        name: "Sylvia",
        colors: ["#ff4b1f", "#ff9068"]
    },
    {
        name: "Sweet Morning",
        colors: ["#FF5F6D", "#FFC371"]
    },
    {
        name: "Politics",
        colors: ["#2196f3", "#f44336"]
    },
    {
        name: "Bright Vault",
        colors: ["#00d2ff", "#928DAB"]
    },
    {
        name: "Solid Vault",
        colors: ["#3a7bd5", "#3a6073"]
    },
    {
        name: "Sunset",
        colors: ["#0B486B", "#F56217"]
    },
    {
        name: "Grapefruit Sunset",
        colors: ["#e96443", "#904e95"]
    },
    {
        name: "Deep Sea Space",
        colors: ["#2C3E50", "#4CA1AF"]
    },
    {
        name: "Dusk",
        colors: ["#2C3E50", "#FD746C"]
    },
    {
        name: "Minimal Red",
        colors: ["#F00000", "#DC281E"]
    },
    {
        name: "Royal",
        colors: ["#141E30", "#243B55"]
    },
    {
        name: "Mauve",
        colors: ["#42275a", "#734b6d"]
    },
    {
        name: "Frost",
        colors: ["#000428", "#004e92"]
    },
    {
        name: "Lush",
        colors: ["#56ab2f", "#a8e063"]
    },
    {
        name: "Firewatch",
        colors: ["#cb2d3e", "#ef473a"]
    },
    {
        name: "Sherbert",
        colors: ["#f79d00", "#64f38c"]
    },
    {
        name: "Blood Red",
        colors: ["#f85032", "#e73827"]
    },
    {
        name: "Sun on the Horizon",
        colors: ["#fceabb", "#f8b500"]
    },
    {
        name: "IIIT Delhi",
        colors: ["#808080", "#3fada8"]
    },
    {
        name: "Dusk",
        colors: ["#ffd89b", "#19547b"]
    },
    {
        name: "50 Shades of Grey",
        colors: ["#bdc3c7", "#2c3e50"]
    },
    {
        name: "Dania",
        colors: ["#BE93C5", "#7BC6CC"]
    },
    {
        name: "Limeade",
        colors: ["#A1FFCE", "#FAFFD1"]
    },
    {
        name: "Disco",
        colors: ["#4ECDC4", "#556270"]
    },
    {
        name: "Love Couple",
        colors: ["#3a6186", "#89253e"]
    },
    {
        name: "Azure Pop",
        colors: ["#ef32d9", "#89fffd"]
    },
    {
        name: "nepal",
        colors: ["#de6161", "#2657eb"]
    },
    {
        name: "Cosmic Fusion",
        colors: ["#ff00cc", "#333399"]
    },
    {
        name: "Snapchat",
        colors: ["#fffc00", "#ffffff"]
    },
    {
        name: "Ed's Sunset Gradient",
        colors: ["#ff7e5f", "#feb47b"]
    },
    {
        name: "Brady Brady Fun Fun",
        colors: ["#00c3ff", "#ffff1c"]
    },
    {
        name: "Black Rosé",
        colors: ["#f4c4f3", "#fc67fa"]
    },
    {
        name: "80's Purple",
        colors: ["#41295a", "#2F0743"]
    },
    {
        name: "Radar",
        colors: ["#A770EF", "#CF8BF3", "#FDB99B"]
    },
    {
        name: "Ibiza Sunset",
        colors: ["#ee0979", "#ff6a00"]
    },
    {
        name: "Dawn",
        colors: ["#F3904F", "#3B4371"]
    },
    {
        name: "Mild",
        colors: ["#67B26F", "#4ca2cd"]
    },
    {

        name: "Vice City",
        colors: ["#3494E6", "#EC6EAD"]
    },
    {
        name: "Jaipur",
        colors: ["#DBE6F6", "#C5796D"]

    },
    {
        name: "Cocoaa Ice",
        colors: ["#c0c0aa", "#1cefff"]
    },
    {
        name: "EasyMed",
        colors: ["#DCE35B", "#45B649"]
    },
    {
        name: "Rose Colored Lenses",
        colors: ["#E8CBC0", "#636FA4"]
    },
    {
        name: "What lies Beyond",
        colors: ["#F0F2F0", "#000C40"]
    },
    {
        name: "Roseanna",
        colors: ["#FFAFBD", "#ffc3a0"]
    },
    {
        name: "Honey Dew",
        colors: ["#43C6AC", "#F8FFAE"]
    },
    {
        name: "Under the Lake",
        colors: ["#093028", "#237A57"]
    },
    {
        name: "The Blue Lagoon",
        colors: ["#43C6AC", "#191654"]
    },
    {
        name: "Can You Feel The Love Tonight",
        colors: ["#4568DC", "#B06AB3"]
    },
    {
        name: "Very Blue",
        colors: ["#0575E6", "#021B79"]
    },
    {
        name: "Love and Liberty",
        colors: ["#200122", "#6f0000"]
    },
    {
        name: "Orca",
        colors: ["#44A08D", "#093637"]
    },
    {
        name: "Venice",
        colors: ["#6190E8", "#A7BFE8"]
    },
    {
        name: "Pacific Dream",
        colors: ["#34e89e", "#0f3443"]
    },
    {
        name: "Learning and Leading",
        colors: ["#F7971E", "#FFD200"]
    },
    {
        name: "Celestial",
        colors: ["#C33764", "#1D2671"]
    },
    {
        name: "Purplepine",
        colors: ["#20002c", "#cbb4d4"]
    },
    {
        name: "Sha la la",
        colors: ["#D66D75", "#E29587"]
    },
    {
        name: "Mini",
        colors: ["#30E8BF", "#FF8235"]
    },
    {
        name: "Maldives",
        colors: ["#B2FEFA", "#0ED2F7"]
    },
    {
        name: "Cinnamint",
        colors: ["#4AC29A", "#BDFFF3"]
    },
    {
        name: "Html",
        colors: ["#E44D26", "#F16529"]
    },
    {
        name: "Coal",
        colors: ["#EB5757", "#000000"]
    },
    {
        name: "Sunkist",
        colors: ["#F2994A", "#F2C94C"]
    },
    {
        name: "Blue Skies",
        colors: ["#56CCF2", "#2F80ED"]
    },
    {
        name: "Chitty Chitty Bang Bang",
        colors: ["#007991", "#78ffd6"]
    },
    {
        name: "Visions of Grandeur",
        colors: ["#000046", "#1CB5E0"]
    },
    {
        name: "Crystal Clear",
        colors: ["#159957", "#155799"]
    },
    {
        name: "Mello",
        colors: ["#c0392b", "#8e44ad"]
    },
    {
        name: "Compare Now",
        colors: ["#EF3B36", "#FFFFFF"]
    },
    {
        name: "Meridian",
        colors: ["#283c86", "#45a247"]
    },
    {
        name: "Relay",
        colors: ["#3A1C71", "#D76D77", "#FFAF7B"]
    },
    {
        name: "Alive",
        colors: ["#CB356B", "#BD3F32"]
    },
    {
        name: "Scooter",
        colors: ["#36D1DC", "#5B86E5"]
    },
    {
        name: "Terminal",
        colors: ["#000000", "#0f9b0f"]
    },
    {
        name: "Telegram",
        colors: ["#1c92d2", "#f2fcfe"]
    },
    {
        name: "Crimson Tide",
        colors: ["#642B73", "#C6426E"]
    },
    {
        name: "Socialive",
        colors: ["#06beb6", "#48b1bf"]
    },
    {
        name: "Subu",
        colors: ["#0cebeb", "#20e3b2", "#29ffc6"]
    },
    {
        name: "Shift",
        colors: ["#000000", "#E5008D", "#FF070B"]
    },
    {
        name: "Clot",
        colors: ["#070000", "#4C0001", "#070000"]
    },
    {
        name: "Broken Hearts",
        colors: ["#d9a7c7", "#fffcdc"]
    },
    {
        name: "Kimoby Is The New Blue",
        colors: ["#396afc", "#2948ff"]
    },
    {
        name: "Dull",
        colors: ["#C9D6FF", "#E2E2E2"]
    },
    {
      name: "Purpink",
      colors: ["#7F00FF", "#E100FF"]
    },
    {
      name: "Orange Coral",
      colors: ["#ff9966", "#ff5e62"]
    },
    {
      name: "Summer",
      colors: ["#22c1c3", "#fdbb2d"]
    },
    {
      name: "King Yna",
      colors: ["#1a2a6c", "#b21f1f", "#fdbb2d"]
    },
    {
      name: "Velvet Sun",
      colors: ["#e1eec3", "#f05053"]
    },
    {
      name: "Zinc",
      colors: ["#ADA996", "#F2F2F2", "#DBDBDB", "#EAEAEA"]
    },
    {
      name: "Hydrogen",
      colors: ["#667db6", "#0082c8", "#0082c8", "#667db6"]
    },
    {
      name: "Argon",
      colors: ["#03001e", "#7303c0", "#ec38bc", "#fdeff9"]
    },
    {
      name: "Lithium",
      colors: ["#6D6027", "#D3CBB8"]
    },
    {
        name: "Digital Water",
        colors: ["#74ebd5","#ACB6E5"]
    },
    {
        name: "Velvet Sun",
        colors: ["#e1eec3", "#f05053"]
    },
    {
        name: "Orange Fun",
        colors: ["#fc4a1a", "#f7b733"]
    },
    {
        name: "Pink Flavour",
        colors: ["#800080", "#ffc0cb"]
    },
    {
        name: "Sulphur",
        colors: ["#CAC531", "#F3F9A7"]
    },
    {
        name: "Selenium",
        colors: ["#3C3B3F", "#605C3C"]
    },
    {
        name: "Delicate",
        colors: ["#D3CCE3", "#E9E4F0"]
    },
    {

        name: "Ohhappiness",
        colors: ["#00b09b", "#96c93d"]
    },
    {
        name: "Lawrencium",
        colors: ["#0f0c29", "#302b63", "#24243e"]
    },
    {
        name: "Relaxing red",
        colors: ["#fffbd5", "#b20a2c"]
    },
    {
        name: "Taran Tado",
        colors: ["#23074d", "#cc5333"]
    }
  ]

}
