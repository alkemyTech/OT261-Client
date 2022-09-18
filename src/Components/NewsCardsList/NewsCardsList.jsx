import NewsCardsListStyle from './styles';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardsList = ({ news, className }) => {
  return (
    <NewsCardsListStyle className={className}>
      {news.map(({ id, image }) => {
        return <NewsCard key={id} id={id} img={image} text="news placeholder" />;
      })}
    </NewsCardsListStyle>
  );
};

export default NewsCardsList;
