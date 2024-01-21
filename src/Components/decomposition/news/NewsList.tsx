import PropTypes from 'prop-types';

import { news } from './news_data';


/** блок новостей*/
export default function NewsList({ activeTab }: {activeTab: string}) {
  return (
    <div>
      {
        news
          .filter(item => item.category === activeTab)
          .map((item, i) => (
              <div key={i}>
                <img src={item.pic} alt={item.title} />
                <a href='#' >{item.title}</a>
              </div>
            )
          )
      }
    </div>
  );
};

NewsList.propTypes = {
  /** Передает строку с активным разделом новостей */
  activeTab: PropTypes.string.isRequired,
};
