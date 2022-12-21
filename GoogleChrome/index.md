<img crossorigin="anonymous" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1024px-Google_Chrome_icon_%28February_2022%29.svg.png" class="svg" alt="Google Chrome icon (February 2022).svg" width="50" height="50">

**Gogle Chrome**

**By Google Inc**

<style>
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

/* Style the close button */
.topright {
  float: right;
  cursor: pointer;
  font-size: 28px;
}

.topright:hover {color: red;}
</style>

<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'AircraftInfomation')">Aircraft Infomation</button>
  <button class="tablinks" onclick="openTab(event, 'DownloadSites')">Download Sites</button>
  <button class="tablinks" onclick="openTab(event, 'DirectDownloads')">Direct Downloads</button>
</div>

<div class="tabcontent" id="AircraftInfomation">
  <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
  <h3>Aircraft Infomation</h3>
  <p>Latest Version: 1.7 (September 13th 2022)</p><p>Aircraft Designed by: Toliss</p><p>Addon Price: USD$89.92</p><p>Supported Sim(s): Xplane11 only</p>
</div>

<div class="tabcontent" id="DownloadSites">
  <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
  <h3>Download Sites</h3>
  <p><a href="https://secure.simmarket.com/toliss-inc-toliss-airbus-a319-for-x-plane-12-and-11.phtml">simmarket.com</a></p> 
</div>

<div class="tabcontent" id="DirectDownloads">
  <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
  <h3>Direct Downloads</h3>
  <p>No direct downloads available, this aircraft is  a paid addon.</p>
</div>
