export type ContentCategory = "all" | "article" | "podcast" | "talk" | "panel" | "github" | "news"

export interface ContentItem {
  id: string
  category: Exclude<ContentCategory, "all">
  title: string
  description: string
  date: string
  url: string
  publication?: string
  publicationIcon?: string
  thumbnail: string
  stars?: number
  language?: string
  featured?: boolean
  upcoming?: boolean
}

// ── Publication logos (local) ─────────────────────────────────────────────────
const TC = "/logos/tc.webp"
const VB = "/logos/vb.png"
const TNS = "/logos/tns.png"
const LEADDEV = "/logos/leaddev.webp"
const CNBC = "/logos/cnbc.png"
const LINUX = "/logos/linux.png"
const CNN = "/logos/cnn.png"
const GH = "/logos/gh.png"
const LANDSCAPE = "/logos/landscape.png"
const AID = "/logos/aid.png"
const DDF = "/logos/ddf.png"
const ROOTLY = "/logos/rootly.png"
const PCON = "/logos/pcon.png"
const SRECON = "/logos/srecon.webp"
const DDAYS_ICON = "/thumbnails/devopsdays-austin.png"
const FORTUNE = "/logos/fortune.png"
const FORBES = "/logos/forbes.png"
const LEMONDE = "/logos/lemonde.png"
const NYT = "/logos/nyt.png"
const WEF = "/logos/wef.png"
const DICE = "/logos/dice.png"
const CNNMONEY = "/logos/cnnmoney.png"
const HUFFPOST = "/logos/huffpost.png"
const CIO = "/logos/cio.png"
const CHALLENGES = "/logos/challenges.png"
const INCAFRICA = "/logos/incafrica.png"
const TIPSCLEAR = "/logos/tipsclear.png"
const CCN_NEWS = "/logos/ccn.png"

export const contentItems: ContentItem[] = [
  // ── Articles — TechCrunch ──────────────────────────────────────────────────
  {
    id: "tc1",
    category: "article",
    title: "How to push PaaS usage beyond 12-factor apps",
    description:
      "PaaS commands a $170B share of the cloud market, yet manual deployments persist. A practical framework for workload APIs that goes beyond Heroku-style apps.",
    date: "2023-12-10",
    url: "https://techcrunch.com/2023/12/10/how-to-push-paas-usage-beyond-12-factor-apps/",
    publication: "TechCrunch",
    publicationIcon: TC,
    thumbnail: "/thumbnails/paas-12factor.jpg",
  },
  {
    id: "tc2",
    category: "article",
    title: "How to run data on Kubernetes: 6 starting principles",
    description:
      "94% of orgs deploy on Kubernetes, but stateful workloads remain hard. Six principles covering operators, storage classes, StatefulSets, and Day 2 operations.",
    date: "2022-11-25",
    url: "https://techcrunch.com/2022/11/25/how-to-run-data-on-kubernetes-6-starting-principles/",
    publication: "TechCrunch",
    publicationIcon: TC,
    thumbnail: "/thumbnails/kubernetes-data.jpg",
  },
  {
    id: "tc3",
    category: "article",
    title: "6 strategies for running more effective startup board meetings",
    description:
      "Many founders see board meetings as a chore. Communicate between sessions, prepare two-deck formats, debrief employees — here's how to make them actually useful.",
    date: "2021-06-23",
    url: "https://techcrunch.com/2021/06/23/6-strategies-for-running-effective-startup-board-meetings/",
    publication: "TechCrunch",
    publicationIcon: TC,
    thumbnail: "/thumbnails/board-meetings.jpg",
  },
  {
    id: "tc4",
    category: "article",
    title: "For companies that use ML, labeled data is the key differentiator",
    description:
      "Why Tesla leads on ADAS — and what it teaches every company about the strategic value of training data, annotation pipelines, and the $6B labeling market.",
    date: "2021-05-18",
    url: "https://techcrunch.com/2021/05/18/for-companies-that-use-ml-labeled-data-is-the-key-differentiator/",
    publication: "TechCrunch",
    publicationIcon: TC,
    thumbnail: "/thumbnails/ml-labeled-data.jpg",
  },
  {
    id: "tc5",
    category: "article",
    title: "Why education should become more like artificial intelligence",
    description:
      "The case for applying AI-driven personalization to education — adaptive learning paths, competency-based assessment, and project-driven curricula.",
    date: "2016-12-05",
    url: "https://techcrunch.com/2016/12/05/why-education-should-become-more-like-artificial-intelligence/",
    publication: "TechCrunch",
    publicationIcon: TC,
    thumbnail: "/thumbnails/tc-education-ai.jpg",
  },

  // ── Articles — The New Stack ───────────────────────────────────────────────
  {
    id: "tns1",
    category: "article",
    title: "LLMs Broke the SRE Runbook. Now What?",
    description:
      "AI-generated code is outpacing traditional runbooks. How SRE teams are adapting their incident response playbooks for the LLM era.",
    date: "2025-11-05",
    url: "https://thenewstack.io/llms-broke-the-sre-runbook-now-what/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-llms-runbook.jpg",
  },
  {
    id: "tns2",
    category: "article",
    title: "AI-First Platform Engineering: 3 Signals From PlatformCon",
    description:
      "Three emerging patterns from PlatformCon that signal how AI is reshaping internal developer platforms and platform team workflows.",
    date: "2025-08-25",
    url: "https://thenewstack.io/ai-first-platform-engineering-3-signals-from-platformcon/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-ai-platformcon.jpg",
  },
  {
    id: "tns3",
    category: "article",
    title: "Will LLMs and Vibe Coding Fuel a Developer Renaissance?",
    description:
      "Exploring whether AI-assisted coding tools will democratize software development or create new categories of hard-to-debug production issues.",
    date: "2025-07-09",
    featured: true,
    url: "https://thenewstack.io/will-llms-and-vibe-coding-fuel-a-developer-renaissance/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-vibe-coding.jpg",
  },
  {
    id: "tns4",
    category: "article",
    title: "Why Are Agent Protocols Like MCP and A2A Needed?",
    description:
      "Breaking down the Model Context Protocol (MCP) and Agent-to-Agent (A2A) standards — why interoperability matters for the next wave of AI agents.",
    date: "2025-05-21",
    featured: true,
    url: "https://thenewstack.io/why-are-agent-protocols-like-mcp-and-a2a-needed/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-agent-protocols.jpg",
  },
  {
    id: "tns5",
    category: "article",
    title: "Vibe Coding Is Here — But Are You Ready for Incident Vibing?",
    description:
      "If developers are vibe coding, SREs are now incident vibing. What happens when AI-generated code meets production reality.",
    date: "2025-03-19",
    url: "https://thenewstack.io/vibe-coding-is-here-but-are-you-ready-for-incident-vibing/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-incident-vibing.jpg",
  },
  {
    id: "tns6",
    category: "article",
    title: "Modern PostgreSQL Deployment: 3 Cloud Native Approaches You Should Know",
    description:
      "Comparing three cloud native approaches to deploying and managing PostgreSQL on Kubernetes — operators, managed services, and hybrid models.",
    date: "2025-01-11",
    url: "https://thenewstack.io/modern-postgresql-deployment-3-cloud-native-approaches-you-should-know/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-postgresql.jpg",
  },
  {
    id: "tns7",
    category: "article",
    title: "Backstage Multicluster UI for Cloud Foundry and Kubernetes",
    description:
      "Building a unified developer portal with Backstage that spans both Cloud Foundry and Kubernetes clusters.",
    date: "2024-11-16",
    url: "https://thenewstack.io/backstage-multicluster-ui-for-cloud-foundry-and-kubernetes/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-backstage.jpg",
  },
  {
    id: "tns8",
    category: "article",
    title: "Boost Your Shipping Velocity With Argo and Buildpacks",
    description:
      "Combining Argo Workflows with Cloud Native Buildpacks to create a fast, repeatable CI/CD pipeline that eliminates Dockerfile maintenance.",
    date: "2024-11-11",
    url: "https://thenewstack.io/boost-shipping-velocity-with-argo-and-buildpacks/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-argo-buildpacks.jpg",
  },
  {
    id: "tns9",
    category: "article",
    title: "3 Ways To Improve Your Container Build Process",
    description:
      "Practical techniques to speed up container builds, reduce image size, and improve reproducibility across development and CI environments.",
    date: "2024-07-22",
    url: "https://thenewstack.io/3-ways-to-improve-your-container-build-process/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-container-build.jpg",
  },
  {
    id: "tns10",
    category: "article",
    title: "Streamlined APM Integration in Cloud Native Buildpacks",
    description:
      "How to embed application performance monitoring directly into your buildpack pipeline without modifying application code.",
    date: "2024-06-11",
    url: "https://thenewstack.io/streamlined-apm-integration-in-cloud-native-buildpacks/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-apm-buildpacks.jpg",
  },
  {
    id: "tns11",
    category: "article",
    title: "Deploy Multilanguage Apps to Kubernetes with Open Source Korifi",
    description:
      "Using Korifi to deploy polyglot applications to Kubernetes with the simplicity of Cloud Foundry's cf push experience.",
    date: "2023-09-15",
    url: "https://thenewstack.io/deploy-multilanguage-apps-to-kubernetes-with-open-source-korifi/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-korifi.jpg",
  },
  {
    id: "tns12",
    category: "article",
    title: "How to Containerize a Python Application with Paketo Buildpacks",
    description:
      "Step-by-step guide to containerizing Python apps using Paketo Buildpacks — no Dockerfile required.",
    date: "2023-05-29",
    url: "https://thenewstack.io/how-to-containerize-a-python-application-with-packeto-buildpacks/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-paketo-python.jpg",
  },
  {
    id: "tns13",
    category: "article",
    title: "4 Ways to Enhance Your Dockerfiles",
    description:
      "Practical tips for writing better Dockerfiles — multi-stage builds, layer caching, security scanning, and image optimization.",
    date: "2023-05-04",
    url: "https://thenewstack.io/four-ways-to-enhance-your-dockerfiles/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-dockerfiles.jpg",
  },
  {
    id: "tns14",
    category: "article",
    title: "Shift-Left Testing Applied to Kubernetes",
    description:
      "Moving Kubernetes configuration validation and testing earlier in the development cycle to catch issues before they reach production.",
    date: "2022-07-12",
    url: "https://thenewstack.io/shift-left-testing-applied-to-kubernetes/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-shift-left.jpg",
  },
  {
    id: "tns15",
    category: "article",
    title: "Stateful Workloads on Kubernetes Are a Thing, but There Is a Twist",
    description:
      "Running databases and stateful services on Kubernetes is possible — but requires understanding operators, persistent volumes, and Day 2 operations.",
    date: "2022-06-27",
    url: "https://thenewstack.io/stateful-workloads-on-kubernetes-are-a-thing-but-there-is-a-twist/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-stateful-k8s.jpg",
  },
  {
    id: "tns16",
    category: "article",
    title: "With AI Now a Commodity, the Speed of Iteration Is the Next Challenge",
    description:
      "AI models are becoming commoditized. The competitive advantage now lies in how fast teams can iterate on data, features, and deployment pipelines.",
    date: "2021-06-08",
    url: "https://thenewstack.io/with-ai-now-a-commodity-the-speed-of-iteration-is-the-next-challenge/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-ai-commodity.jpg",
  },
  {
    id: "tns17",
    category: "article",
    title: "What Is MLOps?",
    description:
      "A primer on MLOps — the practices, tools, and culture for managing machine learning models in production at scale.",
    date: "2021-03-19",
    url: "https://thenewstack.io/what-is-mlops/",
    publication: "The New Stack",
    publicationIcon: TNS,
    thumbnail: "/thumbnails/tns-mlops.jpg",
  },

  // ── Articles — VentureBeat ─────────────────────────────────────────────────
  {
    id: "vb1",
    category: "article",
    title: "Dev bootcamp shuttering shows challenges of teaching coal miners to code",
    description:
      "The closure of Dev Bootcamp exposes the gap between coding bootcamp hype and the reality of building sustainable technical education at scale.",
    date: "2017-07-25",
    url: "https://venturebeat.com/ai/dev-bootcamp-shuttering-shows-challenges-of-teaching-coal-miners-to-code",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/vb-dev-bootcamp.jpg",
  },
  {
    id: "vb2",
    category: "article",
    title: "Help wanted: Americans don't need more degrees, they need training",
    description:
      "College degrees are an expensive, slow path to employment. The case for competency-based, project-driven technical education that scales.",
    date: "2017-08-01",
    url: "https://venturebeat.com/ai/help-wanted-americans-dont-need-more-degrees-they-need-training",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/vb-help-wanted.jpg",
  },
  {
    id: "vb3",
    category: "article",
    title: "Silicon Valley sucks at training software engineers — and why it matters",
    description:
      "The Bay Area leads the world in software but has failed to build scalable, accessible pipelines for the next generation of engineers.",
    date: "2017-11-01",
    url: "https://venturebeat.com/ai/silicon-valley-sucks-at-training-software-engineers-and-why-it-matters",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/vb-sv-training.jpg",
  },
  {
    id: "vb4",
    category: "article",
    title: "Improving tech education doesn't start with tech",
    description:
      "Why fixing technical education requires addressing systemic issues in access, pedagogy, and workforce alignment before adding more technology.",
    date: "2017-09-15",
    url: "https://venturebeat.com/technology/improving-tech-education-doesnt-start-with-tech",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/vb-tech-education.jpg",
  },
  {
    id: "vb5",
    category: "article",
    title: "Apprenticeships could solve tech's diversity problem",
    description:
      "How apprenticeship models borrowed from traditional trades could create more diverse, accessible pathways into the tech industry.",
    date: "2018-01-15",
    url: "https://venturebeat.com/ai/apprenticeships-could-solve-techs-diversity-problem",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/vb-apprenticeships.jpg",
  },
  {
    id: "vb6",
    category: "article",
    title: "Dear President Trump: Those jobs aren't coming back — and why would we want them to?",
    description:
      "Automation is reshaping the workforce. Instead of bringing back old jobs, the focus should be on training workers for the jobs of the future.",
    date: "2017-06-01",
    url: "https://venturebeat.com/ai/dear-president-trump-those-jobs-arent-coming-back-and-why-would-we-want-them-to",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/vb-trump-jobs.jpg",
  },
  {
    id: "vb7",
    category: "article",
    title: "Filling Amazon's 50,000 jobs means finding new ways to train software engineers in the U.S.",
    description:
      "Amazon's massive hiring push highlights the shortage of trained software engineers and the need for alternative education pathways.",
    date: "2017-10-01",
    url: "https://venturebeat.com/technology/filling-amazons-50000-jobs-means-finding-new-ways-to-train-software-engineers-in-the-u-s",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/vb-amazon-jobs.jpg",
  },
  {
    id: "vb8",
    category: "article",
    title: "Apprenticeships could solve tech's diversity problem",
    description:
      "The case for tech apprenticeships as a scalable solution to diversity challenges in the software industry.",
    date: "2018-02-01",
    url: "https://venturebeat.com/technology/apprenticeships-could-solve-techs-diversity-problem",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/vb-apprenticeships.jpg",
  },

  // ── Articles — LeadDev ─────────────────────────────────────────────────────
  {
    id: "ld1",
    category: "article",
    featured: true,
    title: "Is AI-assisted coding an incident magnet?",
    description:
      "AI-generated code ships faster but introduces subtle bugs that are harder to trace. What engineering leaders need to know about the reliability trade-offs.",
    date: "2025-05-15",
    url: "https://leaddev.com/software-quality/ai-assisted-coding-incident-magnet",
    publication: "LeadDev",
    publicationIcon: LEADDEV,
    thumbnail: "/thumbnails/leaddev-ai-coding.jpg",
  },

  // ── Articles — CNBC ────────────────────────────────────────────────────────
  {
    id: "cnbc1",
    category: "article",
    title: "Forget free college. The future of the US workforce depends on a higher education worth paying for",
    description:
      "Why making college free misses the point — the real challenge is making education relevant, practical, and aligned with workforce needs.",
    date: "2019-11-08",
    url: "https://www.cnbc.com/2019/11/08/forget-free-college-workforce-depends-on-education-worth-paying-for.html",
    publication: "CNBC",
    publicationIcon: CNBC,
    thumbnail: "/thumbnails/cnbc-education.jpg",
  },

  // ── Articles — Linux.com ───────────────────────────────────────────────────
  {
    id: "lx1",
    category: "article",
    title: "DevOps Students Learn the Value of Uptime With 3 a.m. Calls",
    description:
      "Teaching DevOps through real-world on-call rotations — how students learn the value of monitoring, alerting, and system reliability the hard way.",
    date: "2016-06-16",
    url: "https://www.linux.com/news/devops-students-learn-value-uptime-3-am-calls/",
    publication: "Linux.com",
    publicationIcon: LINUX,
    thumbnail: "/thumbnails/linux-devops-students.jpg",
  },
  {
    id: "lx2",
    category: "article",
    title: "How DevOps Failed 60K Users",
    description:
      "A postmortem on a DevOps failure that affected 60,000 users — lessons in monitoring gaps, deployment practices, and incident response.",
    date: "2016-06-23",
    url: "https://www.linux.com/news/how-devops-failed-60k-users/",
    publication: "Linux.com",
    publicationIcon: LINUX,
    thumbnail: "/thumbnails/linux-devops-failed.jpg",
  },
  {
    id: "lx3",
    category: "article",
    title: "Create an Open Source AWS S3 Server",
    description:
      "A hands-on guide to setting up your own S3-compatible object storage server using open source tools.",
    date: "2016-09-21",
    url: "https://www.linux.com/topic/cloud/create-open-source-aws-s3-server/",
    publication: "Linux.com",
    publicationIcon: LINUX,
    thumbnail: "/thumbnails/linux-s3-server.jpg",
  },
  {
    id: "lx4",
    category: "article",
    title: "First 5 Commands When I Connect on a Linux Server",
    description:
      "The essential first five commands every sysadmin runs when SSH-ing into a Linux server — from uptime to disk usage.",
    date: "2016-09-26",
    url: "https://www.linux.com/training-tutorials/first-5-commands-when-i-connect-linux-server/",
    publication: "Linux.com",
    publicationIcon: LINUX,
    thumbnail: "/thumbnails/linux-5-commands.jpg",
  },
  {
    id: "lx5",
    category: "article",
    title: "What do Ubuntu and NE-YO have in common? A Coding Summer Camp!",
    description:
      "How a coding summer camp brought together Ubuntu, Grammy-winning artist NE-YO, and aspiring young engineers.",
    date: "2017-05-30",
    url: "https://www.linux.com/training-tutorials/what-do-ubuntu-and-ne-yo-have-common-coding-summer-camp/",
    publication: "Linux.com",
    publicationIcon: LINUX,
    thumbnail: "/thumbnails/linux-ubuntu-neyo.jpg",
  },

  // ── Articles — CloudNativeNow ──────────────────────────────────────────────
  {
    id: "cnn1",
    category: "article",
    title: "kpack: Kubernetes-Native Build Automation With CI/CD Integration",
    description:
      "Using kpack to automate container image builds natively on Kubernetes with seamless CI/CD pipeline integration.",
    date: "2025-04-04",
    url: "https://cloudnativenow.com/topics/containers/kpack-kubernetes-native-build-automation-with-ci-cd-integration/",
    publication: "CloudNativeNow",
    publicationIcon: CNN,
    thumbnail: "/thumbnails/cnn-kpack.jpg",
  },
  {
    id: "cnn2",
    category: "article",
    title: "Uplevelling Your Container Lifecycle Management",
    description:
      "Best practices for managing the full container lifecycle — from build to runtime to decommission.",
    date: "2025-03-19",
    url: "https://cloudnativenow.com/topics/containers/article-1-uplevelling-your-container-lifecycle-management/",
    publication: "CloudNativeNow",
    publicationIcon: CNN,
    thumbnail: "/thumbnails/cnn-container-lifecycle.jpg",
  },
  {
    id: "cnn3",
    category: "article",
    title: "Dependency and Runtime Management",
    description:
      "Strategies for managing dependencies and runtimes in containerized environments — keeping images secure and up to date.",
    date: "2025-03-19",
    url: "https://cloudnativenow.com/topics/containers/article-2-dependency-and-runtime-management/",
    publication: "CloudNativeNow",
    publicationIcon: CNN,
    thumbnail: "/thumbnails/cnn-dependency-mgmt.jpg",
  },
  {
    id: "cnn4",
    category: "article",
    title: "Buildpacks Optimization, Portability and Lifecycle",
    description:
      "Advanced buildpacks techniques for optimizing build times, ensuring portability across clouds, and managing lifecycle updates.",
    date: "2025-03-19",
    url: "https://cloudnativenow.com/contributed-content/article-3-buildpacks-optimization-portability-and-lifecycle/",
    publication: "CloudNativeNow",
    publicationIcon: CNN,
    thumbnail: "/thumbnails/cnn-buildpacks-opt.jpg",
  },
  {
    id: "cnn5",
    category: "article",
    title: "How to Streamline the Java Application Containerization Process",
    description:
      "Simplifying Java app containerization with buildpacks — skip the Dockerfile complexity and let the platform handle the build.",
    date: "2024-01-30",
    url: "https://cloudnativenow.com/features/how-to-streamline-the-java-application-containerization-process/",
    publication: "CloudNativeNow",
    publicationIcon: CNN,
    thumbnail: "/thumbnails/cnn-java-container.jpg",
  },
  {
    id: "cnn6",
    category: "article",
    title: "Scaling on Kubernetes With Open Source Korifi",
    description:
      "How Korifi brings Cloud Foundry's developer experience to Kubernetes, enabling simple app scaling without deep K8s knowledge.",
    date: "2023-10-26",
    url: "https://cloudnativenow.com/features/scaling-on-kubernetes-with-open-source-korifi/",
    publication: "CloudNativeNow",
    publicationIcon: CNN,
    thumbnail: "/thumbnails/cnn-korifi.jpg",
  },
  {
    id: "cnn7",
    category: "article",
    title: "3 Ways to Offset Kubernetes Complexity",
    description:
      "Practical strategies to reduce Kubernetes operational complexity — from platform abstractions to developer self-service portals.",
    date: "2023-05-18",
    url: "https://cloudnativenow.com/features/3-ways-to-offset-kubernetes-complexity/",
    publication: "CloudNativeNow",
    publicationIcon: CNN,
    thumbnail: "/thumbnails/cnn-k8s-complexity.jpg",
  },
  {
    id: "cnn8",
    category: "article",
    title: "Overcoming Kubernetes Namespace Limitations",
    description:
      "Kubernetes namespaces have limits. How to work around them for multi-tenant clusters, resource isolation, and organizational scaling.",
    date: "2023-05-02",
    url: "https://cloudnativenow.com/features/overcoming-kubernetes-namespace-limitations/",
    publication: "CloudNativeNow",
    publicationIcon: CNN,
    thumbnail: "/thumbnails/cnn-k8s-namespaces.jpg",
  },

  // ── Talks ──────────────────────────────────────────────────────────────────
  {
    id: "t-google-sre-nyc",
    category: "talk",
    title: "Google SRE NYC Tech Talk — On-Call Burnout & On-Call Health",
    description:
      "The science behind responder overload and introducing On-Call Health, an open-source tool for detecting incident responder fatigue. At Google NYC Pier 57.",
    date: "2026-03-10",
    url: "https://www.meetup.com/new-york-site-reliability-engineering-tech-talks/events/313566093/",
    publication: "Google SRE NYC",
    thumbnail: "/thumbnails/google-SRE-events.png",
    upcoming: true,
  },
  {
    id: "t-aisec",
    category: "talk",
    title: "AI Security Demo Night w/ Rootly AI, Okta, Panther, Tailscale & More",
    description:
      "Live demos at Okta HQ in San Francisco — presenting Rootly AI alongside cybersecurity startups tackling identity, endpoint security, and threat response.",
    date: "2025-07-22",
    url: "https://lu.ma/50gp38l1",
    publication: "AI Security Demo Night",
    thumbnail: "/thumbnails/luma-ai-security.jpg",
  },
  {
    id: "t0",
    category: "talk",
    title: "OpenClaw Demo Night w/ Rootly AI, Convex, Sentry & DigitalOcean",
    description:
      "An evening of AI demos and networking in Toronto — presenting Rootly AI alongside teams from Sentry, Red Brick Labs, Convex, and DigitalOcean.",
    date: "2026-02-11",
    url: "https://lu.ma/j72xad3n",
    publication: "OpenClaw",
    thumbnail: "/thumbnails/luma-openclaw.png",
  },
  {
    id: "t1",
    category: "talk",
    title: "From Vibes to Outages: Riding the AI Code Wave",
    description:
      "AI-assisted coding is exploding — but acceleration doesn't mean reliability. Real examples of hard-to-trace LLM bugs, hallucinated dependencies, and operational fallout for lean SRE teams.",
    date: "2025-10-08",
    url: "https://www.usenix.org/conference/srecon25emea/presentation/kalache",
    publication: "SREcon EMEA 2025",
    publicationIcon: SRECON,
    thumbnail: "/thumbnails/srecon-talk-photo.png",
  },
  {
    id: "t2",
    category: "talk",
    title: "From hype to impact: How AI is reshaping platform engineering",
    description:
      "Moving past the buzzwords — where AI is actually changing developer workflows, internal developer portals, and what it means for platform teams.",
    date: "2024-06-01",
    url: "https://www.youtube.com/watch?v=KPkiHBkAO3Y",
    publication: "PlatformCon",
    publicationIcon: PCON,
    thumbnail: "/thumbnails/yt-KPkiHBkAO3Y.jpg",
  },
  {
    id: "t3",
    category: "talk",
    title: "AI-Driven Incident Resolution — Hype or Reality",
    description:
      "A grounded look at what LLMs can and can't do in an incident response workflow today, drawn from real production experiments at Rootly AI Labs.",
    date: "2024-05-01",
    url: "https://www.youtube.com/watch?v=LzeeRjy-p9g",
    publication: "DevOpsDays Austin",
    publicationIcon: DDAYS_ICON,
    thumbnail: "/thumbnails/yt-LzeeRjy-p9g.jpg",
  },
  {
    id: "t4",
    category: "talk",
    title: "Introducing Canyon — an AI for developer self-service",
    description:
      "Canyon lets developers provision resources, troubleshoot issues, and interact with internal tooling via natural-language prompts.",
    date: "2025-01-01",
    url: "https://www.youtube.com/live/uZsnfVZ8XCc",
    publication: "Platform Engineering",
    thumbnail: "/thumbnails/yt-uZsnfVZ8XCc.jpg",
  },
  {
    id: "t5",
    category: "talk",
    title: "Life-Long Learning in the 4th Industrial Revolution",
    description:
      "UNESCO International Youth Conference keynote on why education must shift from memorization to problem-solving, critical thinking, and collaboration.",
    date: "2020-12-22",
    url: "https://blog.holbertonschool.com/unesco-talk-life-long-learning-in-the-4th-industrial-revolution/",
    publication: "UNESCO",
    thumbnail: "/thumbnails/unesco-sylvain-kalache-holberton.jpg",
  },
  {
    id: "t6",
    category: "talk",
    title: "An Education for the 4th Industrial Revolution",
    description:
      "How project-based, peer-driven education models are preparing the next generation of engineers for a rapidly changing world.",
    date: "2019-06-01",
    url: "https://www.sylvainkalache.com/",
    publication: "StartSe",
    thumbnail: "/thumbnails/startse-talk.jpg",
  },
  {
    id: "t7",
    category: "talk",
    title: "New Societies Require a New Skills-Oriented Pedagogy",
    description:
      "Inter-American Development Bank talk on rethinking pedagogy to focus on skills over credentials in the modern economy.",
    date: "2019-12-01",
    url: "https://vimeo.com/386315046",
    publication: "Inter-American Development Bank",
    thumbnail: "/thumbnails/idb-talk.png",
  },
  {
    id: "t8",
    category: "talk",
    title: "Transforming Education for the Next Generation of Software Engineers",
    description:
      "DockerCon talk on how alternative education models are reshaping the pipeline of software engineering talent.",
    date: "2019-05-01",
    url: "https://www.sylvainkalache.com/",
    publication: "DockerCon",
    thumbnail: "/thumbnails/dockercon2019.png",
  },
  {
    id: "t9",
    category: "talk",
    title: "A Different Model for Developing Software Engineers",
    description:
      "Nexus conference talk on peer-learning, project-based curricula, and why the traditional CS degree model needs disruption.",
    date: "2018-06-01",
    url: "https://www.youtube.com/watch?v=0wGT3CLKTRg",
    publication: "Nexus",
    thumbnail: "/thumbnails/yt-0wGT3CLKTRg.jpg",
  },
  {
    id: "t10",
    category: "talk",
    title: "Show Me the Money: Is Lowering Costs in Higher Education an Economic Imperative?",
    description:
      "ASU GSV Summit panel on the economics of higher education and whether cost reduction is essential for the future of workforce development.",
    date: "2019-04-01",
    url: "https://www.youtube.com/watch?v=nXD79-o5Uf4",
    publication: "ASU GSV Summit",
    thumbnail: "/thumbnails/yt-nXD79-o5Uf4.jpg",
  },

  // ── Panel Moderation ────────────────────────────────────────────────────────
  {
    id: "p-dev-renaissance",
    category: "panel",
    title: "How AI is Fueling the Developer Renaissance",
    description:
      "Panel at the AWS GenAI Loft with leaders from a16z, AWS, Dagger, Braintrust, Baseten, and Arize AI on how AI is transforming developer workflows.",
    date: "2025-06-05",
    url: "https://lu.ma/ki58hev3",
    publication: "Rootly AI Labs",
    publicationIcon: ROOTLY,
    thumbnail: "/thumbnails/ACR_2588.jpg",
  },
  {
    id: "p-mcps",
    category: "panel",
    title: "MCPs and the Next Wave of Reliability w/ Rootly AI, WorkOS, Block, Microsoft & Groq",
    description:
      "Panel at the AWS GenAI Loft in San Francisco on MCPs, incident automation, observability, and generative AI tooling for reliability.",
    date: "2025-08-28",
    url: "https://lu.ma/fucyjy7f",
    publication: "Rootly AI Labs",
    publicationIcon: ROOTLY,
    thumbnail: "/thumbnails/luma-mcps-reliability.jpg",
  },
  {
    id: "p-frontiers",
    category: "panel",
    title: "Frontiers of AI: Building with Rootly AI, Zscaler, CircleCI, Fireworks AI & Google DeepMind",
    description:
      "Panel at Google HQ with 300+ attendees exploring real-world Gemini models, reinforcement learning, next-gen agent systems, and AI reliability.",
    date: "2025-07-25",
    url: "https://lu.ma/0nxup545",
    publication: "Rootly AI Labs",
    publicationIcon: ROOTLY,
    thumbnail: "/thumbnails/ACR_1257.jpg",
  },
  {
    id: "p-rt-ai",
    category: "panel",
    title: "Rootly Roundtable: The State of AI in Incident Management",
    description:
      "Invite-only roundtable examining AI's role in incident response — separating practical applications from hype with industry leaders.",
    date: "2025-03-06",
    url: "https://lu.ma/march_rootly_roundtable_2025",
    publication: "Rootly",
    publicationIcon: ROOTLY,
    thumbnail: "/thumbnails/luma-rootly-ai-im.png",
  },
  {
    id: "p-rt-teams",
    category: "panel",
    title: "Rootly Roundtable: Centralized vs. Distributed Incident Teams",
    description:
      "Invite-only roundtable comparing centralized specialist responders with distributed on-call models — which strategy works for your org.",
    date: "2025-05-07",
    url: "https://lu.ma/5pifapnu",
    publication: "Rootly",
    publicationIcon: ROOTLY,
    thumbnail: "/thumbnails/luma-rootly-central-dist.png",
  },
  {
    id: "p0",
    category: "panel",
    title: "Rootly Roundtable: From Weak Signals to Confident Fixes",
    description:
      "Invite-only roundtable on filtering alert noise, enriching alerts with automated ownership context, and streamlining bug validation workflows.",
    date: "2025-06-18",
    url: "https://lu.ma/aq5mp94m",
    publication: "Rootly",
    publicationIcon: ROOTLY,
    thumbnail: "/thumbnails/luma-rootly-roundtable.png",
  },
  {
    id: "p1",
    category: "panel",
    title: "The Future of AI-Driven Reliability",
    description:
      "Panel with leaders from a16z, Y Combinator, and Google Cloud on how MCP servers and agent-to-agent communication are revolutionizing developer tools. Demos from Anthropic, Sentry, Postman, and Browserbase.",
    date: "2025-04-24",
    url: "https://www.youtube.com/watch?v=6PpsfQXPFgI",
    publication: "Rootly AI Labs",
    publicationIcon: ROOTLY,
    thumbnail: "/thumbnails/ACR_9054.jpg",
  },
  {
    id: "p3",
    category: "panel",
    title: "AI Meets Reliability",
    description:
      "Panel exploring AI-driven automation and observability with leaders from NVIDIA, OpenAI, Baseten, Replit, and Weights & Biases on scaling operations and reducing MTTR.",
    date: "2025-09-23",
    url: "https://luma.com/hvb2yifj",
    publication: "Rootly AI Labs",
    publicationIcon: ROOTLY,
    thumbnail: "/thumbnails/ACR_3322.jpg",
  },

  // ── Podcasts — The Landscape ───────────────────────────────────────────────
  {
    id: "tl1",
    category: "podcast",
    title: "Half of Kubernetes Clusters Are About to Lose Security Updates",
    description:
      "A deep dive into the Kubernetes support lifecycle and what it means for the massive number of clusters running end-of-life versions.",
    date: "2026-01-29",
    url: "https://thelandsca.pe/2026/01/29/half-of-kubernetes-clusters-are-about-to-lose-security-updates/",
    publication: "The Landscape",
    publicationIcon: LANDSCAPE,
    thumbnail: "/thumbnails/tl-k8s-security.jpg",
  },
  {
    id: "tl3",
    category: "podcast",
    title: "Kubernetes 1.34: Security, Performance, and DRA Go GA",
    description:
      "Release lead Vyom Yadav unpacks 58+ enhancements: DRA GA for GPU workloads, mutating admission policies, and major API server performance gains.",
    date: "2025-10-15",
    url: "https://thelandsca.pe/2025/10/15/kubernetes-1-34-security-performance-and-dra-go-ga",
    publication: "The Landscape",
    publicationIcon: LANDSCAPE,
    thumbnail: "/thumbnails/kubernetes-134.png",
  },
  {
    id: "tl5",
    category: "podcast",
    title: "Harbor: the artifacts registry",
    description:
      "Harbor maintainer Vadim Bauer walks through container image management, OCI artifact storage, replication for disaster recovery, and storing AI models.",
    date: "2024-09-17",
    url: "https://thelandsca.pe/2024/09/17/harbor-the-artifacts-registry",
    publication: "The Landscape",
    publicationIcon: LANDSCAPE,
    thumbnail: "/thumbnails/harbor-podcast.jpg",
  },

  // ── Podcasts — Adventures in DevOps ────────────────────────────────────────
  {
    id: "aid1",
    category: "podcast",
    title: "Incident Vibing: The Self-Healing System",
    description:
      "Tracing the arc from ingesting logs at LinkedIn/SlideShare to LLM-driven RCA today. How fine-tuning, MCP, and incident vibing are reshaping SRE.",
    date: "2025-04-23",
    url: "https://adventuresindevops.com/episodes/self-healing-systems",
    publication: "Adventures in DevOps",
    publicationIcon: AID,
    thumbnail: "/thumbnails/self-healing-systems.png",
  },

  // ── Podcasts — Data Defenders Forum ────────────────────────────────────────
  {
    id: "ddf1",
    category: "podcast",
    title: "Navigating DORA: A Guide to the EU's Digital Operational Resilience Act",
    description:
      "Breaking down the EU's Digital Operational Resilience Act — what it means for financial services and tech companies operating in Europe.",
    date: "2025-04-08",
    url: "https://datadefendersforum.com/2025/04/08/navigating-dora-a-guide-to-the-eus-digital-operational-resilience-act/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-dora.jpg",
  },
  {
    id: "ddf2",
    category: "podcast",
    title: "The Changing Face of Election Security",
    description:
      "How election infrastructure security is evolving — from paper ballots to digital voting systems and the role of data compliance.",
    date: "2024-11-03",
    url: "https://datadefendersforum.com/2024/11/03/the-changing-face-of-electrion-security/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-election-security.jpg",
  },
  {
    id: "ddf3",
    category: "podcast",
    title: "APRA (American Privacy Rights Act) Explained",
    description:
      "A walkthrough of the American Privacy Rights Act — its scope, requirements, and implications for tech companies handling user data.",
    date: "2024-05-29",
    url: "https://datadefendersforum.com/2024/05/29/apra-american-privacy-rights-act-explained/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-apra.jpg",
  },
  {
    id: "ddf4",
    category: "podcast",
    title: "EU AI Act Secrets Revealed",
    description:
      "What the EU AI Act actually requires — risk classifications, compliance timelines, and what it means for AI-driven products.",
    date: "2024-05-15",
    url: "https://datadefendersforum.com/2024/05/15/eu-ai-act-secrets-revealed/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-eu-ai-act.jpg",
  },
  {
    id: "ddf5",
    category: "podcast",
    title: "Intelligent Document Processing Compliance, from Stone Tablets to Digital Docs",
    description:
      "The evolution of document processing compliance — from physical records to AI-powered intelligent document processing systems.",
    date: "2024-05-08",
    url: "https://datadefendersforum.com/2024/05/08/intelligent-document-processing-compliance-from-stone-tablets-to-digital-docs/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-document-processing.jpg",
  },
  {
    id: "ddf6",
    category: "podcast",
    title: "Getting started with Platform Engineering security and compliance",
    description:
      "How platform engineering teams can embed security and compliance into their internal developer platforms from day one.",
    date: "2024-03-18",
    url: "https://datadefendersforum.com/2024/03/18/getting-started-with-platform-engineering-security-and-compliance/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-platform-security.jpg",
  },
  {
    id: "ddf7",
    category: "podcast",
    title: "Turn data security & compliance into a business advantage",
    description:
      "How forward-thinking companies are turning data security and compliance requirements into competitive advantages.",
    date: "2023-12-13",
    url: "https://datadefendersforum.com/2023/12/13/turn-data-security-compliance-into-a-business-advantage/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-compliance-advantage.jpg",
  },
  {
    id: "ddf8",
    category: "podcast",
    title: "Navigating LLMs challenges in data security & compliance",
    description:
      "The unique data security and compliance challenges that large language models introduce — from training data to inference outputs.",
    date: "2023-10-03",
    url: "https://datadefendersforum.com/2023/10/03/navigating-llms-challenges-in-data-security-compliance/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-llms-security.jpg",
  },
  {
    id: "ddf9",
    category: "podcast",
    title: "No US SaaS for European businesses?",
    description:
      "The growing tension between US SaaS providers and European data sovereignty requirements — what it means for cross-Atlantic business.",
    date: "2023-07-20",
    url: "https://datadefendersforum.com/2023/07/20/no-us-saas-for-european-businesses/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-us-saas-europe.jpg",
  },
  {
    id: "ddf10",
    category: "podcast",
    title: "Private SaaS: a new gold standard?",
    description:
      "Exploring the rise of private SaaS deployments as a response to data sovereignty concerns and enterprise security requirements.",
    date: "2023-05-24",
    url: "https://datadefendersforum.com/2023/05/24/private-saas-a-new-gold-standard-2380/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-private-saas.jpg",
  },
  {
    id: "ddf11",
    category: "podcast",
    title: "How does data security impact open-source projects?",
    description:
      "The intersection of data security practices and open-source development — challenges, best practices, and community governance.",
    date: "2023-03-15",
    url: "https://datadefendersforum.com/2023/03/15/how-data-security-impacts-open-source-projects/",
    publication: "Data Defenders Forum",
    publicationIcon: DDF,
    thumbnail: "/thumbnails/ddf-data-security-oss.jpg",
  },

  // ── Podcasts — Humans of Reliability ───────────────────────────────────────
  {
    id: "hor1", category: "podcast", title: "Julien Simon — VP and Chief Evangelist", description: "A conversation about developer advocacy, AI evangelism, and building reliable systems at scale.", date: "2025-11-19", url: "https://rootly.com/humans-of-reliability/julien-simon", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-julien-simon.jpg",
  },
  {
    id: "hor2", category: "podcast", title: "Conor Bronsdon — Head of Content at Galileo", description: "Developer awareness, content strategy, and the human side of reliability engineering.", date: "2025-11-05", url: "https://rootly.com/humans-of-reliability/conor-brondson", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-conor-brondson.jpg",
  },
  {
    id: "hor3", category: "podcast", title: "Rob Zuber — CTO at CircleCI", description: "The end of good code, AI throughput, and what reliability means at CI/CD scale.", date: "2025-09-10", url: "https://rootly.com/humans-of-reliability/the-end-of-good-code-ai-throughput-and-reliability-with-circleci-cto-rob-zuber", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-the-end-of-good-code-ai-throughput-and-reliability-with-circleci-cto-rob-zuber.jpg",
  },
  {
    id: "hor4", category: "podcast", title: "Shery Brauner — SVP of Razor Group", description: "Leading engineering at scale in e-commerce aggregation and the operational challenges that come with it.", date: "2025-08-20", url: "https://rootly.com/humans-of-reliability/shery-brauner", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-shery-brauner.jpg",
  },
  {
    id: "hor5", category: "podcast", title: "Brian Shaw — SVP of Infrastructure and Core Banking", description: "Building and operating core banking infrastructure with a focus on uptime and regulatory compliance.", date: "2025-07-03", url: "https://rootly.com/humans-of-reliability/brian-shaw", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-brian-shaw.jpg",
  },
  {
    id: "hor6", category: "podcast", title: "David Owczarek — Former Engineering Director", description: "Lessons from leading engineering teams through organizational change and system migrations.", date: "2025-06-17", url: "https://rootly.com/humans-of-reliability/david-owczarek", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-david-owczarek.jpg",
  },
  {
    id: "hor7", category: "podcast", title: "Ryan Lockard — VP of Platform Engineering at CVS Health", description: "Platform engineering at healthcare scale — compliance, reliability, and developer experience.", date: "2025-05-30", url: "https://rootly.com/humans-of-reliability/ryan-lockard", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-ryan-lockard.jpg",
  },
  {
    id: "hor8", category: "podcast", title: "Cosmo Wolfe — Head of Technology at Metronome", description: "Building reliable billing infrastructure and the unique challenges of usage-based pricing systems.", date: "2025-05-26", url: "https://rootly.com/humans-of-reliability/cosmo-wolfe", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-cosmo-wolfe.jpg",
  },
  {
    id: "hor9", category: "podcast", title: "Chase Roberts — COO at Northflank", description: "Operating a developer platform company and the reliability challenges of running infrastructure for others.", date: "2025-05-14", url: "https://rootly.com/humans-of-reliability/chase-roberts", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-chase-roberts.jpg",
  },
  {
    id: "hor10", category: "podcast", title: "Justin Reock — Deputy CTO at DX", description: "Developer experience, engineering metrics, and what makes teams productive and reliable.", date: "2025-04-30", url: "https://rootly.com/humans-of-reliability/justin-reock", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-justin-reock.jpg",
  },
  {
    id: "hor11", category: "podcast", title: "Marino Wijay — Staff Solutions Architect at Kong", description: "API gateway architecture, service mesh patterns, and reliability at the network edge.", date: "2025-04-17", url: "https://rootly.com/humans-of-reliability/marino-wijay", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-marino-wijay.jpg",
  },
  {
    id: "hor12", category: "podcast", title: "Mark Quigley — Head of Platform Engineering", description: "Building internal developer platforms and the organizational dynamics of platform teams.", date: "2025-04-09", url: "https://rootly.com/humans-of-reliability/mark-quigley", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-mark-quigley.jpg",
  },
  {
    id: "hor13", category: "podcast", title: "Kaspar von Grunberg — CEO at Humanitec", description: "The platform engineering movement, internal developer platforms, and developer self-service.", date: "2025-03-24", url: "https://rootly.com/humans-of-reliability/kaspar-von-grunberg", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-kaspar-von-grunberg.jpg",
  },
  {
    id: "hor14", category: "podcast", title: "Dan Slimmon — Incident Response Trainer", description: "Training teams for incident response — chaos engineering, game days, and building organizational muscle memory.", date: "2025-03-13", url: "https://rootly.com/humans-of-reliability/dan-slimmon", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-dan-slimmon.jpg",
  },
  {
    id: "hor15", category: "podcast", title: "Mariano Cocirio — Staff Software Engineer at Vercel", description: "Frontend infrastructure reliability, edge computing, and the operational side of Vercel's platform.", date: "2025-03-06", url: "https://rootly.com/humans-of-reliability/mariano-cocirio", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-mariano-cocirio.jpg",
  },
  {
    id: "hor16", category: "podcast", title: "Adriana Villela — Principal DevRel at Dynatrace", description: "Observability culture, OpenTelemetry adoption, and the human side of monitoring and debugging.", date: "2025-02-27", url: "https://rootly.com/humans-of-reliability/adriana-villela", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-adriana-villela.jpg",
  },
  {
    id: "hor17", category: "podcast", title: "Sean Goedecke — Staff Software Engineer at GitHub", description: "Reliability at GitHub scale — incident management, deployment practices, and engineering culture.", date: "2025-02-18", url: "https://rootly.com/humans-of-reliability/sean-goedecke", publication: "Humans of Reliability", publicationIcon: ROOTLY, thumbnail: "/thumbnails/hor-sean-goedecke.jpg",
  },

  // ── Podcasts — Data on Kubernetes Community ────────────────────────────────
  {
    id: "dok1",
    category: "podcast",
    title: "Postgres on Kubernetes Applied at Scale",
    description:
      "Panel with Alvaro Hernandez and Bart Farrell on running Postgres at scale on Kubernetes — operational patterns, challenges, and lessons learned.",
    date: "2023-01-01",
    url: "https://www.youtube.com/watch?v=Fq8vW3vUnck",
    publication: "Data on Kubernetes Community",
    thumbnail: "/thumbnails/yt-Fq8vW3vUnck.jpg",
  },

  // ── GitHub ─────────────────────────────────────────────────────────────────
  {
    id: "g1",
    category: "github",
    title: "SRE-skills-bench",
    description:
      "A benchmark suite for evaluating AI agents on real-world SRE tasks — incident diagnosis, runbook execution, and infrastructure troubleshooting.",
    date: "2025-02-01",
    url: "https://github.com/Rootly-AI-Labs/SRE-skills-bench",
    publication: "GitHub",
    publicationIcon: GH,
    thumbnail: "/thumbnails/gh-sre-skills-bench.png",
  },
  {
    id: "g2",
    category: "github",
    title: "On-Call-Health",
    description:
      "Detects early warning signs of on-call engineer burnout by pulling data from Rootly, PagerDuty, Linear, GitHub, and Slack.",
    date: "2024-06-01",
    url: "https://github.com/Rootly-AI-Labs/On-Call-Health",
    publication: "GitHub",
    publicationIcon: GH,
    thumbnail: "/thumbnails/oncallhealth.png",
  },
  {
    id: "g3",
    category: "github",
    title: "logs-dataset",
    description:
      "Real production logs — Apache access & error, OpenSSH — openly accessible for researching, benchmarking, and training AI-powered SRE automation.",
    date: "2024-01-01",
    url: "https://github.com/Rootly-AI-Labs/logs-dataset",
    publication: "GitHub",
    publicationIcon: GH,
    thumbnail: "/thumbnails/logs-dataset.png",
  },
  {
    id: "g4",
    category: "github",
    title: "Rootly-MCP-server",
    description:
      "An MCP server for Rootly — enabling AI agents to interact with incident management workflows via the Model Context Protocol.",
    date: "2025-03-01",
    url: "https://github.com/Rootly-AI-Labs/Rootly-MCP-server",
    publication: "GitHub",
    publicationIcon: GH,
    thumbnail: "/thumbnails/gh-rootly-mcp.png",
  },
  {
    id: "g5",
    category: "github",
    title: "water-height-sensor",
    description:
      "Arduino-based sensor to measure Fort Lauderdale canal water height.",
    date: "2023-05-15",
    url: "https://github.com/sylvainkalache/water-height-sensor",
    publication: "GitHub",
    publicationIcon: GH,
    thumbnail: "/thumbnails/gh-water-height-sensor.jpg",
  },

  // ── In the News ────────────────────────────────────────────────────────────
  {
    id: "n3",
    category: "news",
    title: "Des Frenchies lancent une école dans la Silicon Valley",
    description:
      "Des entrepreneurs français fondent une école d'ingénieurs d'un nouveau genre au cœur de la Silicon Valley.",
    date: "2016-01-23",
    url: "https://www.lemonde.fr/economie/article/2016/01/23/des-frenchies-lancent-une-ecole-dans-la-silicon-valley_4852370_3234.html",
    publication: "Le Monde",
    publicationIcon: LEMONDE,
    thumbnail: "/thumbnails/news-n3.jpg",
  },
  {
    id: "n7",
    category: "news",
    title: "Schools Are Recording Students' Results on the Blockchain",
    description:
      "How blockchain technology is being used to create tamper-proof, verifiable academic records for students.",
    date: "2016-05-09",
    url: "https://www.cnbc.com/2016/05/09/schools-are-recording-students-results-on-the-blockchain.html",
    publication: "CNBC",
    publicationIcon: CNBC,
    thumbnail: "/thumbnails/news-n7.jpg",
  },
  {
    id: "n9",
    category: "news",
    title: "International Botathon Finalists Selected to Present at MobileBeat 2016",
    description:
      "Finalists from the international botathon competition are selected to showcase their work at VentureBeat's MobileBeat 2016 conference.",
    date: "2016-07-11",
    url: "https://venturebeat.com/2016/07/11/international-botathon-finalists-selected-to-present-at-mobilebeat-2016/",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/news-n9.jpg",
  },
  {
    id: "n11",
    category: "article",
    title: "Next Generation of Software Engineers Need Training, Not Retraining",
    description:
      "The tech industry needs to invest in training new engineers from the ground up rather than constantly retraining existing workers.",
    date: "2016-09-01",
    url: "https://www.cio.com/article/236150/next-generation-of-software-engineers-need-training-not-retraining.html",
    publication: "CIO",
    publicationIcon: CIO,
    thumbnail: "/thumbnails/news-default.jpg",
  },
  {
    id: "n13",
    category: "news",
    title: "This School Wants to Change How We Train the Next Generation of Tech Workers",
    description:
      "A look at how Holberton School is rethinking tech education with project-based learning and no traditional lectures.",
    date: "2016-11-12",
    url: "https://money.cnn.com/2016/11/12/technology/holberton-school-tech-education/",
    publication: "CNN Money",
    publicationIcon: CNNMONEY,
    thumbnail: "/thumbnails/news-n13.jpg",
  },
  {
    id: "n14",
    category: "news",
    title: "Is It Time to Kill the Whiteboard Interview?",
    description:
      "Why whiteboard interviews fail to assess real engineering skills and what alternative approaches companies should consider.",
    date: "2016-11-21",
    url: "https://insights.dice.com/2016/11/21/whiteboard-interview-problems/",
    publication: "Dice",
    publicationIcon: DICE,
    thumbnail: "/thumbnails/news-n14.jpg",
  },
  {
    id: "n17",
    category: "news",
    title: "New-Age School Raises $2.3 Million to Train Techies",
    description:
      "Holberton School raises $2.3 million to scale its alternative approach to training software engineers in San Francisco.",
    date: "2017-02-06",
    url: "https://fortune.com/2017/02/06/new-age-school-raises-2-3-million-to-train-techies/",
    publication: "Fortune",
    publicationIcon: FORTUNE,
    thumbnail: "/thumbnails/news-n17.webp",
  },
  {
    id: "n18",
    category: "news",
    title: "Dear President Trump: Those Jobs Aren't Coming Back — And Why Would We Want Them To?",
    description:
      "Automation is reshaping the workforce. Instead of bringing back old jobs, the focus should be on training workers for the future.",
    date: "2017-02-20",
    url: "https://venturebeat.com/2017/02/20/dear-president-trump-those-jobs-arent-coming-back-and-why-would-we-want-them-to/",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/news-n18.jpg",
  },
  {
    id: "n19",
    category: "news",
    title: "Les métiers de la French Touch, atouts pour passer les frontières",
    description:
      "Comment les compétences estampillées « qualité française » aident les professionnels tech à s'exporter à l'international.",
    date: "2017-03-21",
    url: "https://www.lemonde.fr/campus/article/2017/03/21/les-metiers-de-la-french-touch-atouts-pour-passer-les-frontieres_5098551_4401467.html",
    publication: "Le Monde",
    publicationIcon: LEMONDE,
    thumbnail: "/thumbnails/news-n19.webp",
  },
  {
    id: "n20",
    category: "article",
    title: "Apprenticeships Could Solve Tech's Diversity Problem",
    description:
      "How apprenticeship models borrowed from traditional trades could create more diverse, accessible pathways into the tech industry.",
    date: "2017-04-16",
    url: "https://venturebeat.com/2017/04/16/apprenticeships-could-solve-techs-diversity-problem/",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/news-n20.jpg",
  },
  {
    id: "n21",
    category: "news",
    title: "How the Rooney Rule Is Changing Tech Hiring",
    description:
      "Applying the NFL's Rooney Rule to tech hiring — requiring diverse candidate slates to address the industry's representation gap.",
    date: "2017-04-18",
    url: "https://fortune.com/2017/04/18/how-rooney-ruled/",
    publication: "Fortune",
    publicationIcon: FORTUNE,
    thumbnail: "/thumbnails/news-n21.webp",
  },
  {
    id: "n23",
    category: "news",
    title: "NE-YO Invests in Holberton School to Diversify Tech",
    description:
      "Grammy-winning artist NE-YO backs Holberton School, investing in a new model of tech education focused on diversity and access.",
    date: "2017-05-30",
    url: "https://fortune.com/2017/05/30/ne-yo-holberton-school-software-camp/",
    publication: "Fortune",
    publicationIcon: FORTUNE,
    thumbnail: "/thumbnails/news-n23.webp",
  },
  {
    id: "n24",
    category: "news",
    title: "Holberton, a Two-Year Tech School, Emphasizes Diversity",
    description:
      "How Holberton School's two-year software engineering program is building a more diverse pipeline of tech talent.",
    date: "2017-06-07",
    url: "https://www.nytimes.com/2017/06/07/education/holberton-a-two-year-tech-school-emphasizes-diversity.html",
    publication: "The New York Times",
    publicationIcon: NYT,
    thumbnail: "/thumbnails/news-n24.jpg",
  },
  {
    id: "n25",
    category: "news",
    title: "Dev Bootcamp Shuttering Shows Challenges of Teaching Coal Miners to Code",
    description:
      "The closure of Dev Bootcamp exposes the gap between coding bootcamp hype and the reality of building sustainable technical education.",
    date: "2017-07-13",
    url: "https://venturebeat.com/2017/07/13/dev-bootcamp-shuttering-shows-challenges-of-teaching-coal-miners-to-code/",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/news-n25.png",
  },
  {
    id: "n26",
    category: "news",
    title: "Filling Amazon's 50,000 Jobs Means Finding New Ways to Train Software Engineers in the U.S.",
    description:
      "Amazon's massive hiring push highlights the shortage of trained software engineers and the need for alternative education pathways.",
    date: "2017-09-18",
    url: "https://venturebeat.com/2017/09/18/filling-amazons-50000-jobs-means-finding-new-ways-to-train-software-engineers-in-the-u-s/",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/news-n26.jpg",
  },
  {
    id: "n27",
    category: "news",
    title: "Holberton Gets Backing From More Industry Executives as It Looks to Scale",
    description:
      "Holberton School secures new investment from tech industry leaders as it expands its software engineering education model.",
    date: "2017-10-25",
    url: "https://techcrunch.com/2017/10/25/holberton-gets-backing-from-more-industry-executives-as-it-looks-to-scale-its-software-engineering-school/",
    publication: "TechCrunch",
    publicationIcon: TC,
    thumbnail: "/thumbnails/news-n27.webp",
  },
  {
    id: "n28",
    category: "news",
    title: "8 Predictions for the Future of Work",
    description:
      "The World Economic Forum outlines eight predictions for how work, education, and skills will evolve in the coming decades.",
    date: "2017-12-01",
    url: "https://www.weforum.org/agenda/2017/12/predictions-for-future-of-work/",
    publication: "World Economic Forum",
    publicationIcon: WEF,
    thumbnail: "/thumbnails/world.png",
  },
  {
    id: "n29",
    category: "news",
    title: "Education for the Fourth Industrial Revolution",
    description:
      "A World Economic Forum podcast exploring how education systems must adapt to prepare workers for the fourth industrial revolution.",
    date: "2018-01-01",
    url: "https://www.weforum.org/agenda/2018/01/podcast-education-for-the-fourth-industrial-revolution/",
    publication: "World Economic Forum",
    publicationIcon: WEF,
    thumbnail: "/thumbnails/world.png",
  },
  {
    id: "n30",
    category: "news",
    title: "Holberton School Raises $8.2 Million",
    description:
      "Holberton School closes an $8.2 million funding round to expand its peer-learning software engineering program.",
    date: "2018-04-09",
    url: "https://www.forbes.com/sites/alexkonrad/2018/04/09/holberton-school-raises-8-2-million/",
    publication: "Forbes",
    publicationIcon: FORBES,
    thumbnail: "/thumbnails/news-n30.webp",
  },
  {
    id: "n31",
    category: "news",
    title: "Seven Marketing Initiatives That Can Help San Francisco Businesses Grow",
    description:
      "Forbes council members share seven marketing strategies tailored for San Francisco's competitive business landscape.",
    date: "2018-05-23",
    url: "https://www.forbes.com/sites/forbessanfranciscocouncil/2018/05/23/seven-marketing-initiatives-that-can-help-san-francisco-businesses-grow/",
    publication: "Forbes",
    publicationIcon: FORBES,
    thumbnail: "/thumbnails/news-n31.png",
  },
  {
    id: "n32",
    category: "news",
    title: "Meet Six Members of Forbes San Francisco Business Council",
    description:
      "Profiles of six members of the Forbes San Francisco Business Council and their insights on building companies in the Bay Area.",
    date: "2018-05-31",
    url: "https://www.forbes.com/sites/forbesmarketplace/2018/05/31/meet-six-members-of-forbes-san-francisco-business-council/",
    publication: "Forbes",
    publicationIcon: FORBES,
    thumbnail: "/thumbnails/news-n32.png",
  },
  {
    id: "n33",
    category: "news",
    title: "How the Best Managers Find Hidden Tech Talent",
    description:
      "Strategies for engineering managers to discover and recruit talented developers from non-traditional backgrounds.",
    date: "2018-07-01",
    url: "https://www.cio.com/article/221783/how-the-best-managers-find-hidden-tech-talent.html",
    publication: "CIO",
    publicationIcon: CIO,
    thumbnail: "/thumbnails/news-n33.jpg",
  },
  {
    id: "n34",
    category: "news",
    title: "Improving Tech Education Doesn't Start With Tech",
    description:
      "Why fixing technical education requires addressing systemic issues in access, pedagogy, and workforce alignment before adding more technology.",
    date: "2018-08-30",
    url: "https://venturebeat.com/2018/08/30/improving-tech-education-doesnt-start-with-tech/",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/news-n34.jpg",
  },
  {
    id: "n35",
    category: "news",
    title: "The New Generation of Artificial Intelligence Jobs",
    description:
      "How AI is creating entirely new job categories and what skills workers need to fill them.",
    date: "2018-09-21",
    url: "https://www.nytimes.com/2018/09/21/technology/artificial-intelligence-jobs.html",
    publication: "The New York Times",
    publicationIcon: NYT,
    thumbnail: "/thumbnails/news-n35.jpg",
  },
  {
    id: "n36",
    category: "news",
    title: "NE-YO Wants to Make Silicon Valley More Diverse",
    description:
      "Grammy-winning artist NE-YO teams up with Holberton School to tackle Silicon Valley's diversity gap through education.",
    date: "2018-09-29",
    url: "https://techcrunch.com/2018/09/29/ne-yo-wants-to-make-silicon-valley-more-diverse/",
    publication: "TechCrunch",
    publicationIcon: TC,
    thumbnail: "/thumbnails/news-n36.jpg",
  },
  {
    id: "n38",
    category: "news",
    title: "5 Reasons DevOps Initiatives Fail",
    description:
      "Common pitfalls that cause DevOps transformations to stall — from cultural resistance to tooling fragmentation.",
    date: "2018-12-01",
    url: "https://www.cio.com/article/222638/5-reasons-devops-initiatives-fail.html",
    publication: "CIO",
    publicationIcon: CIO,
    thumbnail: "/thumbnails/news-n38.jpg",
  },
  {
    id: "n40",
    category: "article",
    title: "The Future of Code Quality, Security, and Agility Lies in Machine Learning",
    description:
      "How machine learning is transforming code quality assurance, security scanning, and agile development workflows.",
    date: "2019-02-01",
    url: "https://www.cio.com/article/219673/the-future-of-code-quality-security-and-agility-lies-in-machine-learning.html",
    publication: "CIO",
    publicationIcon: CIO,
    thumbnail: "/thumbnails/news-n40.jpg",
  },
  {
    id: "n42",
    category: "news",
    title: "Six Ways to Diversify Your Workforce",
    description:
      "Actionable strategies for building a more diverse workforce — from pipeline programs to inclusive hiring practices.",
    date: "2019-03-06",
    url: "https://www.forbes.com/sites/forbessanfranciscocouncil/2019/03/06/six-ways-to-diversify-your-workforce/",
    publication: "Forbes",
    publicationIcon: FORBES,
    thumbnail: "/thumbnails/news-n42.png",
  },
  {
    id: "n43",
    category: "news",
    title: "Holberton Opens Its Software Engineering School in Medellín",
    description:
      "Holberton School expands to Medellín, Colombia, bringing its peer-learning software engineering program to Latin America.",
    date: "2019-06-10",
    url: "https://techcrunch.com/2019/06/10/holberton-opens-its-software-engineering-school-in-medellin/",
    publication: "TechCrunch",
    publicationIcon: TC,
    thumbnail: "/thumbnails/news-n43.jpg",
  },
  {
    id: "n44",
    category: "news",
    title: "Priyanka Chopra Jonas Joins the Holberton School as an Investor",
    description:
      "Actress and producer Priyanka Chopra Jonas invests in Holberton School, backing its mission to democratize tech education.",
    date: "2019-07-02",
    url: "https://www.forbes.com/sites/yolarobert1/2019/07/02/priyanka-chopra-jonas-joins-the-holberton-school-as-an-investor/",
    publication: "Forbes",
    publicationIcon: FORBES,
    thumbnail: "/thumbnails/news-n44.jpg",
  },
  {
    id: "n49",
    category: "news",
    title: "Holberton School, l'école qui forme les ingénieurs informatiques de demain",
    description:
      "Comment Holberton School forme la prochaine génération d'ingénieurs informatiques avec une pédagogie innovante.",
    date: "2020-01-01",
    url: "https://www.forbes.fr/management/holberton-school-lecole-qui-forme-les-ingenieurs-informatiques-de-demain/",
    publication: "Forbes France",
    publicationIcon: FORBES,
    thumbnail: "/thumbnails/news-n49.jpg",
  },
  {
    id: "n50",
    category: "news",
    title: "LinkedIn's AI Gives Job Candidates Feedback on Their Interview Answers",
    description:
      "LinkedIn introduces an AI-powered feature that helps job seekers practice interviews and get feedback on their responses.",
    date: "2020-04-30",
    url: "https://venturebeat.com/2020/04/30/linkedins-ai-gives-job-candidates-feedback-on-their-interview-answers/",
    publication: "VentureBeat",
    publicationIcon: VB,
    thumbnail: "/thumbnails/news-n50.jpg",
  },
  {
    id: "n51",
    category: "news",
    title: "Legendary Songwriter Savan Kotecha Joins Holberton School Board to Increase Tech Diversity",
    description:
      "Savan Kotecha, songwriter behind hits for Ariana Grande and The Weeknd, joins Holberton School's board of trustees.",
    date: "2020-07-13",
    url: "https://www.forbes.com/sites/yolarobert1/2020/07/13/legendary-songwriter-savan-kotecha-joins-holberton-school-board-of-trustees-to-increase-tech-diversity/",
    publication: "Forbes",
    publicationIcon: FORBES,
    thumbnail: "/thumbnails/news-n51.jpg",
  },
  {
    id: "n53",
    category: "article",
    title: "Four Reasons to Take Notes by Hand",
    description:
      "Why handwriting notes improves retention, comprehension, and creative thinking compared to typing on a laptop.",
    date: "2021-04-22",
    url: "https://www.forbes.com/sites/forbesbusinesscouncil/2021/04/22/four-reasons-to-take-notes-by-hand/",
    publication: "Forbes",
    publicationIcon: FORBES,
    thumbnail: "/thumbnails/news-n53.jpg",
  },
  {
    id: "n54",
    category: "news",
    title: "Holberton Raises $20M as It Pivots to Become an EdTech SaaS Company",
    description:
      "Holberton School raises $20 million and pivots from running schools directly to licensing its curriculum as a SaaS platform.",
    date: "2021-03-25",
    url: "https://techcrunch.com/2021/03/25/holberton-raises-20m-as-it-pivots-to-become-an-edtech-saas-company/",
    publication: "TechCrunch",
    publicationIcon: TC,
    thumbnail: "/thumbnails/news-n54.jpg",
  },
  {
    id: "n59",
    category: "news",
    title: "African Leadership Group Acquires Coding School Holberton",
    description:
      "African Leadership Group acquires Holberton School to expand access to software engineering education across Africa.",
    date: "2022-07-13",
    url: "https://techcrunch.com/2022/07/13/african-leadership-group-acquires-coding-school-holberton/",
    publication: "TechCrunch",
    publicationIcon: TC,
    thumbnail: "/thumbnails/news-n59.jpg",
  },
]

export const categories: { id: ContentCategory; label: string; count: number }[] = [
  { id: "all", label: "All", count: contentItems.length },
  { id: "article", label: "Writing", count: contentItems.filter((i) => i.category === "article").length },
  { id: "talk", label: "Talks", count: contentItems.filter((i) => i.category === "talk").length },
  { id: "podcast", label: "Podcasts", count: contentItems.filter((i) => i.category === "podcast").length },
  { id: "github", label: "Projects", count: contentItems.filter((i) => i.category === "github").length },
  { id: "panel", label: "Panel Moderation", count: contentItems.filter((i) => i.category === "panel").length },
  { id: "news", label: "In the News", count: contentItems.filter((i) => i.category === "news").length },
]

export interface ArticlePublication {
  name: string
  logo: string
  count: number
}

const articleItems = contentItems.filter((i) => i.category === "article")

export const articlePublications: ArticlePublication[] = [
  { name: "The New Stack", logo: TNS, count: articleItems.filter((i) => i.publication === "The New Stack").length },
  { name: "VentureBeat", logo: VB, count: articleItems.filter((i) => i.publication === "VentureBeat").length },
  { name: "CloudNativeNow", logo: CNN, count: articleItems.filter((i) => i.publication === "CloudNativeNow").length },
  { name: "TechCrunch", logo: TC, count: articleItems.filter((i) => i.publication === "TechCrunch").length },
  { name: "Linux.com", logo: LINUX, count: articleItems.filter((i) => i.publication === "Linux.com").length },
  { name: "CIO", logo: CIO, count: articleItems.filter((i) => i.publication === "CIO").length },
  { name: "LeadDev", logo: LEADDEV, count: articleItems.filter((i) => i.publication === "LeadDev").length },
  { name: "CNBC", logo: CNBC, count: articleItems.filter((i) => i.publication === "CNBC").length },
].sort((a, b) => b.count - a.count)
