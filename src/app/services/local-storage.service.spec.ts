import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { jobTest } from '../spec-helpers/services.spec-helper';
import { jobsInterface } from '../Interfaces';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should save an object in local storage, and retrivie it when need it', () => {
    const jobToStore: jobsInterface = jobTest;
    service.set('job', jobToStore);
    let retrievedJob: jobsInterface;
    retrievedJob = service.get('job');
    expect(jobToStore).toEqual(retrievedJob);
  });
});
