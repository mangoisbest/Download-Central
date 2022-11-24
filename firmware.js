document.getElementById("BotzStoreButton").addEventListener("click", BotzStore)
document.getElementById("OperaGXButton").addEventListener("click", OperaGX)
document.getElementById("BraveBrowser").addEventListener("click", BraveBrowser)

function DisplayApp(title, creator, date, download, version) {
  appTitle.innerHTML = title 
  appCreator.innerHTML = creator
  appDate.innerHTML = date
  DownloadArea.innerHTML = download
  appVersion.innerHTML = version
};

function BraveBrowser() {
  DisplayApp(
    "App Name: Brave Browser", // App Name; The name of the application.
    "App Creator: Brave Software Inc", // App Creator; the creator/developer of the application.
    "App Created: n/a", // App Created; The date that the application was made.
    '<a href="https://github.com/brave/brave-browser/releases/download/v1.45.131/BraveBrowserStandaloneSetup.exe">Download Brave Browser</a>', // App Download Link; the link to download the application.
    "App Version: v1.45.131" // App Version; the version of the application
  )
};

function BotzStore() {
  DisplayApp(
    "App Name: Botz Store", // App Name; The name of the application.
    "App Creator: ASHES SOFTWARE", // App Creator; the creator/developer of the application.
    "App Created: 2022", // App Created; The date that the application was made.
    '<a href="https://github.com/mangoisbest/Download-Central-Dev-master/releases/download/V1.0.2/downloadCentralSetupV1.0.2.exe">Download Botz Store</a>', // App Download Link; the link to download the application.
    "App Version: v1.0.3" // App Version; the version of the application
  )
};

function OperaGX() {
  DisplayApp(
    "App Name: Oprea GX Browser", // App Name; The name of the application.
    "App Creator: n/a", // App Creator; the creator/developer of the application.
    "App Created: n/a", // App Created; The date that the application was made.
    '<a href="https://get.geo.opera.com/pub/opera_gx/92.0.4561.71/win/Opera_GX_92.0.4561.71_Setup_x64.exe">Download OpreaGX Browser</a>', // App Download Link; the link to download the application.
    "App Version: v92.0.4561.71" // App Version; the version of the application
  )
};
