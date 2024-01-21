import {useState} from 'react';
import NewsHeader from './NewsHeader';
import NewsList from './NewsList';
import Rates from './Rating';


export default function News() {
    // блок новостей
    const [tab, setTab ] = useState('Сейчас в СМИ');
    const handlerTabChange = (activeTab: string): void => {
        //...
        setTab(activeTab)
    }

    return (
        <div>
            <NewsHeader headerTabs={headerTabs} activeTab={tab} onTabChange={handlerTabChange} />
            <NewsList activeTab={tab} />
            <Rates />
        </div>
    );
};

const headerTabs = [
    {id: 1, title: 'Сейчас в СМИ'},
    {id: 2, title: 'В Германии'},
    {id: 3, title: 'Рекомендуем'}
];
