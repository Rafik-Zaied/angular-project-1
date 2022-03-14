import { TestBed } from '@angular/core/testing';
import { jobsInterface } from '../Interfaces';
import { JobService } from './job.service';
import { jobTest } from '../spec-helpers/services.spec-helper';

describe('JobService', () => {
  let service: JobService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobService);
  });

  it('should save the value got with setData() and return it with getData()', () => {
    const job: jobsInterface = jobTest;
    service.setData(job);

    let currentJob: jobsInterface | undefined;
    currentJob = service.getData();
    expect(job).toBe(currentJob);
  });
});
