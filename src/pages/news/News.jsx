import { NewsList } from "./parts/NewsList";
import { ResourceLoader } from "../../components/ResourceLoader";
import { SearchBar } from "../../components/SearchBar";

export const News = () => {
  return (
    <div id="news">
      <div className="container">
        <spam className="picture">
        <img src="./img/BienvenidaNEW.jpg" alt="No se encuentra la foto disponible :(" className="imgPicture"></img>
        </spam>
      <div id="titulo">
        <h2>Noticias</h2>
      </div>
        <SearchBar></SearchBar>
        <ResourceLoader resourceUrl="/news.json" resourceName="newsInfoList">
          <NewsList></NewsList>
        </ResourceLoader>
      </div>
    </div>
  );
};
