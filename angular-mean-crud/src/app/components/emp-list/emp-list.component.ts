import { Component, OnInit } from '@angular/core';

//import
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  Emp:any = [];
  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    this.crudService.GetEmps().subscribe(res => {
      console.log(res)
      this.Emp =res;
    });    
  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteEmp(id).subscribe((res) => {
        this.Emp.splice(i, 1);
      })
    }
  }
}