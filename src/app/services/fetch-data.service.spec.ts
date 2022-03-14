import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FetchDataService } from './fetch-data.service';
import { companyInterface, jobsInterface } from 'src/app/Interfaces';
import { fetchJobTest } from '../spec-helpers/services.spec-helper';
import { companyDataTest } from '../spec-helpers/services.spec-helper';

describe('FetchDataService', () => {
  let service: FetchDataService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchDataService],
    });
    service = TestBed.inject(FetchDataService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('fetches jobs', () => {
    let fetchedJobs: jobsInterface[] | undefined;
    service.fetchJobs().subscribe((res) => {
      fetchedJobs = res.results;
    });

    const request = controller.expectOne(
      'https://www.themuse.com/api/public/jobs?category=Software%20Engineer&location=Italy&page=1'
    );

    request.flush({ results: fetchJobTest });
    controller.verify();
    expect(fetchedJobs).toEqual(fetchJobTest);
  });

  it('fetches company data', () => {
    let companyId: number = 1;
    let companyData: companyInterface | undefined;
    service.fetchCompany(companyId).subscribe((res) => {
      companyData = res;
    });

    const request = controller.expectOne(
      `https://www.themuse.com/api/public/companies/${companyId}`
    );

    request.flush(companyDataTest);
    controller.verify();
    expect(companyData).toEqual(companyDataTest);
  });
});
