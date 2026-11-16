export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Cloud Tooling';
  tags: string[];
  highlights: string[];
  status: 'Live Web App';
  url: string;
  urlLabel: string;
  githubUrl: string;
  metrics?: ProjectMetric[];
}

export const PROJECTS: Project[] = [
  {
    id: 'botoview',
    title: 'BotoView',
    tagline: 'The modern, lightning-fast AWS Boto3 & Botocore changelog explorer, release tracker, and service timeline.',
    description:
      'An interactive web application to track, filter, and explore AWS Boto3 and Botocore changelogs. Easily inspect daily releases, new AWS services, API modifications, and version history in a clean, responsive interface.',
    longDescription:
      'AWS releases Boto3 and Botocore updates almost daily across hundreds of services. BotoView organizes these updates into an intuitive, searchable timeline so cloud engineers and developers can quickly see what changed, which APIs were introduced, and track release diffs without sifting through raw git logs.',
    category: 'Cloud Tooling',
    tags: ['AWS', 'Boto3', 'Botocore', 'Changelog Explorer', 'Web Application', 'Open Source'],
    highlights: [
      'Interactive changelog search and release filtering',
      'Historical timeline of AWS services and API updates',
      'Clean breakdown of daily Boto3 and Botocore releases',
      'Fast, responsive web interface with zero sign-up required'
    ],
    status: 'Live Web App',
    url: 'https://botoview.5goos.com',
    urlLabel: 'Launch BotoView ↗',
    githubUrl: 'https://github.com/5goos/botoview',
    metrics: [
      { label: 'Type', value: 'Web Application' },
      { label: 'Focus', value: 'AWS Boto3 & Botocore' },
      { label: 'License', value: 'Open Source' }
    ]
  }
];

export const COMPANY_INFO = {
  name: '5GOOS',
  fullName: 'Global Observability & Operations Software Solutions (GOOSS)',
  headline: 'Global Observability & Operations Software Solutions (GOOSS) for Modern Infrastructure',
  domain: 'https://5goos.com',
  email: '5goos@proton.me',
  github: 'https://github.com/5goos',
  twitter: '@5goos_ops',
  flagship: {
    name: 'BotoView',
    url: 'https://botoview.5goos.com',
    description: 'The modern, lightning-fast AWS Boto3 & Botocore changelog explorer, release tracker, and service timeline.'
  }
};
