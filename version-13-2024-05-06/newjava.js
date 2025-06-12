// okay so the js below is moslty the tooltip captions on images. on desktop, they show on hover and then the user navigates to the 
// page on click. for mobile, the tooltip caption on images is displayed on the first tap and then when double 
// clicked, the user is brought to the page for the image.
document.addEventListener("DOMContentLoaded", function() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(element => {
        element.addEventListener('mouseover', function(event) {
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = 1;
            tooltip.style.top = event.pageY + 10 + 'px'; // 10px below the cursor
            tooltip.style.left = event.pageX + 10 + 'px'; // 10px to the right of the cursor
        });

        element.addEventListener('mousemove', function(event) {
            tooltip.style.top = event.pageY + 10 + 'px';
            tooltip.style.left = event.pageX + 10 + 'px';
        });

        element.addEventListener('mouseout', function() {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = 0;
        });
    });
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const addToCartButtons = document.querySelectorAll('#addToCartButton');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const itemId = this.getAttribute('data-itemId'); // Ensure this attribute is set correctly in the HTML
//             const item = items[itemId];
//             if (item) {
//                 addToCart(item);
//             } else {
//                 console.error("Item not found");
//             }
//         });
//     });

// Function to update the content based on the item data
function updateContent(item) {
    document.getElementById('itemName').textContent = item.name;
    document.getElementById('itemImage').src = item.image;
    document.getElementById('itemDescription').textContent = item.description;
}

// Example of item data (this could also come from an external JSON file or API)
const items = {
    "Patchwork-Pants": {
        name: "Patchwork Pants",
        image: "images/pin-photos/fem/patchwork-pants.jpg",
        description: "Very cool very nice patchwork denim pants. Nice for casual or can match with other things idk do whatever you want it's just pants"
    },
    "eyesweater": {
        name: "Eye'm Watching Sweater",
        image: "images/pin-photos/fem/eye-sweater.jpg",
        description: "omg very cool crocheted sweater with eye to show everyone that you watch your own back because you have trust issues for wahtever reason idk. did someone hurt you? maybe you should do some self reflection"
    },

    "red-striped-pants": {
        name: "Red Striped Pants",
        image: "images/pin-photos/fem/red-striped-pants.jpg",
        description: "this is for all the shawties that like a casual jean but with a little flare for every day wear. wear these to brunch with your partner's parents so that they know that you're not some basic person they found at work. show them you've got some character. you got this."
    },

    "white-offshoulder": {
        name: "White Off-Shoulder Shirt",
        image: "images/pin-photos/fem/white-offshoulder.jpg",
        description: "if you had a thing for keira knightley in pirates of the caribbean, this one is for you. or maybe you wanted to be her idk but this one spoke to you bc you saw that movie as a child and it stuck with you. i see you and i hear you."
    },

    "assymetical-shirt": {
        name: "Assymetrical T-Shirt",
        image: "images/pin-photos/fem/assymetical-shirt.jpg",
        description: "this is for channeling your 2014 baddie but not in a SWAG snap back or filled in rectangle brows type way in a like \' i liked frank ocean before everyone else did\' type way"
    },

    "red-ruffles": {
        name: "Fairy Lace Top",
        image: "images/pin-photos/fem/red-ruffles.jpg",
        description: "shoutout to everyone who watched tinkerbell as a kid and desperately wanted to have been born out of a dandelion like she was and then control the elements like hello?? and you can fly and you have other fairy friends like who doesn't want that. this shirt is for yall."
    },

    "bandana-top": {
        name: "Bandana Top",
        image: "images/pin-photos/fem/bandana-top.jpg",
        description: "show as much skin as you want its literally yours to show off. but also yknow like be lawful and maybe don't indecent exposure? but also who am i to tell you what to do im literally a website like be your own person."
    },

    "glasses-chain": {
        name: "Glasses Chain",
        image: "images/pin-photos/fem/glasses-chain.jpg",
        description: "channel your inner librarian who actually also attends her weekly basement show on Friday nights. do as you please but also if you wear these to basement shows these might wack you in the face while your moshing so like be careful maybe."
    },

    "rhinestone-belt": {
        name: "Rhinestone Belt",
        image: "images/pin-photos/fem/rhinestone-belt.jpg",
        description: "channel your inner librarian who actually also attends her weekly basement show on Friday nights. do as you please but also if you wear these to basement shows these might wack you in the face while your moshing so like be careful maybe."
    },

    "ring-set": {
        name: "Chained Ring Set",
        image: "images/pin-photos/fem/ring-set.jpg",
        description: "be edgy and angsty like that one character from that videogame from a dark past that you only know bits and pieces about but never actually learn. but also consider therapy bc its a little cringe to base your whole personality off of it. be better to yourself bbg."
    },

    "sunglasses": {
        name: "Hot Mom Sunglasses",
        image: "images/pin-photos/fem/sunglasses.jpg",
        description: "this is for when you are at some niche cafe with you little laptop open, pretending to pretend to write important emails while also pretending you have a wealthy spouse and 3 nepo babies and you have your bi annual botox appointment next week."
    },
//////////////////
    "bucket-hat": {
        name: "Fuzzy Cheetah Bucket Hat",
        image: "images/pin-photos/sale/fuzzy-cheetah-buckethat.jpg",
        description: "eat it up with this fuzzy printed bucket hat. good for if you maybe need to textural stimulation bc then you can just pat your head a little bit and you're good."
    },

    "work-suit": {
        name: "Blue Work Suit",
        image: "images/pin-photos/sale/work-suit.jpg",
        description: "this is for when you go to get your oil changed and you wanna pretend that you know anything about cars so that they dont try to scam you into buying something you dont need at all."
    },

    "tech-pants": {
        name: "Black Leather Tech Pants",
        image: "images/pin-photos/sale/leather-tech-pants.jpg",
        description: "looking to cosplay as a futuristic cyber thug who steals people's bitcoin or whatever the future currency is gonna be."
    },

    "camo-pants": {
        name: "Classic Camo Pants",
        image: "images/pin-photos/sale/camo-pants.jpg",
        description: "simply a classic camo pant. nothing more nothing less. very comfy, loose fit with nice big pockets to carry your secrets in"
    },

    ////////////////
    "track-pants": {
        name: "Black Strappy Track Pants",
        image: "images/pin-photos/sale/strappy-trackpants.jpg",
        description: "for the sporty look with a little bit of spice. maybe you're bored of your normal brand that rhymes with \'fadidas\' or \'mikey\' track pants and now you want something a little more worth pulling up to the function in. this one is for you."
    },
    "green-pants": {
        name: "Green Patchwork Pants",
        image: "images/pin-photos/iman_greenpants.jpg",
        description: "funky but subtle in its funk, green pants with some nice patchwork details. this is for when you are going somewhere where you know there's gonna be people dressed cool but you also have to go to your semi formal work party afterwards."
    },
    "plaid-linen": {
        name: "Plaid Linen Pants",
        image: "images/pin-photos/sale/plaid-linen-pants.jpg",
        description: "nice comfy linen pants with a subtle plaid pattern for the comfy but slightly more acceptable than normal sweatpants "
    },
    ////////////////////////
    "black-sweater": {
        name: "Distressed Black Sweater",
        image: "images/pin-photos/black_sweater.jpg",
        description: "shoutout to those of you who like to look a little bit like you just got attacked by a group of small dogs but make it look good. this one is for you."
    },
    "green-jacket": {
        name: "Oversized Green Jacket",
        image: "images/pin-photos/sale/oversized-green-jacket.jpg",
        description: "oversized fit for when you have things to hide like maybe a large sword or a small child idk who am i to judge. whatever you do with this jacket after you purchase it is none of my business"
    },
    "star-pants": {
        name: "Star Pocket Pants",
        image: "images/pin-photos/masc/star-pocket-pants.jpg",
        description: "we like stars here. we put stars on many of our items. its kind of our thing. but we dont put it on everything bc then its kinda cringe and overkill. but this one is pretty cool i think"
    },
    //////////////////////////////
    "g-tee": {
        name: "Oversized Graphic Tee",
        image: "images/pin-photos/masc/star-pocket-pants.jpg",
        description: "graphic tee graphic tee!!!! u know the deal with this one. pretty self explanatory. if you're confused for some reason idk what to tell you its just a tshirt. figure it out."
    },
    "bone-sweat": {
        name: "Knitted Bones Sweater",
        image: "images/pin-photos/masc/knitted-bones-sweater.jpg",
        description: "calm sweater for the day time. lil calm sweater. nothing too crazy just a lil sweater w some bones to show you're chill but also a little cool."
    },
    "green-stripe": {
        name: "Green Striped Shirt",
        image: "images/pin-photos/masc/green-striped-shirt.jpg" ,
        description: "chill green striped for when you're feeling like kurt cobain before 1994. definitely before 1994. "
    },
    "g-sleeve": {
        name: "White Graphic Longsleeve",
        image: "images/pin-photos/masc/white-graphic-longsleeve.jpg",
        description: "same deal with the graphic tee. stop thinking so hard. you shouldn't even be reading the description of such a self explanatory item. come on guys."
    },

    ///////////////////////////////

    "embroidered-jeans": {
        name: "Embroidery Accented Jeans",
        image: "images/pin-photos/masc/embroidered-jeans.jpg",
        description: "nice baggy jeans with fun little embroidered accents around the pockets. nice y2k feel for when you're feeling like you wanna fist pump in a club"
    },
    "brown-linen": {
        name: "Oversized Brown Linen Pants",
        image: "images/pin-photos/masc/oversized-brown-linen-pants.jpg",
        description: "comfy oversized pants with a drawstring incase they start falling off your little behind. lightweight and comfy. cant ask for more there."
    },
    "black-patch": {
        name: "Black Patchwork Pants",
        image: "images/pin-photos/masc/black-patchwork-pants.jpg",
        description: "we really like texture around here and patchwork is the perfect way to get it. sometimes your fit is a little boring and flat-- its bc you need texture bbg. get it in there with these pants"
    },
    "star-jean": {
        name: "Patchwork Star Jeans",
        image: "images/pin-photos/masc/patched-star-jeans.jpg",
        description: "for some more texture but with our signature star pattern, hit em with these funky patchwork stars. boss is really letting us just do whatever these days so here we are."
    }
    
};



// Assume this function is called when an image is clicked
function onImageClick(itemId) {
    console.log("Clicked item ID:", itemId); // This should log 'item1', 'item2', etc.
    const item = items[itemId];
    if (item) {
        window.location.href = `itemForSaleTemplate.html?id=${itemId}`;
    } else {
        console.error('Item data not found for', itemId);
    }
}

// Load content when the page is loaded based on the URL parameter
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('id');

    // Use the existing updateContent function if an item exists
    const item = items[itemId];
    if (item) {
        updateContent(item);
    } else {
        console.error('Item data not found for', itemId);
    }
});




function continueShopping() {
    window.location.href = 'newhome.html';  // Directly change the page to newhome.html
}

function addToCart(){
    window.location.href = 'shoppingcart.html'; 
}

function goLand(){
    window.location.href = 'newlanding.html'; 
}




