import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en el archivo 02-template", () => {
  test("prueba en el metodo getSaludo", () => {
    const nombre = "Sebastian";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });
  test("prueba en el metodo getSaludo => valor por defecto", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Juan");
  });
});
