import EventManager from '../lib/EventManager';

export const eventManager = new EventManager();

export default function toast({ text, type = 'default', duration }) {
  eventManager.emit('addtoast', { text, type, duration });
}
