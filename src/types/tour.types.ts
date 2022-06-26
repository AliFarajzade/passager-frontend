import { TGuide } from './guide.types'

export type TLocation = {
    type: string
    coordinates: number[]
    description: string
    day: number
}

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
    startDate: string
    description: string
    startLocation: TLocation
    locations: TLocation[]
    slug: string
    guides: TGuide[]
    discounetedPrice?: number
    priceToPound: number
}
