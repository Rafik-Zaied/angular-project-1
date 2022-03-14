import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { jobsInterface } from 'src/app/Interfaces';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //value is set by the select element
  level: string = '';
  loading?: boolean;
  //holds jobs the array of jobs to dispay
  jobs: jobsInterface[] = [];
  selectField: FormControl = new FormControl('');
  networkError: boolean = false;

  constructor(private fetchData: FetchDataService) {}

  //while loading the data sets loading to true, used to render a different text while loading the data.
  //if the request is failed changes networkError to true
  ngOnInit(): void {
    this.loading = true;
    this.fetchData.fetchJobs().subscribe(
      (res) => {
        this.jobs = res.results;
        this.loading = false;
      },
      (error) => {
        this.networkError = true;
      }
    );
  }

  //on submit fetches jobs by level, the level it's set using the select element.
  onSubmit() {
    this.loading = true;
    this.fetchData.fetchJobsByLevel(this.level).subscribe((res) => {
      this.loading = false;
      this.jobs = res.results;
    });
  }

  selectChange() {
    if (this.selectField.value == '1') {
      this.level = 'Entry Level';
    } else if (this.selectField.value == '2') {
      this.level = 'Mid Level';
    } else if (this.selectField.value == '3') {
      this.level = 'Senior Level';
    } else if (this.selectField.value == '4') {
      this.level = 'management';
    } else if (this.selectField.value == '5') {
      this.level = 'Intership';
    } else {
      this.level = 'none';
    }
  }
}
