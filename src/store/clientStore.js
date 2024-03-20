import { defineStore } from 'pinia';
import axios from 'axios'
 
export const useClientStore = defineStore('clients', {
  state: () => ({
    clients: [],
    connection: null,
  }),
  actions: {
    async getClients() {
        await axios.get('http://localhost:3000/api/clients')
        .then((response) => {
          this.clients = response.data;
        })
        .catch((err) => {
          console.error(err);
        });    
    },
    lunchWebSocket() {
      this.connection = new WebSocket('ws://localhost:3000');

      this.connection.onopen = (event) => {
        console.log('Successfully connected to the WebSocket server...');
      };

      this.connection.onmessage = (event) => {
        const jsonString = event.data;
        const newData = JSON.parse(jsonString);
        this.clients = newData;
      };

      this.connection.onclose = (event) => {
        console.log('WebSocket connection closed:', event);
      };
    },
  },
});
