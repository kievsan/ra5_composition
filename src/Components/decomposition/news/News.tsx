import {useState} from 'react';

import NewsHeader from './NewsHeader';
import NewsList from './NewsList';
import Rates from './Rating';

import { NewsData } from '../../../types';


interface Props {newsData: NewsData};

export default function News({ newsData }: Props) {
    // блок новостей
    const { categories, news} = newsData

    const [cat, setCategory ] = useState(categories[0].title);

    const handlerCategoryChange = (activeTab: string): void => {
        //...
        setCategory(activeTab)
    }

    return (
        <div>
            <NewsHeader headerTabs={categories} activeTab={cat} onTabChange={handlerCategoryChange} />
            <NewsList news={news.filter(post => post.category === cat)} />
            <Rates />
        </div>
    );
};
