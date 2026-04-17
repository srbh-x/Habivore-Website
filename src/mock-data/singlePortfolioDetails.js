import Single1Img from "../public/images/portfolio/p_single.png";
import Single2Img from "../public/images/portfolio/p_single2.png";
import techlandscape from "../public/images/portfolio/techlandscape.png";
import portfolioBranding from "../public/images/portfolio/portfolioBranding.png";
import portfolioMarketing from "../public/images/portfolio/portfolioMarketing.png";
import brandingPortrait from "../public/images/portfolio/brandingPortrait.png";
import mediaPortrait from "../public/images/portfolio/mediaPortrait.png";
import techportrait from "../public/images/portfolio/techportrait.png";
import markport from "../public/images/portfolio/markport.png";
const SinglePortfolioDetails = {
  brandingAndDesign: {
    image1: portfolioBranding,
    image2: brandingPortrait,
    title: "Branding & Design Portfolio",
    info: {
      client: "India, UAE",
    },
    intro:
      "Every brand we build starts with a deep understanding of the business behind it. From startups finding their voice to established businesses ready for a refresh we craft brand identities that are bold, strategic, and built to grow.",

    steps: [
      {
        id: crypto.randomUUID(),
        title: "Brand Discovery & Strategy",
        text: "We dive deep into your business, audience, and market to develop a brand strategy that defines your identity, positioning, and visual direction before a single design is created.",
      },
      {
        id: crypto.randomUUID(),
        title: "Identity Design & Development",
        text: "From logo and typography to color systems and brand guidelines, we craft a complete visual identity that is distinctive, scalable, and built to make your business stand out.",
      },
      {
        id: crypto.randomUUID(),
        title: "Brand Rollout & Impact",
        text: "We deliver a fully packaged brand identity ready for every touchpoint digital, print, and beyond ensuring your brand shows up consistently and leaves a lasting impression.",
      },
    ],
  },

  marketingAndGrowth: {
    image1: portfolioMarketing,
    image2: markport,
    title: "Marketing & Growth Portfolio",
    info: {
      client: "India",
    },
    intro:
      "Growth doesn't happen by accident. It's built on the right strategy, the right channels, and relentless execution. At The8verse, we design and run marketing strategies that turn your brand's visibility into qualified leads and measurable revenue.",
    steps: [
      {
        id: crypto.randomUUID(),
        title: "Audience Research & Strategy",
        text: "We analyse your market, competitors, and target audience to build a data-driven marketing strategy that identifies the right channels, messaging, and growth opportunities for your business.",
      },
      {
        id: crypto.randomUUID(),
        title: "Campaign Execution & Management",
        text: "From SEO and paid media to social media and content marketing, we design and execute full-funnel campaigns that drive visibility, generate qualified leads, and convert them into customers.",
      },
      {
        id: crypto.randomUUID(),
        title: "Performance Tracking & Scaling",
        text: "We continuously monitor campaign performance, optimise what works, and scale results turning early wins into sustainable growth and measurable revenue for your business.",
      },
    ],
  },

  mediaAndProduction: {
    image1: Single1Img,
    image2: mediaPortrait,
    title: "Media & Production Portfolio",
    info: {
      client: "India, USA",
    },
    intro:
      "In a world where attention is currency, content is everything. The8verse produces brand films, photography, and digital content that stops the scroll, tells your story, and builds a lasting connection with your audience across every platform.",
    steps: [
      {
        id: crypto.randomUUID(),
        title: "Creative Concept & Pre-Production",
        text: "We develop a compelling creative concept aligned with your brand story and goals planning every detail from scripting and storyboarding to location, talent, and production logistics.",
      },
      {
        id: crypto.randomUUID(),
        title: "Production & Content Creation",
        text: "Our team produces high-impact videos, photography, and branded content that captures attention, communicates your message clearly, and connects with your audience across every platform.",
      },
      {
        id: crypto.randomUUID(),
        title: "Delivery & Channel Optimisation",
        text: "We deliver production-ready assets optimised for every channel ensuring your content performs wherever it appears.",
      },
    ],
  },

  webAndSoftware: {
    image1: techlandscape,
    image2: techportrait,
    title: "Web & Software Portfolio",
    info: {
      client: "India, UAE",
    },
    intro:
      "Your technology should work as hard as your business does. The8verse builds websites, web apps, and custom software that are fast, scalable, and engineered to support your business at every stage from launch to full-scale growth.",
    steps: [
      {
        id: crypto.randomUUID(),
        title: "Discovery & Planning",
        text: "We analyse your business goals, user requirements, and technical needs to define a clear roadmap for building scalable websites, web apps, and custom software solutions.",
      },
      {
        id: crypto.randomUUID(),
        title: "Development & Integration",
        text: "Our team builds high-performance websites, web apps, and custom software, integrating modern technologies for speed, scalability, and seamless functionality across every device.",
      },
      {
        id: crypto.randomUUID(),
        title: "Launch & Optimisation",
        text: "After deployment, we monitor performance, optimise features, and scale the product to ensure long-term reliability and growth.",
      },
    ],
  },
};

export default SinglePortfolioDetails;
