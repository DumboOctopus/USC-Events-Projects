/**
* @param {TouchEventArgument} e Returns e.x and e.y values of touched points.
* @this CreateEventPage.piDatePicker
*/
function CreateEventPage_piDatePicker_OnTouch(e){
    var myCars = ["Saab", "Volvo", "BMW"];
    var selectedIndex = 0;

    SMF.UI.showDatePicker({
        currentDate : (new Date()).toString(), // date is given with JavaScript date object
        mask : "dd-MM-yyyy",
        minDate : new Date("13 October, 2013"),
        maxDate : new Date("13 October, 2025"),
        showWorkingDate : true,
        onSelect : function (e) {
            var sDate = new Date(e.date);
            alert("Selected date: " + sDate.toString());
        },
        onCancel : function (e) {
            alert("Picker cancelled!");
        }
    });    

}