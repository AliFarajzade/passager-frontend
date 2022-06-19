export type TTour = {
    name: string
    averageRating: number
    price: number
    ratingsQuantity: number
    difficulty: string
    maxGroupSize: number
    duration: number
    images: string[]
    summary: string
    coverImage: string
    startsDates: string[]
    description: string
    startLocation: {
        type: string
        coordinates: number[]
        address: string
        description: string
    }
    locations: {
        type: string
        coordinates: number[]
        description: string
        day: number
    }[]
    slug: string
}
