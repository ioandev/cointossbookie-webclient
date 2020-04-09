import ReconnectingWebSocket from 'reconnecting-websocket';
import Convertor from '../helpers/convertor';

export default class Networking {
  constructor(onMessage) {
    this.onMessage = onMessage;
    this.convertor = new Convertor();
  }
  
  logMessage(message, isError) {
    message = `cointoss bookie's websocket: ${message}`
    if (!isError) {
      console.log(message)
      return
    }
    
    console.error(message)
  }

  run = () => {
    var self = this;

    this.rws = new ReconnectingWebSocket(process.env.WEBSOCKET_URL);
    this.rws.addEventListener('open', () => {
      self.rws.send('hello!');
      self.logMessage('Open')
    });

    this.rws.addEventListener('error', () => {
      self.logMessage('Errored', true)
    });

    this.rws.addEventListener('close', () => {
      self.logMessage('Closed')
    });

    this.rws.addEventListener('message', (message) => {
      self.logMessage('Received message')
      self.onMessage(self.convertor.All(JSON.parse(message.data)))
    });
  }
}