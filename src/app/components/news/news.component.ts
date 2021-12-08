import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  archive:any =[];

  constructor(private service: NewsService) { }

  ngOnInit(): void {

    this.service.getArchives().subscribe((result)=> {


      console.log(result);
       this.archive= result?.response?.docs;
    })
  }

}
