var chart = c3.generate({
  bindto: '#chart',
  data: {
    x: 'Country',
    url: '/data/data.csv',
    hide: ['Population','Life Expectancy','GDP/Capita'],
    type: 'bar'
  },
  axis: {
    x: {
      type: 'category'
    },
    y: {
      label: {
        position: 'outer-center'
      }
    }
  },
  legend: {
        show: false
      }
});

function updateGraphSubset(data) {
  hideAll();
  yAxis(data);
  graphData(data);
  showGraph();
}

function hideAll() {
  chart.hide(['Population','Life Expectancy','GDP/Capita']);
}

function showGraph() {
  document.getElementById("chart").style.visibility = "visible";
}

function graphData(data) {
  chart.show(data);
}

function yAxis(data) {
  chart.axis.labels({
    y: data
  });
}
