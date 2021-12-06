//========== Bar ==========//

// setup
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
};

// config
const config = {
    type: 'bar',
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
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);  


//========== lineChart ==========// 

// config
const config2 = {
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
    config2
); 

//========== pieChart ==========//

// data of pieChart
const datapie = {
    labels: ['Gauche', 'Centre', 'Droite'],
        datasets: [{
            label: 'inclinaison politique',
            data: [5, 4, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
};

// config pieChart
const configpie = {
    type: 'pie',
    data: datapie, 
    options: {}
};

// render pieChart

const pieChart= new Chart(
    document.getElementById('pieChart'),
    configpie
);

//========== mixedChart ==========//

// data mixedChart
const mixedChart = new Chart(ctx, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40]
        }, {
            type: 'line',
            label: 'Line Dataset',
            data: [50, 50, 50, 50],
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: options
});


//config mixedChart
const configMixed = {
    type: 'scatter',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

// render mixedChart






    

