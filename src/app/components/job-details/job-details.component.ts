import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { jobsInterface } from 'src/app/Interfaces';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class JobDetailsComponent implements OnInit {
  loading?: boolean;
  jobToDisplay?: jobsInterface;
  storedData?: jobsInterface;

  constructor(
    private jobService: JobService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.jobToDisplay = this.jobService.getData();

    if (this.jobToDisplay) {
      this.localStorage.set('job', this.jobToDisplay);
    }
    if (!this.jobToDisplay) {
      this.storedData = this.localStorage.get('job');
      this.jobToDisplay = this.storedData;
    }
  }
}
