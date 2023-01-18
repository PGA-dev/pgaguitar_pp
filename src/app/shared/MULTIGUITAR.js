import EHB1506 from '../assets/img/p_region_EHB1506MS_BIF_1P_01.png';
//Image courtesy of Hoshino Gakki/Ibanez.com
import RG5328 from '../assets/img/p_region_RG5328_LDK_00_02.png';
//Image courtesy of Hoshino Gakki/Ibanez.com
import bootsImg from '../assets/img/boots.jpg';
// Photo by Jonathan Gallegos on Unsplash
import asyncImg from '../assets/img/mount-promise.jpg';

export const MULTIGUITAR = [
    {
        id: 0,
        name: 'Mountain Adventure',
        image: EHB1506,
        featured: false,
        description:
            'Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided.'
    },
    {
        id: 1,
        name: 'RG 5328',
        image: RG5328,
        featured: true,
        description:
            'This 8 string monster, coming with a Gibralter II-8 bridge, Dimarzio Fusion Edge 8 pickups and a Macassar Ebony Fretboard'
    },
    {
        id: 2,
        name: 'Bootstrap Teardown',
        image: bootsImg,
        featured: true,
        description: `In this weekend workshop, we'll rebuild your bootstraps from scratch, so you're ready for next-level excursions.`
    },
    {
        id: 3,
        name: 'Asynchronous Rendezvous',
        image: asyncImg,
        featured: false,
        description:
            'Meet up with your guide at the top of Promise Mountain. Or, try to. Good luck!'
    }
];
