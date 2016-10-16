'use strict'

$('#map').height(document.documentElement.clientHeight);  /*высота страницы*/

ymaps.ready(init); /*передаем ф-ю init  в качестве обработчика загрузки библ яндекс карты*/

function init() {

	/*ф-я конструктор*/
	var Map = new ymaps.Map('map', {   /*обьект иництализации карты - как она выглядит при загрузке*/
		center: [55.755773, 37.617761],
		zoom: 10
            // controls: ['rulerControl', 'trafficControl']
        }, {													/*2обьект - параметры как карта будет работать*/
        	searchControlProvider: 'yandex#search',
        	maxZoom: 18
        }),

	/*collection of Geoobjects*/
	myGeoObjects = new ymaps.GeoObjectCollection({}, {
		preset: "islands#red",
		strokeWidth: 4,
		geodesic: true
	});

	var MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
		`
		<div class="flag clearfix">
		<div class="flag__content clearfix">
		<div class="flag__content_logo">
		<img src="img/logo_map.png" alt="umka_logo">
		</div>
		<div class="flag__content_address">
		<p class="flag__name">$[properties.name]</p>
		<p>$[properties.address]</p>
		</div>
		<a class="close" href="#"><i class="fa fa-times-circle"></i></a>
		</div>
		<div class="flag__schedule">
		<div class="flag__schedule_item">
		<strong>Вторник</strong>
		<p>16:30  3-7 лет</p>
		</div>
		<div class="flag__schedule_item">
		<strong>Четверг</strong>
		<p>16:30  3-7 лет</p>
		</div>
		</div>
		<div class="headertop__btn header__btn_flag">
		<div class="btn_wrap btn_wrap_flag">
		<a href="#callback" class="button fancybox">Записаться
		на бесплатное занятие</a>
		</div>
		</div>
		<img class="img_stripe" src="img/form_stripe.png" alt="form_stripe">
		</div>
		`
		);

	// Создание макета основного содержимого контента балуна.
	var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
		'<div id="object-info">' + 	'<a href="#" class="close"></a>' +
		'<div class="arrow"></div>' + '$[[options.contentLayout observeSize]]' +  '</div>',/*adding our layout*/
		{
                /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                 build: function () {
                 	this.constructor.superclass.build.call(this);

                 	this._$element = $('#object-info', this.getParentElement());

                 	this.applyElementOffset();

                 	this._$element.find('.close')
                 	.on('click', $.proxy(this.onCloseClick, this));
                 },

                /**
                 * Удаляет содержимое макета из DOM.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                 clear: function () {
                 	this._$element.find('.close')
                 	.off('click');

                 	this.constructor.superclass.clear.call(this);
                 },

                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                 onSublayoutSizeChange: function () {
                 	MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                 	if(!this._isElement(this._$element)) {
                 		return;
                 	}

                 	this.applyElementOffset();

                 	this.events.fire('shapechange');
                 },

                /**
                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                 applyElementOffset: function () {
                 	this._$element.css({
                 		left: -(this._$element[0].offsetWidth / 2),
                 		top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                 	});
                 },

                /**
                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                 onCloseClick: function (e) {
                 	e.preventDefault();

                 	this.events.fire('userclose');
                 },

                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                 */
                 getShape: function () {
                 	if(!this._isElement(this._$element)) {
                 		return MyBalloonLayout.superclass.getShape.call(this);
                 	}

                 	var position = this._$element.position();

                 	return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                 		[position.left, position.top], [
                 		position.left + this._$element[0].offsetWidth,
                 		position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                 		]
                 		]));
                 },

                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                 _isElement: function (element) {
                 	return element && element[0] && element.find('.arrow')[0];
                 }
             }

             );

var objects = [
	{name: 'Школа № 9', address:'Павлова, 8', coords: [57.187465067488304,65.55341699999994]},
	{name: 'Школа № 9 (бывшая №39)', address:'Шишкова, 15', coords: [57.187178067487544,65.56781699999993]}
];

for(var i=0; i < objects.length; i++) {
	var current = objects[i];

	var geo = new ymaps.Placemark(current.coords, {
		address: current.address,
		name: current.name
	}, {
		balloonShadow: false,
		balloonLayout: MyBalloonLayout,
		balloonContentLayout: MyBalloonContentLayout,
		balloonPanelMaxMapArea: 0,
		closeButton: false,
		iconLayout: 'default#image',
		balloonOffset: [20, -45]
	});

	myGeoObjects.add(geo);
}
/*creatimg obj - adding to collection - colection to map*/


	/*adding collection to map*/
	Map.geoObjects.add(myGeoObjects);

 // Устанавливаем карте центр и масштаб так, чтобы охватить коллекцию целиком.
    Map.setBounds(myGeoObjects.getBounds());

}