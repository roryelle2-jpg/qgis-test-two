var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriSatelitte_1 = new ol.layer.Tile({
            'title': 'Esri Satelitte',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BigItemsCurrent_2 = new ol.format.GeoJSON();
var features_BigItemsCurrent_2 = format_BigItemsCurrent_2.readFeatures(json_BigItemsCurrent_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BigItemsCurrent_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BigItemsCurrent_2.addFeatures(features_BigItemsCurrent_2);
var lyr_BigItemsCurrent_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BigItemsCurrent_2, 
                style: style_BigItemsCurrent_2,
                popuplayertitle: 'Big-Items-Current',
                interactive: true,
    title: 'Big-Items-Current<br />\
    <img src="styles/legend/BigItemsCurrent_2_0.png" /> Pond<br />\
    <img src="styles/legend/BigItemsCurrent_2_1.png" /> Parking<br />\
    <img src="styles/legend/BigItemsCurrent_2_2.png" /> Trailhead<br />\
    <img src="styles/legend/BigItemsCurrent_2_3.png" /> Houses<br />\
    <img src="styles/legend/BigItemsCurrent_2_4.png" /> School<br />' });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                popuplayertitle: 'Roads',
                interactive: true,
    title: 'Roads<br />\
    <img src="styles/legend/Roads_3_0.png" /> 1<br />\
    <img src="styles/legend/Roads_3_1.png" /> 2<br />\
    <img src="styles/legend/Roads_3_2.png" /> <br />' });
var format_CurrentTrails_4 = new ol.format.GeoJSON();
var features_CurrentTrails_4 = format_CurrentTrails_4.readFeatures(json_CurrentTrails_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurrentTrails_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurrentTrails_4.addFeatures(features_CurrentTrails_4);
var lyr_CurrentTrails_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurrentTrails_4, 
                style: style_CurrentTrails_4,
                popuplayertitle: 'Current Trails ',
                interactive: true,
    title: 'Current Trails <br />\
    <img src="styles/legend/CurrentTrails_4_0.png" /> 3<br />\
    <img src="styles/legend/CurrentTrails_4_1.png" /> 2<br />\
    <img src="styles/legend/CurrentTrails_4_2.png" /> 1<br />' });
var format_SpecificPoints_5 = new ol.format.GeoJSON();
var features_SpecificPoints_5 = format_SpecificPoints_5.readFeatures(json_SpecificPoints_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecificPoints_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecificPoints_5.addFeatures(features_SpecificPoints_5);
var lyr_SpecificPoints_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpecificPoints_5, 
                style: style_SpecificPoints_5,
                popuplayertitle: 'Specific-Points',
                interactive: true,
                title: '<img src="styles/legend/SpecificPoints_5.png" /> Specific-Points'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EsriSatelitte_1.setVisible(true);lyr_BigItemsCurrent_2.setVisible(true);lyr_Roads_3.setVisible(true);lyr_CurrentTrails_4.setVisible(true);lyr_SpecificPoints_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EsriSatelitte_1,lyr_BigItemsCurrent_2,lyr_Roads_3,lyr_CurrentTrails_4,lyr_SpecificPoints_5];
lyr_BigItemsCurrent_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', });
lyr_Roads_3.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Name': 'Name', });
lyr_CurrentTrails_4.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', });
lyr_SpecificPoints_5.set('fieldAliases', {'Name': 'Name', 'Type': 'Type', });
lyr_BigItemsCurrent_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'Range', });
lyr_Roads_3.set('fieldImages', {'fid': 'TextEdit', 'Type': 'Range', 'Name': 'TextEdit', });
lyr_CurrentTrails_4.set('fieldImages', {'fid': 'TextEdit', 'Type': 'Range', });
lyr_SpecificPoints_5.set('fieldImages', {'Name': '', 'Type': '', });
lyr_BigItemsCurrent_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Type': 'no label', });
lyr_Roads_3.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Name': 'no label', });
lyr_CurrentTrails_4.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', });
lyr_SpecificPoints_5.set('fieldLabels', {'Name': 'no label', 'Type': 'no label', });
lyr_SpecificPoints_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});