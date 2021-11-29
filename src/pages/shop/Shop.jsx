import ProductList from "./parts/ProductList";
import { SplitScreen } from "../../components/SplitScreen";
import { Filters } from "./parts/Filters";
import { ResourceLoader } from "../../components/ResourceLoader";

const Shop = () => {
  return (
    <div>
      <div id="shop">
        <div className="container">
          <SplitScreen leftWeight={1} rightWeight={3}>
            <Filters></Filters>
            <ResourceLoader
              resourceUrl="/products.json"
              resourceName="productsList"
            >
              <ProductList></ProductList>
            </ResourceLoader>
          </SplitScreen>
        </div>
      </div>
    </div>
  );
};

export default Shop;
