/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this Pages.pgLogin
*/
function pgLogin_Self_OnShow(e){
    //set up ebPass
    Pages.pgLogin.ebPassword.isPassword = true;
    Pages.pgLogin.ebPassword.returnKey = SMF.UI.EditboxReturnKey.go;
    Pages.pgLogin.ebPassword.text = "";
    //set up ebUserName
    Pages.pgLogin.ebUsername.returnKey = SMF.UI.EditboxReturnKey.next;
    Pages.pgLogin.ebUsername.text = "";
}

/**
* Creates action(s) that are run when the return key of the edit box is wanted to use.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgLogin.ebUsername
*/
function pgLogin_ebUsername_OnReturnKey(e){
    Pages.pgLogin.ebPassword.focus();    
}

/**
* Creates action(s) that are run when the return key of the edit box is wanted to use.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgLogin.ebPassword
*/
function pgLogin_ebPassword_OnReturnKey(e){
    pgLogin_login();
}


/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgLogin.btnCreateAccount
*/
function pgLogin_btnCreateAccount_OnPressed(e){
    Pages.pgCreateAccount.show(5, 2, 1, true, false);
}
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgLogin.btnLogin
*/
function pgLogin_btnLogin_OnPressed(e){
    pgLogin_login();
}


//=================CUSTOM METHODES
function pgLogin_login()
{
    if(
        Pages.pgLogin.ebPassword.text == Pages.pgLogin.ebPassword.placeHolder || 
        Pages.pgLogin.ebUsername.text == Pages.pgLogin.ebUsername.placeHolder ||
        Pages.pgLogin.ebPassword.text.length < parseData.minPasswordSize || 
        Pages.pgLogin.ebUsername.text == "" )
    {
        alert("Dude fill in the passwords");
        return;
    }
    
    //login yayaya :)
    loginWebRequest = new SMF.Net.WebClient({
            url : "https://api.parse.com/1/login?username=" + Pages.pgLogin.ebUsername.text + "&password=" + Pages.pgLogin.ebPassword.text,
            httpMethod : "GET",
            requestHeaders : parseData.requestHeaders,
            onSyndicationSuccess : function (e) {
                //Fills pgUser page's design objects.

                //alert( JSON.parse(loginWebRequest.responseText).email);
                Dialogs.dGenericLoading.close();
               //,for (var obj in JSON.parse(loginWebRequest.responseText)){
                //    alert(obj);
                //}
                alert(JSON.parse(loginWebRequest.responseText).sessionToken)
                parseData.sessionInfo = JSON.parse(loginWebRequest.responseText);
                Pages.Page1.show(1,1,1,false, false);
                
            },
            onServerError : function (e) {
                Dialogs.dGenericLoading.close();
                alert(JSON.parse(e.message).error);
            }
        });
    loginWebRequest.run(true);
    Dialogs.dGenericLoading.show();
}
