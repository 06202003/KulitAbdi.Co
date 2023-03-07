var nav = document.querySelector('nav');
var logo = document.getElementById('logo');
var teksnav = document.getElementById('tekshaha');
var teksnav1 = document.getElementById('tekshaha1');
var teksnav2 = document.getElementById('tekshaha2');
var teksnav3 = document.getElementById('tekshaha3');
var teksnav4 = document.getElementById('tekshaha4');
var teksnav10 = document.getElementById('tekshaha10');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 10) {
    nav.classList.add('bgnav', 'shadow');
    teksnav.style.color = 'white';
    teksnav1.style.color = 'white';
    teksnav2.style.color = 'white';
    teksnav3.style.color = 'white';
    teksnav4.style.color = 'white';
    teksnav10.style.color = 'white';
  } else {
    nav.classList.remove('bgnav', 'shadow');
    teksnav.style.color = 'black';
    teksnav1.style.color = 'black';
    teksnav2.style.color = 'black';
    teksnav3.style.color = 'black';
    teksnav4.style.color = 'black';
    teksnav10.style.color = 'black';
  }
});
const wave1 =
    'M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z',
  wave2 =
    'M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z',
  wave3 =
    'M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z',
  wave4 =
    'M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z';

anime({
  targets: '.wave-top > path',
  easing: 'linear',
  duration: 17500,
  loop: true,
  d: [{ value: [wave1, wave2] }, { value: wave3 }, { value: wave4 }, { value: wave1 }],
});
// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
//     datasets: [
//       {
//         label: ' Pengguna Produk Fashion Kulit (Juta Pengguna)',
//         data: [32, 27, 43, 65, 61, 74, 81, 79, 92, 103],
//         borderWidth: 3,
//         borderColor: 'black',
//         pointBorderWidth: 7,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

const data = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Sepatu Kulit',
      data: [56, 67, 69, 74, 79, 86, 94],
      backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
      borderWidth: 3,
    },
    {
      label: 'Jaket Kulit',
      data: [54, 59, 62, 66, 71, 84, 87],
      backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
      borderWidth: 3,
      type: 'bar',
    },
    {
      label: 'Tas Kulit',
      data: [53, 61, 73, 78, 80, 83, 91],
      backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
      borderWidth: 3,
      type: 'line',
    },
    {
      label: 'Celana Kulit',
      data: [32, 43, 55, 67, 74, 80, 83],
      backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
      borderWidth: 3,
      type: 'bar',
    },
    {
      label: 'Sabuk Kulit',
      data: [64, 71, 77, 79, 82, 86, 93],
      backgroundColor: ['rgba(255, 26, 104, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(0, 0, 0, 0.2)'],
      borderColor: ['rgba(255, 26, 104, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0, 1)'],
      borderWidth: 3,
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
            stepSize: 15,
            beginAtZero: true,
          },
        },
      ],
    },
  },
  type: 'line',
  data,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: 'white',
            fontSize: 12,
            stepSize: 15,
            beginAtZero: true,
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
