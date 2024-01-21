import { ReactNode } from 'react';

import News from './news/News';
import Ads from './ads/Ads';

import classes from './css/main.module.css';


export const Img = ({img}: {img: string | undefined}): JSX.Element => img 
        ? <img src={img} className={classes["card-img-top"]} alt="Card image" /> 
        : <></>;

export default function Design() {
    return (
        <div className={classes["App"]}>
            <div className={classes["top"]}>
                <News />
                <Ads />
            </div>
        </div>
    )
}




