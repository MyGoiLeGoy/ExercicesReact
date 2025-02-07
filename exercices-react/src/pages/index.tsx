import { Link } from "@tanstack/react-router";
import "./style.css";

const Accueil = () => {
  return (
    <>
      <h1>Accueil</h1>
      <button>
        <Link to="/compteur">Aller au compteur</Link>
      </button>
    </>
  );
};

export default Accueil;
