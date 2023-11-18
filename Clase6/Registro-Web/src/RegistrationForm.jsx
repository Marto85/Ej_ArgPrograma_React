import React from "react";

const RegistrationForm = () => {
    return (
        <form>
            <div className="form-group">
                <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="apellido" placeholder="Apellido" />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="tel" className="form-control" id="telefono" placeholder="Teléfono" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="Contraseña" />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirmar Contraseña"
                />
            </div>

            <button type="submit" className="btn btn-secondary mt-3">
                Enviar
            </button>
            <button type="reset" className="btn btn-secondary mt-3 ml-2">
                Resetear
            </button>
        </form>
    );
};

export default RegistrationForm;
