let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

// Parallax library
var rellax;

let myJSON = {
  "title": "The Last Supper",
  "picture_url": "https://img.itch.zone/aW1hZ2UvMTcyMDc3My8xMDIzNjU1MS5wbmc=/original/4%2FduAp.png",
  "bg_color": "#FF0072",
  "font": "Fonts/BerkshireSwash-Regular.ttf",
  "features": ["cat", "dog", "roomba"],
  "link": "https://k-t0wn.itch.io/tls",
  "player_count": "2 - 4 Players",
  "release_date": "October 25, 2022"
};

var randomIndex = Math.floor(Math.random() * myJSON["features"].length);

let jsonDatabase = [
  {
    "title": "The Last Supper",
    "picture_url": "https://img.itch.zone/aW1hZ2UvMTcyMDc3My8xMDIzNjU1MS5wbmc=/original/4%2FduAp.png",
    "bg_color": "#ff4a62",
    "font": "Fonts/BerkshireSwash-Regular.ttf",
    "features": ["LAN Multiplayer", "Dog", "Kinda Crazy"],
    "link": "https://k-t0wn.itch.io/tls",
    "player_count": "2 - 4 Players",
    "release_date": "October 25, 2022"
  },
  {
    "title": "Gint Hand",
    "picture_url": "https://img.itch.zone/aW1nLzE1Nzc4NDk4LnBuZw==/315x250%23c/lrvVqw.png",
    "bg_color": "#d24dff",
    "font": "Fonts/NewRocker-Regular.ttf",
    "features": ["Game Jam 2024", "Small", "Nice Art"],
    "link": "https://k-t0wn.itch.io/gint-hand",
    "player_count": "1 Player",
    "release_date": "April 15, 2024"
  },
  {
    "title": "Advanced MathMeister",
    "picture_url": "https://img.itch.zone/aW1hZ2UvMTA1MzA0NC82MDI0MDczLnBuZw==/original/i%2F6F9o.png",
    "bg_color": "#fc9d03",
    "font": "Fonts/Righteous-Regular.ttf",
    "features": ["Mobile Game", "Multiple Game Mode", "Fast"],
    "link": "https://k-t0wn.itch.io/advanced-mathmeister",
    "player_count": "1 Player",
    "release_date": "May 23, 2021"
  },
  {
    "title": "???",
    "picture_url": "",
    "bg_color": "#525252",
    "font": "Serif",
    "features": ["Scary", "Black", "AI"],
    "link": "",
    "player_count": "? Players",
    "release_date": "202X"
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

rellax = new Rellax('.rellax');

function createElementProper(incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['bg_color'];
  newContentElement.style.fontFamily = `url(${incomingJSON['font']})`;
  newContentElement.classList.add('contentItem');

  // Create TITLE as clickable link
  let newContentHeading = document.createElement("A");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.href = incomingJSON['link'] || '#'; // Fallback to # if no link
  newContentHeading.target = "_blank"; // Open link in new tab
  newContentHeading.innerText = incomingJSON['title'];
  newContentHeading.style.textDecoration = 'none';
  newContentHeading.style.color = 'inherit'; 
  newContentElement.appendChild(newContentHeading);

  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Features:";
  newContentElement.appendChild(newContentSubhead);

  let newContentFeatureList = document.createElement("UL");
  newContentElement.appendChild(newContentFeatureList);

  for (var i = 0; i < incomingJSON['features'].length; i++) {
    var newFeatureItem = document.createElement("LI");
    newFeatureItem.innerText = incomingJSON['features'][i];
    newContentFeatureList.appendChild(newFeatureItem);
  }

  let newPlayerCount = document.createElement("P");
  newPlayerCount.innerText = `Player Count: ${incomingJSON['player_count']}`;
  newContentElement.appendChild(newPlayerCount);

  let newReleaseDate = document.createElement("P");
  newReleaseDate.innerText = `Release Date: ${incomingJSON['release_date']}`;
  newContentElement.appendChild(newReleaseDate);

  // Create clickable IMAGE
  if (incomingJSON['picture_url']) {
    let newImageLink = document.createElement("A");
    newImageLink.href = incomingJSON['link'] || '#'; // Fallback to # if no link
    newImageLink.target = "_blank";

    let newImage = document.createElement("IMG");
    newImage.classList.add("footerImage");
    newImage.src = incomingJSON['picture_url'];

    newImageLink.appendChild(newImage);
    newContentElement.appendChild(newImageLink);
  }

  contentGridElement.appendChild(newContentElement);
}
