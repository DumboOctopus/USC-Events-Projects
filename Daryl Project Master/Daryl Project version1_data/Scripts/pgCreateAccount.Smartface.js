/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this Pages.pgCreateAccount
*/
function pgCreateAccount_Self_OnShow(e){
    //ebPasVerify
    Pages.pgCreateAccount.ebPasswordVerify.isPassword = true;
    Pages.pgCreateAccount.ebPasswordVerify.returnKey = SMF.UI.EditboxReturnKey.go;
    //set up ebPass
    Pages.pgCreateAccount.ebPassword.isPassword = true;
    Pages.pgCreateAccount.ebPassword.returnKey = SMF.UI.EditboxReturnKey.next;
    //set up ebUserName
    Pages.pgCreateAccount.ebPassword.returnKey = SMF.UI.EditboxReturnKey.next;
}

/**
* Creates action(s) that are run when the return key of the edit box is wanted to use.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgCreateAccount.ebUsername
*/
function pgCreateAccount_ebUsername_OnReturnKey(e){
    Pages.pgCreateAccount.ebPassword.focus();    
}

/**
* Creates action(s) that are run when the return key of the edit box is wanted to use.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgCreateAccount.ebPassword
*/
function pgCreateAccount_ebPassword_OnReturnKey(e){
    Pages.pgCreateAccount.ebPasswordVerify.focus();
}

/**
* Creates action(s) that are run when the return key of the edit box is wanted to use.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgCreateAccount.ebPasswordVerify
*/
function pgCreateAccount_ebPasswordVerify_OnReturnKey(e){
     pgCreateAccount_createAccount();
}


/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgCreateAccount.btnCreateAccount
*/
function pgCreateAccount_btnCreateAccount_OnPressed(e){
    Pages.pgCreateAccount.show(5, 2, 1, true, false);
}
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgCreateAccount.btnLogin
*/
function pgCreateAccount_btnCreate_OnPressed(e){
    pgCreateAccount_createAccount();
}


//=================CUSTOM METHODES
function pgCreateAccount_createAccount()
{
    if(Pages.pgCreateAccount.ebPassword.text.length < parseData.minPasswordSize)
    {
        alert("Password must be at least 6 characters");
        
        Pages.pgCreateAccount.ebPassword = "";
        Pages.pgCreateAccount.ebPasswordVerify = "";
        return;
    }
    if(Pages.pgCreateAccount.ebEmail.text.indexOf("@usc.edu") < 0) 
    {
        alert("Please use @usc.edu email");
        
        Pages.pgCreateAccount.ebPassword = "";
        Pages.pgCreateAccount.ebPasswordVerify = "";
        return;
    }
    if(
        Pages.pgCreateAccount.ebPassword.text == Pages.pgCreateAccount.ebPassword.placeHolder || 
        Pages.pgCreateAccount.ebUsername.text == Pages.pgCreateAccount.ebUsername.placeHolder ||
        Pages.pgCreateAccount.ebUsername.text == "" )
    {
        alert("Dude fill in the passwords");
        Pages.pgCreateAccount.ebPassword = "";
        Pages.pgCreateAccount.ebPasswordVerify = "";
        
        return;
    }
    if(Pages.pgCreateAccount.ebPassword.text != Pages.pgCreateAccount.ebPasswordVerify.text)
    {
        alert("Dude it your passwords don't match");
        Pages.pgCreateAccount.ebPassword = "";
        Pages.pgCreateAccount.ebPasswordVerify = "";
        
        return;
    }
    
    
    //sign up yaya yayaya :)
     registerWebClient = new SMF.Net.WebClient({
            url : "https://api.parse.com/1/users",
            httpMethod : "POST",
            requestString : JSON.stringify({
                username : Pages.pgCreateAccount.ebUsername.text,
                password : Pages.pgCreateAccount.ebPassword.text,
                email: Pages.pgCreateAccount.ebEmail.text
            }),
            requestHeaders : [
                parseData.requestHeaders[0],
                parseData.requestHeaders[1],
                "Content-Type: application/json"],
            onSyndicationSuccess : function (e) {
                //PhotoUpload
                //When finished sending user's info succesfully, user's image file sends to file class of Parse.
                Dialogs.dGenericLoading.close();
                Pages.Page1.show(1,1,1,false, false);
                //alert( JSON.parse(registerWebClient.responseText).username);
                
            },
            onServerError : function (e) {
                Dialogs.dGenericLoading.close();
                alert(JSON.parse(e.message).error);
            }
        });
    registerWebClient.run(true);
    Dialogs.dGenericLoading.show();
    
}

