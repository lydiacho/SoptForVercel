import { atom } from 'recoil';

export const correctState = atom({
    key:"correctState",
    default:0,
});

export const allState = atom({
    key:"allState",
    default:5,
});