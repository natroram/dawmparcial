import Product from "../../../components/Product";
import { RegularList } from "../../../components/RegularList";

const ShoppingList = ({ usersList }) => {
  return usersList ? (
    <>
      <ul>
        <RegularList
          items={usersList[0].cart}
          resourceName="product"
          itemComponent={Product}
        ></RegularList>
      </ul>
    </>
  ) : (
    <p>Cargando...</p>
  );
};

export default ShoppingList;
