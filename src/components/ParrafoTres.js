export default function ParrafoTres() {
    const genero = (
        <div>
            <p>
                Sexo: <input type="radio" name="sexo" id="sexo-h" value="h"></input>
                <label>hombre</label>
                <input type="radio" name="sexo" id="sexo-m" value="m"></input>
                <label for="sexo-m">mujer</label>
            </p>

            <p>
                <label for="correo">Correo:</label> <input type="text" name="correo" id="correo" maxlength="100" />
            </p>
        </div>


    );
    return genero;
}