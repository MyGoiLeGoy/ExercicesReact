import { Link } from "@tanstack/react-router";
import "./style.css";
import { useStore } from "@tanstack/react-store";
import { catStore } from "../context/catStore";

const Accueil = () => {
  const catCount = useStore(catStore, (state) => state.count);
  
  return (
    <>
      <h1>CatStore</h1>
      <h2>We currently have {catCount} cats</h2>
      <button>

        <Link to="/compteur">Aller au compteur</Link>
      </button>
    </>
  );
};

export default Accueil;
