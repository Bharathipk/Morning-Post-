import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  newsApiUrl="//cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/2021/1.json?api-key=GWuAV0ebvNuS73hjAx7o0zcoY40D1BDA";

getArchives(): Observable<any>{
  return this.http.get<any>(this.newsApiUrl);
}

homeUrl="//cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GWuAV0ebvNuS73hjAx7o0zcoY40D1BDA";


getHome(): Observable<any>{
  return this.http.get<any>(this.homeUrl);
}

artsUrl="//cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=GWuAV0ebvNuS73hjAx7o0zcoY40D1BDA"
getArts(): Observable<any>{
  return this.http.get<any>(this.artsUrl);
}


scienceUrl="//cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/topstories/v2/science.json?api-key=GWuAV0ebvNuS73hjAx7o0zcoY40D1BDA"
getScience(): Observable<any>{
  return this.http.get<any>(this.scienceUrl);
}


usUrl="//cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/topstories/v2/us.json?api-key=GWuAV0ebvNuS73hjAx7o0zcoY40D1BDA"
getUs(): Observable<any>{
  return this.http.get<any>(this.usUrl);
}

worldUrl="//cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GWuAV0ebvNuS73hjAx7o0zcoY40D1BDA"
getWorld(): Observable<any>{
  return this.http.get<any>(this.worldUrl);
}

}
