import { RegularList } from "../../../components/RegularList";
import { BillItem } from "../../../components/BillItem";
import Button from "@restart/ui/esm/Button";
export const Bill = ({usersList}) => {
  let total =0;

  if(usersList){
    usersList[0].cart.map((product)=>(total+=product.price))    ;
  }
  return usersList?  (
    <div className="outer-container" id="bill">
      <div className="bill-container">
        <span className="bill-items">Productos</span>
          <ul>
              <RegularList items = {usersList[0].cart} resourceName ="billItemInfo" itemComponent ={BillItem}>
                
              </RegularList>
          </ul>
        <span className="subtotal-container">Subtotal: ${total}</span>
        
      </div>
      <div className="btn-buy">
      <Button id="buy">Comprar</Button>
      </div>
    </div>
  ): <p>Cargando...</p>;
};

