// Colores para los Gráficos
var colores = ['#28a745','#c3e6cb'];
// variable para rango del gráficode Líneas*/
var selectorDatos = 24;

// Creo el gráfico de líneas de 24hs al iniciar la página*/
window.onload = GraficoLineas(selectorDatos);

/* Gráfico de Barras */
var chBar = document.getElementById("chBar").getContext('2d');
if (chBar) {
    var xValues = ["06/2022", "07/2022", "08/2022", "09/2022", "10/2022" ];
    var yValues = [440, 510, 480, 410, 450];
    new Chart(chBar, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
            label: 'Kw/h',
            backgroundColor: colores[0],
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


/* Grafico de Líneas */
function GraficoLineas(selector){
    var chLine = document.getElementById("chLine").getContext('2d');
    if (chLine) {
        if (selector == 12){
            var xValues = ['03:00Hs','04:00Hs','05:00Hs','06:00Hs','07:00Hs','08:00Hs','09:00Hs','10:0Hs','11:00Hs','12:00Hs','13:00Hs','14:00Hs'];
            var yValues = [60,45,45,40,40,10,5,7,7,8,9,8]; 
        } else if(selector == 1){
            var xValues = ['13:00Hs','13:05Hs','13:10Hs','13:15Hs','13:20Hs','13:25Hs','13:30Hs','13:35Hs','13:40Hs','13:45Hs','13:50Hs','13:55Hs','14:00Hs'];
            var yValues = [4, 9,9,7,5,4,4,5,7,7,8,9,8]; 
        } else if(selector == 24){
            var xValues = ['15:00Hs','16:00Hs','17:00Hs','18:00Hs','19:00Hs','20:00Hs','21:0Hs','22:00Hs','23:00Hs','00:00Hs','01:00Hs','02:00Hs','03:00Hs','04:00Hs','05:00Hs','06:00Hs','07:00Hs','08:00Hs','09:00Hs','10:0Hs','11:00Hs','12:00Hs','13:00Hs','14:00Hs'];
            var yValues = [80,80,90,90,90,100,110,140,140,150,60,60,60,45,45,40,40,10,5,7,7,8,9,8]; 
        }
        /* Verifico si el gráfico existe */
        if (window.grafico) {
            /* Si existe lo limpio y lo quito*/
            window.grafico.clear();
            window.grafico.destroy();
        }
        /* Creo el grafico */
        window.grafico = new Chart(chLine, {
            type: "line",
                data: {
                    labels: xValues,
                    datasets: [{
                        label: 'Kw/h',
                        data: yValues,
                        backgroundColor: colores[1],
                        borderColor: colores[0],
                        borderWidth: 4,
                        pointBackgroundColor: colores[0]      
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
}

/* Función para cambiar el título del gráfico*/
function chLineChangeTitle(value){
   if (value == 1) {
    var title = "Consumo ultima Hora en Kw/h";
    GraficoLineas(1);
   }else if(value == 12){
    var title = "Consumo ultimas 12hs en Kw/h";
    GraficoLineas(12);
   }else if(value == 24){
    var title = "Consumo ultimas 24hs en Kw/h";
    GraficoLineas(24);
   }
    document.getElementById("chLineTitle").innerHTML = title;
}

