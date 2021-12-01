export const SearchBar = () => {
  const onSearch = (e) => {
    e.preventDefault();

    const text = document.getElementById("searchBarInput").value; //Variable que contiene el texto puesto en la barra de busqueda
    //Realizar aqui las operaciones necesarias para buscar las noticias segun lo que se ingreso en la barra de busqueda
    let elementos = document.getElementsByClassName("news-container");
    if (text.length > 0) {
      for (let elemento of elementos) {
        if (elemento.innerText.includes(text)) {
          elemento.classList.add("visible");
        } else {
          elemento.classList.add("hidden");
        }
      }
    } else {
      for (let elemento of elementos) {
        elemento.classList.remove("hidden");
        elemento.classList.add("visible");
      }
    }
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
