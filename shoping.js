


'use strict';
(function () {

    console.log("Hi! We did it! :)");
    function Product(name, price, expirationDate) {
        this.id = (function () {
            var productId;
            productId = Math.floor((Math.random() * 90000) + 10000);  //ird be a name ertek elso es masodik betujet 
            console.log(productId);
            return productId;
        })();
        this.name = name;
        this.price = price
        this.expirationDate = expirationDate;
        this.getInfo = function () {
            return ((this.name[0] + this.name[name.length - 1]).toUpperCase()) + this.id + ", " + this.name + ", " + this.price.toFixed(2);
        }

    }

    function ShoppingBag() {
        this.listOfProducts = [];
        this.addProduct = function (product) {
            if (product.expirationDate < Date()) {
                console.log("The expiration date is expired!");
            }
            else {
                this.listOfProducts.push(product);
            }
        }
        this.getAverage = function () {
            var totalPrice = 0;

            for (var i = 0; i < this.listOfProducts.length; i++) {
                totalPrice += this.listOfProducts[i].price
            }

            return (totalPrice / this.listOfProducts.length).toFixed(2);
        }

        this.getMostExpensive = function () {
            var max;
            max = this.listOfProducts[0];
            for (var i = 0; i < this.listOfProducts.length; i++) {
                if (this.listOfProducts[i].price > max.price) {
                    max = this.listOfProducts[i];
                }
            }
            console.log(max.getInfo());

        }

        this.getTotalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return sum;
        }
    }

    function PaymentCard(accountBalance, status, validUntilDate) {
        this.accountBalance = Math.round(accountBalance * 2);
        this.status = status;
        this.validUntilDate = validUntilDate;
    }

    function checkoutAndBuy(shoppingBag, paymentCard) {
        if (shoppingBag.getTotalPrice() < paymentCard.accountBalance) {
            console.log("Purchase is successful :)");
        }
        else {
            console.log("You need " + (shoppingBag.getTotalPrice() - paymentCard.accountBalance).toFixed(2) + " zlotyi");

        }
    }

    var coffeeExpirationDate = new Date(2018, 7, 13);
    var chocolateExpirationDate = new Date(2019, 2, 5)
    var coffee = new Product("Grand kafa", 102.45, coffeeExpirationDate);
    var chocolate = new Product("Najlepse zelje", 120.345, chocolateExpirationDate);
    var myBag = new ShoppingBag();
    myBag.addProduct(coffee);
    myBag.addProduct(chocolate);
    myBag.getTotalPrice();
    console.log(coffee.getInfo());
    console.log(chocolate.getInfo());
    console.log(myBag.getTotalPrice());
    var card = new PaymentCard(100, true, new Date(2019, 1, 13));
    console.log(new Date(2019, 1, 13));

    checkoutAndBuy(myBag, card)
     console.log(myBag.getTotalPrice() - card.accountBalance);



})();

//shoping.js
//Приказује се shoping.js.
