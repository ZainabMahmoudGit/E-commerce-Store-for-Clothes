
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //constructor(private http: HttpClient) { }
  
  constructor(private httpClient: HttpClient) {}
  getAllprodect(){
   return this.httpClient.get(`https://fakestoreapi.com/products`);
  }
  getSingleProduct(productid: any) {
    return this.httpClient.get('https://fakestoreapi.com/products/' + productid);
  }
 
  //https://fakestoreapi.com/products/1
 
    private items :any[]=JSON.parse(localStorage.getItem('cartitem')||'[]');
      Addtocart(prodect:any)
      {
    this.items.push({...prodect,quantity:1})
     localStorage.setItem('cartitem',JSON.stringify(this.items))
      }
      getitem(){
       return this.items;
      }
      delete(item:any)
      {
        this.items=this.items.filter((i)=>i.id !== item.id)
    
        localStorage.setItem('cartitem',JSON.stringify(this.items))
    
      }
     incrementQuantity(id :number){
      let item=this.items.find((i)=>i.id === id)
      if(item){
        item.quantity++;
      }
      localStorage.setItem('cartitem',JSON.stringify(this.items))
     
     }
     decrementQuantity(id :number){
      let item=this.items.find((i)=>i.id === id)
      if(item){
        item.quantity--;
      }
      localStorage.setItem('cartitem',JSON.stringify(this.items))
     
     }
     gettotal()
     {
     return this.items.reduce((acc,item)=>{
     return acc+item.price*item.quantity
     },0)
     }

////////////
     private count = new BehaviorSubject<number>(0);


  getcount()
  { 
    return this.count.asObservable();
   }
   
  Updatacount(newcount : number)
  { 
     this.count.next(newcount);
   }
    }
    

