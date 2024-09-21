```
.github/
├── workflows/
│   ├── build.yml
│   ├── deploy.yml
│   ├── lint.yml
│   ├── test.yml
│   └── other-workflows.yml
├── app/
│   ├── api/
│   │   └── fetch-movies-actors.ts
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnchorSection.tsx
│   │   │   ├── FooterLink.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── SkeletonLoader.tsx
│   │   ├── Home/
│   │   │   ├── Hero/
│   │   │   │   └── index.tsx
│   │   │   ├── HolidayActivity/
│   │   │   │   ├── ActivityCard.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── HowDreamShareWorks/
│   │   │   │   ├── index.tsx
│   │   │   │   └── StepCard.tsx
│   │   │   ├── MeetAPartnerForm/
│   │   │   │   └── index.tsx
│   │   │   └── Partners/
│   │   │       ├── index.tsx
│   │   │       └── ProfileCard.tsx
│   │   └── Layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── utils/
│   │   └── font.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── public/
│   └── images/
│       ├── activities/
│       │   └── ...
│       ├── footer/
│       │   └── ...
│       ├── hero/
│       │   └── ...
│       ├── HowDreamShareWorks/
│       │   └── ...
│       └── partners/
│           └── ...
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── README.md
├── eslint.config.mjs (Optional)
├── next.config.mjs (or next.config.js)
├── package-lock.json
├── package.json
├── postcss.config.mjs (Optional)
├── prettierrc.json
├── tailwind.config.ts (or tailwind.config.js) (Optional)
└── tsconfig.json
```