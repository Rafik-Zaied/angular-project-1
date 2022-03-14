import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { JobDisplayComponent } from './job-display.component';
import { jobTest } from '../../spec-helpers/services.spec-helper';

describe('JobDisplayComponent', () => {
  let component: JobDisplayComponent;
  let fixture: ComponentFixture<JobDisplayComponent>;

  let jobName: DebugElement;
  let jobLocation: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDisplayComponent);
    component = fixture.componentInstance;

    jobName = fixture.debugElement.query(By.css('.job_title'));
    jobLocation = fixture.debugElement.query(By.css('.job_location'));
    component.job = jobTest;
    fixture.detectChanges();
  });

  it('should display the job name', () => {
    const expectedName = jobTest.name;
    expect(jobName.nativeElement.textContent).toContain(expectedName);
  });

  it('should display the job location', () => {
    const expectedLocation = jobTest.locations[0].name;
    expect(jobLocation.nativeElement.textContent).toContain(expectedLocation);
  });
});
