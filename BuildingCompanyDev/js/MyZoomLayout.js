function createZoomLayout() {
    window.MyZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" +
        "<div id='zoom-in' style='cursor: pointer;'><img src='http://mesq.ru/images/icon-plus.svg'></div>" +
        "<div id='zoom-out' style='cursor: pointer;'><img src='http://mesq.ru/images/icon-minus.svg'></div>" +
        "</div>", {

        // Переопределяем методы макета, чтобы выполнять дополнительные действия
        // при построении и очистке макета.
        build: function () {
            // Вызываем родительский метод build.
            MyZoomLayout.superclass.build.call(this);

            // Начинаем слушать клики на кнопках макета.
            $('#zoom-in').bind('click', ymaps.util.bind(this.zoomIn, this));
            $('#zoom-out').bind('click', ymaps.util.bind(this.zoomOut, this));
        },

        clear: function () {
            // Снимаем обработчики кликов.
            $('#zoom-in').unbind('click');
            $('#zoom-out').unbind('click');

            // Вызываем родительский метод clear.
            MyZoomLayout.superclass.clear.call(this);
        },

        zoomIn: function () {
            var map = this.getData().control.getMap();
            // Генерируем событие, в ответ на которое
            // элемент управления изменит коэффициент масштабирования карты.
            this.events.fire('zoomchange', {
                oldZoom: map.getZoom(),
                newZoom: map.getZoom() + 1
            });
        },

        zoomOut: function () {
            var map = this.getData().control.getMap();
            this.events.fire('zoomchange', {
                oldZoom: map.getZoom(),
                newZoom: map.getZoom() - 1
            });
        }
    });
}

