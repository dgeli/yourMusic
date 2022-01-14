import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { threadId } from 'node:worker_threads';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {

  artistaRecibido: any = {};
  topTracks: any = {};

  loadingArtist: boolean;

  constructor(private activatedRouter: ActivatedRoute,
              private musicService: MusicService) { 

this.loadingArtist = true;

this.activatedRouter.params.subscribe( params => {
  this.getArtista(params['id']);
  this.getTopTracks(params['id']);
    });
  }

getArtista(id: string) {
  this.loadingArtist = true;
  this.musicService.getArtista(id)
  .subscribe(artista => {
    this.artistaRecibido = artista;
    this.loadingArtist = false;
  })
  }

  getTopTracks (id: string){
    this.musicService.getTopTracks(id)
    .subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    })
  }
}
