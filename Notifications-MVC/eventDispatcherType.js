              //eventName , message to show, the type ("success" or "error"), and the HTMLelement
export function dispatchEventMessageType(message, type, containerElement) {
    const customEvent = new CustomEvent("load-info", {
      detail: {
        message,
        type,
      }
    });
    containerElement.dispatchEvent(customEvent);
  }