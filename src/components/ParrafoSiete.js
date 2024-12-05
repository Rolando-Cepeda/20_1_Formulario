export default function ParrafoSiete() {
    const condiciones =
        <dic>
            <p>
                <input type="checkbox" name="info" id="info" checked="checked"></input>
                <label for="info">Deseo recibir información sobre novedades y ofertas</label>
            </p>
            <p>
                <input type="checkbox" name="condiciones" id="condiciones"></input>
                <label for="condiciones">Declaro haber leido y aceptar las condiciones generales del programa y la normativa sobre protección de datos</label>
            </p>
        </dic>

    return condiciones;
}