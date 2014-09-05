/*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
d3.json('outputArray.json', function(data) {
nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .x(function(d) { return d[0] })
                .y(function(d) { return d[1] * 100 })
                //.useInteractiveGuideline(true);


  chart.xAxis     //Chart x-axis settings
      .axisLabel('Year')
      .rotateLabels(-45)
      .tickFormat(function(d) { return d3.time.format('%y')(new Date(d)); 
    });

  chart.yAxis     //Chart y-axis settings
      .axisLabel('Output')
      .tickFormat(d3.format(',.003f'));

  /* Done setting the chart up? Time to render it!*/
  

  d3.select('#chart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(data)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
  });
});



