import { Component } from '@angular/core';
import { ValueService } from 'src/app/demo/demo';
import { HeroiServico } from './hero/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ValueService, HeroiServico]
})
export class AppComponent {
  title = 'jasmine';
  constructor(
    private valuesService: ValueService,
    private heroiServico: HeroiServico) {
    this.valuesService.setValue('Olá mundo');
    this.title = this.valuesService.getValue();
    this.heroiServico.getHeroes().subscribe(res => console.log(res));
  }
}
