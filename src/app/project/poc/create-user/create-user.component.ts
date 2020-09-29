import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  empFistName: string;
  empLastName: string;
  empNic: string;
  empAddress: any;
  empGender: string;
  employeeGenderList: string[] = ['Male' , 'Female' , 'Other'];
  empDepartment: string[];
  empDepartmentList: string[] = [ 'IT' , 'Marketing' , 'Account' , 'Sales' ];
  empType: string;
  empTypeList: string[] = ['Permanent', 'Temperary'];
  empMobileNo: number;
  empEmailAddress: string;
  profileForm: FormGroup;
  createUser: any;
  


  constructor(private fb: FormBuilder) {
    this.profileForm =fb.group({
      empFistName: [''],
      empLastName: [''],
      empNic: [''],
      empAddress: [''],
      empGender: [''],
      empDepartment: [''],
      empType:[''],
      empMobileNo: [''],
      empEmailAddress: ['']
    });
   }

  ngOnInit(): void {
  }

  userSignUp(): void {

    var obj = {
        
      empFistName: this.profileForm.value.empFistName,
      empLastName:  this.profileForm.value.empFistName,
      empNic:  this.profileForm.value.empFistName,
      empAddress:  this.profileForm.value.empFistName,
      empGender:  this.profileForm.value.empFistName,
      empDepartment:  this.profileForm.value.empFistName,
      empType:  this.profileForm.value.empFistName,
      empMobileNo:  this.profileForm.value.empFistName,
      empEmailAddress:  this.profileForm.value.empFistName
      
    }

    console.log(obj)
   
    

  }
 

}
