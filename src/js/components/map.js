document.addEventListener('DOMContentLoaded', function() {
        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.76963601332982,37.63668850000002],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 7
            });

            // Создание геообъекта с типом точка (метка).
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point", // тип геометрии - точка
                    coordinates: [55.76963601332982,37.63668850000002] // координаты точки
                }
            });

            var myPlacemark = new ymaps.Placemark([55.76963601332982,37.63668850000002], {}, {
                iconLayout: 'default#image',
                iconImageHref: '../images/Ellipse2.svg',
                iconImageSize: [15, 15],
                iconImageOffset: [-3, -42]
            });




            // Размещение геообъекта на карте.
            //myMap.geoObjects.add(myGeoObject);
            myMap.geoObjects.add(myPlacemark);
        }

});
