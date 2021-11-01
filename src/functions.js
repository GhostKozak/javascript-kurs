function addToCart(productName="Elma",quantity) {
    console.log(`${quantity} tane ${productName} sepete eklendi`)
}

//addToCart("Elma",12)
//addToCart("Yumurta")
//addToCart("Karpuz")

let sayHello = () => {
    console.log("Hello World")
}

// sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

// sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma", 5, 10)

function addToCart3(product) {
    console.log(`${product.quantity} adet ${product.name} sepete eklendi. Fiyatı : ${product.quantity*product.unitPrice} TL , Birim fiyatı ${product.unitPrice} TL`)
}

let product1 = {
    name: "Elma",
    quantity: 10,
    unitPrice: 12.00
}

addToCart3(product1)

let product2 = {
    name: "Elma",
    quantity: 10,
    unitPrice: 12.00
}

let product3 = {
    name: "Elma",
    quantity: 10,
    unitPrice: 12.00
}

product2 = product3
product2.name = "KARPUZ"

console.log(product3.name)

//primitif tipler değer tiplerdir
//objeler ve benzeri tipler referans tiplerdir

function addToCart4(products) {
    console.log(products)
}

let products = [
    {
        name: "Elma",
        quantity: 10,
        unitPrice: 12.00
    },
    {
        name: "Armut",
        quantity: 10,
        unitPrice: 12.00
    },
    {
        name: "Karpuz",
        quantity: 10,
        unitPrice: 12.00
    }
]

addToCart4(products)

function add(...numbers) { //rest operator | rest operatörü her zaman son parametre olarak yazılmalı 
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers = [30,10,500,600,120]
console.log("en yüksek sayı : " + Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {
        name: "İç Anadolu",
        population: "20M"
    },
    {
        name: "Marmara",
        population: "10M"
    },
    {
        name: "Karadeniz",
        population: "50M"
    },
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu)
console.log(icAnadoluSehirleri)


let productName, productQuantity, productUnitPrice;

({name:productName, quantity:productQuantity, unitPrice:productUnitPrice} = {
    name: "Elma",
    quantity: 10,
    unitPrice: 12.00
})

console.log(productName)
console.log(productQuantity)
console.log(productUnitPrice)