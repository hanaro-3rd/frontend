import { atom } from "recoil";

export const signUpAtom = atom({
    key:"signUp",
    default:{
        password:"",
        phonenum:"",
        
    }
})