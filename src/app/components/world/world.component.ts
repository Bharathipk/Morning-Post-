import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  world: any = [];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.service.getWorld().subscribe((result)=> {


      console.log(result);
       this.world= result.results;
    })

  }

}
