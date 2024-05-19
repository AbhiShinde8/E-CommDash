import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  productForm!:FormGroup;

  ngOnInit()
  {
this.setForm()
  }

  constructor()
  {

  }

  setForm()
  {
    this.productForm = new FormGroup({
      productId : new FormControl(''),
      productName:new FormControl(''),
      productQnty:new FormControl(''),
      productRate:new FormControl(''),
    })
  }
  productList:any=[];
  submitForm()
  {
    // console.log(this.productForm.value)
    this.productList.push(this.productForm.value)
   console.log("Product List",this.productList) 

   this.closeModel('addModal');
   this.productForm.reset()

  }
  index:any;
   
  openModal(modalId:any,index:any)
  {
    if(modalId=='updateModal')
      {
        this.productForm = new FormGroup({
          productId : new FormControl(this.productList[index].productId),
          productName:new FormControl(this.productList[index].productName),
          productQnty:new FormControl(this.productList[index].productQnty),
          productRate:new FormControl(this.productList[index].productRate),
        })

      }
    console.log(index)
    this.index=index;
    const modalElement:any= document.getElementById(modalId);
    const model= new bootstrap.Modal(modalElement);
    model.show();
  }
  closeModel(modalId:any)
  {
    const modalElement:any=document.getElementById(modalId);
    const modal=bootstrap.Modal.getInstance(modalElement);
    if(modal)
      {
        modal.hide();

      }
  }

  delete()
  {
    console.log(this.index);
    this.productList.splice(this.index,1);
    this.closeModel('deleteModal');
  }

  update()
  {
    console.log(this.productForm.value);

    this.productList[this.index].productId=this.productForm.value.productId;
    this.productList[this.index].productName=this.productForm.value.productName;
    this.productList[this.index].productQnty=this.productForm.value.productQnty;
    this.productList[this.index].productRate=this.productForm.value.productRate;
    this.closeModel('updateModal');

  }

}
