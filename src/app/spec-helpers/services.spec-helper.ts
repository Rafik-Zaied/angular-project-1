import {
  companyInterface,
  fetchJobsInterface,
  jobsInterface,
} from '../Interfaces';

export const jobTest: jobsInterface = {
  categories: [{}],
  company: { id: 1, name: '', short_name: '' },
  contents: 'description',
  id: 0,
  levels: [{ name: 'level', short_name: '' }],
  locations: [{ name: 'location' }],
  model_type: '',
  name: 'jobName',
  publication_date: 'Date',
  refs: { landing_page: 'url' },
  short_name: '',
  tags: [],
  type: '',
};
export const jobTest2: jobsInterface = {
  categories: [{}],
  company: { id: 1, name: '', short_name: '' },
  contents: '',
  id: 0,
  levels: [{ name: '', short_name: '' }],
  locations: [{ name: '' }],
  model_type: '',
  name: '',
  publication_date: '',
  refs: { landing_page: '' },
  short_name: '',
  tags: [],
  type: '',
};

export const companyDataTest: companyInterface = {
  description: '',
  id: 0,
  industries: [{ name: '' }],
  locations: [{ name: '' }],
  model_type: '',
  name: '',
  publication_date: '',
  refs: { landing_page: '' },
  short_name: '',
  size: {},
};

export const fetchJobTest = [jobTest, jobTest2];
