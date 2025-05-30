import { Schema, model } from "mongoose";
import { genSaltSync, hashSync } from "bcrypt";

// Schema sera la 'plantilla' que usaremos para poder interactuar con nuestros schemas de la bd
const usuarioSchema = new Schema({
  nombre: Schema.Types.String,
  correo: {
    type: Schema.Types.String,
  },
  password: {
    type: Schema.Types.String,
    set: (valor) => {
      // Cuando quiero guardar el registro en mi bd antes de guardarlo se llama al set

      const salt = genSaltSync();
      const hashPassword = hashSync(valor, salt);

      // Una vez que ya tengo el hash de mi password ahora lo retorno para que ese sea el valor guardado en la bd
      return hashPassword;
    },
  },
});

export const UsuarioModel = model("usuarios", usuarioSchema);
