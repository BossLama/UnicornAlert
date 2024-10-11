
const unicornManager =  new UnicornAlertHandler();

function onSuccessAlert()
{
    unicornManager.createAlert(UnicornAlertTypes.SUCCESS, 'Your request was successfull!', 5000);
}

function onErrorAlert()
{
    unicornManager.createAlert(UnicornAlertTypes.ERROR, 'An error occured!', 5000);
}

function onWarningAlert()
{
    unicornManager.createAlert(UnicornAlertTypes.WARNING, 'Warning! We found your password in a public database!', 5000);
}

function onInfoAlert()
{
    unicornManager.createAlert(UnicornAlertTypes.INFO, 'This is an information!', 5000);
}