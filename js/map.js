'use strict';

// возвращает произвольное значение
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// возвращает произвольный элемент
var getRandomItem = function (item) {
  return item[getRandomInt(0, item.length - 1)];
};

var numberOfNeighbors = 8;

var titles = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде'
];
var types = [
  'flat',
  'house',
  'bungalo'
];
var checkIn = [
  '12:00',
  '13:00',
  '14:00'
];
var checkOut = [
  '12:00',
  '13:00',
  '14:00'
];
var features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

// создание объявления
var createNotice = function () {
  var dialog = {
    'author': {
      'avatar': 'img/avatars/user' + '0' + Math.floor(getRandomInt(1, 8)) + '.png'
    },

    'location': {
      'x': getRandomInt(300, 900),
      'y': getRandomInt(100, 500)
    },

    'offer': {
      'title': getRandomItem(titles),
      'address': dialog.location.x + ', ' + dialog.location.y,
      'price': getRandomInt(1000, 1000000),
      'type': getRandomItem(types),
      'rooms': getRandomInt(1, 5),
      'guests': getRandomInt(1, 10),
      'checkin': getRandomItem(checkIn),
      'checkout': getRandomItem(checkOut),
      'features': getRandomItem(features),
      'description': '',
      'photos': []
    },

  };

  return dialog;
};

// создание произвольного объявления
var createNotice = function (count) {
  var notice = [];
  for (var i = 0; i < count; i++) {
    notice.push(createNotice());
  }
  return notice;
};

// создание пина
var createPin = function (item) {
  var pinDiv = document.createElement('div');
  var pinImg = document.createElement('img');

  pinDiv.className = 'pin';
  pinDiv.left = item.location.x - pinDiv.offsetWidth / 2 + 'px';
  pinDiv.top = item.location.y - pinDiv.offsetHeight + 'px';
  pinImg.className = 'rounded';
  pinImg.width = 40;
  pinImg.height = 40;
  pinImg.src = item.author.avatar;
  pinDiv.appendChild(pinImg);

  return pinDiv;
};

// добавление пинов в DOM
var renderPins = function (pin) {
  var pinMap = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < pin.length; i++) {
    fragment.appendChild(createPin(pin[i]));
  }
  pinMap.appendChild(fragment);
};


// добавление данных в DOM
var createDialog = function (notice) {
  var lodgeTemplate = document.querySelector('#lodge-template').content;
  var lodgeItem = lodgeTemplate.cloneNode(true);
  var lodgeTitle = lodgeItem.querySelector('.lodge__title');
  var lodgeAddress = lodgeItem.querySelector('.lodge__address');
  var lodgePrice = lodgeItem.querySelector('.lodge__price');
  var lodgeType = lodgeItem.querySelector('.lodge__type');
  var lodgeRooms = lodgeItem.querySelector('.lodge__rooms-and-guests');
  var lodgeCheckin = lodgeItem.querySelector('.lodge__checkin-time');
  var dialog = document.querySelector('.dialog');
  var dialogPanel = document.querySelector('.dialog__panel');

  lodgeTitle.textContent = notice.offer.title;
  lodgeAddress.textContent = notice.offer.address;
  lodgePrice.innerHTML = notice.offer.price + ' ' + '&#8381;/ночь';
  lodgeType.textContent = types[notice.offer.type];
  lodgeRooms.textContent = 'Для ' + notice.offer.guests + ' гостей в ' + notice.offer.rooms + ' комнатах';
  lodgeCheckin.textContent = 'Заезд после ' + notice.offer.checkin + ', выезд до ' + notice.offer.checkout;

  for (var i = 0; i < notice.offer.features.length; i++) {
    var span = document.createElement('span');
    span.className = 'feature__image feature__image--' + notice.offer.features[i];
    lodgeItem.querySelector('.lodge__features').appendChild(span);
  }

  lodgeItem.querySelector('.lodge__description').textContent = notice.offer.description;
  document.querySelector('.dialog__title img').src = notice.author.avatar;

  dialog.replaceChild(lodgeItem, dialogPanel);
};




