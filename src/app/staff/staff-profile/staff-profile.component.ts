import { Component } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-staff-profile',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './staff-profile.component.html',
  styleUrl: './staff-profile.component.css'
})
export class StaffProfileComponent {
  employeeId: number | any = null;
  employeeData: any = {}; // Will store employee details from backend

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');

    if (this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
        this.employeeData = data;
        console.log('Employee loaded:', this.employeeData);
      });
    }
  }

  // When Save button clicked
  saveEmployee() {
    if (this.employeeId) {
      this.employeeService.updateEmployee(this.employeeId, this.employeeData).subscribe(response => {
        console.log('Employee updated successfully!', response);
        alert('Employee saved successfully!');
      }, error => {
        console.error('Error updating employee', error);
        alert('Failed to save employee.');
      });
    } else {
      this.employeeService.addEmployee(this.employeeData).subscribe(response => {
        console.log('Employee created successfully!', response);
        alert('Employee created successfully!');
      }, error => {
        console.error('Error creating employee', error);
        alert('Failed to create employee.');
      });
    }
  }

  refreshForm() {
    window.location.reload(); // simply reloads the page
  }



  
}
