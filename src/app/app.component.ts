import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  /*name = 'Kevin Jonathan';
  itembuah = [{
    nama : 'Kelengkeng',
    harga : 10000
  }, {
    nama : 'Jeruk',
    harga : 5000
  }];
  itemArr = ['aa', 'bb', 'cc', 'dd']; 

  show: boolean = true;
  user = "";

  pesan = ''
  klikButton() {
    this.pesan = "Tombol ditekan";
  }*/
  showOddNumber = 0;
  output = [];
  temp = "";
  a = 0; b = 0; total = 0; count = 0;
  countInput() {
    this.total = 1;
    for(var i = 0; i < this.b; i++){
      this.total *= this.a;
    }

    if((this.total % 2) == 0) {
      for(var j = this.b; j <= this.total; j++){
        this.temp = "";
        for(var k = 0; k < j; k++){
          this.temp += "*"
        }
        this.output.push(this.temp);
        this.count++;
      }
    }
    else if((this.total % 2) != 0) {
      for(var j = 0; j < this.b; j++) {
        this.temp = "";
        for(var k = this.b - j; k >= 1; k--){
          this.temp += "*"
        }
        if(j < this.a){
          for(var l = 0; l < j+1; l++){
            this.temp += "o"
          }
        }
        this.output.push(this.temp);
        this.count++;
      }
    }
  }
  clearInput() {
    for(var i = 0; i < this.count; i++) {
      this.output.pop();
    }
    this.count = 0;
    this.total = 0;
  }
}
