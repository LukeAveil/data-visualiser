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
