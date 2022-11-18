// Make an inventory of items(15) for sale(can be anything, ex: shoes, cars, clothes) Each item needs a name, price, image and should be dynamically loaded from js into the html. Use methods to create a featured section that filters through your inventory and creates a section based on the 5 items with the lowest price
// ------------------------------------------------------
// Array with Objects of Games
let gameInfo = [ 
    {
        Game: 'Madden 23', 
        Price: '69.99'  }, 
    { 
        Game: 'Call of Duty', 
        Price: '69.99'  },
    { 
        Game: 'Fifa 23', 
        Price: '49.99' },
    { 
        Game: 'Mario Kart 8', 
        Price: '59.99' },
    { 
        Game: 'Splatoon 3',  
        Price: '59.99' },
    { 
        Game: 'Minecraft',  
        Price: '49.99' },
    { 
        Game: 'Pokemon', 
        Price: '49.99' },
    { 
        Game: 'God of War Ragnarok', 
        Price: '69.99' },
    { 
        Game: 'Sonic Frontiers', 
        Price: '59.99' },
    { 
        Game: 'NBA 2K23', 
        Price: '79.99' },
    { 
        Game: 'Halo Infinate', 
        Price: '19.99' },
    { 
        Game: 'Final Fantasy 7', 
        Price: '49.99'},
    { 
        Game: 'The Callisto Protocol', 
        Price: '69.99' },
    { 
        Game: 'Mario Oddyssey', 
        Price: '49.99' },
    { 
        Game: 'Atari 50', 
        Price: '39.99' }
]; 


// Innter HTML to Dislpay Results to the HTML
// let gameTitle = document.getElementById('gameTitle');
// gameTitle.innerHTML = "It works";

// let gamePrice = document.getElementById('gamePrice');
// gamePrice.innerHTML = "It also works";

// -----------------------------------------------------------------
// Varibles
let featuredGames = document.getElementById('featuredGames');
let regGames = document.getElementById('regGames');

// -----------------------------------------------------------------
// Function with Filter for Featured Games
function featuredGamesF() {
    let filter = gameInfo.filter(item=> item.Price < 50);
    filter.forEach(item => {
        featuredGames.innerHTML += `
        <h2>${item.Game}<h2>
        <p>$${item.Price}</p>
        `
    });
    // Test Results for Featured Games in Console
    console.log(filter)
};

featuredGamesF();

// -----------------------------------------------------------------
// Function with Filter for Regular Games
function regularGames() {
    let filter = gameInfo.filter(item=> item.Price > 50);
    filter.forEach(item => {
        regGames.innerHTML += `
        <h2>${item.Game}<h2>
        <p>$${item.Price}</p>
        `
    });
    // Test Results for Regular Games in Console
    console.log(filter)
};

regularGames();

