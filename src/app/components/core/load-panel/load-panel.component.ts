import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormArrayName, FormControl, FormGroup, Validators} from "@angular/forms";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-load-panel',
  templateUrl: './load-panel.component.html',
  styleUrls: ['./load-panel.component.css']
})
export class LoadPanelComponent implements OnInit {
 imgsrc: any[] = [];
     myForm : FormGroup;
     prog: any[] = [];


  constructor() {  }
    ngOnInit() {
    this.myForm = new FormGroup({
      image : new FormArray([
        //this.initDescription()
      ])
    })
    }
  name:string;
   obj: any[] = [];
  fileUpload(i:number) {
      this.prog[i] = '';
    // let valueInput = (<HTMLInputElement>document.getElementById('fileInput'+i)).value;
    // console.log(valueInput)
    let fileDisplayArea = document.getElementById('fileDisplayArea'+i);
     let file = (<HTMLInputElement>document.getElementById('fileInput'+i)).files[0];
     let imageType = /image.*/;
    if (file.type.match(imageType)) {
       let reader = new FileReader();
      reader.onloadend = (e) => {
        fileDisplayArea.innerHTML = "";
        let img = new Image();
        img.src = reader.result;
        img.style.maxHeight = '135px';

        this.imgsrc[i] = reader.result;
       fileDisplayArea.appendChild(img);
      }
      reader.onprogress = (event)=>{
          this.prog[i] = Math.floor(event.loaded / event.total * 100)

          console.log(this.prog[i]);
      }
      reader.readAsDataURL(file);
    }else {
      fileDisplayArea.innerHTML = "File not supported!"
    }

  }

  initDescription(){
    return new FormGroup({
      img: new FormControl(''),
      description: new FormControl('', [Validators.required]),
    })
  }
  AddDesc(){
    (<FormArray>this.myForm.controls['image']).push(this.initDescription());
  }
  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['image'];
    control.removeAt(i);
    this.obj.splice(i,1);
  }
Update(f: FormGroup){

    for(let i=0; i< f.value.image.length; i++){
      this.obj[i] = new Object({
        src: this.imgsrc[i],
        desc: f.value.image[i].description
      });
     }
   console.log(this.obj);
}
log(i: number){
   (<HTMLInputElement>document.getElementById('fileInput'+i)).click();

}
}
