// LOGIN
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === "jeeva" && password === "1245") {

        // transition effect
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("appPage").classList.remove("hidden");

    } else {
        error.innerText = "Access Denied ❌";
    }
}

// HATCH
function hatch(type) {
    document.getElementById("dinoArea").classList.remove("hidden");

    let name = "";
    let emoji = "";

    if (type === "TRex") {
        name = "T-Rex 🦖";
        emoji = "🦖";
    } else {
        name = "Raptor 🐉";
        emoji = "🐉";
    }

    document.getElementById("dinoName").innerText = name + " has hatched!";
    document.getElementById("dino").innerText = emoji;
}

// ACTIONS
function feed() {
    document.getElementById("actionText").innerText = "🍖 Dino is eating happily!";
}

function play() {
    document.getElementById("actionText").innerText = "🎮 Dino is playing wildly!";
}

// RESET
function resetApp() {
    document.getElementById("dinoArea").classList.add("hidden");
    document.getElementById("actionText").innerText = "";
}
