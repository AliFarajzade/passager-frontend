export interface TReview {
    _id: string
    review: string
    rating: number
    user: {
        _id: string
        name: string
        photo?: string
    }
    tour: string
    createdAt: string
    updatedAt: string
}
