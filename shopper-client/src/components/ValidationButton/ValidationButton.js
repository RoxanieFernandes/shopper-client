import React from "react";
import "../ValidationButton/ValidationButton.css"

const ValidationButton = () => {
  return (
    <div>
      <div className="validation-button">
          <h4>
            {/* 4 - inserir o botão de validação - deve aparecer apenas se sucesso nas
          informações verificadas */}
            <button>Validar</button>
          </h4>
      </div>
    </div>
  );
};

export default ValidationButton;
