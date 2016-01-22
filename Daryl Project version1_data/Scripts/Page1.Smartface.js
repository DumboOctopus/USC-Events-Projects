//


var mode = "spots"; //modes: events, spots, explore
var setMode = function (newMode) {
    switch (newMode) {
    case "events":
        Pages.Page1.Spots_Pane.visible = false;
        Pages.Page1.Explore_Pane.visible = false;
        Pages.Page1.Events_Pane.visible = true;
        this.mode = newMode;
        break;
    case "spots":
        Pages.Page1.Spots_Pane.visible = true;
        Pages.Page1.Explore_Pane.visible = false;
        Pages.Page1.Events_Pane.visible = false;
        this.mode = newMode;
        break;
    case "explore":
        Pages.Page1.Spots_Pane.visible = false;
        Pages.Page1.Explore_Pane.visible = true;
        Pages.Page1.Events_Pane.visible = false;
        this.mode = newMode;
        break;
    }
}

/**
 * Creates action(s) that are run when the user press the key of the devices.
 * @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
 * @this Pages.Page1
 */

function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
/**
 * Creates action(s) that are run when the page is appeared
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Pages.Page1
 */
function Page1_Self_OnShow() {
    //Comment following block for removing navigationbar/actionbar sample
    //Copy this code block to every page onShow
    this.statusBar.transparent = true;
    
    /**/
}

/**
 * Creates action(s) that are run when the object is pressed from device's screen.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Page1.EventsButton
 */
function Page1_EventsButton_OnPressed(e) {
    setMode("events");
}

/**
 * Creates action(s) that are run when the object is pressed from device's screen.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Page1.ExploreButton
 */
function Page1_ExploreButton_OnPressed(e) {
    setMode("explore");
}

/**
 * Creates action(s) that are run when the object is pressed from device's screen.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Page1.SpotsButton
 */
function Page1_SpotsButton_OnPressed(e) {
    setMode("spots");
}

/**
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Page1.Events_Pane.RepeatBox1
 */
function Page1_RepeatBox1_OnShow(e) {
    /*DONT DELETE :)
    parseData.createMapPoint({
              "__type": "GeoPoint",
              "latitude": 40.0,
              "longitude": -30.0
            },
            "This is a test Event.It will havfe description haah",
            "MI CASA",
            {
              "__type": "Date",
              "iso": "2011-08-21T18:02:52.249Z"
    });
    */
    var tmp = "";
    var resp =parseData.getAllMapPoints();
    if(resp != undefined){
        for(var i = 0; i < resp.length; i++)
        {
            alert(resp[i].address);
        }
    } else
    {
        alert(resp);
    }
}
