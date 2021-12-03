import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

const ResourceProductsLoader = ({
  resourceUrl,
  resourceName,
  children,
  categoryFilters,
  sorterFilters,
}) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(resourceUrl);
      const data = await response.json();
      console.log("Data");
      console.log(data);
      let productsFiltered = [];
      console.log("CategoryFilters");
      console.log(categoryFilters);
      console.log("SorterFilters");
      console.log(sorterFilters);
      if (!categoryFilters.some((element) => element === "Todo")) {
        for (let i = 0; i < categoryFilters.length; i++) {
          console.log("entro al for");
          productsFiltered = data.filter(
            (product) => product.category === categoryFilters[i]
          );
          console.log("despues del filter");
          console.log(productsFiltered);
        }
      } else {
        productsFiltered = data;
      }

      if (sorterFilters != null) {
        for (let i = 0; i < sorterFilters.length; i++) {
          if (sorterFilters[i] === "") {
            // sort by price ascending
            productsFiltered.sort((x, y) => {
              return x.price - y.price;
            });
          }
          if (sorterFilters[i] === "") {
            // sort by price descending
            productsFiltered.sort((x, y) => {
              return y.price - x.price;
            });
          }
          // sort by name A-Z
          if (sorterFilters[i] === "") {
            productsFiltered.sort((x, y) => {
              let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            });
          }
          // sort by name Z-A
          if (sorterFilters[i] === "") {
            productsFiltered.sort((x, y) => {
              let a = y.name.toUpperCase(),
                b = x.name.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            });
          }
          // sort by category A-Z
          if (sorterFilters[i] === "") {
            productsFiltered.sort((x, y) => {
              let a = x.category.toUpperCase(),
                b = y.category.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            });
          }
        }
      }
      console.log("DataFinal");
      console.log(productsFiltered);
      setState(productsFiltered);
    })();
  }, [resourceUrl, categoryFilters, sorterFilters]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  categoryFilters: state.appReducer.categoryFilters,
  sorterFilters: state.appReducer.sorterFilters,
});

export default connect(mapStateToProps)(ResourceProductsLoader);
