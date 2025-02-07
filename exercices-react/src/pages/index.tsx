import { Link } from "@tanstack/react-router";
import "./style.css";

const Accueil = () => {
  
  return (
    <>
      <h1>CatStore</h1>
      <h2>We currently have ??? cats</h2>
      <button>

        <Link to="/compteur">Aller au compteur</Link>
      </button>
    </>
  );
};

export default Accueil;