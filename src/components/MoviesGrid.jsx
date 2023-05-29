import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";

export function MoviesGrid() {
  const [coctel, setCoctel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  //www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
  // useEffect(() => {
  //   setIsLoading(true);
  //   const searchUrl = search
  //     ? "/search/movie?query=" + search
  //     : "/discover/movie";
  //   get(searchUrl).then((data) => {
  //     setCoctel(data.results);
  //     setIsLoading(false);
  //   });
  // }, [search]);
  //www.thecocktaildb.com/api/json/v1/1/popular.php
  //www.thecocktaildb.com/api/json/v1/1/list.php?a=list
  //www.thecocktaildb.com/api/json/v1/1/randomselection.php
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search.php?s=" + search
      : "/filter.php?c=Cocktail";
    get(searchUrl).then((data) => {
      setCoctel(data);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner key={"id1"}/>;
  }
  if(coctel.drinks != null){
    return (
      <ul className={styles.moviesGrid}>
        {coctel.drinks.map((bebida) => (
          <MovieCard key={bebida.idDrink} bebida={bebida}/>
        ))}
      </ul>
    );
  }
  else
  {
    return (
        <h1 className={styles.title}> No se ha encontrado. Pruebe de nuevo</h1>
    );
  }
  
}
