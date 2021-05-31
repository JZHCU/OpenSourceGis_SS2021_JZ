var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HH_WFS_Stadtradstadtrad_stationen_1 = new ol.format.GeoJSON();
var features_HH_WFS_Stadtradstadtrad_stationen_1 = format_HH_WFS_Stadtradstadtrad_stationen_1.readFeatures(json_HH_WFS_Stadtradstadtrad_stationen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HH_WFS_Stadtradstadtrad_stationen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HH_WFS_Stadtradstadtrad_stationen_1.addFeatures(features_HH_WFS_Stadtradstadtrad_stationen_1);cluster_HH_WFS_Stadtradstadtrad_stationen_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HH_WFS_Stadtradstadtrad_stationen_1
});
var lyr_HH_WFS_Stadtradstadtrad_stationen_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_HH_WFS_Stadtradstadtrad_stationen_1, 
                style: style_HH_WFS_Stadtradstadtrad_stationen_1,
                interactive: true,
                title: '<img src="styles/legend/HH_WFS_Stadtradstadtrad_stationen_1.png" /> HH_WFS_Stadtrad stadtrad_stationen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_HH_WFS_Stadtradstadtrad_stationen_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_HH_WFS_Stadtradstadtrad_stationen_1];
lyr_HH_WFS_Stadtradstadtrad_stationen_1.set('fieldAliases', {'gml_id': 'gml_id', 'anzahl_raeder': 'Anzahl Räder', 'uid': 'uid', 'name': 'Ort', 'stand': 'Stand', 'anzahl_pedelec': 'Anzahl Pedelec', 'anzahl_bike': 'Anzahl Bike', 'anzahl_cargobike_electric': 'Anzahl Cargobike Elektrisch', 'art_der_station': 'Stationsart', 'anzahl_scooter': 'Anzahl Scooter', 'anzahl_cargobike': 'Anzahl Cargobike', 'anzahl_scooter_electric': 'Anzahl Scooter Elektrisch', });
lyr_HH_WFS_Stadtradstadtrad_stationen_1.set('fieldImages', {'gml_id': 'Hidden', 'anzahl_raeder': 'Range', 'uid': 'Hidden', 'name': 'TextEdit', 'stand': 'Hidden', 'anzahl_pedelec': 'Hidden', 'anzahl_bike': 'Hidden', 'anzahl_cargobike_electric': 'Hidden', 'art_der_station': 'Hidden', 'anzahl_scooter': 'Hidden', 'anzahl_cargobike': 'Hidden', 'anzahl_scooter_electric': 'Hidden', });
lyr_HH_WFS_Stadtradstadtrad_stationen_1.set('fieldLabels', {'anzahl_raeder': 'inline label', 'name': 'inline label', });
lyr_HH_WFS_Stadtradstadtrad_stationen_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});