//HTMLÍ×ÁÇ¤ÎID
var WEATHER_CITY_MENU_ID = 'weather_city_menu';
var WEATHER_DATE_ID      = 'weather_date';
var WEATHER_PUB_TIME_ID  = 'weather_pub_time';
var WEATHER_TELOP_ID     = 'weather_telop';
var WEATHER_TEMP_MAX_ID  = 'weather_temp_max';
var WEATHER_TEMP_MIN_ID  = 'weather_temp_min';
var WEATHER_DESC_ID      = 'weather_desc';
var WEATHER_LINK_ID      = 'weather_link';
var WEATHER_IMAGE_ID     = 'weather_img';

//²èÁü¤äjs¥Õ¥¡¥¤¥ë¤ÎURL
var WEATHER_AJPHP_PATH   = '';
var WEATHER_IMGDIR_URL   = '';


var WEATHER_CITY_ARR =
[
	{'id': 1, 'value':'ÃÕÆâ(ËÌ³¤Æ»)'},
	{'id': 2, 'value':'°°Àî(ËÌ³¤Æ»)'},
	{'id': 3, 'value':'Î±Ë¨(ËÌ³¤Æ»)'},
	{'id': 4, 'value':'»¥ËÚ(ËÌ³¤Æ»)'},
	{'id': 5, 'value':'´ä¸«Âô(ËÌ³¤Æ»)'},
	{'id': 6, 'value':'¶æÃÎ°Â(ËÌ³¤Æ»)'},
	{'id': 7, 'value':'ÌÖÁö(ËÌ³¤Æ»)'},
	{'id': 8, 'value':'ËÌ¸«(ËÌ³¤Æ»)'},
	{'id': 9, 'value':'ÌæÊÌ(ËÌ³¤Æ»)'},
	{'id':10, 'value':'º¬¼¼(ËÌ³¤Æ»)'},
	{'id':11, 'value':'¶üÏ©(ËÌ³¤Æ»)'},
	{'id':12, 'value':'ÂÓ¹­(ËÌ³¤Æ»)'},
	{'id':13, 'value':'¼¼Íö(ËÌ³¤Æ»)'},
	{'id':14, 'value':'±º²Ï(ËÌ³¤Æ»)'},
	{'id':15, 'value':'È¡´Û(ËÌ³¤Æ»)'},
	{'id':16, 'value':'¹¾º¹(ËÌ³¤Æ»)'},
	{'id':17, 'value':'ÀÄ¿¹(ÀÄ¿¹¸©)'},
	{'id':18, 'value':'¤à¤Ä(ÀÄ¿¹¸©)'},
	{'id':19, 'value':'È¬¸Í(ÀÄ¿¹¸©)'},
	{'id':20, 'value':'½©ÅÄ(½©ÅÄ¸©)'},
	{'id':21, 'value':'²£¼ê(½©ÅÄ¸©)'},
	{'id':22, 'value':'À¹²¬(´ä¼ê¸©)'},
	{'id':23, 'value':'µÜ¸Å(´ä¼ê¸©)'},
	{'id':24, 'value':'ÂçÁ¥ÅÏ(´ä¼ê¸©)'},
	{'id':25, 'value':'ÀçÂæ(µÜ¾ë¸©)'},
	{'id':26, 'value':'ÇòÀĞ(µÜ¾ë¸©)'},
	{'id':27, 'value':'»³·Á(»³·Á¸©)'},
	{'id':28, 'value':'ÊÆÂô(»³·Á¸©)'},
	{'id':29, 'value':'¼òÅÄ(»³·Á¸©)'},
	{'id':30, 'value':'¿·¾±(»³·Á¸©)'},
	{'id':31, 'value':'Ê¡Åç(Ê¡Åç¸©)'},
	{'id':32, 'value':'¾®Ì¾ÉÍ(Ê¡Åç¸©)'},
	{'id':33, 'value':'¼ã¾¾(Ê¡Åç¸©)'},
	{'id':34, 'value':'ÀÅ²¬(ÀÅ²¬¸©)'},
	{'id':35, 'value':'¹ËÂå(ÀÅ²¬¸©)'},
	{'id':36, 'value':'»°Åç(ÀÅ²¬¸©)'},
	{'id':37, 'value':'ÉÍ¾¾(ÀÅ²¬¸©)'},
	{'id':38, 'value':'Ì¾¸Å²°(°¦ÃÎ¸©)'},
	{'id':39, 'value':'Ë­¶¶(°¦ÃÎ¸©)'},
	{'id':40, 'value':'´ôÉì(´ôÉì¸©)'},
	{'id':41, 'value':'¹â»³(´ôÉì¸©)'},
	{'id':42, 'value':'ÄÅ(»°½Å¸©)'},
	{'id':43, 'value':'ÈøÏÉ(»°½Å¸©)'},
	{'id':44, 'value':'ÉÙ»³(ÉÙ»³¸©)'},
	{'id':45, 'value':'ÉúÌÚ(ÉÙ»³¸©)'},
	{'id':46, 'value':'¶âÂô(ÀĞÀî¸©)'},
	{'id':47, 'value':'ÎØÅç(ÀĞÀî¸©)'},
	{'id':48, 'value':'Ê¡°æ(Ê¡°æ¸©)'},
	{'id':49, 'value':'ÆØ²ì(Ê¡°æ¸©)'},
	{'id':50, 'value':'¿·³ã(¿·³ã¸©)'},
	{'id':51, 'value':'Ä¹²¬(¿·³ã¸©)'},
	{'id':52, 'value':'¹âÈø(¿·³ã¸©)'},
	{'id':53, 'value':'ÁêÀî(¿·³ã¸©)'},
	{'id':54, 'value':'¿å¸Í(°ñ¾ë¸©)'},
	{'id':55, 'value':'ÅÚ±º(°ñ¾ë¸©)'},
	{'id':56, 'value':'±§ÅÔµÜ(ÆÊÌÚ¸©)'},
	{'id':57, 'value':'ÂçÅÄ¸¶(ÆÊÌÚ¸©)'},
	{'id':58, 'value':'Á°¶¶(·²ÇÏ¸©)'},
	{'id':59, 'value':'¿å¾å(·²ÇÏ¸©)'},
	{'id':60, 'value':'ºë¶Ì(ºë¶Ì¸©)'},
	{'id':61, 'value':'·§Ã«(ºë¶Ì¸©)'},
	{'id':62, 'value':'ÃáÉã(ºë¶Ì¸©)'},
	{'id':63, 'value':'Åìµş(ÅìµşÅÔ)'},
	{'id':64, 'value':'ÂçÅç(ÅìµşÅÔ)'},
	{'id':65, 'value':'È¬¾òÅç(ÅìµşÅÔ)'},
	{'id':66, 'value':'ÉãÅç(ÅìµşÅÔ)'},
	{'id':67, 'value':'ÀéÍÕ(ÀéÍÕ¸©)'},
	{'id':68, 'value':'Ä¸»Ò(ÀéÍÕ¸©)'},
	{'id':69, 'value':'´Û»³(ÀéÍÕ¸©)'},
	{'id':70, 'value':'²£ÉÍ(¿ÀÆàÀî¸©)'},
	{'id':71, 'value':'¾®ÅÄ¸¶(¿ÀÆàÀî¸©)'},
	{'id':72, 'value':'Ä¹Ìî(Ä¹Ìî¸©)'},
	{'id':73, 'value':'¾¾ËÜ(Ä¹Ìî¸©)'},
	{'id':74, 'value':'ÈÓÅÄ(Ä¹Ìî¸©)'},
	{'id':75, 'value':'¹ÃÉÜ(»³Íü¸©)'},
	{'id':76, 'value':'²Ï¸ı¸Ğ(»³Íü¸©)'},
	{'id':77, 'value':'ÂçÄÅ(¼¢²ì¸©)'},
	{'id':78, 'value':'É§º¬(¼¢²ì¸©)'},
	{'id':79, 'value':'µşÅÔ(µşÅÔÉÜ)'},
	{'id':80, 'value':'ÉñÄá(µşÅÔÉÜ)'},
	{'id':81, 'value':'Âçºå(ÂçºåÉÜ)'},
	{'id':82, 'value':'¿À¸Í(Ê¼¸Ë¸©)'},
	{'id':83, 'value':'ÉÙ²¬(Ê¼¸Ë¸©)'},
	{'id':84, 'value':'ÆàÎÉ(ÆàÎÉ¸©)'},
	{'id':85, 'value':'É÷²°(ÆàÎÉ¸©)'},
	{'id':86, 'value':'ÏÂ²Î»³(ÏÂ²Î»³¸©)'},
	{'id':87, 'value':'Ä¬Ì¨(ÏÂ²Î»³¸©)'},
	{'id':88, 'value':'²¬»³(²¬»³¸©)'},
	{'id':89, 'value':'ÄÅ»³(²¬»³¸©)'},
	{'id':90, 'value':'¹­Åç(¹­Åç¸©)'},
	{'id':91, 'value':'¾±¸¶(¹­Åç¸©)'},
	{'id':92, 'value':'¾¾¹¾(Åçº¬¸©)'},
	{'id':93, 'value':'ÉÍÅÄ(Åçº¬¸©)'},
	{'id':94, 'value':'À¾¶¿(Åçº¬¸©)'},
	{'id':95, 'value':'Ä»¼è(Ä»¼è¸©)'},
	{'id':96, 'value':'ÊÆ»Ò(Ä»¼è¸©)'},
	{'id':97, 'value':'²¼´Ø(»³¸ı¸©)'},
	{'id':98, 'value':'»³¸ı(»³¸ı¸©)'},
	{'id':99, 'value':'Ìø°æ(»³¸ı¸©)'},
	{'id':100, 'value':'Çë(»³¸ı¸©)'},
	{'id':101, 'value':'ÆÁÅç(ÆÁÅç¸©)'},
	{'id':102, 'value':'ÆüÏÂº´(ÆÁÅç¸©)'},
	{'id':103, 'value':'¹â¾¾(¹áÀî¸©)'},
	{'id':104, 'value':'¾¾»³(°¦É²¸©)'},
	{'id':105, 'value':'¿·µïÉÍ(°¦É²¸©)'},
	{'id':106, 'value':'±§ÏÂÅç(°¦É²¸©)'},
	{'id':107, 'value':'¹âÃÎ(¹âÃÎ¸©)'},
	{'id':108, 'value':'¼¼¸Í(¹âÃÎ¸©)'},
	{'id':109, 'value':'Â­À¢(¹âÃÎ¸©)'},
	{'id':110, 'value':'Ê¡²¬(Ê¡²¬¸©)'},
	{'id':111, 'value':'È¬È¨(Ê¡²¬¸©)'},
	{'id':112, 'value':'ÈÓÄÍ(Ê¡²¬¸©)'},
	{'id':113, 'value':'µ×Î±ÊÆ(Ê¡²¬¸©)'},
	{'id':114, 'value':'ÂçÊ¬(ÂçÊ¬¸©)'},
	{'id':115, 'value':'ÃæÄÅ(ÂçÊ¬¸©)'},
	{'id':116, 'value':'ÆüÅÄ(ÂçÊ¬¸©)'},
	{'id':117, 'value':'º´Çì(ÂçÊ¬¸©)'},
	{'id':118, 'value':'Ä¹ºê(Ä¹ºê¸©)'},
	{'id':119, 'value':'º´À¤Êİ(Ä¹ºê¸©)'},
	{'id':120, 'value':'¸·¸¶(Ä¹ºê¸©)'},
	{'id':121, 'value':'Ê¡¹¾(Ä¹ºê¸©)'},
	{'id':122, 'value':'º´²ì(º´²ì¸©)'},
	{'id':123, 'value':'°ËËüÎ¤(º´²ì¸©)'},
	{'id':124, 'value':'·§ËÜ(·§ËÜ¸©)'},
	{'id':125, 'value':'°¤ÁÉ²µÉ±(·§ËÜ¸©)'},
	{'id':126, 'value':'µí¿¼(·§ËÜ¸©)'},
	{'id':127, 'value':'¿ÍµÈ(·§ËÜ¸©)'},
	{'id':128, 'value':'µÜºê(µÜºê¸©)'},
	{'id':129, 'value':'±ä²¬(µÜºê¸©)'},
	{'id':130, 'value':'ÅÔ¾ë(µÜºê¸©)'},
	{'id':131, 'value':'¹âÀéÊæ(µÜºê¸©)'},
	{'id':132, 'value':'¼¯»ùÅç(¼¯»ùÅç¸©)'},
	{'id':133, 'value':'¼¯²°(¼¯»ùÅç¸©)'},
	{'id':134, 'value':'À¾Ç·É½(¼¯»ùÅç¸©)'},
	{'id':135, 'value':'Ì¾À¥(¼¯»ùÅç¸©)'},
	{'id':136, 'value':'ÆáÇÆ(²­Æì¸©)'},
	{'id':137, 'value':'Ì¾¸î(²­Æì¸©)'},
	{'id':138, 'value':'µ×ÊÆÅç(²­Æì¸©)'},
	{'id':139, 'value':'ÆîÂçÅìÅç(²­Æì¸©)'},
	{'id':140, 'value':'µÜ¸ÅÅç(²­Æì¸©)'},
	{'id':141, 'value':'ÀĞ³ÀÅç(²­Æì¸©)'},
	{'id':142, 'value':'Í¿Æá¹ñÅç(²­Æì¸©)'}
];


function Weather_init(ajphp_url, img_url)
{
	WEATHER_AJPHP_PATH = ajphp_url + 'aj.php';
	WEATHER_IMGDIR_URL = img_url;
	
	Weather_initCityMenu();
	Weather_update();
}


function Weather_initCityMenu()
{
	clearMenu(WEATHER_CITY_MENU_ID);
	for(var i=0; i < WEATHER_CITY_ARR.length; i++)
	{
		addMenu(WEATHER_CITY_MENU_ID, WEATHER_CITY_ARR[i]);
	}
	
	addEvtListner(WEATHER_CITY_MENU_ID, 'change', Weather_update);
	selectMenuByValue(WEATHER_CITY_MENU_ID, 63);
}


function Weather_update()
{
	id = getCurMenuValue(WEATHER_CITY_MENU_ID);
	var onLoadProc = function(obj)
	{
		eval('var arr = '+decodeURIComponent(obj.responseText)+';');
		
		var day_id=arr['day_id'];
		
		if(isElementExists(WEATHER_DATE_ID + day_id))      updateInnerHTML(WEATHER_DATE_ID + day_id, arr['date']);
		if(isElementExists(WEATHER_PUB_TIME_ID + day_id))  updateInnerHTML(WEATHER_PUB_TIME_ID + day_id, arr['pub_time']);
		if(isElementExists(WEATHER_TELOP_ID + day_id))     updateInnerHTML(WEATHER_TELOP_ID + day_id, arr['telop']);
		if(isElementExists(WEATHER_TEMP_MIN_ID + day_id))  updateInnerHTML(WEATHER_TEMP_MIN_ID + day_id, arr['temp_min']);
		if(isElementExists(WEATHER_TEMP_MAX_ID + day_id))  updateInnerHTML(WEATHER_TEMP_MAX_ID + day_id, arr['temp_max']);
		if(isElementExists(WEATHER_DESC_ID + day_id))      updateInnerHTML(WEATHER_DESC_ID + day_id, arr['desc']);
		if(isElementExists(WEATHER_LINK_ID + day_id))      updateAttribute(WEATHER_LINK_ID + day_id, 'href', arr['link_url']);
		if(isElementExists(WEATHER_IMAGE_ID + day_id))
		{
			var img_url = '';
			if(WEATHER_IMGDIR_URL == '')
			{
				img_url = arr['img_url'];
			}
			else
			{
				img_url = WEATHER_IMGDIR_URL + arr['img_name'];
			}
			updateAttribute(WEATHER_IMAGE_ID + day_id, 'src', img_url);
		}
	};
	
	for(var i=0; i < 3; i++)
	{
		requestFile('' , 'GET', WEATHER_AJPHP_PATH+'?id='+id+'&day='+i, true, onLoadProc);
	}
}
