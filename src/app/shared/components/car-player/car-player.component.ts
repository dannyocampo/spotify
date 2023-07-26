import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-car-player',
  templateUrl: './car-player.component.html',
  styleUrls: ['./car-player.component.css']
})
export class CarPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = { _id:0, name:'', album:'', url:'', cover:''};
}
