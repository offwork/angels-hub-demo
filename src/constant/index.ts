const PER_PAGE_SIZE = 6;
const NEXT = 1;
const PREV = -1;

const CATEGORIES = [
  {
    id: "clneouojbdx3z0bmo4eqamztm",
    name: "News",
    slug: "news",
  },
  {
    id: "clneow5erdz7h0bmk91lb7d2e",
    name: "Press Releases",
    slug: "press-releases",
  },
  {
    id: "clneox1afdxdq0bmot2tklksi",
    name: "Articles",
    slug: "articles",
  },
  {
    id: "clneoy8nrdzd70bl3mqb5jvst",
    name: "Events",
    slug: "events",
  },
];

const JOBS = [
  {
    title: "Sales Specialist - Malta",
    caption: "Hybrid • Contract • February 14, 2024",
    href: "https://www.linkedin.com/company/angelshub/",
    index: 0,
    about: `
## Sales Specialist - Malta

Jotform is a San Francisco-based SaaS company with more than 25 million users worldwide. We are thriving and growing, and we've never needed outside funding. That's because we like keeping things agile, independent and fun. Jotform believes everyone should be able to create their own online forms. Our 10,000+ ready-made form templates, 100+ integrations and more than 380 widgets have made us one of the most popular online form builders for organizations of all sizes — from small businesses to enterprises.

Since our inception in 2006, our mission has been to help users create, manage and share online forms and receive responses in the easiest way possible.

### About the role

As a rapidly growing company, Jotform is seeking a Senior Graphic Designer in our Ankara office, located at a relaxed fun environment in Hacettepe Teknokent.

#### Here's what you will be doing:
- Designing thoughtful user experiences that are functional, usable and beautiful
- Thinking through a workflow and making major, sometimes daring design decisions to reinvent it
- Review and iterate on current designs
- Work closely with product management, front end developers, devOps and other designers
- Design and build new features for Jotform

#### Education & Work Experience & Technical Requirements:
- BA Degree in Graphic Design / Visual Design / A related field or equivalent practical experience
- Excellent English skills
- Openness to feedback
- Proficiency in Adobe Creative Cloud Applications (Photoshop, Illustrator) or Sketch
- Experience in illustration is a plus

#### Personal Specifications/Skills:
- A passion to learn and keep up with the cutting edge technologies
- A maker/builder mentality
- Being obsessively detail oriented
- Ability to work independently with minimal supervision
`,
  },
  {
    title: "Account Manager Role - London",
    caption: "Hybrid • Full-time • February 06, 2024",
    href: "https://www.linkedin.com/company/angelshub/",
    index: 1,
    about: `
## Account Manager Role - London

Jotform is a San Francisco-based SaaS company with more than 25 million users worldwide. We are thriving and growing, and we've never needed outside funding. That's because we like keeping things agile, independent and fun. Jotform believes everyone should be able to create their own online forms. Our 10,000+ ready-made form templates, 100+ integrations and more than 380 widgets have made us one of the most popular online form builders for organizations of all sizes — from small businesses to enterprises.

Since our inception in 2006, our mission has been to help users create, manage and share online forms and receive responses in the easiest way possible.

### About the role

As a rapidly growing company, Jotform is seeking a Senior Graphic Designer in our Ankara office, located at a relaxed fun environment in Hacettepe Teknokent.

#### Here's what you will be doing:
- Designing thoughtful user experiences that are functional, usable and beautiful
- Thinking through a workflow and making major, sometimes daring design decisions to reinvent it
- Review and iterate on current designs
- Work closely with product management, front end developers, devOps and other designers
- Design and build new features for Jotform

#### Education & Work Experience & Technical Requirements:
- BA Degree in Graphic Design / Visual Design / A related field or equivalent practical experience
- Excellent English skills
- Openness to feedback
- Proficiency in Adobe Creative Cloud Applications (Photoshop, Illustrator) or Sketch
- Experience in illustration is a plus

#### Personal Specifications/Skills:
- A passion to learn and keep up with the cutting edge technologies
- A maker/builder mentality
- Being obsessively detail oriented
- Ability to work independently with minimal supervision
`,
  },
  {
    title: "Sales Specialist - London, UK",
    caption: "Hybrid • Full-Time • January 20, 2024",
    href: "https://www.linkedin.com/company/angelshub/",
    index: 2,
    about: `
## Sales Specialist - London, UK

Jotform is a San Francisco-based SaaS company with more than 25 million users worldwide. We are thriving and growing, and we've never needed outside funding. That's because we like keeping things agile, independent and fun. Jotform believes everyone should be able to create their own online forms. Our 10,000+ ready-made form templates, 100+ integrations and more than 380 widgets have made us one of the most popular online form builders for organizations of all sizes — from small businesses to enterprises.

Since our inception in 2006, our mission has been to help users create, manage and share online forms and receive responses in the easiest way possible.

### About the role

As a rapidly growing company, Jotform is seeking a Senior Graphic Designer in our Ankara office, located at a relaxed fun environment in Hacettepe Teknokent.

#### Here's what you will be doing:
- Designing thoughtful user experiences that are functional, usable and beautiful
- Thinking through a workflow and making major, sometimes daring design decisions to reinvent it
- Review and iterate on current designs
- Work closely with product management, front end developers, devOps and other designers
- Design and build new features for Jotform

#### Education & Work Experience & Technical Requirements:
- BA Degree in Graphic Design / Visual Design / A related field or equivalent practical experience
- Excellent English skills
- Openness to feedback
- Proficiency in Adobe Creative Cloud Applications (Photoshop, Illustrator) or Sketch
- Experience in illustration is a plus

#### Personal Specifications/Skills:
- A passion to learn and keep up with the cutting edge technologies
- A maker/builder mentality
- Being obsessively detail oriented
- Ability to work independently with minimal supervision
`,
  },
];

const PLATFORMS = [
  {
    image: "/AllInOneSolutions.svg",
    title: "All-in-one Solution",
  },
  {
    image: "/ConstantUpdates.svg",
    title: "Constant Updates",
  },
  {
    image: "/CustomizableSoftware.svg",
    title: "Customizable Software",
  },
  {
    image: "/IntegratedAntiFraudSolution.svg",
    title: "Integrated Anti-Fraud solution",
  },
  {
    image: "/ExtremeSecurity.svg",
    title: "Extreme Security",
  },
  {
    image: "/CustomerFirstOrientated.svg",
    title: "Customer-First Orientated",
  },
];

const PRODUCTS = [
  {
    description:
      "With innovative technology and highly customizable software, AngelsHub enables operators to maximise freedom in adjusting their sportsbook for an engaging player experience and high wager values.",
    image: "/black-ball.png",
    title: "Sportsbook",
    href: "/sportsbook",
    alt: "Sportsbook",
  },
  {
    description:
      "Our fully-organised, stable, and powerful online casino platform solutions are tailored to meet the specific needs of our clients, ensuring operators have full control over their operations.",
    image: "/black-cip.png",
    title: "Online Casino",
    href: "/online-casino",
    alt: "Online Casino",
  },
  {
    description:
      "Angelshub Crypto Solutions, designed to support all major cryptocurrencies including Bitcoin, Ethereum, Litecoin, Dogecoin, Tether, Bitcoin Cash, Ripple, Binance Coin, Cardano, TRON, and many more.",
    image: "/sportsbook.png",
    title: "Crypto Solutions",
    href: "/crypto-solutions",
    alt: "Crypto Solutions",
  },
  {
    description:
      "AngelsHub provides a modern Affiliate and Agent System designed to give customers complete control over their customer management across multiple languages.",
    image: "/affiliate.png",
    title: "Affiliate and Agent System",
    href: "/affiliate-agent-system",
    alt: "Affiliate and Agent System",
  },
];

const SOLUTIONS = [
  {
    description:
      "AngelsHub's White Label solution operates under a Curacao license, integrates with multiple payment systems, and includes 24/7 support and risk management.",
    image: "/solutions-1.png",
    title: "White Label",
    alt: "White Label Solution",
    href: "/white-label",
    sizes:
      "(min-width: 1280px) 371px, (min-width: 1040px) 286px, (min-width: 640px) 384px, (min-width: 380px) 343px, 100vw",
  },
  {
    description:
      "Our Turnkey Solution comes with support to help you operate under own license. You can benefit from the whole spectrum of our betting and gaming products.",
    image: "/solutions-2.png",
    title: "Turnkey-System",
    alt: "Turnkey System Solution",
    href: "/turnkey-system",
    sizes:
      "(min-width: 1280px) 372px, (min-width: 1040px) 287px, (min-width: 640px) 384px, (min-width: 380px) 343px, 100vw",
  },
  {
    description:
      "We provide a wide range of professional services for our customers, including marketing, customer support, responsible gaming, and payment management.",
    image: "/solutions-3.png",
    title: "Managed Services",
    alt: "Managed Services Solutions",
    href: "/managed-services",
    sizes:
      "(min-width: 1280px) 376px, (min-width: 1040px) 291px, (min-width: 640px) 384px, (min-width: 380px) 343px, 100vw",
  },
];

const PROVIDERS = [
  { image: "/provider-betsoft.png" },
  { image: "/provider-elkstudios.png" },
  { image: "/provider-evolutiongaming.png" },
  { image: "/provider-irondog.png" },
  { image: "/provider-leap.png" },
  { image: "/provider-netent.png" },
  { image: "/provider-playingo.png" },
  { image: "/provider-pragmaticplay.png" },
  { image: "/provider-redtiger.png" },
  { image: "/provider-netent.png" },
  { image: "/provider-evolutiongaming.png" },
  { image: "/provider-pragmaticplay.png" },
  { image: "/provider-irondog.png" },
  { image: "/provider-leap.png" },
  { image: "/provider-betsoft.png" },
  { image: "/provider-redtiger.png" },
  { image: "/provider-elkstudios.png" },
  { image: "/provider-playingo.png" },
  { image: "/provider-leap.png" },
  { image: "/provider-netent.png" },
  { image: "/provider-elkstudios.png" },
  { image: "/provider-playingo.png" },
  { image: "/provider-irondog.png" },
  { image: "/provider-pragmaticplay.png" },
];

const COUNTRIES = [
  {
    name: "Afghanistan",
    flags: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    },
    numericCode: "004",
  },
  {
    name: "Åland Islands",
    flags: {
      svg: "https://flagcdn.com/ax.svg",
      png: "https://flagcdn.com/w320/ax.png",
    },
    numericCode: "248",
  },
  {
    name: "Albania",
    flags: {
      svg: "https://flagcdn.com/al.svg",
      png: "https://flagcdn.com/w320/al.png",
    },
    numericCode: "008",
  },
  {
    name: "Algeria",
    flags: {
      svg: "https://flagcdn.com/dz.svg",
      png: "https://flagcdn.com/w320/dz.png",
    },
    numericCode: "012",
  },
  {
    name: "American Samoa",
    flags: {
      svg: "https://flagcdn.com/as.svg",
      png: "https://flagcdn.com/w320/as.png",
    },
    numericCode: "016",
  },
  {
    name: "Andorra",
    flags: {
      svg: "https://flagcdn.com/ad.svg",
      png: "https://flagcdn.com/w320/ad.png",
    },
    numericCode: "020",
  },
  {
    name: "Angola",
    flags: {
      svg: "https://flagcdn.com/ao.svg",
      png: "https://flagcdn.com/w320/ao.png",
    },
    numericCode: "024",
  },
  {
    name: "Anguilla",
    flags: {
      svg: "https://flagcdn.com/ai.svg",
      png: "https://flagcdn.com/w320/ai.png",
    },
    numericCode: "660",
  },
  {
    name: "Antarctica",
    flags: {
      svg: "https://flagcdn.com/aq.svg",
      png: "https://flagcdn.com/w320/aq.png",
    },
    numericCode: "010",
  },
  {
    name: "Antigua and Barbuda",
    flags: {
      svg: "https://flagcdn.com/ag.svg",
      png: "https://flagcdn.com/w320/ag.png",
    },
    numericCode: "028",
  },
  {
    name: "Argentina",
    flags: {
      svg: "https://flagcdn.com/ar.svg",
      png: "https://flagcdn.com/w320/ar.png",
    },
    numericCode: "032",
  },
  {
    name: "Armenia",
    flags: {
      svg: "https://flagcdn.com/am.svg",
      png: "https://flagcdn.com/w320/am.png",
    },
    numericCode: "051",
  },
  {
    name: "Aruba",
    flags: {
      svg: "https://flagcdn.com/aw.svg",
      png: "https://flagcdn.com/w320/aw.png",
    },
    numericCode: "533",
  },
  {
    name: "Australia",
    flags: {
      svg: "https://flagcdn.com/au.svg",
      png: "https://flagcdn.com/w320/au.png",
    },
    numericCode: "036",
  },
  {
    name: "Austria",
    flags: {
      svg: "https://flagcdn.com/at.svg",
      png: "https://flagcdn.com/w320/at.png",
    },
    numericCode: "040",
  },
  {
    name: "Vietnam",
    flags: {
      svg: "https://flagcdn.com/vn.svg",
      png: "https://flagcdn.com/w320/vn.png",
    },
    numericCode: "704",
  },
  {
    name: "Wallis and Futuna",
    flags: {
      svg: "https://flagcdn.com/wf.svg",
      png: "https://flagcdn.com/w320/wf.png",
    },
    numericCode: "876",
  },
  {
    name: "Western Sahara",
    flags: {
      svg: "https://flagcdn.com/eh.svg",
      png: "https://flagcdn.com/w320/eh.png",
    },
    numericCode: "732",
  },
  {
    name: "Yemen",
    flags: {
      svg: "https://flagcdn.com/ye.svg",
      png: "https://flagcdn.com/w320/ye.png",
    },
    numericCode: "887",
  },
  {
    name: "Zambia",
    flags: {
      svg: "https://flagcdn.com/zm.svg",
      png: "https://flagcdn.com/w320/zm.png",
    },
    numericCode: "894",
  },
  {
    name: "Zimbabwe",
    flags: {
      svg: "https://flagcdn.com/zw.svg",
      png: "https://flagcdn.com/w320/zw.png",
    },
    numericCode: "716",
  },
];

export { CATEGORIES, COUNTRIES, JOBS, NEXT, PER_PAGE_SIZE, PLATFORMS, PREV, PRODUCTS, PROVIDERS, SOLUTIONS };
