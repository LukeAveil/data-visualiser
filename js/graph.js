var chart = c3.generate({
  bindto: '#chart',
  data: {
    x: 'Country',
    url: '/data/data.csv',
    type: 'bar'
  },
  axis: {
    x: {
      type: 'category'
    }
  },
  legend: {
        show: false
      }
});

function populationGraph() {
  chart.load({
    hide: ['GDP/Capita', 'Life Expectancy']
  });

}

function gdpGraph() {
  chart.load({
    hide: ['Population', 'Life Expectancy']
  });
}

function lifeGraph() {
  chart.load({
    hide: ['Population', 'GDP/Capita']
  });
}
