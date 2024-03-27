const imageContainer = document.getElementById('image-container');
const imageContainer2 = document.getElementById('image-container2');
const imageContainer3 = document.getElementById('image-container3');
const imageContainer4 = document.getElementById('image-container4');
const imageContainer5 = document.getElementById('image-container5');
const imageContainer6 = document.getElementById('image-container6');
const imageContainer7 = document.getElementById('image-container7');
const imageContainer8 = document.getElementById('image-container8');
const imageContainer9 = document.getElementById('image-container9');
const imagePaths = [
  './images/C1_1.webp',
  './images/C1_2.webp',
  './images/C1_3.webp',
  './images/C1_0.jpg'
];
const imagePaths2 = [
    './images/C2_1_1.jpg',
    './images/C2_2_2.jpg',
    './images/C2_3_3.jpg',
    './images/C2_0_0.jpg'
  ];
  const imagePaths3 = [
    './images/C3_1_1.webp',
    './images/C3_2_2.webp',
    './images/C3_3_3.webp',
    './images/C3_0_0.webp'
  ];
  const imagePaths4 = [
    './images/A1_1.webp',
    './images/A1_2.webp',
    './images/A1_3.webp',
    './images/A1_0.webp'
  ];
  const imagePaths5 = [
    './images/A2_1_1.jpg',
    './images/A2_2_2.jpg',
    './images/A2_3_3.jpg',
    './images/A2_0_0.jpg'
  ];
  const imagePaths6 = [
    './images/A3_1_1.jpg',
    './images/A3_2_2.jpg',
    './images/A3_3_3.jpg',
    './images/A3_0_0.jpg'
  ];
  const imagePaths7 = [
    './images/B1_1.webp',
    './images/B1_2.webp',
    './images/B1_3.webp',
    './images/B1_0.jpg'
  ];
  const imagePaths8 = [
    './images/B2_1_1.jpg',
    './images/B2_2_2.jpg',
    './images/B2_3_3.jpg',
    './images/B2_0_0.jpg'
  ];
  const imagePaths9 = [
    './images/B3_1_1.jpg',
    './images/B3_2_2.jpg',
    './images/B3_3_3.jpg',
    './images/B3_0_0.jpg'
  ];
let currentImageIndex = 0;
let currentImageIndex2 = 0;
let currentImageIndex3 = 0;
let currentImageIndex4 = 0;
let currentImageIndex5 = 0;
let currentImageIndex6 = 0;
let currentImageIndex7 = 0;
let currentImageIndex8 = 0;
let currentImageIndex9 = 0;
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  currentImageIndex2 = (currentImageIndex2 + 1) % imagePaths2.length;
  currentImageIndex3 = (currentImageIndex3 + 1) % imagePaths3.length;
  currentImageIndex4 = (currentImageIndex4 + 1) % imagePaths4.length;
  currentImageIndex5 = (currentImageIndex5 + 1) % imagePaths5.length;
  currentImageIndex6 = (currentImageIndex6 + 1) % imagePaths6.length;
  currentImageIndex7 = (currentImageIndex7 + 1) % imagePaths7.length;
  currentImageIndex8 = (currentImageIndex8 + 1) % imagePaths8.length;
  currentImageIndex9 = (currentImageIndex9 + 1) % imagePaths9.length;
  imageContainer.src = imagePaths[currentImageIndex];
  imageContainer2.src = imagePaths2[currentImageIndex2];
  imageContainer3.src = imagePaths3[currentImageIndex3];
  imageContainer4.src = imagePaths4[currentImageIndex4];
  imageContainer5.src = imagePaths5[currentImageIndex5];
  imageContainer6.src = imagePaths6[currentImageIndex6];
  imageContainer7.src = imagePaths7[currentImageIndex7];
  imageContainer8.src = imagePaths8[currentImageIndex8];
  imageContainer9.src = imagePaths9[currentImageIndex9];
}

setInterval(changeImage, 2000);