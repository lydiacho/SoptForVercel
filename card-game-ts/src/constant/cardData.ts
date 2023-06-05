import img1 from "/숭1.png";
import img2 from "/숭2.png";
import img3 from "/숭3.png";
import img4 from "/숭4.png";
import img5 from "/숭5.png";
import img6 from "/숭6.png";
import img7 from "/숭7.png";
import img8 from "/숭8.png";
import img9 from "/숭9.png";

interface monkeyDataInfo {
    id: number;
    src: any;
}

const monkeyData : monkeyDataInfo[] = [
    {
        id:0,
        src:img1
    },
    {
        id:1,
        src:img2
    },
    {
        id:2,
        src:img3
    },
    {
        id:3,
        src:img4
    },
    {
        id:4,
        src:img5
    },
    {
        id:5,
        src:img6
    },
    {
        id:6,
        src:img7
    },
    {
        id:7,
        src:img8
    },
    {
        id:8,
        src:img9
    }
];

export { monkeyData, monkeyDataInfo };