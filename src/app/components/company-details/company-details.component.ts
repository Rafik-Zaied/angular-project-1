import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { companyInterface } from 'src/app/Interfaces';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  companyId!: number;
  companyData!: companyInterface;
  loading?: boolean;
  networkError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fetchData: FetchDataService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.fetchData.fetchCompany(this.companyId).subscribe(
      (res) => {
        this.companyData = res;
        this.loading = false;
      },
      (error) => (this.networkError = true)
    );
  }
}
