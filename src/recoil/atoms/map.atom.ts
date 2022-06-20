import { atom } from 'recoil'

type TMapState = {
    center?: number[]
    zoom: number
}

const mapStateAtom = atom<TMapState>({
    key: 'mapStateAtom',
    default: {
        zoom: 6.5,
    },
})

export default mapStateAtom
