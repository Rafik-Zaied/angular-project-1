export interface fetchJobsInterface {
  aggregations: object;
  items_per_page: number;
  page: number;
  page_count: number;
  results: jobsInterface[];
  timed_out: boolean;
  took: number;
  total: object;
}

export interface companyInterface {
  description: string;
  id: number;
  industries: industries[];
  locations: location[];
  model_type: string;
  name: string;
  publication_date: string;
  refs: refs;
  short_name: string;
  size: object;
}

interface industries {
  name: string;
}

export interface jobsInterface {
  categories: object[];
  company: company;
  contents: string;
  id: number;
  levels: levels[];
  locations: location[];
  model_type: string;
  name: string;
  publication_date: string;
  refs: refs;
  short_name: string;
  tags: [];
  type: string;
}

interface location {
  name: string;
}

interface company {
  id: number;
  name: string;
  short_name: string;
}

interface levels {
  name: string;
  short_name: string;
}

interface refs {
  landing_page: string;
}
