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

// const ctx = document.getElementById('myChart');

//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });


// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

// const labels = [];

// for (let i = 0; i < DATA_COUNT; ++i) {
//   labels.push(Utils.newDate(i));
// }

// const data = {
//   labels: labels,
//   datasets: [{
//     type: 'bar',
//     label: 'Dataset 1',
//     backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//     borderColor: Utils.CHART_COLORS.red,
//     data: Utils.numbers(NUMBER_CFG),
//   }, {
//     type: 'bar',
//     label: 'Dataset 2',
//     backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//     borderColor: Utils.CHART_COLORS.blue,
//     data: Utils.numbers(NUMBER_CFG),
//   }, {
//     type: 'line',
//     label: 'Dataset 3',
//     backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
//     borderColor: Utils.CHART_COLORS.green,
//     fill: false,
//     data: Utils.numbers(NUMBER_CFG),
//   }]
// };

const ctx = document.getElementById('myChart');

// const config = {
//   type: 'line',
//   data: data,
//   options: {
//     plugins: {
//       title: {
//         text: 'Chart.js Combo Time Scale',
//         display: true
//       }
//     },
//     scales: {
//       x: {
//         type: 'time',
//         display: true,
//         offset: true,
//         time: {
//           unit: 'day'
//         }
//       },
//     },
//   },
// };

// const actions = [
//   {
//     name: 'Randomize',
//     handler(chart) {
//       chart.data.datasets.forEach(dataset => {
//         dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
//       });
//       chart.update();
//     }
//   },
// ];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });