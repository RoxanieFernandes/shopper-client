import React from "react";
import "../Home/Home.css";
import CheckButton from "../../components/CheckButton/CheckButton";
import ValidationButton from "../../components/ValidationButton/ValidationButton";
import UploadFile from "../../components/UploadFile/UploadFile";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-all-text">
          <div className="home-text">
            <h1>Atualização de valores para mercadorias cadastradas</h1>
            <p>
              Carregue um arquivo do tipo CSV com os novos valores à serem
              atualizados.
            </p>
          </div>
        </div>
        <div className="file">
          <div>
            <UploadFile />
          </div>
          <div className="buttons">
            <div>
              <CheckButton />
            </div>
            <div>
              <ValidationButton />
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
