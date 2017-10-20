import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mode:boolean=true;
  openFAB:boolean=false;
  constructor(){
    
  }
  ngOnInit(){

  }
  toggle(){
    this.mode=(this.mode)?false:true;
  }

  showFAB(){
    this.openFAB=(this.openFAB)?false:true;
    if(this.openFAB)
      $('.fixed-action-btn').openFAB();
    else  
      $('.fixed-action-btn').closeFAB();
  }
  openModal(){
    $('#modal1').modal('open');
  }
  pre(){
    $('.carousel').carousel('prev');
  }
  next(){
    $('.carousel').carousel('next');
  }
  fullPre(){
    $('.carousel-slider').carousel('prev');
  }
  fullNext(){
    $('.carousel-slider').carousel('prev');
  }
}
