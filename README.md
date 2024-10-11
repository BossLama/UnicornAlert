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

## How to customize colorsheme?
The UnicornAlert.js file contains a constant at the beginning of the code that contains all the colours. Adjust these colours to use your own theme.
```javascript
const UnicornAlertColors = {
    BORDER_SUCCESS: '#3fab3e',
    BORDER_ERROR: '#e74c3c',
    BORDER_WARNING: '#f39c12',
    BORDER_INFO: '#3498db',

    BACKGROUND_SUCCESS: '#70ff6e',
    BACKGROUND_ERROR: '#ffa1a1',
    BACKGROUND_WARNING: '#fff1a1',
    BACKGROUND_INFO: '#a1e3ff',

    TEXT_SUCCESS: '#2e5e2d',
    TEXT_ERROR: '#5e2d2d',
    TEXT_WARNING: '#6b4912',
    TEXT_INFO: '#123f6b'
};
```
