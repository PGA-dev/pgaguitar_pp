
import guitarString from '../assets/img/nyxl110.jpeg';
//https://www.daddario.com/globalassets/inriver/resources/ds_nyxl1046_main_transparent2.png
import guitarBridge from '../assets/img/9862135.jpg'
//https://www.thomannmusic.com/ibanez_low_edge_pro_cosmo_black.htm
import guitarPickup from '../assets/img/DP259FBB+BK.png'
//https://d2emr0qhzqfj88.cloudfront.net/s3fs-public/products/DP259BB%2BBK.png
import guitarNeck from '../assets/img/neck_01.jpg'
//https://www.ibanez.com/images/products/detail/neck_01.jpg
import guitarBody from '../assets/img/DSC02586.jpeg'
//https://i1.wp.com/blog.music-man.com/wp-content/uploads/2019/12/DSC02586.jpg?resize=960%2C1440

export const GUITAR = [
    {
        id: 0,
        name: 'Guitar Body',
        image: guitarBody,
        featured: 1,
        pageUrl: '/guidedirectory/0',
        pageUrlTitle: 'GuitarBody',
        description:
            'Guitar Body Guide: Top Wood, body wood, etc...'
    },
    {
        id: 1,
        name: 'Guitar Necks',
        image: guitarNeck,
        featured: 0,
        pageUrl: '/guidedirectory/1',
        pageUrlTitle: 'GuitarBody',
        description:
            'We have Guitar Neck Guides'
    },
    {
        id: 2,
        name: 'Guitar Strings',
        image: guitarString,
        featured: 0,
        pageUrl: '/guidedirectory/2',
        pageUrlTitle: 'GuitarBody',
        description:
            'A standard 34" 6-string Tuned B-C with Barts and all the trimings'
    },
    {
        id: 3,
        name: 'Guitar Bridges',
        image: guitarBridge,
        featured: 2,
        pageUrl: '/guidedirectory/3',
        pageUrlTitle: 'GuitarBody',
        description:
            'A standard 34" 6-string Tuned B-C with Barts and all the trimings'
    },
    {
        id: 4,
        name: 'Guitar Pickups',
        image: guitarPickup,
        featured: 3,
        pageUrl: '/guidedirectory/4',
        pageUrlTitle: 'GuitarBody',
        description:
            'A standard 34" 6-string Tuned B-C with Barts and all the trimings'
    },
];
