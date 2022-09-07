const cards = [
    {
        title: "Matters and Materials Co.",
        content: "Matters & Materials Co. will help you through your journey of logistics and networking in the ever evolving market by keeping you up-to-date.",
        website:"https://matters-or-materials.herokuapp.com/",
        github: "https://github.com/kadulkaryash71/MattersMaterialsCo",
        image:"images/tools.svg"
    },
    {
        title:"Drum Kit Simulator",
        content: "Make your own beats with the percussions.",
        website: "https://drumkitsimulator.kadulkaryash71.repl.co/",
        github:"https://github.com/kadulkaryash71/DrumKitSimulator",
        image: "images/sound.svg"
    },
    {
        title:"Smart Assistant for Stock Management",
        content: "Be aware of the stock movement before buying it.",
        github:"https://github.com/kadulkaryash71/Equity-Assistant",
        image: "images/machine.svg"
    },
    {
        title: "Analog Clock",
        content: "Let's see what's the time right now!",
        website: "https://kadulkaryash71.github.io/Analog-Clock/",
        github:"https://github.com/kadulkaryash71/Analog-Clock",
        image:"images/clock.svg"
    },
]

const projectsHolder = document.querySelector("#card-container")

const formattedCards = cards.map(card => {
    if (card.website && card.github)
    return `
        <div class="card col m-2" style="">
            <img src="${card.image}" class="card-img-center p-5 m-auto" alt="">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.content}</p>
                <div class="container justify-content-center button-holder">
                    <a href="${card.website}" class="m-1 btn btn-primary">Visit Website 🌐</a>
                    <a href="${card.github}" class="m-1 btn btn-success">Open GitHub ↗️</a>
                </div>
            </div>
        </div>
        `
    else if(card.github)
    return `
        <div class="card col m-2" style="">
            <img src="${card.image}" class="card-img-center p-5 m-auto" alt="">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.content}</p>
                <div class="container justify-content-center button-holder">
                    <a href="${card.github}" class="m-1 btn btn-success">Open GitHub ↗️</a>
                </div>
            </div>
        </div>
        `
    else if (card.website)
    return `
        <div class="card col m-2" style="">
            <img src="${card.image}" class="card-img-center p-5 m-auto" alt="">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.content}</p>
                <div class="container justify-content-center button-holder">
                    <a href="${card.website}" class="m-1 btn btn-primary">Visit Website 🌐</a>
                </div>
            </div>
        </div>
        `
}).join("");

projectsHolder.innerHTML = formattedCards;


let allBlogs = false;
function setBlogsFlag(val) {
    allBlogs = val;
}
function getBlogsFlag() {
    return allBlogs;
}

fetch('https://jsonplaceholder.typicode.com/posts').then(
    data => data.json()
).then(
    data => {
        let blogCards = "";
        const blogHolder = document.getElementById('blogs-container');
        if(getBlogsFlag()) {
            blogCards = data.reverse().map(blog => {
                return `
                <div class="card col-lg-3 col-md-4 col-sm-6 m-2">
                    <div class="card-body">
                        <h5 class="card-title">${blog.title}</h5>
                        <p class="card-text">${blog.body.substring(0,50) + "..."}</p>
                        <a href="#" class="btn btn-outline-primary">View Blog</a>
                    </div>
                </div>
                `
            }).join("");
        } else {
            blogCards = data.reverse().splice(0, 10).map(blog => {
                return `
                <div class="card col-lg-2 m-2">
                    <div class="card-body">
                        <h5 class="card-title">${blog.title}</h5>
                        <p class="card-text">${blog.body.substring(0,50) + "..."}</p>
                        <p class="btn btn-outline-primary" onclick="renderBlog(${blog.title}, ${blog.body})">View Blog</p>
                    </div>
                </div>
                `
                
            }).join("")
        }

        blogHolder.innerHTML = blogCards;
    }
);

const renderBlog = (title, post) => {
    const body = document.querySelector('body');
    const blogPop = `
    <div class="container">
        <h3 class="heading h3">${title}</h3>
        <p class="m-2">${post}</p>
        <a class="btn btn-danger" href="/index.html#blogs">Close</a>
    </div>
    `
    body.innerHTML = blogPop;
}


function getFormData(){
    const formData = document.getElementById("form");
    const email = document.getElementById('emailInput').value;
    const date = document.getElementById('dateInput').value;
    const type = document.querySelector('input[type="checkbox"][name="m-type"]').val();
    const radio = document.querySelector('input[type="radio"][name="gender"]').val();
    const message = document.getElementById('message').value;
    
    console.log("Email:", email);
    console.log("Date:", date);
    console.log("Type of Message:", type);
    console.log("Gender:", radio);
    console.log("Message:", message);
}

