import { Viaje } from "../models/Viaje.js";

const paginaInicio = (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  // Consultar BD
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Viajes",
    viajes,
  });
};

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;

  console.log("Detalle viaje: ", slug);

  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render("viaje", {
      pagina: "Información Viaje",
      viaje,
    });
  } catch (error) {
    console.log("Error al obtener el viaje: ", error);
  }
};

const paginaTestimoniales = (req, res) => {
  res.render("testimoniales", {
    pagina: "Testimoniales",
  });
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje };
