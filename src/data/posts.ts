export type Post = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  body: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: 'My first commit',
    date: '2026-09-14',
    tags: ['Git', 'GitHub'],
    excerpt: 'My first commit and getting to know GitHub.',
    body: 'This is my first commit and my first time with GitHub. I did not understand how to make a pull request, I made a mistake, and in the end I made two pull requests.',
  },
  {
    id: 2,
    title: 'Profile card and my photo',
    date: '2026-09-21',
    tags: ['profile', 'VS Code'],
    excerpt: 'I looked for a good photo for my profile card.',
    body: 'I looked for a good photo for my profile card. I felt sad when VS Code did not recognize my photo, but I solved the problem.',
  },
  {
    id: 3,
    title: 'Getting to know React Router',
    date: '2026-10-05',
    tags: ['React Router'],
    excerpt: 'I discovered React Router.',
    body: 'I discovered React Router. I do not really understand what it is yet.',
  },
  {
    id: 4,
    title: 'Figma and code',
    date: '2026-10-12',
    tags: ['Figma', 'code'],
    excerpt: 'My first time working with Figma and code.',
    body: 'It was fun to work with Figma and with code. I have never done this before.',
  },
  {
    id: 5,
    title: 'My beautiful profile',
    date: '2026-10-14',
    tags: ['profile', 'experience'],
    excerpt: 'My profile is turning out beautiful.',
    body: 'I am very happy that my profile is turning out beautiful. This is my first experience of a beautiful, professional profile.',
  },
  {
    id: 6,
    title: 'Studying six days a week',
    date: '2026-10-18',
    tags: ['study', 'friends'],
    excerpt: 'Classes almost every day.',
    body: 'I study six days a week, almost every day. I find it interesting to spend time with my friends and classmates.',
  },
  {
    id: 7,
    title: 'My only day off',
    date: '2026-10-19',
    tags: ['rest', 'homework'],
    excerpt: 'On my only day off I rest and do my homework.',
    body: 'On my only day off I rest from all the emotions of the week and do my homework.',
  },
];
