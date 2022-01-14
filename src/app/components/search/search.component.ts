import { Component, OnInit } from '@angular/core';

import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  artistas: any[] = [];
  loading: boolean;

  constructor(private musicService: MusicService) {
   }

  buscar(termino: string){
    this.loading = true;
    this.musicService.getArtistas(termino)
      .subscribe ( (data: any) =>
         {
            this.artistas = data;
            this.loading = false;
      });
  }
}
