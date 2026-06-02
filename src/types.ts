/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TabType = 'INICIO' | 'HABITACIONES' | 'CONTACTO' | 'CÓMO LLEGAR' | 'REGLAS DE HOSPEDAJE';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  priceBob: number;
  priceUsd: number;
  amenities: string[];
  image: string;
}

export interface Rule {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface DirectionStep {
  type: 'terminal' | 'airport' | 'car';
  title: string;
  description: string;
  duration: string;
}
