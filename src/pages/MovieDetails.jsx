import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const {idDrink} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coctel, setCoctel] = useState(null);
  ///11007
  useEffect(() => {
    setIsLoading(true);
    get("/lookup.php?i=" + idDrink).then((data) => {
      setCoctel(data);
      setIsLoading(false);
    });
  }, [idDrink]);
  
  if (isLoading) {
    return <Spinner key={"id"}/>;
  }
  // if(coctel == null){
  //   return (
  //     <h1> No hay ese  coctel </h1>
  //   )
  // }
  //const imageUrl = "www.thecocktaildb.com/images/ingredients/" + coctel.poster_path;
  const imageUrl =coctel.drinks[0].strDrinkThumb;
  const ingredients = [];
        for (let i = 1; i <= 15; i++) {
            const prop = `strIngredient${i}`;
            if (coctel.drinks[0][prop]) {
                ingredients.push(coctel.drinks[0][prop]);
            }
  }
  const urlIgrendientes = ingredients.map(e=>{
     return `https://www.thecocktaildb.com/images/ingredients/${e.toLowerCase()}-Medium.png`;
  })
  return (
    <div className={styles.detailsContainer}>
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <img
          key={coctel.drinks[0].idDrink}
          className={`${styles.col} ${styles.movieImage}`}
          src={imageUrl}
          alt={coctel.drinks[0].strDrink}
        />
         <p className={styles.firstItem}>
          <strong>Title:</strong> {coctel.drinks[0].strDrink}
        </p>
        <p>
          <strong>Descripción:</strong>{" "}
          {/* {movie.drinks.genres.map((genre) => genre.name).join(", ")} */}
          {coctel.drinks[0].strInstructions}
        </p>
      </div>
      <div className={`${styles.col} ${styles.movieDetails}`}>
      <strong>Ingredientes:</strong>{" "}
        <div>
          {urlIgrendientes.map((url, index) => (
            <img key={index} src={url} alt="" className={`${styles.colIngrediente} ${styles.movieImage}`} />
          ))}
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
