<?xml version="1.0" ?>
<SMARTFACEPROJECT xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="SmartfaceProjectPlayerUpdated.xsd">
<PROJECT SID="-1" WS="http://www.smartface.io" dateLastResourceUpdated="010101000000" AppID="1701667150" AppName="Smartface Demo" CID="0" Ver="1.0.0" ScreenW="640" ScreenH="960" Dpi="326" FacebookAppUID="" FacebookAppSecret="" TwitterConsumerKey="" TwitterConsumerSecret="">
	<MAPAPI AndroidMapKey="" IosGeocodingKey="" />
	<ADMOB AdMobPublisherId="" AdMobTestUsage="0" />
	<DEVICEORIENTATIONS DeviceOrientationPortrait="1" DeviceOrientationUpsideDown="0" DeviceOrientationLandscapeLeft="0" DeviceOrientationLandscapeRight="0" />
	<ANDROIDPRODUCTKEY AndroidProductKey="" />
	<ANDROIDSENDERID AndroidSenderID="" />
	<APPLICATIONCACHESIZE ApplicationCacheSize="50" />
	<APPLICATIONNAME ApplicationName="smartface demo" />
	<NAVIGATIONBARUPDATE NavigationBarUpdate="1" />
	<RESOURCES>
	</RESOURCES>
	<LOGGING LogServerUrl="" MaxLogSize="30" LogError="0" LogWarning="0" LogDebug="0">
	</LOGGING>
	<DATATABLES>
		<TABLE ID="B8106DDB-E6CF-46C7-919F-E235CC3901E2" Name="events" Media="0" Guid="" OverrideOnUpdate="1" IsSecure="0" RunOnMemory="0">
			<COLUMN ID="1" Name="eName" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="2" Name="address" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="3" Name="dscrptn" Type="STRING" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="4" Name="isOnCampus" Type="INTEGER" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="5" Name="clicks" Type="INTEGER" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="6" Name="longitude" Type="FLOAT" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
			<COLUMN ID="7" Name="latitude" Type="FLOAT" PrimaryKey="0" AutoIncrement="0" ForeignKey="00000000-0000-0000-0000-000000000000" DefaultValue="" PrimaryAssistant="0" IsSecure="0" />
		</TABLE>
	</DATATABLES>
	<DATASETS>
		<DATASET ID="38D69391-D574-420F-8A83-EB8A371926AE" Name="EventsRepeatBoxDS" TableID="B8106DDB-E6CF-46C7-919F-E235CC3901E2" AutoCommit="0" FastCommit="0" PreserveState="0">
			<SQLTEXT>
			<![CDATA[
SELECT * FROM "events" WHERE "isCampus" = 1
			]]>
			</SQLTEXT>
			<COLUMNS>
				<COLUMN ID="1" Name="events.eName" />
				<COLUMN ID="2" Name="events.address" />
				<COLUMN ID="3" Name="events.dscrptn" />
				<COLUMN ID="4" Name="events.isOnCampus" />
				<COLUMN ID="5" Name="events.clicks" />
				<COLUMN ID="6" Name="events.longitude" />
				<COLUMN ID="7" Name="events.latitude" />
			</COLUMNS>
		</DATASET>
	</DATASETS>
	<GLOBALEVENTS>
		<ONSTART script="Global_Events_OnStart(e);" />
		<ONEXIT script="Global_Events_OnExit(e);" />
		<ONERROR script="Global_Events_OnError(e);" />
	</GLOBALEVENTS>
</PROJECT>
</SMARTFACEPROJECT>