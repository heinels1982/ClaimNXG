import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ClaimService} from '../claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private claimService : ClaimService) { }

  claimForm: FormGroup;
  claim = {
    policyNumber: '',
    firstName: '',
    lastName: '',
    lossDetailDescription: '',
    dateOfLoss: '',
    claimStatus: ''
  }
 
  ngOnInit() {
    this.claimForm = new FormGroup({
      'policyNumber' : new FormControl(null, Validators.required),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required) ,
      'lossDetailDescription': new FormControl(null),
      'dateOfLoss': new FormControl(new Date, Validators.required),
      'claimStatus': new FormControl('reported')
    });
  }

  onSubmit() {
    this.claim.policyNumber = this.claimForm.value.policyNumber;
    this.claim.firstName = this.claimForm.value.firstName;
    this.claim.lastName = this.claimForm.value.lastName;
    this.claim.lossDetailDescription = this.claimForm.value.lossDetailDescription;
    this.claim.dateOfLoss = this.claimForm.value.dateOfLoss;

    console.log(this.claim);
    this.claimService.saveClaim(this.claim)
    .subscribe((response) => console.log(response),
      (error) => console.log(error)
  );
    
  }


}
