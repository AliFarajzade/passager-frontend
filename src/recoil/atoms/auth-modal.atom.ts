import { atom } from 'recoil'
import { TAuthModalState } from '../../types/auth-modal.types'

const authModalStateAtom = atom<TAuthModalState>({
    key: 'authModalState',
    default: {
        open: false,
        view: 'signIn',
    },
})

export default authModalStateAtom
