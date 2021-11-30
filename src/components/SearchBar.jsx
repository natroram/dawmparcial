export const SearchBar = () => {
  const onSearch = (e) => {
    e.preventDefault();

    const text = document.getElementById("searchBarInput").value; //Variable que contiene el texto puesto en la barra de busqueda
    //Realizar aqui las operaciones necesarias para buscar las noticias segun lo que se ingreso en la barra de busqueda
  };

  return (
    <form class="d-flex" id="searchBar" onSubmit={onSearch}>
      <input
        class="form-control me-2"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
        id="searchBarInput"
      ></input>
      <button class="btn btn-outline-success" type="submit">
        Buscar
      </button>
    </form>
  );
};
