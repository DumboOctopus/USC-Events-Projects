/**
* Creates action(s) that are run when the user press the key of the devices.
* @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
* @this Dialogs.MoreDialog
*/
function MoreDialog_Self_OnKeyPress(e){
    alert("hi :)");    
}

/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this MoreDialog.btnLogout
*/
function MoreDialog_btnLogout_OnPressed(e){
    parseData.logout(function(){
        Pages.pgLogin.show(1,1,1,false,false);
    });
}
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this MoreDialog.btnProfile
*/
function MoreDialog_btnProfile_OnPressed(e){
    
}
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this MoreDialog.btnSuscriptions
*/
function MoreDialog_btnSuscriptions_OnPressed(e){
    
}
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this MoreDialog.btnCreateEvent
*/
function MoreDialog_btnCreateEvent_OnPressed(e){
    Dialogs.MoreDialog.close(3,SMF.UI.TransitionEffect.rightToLeft, false);
    Pages.pgCreateEvent.show(1,1,1,false,false);
}