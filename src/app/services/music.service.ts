import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private HttpClient: HttpClient) { }

  getQuery (query: string) {
    const url =`https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQA3wPH_z9T8LHnz7kZX9cYK4gXwZCAY27__rD-p8jDOtkueDbvS_a5Ujgg9r-sl0EG2zjEsu2eWhvpmEwI',
    });

    return this.HttpClient.get(url, {headers});
  }

 
  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
            .pipe( map( data => {
      return data['albums'].items;
      }));
  }



  getArtistas(termino: string){
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map (data => {
        return data['artists'].items;
      }));
  }


  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
}


  getTopTracks(id: string){
  return this.getQuery(`artists/${id}/top-tracks?country=us`)
  .pipe(map (data => data['tracks']));
}

}
