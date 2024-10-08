import NewItems from "./new_items/new_items";
import NewCollectionBox from "./new_collection/new_collection";
import Ticker from "./ticker/Ticker";
import Categories from "./categories/categories";
import BoorivaStore from "./boorivaStore/boorivaStore";

import styles from "./HomePage.module.sass";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Categories />
      <NewItems />
      <NewCollectionBox />
      <BoorivaStore />
      <Link to={`/booriva/catalog`}>
        <Ticker text={`топовые товары`} />
      </Link>
    </div>
  );
};
export default HomePage;
