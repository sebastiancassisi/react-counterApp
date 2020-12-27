import "@testing-library/jest-dom";
import { getUser } from "../../base/05-funciones";
import { getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en el archivo 05-funciones", () => {
  test("getUser - Debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });
  test("Debe retornar un objeto", () => {
    const nombre = "Juan";
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC567",
      username: "Juan",
    });
  });
});
