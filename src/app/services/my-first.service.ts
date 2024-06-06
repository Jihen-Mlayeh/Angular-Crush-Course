import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  constructor() {
      this.init();


   }
  init():void{
    this.insert({
      name:'jihen',
      email:'jihen@gmail.com',
      message:'none'

    })
    this.insert({
      name:'arij',
      email:'arij@gmail.com',
      message:'none'

    })
    this.insert({
      name:'joe',
      email:'joe@gmail.com',
      message:'none'

    })
  }
  


  messages: Array<any>=[];
  insert(message:{name:string,email:string,message:string}):void{
    this.messages.push(message);
  }
  getAllMessages(){
    return this.messages;
  }
  deleteMessage(index:number){
    this.messages.splice(index,1);
    
  }
}
