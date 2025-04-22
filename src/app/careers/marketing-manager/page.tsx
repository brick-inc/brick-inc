import JobDescription from "../../components/JobDescription";

export default function MarketingManager() {
  const jobData = {
    title: "Marketing Manager",
    slug: "marketing-manager",
    badges: [
      { label: "Location", value: "Remote" },
      { label: "Team", value: "Marketing" },
      { label: "Type", value: "Full-Time" }
    ],
    sections: [
      {
        title: "About Brick",
        content: "Brick is a product lab focused on building intuitive, reliable tools that help people move through the world with ease. From navigation to coordination, we design software that puts convenience and accessibility first. We're a small team of engineers, designers, and product leaders who love shipping fast, solving real problems, and keeping things simple."
      },
      {
        title: "The Role",
        content: "We're looking for a Marketing Manager who can develop and execute comprehensive marketing strategies to grow our brand presence and user base. You'll be responsible for creating compelling campaigns, managing digital channels, and analyzing performance metrics to optimize our marketing efforts. This role is perfect for marketers who enjoy creativity, data-driven decision making, and want to have a significant impact on our growth."
      },
      {
        title: "What You'll Do",
        listItems: [
          { content: "Develop and implement marketing strategies to increase brand awareness" },
          { content: "Manage our social media presence and content marketing efforts" },
          { content: "Create compelling copy for various marketing channels" },
          { content: "Collaborate with product and design teams on marketing materials" },
          { content: "Analyze marketing performance data to optimize campaigns" },
          { content: "Plan and execute product launches and promotional events" }
        ]
      },
      {
        title: "Marketing Channels",
        listItems: [
          { content: "Digital: Social media, SEO, content marketing", isBold: true },
          { content: "Email: Newsletters, user onboarding, campaigns", isBold: true },
          { content: "Events: Webinars, product launches, partnerships", isBold: true },
          { content: "Analytics: Performance tracking, A/B testing", isBold: true },
          { content: "Design: Brand consistency, visual storytelling", isBold: true },
          { content: "Growth: User acquisition, retention strategies", isBold: true }
        ]
      },
      {
        title: "What We're Looking For",
        listItems: [
          { content: "3+ years of experience in digital marketing or related field" },
          { content: "Strong understanding of various digital marketing channels" },
          { content: "Excellent written and verbal communication skills" },
          { content: "Experience with marketing analytics tools and data-driven decision making" },
          { content: "Creative mindset with attention to detail" },
          { content: "Ability to work independently and collaboratively in a fast-paced environment" }
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