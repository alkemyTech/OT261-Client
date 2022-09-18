import { Link } from "react-router-dom";
import NewsCardStyle from "./styles";

const NewsCard = ({ img, text, id }) => {
  return (
    <NewsCardStyle>
      <div className="news-card-left">
        <img src={img} alt={text} />
      </div>
      <div className="news-card-right">
        <p>{text}</p>
        <Link to={`/news/${id}`} className="text-center fw-semibold">Ver novedad</Link>
      </div>
    </NewsCardStyle>
  );
};

export default NewsCard;
