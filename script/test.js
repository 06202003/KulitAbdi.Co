const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Sepatu Kulit',
      data: [56, 67, 69, 74, 79, 86, 94],
      backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
      borderWidth: 1,
    },
    {
      label: 'Jaket Kulit',
      data: [54, 59, 62, 66, 71, 84, 87],
      backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
      type: 'bar',
    },
    {
      label: 'Tas Kulit',
      data: [53, 61, 73, 78, 80, 83, 91],
      backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
      type: 'line',
    },
    {
      label: 'Celana Kulit',
      data: [32, 43, 55, 67, 74, 80, 83],
      backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
      type: 'bar',
    },
    {
      label: 'Sabuk Kulit',
      data: [64, 71, 77, 79, 82, 86, 93],
      backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
      type: 'line',
    },
  ],
};

// config
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: 'white',
            fontSize: 12,
            stepSize: 30,
            beginAtZero: true,
            categoryPercentage: 1,
            barPercentage: 80,
            barThickness: 95,
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
          ticks: {
            fontColor: 'white',
            fontSize: 12,
            stepSize: 10,
            beginAtZero: true,
            categoryPercentage: 1,
            barPercentage: 1,
            suggestedMax: 100,
          },
        },
      ],
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById('myChart'), config);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;
