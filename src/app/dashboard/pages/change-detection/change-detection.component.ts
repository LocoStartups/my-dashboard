import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramwork()"/>

    <pre> {{ frameworksAsSignal() | json }} </pre>

    <pre> {{ frameworksAsProperty | json }} </pre>

  `
})
export default class ChangeDetectionComponent {

  public currentFramwork = computed(
    () =>` ${ this.frameworksAsSignal().name }`
  );

  public frameworksAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworksAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {

    setTimeout(() => {

      // this.frameworksAsProperty.name = 'React';
      this.frameworksAsSignal.update( value => ({
        ...value,
        name: 'React'
      })
    );
      console.log("ok");

    }, 3000);

  }

}
