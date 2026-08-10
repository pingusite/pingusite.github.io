/*var bannerImage = new Array('https://hit-entertainment.github.io/banners/uk/hopfarmbanner.jpg');
var bannerLink = new Array( 'https://web.archive.org/web/20140924172823/http://www.hitentertainment.com/hopfarm/');
var isFlash = new Array(0,1,0);
var numBanners = 1;
n = Math.floor(Math.random() * numBanners);
output = "<br/><div align='center'>";
if ( isFlash[n] ) {
	output += "<OBJECT classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'";
	output += " codebase='https://web.archive.org/web/20140924172823/http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' WIDTH='468' HEIGHT='60'><PARAM NAME=wmode VALUE=transparent><PARAM NAME=movie VALUE='" + bannerImage[n];
	output += "'><PARAM NAME=quality VALUE=high> <EMBED base='https://hit-entertainment.github.io/banners/uk/' src='" + bannerImage[n];
	output += "' quality=high WIDTH='468' HEIGHT='60' TYPE='application/x-shockwave-flash' PLUGINSPAGE='http:/";
	output += "/www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash'></EMBED></OBJECT>";
//	document.write(output);
} else {
	output += "<a href='" + bannerLink[n] + "' target='_blank'><img src='" + bannerImage[n] + "' alt='' border='0'></a>"
//	document.write();
}
output += "</div>";
document.write(output);
*/

//-- temp location for ad replacement code 

var topAd = document.getElementById('topAd');
topAd.innerHTML = '<a target="_blank" href="https://web.archive.org/web/20140924172823im_/https://itunes.apple.com/uk/app/mike-knight-storybook-treasury/id799104830?mt=8"><img src="assets/ads/MTK_StoryboookTreasury_728x90_R1.jpg" width="728" height="90" alt="" border="0"></a>';

var rightAd = document.getElementById('rightAd');
rightAd.innerHTML = '<a target="_blank" href="https://web.archive.org/web/20140924172823im_/https://itunes.apple.com/uk/app/mike-knight-storybook-treasury/id799104830?mt=8"><img src="assets/ads/MTK_StoryboookTreasury_160X600_R1.jpg" width="160" height="600" alt="" border="0"></a>';
