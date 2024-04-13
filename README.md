# Basic NOtify

## Descrizione
This project implements an interactive notification system using HTML, CSS and JavaScript. Notifications can be of different types: success, error, warning, information and system.

## Utilizzo
To display a notification, simply call the `showNotification` function with the following parameters:
- `type`: the type of notification (success, error, warning, info, system)
- `message`: the message to display in the notification
- `duration`: the duration of the notification in milliseconds

Example:
```javascript
showNotification('success', 'Operation completed successfully', 4000);
