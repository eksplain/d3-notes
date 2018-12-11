var basic_chart = function() {
  var chart = d3.select("#d3chart")
                .selectAll("div")
                .data(data);
  chart.enter()
       .append("div")
       .style("height", d => d.value + "px")
       .text(d => d.currency);
}
