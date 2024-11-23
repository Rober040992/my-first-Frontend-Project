import { buildNotification } from "./notification-views.js";

export function notificationController (notificationContainer){ 
    const showNotification = (message, type = "success") => {
        notificationContainer.innerHTML = buildNotification(message,type);

      setTimeout(()=>{
        notificationContainer.innerHTML = ""; 
      },5000)

      }
      return {
        showNotification
      }
}