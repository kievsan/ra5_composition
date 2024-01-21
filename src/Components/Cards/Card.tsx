import { ReactNode } from 'react';
import PropTypes from 'prop-types';

import classes from './css/main.module.css';

const Img = ({img}: {img: string | undefined}): JSX.Element => img 
        ? <img src={img} className={classes["card-img-top"]} alt="Card image" /> 
        : <></>;

interface Props {
    img?: string,
    title?: string,
    button?: cardBtn,
    children?: ReactNode,
}


export default function Card(props: Props) {
    const {img, title = 'Card title', button = btn('Go somewhere', '#')} = props
    return (
        <div className={classes["card"]}>
            <Img img={img} />
            <div className={classes["card-body"]}>
                <div className={classes["card-content"]}>
                    <h3 className={classes["card-title"]}>{ title }</h3>
                    <div className={classes["card-text"]}>{ props.children }</div>
                    <a className={classes["btn"]} href={ button?.link }>{ button?.title }</a>
                </div>
            </div>
        </div>
      )
}

export interface cardBtn {title: string, link: string};

export const btn = (btnTitle: string, btnLink: string): cardBtn => {
  return {title: btnTitle, link: btnLink};
}

Card.propTypes = {
  img: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node)
}
