# UnicornAlert
UniCorn Alert manages and handles messages. It enables simple and worry-free implementation.

## How to import?
Import the script UnicornAlert.js into your current project
```html
 <script src="unicorn_alert/UnicornAlert.js"></script>
```
## How to use UnicornAlert?
The createAlert method uses 4 parameters. Type, message, duration and a method that is called when clicking. The duration is 5 seconds by default, the click method closes the message by default.
```javascript
const unicornManager =  new UnicornAlertHandler();

unicornManager.createAlert([TYPE], [MESSAGE], [DURATION], [CLICKMETHOD]);

unicornManager.createAlert(UnicornAlertTypes.SUCCESS, 'Your request was successfull!', 5000);
unicornManager.createAlert(UnicornAlertTypes.ERROR, 'An error occured!', 5000);
unicornManager.createAlert(UnicornAlertTypes.WARNING, 'Warning! We found your password in a public database!', 5000);
unicornManager.createAlert(UnicornAlertTypes.INFO, 'This is an information!', 5000);

unicornManager.createAlert(UnicornAlertTypes.INFO, 'This is an information!');
unicornManager.createAlert(UnicornAlertTypes.INFO, 'This is an information!', 5000, () => {
  alert("Clicked");
});



```
