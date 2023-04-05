var meals = prompt("enter what u want to eat")
if (meals == "burger") {
    var type = prompt("enter the type of burger")
    var quantity = +prompt("enter the quantity of burger")
    if (type == "zinger") {
        var price = 200;
        var total = price * quantity;
        console.log("total amount of zinger burger :", total)
    }
    else if (type == "beef") {
        var price = 250;
        var total = price * quantity;
        console.log("total amount of Beef burger :", total)
    }
    else if (type == "chicken") {
        var price = 230;
        var total = price * quantity;
        console.log("total amount of Chicken burger :", total)
    }
    else if (type == "egg") {
        var price = 100;
        var total = price * quantity;
        console.log("total amount of Egg burger :", total)
    }
}

if (meals == "biryani") {
    var type = prompt("enter the type of biryani")
    var quantity = +prompt("enter the quantity of quantity")
    if (type == "aloo") {
        var price = 150;
        var total = price * quantity;
        console.log("total amount of Aloo biryani :", total)
    }
    else if (type == "beef") {
        var price = 500;
        var total = price * quantity;
        console.log("total amount of Beef biryani :", total)
    }
    else if (type == "chicken") {
        var price = 400;
        var total = price * quantity;
        console.log("total amount of Chicken biryani :", total)
    }
    else if (type == "keema") {
        var price = 800;
        var total = price * quantity;
        console.log("total amount of Keema biryani :", total)
    }
}

if (meals == "pizza") {
    var size = prompt("enter the size of pizza")
    var flavour = prompt("enter the flavour of pizza")
    var quantity = +prompt("enter the quantity of pizza")
    if (size == "small") {
        if (flavour == "fajita" || flavour == "tikka" || flavour == "malai boti") {
            var price = 600;
            var total = price * quantity;
            console.log("total amount of small pizza  :", total)
        }
    }
    else if (size == "large") {
        if (flavour == "fajita" || flavour == "tikka" || flavour == "malai boti") {
            var price = 1000;
            var total = price * quantity;
            console.log("total amount of Large pizza :", total)
        }
    }
    else if (size == "xl") {
        if (flavour == "fajita" || flavour == "tikka" || flavour == "malai boti") {
            var price = 1500;
            var total = price * quantity;
            console.log("total amount of extra large pizza :", total)
        }
    }
    else if (size == "xxl") {
        if (flavour == "fajita" || flavour == "tikka" || flavour == "malai boti") {
            var price = 2000;
            var total = price * quantity;
            console.log("total amount of xxl pizza :", total)
        }
    }
}

if (meals == "sandwich") {
    var type = prompt("enter the type of sandwich")
    var quantity = +prompt("enter the quantity of sandwich")
    if (type == "chicken") {
        var price = 200;
        var total = price * quantity;
        console.log("total amount of Chicken sandwich :", total)
    }
    else if (type == "cheez") {
        var price = 250;
        var total = price * quantity;
        console.log("total amount of Cheez sandwich :", total)
    }
    else if (type == "club") {
        var price = 250;
        var total = price * quantity;
        console.log("total amount of Club sandwich :", total)
    }
    else if (type == "vegetable") {
        var price = 100;
        var total = price * quantity;
        console.log("total amount of vegetable sandwich :", total)
    }
}

if (meals == "roll") {
    var type = prompt("enter the flavour of roll ")
    var quantity = +prompt("enter the quantity of roll")
    if (type == "chicken") {
        var price = 200;
        var total = price * quantity;
        console.log("total amount of Chicken roll :", total)
    }
    else if (type == "cheez") {
        var price = 300;
        var total = price * quantity;
        console.log("total amount of Cheez roll :", total)
    }
    else if (type == "beef boti") {
        var price = 350;
        var total = price * quantity;
        console.log("total amount of Beef boti roll :", total)
    }
    else if (type == "vegetable") {
        var price = 100;
        var total = price * quantity;
        console.log("total amount of vegetable roll :", total)
    }
}

if (meals == "haleem") {
    var type = prompt("enter the flavour of haleem")
    var quantity = +prompt("enter the quantity of haleem")
    if (type == "chicken") {
        var price = 200;
        var total = price * quantity;
        console.log("total amount of chicken haleem :", total)
    }
    else if (type == "beef") {
        var price = 300;
        var total = price * quantity;
        console.log("total amount of Beef haleem :", total)
    }
}

if (meals == "karahi") {
    var type = prompt("enter the type of karahi")
    var quantity = +prompt("enter the quantity of karahi")
    if (type == "koala") {
        var price = 1000;
        var total = price * quantity;
        console.log("total amount of Koala karahi :", total)
    }
    else if (type == "beef") {
        var price = 1500;
        var total = price * quantity;
        console.log("total amount of Beef karahi :", total)
    }
    else if (type == "chicken") {
        var price = 800;
        var total = price * quantity;
        console.log("total amount of Chicken karahi :", total)
    }
    else if (type == "mutton") {
        var price = 2000;
        var total = price * quantity;
        console.log("total amount of Mutton karahi :", total)
    }
}

if (meals == "barbeque") {
    var type = prompt("enter the type of barbeque")
    var quantity = +prompt("enter the quantity of barbeque")
    if (type == "malai boti") {
        var price = 300;
        var total = price * quantity;
        console.log("total amount of Malai boti :", total)
    }
    else if (type == "beef boti") {
        var price = 400;
        var total = price * quantity;
        console.log("total amount of Beef boti :", total)
    }
    else if (type == "chicken tikka") {
        var price = 250;
        var total = price * quantity;
        console.log("total amount of Chicken tikka :", total)
    }
    else if (type == "seekh kabab") {
        var price = 450;
        var total = price * quantity;
        console.log("total amount of Seekh kabab :", total)
    }
    else if (type == "behari kabab") {
        var price = 500;
        var total = price * quantity;
        console.log("total amount of Behari kabab :", total)
    }
    else if (type == "turkish kabab") {
        var price = 600;
        var total = price * quantity;
        console.log("total amount of Turkish kabab :", total)
    }
}
else{
    alert("Not available!")
}