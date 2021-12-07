//========== lineChart==========//

// setup
const deathNumbers = [
  { month: 'January', death: { natural: 500, accident: 231, sickness: 80} },
  { month: 'February', death: { natural: 520, accident: 322, sickness: 78} },
  { month: 'March', death: { natural: 512, accident: 214, sickness: 105} },
  { month: 'April', death: { natural: 480, accident: 250, sickness: 120} },
  { month: 'May', death: { natural: 410, accident: 240, sickness: 140} },
  { month: 'June', death: { natural: 350, accident: 230, sickness: 120} }
];

const data = {
  datasets: [{
    label: 'Natural Deaths',
    data: deathNumbers,
    fill: false,
    backgroundColor: 'rgb(238, 130, 238)',
    borderColor: 'rgb(238, 130, 238)',
    tension: 0.6,
    parsing: {
      xAxisKey: 'month',
      yAxisKey: 'death.natural'
    },
  },{
      label: 'Accidental Death',
      data: deathNumbers,
      fill: false,
      backgroundColor: 'rgb(255, 165, 0)',
      borderColor: 'rgb(255, 165, 0)',
      tension: 0.3,
      parsing: {
        xAxisKey: 'month',
        yAxisKey: 'death.accident'
      },
    },{
        label: 'Death by Sickness',
        data: deathNumbers,
        fill: false,
        backgroundColor: 'rgb(60, 179, 113)',
        borderColor: 'rgb(60, 179, 113)',
        tension: 0.1,
        parsing: {
          xAxisKey: 'month',
          yAxisKey: 'death.sickness'
        }
        
  }]
};

//========== lineChart ==========// 

// config
const config = {
  type: 'line',
  data, 
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }

};

// render init block
const lineChart= new Chart(
  document.getElementById('lineChart'),
  config
);

