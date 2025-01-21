import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full h-[600px]', cssClass]">
    {{ name }}
  </section>
  <span></span>
  `,

})
export class HeavyLoadersFastComponent {

  @Input({ required: true}) cssClass!: string;

  @Input({ required: true}) name!: string;
}
