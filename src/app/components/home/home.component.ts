import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private  http: HttpClient,
              private musicService: MusicService) {

      this.loading = true;
      this.error = false;

      this.musicService.getNewReleases()
      .subscribe ( (data: any) => {
       this.nuevasCanciones = data;
       this.loading = false;
      }, (errorServicio) => {
        console.log(errorServicio.error.error.message);
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      });
   }

}
