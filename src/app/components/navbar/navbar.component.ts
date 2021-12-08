import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
day =new Date();

iconClicked(eve: any) {
 //console.log(eve);
 var main_target = eve.srcElement.parentElement.id;
 var target = eve.srcElement.parentElement.parentElement;
// console.log(target);
 var tg = target.children;
 for(var i=0 ; i < tg.length ; i++){
   //console.log(tg[i].id);
   if (tg[i].id == main_target)
   {
     var clList = tg[i].classList.value;
     if (clList.includes('text-warning'))
      {}else{tg[i].classList.add('text-warning');}
   }
   else
   {
    var clList = tg[i].classList.value;
    if (clList.includes('text-warning'))
     {tg[i].classList.remove('text-warning');}
   }
}
}

}
