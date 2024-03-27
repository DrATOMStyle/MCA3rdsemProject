var texts = ["T-Shirts","Necklace's","Watches","Pants","Shorts","Shoes","Other Accessories...","Shirts"];
var currentIndex = 0;
function changeText() {
    var newText = texts[currentIndex];
    document.getElementById("textContainer").innerText = newText;
    currentIndex = (currentIndex + 1) % texts.length;
}

// Set timeout to change text every 5 seconds
setInterval(changeText, 2000);