import style from './page.module.css';
import Image from '../../../public/homepage_boat.jpg';

export default function Homepage() {
  return (
    <main className={style.home}>
      <div className={style.navCubes}>
        <div className={style.navTop}>
          <p>Mes demandes</p>
          <p>Mes assignations</p>
        </div>
        <p>Toutes les demandes</p>
      </div>
      <div className={style.sideBar}>
        <button>Nouvelle demande</button>
        <img src={Image.src}></img>
        <button>Extraction Excel</button>
      </div>
    </main>
  );
}
