import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  //Validar que los campos no esten vacios
  const errores = [];
  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre esta vacio" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo esta vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje esta vacio" });
  }

  if (errores.length > 0) {
	// Obtener los testimoniales existentes
	const testimoniales = await Testimonial.findAll();
    //Mostrar los errores en la vista
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
	  testimoniales,
    });
  } else {
    //Almacenar el testimonial en la BD
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimonial };
