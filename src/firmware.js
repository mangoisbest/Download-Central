document.getElementById("BotzStoreButton").addEventListener("click", BotzStore)
document.getElementById("OperaGXButton").addEventListener("click", OperaGX)
document.getElementById("BraveBrowser").addEventListener("click", BraveBrowser)
document.getElementById("GoogleChrome").addEventListener("click", GoogleChrome)

function DisplayApp(APPTITLE, APPCREATOR, APPDATE, APPDOWNLOADLINK, APPVERSION, APPICON, APPDETAILS) {
  appTitle.innerHTML = `App Title: ${APPTITLE}`
  appCreator.innerHTML = `App Creator: ${APPCREATOR}`
  appDate.innerHTML = `Date Created: ${APPDATE}`
  DownloadArea.innerHTML = APPDOWNLOADLINK
  appVersion.innerHTML = `App Version: ${APPVERSION}`
  appIcon.innerHTML = APPICON
  appDetails.innerHTML = `App Description: ${APPDETAILS}`
};

function GoogleChrome() {
  DisplayApp(
    'Google Chrome',
    'Google',
    'n/a',
    '<a href="https://dw.uptodown.com/dwn/tJKOtTtR8xN7WmETOIqlVyYm3OVe90L_bd7gybMHnpoFMpsQ8PdiD_FnXDwq736AnaQzBqW0Ixeiydnd6gWidxnl8EUQzsWCX3rFIISqP5oUgXQBYd-Pafu8DgSab0zO/dVlDwbNFxwc6e2AgY5aw9STLW73CF3PBeFA07BV3PX1vi9kBxz2qrrNIfRvkxG8V3T5Wj9PkTVJ-H4pvfRqxeK9gIDWa-GnqR7eea0G58SpqE6TBHou79eSHZt0F6bap/eFeZEzKqRTjuCmH7fpUOXtIblHZFWx8EY7l_7O9YWHQn4emkdS1nAA5j9-BKgkLtAa32mSdVx9I_ec5m7MNYCx0F3xyIjM5F0zgf2F82ZJI=/">Download Google Chrome</a>',
    'v107.0.5304.107',
    '<img src="https://images.sftcdn.net/images/t_app-logo-xl,f_auto/p/b2e6d43a-96bf-11e6-a674-00163ed833e7/965337810/chrome-Google_Chrome_logo.png" width="50" height="50">',
    'Google Chrome is a free cross-platform web browser that launched for Microsoft Windows platforms in 2008, preceding later releases on Mac, Linux, and mobile devices. It has gained popularity worldwide, featuring tools such as file downloads, password settings, and bookmarks. You can load several web pages or use a search engine to find any topic on the internet.'
  )
}

function BraveBrowser() {
  DisplayApp(
    "Brave Browser", // App Name; The name of the application.
    "Brave Software Inc", // App Creator; the creator/developer of the application.
    "n/a", // App Created; The date that the application was made.
    '<a href="http://laptop-updates.brave.com/download/UPT818">Download Brave Browser</a>', // App Download Link; the link to download the application.
    "v1.45.127", // App Version; the version of the application
    '<img src="https://windows-cdn.softpedia.com/screenshots/ico/Brave.png" width="50" height="50">',
    'The best privacy online, Browse privately. Search privately. And ditch Big Tech.'
  )
};

function BotzStore() {
  DisplayApp(
    "Botz Store", // App Name; The name of the application.
    "ASHES SOFTWARE", // App Creator; the creator/developer of the application.
    "2022", // App Created; The date that the application was made.
    '<a href="https://github.com/mangoisbest/Download-Central-Dev-master/releases/download/V1.0.2/downloadCentralSetupV1.0.2.exe">Download Botz Store</a>', // App Download Link; the link to download the application.
    "v1.0.3", // App Version; the version of the application
    '<p class="warn">No image currently.</p>',
    'Download central is a windows app to download other desktop apps'
  )
};

function OperaGX() {
  DisplayApp(
    "Opera GX Browser", // App Name; The name of the application.
    "Opera Software", // App Creator; the creator/developer of the application.
    "n/a", // App Created; The date that the application was made.
    '<a href="https://net.geo.opera.com/opera_gx/stable/windows?utm_source=utod&utm_medium=pb&utm_campaign=organic">Download OperaGX Browser</a>', // App Download Link; the link to download the application.
    "v92.0.4561.64", // App Version; the version of the application
    '<img src="https://play-lh.googleusercontent.com/sTPusxi30AHxiRHEFK9i5BCK-Y8BJ6Y_NCQNq6l9U6BuDv8kNRdIfsHzvmlA1XULDb3c" width="50" height="50">',
    'Get an unparalleled gaming and browsing experience on mobile and desktop. Set limits on CPU, RAM, and Network usage, use Discord & Twitch from the sidebar, and connect mobile and desktop browsers with the file-sharing Flow feature.'
  )
};
