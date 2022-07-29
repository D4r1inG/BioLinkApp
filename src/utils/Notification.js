import { notification } from 'antd';


export const openNotification = (type, title, message) => {
    notification[type]({
        message: title,
        description: message,
    });
};