d3.json('relativeOutputArray2.json' , function(data) {
  nv.addGraph(function() {
    var chart = nv.models.stackedAreaChart()
                  .margin({right: 100})
                  .x(function(d) { return d[0] })   //We can modify the data accessor functions...
                  .y(function(d) { return d[1] })   //...in case your data is formatted differently.
                  .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
                  .rightAlignYAxis(true)      //Let's move the y-axis to the right side.
                  .transitionDuration(500)
                  .showControls(true)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                  .clipEdge(true);

    //Format x-axis labels with custom function.
    chart.xAxis
        .tickFormat(function(d) { 
          return d3.time.format('%x')(new Date(d)) 
    });

    chart.yAxis
        .tickFormat(d3.format(',.2f'));

    d3.select('#chart svg')
      .datum(data)
      .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
})


/*

var outputData = [

 
 
{
    "key" : "AL", 
    "values": [ [ -294193671 , 0.5668] , [ -262657671 , 0.5765] , [ -231121671 , 0.5604] , 
    [ -199585671 , 0.6288] , [ -167963271 , 0.6314] , [ -136427271 , 0.6643] , 
    [ -104891271 , 0.6244] , [ -73355271 , 0.6010] , [ -41732871 , 0.6202] ,[ -10196871 , 0.6550] , 
    [ 21339129 , 0.6513] , [ 52875129 , 0.7248] , [ 84497529 , 0.7187] , [ 116033529 , 0.6937] , 
    [ 147569529 , 0.7109] , [ 179105529 , 0.7466] , [ 210727929 , 0.7658] , [ 242263929 , 0.7331] , 
    [ 273799929 , 0.7681] , [ 305335929 , 0.8069] , [ 336958329 , 0.7367] ,[ 368494329 , 0.8763] , 
    [ 400030329 , 0.8478] , [ 431566329 , 0.7614] , [ 463188729 , 0.8060] , [ 494724729 , 0.8468] , 
    [ 526260729 , 0.7791] , [ 557796729 , 0.8731] , [ 589419129 , 0.9008] , [ 620955129 , 0.9132] , 
    [ 652491129 , 0.9424] , [ 684027129 , 1.0458] , [ 715649529 , 0.9915] , [ 747185529 , 0.9431] ,
    [ 778721529 , 1.0158] , [ 810257529 , 0.9910] , [ 841879929 , 1.0000] , [ 873415929 , 1.0389] , 
    [ 904951929 , 1.0472] , [ 936487929 , 1.1182] , [ 1409860800 , 1.0694] , [ 1409860860 , 1.1331] , 
    [ 1409860920 , 1.1082] ,[ 1409860980 , 1.1965] ,[ 1409861040 , 1.1623] ]
 
 }]

 */