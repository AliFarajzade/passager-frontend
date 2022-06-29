export type TSignUpResponse = {
    status: string
    data: {
        name: string
        email: string
        role: string
        active: boolean
        _id: string
        __v: number
    }
}

export type TGetMeResponse = {
    status: string
    data: {
        photo?: string
        name: string
        email: string
        role: string
        _id: string
        __v: number
    }
}
