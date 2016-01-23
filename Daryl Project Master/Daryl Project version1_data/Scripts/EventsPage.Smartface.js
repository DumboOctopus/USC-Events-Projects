function EventsPage_Self_OnShow() {
    //Comment following block for removing navigationbar/actionbar sample
    //Copy this code block to every page onShow
    this.statusBar.transparent = true;
    Data.execute("create table eventsNearby (dcrptn string)");
    Data.execute("insert into eventsNearby values('heh');");
    /**/
}
/**
* @param {EventArguments} e Returns some attributes about the specified functions
* @this EventsPage.RepeatBox1
*/
function EventsPage_RepeatBox1_OnShow(e){
    
}