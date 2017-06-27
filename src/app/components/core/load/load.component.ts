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


  constructor() {  }


  fileUpload() {


    this.message = "File uploaded is :"+this.el.nativeElement.files[0].name;
    this.message2 = "File type :"+this.el.nativeElement.files[0].type;
    this.message3 = "File size :"+this.el.nativeElement.files[0].size;

    let fileInput = document.getElementById('fileInput');
    let fileDisplayArea = document.getElementById('fileDisplayArea');
    let file = this.el.nativeElement.files[0];
    let imageType = /image.*/;


    if (file.type.match(imageType)) {
          let reader = new FileReader();
      reader.onloadend = (e) => {
        fileDisplayArea.innerHTML = "";
        let img = new Image();
        img.src = reader.result;
        console.log(reader.result);
        fileDisplayArea.appendChild(img);
      }
       reader.readAsDataURL(file);
      }else {
         fileDisplayArea.innerHTML = "File not supported!"
       }

  }


}
