
import { Barber, Service } from './types';

export const BARBERS: Barber[] = [
  {
    id: '1',
    name: 'Sam Dany',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
  },
  {
    id: '2',
    name: 'Marko V.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop'
  },
  {
    id: '3',
    name: 'Jack Ryan',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
  },
  {
    id: '4',
    name: 'Oliver K.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
  }
];

export const SERVICES: Service[] = [
  { id: '1', name: 'Trimming', icon: 'face' },
  { id: '2', name: 'Hair care', icon: 'sanitizer' },
  { id: '3', name: 'Hair Washing', icon: 'shower' },
  { id: '4', name: 'Haircut', icon: 'content_cut' }
];

export const TIMES = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '01:00 PM', '02:00 PM', '03:00 PM'
];

export const DATES = [
  { day: 'Mon', num: '16' },
  { day: 'Tue', num: '17' },
  { day: 'Wed', num: '18' },
  { day: 'Thu', num: '19' },
  { day: 'Fri', num: '20' }
];
