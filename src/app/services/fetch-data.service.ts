import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fetchJobsInterface } from '../Interfaces';
import { companyInterface } from '../Interfaces';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  fetchJobs(): Observable<fetchJobsInterface> {
    return this.http.get<fetchJobsInterface>(
      'https://www.themuse.com/api/public/jobs?category=Software%20Engineer&location=Italy&page=1'
    );
  }

  fetchJobsByLevel(level: string) {
    let url = new URL(
      `https://www.themuse.com/api/public/jobs?category=Software%20Engineer&level=${level}&page=1&location=Italy`
    );
    console.log(url.href);
    return this.http.get<fetchJobsInterface>(url.href);
  }

  fetchCompany(companyId: number): Observable<companyInterface> {
    return this.http.get<companyInterface>(
      `https://www.themuse.com/api/public/companies/${companyId}`
    );
  }
}
