import EventEmitter from 'events';

const _emitter = new EventEmitter();
_emitter.setMaxListeners(0); // umlimit number

export const emitter = _emitter;