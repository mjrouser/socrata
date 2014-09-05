d3.json('outputArray.json', function(data) {
  nv.addGraph(function() {
    var chart = nv.models.cumulativeLineChart()
        .x(function(d) { return d[0] })
        .y(function(d) { return d[1] })
        .color(d3.scale.category10().range())
        .margin({top: 30, right: 20, bottom: 50, left: 175})
        .color(d3.scale.category10().range())
        //.showValues(true)           //Show bar value next to each bar.
        //.tooltips(true)             //Show tooltips on hover.
        //.transitionDuration(350)
        .useInteractiveGuideline(true)
        //.showControls(true);        //Allow user to switch between "Grouped" and "Stacked" mode.

    chart.xAxis
        //.tickValues([1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004])
        .tickFormat(function(d){ 
            return d3.time.format('%x')(new Date(d))
        });
        

    chart.yAxis
        .tickFormat(d3.format());

    d3.select('#chart svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
});