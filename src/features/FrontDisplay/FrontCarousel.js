import React from 'react';
import { UncontrolledCarousel, Col } from 'reactstrap';

//import {CAROUSEL} from '../../app/shared/CAROUSEL';
const items = [
    {
        src: '../assets/img/p_region_RG5170G_SVF_00_01.png',
        altText: '5170',
        caption: 'RG 5170',
        header: 'RG5170'
    },
    {
        src: '../assets/img/p_region_RG5170G_SVF_00_01.png',
        altText: '5170',
        caption: 'RG 5170',
        header: 'RG5170'
    },
    {
        src: '../assets/img/p_region_RG5170G_SVF_00_01.png',
        altText: '5170',
        caption: 'RG 5170',
        header: 'RG5170'
    }
];
// export const selectAllCarousel = () => {
//     return CAROUSEL;
// };
const UnCarousel = () => {
    return (
        <Col>
        <UncontrolledCarousel items={items} />
        </Col>)
};
// const items = selectAllCarousel();
//     return(
//         <UncontrolledCarousel items={items} />
//         );
// };
export default UnCarousel;