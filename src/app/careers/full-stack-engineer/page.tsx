import JobDescription from "../../components/JobDescription";

export default function FullStackEngineer() {
  const jobData = {
    title: "Full Stack Engineer",
    slug: "full-stack-engineer",
    badges: [
      { label: "Location", value: "Remote" },
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
        content: "We're looking for a Full Stack Engineer who can bridge the gap between frontend and backend development. You'll be responsible for building complete features from database to user interface, working on all layers of our application stack. This role is perfect for developers who enjoy variety and want to have a broad impact on our products."
      },
      {
        title: "What You'll Do",
        listItems: [
          { content: "Develop end-to-end features across the entire application stack" },
          { content: "Build responsive UIs with Next.js, React, and Tailwind CSS" },
          { content: "Design and implement APIs, database schemas, and backend services" },
          { content: "Collaborate with designers to create intuitive user experiences" },
          { content: "Own projects from concept to deployment and maintenance" },
          { content: "Help shape our engineering practices and technical architecture" }
        ]
      },
      {
        title: "Tech Stack",
        listItems: [
          { content: "Frontend: Next.js, React, Tailwind CSS", isBold: true },
          { content: "Backend: Node.js, Express", isBold: true },
          { content: "Database: PostgreSQL, Prisma", isBold: true },
          { content: "Languages: TypeScript, JavaScript", isBold: true },
          { content: "API: REST, GraphQL", isBold: true },
          { content: "Infra: Vercel, GitHub, Railway (or similar)", isBold: true }
        ]
      },
      {
        title: "What We're Looking For",
        listItems: [
          { content: "3+ years of professional full stack development experience" },
          { content: "Strong knowledge of modern JavaScript/TypeScript frameworks" },
          { content: "Experience with both frontend UI development and backend systems" },
          { content: "Ability to design clean APIs and efficient database schemas" },
          { content: "Strong problem-solving skills and attention to detail" },
          { content: "Good communication skills and ability to work collaboratively" }
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