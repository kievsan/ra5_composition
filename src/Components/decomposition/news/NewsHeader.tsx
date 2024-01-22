import React, { ReactNode } from 'react';

import { NewsCategory } from '../../../types';

import classes from '../css/main.module.css';


/** Показывает Дату / день Недели / Время */
const YandexDate = ({ date }: {date: Date}): ReactNode => {
    return (
        <>
        { strDate(date) }
        </>        
    )
}


interface TabProps {activeTab: string, onTabChange: (tab: string) => void, children?: ReactNode}

/** Показывает одну кнопку-таб */
const Tab = (props: TabProps): ReactNode => {
    const { activeTab, onTabChange } = props
    return ( 
        <button onClick={ () => onTabChange(activeTab) } disabled={ activeTab === props.children }>
            { props.children }
        </button>
    )
}


interface Props {
    headerTabs: Array<NewsCategory>, 
    activeTab: string, 
    onTabChange: (tab: string) => void, 
    children?: ReactNode}

/** Tабы с блоками новостей */
export default function NewsHeader(props: Props): ReactNode {
    const {headerTabs, activeTab, onTabChange} = props;
    return (
        <div className={classes["news-header"]}>
            {
                headerTabs.map(tab => (
                    <Tab key={ tab.id } activeTab={ activeTab } onTabChange={ onTabChange }>
                        { tab.title }
                    </Tab>
                ))
            }
            <YandexDate date={new Date()} />
        </div>
    );
};


export const strDate = (date: any): string => {
    const d = new Date(date);
    return ` ${ d.getDate() } ${ strMonth(d.getMonth())}, ${strWeek(d.getDay())} ${strTime(d)}`;
}

const strMonth = (month: number): string => {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    return months[month];
}

const strWeek = (week: number): string => {
    const weeks = [
        'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'
    ];
    return weeks[week];
}

const strTime = (date: Date): string => {
    const time = date.toLocaleTimeString().split(':');
    return `0${time[0]}`.slice(-2) + ' ' + `0${time[1]}`.slice(-2)
}
