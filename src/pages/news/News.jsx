<<<<<<< HEAD
import { NewsList } from "./parts/NewsList";
import { ResourceLoader } from "../../components/ResourceLoader";
import { SearchBar } from "../../components/SearchBar";

export const News = () => {
  return (
    <div id="news">
      <div className="container">
        <h1 className="text-center">Noticias</h1>
        <SearchBar></SearchBar>
        <ResourceLoader resourceUrl="/news.json" resourceName="newsInfoList">
          <NewsList></NewsList>
        </ResourceLoader>
      </div>
    </div>
  );
};
=======
const News=() =>{
    return(
        
        <div id="news" > 
           
            <h2 className="text-center">¿Qué hay de nuevo viejo?</h2>
            
        </div>

    );


};

export default News;
>>>>>>> f96bc47eaa69dd0ea91adf5a28f195a584c19af7
