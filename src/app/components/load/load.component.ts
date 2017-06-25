import {Component, ElementRef, Input, OnInit, VERSION, ViewChild} from '@angular/core';



@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  ngOnInit(): void {

  }
  message: string;
  message2: string;
  message3: string;
  name:string;
  @ViewChild('fileInput') el:ElementRef;


  constructor() {

    this.name = `Angular v${VERSION.full} : File Upload`
  }


  fileUpload() {
    console.log(this.el);
    this.message = "File uploaded is :"+this.el.nativeElement.files[0].name;
    this.message2 = "File type :"+this.el.nativeElement.files[0].type;
    this.message3 = "File size :"+this.el.nativeElement.files[0].size;

  }


}
