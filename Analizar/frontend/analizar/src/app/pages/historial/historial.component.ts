import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  title = 'ISPCFullSatackProject';
    
  constructor() {
  }

  //Datos para generar el grafico de Barras
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'KW/h', backgroundColor: 'rgba(255,0,0,0.3)'}
    ]
  };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';

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
  //@ViewChild(BaseChartDirective) chart?: BaseChartDirective;
    public lineChartLegend = true;
  

// Eventos
// Botones de Rango changRange(rango){}
public changeRange(rango:number): void {
  let xValues = ['',''];
  let yValues = [0,0];
  switch(rango) { 
    case 24: { 
      xValues = ['15:00Hs','16:00Hs','17:00Hs','18:00Hs','19:00Hs','20:00Hs','21:0Hs','22:00Hs','23:00Hs','00:00Hs','01:00Hs','02:00Hs','03:00Hs','04:00Hs','05:00Hs','06:00Hs','07:00Hs','08:00Hs','09:00Hs','10:0Hs','11:00Hs','12:00Hs','13:00Hs','14:00Hs'];
      yValues = [80,80,90,90,90,100,110,140,140,150,60,60,60,45,45,40,40,10,5,7,7,8,9,8]; 
       break; 
    } 
    case 12: { 
      xValues = ['03:00Hs','04:00Hs','05:00Hs','06:00Hs','07:00Hs','08:00Hs','09:00Hs','10:0Hs','11:00Hs','12:00Hs','13:00Hs','14:00Hs'];
      yValues = [60,45,45,40,40,10,5,7,7,8,9,8];
       break; 
    } 
    case 1:{
      xValues = ['13:00Hs','13:05Hs','13:10Hs','13:15Hs','13:20Hs','13:25Hs','13:30Hs','13:35Hs','13:40Hs','13:45Hs','13:50Hs','13:55Hs','14:00Hs'];
      yValues = [4,9,10,7,5,4,4,5,7,7,8,9,8]; 
      break;
    }
  } 

  let data = {
    labels: xValues,
    datasets: [
      {
        data: yValues,
        label: 'KW/h',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  }
  this.lineChartData = data;
}
  

  ngOnInit(): void {
    
  }
}
