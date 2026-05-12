/**
 * Sole data source for /home2 and /home3 — decoupled from DB / homepage profile.
 * Edit here to change demo content. Optional HOME_LAYOUT_MOCK_DOMAIN for footer label.
 */

const IMG = {
  portrait:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=1125&fit=crop",
  heroBg:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop",
  work1:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop",
  work2:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=900&fit=crop",
  work3:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=900&fit=crop",
  work4:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=900&fit=crop",
  work5:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=900&fit=crop",
  work6:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=900&fit=crop",
};

export function homeLayoutMockDomain() {
  return (
    process.env.HOME_LAYOUT_MOCK_DOMAIN ||
    process.env.NEXT_PUBLIC_HOME_LAYOUT_MOCK_DOMAIN ||
    "preview.profilesuite.local"
  );
}

/** Same shape as getProfile() from lib/data.jsx */
export function getHomeLayoutMockProfilePayload() {
  return {
    data: {
      profile: {
        name: "Alex Morgan",
        slogan:
          "Product design · Design systems · Frontend craft · Creative direction",
        introduction:
          "I'm a design-led product engineer focused on clarity, performance, and accessible interfaces. I partner with teams to ship resilient design systems, polished marketing surfaces, and thoughtful micro-interactions that hold up in production.",
        email: "hello@example.com",
        profile_image: IMG.portrait,
      },
      education: [
        {
          school: "Rhode Island School of Design",
          description: "BFA, Graphic Design",
          location: "Providence, RI",
          from_date: "2014-09-01",
          to_date: "2018-05-15",
        },
        {
          school: "University of Washington",
          description: "Exchange, Human-Computer Interaction",
          location: "Seattle, WA",
          from_date: "2017-01-10",
          to_date: "2017-06-20",
        },
        {
          school: "Online — Interaction Design Foundation",
          description: "UX Research & UI Patterns",
          location: "Remote",
          from_date: "2019-03-01",
          to_date: "2020-02-01",
        },
      ],
      experience: [
        {
          description: "Principal Product Designer — Core platform",
          location: "Contour Labs · San Francisco, CA",
          from_date: "2022-04-01",
          to_date: new Date().toISOString().slice(0, 10),
        },
        {
          description: "Senior Product Designer",
          location: "Northwind Studio · Remote",
          from_date: "2019-06-01",
          to_date: "2022-03-15",
        },
        {
          description: "Product Designer (contract)",
          location: "Brightside Health · Remote",
          from_date: "2018-08-01",
          to_date: "2019-05-30",
        },
        {
          description: "Visual Designer",
          location: "Paper Crane Agency · Portland, OR",
          from_date: "2016-01-04",
          to_date: "2018-07-20",
        },
      ],
      skills: [
        {
          id: "mock-s1",
          name: "Product design",
          skill_name: "Product design",
          level: 92,
          description:
            "End-to-end flows, prototyping, and critique that balances user outcomes with delivery constraints.",
        },
        {
          id: "mock-s2",
          name: "Design systems",
          level: 88,
          description:
            "Tokens, components, documentation, and governance across design and engineering.",
        },
        {
          id: "mock-s3",
          name: "Frontend (React)",
          level: 85,
          description:
            "Shipping accessible UI with performance budgets and sensible state management.",
        },
        {
          id: "mock-s4",
          name: "Motion & micro-interactions",
          level: 78,
          description:
            "Purposeful animation that reinforces hierarchy without slowing people down.",
        },
        {
          id: "mock-s5",
          name: "Design ops",
          level: 80,
          description:
            "Rituals, libraries, and tooling that keep teams aligned at scale.",
        },
        {
          id: "mock-s6",
          name: "Research & UX writing",
          level: 82,
          description:
            "Lightweight studies, journey maps, and interface copy that matches the product voice.",
        },
        {
          id: "mock-s7",
          name: "Brand systems",
          level: 75,
          description:
            "Coherent storytelling across web, decks, and launch moments.",
        },
        {
          id: "mock-s8",
          name: "Facilitation",
          level: 90,
          description:
            "Workshops, async artifacts, and crisp handoffs for cross-functional partners.",
        },
      ],
      gallery: [
        { filename: IMG.work1, title: "Analytics dashboard — IA & UI" },
        { filename: IMG.work2, title: "Design system — documentation site" },
        { filename: IMG.work3, title: "Marketing launch — landing & motion" },
        { filename: IMG.work4, title: "Mobile onboarding — research to UI" },
        { filename: IMG.work5, title: "Team rituals — critique & reviews" },
        { filename: IMG.work6, title: "Brand refresh — web & collateral" },
      ],
      links: [
        {
          title: "Download CV",
          url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        },
      ],
      socials: {
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
  };
}
