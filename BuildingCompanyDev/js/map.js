;(function () {
    'use strict'

    function Map() {
        var map,
            myGeoObjects,
            icon = {
                // ��� ����������� ������ �����.
                iconImageHref: '/images/icon-mark-big-grey-new.svg',
                // ������� �����.
                iconImageSize: [22, 34],
                // �������� ������ �������� ���� ������ ������������
                // � "�����" (����� ��������).
                iconImageOffset: [-11, -34]
            };

        this.get = function () {
            return map;
        };

        this.getGeoObjects = function () {
            return myGeoObjects;
        };

        this.init = function() {
            map = new ymaps.Map('map', {
                center: [45.03909376242208,38.979711460449124],
                zoom: 12,
                controls: ['rulerControl', 'trafficControl']
            }, {
                searchControlProvider: 'yandex#search',
                maxZoom: 18
            });

            $('iframe, .ymaps-2-1-38-copyright_logo_no').hide();

            createZoomLayout();
            createBalloonContentLayout();
            createBalloonLayout();

            map.controls.add(
                new ymaps.control.ZoomControl({
                    options: {
                        layout: MyZoomLayout
                    }})
            );

            // ������� ��������� ����������� � ������ �����.
            myGeoObjects = new ymaps.GeoObjectCollection({}, {
                preset: "islands#red",
                strokeWidth: 4,
                geodesic: true
            });

            window.Map.updateGeoObjects();
        };

        this.updateGeoObjects = function () {
            updateGeoObjectCollection();
            addObjectsToMap();
        };

        function addObjectsToMap() {
            map.geoObjects.removeAll();
            map.geoObjects.add(myGeoObjects);
            if(myGeoObjects.getLength()) {
                map.setBounds(myGeoObjects.getBounds(), {duration: 200});
            }
        }

        function updateGeoObjectCollection() {
            if(myGeoObjects == undefined) {
                return;
            }
            myGeoObjects.removeAll();
            var compareObjects = JSON.parse(localStorage.getItem('compareObjects')) || [];
            $('.card').each(function () {
                var id = $(this).find('.info').data('id'),
                    compare = compareObjects[id] != undefined,
                    latitude = $(this).find('.info').data('latitude'),
                    longitude = $(this).find('.info').data('longitude'),
                    name = $(this).find('.to_object').text(),
                    deadline = $(this).find('.type li:last p span').text(),
                    flats = $(this).find('.parameters').data('flats'),
                    slug = $(this).find('.to_object').attr('href').replace('/krasnodar/', ''),
                    image = $(this).find('.thumbnail img').attr('src'),
                    curIcon = icon,
                    zIndex = 110;

                if(compare) {
                    zIndex = 120;
                    curIcon = {
                        // ��� ����������� ������ �����.
                        iconImageHref: '/images/icon-heart-big-orange.svg',
                        // ������� �����.
                        iconImageSize: [30, 40],
                        // �������� ������ �������� ���� ������ ������������
                        // � "�����" (����� ��������).
                        iconImageOffset: [-16, -34]
                    }
                }

                var geo = new ymaps.Placemark([latitude, longitude], {
                    id: id,
                    name: name,
                    image: image,
                    slug: slug,
                    deadline: deadline,
                    prices1: flats[1] != undefined ? flats[1].price : '',
                    prices2: flats[2] != undefined ? flats[2].price : '',
                    prices3: flats[3] != undefined ? flats[3].price : '',
                    prices4: flats[4] != undefined ? flats[4].price : '',
                    prices5: flats[5] != undefined ? flats[5].price : '',
                    areas1: flats[1] != undefined ? flats[1].area : '',
                    areas2: flats[2] != undefined ? flats[2].area : '',
                    areas3: flats[3] != undefined ? flats[3].area : '',
                    areas4: flats[4] != undefined ? flats[4].area : '',
                    areas5: flats[5] != undefined ? flats[5].area : ''
                }, {
                    balloonShadow: false,
                    balloonLayout: MyBalloonLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    balloonPanelMaxMapArea: 0,
                    closeButton: false,
                    // ���������� ������� ������ ��� ������.
                    iconLayout: 'default#image',
                    // ��� ����������� ������ �����.
                    iconImageHref: curIcon.iconImageHref,
                    // ������� �����.
                    iconImageSize: curIcon.iconImageSize,
                    // �������� ������ �������� ���� ������ ������������
                    // � "�����" (����� ��������).
                    iconImageOffset: curIcon.iconImageOffset,
                    // �� �������� ������ ��� �������� ������.
                    //hideIconOnBalloonOpen: false,
                    // � ������������� ������� �����, ��� �������� ��� �������.
                    balloonOffset: [20, -45],
                    zIndex: zIndex
                });

                myGeoObjects.add(geo);

                $(this).data('geo', geo);
            })
        }

    }

    window.Map = new Map();
    ymaps.ready(window.Map.init);
})();