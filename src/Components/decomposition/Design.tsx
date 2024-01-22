import News from './news/News';
import Ads from './ads/Ads';

import { newsCategory, news } from './news/news_data';

import classes from './css/main.module.css';


export const Img = ({img}: {img: string | undefined}): JSX.Element => img 
        ? <img src={img} className={classes["card-img-top"]} alt="Card image" /> 
        : <></>;

export default function Design() {
    return (
        <div className={classes["App"]}>
            <div className={classes["top"]}>
                <News newsData={ {categories: newsCategory, news: news} }/>
                <Ads />
            </div>
        </div>
    )
}




