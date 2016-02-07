
//Data.execute("DROP TABLE IF EXISTS events;");
//Data.execute("Create table events (eName string, address string, date string, dscrptn string, isOnCampus integer, clicks integer, longitude float, latitude float)");
Data.execute("insert into events values('My first row', 'sd', '1/1/1', 'magical event', 1, 0, 40.0, 60.0) ;");
Data.execute("insert into events values('Smartface.Inc', 'sd', 1/1/1, 'magical event', 1, 0, 5.0, 54.0);");
Data.execute("insert into events values('Smartface App Studio', 'sd', '1/1/1', 'magical event', 1, 0, 56.0, 5.6);");
Data.execute("insert into events values(?, ?, ?, ?, ?, ?, ? ,?);", 'SmarStudio', "asd", "2/2/2", 'magical event', 1, 0, 6.6, 6.6);
//var tmp;
Data.dynamicDS = new Data.Dataset({
    selectQuery : "select * from events"
});
Data.dynamicDS.refresh();
parseData.getAllMapPoints(function(mapPoints){
    for(var i = 0; i < mapPoints.length; i++)
    {
   
        dateTmp = mapPoints[i].date.iso;
        dayTmp = dateTmp.substring(0, 9).split("-");
        timeTmp = dateTmp.substring(11, 19).split(":");
        year = dayTmp[0];
        month = dayTmp[1];
        day = dayTmp[2];
        hour = timeTmp[0];
        minute = timeTmp[1];
        
        eDate = (new Date(year, month, day, hour, minute, 0, 0));
        Data.execute('insert into events values(?, ?, ?, ?, ?, ?, ?, ?);', 
            mapPoints[i].name,
            mapPoints[i].address,
            eDate.toLocaleDateString(),
            mapPoints[i].eDescription,
            mapPoints[i].isOnCampus? 1: 0,
            mapPoints[i].clicks,
            mapPoints[i].location.longitude,
            mapPoints[i].location.latitude
        );
       
      //Data.execute("insert into events values('"+mapPoints[i].address+"');");
      //Data.execute("insert into events (col1) values(?);",  mapPoints[i].address); //Values are passed as it is
     // alert("ran");
      //alert(mapPoints[i].address);
   }
   
    Data.dynamicDS.refresh();
});

//Data.execute("insert into events values(?);", tmp[0].address);

alert(Device.screenHeight + ": "  + Device.statusBarHeight);
var lbl = new SMF.UI.Label({
    top : "0%",
    left : "0%",
    width : "100%",
    height : "100%",
    fillColor : "#FFFFFF",
    textAlignment : SMF.UI.TextAlignment.center
});
var repeatBox1 = new SMF.UI.RepeatBox({
    name : "repeatBox1",
    width : "100%",
    height : "100%",
    left : "0%",
    top : "0%",
    dataSource : Data.dynamicDS,
    showScrollbar : true,
    fillColor : "white",
    backgroundTransparent : false,
    onRowRender : function (e) {
        Data.dynamicDS.seek(e.rowIndex);
        this.controls[0].text = Data.dynamicDS.eName + " on " +Data.dynamicDS.isOnCampus + "," + Data.dynamicDS.clicks;
       // alert(Data.dynamicDS.eName + Data.dynamicDS.address + Data.dynamicDS.dscrptn + Data.dynamicDS.date + Data.dynamicDS.isOnCampus + Data.dynamicDS.clicks);
        
    }
}); 
repeatBox1.itemTemplate.height = Device.screenHeight / 7;
repeatBox1.itemTemplate.imageFillType = SMF.UI.ImageFillType.stretch;
repeatBox1.enablePullDownToRefresh = true;
//Adding label to repeatBox object
repeatBox1.itemTemplate.add(lbl);
Pages.Page1.Events_Pane.add(repeatBox1);
