import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  science: any= [];

  constructor(private service: NewsService) { }

  ngOnInit(): void {

    this.service.getScience().subscribe((result)=> {


      console.log(result);
       this.science= result.results;
    })
  }

}
