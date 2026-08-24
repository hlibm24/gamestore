  export interface SystemRequirements {
    OS: string,
    PROCESSOR: string,
    MEMORY: string,
    GRAPHICS: string,
    DIRECTX: string,
    STORAGE: string
  }
  
  export interface Game {
    appID: number,
    name: string,
    slug: string,
    isFeatured?: boolean,
    release_date: string,
    required_age: string,
    price: number,
    detailed_description: string,
    short_description: string,
    minimum_requirements: SystemRequirements,
    recommended_requirements: SystemRequirements,
    supported_languages: string,
    full_audio_languages: string,
    reviews: string,
    header_image: string,
    notes: string,
    developers: string,
    publishers: string,
    genres: string,
    screenshots: string,
    categories: string,
  }