
//========== pieChart ==========//

// data of pieChart
const datapie = {
    labels: ['Pain au chocolat', 'Chocolatine', 'Ne se prononce pas car peur du conflit'],
        datasets: [{
            label: 'inclinaison politique',
            data: [4, 4, 4],
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







    

