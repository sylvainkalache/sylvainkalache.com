export interface StoryLocation {
  name: string
  coordinates: [number, number] // [lng, lat]
}

export interface StoryEntry {
  id: string
  year: string
  title: string
  description: string
  locations: StoryLocation[]
}

export const storyEntries: StoryEntry[] = [
  {
    id: "growing-up",
    year: "Early days",
    title: "Growing up in France",
    description:
      "Born and raised in France. Developed an early passion for technology and computers that would shape the rest of my career.",
    locations: [{ name: "Paris", coordinates: [2.35, 48.86] }],
  },
  {
    id: "linkedin",
    year: "2012-2015",
    title: "Senior SRE at LinkedIn",
    description:
      "Joined LinkedIn as a Senior Site Reliability Engineer in San Francisco. Co-designed a patented self-healing infrastructure system and learned what it takes to keep services running at massive scale.",
    locations: [{ name: "San Francisco", coordinates: [-122.42, 37.77] }],
  },
  {
    id: "holberton",
    year: "2016-2023",
    title: "Co-founded Holberton School",
    description:
      "Co-founded Holberton School, a venture-backed software engineering school with a project-based, peer-learning curriculum. Scaled to 11 campuses across 4 continents before it was acquired.",
    locations: [
      { name: "San Francisco", coordinates: [-122.42, 37.77] },
      { name: "New Haven", coordinates: [-72.93, 41.31] },
      { name: "Tulsa", coordinates: [-95.99, 36.15] },
      { name: "Bogota", coordinates: [-74.07, 4.71] },
      { name: "Medellin", coordinates: [-75.56, 6.25] },
      { name: "Cali", coordinates: [-76.52, 3.45] },
      { name: "Tunis", coordinates: [10.17, 36.81] },
      { name: "Beirut", coordinates: [35.5, 33.89] },
      { name: "Lagos", coordinates: [3.39, 6.52] },
      { name: "Nairobi", coordinates: [36.82, -1.29] },
      { name: "Johannesburg", coordinates: [28.05, -26.2] },
    ],
  },
  {
    id: "while42",
    year: "2013-present",
    title: "Founded while42",
    description:
      "Created while42, a global community of tech professionals with chapters in 10+ cities around the world. A space for engineers and builders to connect, share knowledge, and support each other.",
    locations: [
      { name: "San Francisco", coordinates: [-122.42, 37.77] },
      { name: "Paris", coordinates: [2.35, 48.86] },
      { name: "London", coordinates: [-0.12, 51.51] },
      { name: "Berlin", coordinates: [13.41, 52.52] },
      { name: "Tokyo", coordinates: [139.69, 35.69] },
      { name: "Sydney", coordinates: [151.21, -33.87] },
      { name: "Sao Paulo", coordinates: [-46.63, -23.55] },
      { name: "Singapore", coordinates: [103.85, 1.35] },
      { name: "Dubai", coordinates: [55.27, 25.2] },
      { name: "Bangalore", coordinates: [77.59, 12.97] },
    ],
  },
  {
    id: "rootly",
    year: "2024-present",
    title: "DevRel & AI Labs at Rootly",
    description:
      "Leading Developer Relations and AI Labs at Rootly. Building AI-driven open-source reliability tools and prototypes, sponsored by Anthropic, Google DeepMind, and Google Cloud. Writing, speaking, and helping SREs succeed with AI.",
    locations: [{ name: "San Francisco", coordinates: [-122.42, 37.77] }],
  },
  {
    id: "writing-speaking",
    year: "Ongoing",
    title: "Writing & Speaking",
    description:
      "Publishing in TechCrunch, VentureBeat, The New Stack, and LeadDev. Speaking at SREcon, PlatformCon, DevOpsDays, and conferences worldwide. Hosting the Humans of Reliability podcast.",
    locations: [
      { name: "San Francisco", coordinates: [-122.42, 37.77] },
      { name: "Austin", coordinates: [-97.74, 30.27] },
      { name: "New York", coordinates: [-74.01, 40.71] },
      { name: "Seattle", coordinates: [-122.33, 47.61] },
    ],
  },
]
