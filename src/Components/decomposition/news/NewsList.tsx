import { NewsPost } from '../../../types';


/** блок новостей*/
export default function NewsList({ news }: {news: Array<NewsPost>}) {
  return (
    <div>
      {
        news.map((post, i) => (
          <div key={i}>
            <img src={post.pic} alt={post.title} />
            <a href={post.link} >{ post.title }</a>
          </div>
          )
        )
      }
    </div>
  );
};
