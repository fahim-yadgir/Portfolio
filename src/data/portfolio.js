// ============================================================
//  ALL CONTENT LIVES HERE. Edit this file only; components read from it.
//  Items marked TODO are placeholders: replace with your real details.
// ============================================================

export const profile = {
  name: 'Fahim Yadgir',
  role: 'Data Analyst',
  tagline: 'Turning Data into Decisions',
  intro: 'I clean, analyse and visualise data so businesses can act on it. SQL, Python, Power BI and Tableau are my daily tools, backed by a software development foundation.',
  photo: '/Photo.png',
  whatsapp: '917385094941',
  email: 'fahimyadgir07@gmail.com', // TODO
  github: 'https://github.com/fahim-yadgir', // TODO
  linkedin: 'https://www.linkedin.com/in/fahim-yadgir-32b842344/', // TODO
  resume: '/resume.pdf' // put your file in /public/resume.pdf
}

export const nav = [
  { id: 'documents', label: 'Docs' },
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }, { id: 'internship', label: 'Internship' },
  { id: 'certifications', label: 'Certs' }, { id: 'dev', label: 'Dev' }, { id: 'ai', label: 'AI' },
  { id: 'education', label: 'Education' }, { id: 'achievements', label: 'Wins' }, { id: 'contact', label: 'Contact' }
]

export const about = {
  text: [
    'I am a BCA graduate with a 9.67 CGPA, focused on data analytics. I enjoy turning messy, real-world datasets into clear answers that help a business decide what to do next.',
    'My software development background (Java, React, SQL) means I can build the tools around the analysis too: dashboards, small web apps and clean data pipelines.'
  ],
  stats: [
    { label: 'CGPA', value: 9.67, decimals: 2 },
    { label: 'Analytics projects', value: 6, suffix: '+' }, // TODO
    { label: 'Dashboards built', value: 5, suffix: '+' }, // TODO
    { label: 'Web projects', value: 5, suffix: '+' } // TODO
  ]
}

export const skills = [
  { group: 'Querying and programming', items: [['SQL / MySQL', 90], ['Python', 85], ['Pandas', 85], ['NumPy', 80]] },
  { group: 'BI and visualisation', items: [['Power BI', 85], ['Tableau', 85], ['Excel', 88], ['Matplotlib', 80]] },
  { group: 'Analysis practice', items: [['Statistics', 78], ['Data Cleaning', 90], ['EDA', 88], ['Dashboard Development', 88]] }
]
export const skillTags = ['Data Analysis', 'Data Visualization', 'Storytelling with Data', 'KPI Design']

// chart = 6-8 numbers that draw the mini chart on each card (use real values from your analysis if you can)
export const projects = [
  {
    title: 'Sales Analysis',
    category: 'Python',
    chart: [30, 45, 38, 62, 55, 78, 90],
    problem: 'Find which products, regions and months drive revenue and where sales are slipping.',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Excel'],
    analysis: [
      'Cleaned and merged monthly sales files',
      'Revenue trend and seasonality analysis',
      'Top products and regions ranking'
    ],
    insights: [
      'Identified top-performing products and regions contributing to overall sales.',
      'Highlighted monthly sales trends and seasonal patterns to support better planning.',
      'Recognised low-performing product categories that may require business attention.'
    ],
    image: '',
    github: '',
    demo: ''
  },
  {
    title: 'E-Commerce Customer Analytics',
    category: 'SQL',
    chart: [20, 35, 50, 44, 66, 72, 85],
    problem: 'Understand customer segments, repeat purchase behaviour and order value.',
    tools: ['MySQL', 'SQL', 'Power BI'],
    analysis: [
      'RFM segmentation with SQL window functions',
      'Cohort and repeat-purchase analysis',
      'Average order value by segment'
    ],
    insights: [
      'Identified valuable customer segments using RFM analysis.',
      'Analysed repeat purchase behaviour to understand customer retention patterns.',
      'Used average order value and purchasing trends to evaluate customer performance.'
    ],
    image: '',
    github: '',
    demo: ''
  },
  {
    title: 'Finance Analysis',
    category: 'Power BI',
    chart: [60, 52, 58, 70, 64, 80, 76],
    problem: 'Track income, expenses and profit margins to spot cost leaks.',
    tools: ['Power BI', 'DAX', 'Excel'],
    analysis: [
      'Profit and loss dashboard',
      'Budget vs actual variance',
      'Expense category breakdown'
    ],
    insights: [
      'Identified major expense categories affecting overall profitability.',
      'Compared actual financial performance against budget expectations.',
      'Highlighted revenue and profit trends to support financial decision-making.'
    ],
    image: '',
    github: '',
    demo: ''
  },
  {
    title: 'Customer Churn Analysis',
    category: 'Python',
    chart: [80, 72, 65, 70, 55, 48, 40],
    problem: 'Identify why customers leave and which segments are at highest risk.',
    tools: ['Python', 'Pandas', 'Seaborn', 'Statistics'],
    analysis: [
      'EDA on tenure, contract and charges',
      'Churn rate by segment',
      'Correlation and hypothesis testing'
    ],
    insights: [
      'Identified customer segments with relatively higher churn rates.',
      'Explored relationships between customer tenure, contract types and churn.',
      'Highlighted customer characteristics that can help improve retention strategies.'
    ],
    image: '',
    github: '',
    demo: ''
  },
  {
    title: 'Global Electronics Dashboard',
    category: 'Tableau',
    chart: [25, 40, 55, 48, 70, 82, 95],
    problem: 'Give leadership one view of global electronics sales, profit and delivery performance.',
    tools: ['Tableau', 'Excel'],
    analysis: [
      'Calculated fields and KPIs',
      'Geographic sales map',
      'Interactive filters and drill-downs'
    ],
    insights: [
      'Compared sales and profitability performance across different countries.',
      'Identified top-performing product categories and sales channels.',
      'Provided interactive KPI tracking to help leadership monitor business performance.'
    ],
    image: '',
    github: '',
    demo: ''
  },
  {
    title: 'Student Performance Analytics',
    category: 'Python',
    chart: [50, 58, 54, 66, 72, 69, 84],
    problem: 'Explore which factors relate most to student results.',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    analysis: [
      'Data cleaning and EDA',
      'Score distribution and correlations'
    ],
    insights: [
      'Identified patterns in student performance through exploratory data analysis.',
      'Examined relationships between student attributes and academic scores.',
      'Used visualisations to highlight performance trends and potential improvement areas.'
    ],
    image: '',
    github: '',
    demo: ''
  }
]

export const internship = {
  title: 'Data Analyst Virtual Internship', org: 'Forage', // TODO: add company name of the simulation
  worked: 'A job simulation where I handled real business-style data tasks and presented findings the way an analyst would for a client.', // TODO
  tasks: ['Cleaned and prepared raw datasets', 'Analysed data to answer business questions', 'Built visuals and summarised insights for stakeholders'], // TODO
  skills: ['Data Cleaning', 'Business Analysis', 'Visualization', 'Communication']
}

export const certifications = [
  { name: 'Cisco Data Analytics', issuer: 'Cisco', link: '' },
  { name: 'Data Analyst Virtual Internship', issuer: 'Forage', link: '' },
  { name: 'Python Certificate', issuer: 'TODO', link: '' },
  { name: 'SQL Certificate', issuer: 'TODO', link: '' },
  { name: 'Microsoft Fabric (learning)', issuer: 'Microsoft', link: '' }
]

export const devSkills = ['Java', 'JavaScript', 'React.js', 'HTML / CSS', 'Tailwind CSS', 'MySQL / SQL / PL/SQL', 'Git & GitHub', 'Postman']

export const devProjects = [
  {
    title: 'Student Complaint Portal',
    desc: 'A web-based portal that allows students to submit and track complaints, with an admin interface for complaint management.',
    stack: ['React', 'Java', 'MySQL'],
    github: '',
    demo: 'https://student-complaint-portal-rho.vercel.app/'
  },
  {
    title: 'Vehicle Service Platform',
    desc: 'A vehicle service management platform for customers to book services, manage vehicles and track service orders.',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    github: '',
    demo: 'https://vehical-service-platform.vercel.app/'
  },
  {
    title: 'Wedding & Decoration Website',
    desc: 'A client website showcasing wedding planning and decoration services, packages, galleries and customer enquiries.',
    stack: ['React', 'Tailwind CSS'],
    github: '',
    demo: 'https://website-wedding-and-decorations.fahimyadgir07.workers.dev/'
  },
  {
    title: 'Cinematic Studio Website',
    desc: 'An animated portfolio website designed to showcase cinematic work, creative projects and studio services.',
    stack: ['React', 'Tailwind CSS'],
    github: '',
    demo: ''
  },
  {
    title: 'Gymoff Flow App',
    desc: 'A gym management application currently live in the market. Working on frontend development, testing and UI improvements.',
    stack: ['React', 'Tailwind CSS'],
    github: '',
    demo: ''
  }
]

export const aiDev = [
  ['AI-assisted coding', 'Pair-programming with AI to write and review code faster.'],
  ['Rapid prototyping', 'Turning ideas into working demos in hours, not weeks.'],
  ['Vibe coding', 'Describing intent and steering the result with clear prompts.'],
  ['Component-based development', 'Reusable, well-structured UI pieces.'],
  ['Debugging and productivity', 'Using AI to trace bugs, explain errors and automate chores.']
]

export const experience = [
  { title: 'Freelance Web Developer', points: ['Built client websites end to end', 'Deployed on Vercel and Cloudflare', 'Handled requirements, revisions and delivery'] } // TODO
]

export const education = [
  { degree: 'Bachelor of Computer Applications (BCA)', place: 'Your College', year: '2024 - 2027', note: 'CGPA 9.67', courses: ['DBMS', 'Data Structures', 'Statistics', 'Web Technologies', 'Java' , 'Data Science'] }, // TODO
]

export const achievements = ['Hackathon participation (add name and result)', 'Academic CGPA of 9.67 in BCA', 'Forage Data Analyst certification'] // TODO

export const tools = ['GitHub', 'VS Code', 'Power BI', 'Tableau', 'MySQL Workbench', 'Jupyter', 'Postman', 'Vercel', 'Cloudflare', 'Excel']

export const documents = [
  { name: 'Resume', type: 'PDF', file: '/resume.pdf' },
  { name: 'Cisco Data Analytics Certificate', type: 'PDF', file: '/documents/cisco-certificate.pdf' },
  { name: 'Forage Internship Certificate', type: 'PDF', file: '/documents/forage-certificate.pdf' },
  { name: 'BCA Marksheet', type: 'PDF', file: '/documents/bca-marksheet.pdf' }
]