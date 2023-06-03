import { selector } from "recoil";

export const charCountState = selector({
    key: 'charCountState', 
    get: ({get}) => {
        const text = get(textState);
        return text.length;
    },
    set: ({ get, set }, newMessage) => {
        const 새이름 = {
            ...get(원래이름),
            messageList: [...get(원래이름).messageList, newMessage],
        };
        set(원래이름, 새이름);
    },
});