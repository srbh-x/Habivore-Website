const ClapperboardIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="80"
    height="80"
    strokeWidth="0.8"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g>
      <path d="M20.2 6 3 11 2.1 8.6C1.8 7.5 2.4 6.4 3.4 6.1l13.5-4c1.1-0.3 2.2 0.3 2.5 1.3z" />
      <path d="M6.2 5.3 9.3 9.2" />
      <path d="M12.4 3.4l3.1 4" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </g>
    <g transform="translate(0.8,0.8)" opacity="0.23">
      <path d="M20.2 6 3 11 2.1 8.6C1.8 7.5 2.4 6.4 3.4 6.1l13.5-4c1.1-0.3 2.2 0.3 2.5 1.3z" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </g>
    <path
      d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      fill="currentColor"
      opacity="0.04"
    />
  </svg>
);
export const serviceCardData = [
  {
    id: crypto.randomUUID(),
    title: "Branding & Design",
    description:
      "We craft brand identities that build trust, command attention, and scale with your business from logo and visual systems to packaging and brand guidelines.",
    icon: "icon-branding",
    slug: "branding-and-design",
  },
  {
    id: crypto.randomUUID(),
    title: "Web & Software",
    description:
      "We build websites, web apps, and custom software that are fast, scalable, and designed to perform; helping your business operate smarter and grow faster.",
    icon: "icon-web",
    slug: "web-and-software",
  },
  {
    id: crypto.randomUUID(),
    title: "Marketing & Growth",
    description:
      "We drive brand visibility, generate qualified leads, and convert them into revenue through SEO, paid media, and social strategies built around your business goals.",
    icon: "icon-data-analysis-1",
    slug: "marketing-and-growth",
  },
  {
    id: crypto.randomUUID(),
    title: "Media & Production",
    description:
      "From brand films and photography to content that dominates feeds we produce high-impact media that tells your story, builds trust, and drives real engagement.",
    icon: ClapperboardIcon,
    slug: "media-and-production",
  },
];
