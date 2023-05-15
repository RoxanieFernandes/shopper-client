import React from "react";
import "../CheckButton/CheckButton.css"

const CheckButton = () => {
  return (
    <div>
      <div className="check-button">
          <h4>
            {/* 3 - inserir o botão de verificar - vai analisar as regras e retornar o
                        sucesso de carregamento ou o erro */}
            <button>Verificar</button>
          </h4>
      </div>
    </div>
  );
};

export default CheckButton;
