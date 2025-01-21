import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";


type Grade = 'A'|'B'|'C';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
[x: string]: any;

  public showContent = signal(false);
  public myGrade = signal<Grade>('B');
  public framewoks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public framewoks2 = signal([]);


  public toggleContent() {
    this.showContent.update( value => !value );
  }

}
