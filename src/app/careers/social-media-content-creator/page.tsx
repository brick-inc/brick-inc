import JobDescription from "../../components/JobDescription";

export default function SocialMediaContentCreator() {
  const jobData = {
    title: "Social Media Content Creator",
    slug: "social-media-content-creator",
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
        content: "We're looking for a creative Social Media Content Creator who can develop engaging content that resonates with our audience and showcases our products. You'll be responsible for creating compelling posts, stories, and videos across multiple platforms, helping to build our brand voice and grow our online community. This role is perfect for creators who thrive in fast-paced environments and are passionate about telling stories that connect with users."
      },
      {
        title: "What You'll Do",
        listItems: [
          { content: "Create engaging content for various social media platforms (Instagram, TikTok, Twitter, LinkedIn)" },
          { content: "Develop and maintain a consistent posting schedule" },
          { content: "Shoot and edit photos and videos for social media" },
          { content: "Collaborate with marketing and product teams to align content with campaign goals" },
          { content: "Monitor social media trends and adapt our strategy accordingly" },
          { content: "Engage with our community and foster meaningful connections" }
        ]
      },
      {
        title: "Platforms & Tools",
        listItems: [
          { content: "Platforms: Instagram, TikTok, Twitter, LinkedIn", isBold: true },
          { content: "Content: Photo, video, stories, reels", isBold: true },
          { content: "Design: Figma, Canva, Adobe Creative Suite", isBold: true },
          { content: "Video: Premier Pro, After Effects, CapCut", isBold: true },
          { content: "Analytics: Platform insights, Google Analytics", isBold: true },
          { content: "Planning: Content calendars, scheduling tools", isBold: true }
        ]
      },
      {
        title: "What We're Looking For",
        listItems: [
          { content: "2+ years of experience creating content for social media" },
          { content: "Strong portfolio demonstrating creativity and versatility" },
          { content: "Excellent visual storytelling abilities" },
          { content: "Experience with photo and video editing tools" },
          { content: "Understanding of social media algorithms and best practices" },
          { content: "Ability to work independently while maintaining brand consistency" }
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