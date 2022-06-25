import { TGuide } from './guide.types'

export type TTour = {
    _id: number
    name: string
    averageRating: number
    price: number
    city: string
    ratingsQuantity: number
    difficulty: string
    maxGroupSize: number
    duration: number
    images: string[]
    summary: string
    coverImage: string
    startDates: string[]
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
    guides: TGuide[]
    discounetedPrice?: number
}
