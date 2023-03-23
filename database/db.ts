import mongoose from 'mongoose';

// Mongoose connection status
// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

const connectionStatus = {
	isConnected: 0
};

export const connectDB = async () => {
	if (connectionStatus.isConnected !== 0) {
		console.log('is already connected');
		return;
	}
	if (mongoose.connections.length > 0) {
		connectionStatus.isConnected = mongoose.connections[0].readyState;

		if (connectionStatus.isConnected === 1) {
			console.log('Using the last connection');
			return;
		}
		disconnectDB();
	}
	await mongoose.connect(process.env.MONGO_CONNECTION || '');
	connectionStatus.isConnected = 1;
	console.log('Connected to DB');
};

export const disconnectDB = async () => {
	if (process.env.NODE_ENV === 'development') return;
	if (connectionStatus.isConnected === 0) return;

	await mongoose.disconnect();
	console.log('Disconnected');
};
