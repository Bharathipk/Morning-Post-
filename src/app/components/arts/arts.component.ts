import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  arts:any =[];

  constructor(private service: NewsService) { }

  ngOnInit(): void {

    this.service.getArts().subscribe((result)=> {


      console.log(result);
       this.arts= result.results;
    })
  }

}
