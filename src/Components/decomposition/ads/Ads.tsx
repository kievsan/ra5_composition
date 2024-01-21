import Card from '../Card';
import {btn} from '../Card'

import classes from '../css/main.module.css';

/**
 * Pекламный блок с текстом, картинкой и ссылкой
 */
export default function Ads() {
  return (
    <div className={classes['ads']}>
      <Card img='https://via.placeholder.com/180x140?text=Image' button={btn('Работа над ошибками', '#')} />
      <p className={classes['ads-content']}>Смотрите на Яндексе и запоминайте</p>
    </div>
  );
};
