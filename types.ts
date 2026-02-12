
export enum Screen {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  APPOINTMENT = 'APPOINTMENT',
}

export interface Barber {
  id: string;
  name: string;
  rating: number;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  color?: string;
}

export interface AppointmentState {
  barberId?: string;
  date?: string;
  time?: string;
  serviceId?: string;
}
