import { Component, OnInit ,NgZone} from '@angular/core';

//import
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.scss']
})
export class EmpDetailComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetEmp(this.getId).subscribe(res => {
      this.updateForm.setValue({
        Emp_name: res['Emp_name'],
        Address: res['Address'],
        Salary: res['Salary'],
        Designation: res['Designation'],
        Email: res['Email'],
        Phone_No: res['Phone_No']
      });
    });
    this.updateForm = this.formBuilder.group({
      Emp_name: [''],
      Address: [''],
      Salary: [''],
      Designation: [''],
      Email: [''],
      Phone_No: ['']
    })
  }
  ngOnInit() { }
  onUpdate(): any {
    this.crudService.updateEmp(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
    });
  }
}