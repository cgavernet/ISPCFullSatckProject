// chart colors
var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];
/* Bar Chart */
var chBar = document.getElementById("chBar");
if (chBar) {
    var xValues = ["06/2022", "07/2022", "08/2022", "09/2022", "10/2022" ];
    var yValues = [440, 510, 480, 410, 450];
    new Chart(chBar, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
            label: 'Kw/h',
            backgroundColor: colors[1],
            data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: false,
          text: "Consumo Mensual Kw/h"
        },
        scales: {
            yAxes: [{ticks: {min: 400, max:520}}],
        }
      }
    });
}


/* line chart */
var chLine = document.getElementById("chLine");
if (chLine) {
    var xValues = ['10:50Hs','11:00Hs','11:10Hs','11:20Hs','11:30Hs','11:40Hs','11:50Hs','12:00Hs','12:10Hs','12:20Hs','12:30Hs','12:40Hs','12:50Hs','13:00Hs','13:10Hs','13:20Hs','13:30Hs','13:40Hs','13:50Hs','14:00Hs'];
    var yValues = [70,80,80,90,90,90,100,110,140,140,150,60,60,60,45,45,40,40,10,5]; 
    new Chart(chLine, {
        type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    label: 'Kw/h',
                    data: yValues,
                    backgroundColor: colors[3],
                    borderColor: colors[1],
                    borderWidth: 4,
                    pointBackgroundColor: colors[1]      
                }]
                },
                    options: {
                        legend: {display: false},
                        title: {
                            display: false,
                            text: "Consumo ultimas 24hs en Kw/h"
                        },
                        scales: {
                            yAxes: [{ticks: {min: 0, max:160}}],
                        }
                    }
    });
}



