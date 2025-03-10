import buzoBlanco from '../images/buzo blanco.jpg';
import sweaterRayado from '../images/sweater rayado.jpg'; 
import sweaterBlanco from '../images/sweater blanco.jpg';

export const items = [
    {
      id: 1,
      imagen: buzoBlanco,
      titulo: "Buzo Blanco",
      descripcion: "Buzo blanco de algodón.",
      categoryId: 'Sweaters',
    },
    {
      id: 2,
      imagen: sweaterRayado,
      titulo: "Sweater Rayado",
      descripcion: "Sweater rayado de hilo azul y blanco.",
      categoryId: 'Sweaters',
    },
    {
      id: 3,
      imagen: sweaterBlanco,
      titulo: "Sweater Blanco",
      descripcion: "Sweater blanco de lana con cuello alto.",
      categoryId: 'Sweaters',
    },
  ];
  
  console.log(items);