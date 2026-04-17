import webdown from "../public/images/service/webdown.png";
import brandingdown from "../public/images/service/brandingdown.png";
import marketingdown from "../public/images/service/marketingdown.png";
import mediadown from "../public/images/service/mediadown.png";

const approachDatas = {
  "branding-design": {
    image: brandingdown,
    intro:
      "Our branding approach focuses on research, creative execution, and continuous refinement to build strong identities that connect with audiences and drive long term recognition.",
    steps: [
      {
        id: "bd-1",
        title: "Brand Research and Insights",
        description:
          "We analyze your business, audience, and competitors to uncover insights that shape a clear brand strategy and define positioning across markets.",
        icon: "icon-search",
      },
      {
        id: "bd-2",
        title: "Creative Design Execution",
        description:
          "We develop visual systems and brand assets that reflect your identity while ensuring consistency across all digital and offline touchpoints.",
        icon: "icon-design-tools",
      },
      {
        id: "bd-3",
        title: "Launch and Brand Growth",
        description:
          "We launch your brand across platforms and continuously refine it using feedback and insights to maintain relevance and long term impact.",
        icon: "icon-start-up",
      },
    ],
  },

  "web-software": {
    image: webdown,
    intro:
      "Our technology approach focuses on strategy, development, and optimization to deliver scalable digital solutions that support business growth and evolving technical requirements.",
    steps: [
      {
        id: "ws-1",
        title: "Planning and Solution Strategy",
        description:
          "We define requirements, analyze workflows, and design scalable solutions that align with business goals and ensure long term efficiency.",
        icon: "icon-search",
      },
      {
        id: "ws-2",
        title: "Build and System Integration",
        description:
          "We develop applications and integrate systems to create seamless, secure, and high performing digital platforms across environments.",
        icon: "icon-design-tools",
      },
      {
        id: "ws-3",
        title: "Deployment and Optimization",
        description:
          "We deploy solutions efficiently and continuously optimize performance to ensure scalability, reliability, and consistent system improvement.",
        icon: "icon-start-up",
      },
    ],
  },

  "marketing-growth": {
    image: marketingdown,
    intro:
      "Our marketing approach combines research, execution, and optimization to create data driven strategies that increase visibility, engagement, and sustainable business growth.",
    steps: [
      {
        id: "mg-1",
        title: "Audience Research and Strategy",
        description:
          "We study market trends, audience behavior, and competitors to build targeted strategies that maximize reach and business opportunities.",
        icon: "icon-search",
      },
      {
        id: "mg-2",
        title: "Campaign Execution and Reach",
        description:
          "We launch campaigns across channels, focusing on engagement, conversions, and delivering measurable results aligned with business goals.",
        icon: "icon-design-tools",
      },
      {
        id: "mg-3",
        title: "Tracking and Growth Scaling",
        description:
          "We monitor performance, refine strategies, and scale campaigns using insights to drive continuous growth and long term success.",
        icon: "icon-start-up",
      },
    ],
  },

  "media-production": {
    image: mediadown,
    intro:
      "Our media approach blends planning, production, and distribution to create impactful visual content that captures attention and strengthens brand communication across platforms.",
    steps: [
      {
        id: "mp-1",
        title: "Content Planning and Strategy",
        description:
          "We develop creative concepts and content strategies aligned with brand goals to ensure consistent and engaging storytelling across channels.",
        icon: "icon-search",
      },
      {
        id: "mp-2",
        title: "Production and Creative Output",
        description:
          "We produce high quality visuals and media assets that communicate messages clearly while maintaining strong visual consistency and appeal.",
        icon: "icon-design-tools",
      },
      {
        id: "mp-3",
        title: "Distribution and Performance",
        description:
          "We distribute content strategically and optimize performance to maximize reach, engagement, and audience impact across digital platforms.",
        icon: "icon-start-up",
      },
    ],
  },
};

export default approachDatas;
