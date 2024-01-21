import classes from '../css/main.module.css';

/**
 * Pекламный блок с текстом, картинкой и ссылкой
 */
export default function Ads() {
  return (
    <div className={classes['ads']}>
        <img src="https://via.placeholder.com/180x140?text=Image" alt="ads"/><br />
        <a href="#">Работа над ошибками</a>
        <p className={classes['ads-content']}>Смотрите на Яндексе и запоминайте</p>
    </div>
  );
};
