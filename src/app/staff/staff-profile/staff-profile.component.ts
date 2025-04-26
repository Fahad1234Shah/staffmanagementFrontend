import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-staff-profile',
  imports: [FormsModule,CommonModule],
  templateUrl: './staff-profile.component.html',
  styleUrl: './staff-profile.component.css'
})
export class StaffProfileComponent {

  employeeId: string | null = null;
  employeeData: any = {}; // This will store employee details from backend

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');

    if (this.employeeId) {
      // Fetch employee details from backend
      this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
        this.employeeData = data;
        console.log('Employee loaded:', this.employeeData);
      });
    }
  }

  
}
