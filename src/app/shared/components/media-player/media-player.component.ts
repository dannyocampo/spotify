import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover: 'https://i.ytimg.com/vi/yDPBOTJX6IE/maxresdefault.jpg',
    album: 'Gioli & Asia',
    name: 'Bebe (Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
}
