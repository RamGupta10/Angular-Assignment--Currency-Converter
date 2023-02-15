import { I18NHtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
import { application } from 'express';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency_converter';
  currjson: any=[];
  base="USD";
  cont2="USD";
  result:number =1
  
  changebase(a: string){
    this.base=a;
    console.log(this.base);
  }
  changebase2(b: string){
    this.cont2=b;
    console.log(this.cont2);
  }
  constructor(private currency:CurrencyapidataService)
  {

  }
  convert(){
    console.log(this.base);
    console.log(this.cont2);

    this.currency.getcurrencydata(this.base).subscribe(data=>{
      this.currjson = JSON.stringify(data);
      this.currjson=JSON.parse(this.currjson);
      console.log(this.currjson);
      if(this.cont2=="USD"){
        this.result=this.currjson.rates.USD;
      }
      if(this.cont2=="INR"){
        this.result= this.currjson.rates.INR;
      }
      if(this.cont2=="EUR"){
        this.result=this.currjson.rates.EUR;
      }
      var inputValue = (<HTMLInputElement>document.getElementById("p1")).value;
      this.result=this.result*Number(inputValue);
      
      
    })
  }
}
