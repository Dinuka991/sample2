import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  myprofileForm: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.myprofileForm = fb.group({

      userName: [''],
      nic: [''],
      mobileNo: ['']

    })

  }

  ngOnInit(): void {
  }

}
