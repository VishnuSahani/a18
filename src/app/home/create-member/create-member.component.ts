import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrl: './create-member.component.scss'
})
export class CreateMemberComponent implements OnInit {

  membreFrom!:FormGroup;
  constructor(){}
  ngOnInit(): void {
    this.fomrInit();
  }

  formSubmit(){

  }

  fomrInit(){
    this.membreFrom = new FormGroup({
      memeberShipNo : new FormControl(0,Validators.required),
      memberName : new FormControl(null,Validators.required),
      gender : new FormControl(null,Validators.required),
      dob : new FormControl(null,Validators.required),
      aadharNo : new FormControl(null,Validators.required),
      panNo : new FormControl(null,Validators.required),
      address : new FormControl(null,Validators.required),
      cell : new FormControl(null,Validators.required),
      medicalHistory : new FormControl(null,Validators.required),
      profilePhoto : new FormControl(null,Validators.required),


      isNewMember : new FormControl(true,Validators.required),
      memberShipType : new FormControl(true,Validators.required),
      });
  }



}
