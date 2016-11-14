function populationGraph() {
  var chart = c3.generate({
    bindto: '#chart',
    data: {
      x: 'Country',
      url: '/data/data.csv',
      hide: ['GDP/Capita', 'Life Expectancy'],
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
}

function gdpGraph() {
  var chart = c3.generate({
    bindto: '#chart',
    data: {
      x: 'Country',
      url: '/data/data.csv',
      hide: ['Population', 'Life Expectancy'],
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
}

function lifeGraph() {
  var chart = c3.generate({
    bindto: '#chart',
    data: {
      x: 'Country',
      url: '/data/data.csv',
      hide: ['GDP/Capita', 'Population'],
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
}
