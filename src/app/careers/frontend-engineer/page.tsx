import JobDescription from "../../components/JobDescription";

export default function FrontendEngineer() {
  const jobData = {
    title: "Frontend Engineer",
    slug: "frontend-engineer",
    badges: [
      { label: "Location", value: "Remote or NYC-based" },
      { label: "Team", value: "Engineering" },
      { label: "Type", value: "Full-Time" }
    ],
    sections: [
      {
        title: "About Brick",
        content: "Brick is a product lab focused on building intuitive, reliable tools that help people move through the world with ease. From navigation to coordination, we design software that puts convenience and accessibility first. We're a small team of engineers, designers, and product leaders who love shipping fast, solving real problems, and keeping things simple."
      },
      {
        title: "The Role",
        content: "We're looking for a Front-End Engineer who's excited to own and build polished user experiences from start to finish. You'll collaborate closely with designers and backend engineers to bring our products to life across web platforms. You'll also have a strong say in product direction, UI patterns, and technical decisions."
      },
      {
        title: "What You'll Do",
        listItems: [
          { content: "Build and maintain front-end features using Next.js, React, and Tailwind CSS" },
          { content: "Collaborate across design and backend teams to build seamless user experiences" },
          { content: "Work with Prisma and PostgreSQL to integrate with our backend APIs" },
          { content: "Contribute to technical architecture and front-end standards" },
          { content: "Take ownership of projects from concept to production" },
          { content: "Help shape the future of our engineering culture and team" }
        ]
      },
      {
        title: "Tech Stack",
        listItems: [
          { content: "Frameworks: Next.js, React", isBold: true },
          { content: "Styling: Tailwind CSS", isBold: true },
          { content: "Languages: TypeScript, JavaScript", isBold: true },
          { content: "Backend: Node.js", isBold: true },
          { content: "Database: PostgreSQL, Prisma", isBold: true },
          { content: "Infra: Vercel, GitHub, Railway (or similar)", isBold: true }
        ]
      },
      {
        title: "What We're Looking For",
        listItems: [
          { content: "2+ years experience building front-end applications" },
          { content: "Strong understanding of modern web frameworks and state management" },
          { content: "Familiarity with design systems and accessibility best practices" },
          { content: "Comfortable working in a fast-moving, iterative environment" },
          { content: "Strong communicator and team collaborator" },
          { content: "Bonus: Experience with backend or full-stack development" }
        ]
      },
      {
        title: "Why Brick",
        listItems: [
          { content: "Small team, big impact" },
          { content: "Ship fast, learn faster" },
          { content: "Flexible hours and remote-friendly" },
          { content: "Work on meaningful products with real-world use" },
          { content: "Opportunity to grow with a passionate, mission-driven team" }
        ]
      }
    ]
  };

  return <JobDescription {...jobData} />;
}
