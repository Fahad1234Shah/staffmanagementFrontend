import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-staff-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css'
})
export class StaffListComponent {

  employees:any[] = [];

  constructor(
    private employeeService:EmployeeService,
    private departmentService:DepartmentService,

  ){}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }


}



//staffprofile

// this.employeeId = this.route.snapshot.paramMap.get('id');

// if (this.employeeId) {
//   // Fetch employee details from backend
//   this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
//     this.employeeData = data;
//     console.log('Employee loaded:', this.employeeData);
//   });
// }
// }