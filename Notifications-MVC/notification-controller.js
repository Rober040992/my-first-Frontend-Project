import { buildNotification } from "./notification-views.js";

export function notificationController (notificationContainer){ //we only manage erros here, not success
    const showNotification = (message) => {
        notificationContainer.innerHTML = buildNotification(message);

      setTimeout(()=>{
        notificationContainer.innerHTML = ""; 
      },5000)

      }
      return {
        showNotification
      }
}