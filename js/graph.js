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
      },
      y: {
        label: {
          text: 'Population',
          position: 'outer-center'
        }
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
      },
      y: {
        label: {
          text: 'GDP/Capita',
          position: 'outer-center'
        }
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
      },
      y: {
        label: {
          text: 'Years',
          position: 'outer-center'
        }
      }
    },
    legend: {
          show: false
        }
  });
}
