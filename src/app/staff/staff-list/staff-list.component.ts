import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css'
})
export class StaffListComponent {

  employees:any[] = [];

  constructor(
    private employeeService:EmployeeService
  ){}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }


}
