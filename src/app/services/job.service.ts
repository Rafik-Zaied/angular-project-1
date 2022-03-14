import { Injectable } from '@angular/core';
import { jobsInterface } from '../Interfaces';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  job!: jobsInterface;

  constructor() {}

  setData(job: jobsInterface) {
    this.job = job;
  }

  getData(): jobsInterface {
    return this.job;
  }
}
