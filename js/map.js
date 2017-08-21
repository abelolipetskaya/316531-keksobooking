'use strict'

// взяла эту функцию в интернете, как я понимаю, "+min" значит - включать и max, и min значения, но до конца не уверена 

var getRandomInt = function(min, max) {
    return Math.random() * max + min;
};

var featuresOffer = {
    'author': {
        'avatar': 'img/avatars/user' + '0' + Math.floor(getRandomInt(1, 8)) + '.png',
    },
    'offer': {
        'title': [
            'Большая уютная квартира',
            'Маленькая неуютная квартира',
            'Огромный прекрасный дворец',
            'Маленький ужасный дворец',
            'Красивый гостевой домик',
            'Некрасивый негостеприимный домик',
            'Уютное бунгало далеко от моря',
            'Неуютное бунгало по колено в воде'
        ],
        'address': Math.floor(getRandomInt(300, 900)) + ', ' + Math.floor(getRandomInt(100, 500)),
        'price': Math.floor(getRandomInt(1000, 1000000)),
        'type': [
            'flat',
            'house',
            'bungalo'
        ],
        'rooms': Math.floor(getRandomInt(1, 5)),
        'guests': ,
        'checkin': [
            '12:00',
            '13:00',
            '14:00'
        ],
        'checkout': [
            '12:00',
            '13:00',
            '14:00'
        ],
        'features': [
            'wifi',
            'dishwasher',
            'elevator',
            'conditioner'
        ],
        'description': '',
        'photos': []
    },
    'location': {
        'x': Math.floor(getRandomNumber(300, 900)),
        'y': Math.floor(getRandomNumber(100, 500))
    }
};