document.getElementById("BotzStoreButton").addEventListener("click", BotzStore)
document.getElementById("OperaGXButton").addEventListener("click", OpreaGX)
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
    "App Name: Brave Browser",
    "App Creator: Brave Software Inc",
    "App Created: n/a",
    '<a href="https://github.com/brave/brave-browser/releases/download/v1.45.131/BraveBrowserStandaloneSetup.exe">Download Brave Browser</a>',
    "App Version: v1.45.131"
  )
};


function BraveBrowser() {
  appTitle.innerHTML = "App Name: Brave Browser"
  appCreator.innerHTML = "App Creator: Brave Software Inc"
  appDate.innerHTML = "App Created: n/a"
  DownloadArea.innerHTML = '<a href="https://github.com/brave/brave-browser/releases/download/v1.45.131/BraveBrowserStandaloneSetup.exe">Download Brave Browser</a>'
  appVersion.innerHTML = "App Version: v1.45.131"
};

function BotzStore() {
  appTitle.innerHTML = "App Name: Botz Store"
  appCreator.innerHTML = "App Creator: ASHES SOFTWARE"
  appDate.innerHTML = "App Created: n/a"
  DownloadArea.innerHTML = '<a href="https://github.com/mangoisbest/Download-Central-Dev-master/releases/download/V1.0.2/downloadCentralSetupV1.0.2.exe">Download Botz Store</a>'
  appVersion.innerHTML = "App Version: v1.0.2"
};

function OpreaGX() {
  appTitle.innerHTML = "App Name: Oprea GX Browser"
  appCreator.innerHTML = "App Creator: n/a"
  appDate.innerHTML = "App Created: n/a"
  DownloadArea.innerHTML = '<a href="https://get.geo.opera.com/pub/opera_gx/92.0.4561.71/win/Opera_GX_92.0.4561.71_Setup_x64.exe">Download OpreaGX Browser</a>'
  appVersion.innerHTML = "App Version: v92.0.4561.71"
};

