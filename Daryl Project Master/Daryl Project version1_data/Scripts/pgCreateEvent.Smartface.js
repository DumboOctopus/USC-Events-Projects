/**
 current:
     use datemodifed and timeModifed to check if the date and time have been input
         Data verifcation
     MAGIC
         Close the window after event created
     When minutes are 0, time shows up like
         11:0PM
    
*/



/**
* @param {TouchEventArgument} e Returns e.x and e.y values of touched points.
* @this pgCreateEvent.piDatePicker
*/

var pgCreateEventData = {
    dateSelected: new Date(),
    dateModified: false,
    timeModified: false
}

/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this Pages.pgCreateEvent
*/
function pgCreateEvent_Self_OnShow(e){
    pgCreateEventData.dateModified = false;
    pgCreateEventData.dateSelected = new Date();
    pgCreateEventData.timeModified = false;
    
    Pages.pgCreateEvent.piDatePicker.text = "Date";
    Pages.pgCreateEvent.piTime.text = "Time";
}

function pgCreateEvent_piDatePicker_OnTouch(e){
    var myCars = ["Saab", "Volvo", "BMW"];
    var selectedIndex = 0;

    SMF.UI.showDatePicker({
        currentDate : pgCreateEventData.dateSelected.toString(), // date is given with JavaScript date object
        mask : "dd-MM-yyyy",
        minDate : new Date("13 October, 2013"),
        maxDate : new Date("13 October, 2025"),
        showWorkingDate : true,
        onSelect : function (e) {
            var sDate = new Date(e.date);
            alert("Selected date: " + sDate.toISOString());
            pgCreateEventData.dateSelected = sDate;
            Pages.pgCreateEvent.piDatePicker.text = sDate.toDateString();
        },
        onCancel : function (e) {
            alert("Picker cancelled!");
        }
    });    

}
/**
/**
    Notes: 
        For reverse geocoding use google apis
        https://developers.google.com/maps/documentation/geocoding/intro#geocoding
        get key first tho
**/


/*
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgCreateEvent.btnCancel
*/
function pgCreateEvent_btnCancel_OnPressed(e){
    Pages.Page1.show(1,1,1,false, false);
}
/**
* @param {TouchEventArgument} e Returns e.x and e.y values of touched points.
* @this pgCreateEvent.piTime
*/
function pgCreateEvent_piTime_OnTouch(e){
    SMF.UI.showTimePicker({
        currentTime :  pgCreateEventData.dateSelected.getHours() + ":" + pgCreateEventData.dateSelected.getMinutes(),
        hourViewFormat24 : true,
        minuteInterval : 5,
        minTime : "00:00",
        maxTime : "23:59",
        onSelect : function (e) {
            var t = new Date(e.time);
            alert("Selected time hour: " + t.getHours());
            pgCreateEventData.dateSelected.setHours(t.getHours());
            pgCreateEventData.dateSelected.setMinutes(t.getMinutes());
            Pages.pgCreateEvent.piTime.text =t.getHours()%12 + ":" + t.getMinutes() + (t.getHours() > 12? "PM": "AM");
        },
        onCancel : function () {
            alert("Picker cancelled!");
        }
    });
}
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this pgCreateEvent.btnCreateEvent
*/
function pgCreateEvent_btnCreateEvent_OnPressed(e){
    var ename = Pages.pgCreateEvent.eNameField.text
    var dscrpt = Pages.pgCreateEvent.eDescription.text;
    var address = Pages.pgCreateEvent.eLocation.text;
    var price = parseInt( Pages.pgCreateEvent.ePrice.text);
    
    //----checking inputs
    if(price == NaN) {
        alert("invalid price lol");
        Pages.pgCreateEvent.ePrice.focus();
        return;
    }
    
    var getAddressService = new SMF.Net.WebClient({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY",
        httpMethod: "POST",
        requestHeaders : []
    })
    
    parseData.createMapPoint(ename,
            {
              "__type": "GeoPoint",
              "latitude": 40.0,
              "longitude": -30.0
            },
            {
              "__type": "Date",
              "iso": pgCreateEventData.dateSelected.toISOString()
            },
            address, 
            false, 
            price, 
            dscrpt
    );
}
