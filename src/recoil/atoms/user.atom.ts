import { atom } from 'recoil'

export type TUserState = {
    user?: {
        name: string
        email: string
        role: string
        photo?: string
        _id: string
    }
    isLoading: boolean
}

const userStateAtom = atom<TUserState>({
    key: 'userStateAtom',
    default: {
        isLoading: false,
    },
})

export default userStateAtom
