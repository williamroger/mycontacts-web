import EventManager from '../lib/EventManager';

export const eventManager = new EventManager();

export default function toast({ text, type = 'default' }) {
  eventManager.emit('addtoast', { text, type });
}
