import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent {
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    const footer = document.querySelector('footer');
    this.renderer.removeClass(footer, 'fixed');
    this.renderer.removeClass(footer, 'fixed-bottom');
  }
}
