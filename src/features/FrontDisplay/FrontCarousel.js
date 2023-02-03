import React from 'react';
import { UncontrolledCarousel, Col } from 'reactstrap';
import guitar5170Img from '../../app/assets/img/p_region_RG5170B_BK_00_01.png';
//import {CAROUSEL} from '../../app/shared/CAROUSEL';
const items = [
    {
    src: guitar5170Img,
        altText: '5170',
        caption: 'RG 5170',
        header: 'RG5170'
    },
    {
        src: guitar5170Img,
        altText: '5170',
        caption: 'RG 5170',
        header: 'RG5170'
    },
    {
        src: guitar5170Img,
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