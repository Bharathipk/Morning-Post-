import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  home:any=[];

  constructor(private service:NewsService) { }

  ngOnInit(): void {



    this.service.getHome().subscribe((result)=> {


      console.log(result);
       this.home= result.results;
    })



  }



}
