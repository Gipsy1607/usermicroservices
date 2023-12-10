const publishEvent =async(subject, data) => {
    if(!natsConnection){
        natsConnection =await connect (natsOptions);
        console.log('Connected to NATS Server')
    }

    try{
        natsConnection.publish(subject, data);
        console.log('Event published succesfully');
        await natsConnection
    }
}