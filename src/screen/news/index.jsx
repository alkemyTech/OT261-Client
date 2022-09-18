import NewsCardsList from "../../Components/NewsCardsList/NewsCardsList";
import { icons } from '../../assets';

const News = () => {
  return (
    <div>
      <h1 className='text-center mt-4 mb-4'>Novedades</h1>
      <NewsCardsList className="justify-content-center" news={icons.news_imgs}/>
    </div>
  );
};

export default News;
