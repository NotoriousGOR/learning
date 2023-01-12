type MoviesResponse = {
  score: number
  show: {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: []
    status: string
    runtime: number
    averageRuntime: number
    premiered: string
    ended: string
    officialSite: string
    schedule: {
      time: string
      days: string[]
    }
    rating: {
      average: number
    }
    weight: number
    network: {
      id: number
      name: string
      country: {
        name: string
        code: string
        timezone: string
      }
      officialSite: string
    }
    webChannel?: {
      id: number
      name: string
      country: {
        name: string
        code: string
        timezone: string
      }
      officialSite: string
    }
    dvdCountry: unknown
    externals?: {
      tvrage: unknown
      thetvdb: number
      imdb: string
    }
    image: string
    summary: string
    updated: number
    _links: {
      self: {
        href: string
      }
    }
  }
}
