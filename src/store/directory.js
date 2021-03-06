import { atom } from "recoil";

export const section1 = [
        { title: 'hats', url: 'https://i.ibb.co/cvpntL1/hats.png', id: 1 },
        { title: 'jackets', url: 'https://i.ibb.co/px2tCc3/jackets.png', id: 2 },
        { title: 'sneakers', url: 'https://i.ibb.co/0jqHpnp/sneakers.png', id: 3 },
]

export const directoryAtom = atom({
    key: 'directoryAtom',
    default: section1
})