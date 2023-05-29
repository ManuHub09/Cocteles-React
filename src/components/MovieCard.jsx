import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard({ bebida }) {
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + bebida.idDrink}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={bebida.strDrinkThumb}
          alt={bebida.strDrink}
        />
        {/* <div>{bebida.strDrink}</div> */}
      </Link>
    </li>
  );
}
