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
		`<div class="container-fluid">
		<div class="row">
		<div class="col-md-12">
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
		</div>
		</div>
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
	{name: 'Школа № 9 (бывшая №39)', address:'Шишкова, 15', coords: [57.187178067487544,65.56781699999993]},
	{name: 'Гимназия № 12', address:'50 лет Октября, 41', coords: [57.148068067508156,65.57911750000002]},
	{name: 'Гимназия № 16 (бывшая №8)', address:'Текстильная, 10', coords: [57.131775567557135,65.59267349999999]},
	{name: 'Школа № 17', address:'Геологоразведчиков, 39', coords: [57.128966567549874,65.58219]},
	{name: 'Школа № 27', address:'Пермякова, 39а', coords: [57.115954567577,65.58148049999998]},
	{name: 'Школа № 27', address:'30 лет Победы, 106', coords: [57.11513356757485,65.59051749999992]},
	{name: 'Шокла № 48', address:'Ершова, 9', coords: [57.17434756748488,65.63582849999992]},
	{name: 'Школа № 69', address:'Червишевский тракт, 29', coords: [57.12321606756536,65.522003]},
	{name: 'Школа № 69 (бывшая №44)', address:'Самарцева, 28', coords: [57.12099306755967,65.5280034999999]},
	{name: 'Лицей № 81 (бывшая №36)', address:'пр. Шаимский, 8а', coords: [57.18280706747635,65.58878349999992]},
	{name: 'Гимназия № 83', address:'Революция, 199', coords: [57.12004506755723,65.54131649999995]},
	{name: 'Школа № 92', address:'Николая Зелинского, 22', coords: [57.111683567566,65.56171749999987]},
	{name: 'Школа № 93 (бывшая №6)', address:'Геологоразведчиков, 14', coords: [57.13132156755596,65.57362899999991]},
	{name: 'Школа № 94', address:'пр. Солнечный, 24 ', coords: [57.176313567489956,65.5642145]},
	{name: 'Детский сад №60', address:'Пархоменко,29 ', coords: [57.128932567549796,65.52150899999994]},
	{name: 'Детский сад №73', address:'Холодильная,44 ', coords: [57.150026067513245,65.57611749999997]},
	{name: 'Детский сад №89', address:'Парфенова,26а ', coords: [57.134706567564656,65.59101149999994]},
	{name: 'Детский сад №112', address:'Волгоградская,14', coords: [57.14293606755555,65.52559599999998]},
	{name: 'Детский сад №118', address:'Пермякова, 25/1', coords: [57.11838356758323,65.583232]},
	{name: 'Детский сад №121', address:'Шишкова,82', coords: [57.19247456747092,65.58365449999992]},
	{name: 'Детский сад №133', address:'Менжинского,55', coords: [57.18417306747983,65.57861449999994]},
	{name: 'Детский сад №141', address:'Монтажников,24', coords: [57.1084475675577,65.59443400000002]},
	{name: 'Детский сад №160', address:'Муравленко,19 к.1', coords: [57.17391306751406,65.55076699999995]},
	{name: 'Детский сад №167', address:'Газовиков, 21', coords: [57.17710906752228,65.55623749999994]},
	{name: 'Детский сад №185', address:'Широтная,192/3', coords: [57.09459256758259,65.61563449999997]},
	{name: 'Детский сад №186', address:'Николая Зелинского,21/1', coords: [57.113711567571215,65.56453799999997]},
	{name: 'ДРЦ «Продленка»', address:'Вербовая, 4/2', coords: [57.09478806761331,65.64348199999996]},
	{name: 'ДРЦ «Мы вместе»', address:'Газовиков 25/2', coords: [57.175679567488324,65.55589649999999]},
	{name: 'Легкоатлетический манеж', address:'Луначарского, 12', coords: [57.16590556752371,65.50981250000001]},
	{name: 'Школа олимпийского тхэквондо «Керуги»', address:'П.Артамонова, 7/1', coords: [57.10739706758524,65.57236249999995]},
	{name: 'Школа олимпийского тхэквондо «Керуги»', address:'Эрвье, 16', coords: [57.17349079889334,65.5674844999999]},
	{name: 'ШБИ «Дао Гармонии»', address:'Широтная, 138/3 (головной офис)', coords: [57.101594067570375,65.58661849999999]},
	{name: 'ШБИ «Дао Гармонии»', address:'Грибоедова 13/2', coords: [57.14832656753913,65.53521699999999]},
	{name: 'ШБИ «Дао Гармонии»', address:'Мельничная 83/1', coords: [57.13788606754256,65.55109949999998]},
	{name: 'СК «Энерго»', address:'Московский тракт 143 5/5', coords: [57.13243956755883,65.49116349999998]}
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