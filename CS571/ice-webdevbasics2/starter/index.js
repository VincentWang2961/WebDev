// This is where your JS goes!

// You can fetch data from https://cs571api.cs.wisc.edu/rest/f24/ice/chili
// When you are complete, you should also be able to fetch data from...
//  https://cs571api.cs.wisc.edu/rest/f24/ice/pasta
//  https://cs571api.cs.wisc.edu/rest/f24/ice/pizza

let reviewNum = 0;

fetch("https://cs571.org/rest/f24/ice/chili", {
    method: "GET",
    headers: {
        "X-CS571-ID": CS571.getBadgerId()
    }
})
.then(response => response.json())
.then(data => {
    console.log("The recipe is...")
    console.log(data)

    const titleElem = document.getElementById("recipe-name");
    titleElem.innerText = data.name;

    const authorElem = document.getElementById("recipe-author");
    authorElem.innerText = data.author;

    const imgElem = document.getElementsByTagName("img")[0];
    imgElem.src = data.img.location;
    imgElem.alt = data.img.description; 

    const recipeElem = document.getElementById("instructions");
    for(let inst of data.recipe){
        const newLiElem = document.createElement("li");
        newLiElem.innerText = inst;
        recipeElem.appendChild(newLiElem);
    }
})
.catch(error => { console.error("Error:", error); });

console.log("I will be executed first.")