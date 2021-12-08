import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {

  us:any = [];

  constructor(private service: NewsService) { }

  ngOnInit(): void {

    this.service.getUs().subscribe((result)=> {


      console.log(result);
       this.us= result.results;
    })

  }

}
