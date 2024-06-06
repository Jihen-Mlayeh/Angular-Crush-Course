import { Component, inject } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl:'./my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {
  name:string='';
  email: string='';
  message: string='';
  isSubmitted=false;
  messages:Array<any>=[];
 // private service:MyFirstService=inject(MyFirstService);



  constructor(private service:MyFirstService){
    this.messages=this.service.getAllMessages();
    this.isSubmitted=this.messages.length>0;


  }

  onSubmit():void {
    if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
      alert('All fields are required!');
      return;
    }
    this.isSubmitted=true;
    this.service.insert
    ({
      'name':this.name,
      'email':this.email,
      'message':this.message

  });
  console.log(this.messages);
   // Reset the form fields
   this.name = '';
   this.email = '';
   this.message = '';
  }
   deleteMessage(index:number):void{
    this.service.deleteMessage(index);

   }
}


