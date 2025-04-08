import whiteshirt from '../images/products/white-shirt.jpg';
import denimjacket from '../images/products/demin-jacket.jpg';
import BlackJoggers from '../images/products/Black-Joggers.jpg';
import FloralSummerDress from '../images/products/Floral Summer Dress.jpg';
import FormalTrousers from '../images/products/Formal Trousers.jpg';
import GraphicTshirt from '../images/products/Graphic T-shirt.png';
import KnittedSweater from '../images/products/Knitted Sweater.png';

const products = [
    {
        "id": 1,
        "name": "Classic White Shirt",
        "description": "A timeless white shirt made from premium cotton.",
        "price": 1199,
        "category": "Men",
        "image": whiteshirt,
        "colors": [
            "White",
            "Blue"
        ],
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "quantity": 25,
        "isRecentProduct": true
    },
    {
        "id": 2,
        "name": "Denim Jacket",
        "description": "Stylish denim jacket with rugged look.",
        "price": 2399,
        "category": "Unisex",
        "image": denimjacket,
        "colors": [
            "Blue",
            "Black"
        ],
        "sizes": [
            "M",
            "L",
            "XL"
        ],
        "quantity": 15,
        "isRecentProduct": true
    },
    {
        "id": 3,
        "name": "Black Joggers",
        "description": "Comfortable black joggers for casual wear.",
        "price": 899,
        "category": "Men",
        "image": BlackJoggers,
        "colors": [
            "Black",
            "Gray"
        ],
        "sizes": [
            "S",
            "M",
            "L"
        ],
        "quantity": 30,
        "isRecentProduct": true
    },
    {
        "id": 4,
        "name": "Floral Summer Dress",
        "description": "Lightweight summer dress with floral print.",
        "price": 1699,
        "category": "Women",
        "image": FloralSummerDress,
        "colors": [
            "Red",
            "Yellow",
            "White"
        ],
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "quantity": 20,
        "isRecentProduct": true
    },
    {
        "id": 5,
        "name": "Oversized Hoodie",
        "description": "Warm and cozy oversized hoodie for all-day comfort.",
        "price": 1499,
        "category": "Unisex",
        "image": "/images/products/oversized-hoodie.jpg",
        "colors": [
            "Black",
            "Green",
            "Beige"
        ],
        "sizes": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "quantity": 18,
        "isRecentProduct": false
    },
    {
        "id": 6,
        "name": "Formal Trousers",
        "description": "Perfect fit trousers ideal for office and events.",
        "price": 1899,
        "category": "Men",
        "image": FormalTrousers,
        "colors": [
            "Black",
            "Navy"
        ],
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "quantity": 12,
        "isRecentProduct": true
    },
    {
        "id": 7,
        "name": "Crop Top",
        "description": "Trendy crop top for stylish summer vibes.",
        "price": 699,
        "category": "Women",
        "image": "/images/products/crop-top.jpg",
        "colors": [
            "Pink",
            "White",
            "Lavender"
        ],
        "sizes": [
            "XS",
            "S",
            "M"
        ],
        "quantity": 28,
        "isRecentProduct": false
    },
    {
        "id": 8,
        "name": "Graphic T-shirt",
        "description": "Casual T-shirt with unique graphic design.",
        "price": 799,
        "category": "Unisex",
        "image": GraphicTshirt,
        "colors": [
            "Black",
            "White"
        ],
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "quantity": 40,
        "isRecentProduct": true
    },
    {
        "id": 9,
        "name": "High-Waist Jeans",
        "description": "Stretchable high-waist jeans for a snug fit.",
        "price": 2099,
        "category": "Women",
        "image": "/images/products/high-waist-jeans.jpg",
        "colors": [
            "Blue",
            "Black"
        ],
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "quantity": 10,
        "isRecentProduct": false
    },
    {
        "id": 10,
        "name": "Knitted Sweater",
        "description": "Soft knitted sweater perfect for winters.",
        "price": 1599,
        "category": "Unisex",
        "image": KnittedSweater,
        "colors": [
            "Brown",
            "Cream",
            "Olive"
        ],
        "sizes": [
            "M",
            "L",
            "XL"
        ],
        "quantity": 22,
        "isRecentProduct": true
    }
]

export default products;