import branding from "../public/images/service/branding.png";
import marketing from "../public/images/service/marketing.png";
import media from "../public/images/service/media.png";
import web from "../public/images/service/web.png";

import Star2Img from "../public/images/v1/star2.png";

const serviceDatas = {
  "branding-design": {
    image: branding,
    starIcon: Star2Img,
    title: {
      line1: "Branding and design for modern",
      line2: "business growth",
    },
    description: [
      "Branding and design are essential elements of building a strong identity for businesses, helping companies stand out across competitive digital and physical markets today.",
      "They work together to shape perception, communicate values, and create memorable experiences that connect with audiences and drive long term recognition and trust.",
    ],
    sections: [
      {
        title: "1/ Brand Identity (Visual):",
        points: [
          "Brand identity includes logos, colors, typography, and visuals that define how a business appears across platforms and communicates its personality consistently.",
          "Designers ensure visual consistency and clarity so that every interaction reflects the brand message and strengthens recognition across different channels.",
          "Key elements include logo systems, color palettes, typography styles, imagery, and scalable design systems for long term usage.",
        ],
      },
      {
        title: "2/ Brand Experience (Strategy):",
        points: [
          "Brand experience focuses on how customers perceive and interact with a brand across touchpoints, shaping emotions, trust, and long lasting impressions.",
          "Strategists understand audience behavior, positioning, and messaging to create meaningful brand connections that influence decisions and loyalty.",
          "Key areas include positioning, storytelling, tone of voice, user perception, and consistent messaging across digital and offline experiences.",
        ],
      },
    ],
  },

  "web-software": {
    image: web,
    starIcon: Star2Img,
    title: {
      line1: "Scalable Web &",
      line2: "Software Solution",
    },
    description: [
      "Web and software development are core components of modern businesses, enabling organizations to build fast, reliable, and scalable digital products for global users.",
      "They combine technology and architecture to deliver seamless functionality, ensuring performance, security, and flexibility across web applications and software systems.",
    ],
    sections: [
      {
        title: "1/ Digital Solutions & Platforms:",
        points: [
          "We create end to end digital solutions that help businesses streamline operations, improve efficiency, and unlock new growth opportunities across evolving markets.",
          "Our focus is on building scalable platforms that integrate seamlessly with existing systems while adapting to future technological and business needs.",
          "Key areas include custom platforms, business automation systems, enterprise solutions, and scalable digital ecosystems for long term success.",
        ],
      },
      {
        title: "2/ Applications & Digital Experiences:",
        points: [
          "We design and develop modern applications that deliver intuitive, high performance experiences across web, mobile, and connected digital environments.",
          "Our approach ensures seamless functionality, user engagement, and reliability, enabling businesses to launch impactful and future ready digital products.",
          "Key areas include web applications, mobile apps, SaaS products, and interactive digital experiences built for scale and engagement.",
        ],
      },
    ],
  },

  "marketing-growth": {
    image: marketing,
    starIcon: Star2Img,
    title: {
      line1: "Marketing and growth for data driven",
      line2: "business expansion",
    },
    description: [
      "Marketing and growth strategies help businesses reach the right audience, increase visibility, and drive measurable results across digital channels and competitive markets.",
      "They combine creativity and analytics to optimize campaigns, improve conversions, and build sustainable growth through targeted communication and performance tracking.",
    ],
    sections: [
      {
        title: "1/ Digital Marketing:",
        points: [
          "Digital marketing focuses on promoting brands through online channels including search engines, social media, and paid advertising to increase reach and engagement.",
          "Marketers create campaigns that attract, convert, and retain customers using data driven strategies aligned with business goals and audience behavior.",
          "Key areas include SEO, social media marketing, paid ads, content strategy, and campaign optimization for consistent and scalable growth.",
        ],
      },
      {
        title: "2/ Growth Strategy:",
        points: [
          "Growth strategy focuses on scaling businesses by identifying opportunities, optimizing funnels, and improving user acquisition, retention, and overall lifetime value.",
          "Teams analyze performance data and user behavior to refine strategies that drive sustainable expansion and maximize return on investment.",
          "Key areas include funnel optimization, analytics, A B testing, customer retention strategies, and data driven decision making for continuous improvement.",
        ],
      },
    ],
  },

  "media-production": {
    image: media,
    starIcon: Star2Img,
    title: {
      line1: "Media & production for engaging",
      line2: "storytelling",
    },
    description: [
      "Media and production services help brands create compelling visual content, enabling businesses to communicate messages effectively across digital platforms and audiences.",
      "They combine creativity and technology to produce high quality visuals that capture attention, build engagement, and strengthen brand communication strategies.",
    ],
    sections: [
      {
        title: "1/ Content Production:",
        points: [
          "Content production focuses on creating high quality visuals including videos, graphics, and multimedia assets that communicate brand messages clearly and effectively.",
          "Creators ensure consistency, storytelling, and visual appeal so that content resonates with audiences and enhances overall brand perception.",
          "Key areas include video production, motion graphics, photography, editing, and creative direction for impactful and professional content output.",
        ],
      },
      {
        title: "2/ Media Strategy:",
        points: [
          "Media strategy focuses on planning, distributing, and optimizing content across platforms to maximize reach, engagement, and overall audience impact.",
          "Teams analyze platforms and audience behavior to deliver the right content at the right time for stronger visibility and performance results.",
          "Key areas include content planning, platform strategy, audience targeting, distribution channels, and performance tracking for effective campaigns.",
        ],
      },
    ],
  },
};

export default serviceDatas;
