define(['cartodb'], function (cartodb) {

	 function main() {
            cartodb.createVis('map', 'http://mjrouser.cartodb.com/api/v2/viz/193f7c9c-32d5-11e4-a042-0e10bcd91c2b/viz.json', {
            shareable: true,
            title: true,
            description: true,
            search: false,
            tiles_loader: true,
            center_lat: 39.390200,
            center_lon: -98.593750,
            zoom: 4
        })
        .done(function(vis, layers) {
          
          layers[1].setInteraction(true);
          layers[1].on('featureOver', function(e, pos, latlng, data) {
            cartodb.log.log(e, pos, latlng, data);
          });

          
          map = vis.getNativeMap();

          
        })
        .error(function(err) {
          console.log(err);
        });
      }

      //window.onload = main;
      return main;

});