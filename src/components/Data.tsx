export const skills = [
  { category: 'Frontend', title: 'HTML' },
  { category: 'Frontend', title: 'CSS' },
  { category: 'Frontend', title: 'Javascript' },
  { category: 'Frontend', title: 'React' },
  { category: 'Frontend', title: 'NextJs' },
  { category: 'Frontend', title: 'Node.js' },
  { category: 'Frontend', title: 'TypeScript' },
  { category: 'Frontend', title: 'ES6' },
  { category: 'Frontend', title: 'JSON' },
  { category: 'Frontend', title: 'SASS' },
  { category: 'Frontend', title: 'Tailwind' },
  { category: 'Frontend', title: 'MaterialUI' },
  { category: 'Frontend', title: 'Responsive web design' },
  { category: 'Frontend', title: 'Jest' },
  { category: 'Frontend', title: 'Testing Library' },
  { category: 'Frontend', title: 'API' },
  { category: 'Frontend', title: 'Jira' },
  { category: 'Frontend', title: 'Figma' },
  { category: 'Backend', title: 'GraphQl' },
  { category: 'Backend', title: 'Apollo GraphQL' },
  { category: 'Backend', title: 'Strapi' },
  { category: 'Backend', title: 'MongoDB' },
  { category: 'Backend', title: 'Mongoose' },
  { category: 'Backend', title: 'Express.js' },
  { category: 'Backend', title: 'WebAPI' },
  { category: 'Backend', title: 'RestfulAPI' },
  { category: 'Backend', title: 'IntergrateAPI' },
  { category: 'Other', title: 'Git' },
  { category: 'Other', title: 'Github' },
  { category: 'Soft Skills', title: 'Countinuous learning' },
  { category: 'Soft Skills', title: 'Self-motivation' },
  { category: 'Soft Skills', title: 'Attention to detail' },
  { category: 'Soft Skills', title: 'Fast learner' },
  { category: 'Soft Skills', title: 'Problem Solving' },
  { category: 'Soft Skills', title: 'Verbal communication' },
  { category: 'Soft Skills', title: 'Writen communication' },
  { category: 'Soft Skills', title: 'Consistency' },
  { category: 'Soft Skills', title: 'Highly motivated' },
  { category: 'Soft Skills', title: 'Passionate' },
  { category: 'Soft Skills', title: 'Emthusiasm' },
]

export const skillCategories = [
  { label: 'All' },
  { label: 'Frontend' },
  { label: 'Backend' },
  { label: 'Other' },
  { label: 'Soft Skills' },
]

interface NavItem {
  label: string
  target: string
  link?: string
}

export const NavItems: Array<NavItem> = [
  { label: 'Home', target: 'home', link: '/' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
]

export const NavButtons = [
  { label: 'Login', link: 'login' },
  { label: 'Signup', link: 'signup' },
]

export const handleClickScroll = (event: any, targetId: string) => {
  event.preventDefault()
  const targetSection = document.getElementById(targetId)

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }
}

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const projects = [
  {
    name: 'CrankBit, Automotive SaaS Platform',
    description:
      'Boosting automotive mechanics efficiency, this website aids in creating streamlined repair forms, optimizing processes for enhanced workflow, and overall productivity improvement.',
    image: '/Crankbit.jpg',
    github: 'https://github.com/CRANKBIT',
    link: 'https://github.com/CRANKBIT',
    stack: [
      { title: 'Agile development environment' },
      { title: 'problem-solving' },
      { title: 'Used Redux Toolkit Query to fetch data' },
      { title: 'Collaborative web page UI design' },
      { title: 'React, Tailwind and TypeScript' },
      { title: 'MongoDb, Mongoose' },
      { title: 'Created the database schema, model, controller' },
      { title: 'Reviewd and made changes upon pull requests on git' },
      { title: 'Jira and GitHub' },
    ],
  },
  {
    name: 'Hoopla Party Planning',
    description: 'A showcase website displays customer`s photo gallery.',
    image: '/HooplaParty.jpg',
    github: 'https://github.com/FreshByte-Genesis/ZenFrame',
    link: 'https://github.com/FreshByte-Genesis/ZenFrame',
    stack: [
      { title: 'Collaborative web page UI design' },
      { title: 'React, Tailwind and TypeScript' },
      { title: 'Next.js' },
    ],
  },
  {
    name: 'Authentication',
    description:
      'A Next.js application focused on authentication features. It uses a combination of technologies like Next.js for server-rendered React applications, various libraries for handling authentication-related tasks, and TypeScript for type-safe JavaScript development.',
    image: '/Authentication.jpg',
    github: 'https://github.com/smarthulala/nextjs-authentication',
    link: 'https://github.com/smarthulala/nextjs-authentication',
    stack: [
      { title: 'axios' },
      { title: 'Bcryptjs' },
      { title: 'Next.js' },
      { title: 'Jsonwebtoken' },
      { title: 'MongoDb, Mongoose' },
      { title: 'Tailwindcss' },
      { title: 'Nodemailer' },
    ],
  },
]
