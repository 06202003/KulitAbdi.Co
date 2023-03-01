var nav = document.querySelector('nav');
var logo = document.getElementById('logo');
var teksnav = document.getElementById('tekshaha');
var teksnav1 = document.getElementById('tekshaha1');
var teksnav2 = document.getElementById('tekshaha2');
var teksnav3 = document.getElementById('tekshaha3');
var teksnav4 = document.getElementById('tekshaha4');
var teksnav10 = document.getElementById('tekshaha10');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
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

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: ' Pengguna Produk Fashion Kulit (Juta Pengguna)',
        data: [32, 27, 43, 65, 61, 74, 81, 79, 92, 103],
        borderWidth: 3,
        borderColor: 'black',
        pointBorderWidth: 7,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
