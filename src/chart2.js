d3.json('outputArray.json', function(data) {
  nv.addGraph(function() {
    var chart = nv.models.cumulativeLineChart()
        .x(function(d) { return d[0] })
        .y(function(d) { return d[1] })
        .color(d3.scale.category10().range())
        .margin({top: 30, right: 20, bottom: 50, left: 175})
        .color(d3.scale.category10().range())
        .transitionDuration(350)
        .useInteractiveGuideline(true)
        

    chart.xAxis
        .tickValues([-294187180,-262651180,-231115180,-199579180,-167956780,-136420780,-104884780,-73348780,-41726380,-10190380,21345620,52881620,84504020,116040020,147576020,179112020,210734420,242270420,273806420,305342420,336964820,368500820,400036820,431572820,463195220,494731220,526267220,557803220,589425620,620961620,652497620,684033620,715656020,747192020,778728020,810264020,841886420,873422420,904958420,936494420,1409947200,1409947260,1409947320,1409947380,1409947440])
        
        .tickFormat(function(d){ 
            return d3.time.format('%y')(new Date(d))
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