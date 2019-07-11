let ctx = document.getElementById('myChart').getContext('2d');

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], //timeRange label
        datasets: [{
            label: 'Average Price',
            data: [], //prices
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
            borderWidth: 1,
            pointBackgroundColor: ['rgba(0, 0, 0, 0.1)'],
            pointBorderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                id: 'left-y-axis',
                type: 'linear',
                position: 'left'
            }]
        },
    }
}
);

function plotChart(dataSets, dataSetsLabel) {
    myChart.data.labels = dataSetsLabel;
    myChart.data.datasets[0].data = dataSets;
    myChart.update();
};