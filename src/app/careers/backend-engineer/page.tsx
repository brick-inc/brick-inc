import JobDescription from "../../components/JobDescription";

export default function BackendEngineer() {
  const jobData = {
    title: "Backend Engineer",
    slug: "backend-engineer",
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
        content: "We're looking for a Backend Engineer who's passionate about building reliable, scalable APIs and services. You'll design and implement the core systems that power our products, with a focus on performance, security, and maintainability. You'll work closely with frontend engineers to deliver seamless user experiences."
      },
      {
        title: "What You'll Do",
        listItems: [
          { content: "Design and build robust, scalable backend services and APIs" },
          { content: "Architect and optimize database schemas and queries" },
          { content: "Implement authentication, security, and data protection measures" },
          { content: "Work with frontend developers to ensure consistent data interactions" },
          { content: "Set up and maintain CI/CD pipelines and deployment infrastructure" },
          { content: "Contribute to technical architecture decisions and backend standards" }
        ]
      },
      {
        title: "Tech Stack",
        listItems: [
          { content: "Languages: TypeScript, JavaScript", isBold: true },
          { content: "Frameworks: Node.js, Express", isBold: true },
          { content: "Database: PostgreSQL, Prisma", isBold: true },
          { content: "API: REST, GraphQL", isBold: true },
          { content: "Infra: Vercel, GitHub, Railway (or similar)", isBold: true },
          { content: "Testing: Jest, Supertest", isBold: true }
        ]
      },
      {
        title: "What We're Looking For",
        listItems: [
          { content: "2+ years experience building backend services and APIs" },
          { content: "Strong knowledge of Node.js and database design" },
          { content: "Experience with relational databases and ORM frameworks" },
          { content: "Understanding of security best practices and performance optimization" },
          { content: "Strong communication and problem-solving skills" },
          { content: "Bonus: Experience with cloud infrastructure (AWS, GCP, etc.)" }
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