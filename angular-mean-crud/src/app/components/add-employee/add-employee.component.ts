import { Component, OnInit , NgZone } from '@angular/core';
//import 
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  EmpForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.EmpForm = this.formBuilder.group({
      
Emp_name: [''],
      Address: [''],
      Salary: [''],
      Designation: [''],
      Email: [''],
      Phone_No: ['']
      
    })
  }
  ngOnInit() { }
  onSubmit(): any {
    this.crudService.AddEmp(this.EmpForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/emp-list'))
      }, (err) => {
        console.log(err);
    });
  }
}