import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rezession } from '../../interfaces/rezession.interface';

@Component({
  selector: 'app-rezission',
  imports: [CommonModule],
  templateUrl: './rezission.component.html',
  styleUrl: './rezission.component.scss'
})
export class RezissionComponent {
  @Input() rezessionen!: Rezession[];
}
