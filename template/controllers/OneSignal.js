import { OneSignal } from 'react-native-onesignal';
import * as Config from '../app.json';

const initialize = () => {
	OneSignal.initialize(Config.oneSignalAppId);
};

const showPrompt = () => {
	OneSignal.Notifications.canRequestPermission().then((data) => {
		console.log(data);
		if (data) {
			OneSignal.InAppMessages.addTrigger('prompt_ios', 'true');
		}
	});
};

const oneSignalGetId = async () => {
    const userId = await OneSignal.User.getOnesignalId();
	const isSubscribed = await OneSignal.Notifications.getPermissionAsync()
    return {userId, isSubscribed};
};

module.exports = {
	initialize,
	showPrompt,
    oneSignalGetId
};
