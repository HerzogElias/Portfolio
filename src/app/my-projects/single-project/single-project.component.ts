import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projekt } from '../../interfaces/projects.interface';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-single-project',
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
@Input() project!:Projekt;
}
