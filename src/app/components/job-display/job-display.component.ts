import { Component, OnInit, Input } from '@angular/core';
import { jobsInterface } from 'src/app/Interfaces';
import { JobService } from 'src/app/services/job.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-job-display',
  templateUrl: './job-display.component.html',
  styleUrls: ['./job-display.component.css'],
})
export class JobDisplayComponent implements OnInit {
  @Input() job!: jobsInterface;

  constructor(
    public jobService: JobService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {}

  handleClick() {
    this.jobService.setData(this.job);
  }
  middleClick() {
    this.localStorage.set('job', this.job);
  }
}
