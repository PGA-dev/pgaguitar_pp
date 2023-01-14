import reactLakeImg from '../assets/img/react-lake.jpg';
import chromeRiverImg from '../assets/img/chrome-river.jpg';
import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
import reduxWoodsImg from '../assets/img/redux-woods.jpg';
import guitarImg from '../assets/img/p_region_RG8527Z_SDE_00_03.png';
//WAS CAMPSITES
export const GUITAR = [
    {
        id: 0,
        name: 'RG 8527',
        image: guitarImg,
        elevation: 1233,
        featured: true,
        description:
            'This 7 string monster, coming with a lo-pro edge (edge zero), Dimarzio PAF 7 pickups and a Macassar Ebony Fretboard'
    },
    {
        id: 1,
        name: 'Chrome River Campground ',
        image: chromeRiverImg,
        elevation: 877,
        featured: false,
        description:
            'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.'
    },
    {
        id: 2,
        name: 'Breadcrumb Trail Campground',
        image: breadCrumbImg,
        elevation: 2901,
        featured: false,
        description:
            'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.'
    },
    {
        id: 3,
        name: 'Redux Woods Campground',
        image: reduxWoodsImg,
        elevation: 42,
        featured: false,
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    }
];
