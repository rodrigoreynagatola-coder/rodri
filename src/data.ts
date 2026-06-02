/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Room, Rule, DirectionStep } from './types';

export const IMAGES = {
  facade: '/src/assets/images/hostal_facade_1780403594990.png',
  room: '/src/assets/images/hostal_room_1780403611370.png',
  reception: '/src/assets/images/hostal_reception_1780403626649.png',
  patio: '/src/assets/images/hostal_patio_1780403645956.png',
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'matrimonial',
    name: 'Habitación Matrimonial Premium',
    tagline: 'Privacidad y confort para parejas',
    description: 'Nuestra habitación matrimonial ofrece una cama de dos plazas de alta gama, baño privado, agua caliente presurizada las 24 horas y ventanas insonorizadas para asegurar tu descanso.',
    capacity: 'Ideal para 2 personas',
    priceBob: 250,
    priceUsd: 36,
    amenities: ['Wifi de Alta Velocidad', 'Baño Privado Renovado', 'Agua Caliente 24 hrs', 'Televisión Smart con Cable', 'Desayuno Tarijeño Incluido', 'Ventilador / Calefactor'],
    image: IMAGES.room,
  },
  {
    id: 'doble_twin',
    name: 'Habitación Doble Clásica',
    tagline: 'Dos camas individuales para tu comodidad',
    description: 'Diseñada para amigos o viajes de negocios. Equipada con dos colchones ortopédicos sumamente cómodos, velador de noche, perchero espacioso y un escritorio de trabajo cómodo.',
    capacity: 'Para 2 personas en camas separadas',
    priceBob: 280,
    priceUsd: 40,
    amenities: ['Wifi de Alta Velocidad', 'Baño Privado Completo', 'Mesa de Trabajo', 'Televisión Smart con Cable', 'Desayuno Tarijeño Incluido', 'Café y Té de cortesía'],
    image: IMAGES.room,
  },
  {
    id: 'familiar',
    name: 'Habitación Familiar Amplia',
    tagline: 'El espacio perfecto para todo el grupo',
    description: 'Habitación sumamente acogedora y amplia de techos altos coloniales. Cuenta con una cama matrimonial y dos camas individuales de plaza y media, ideal para compartir momentos únicos.',
    capacity: 'De 3 a 4 personas',
    priceBob: 420,
    priceUsd: 60,
    amenities: ['Wifi de Alta Velocidad', 'Baño Familiar Grande', 'Sala de Estar Pequeña', 'Televisión HD con Cable', 'Desayuno Tarijeño Incluido', 'Agua Caliente 24 hrs'],
    image: IMAGES.room,
  },
  {
    id: 'suite_alamos',
    name: 'Suite "Los Alamos"',
    tagline: 'Nuestra habitación más exclusiva',
    description: 'Disfruta de la mejor suite del hotel. Ofrece una cama King Size, tina de hidromasaje privada de diseño, un hermoso balcón privado con vistas directas al casco viejo colonial y cafetera espresso.',
    capacity: 'Para 2 personas con lujo total',
    priceBob: 550,
    priceUsd: 80,
    amenities: ['Cama King Size Premium', 'Tina de Hidromasaje Privada', 'Balcón Colonial con Vistas', 'Cafetera Espresso Espresso con cápsulas', 'Televisión Smart de 55"', 'Desayuno Personalizado'],
    image: IMAGES.room,
  },
];

export const RULES_DATA: Rule[] = [
  {
    id: 'check',
    title: 'Horarios de Entrada y Salida',
    description: 'El check-in está disponible a partir de las 12:00 PM del mediodía. El check-out de la habitación debe realizarse antes de las 11:00 AM para garantizar la limpieza adecuada al siguiente visitante.',
    iconName: 'Clock',
  },
  {
    id: 'silence',
    title: 'Horas de Descanso y Silencio',
    description: 'Para asegurar una atmósfera pacífica de descanso reparador para todos los huéspedes, pedimos evitar ruidos fuertes y modular el volumen en áreas comunes entre las 10:00 PM y las 7:30 AM.',
    iconName: 'VolumeX',
  },
  {
    id: 'smoke',
    title: 'Espacio 100% Libre de Humo',
    description: 'El hostal se acoge estrictamente a la normativa de salud y convivencia. Está terminantemente prohibido fumar cigarrillos tradicionales o electrónicos (vaping) dentro de las habitaciones y zonas cubiertas.',
    iconName: 'SmokingX',
  },
  {
    id: 'visits',
    title: 'Registro de Visitas',
    description: 'Por estrictas medidas de seguridad vial, ambiental y civil del establecimiento, no se permite la pernoctación de personas ajenas que no hayan sido registradas previamente en la recepción con su documento de identidad.',
    iconName: 'Users',
  },
  {
    id: 'care',
    title: 'Cuidado de Llaves y Dispositivos',
    description: 'Se solicita a los huéspedes cuidar las llaves magnéticas/físicas y controles remotos de la habitación. En caso de pérdida, contactar inmediatamente con el personal del hotel en el lobby.',
    iconName: 'Key',
  },
  {
    id: 'pets',
    title: 'Política de Mascotas',
    description: 'Amamos los animales, pero para preservar las condiciones óptimas de alergia, higiene y silencio acústico del solar colonial, no admitimos mascotas, excepto perros guía acreditados.',
    iconName: 'HeartHandshake',
  },
];

export const DIRECTIONS_DATA: DirectionStep[] = [
  {
    type: 'terminal',
    title: 'Desde la Terminal de Buses de Tarija',
    description: 'Nos encontramos a solo 10 minutos de distancia en vehículo. Puede tomar un taxi oficial en la terminal por una tarifa estándar de 12 a 15 BOB. También hay micros correspondientes por el centro.',
    duration: '10 min',
  },
  {
    type: 'airport',
    title: 'Desde el Aeropuerto Oriel Lea Plaza',
    description: 'El traslado en taxi oficial del aeropuerto tarda unos 12 minutos directamente por las avenidas troncales hasta la puerta de nuestro hospedaje. La tarifa oficial estándar es de 15 a 20 BOB por tramo.',
    duration: '12 min',
  },
  {
    type: 'car',
    title: 'En Auto Propio o de Alquiler',
    description: 'Nuestra ubicación exacta es en pleno epicentro colonial de Tarija (Calle Sucre, entre Ingavi y La Madrid), a una cuadra y media de la pintoresca Plaza Principal Luis de Fuentes. Ofrecemos convenios especiales de garaje cerrado y vigilado las 24 horas a pocos metros.',
    duration: 'Varia según origen',
  },
];
