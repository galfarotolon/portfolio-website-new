export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Project Success",
      description: "I prioritize open communication to ensure",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Around The World",
      description: "Working with clients",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Tech Stack",
      description: "Keeping up with the latest",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Passion & Attention to Detail",
      description: "I build projects with",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "Focused on delivering engaging and efficient web experiences.",
      description: "",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Ready to Start a Project Together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
];


export const techStack = {
  nextjs: {
    id: 0,
    name: "Next.js",
    designation: "Utility-First CSS",
    icon: "/next.svg",
  },
  tailwind: {
    id: 1,
    name: "Tailwind CSS",
    designation: "Utility-First CSS",
    icon: "/tail.svg",
  },
  typescript: {
    id: 2,
    name: "TypeScript",
    designation: "Typed JavaScript",
    icon: "/ts.svg",
  },
  sanity: {
    id: 3,
    name: "Sanity.io",
    designation: "Headless CMS",
    icon: "/sanity.svg",
  },
  nodejs: {
    id: 4,
    name: "Node.js",
    designation: "Server-side JavaScript",
    icon: "/nodejs.svg",
  },
  clerk: {
    id: 5,
    name: "Clerk",
    designation: "Authentication",
    icon: "/c.svg",
  },
  mongodb: {
    id: 6,
    name: "MongoDB",
    designation: "NoSQL Database",
    icon: "/mongodb.svg",
  },
  framermotion: {
    id: 7,
    name: "Framer Motion",
    designation: "Animation Library",
    icon: "/fm.svg",
  },
  react: {
    id: 8,
    name: "React",
    designation: "UI Library",
    icon: "/re.svg",
  },
};

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: [techStack.react, techStack.tailwind, techStack.typescript, techStack.framermotion],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    description: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: [techStack.nextjs, techStack.tailwind, techStack.typescript, techStack.clerk],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    description: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: [techStack.react, techStack.tailwind, techStack.typescript, techStack.clerk],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: [techStack.nextjs, techStack.tailwind, techStack.typescript,],
    link: "/ui.apple.com",
  },
];
  
  export const testimonials = [
    {
      quote:
        "Working with Guillermo was a game-changer for our company. His expertise and commitment to excellence were evident in every aspect of the project. Guillermo’s innovative approach and problem-solving skills significantly improved our product’s performance. He’s a true professional and a joy to collaborate with.",
      name: "Carlos Maya",
      title: "CEO of Memento360",
      profileImg: "/satisfied-client-1.png",
    },
    {
      quote:
        "Guillermo’s technical expertise and leadership were instrumental in the success of our projects at Trisbee. His ability to manage complex tasks while keeping the team motivated was impressive. Guillermo is a reliable and creative thinker, always delivering high-quality work.",
      name: "Michael Kaspar",
      title: "CTO of Trisbee",
      profileImg: "/satisfied-client-2.png",
    },
    {
      quote:
        "Guillermo brought our vision to life with his exceptional development skills. His attention to detail and dedication to the project were outstanding. Guillermo’s work not only met our expectations but exceeded them. He is an invaluable asset to any team.",
      name: "Jorge Bocanegra",
      title: "Owner of Juguetes Jorge Wonka",
      profileImg: "/satisfied-client-3.png",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const experiences = [
    {
      title: "Full Stack Web Development Student",
      company_name: "Lambda School (Now Bloom Institute of Technology)",
      icon: "/lambda-icon.png", // Replace with your actual icon path
      iconBg: "#E6DEDD",
      date: "March 2020 - January 2021",
      points: [
        "Completed a 10-month full-time immersive software development and computer science bootcamp.",
        "Learned and applied full-stack web development skills."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Trisbee",
      icon: "/trisbee-icon.png", // Replace with your actual icon path
      iconBg: "#383E56",
      date: "February 2021 - December 2023",
      points: [
        "Contributed to the development of three web applications: Trisbee Pay, Backoffice, and Business Dashboard.",
        "Improved UI/UX, created new features, and adapted the apps to the Peru business model.",
        "Developed and launched two fully-functional and SEO-optimized websites using Next.js and TypeScript.",
        "Streamlined business processes and improved efficiency through an intuitive UI for managing users and merchants."
      ],
    },
    {
      title: "Freelance Frontend Developer",
      company_name: "Memento360",
      icon: "/memento-icon.png", // Replace with your actual icon path
      iconBg: "#E6DEDD",
      date: "September 2022 - Present",
      points: [
        "Built the site from scratch for a client, implemented Google Analytics and Google Tag Manager.",
        "Improved SEO to position the website in search engines.",
        "Used tools such as Next.js, styled-components, Material UI, React Hook Forms.",
        "Performed updates and continued to improve the site regularly."
      ],
    },
    {
      title: "Freelance Full-Stack Developer",
      company_name: "Various Clients",
      icon: "/ga-digital.png", // Replace with your actual icon path
      iconBg: "#383E56",
      date: "January 2024 - Present",
      points: [
        "Developed websites for various clients, including e-commerce sites, web applications and landing pages.",
        "Worked on all aspects of the development process, from client consultations to deployment and maintenance.",
        "Created fully responsive, user-friendly, and SEO-optimized web solutions using React, Next.js, and TypeScript.",
        "Consistently delivered high-quality projects that met client expectations and business goals."
      ],
    },
    
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];