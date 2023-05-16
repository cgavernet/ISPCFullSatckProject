import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  title = 'ISPCFullSatackProject';
  //Datos para generar el grafico de líneas
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '12:00hs',
      '13:00hs',
      '14:00hs',
      '15:00hs',
      '16:00hs',
      '17:00hs',
      '18:00hs'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'KW/h',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
//Datos para generar el grafico de Barras
public barChartData: ChartConfiguration<'bar'>['data'] = {
  labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio' ],
  datasets: [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'KW/h', backgroundColor: 'rgba(255,0,0,0.3)'}
  ]
};
public barChartOptions: ChartOptions<'bar'> = {
  responsive: true
};
public barChartType: ChartType = 'bar';

  constructor() {
  }

  ngOnInit() {
  }
}
