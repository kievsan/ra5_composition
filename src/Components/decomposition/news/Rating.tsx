import { ReactNode } from 'react';
import PropTypes from 'prop-types';

import classes from '../css/main.module.css';


interface rateAsset {name: string, rate: string, dayChange: string}
const rate = (name: string, rate: string, dayChange: string): rateAsset => {
    return {name: name, rate: rate, dayChange: dayChange}
}
const assets: Array<rateAsset> = [
    rate('Google', '$6.6', ' -0.1 '),
    rate('Twitter', '$4.3', ' -0.7 '),
    rate('LUKOIL', '$30.9', ' +1.1 '),
];

/** актив (название, ценa и изменение за день) */
const Rate = ({asset}: any): ReactNode => {
  return (
    <p className={classes["rate"]}>
      <span className="rate-span">{asset.name}</span>
      <span className="rate-span">{asset.rate}</span>
      <span className="rate-span">{asset.dayChange}</span>
    </p>
  )
};

Rate.propTypes = {
  /** Объект с данными об активе */
  asset: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    rate: PropTypes.string.isRequired, 
    dayChange: PropTypes.string.isRequired,
  })
}

/** Cтрокa с активами (текущие цены на валюты, акции ...) */
export default function Rates() {
  return (
    <div className={classes["rates"]}>
      {
        assets.map((item, i) => <Rate key={i} asset={item} />)
      }
    </div>
  );
};
