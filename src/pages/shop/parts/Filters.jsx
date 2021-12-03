import Checkbox from "../../../components/Checkbox";

export const Filters = () => {
  return (
    <div className="filters-container">
      <span className="text-left">Categorias</span>
      <ul>
        <li>
          <Checkbox label="Todo" filterType="Category"></Checkbox>
        </li>
        <li>
          <Checkbox label="Tortas" filterType="Category"></Checkbox>
        </li>
        <li>
          <Checkbox label="Galletas" filterType="Category"></Checkbox>
        </li>
        <li>
          <Checkbox label="Cupcakes" filterType="Category"></Checkbox>
        </li>
        <li>
          <Checkbox label="Panes" filterType="Category"></Checkbox>
        </li>
      </ul>
      <span className="text-left">Ordenar por</span>
      <ul>
        <li>
          <Checkbox label="Categoria" filterType="Sorter"></Checkbox>
        </li>
        <li>
          <Checkbox label="Precio mas alto" filterType="Sorter"></Checkbox>
        </li>
        <li>
          <Checkbox label="Precio mas bajo" filterType="Sorter"></Checkbox>
        </li>
        <li>
          <Checkbox label="A - Z" filterType="Sorter"></Checkbox>
        </li>
        <li>
          <Checkbox label="Z - A" filterType="Sorter"></Checkbox>
        </li>
      </ul>
    </div>
  );
};
