import { Server } from 'socket.io';

interface IMessengerService {
  broadcast(event: string, data: any);
}

export class MessengerService implements IMessengerService {
  constructor(private readonly io: Server) {}

  async broadcast(event: string, data: any) {
    this.io.emit(event, data);
  }
}
