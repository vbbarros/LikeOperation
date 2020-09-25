const amqplib = require('amqplib');

const connect = async() => {
  try{
    connection = await amqplib.connect("amqp://admin:admin@rabbitmq:5672");
    channel = await connection.createChannel();
    return channel;
  }catch(err){
    console.log(err.message)
  }

}

const createQueue = (channel, queue) => {
  return new Promise((resolve, reject) => {
    try{
      channel.assertQueue(queue, { durable: true });
      resolve(channel);
    }
    catch(err){
      reject(err) 
    }
  });
}
  
const sendToQueue = (queue, message) => {
  connect()
    .then(channel => createQueue(channel, queue))
    .then(channel => channel.sendToQueue(queue, Buffer.from(JSON.stringify(message))))
    .catch(err => console.log(err))
}
  
const consume = (queue, callback) => {
  connect()
    .then(channel => createQueue(channel, queue))
    .then(channel => channel.consume(queue, callback, { noAck: true }))
    .catch(err => console.log(err));
}
  
module.exports = {
  sendToQueue,
  consume
}