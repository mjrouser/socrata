/*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
d3.json('outputArray.json', function(data) {
nv.addGraph(function() {
  var chart = nv.models.multiBarHorizontalChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                .transitionDuration(350)  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
  ;

  chart.xAxis     //Chart x-axis settings
      .axisLabel('Year')
      .rotateLabels(-45)
      .tickFormat(function(d) { return d3.time.format('%b %d')(new Date(d)); });

  chart.yAxis     //Chart y-axis settings
      .axisLabel('Output')
      .tickFormat('d');

  /* Done setting the chart up? Time to render it!*/
  

  d3.select('#chart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(data)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
  });
});



