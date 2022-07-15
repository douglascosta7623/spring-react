import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>Douglas Costa</h1>
        <p>
          Desenvolvido por
          <a target="_blank" href="https://github.com/douglascosta7623">
            {" "}
            douglascosta7623
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
