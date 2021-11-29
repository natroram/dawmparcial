import { Checkbox } from "../../../components/Checkbox";

export const Filters = () => {
  const onChecking = () => {
    console.log("checked");
  };

  const onUnchecking = () => {
    console.log("unchecked");
  };

  return (
    <div className="filters-container">
      <span className="text-left">Categorias</span>
      <ul>
        <li>
          <Checkbox
            label="Todo"
            onChecking={onChecking}
            onUnchecking={onUnchecking}
          ></Checkbox>
        </li>
        <li>
          <Checkbox
            label="Tortas"
            onChecking={onChecking}
            onUnchecking={onUnchecking}
          ></Checkbox>
        </li>
        <li>
          <Checkbox
            label="Galletas"
            onChecking={onChecking}
            onUnchecking={onUnchecking}
          ></Checkbox>
        </li>
        <li>
          <Checkbox
            label="Cupcakes"
            onChecking={onChecking}
            onUnchecking={onUnchecking}
          ></Checkbox>
        </li>
        <li>
          <Checkbox
            label="Panes"
            onChecking={onChecking}
            onUnchecking={onUnchecking}
          ></Checkbox>
        </li>
      </ul>
      <span className="text-left">Ordenar por</span>
      <ul>
        <li>
          <Checkbox
            label="Categoria"
            onChecking={onChecking}
            onUnchecking={onUnchecking}
          ></Checkbox>
        </li>
        <li>
          <Checkbox
            label="Precio mas alto"
            onChecking={onChecking}
            onUnchecking={onUnchecking}
          ></Checkbox>
        </li>
        <li>
          <Checkbox
            label="Precio mas bajo"
            onChecking={onChecking}
            onUnchecking={onUnchecking}
          ></Checkbox>
        </li>
        <li>
          <Checkbox
            label="A - Z"
            onChecking={onChecking}
            onUnchecking={onUnchecking}
          ></Checkbox>
        </li>
        <li>
          <Checkbox
            label="Z - A"
            onChecking={onChecking}
            onUnchecking={onUnchecking}
          ></Checkbox>
        </li>
      </ul>
    </div>
  );
};
