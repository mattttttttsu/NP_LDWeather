//HTML���Ǥ�ID
var WEATHER_CITY_MENU_ID = 'weather_city_menu';
var WEATHER_DATE_ID      = 'weather_date';
var WEATHER_PUB_TIME_ID  = 'weather_pub_time';
var WEATHER_TELOP_ID     = 'weather_telop';
var WEATHER_TEMP_MAX_ID  = 'weather_temp_max';
var WEATHER_TEMP_MIN_ID  = 'weather_temp_min';
var WEATHER_DESC_ID      = 'weather_desc';
var WEATHER_LINK_ID      = 'weather_link';
var WEATHER_IMAGE_ID     = 'weather_img';

//������js�ե������URL
var WEATHER_AJPHP_PATH   = '';
var WEATHER_IMGDIR_URL   = '';


var WEATHER_CITY_ARR =
[
	{'id': 1, 'value':'����(�̳�ƻ)'},
	{'id': 2, 'value':'����(�̳�ƻ)'},
	{'id': 3, 'value':'α˨(�̳�ƻ)'},
	{'id': 4, 'value':'����(�̳�ƻ)'},
	{'id': 5, 'value':'�丫��(�̳�ƻ)'},
	{'id': 6, 'value':'���ΰ�(�̳�ƻ)'},
	{'id': 7, 'value':'����(�̳�ƻ)'},
	{'id': 8, 'value':'�̸�(�̳�ƻ)'},
	{'id': 9, 'value':'����(�̳�ƻ)'},
	{'id':10, 'value':'����(�̳�ƻ)'},
	{'id':11, 'value':'��ϩ(�̳�ƻ)'},
	{'id':12, 'value':'�ӹ�(�̳�ƻ)'},
	{'id':13, 'value':'����(�̳�ƻ)'},
	{'id':14, 'value':'����(�̳�ƻ)'},
	{'id':15, 'value':'ȡ��(�̳�ƻ)'},
	{'id':16, 'value':'����(�̳�ƻ)'},
	{'id':17, 'value':'�Ŀ�(�Ŀ���)'},
	{'id':18, 'value':'���(�Ŀ���)'},
	{'id':19, 'value':'Ȭ��(�Ŀ���)'},
	{'id':20, 'value':'����(���ĸ�)'},
	{'id':21, 'value':'����(���ĸ�)'},
	{'id':22, 'value':'����(��긩)'},
	{'id':23, 'value':'�ܸ�(��긩)'},
	{'id':24, 'value':'������(��긩)'},
	{'id':25, 'value':'����(�ܾ븩)'},
	{'id':26, 'value':'����(�ܾ븩)'},
	{'id':27, 'value':'����(������)'},
	{'id':28, 'value':'����(������)'},
	{'id':29, 'value':'����(������)'},
	{'id':30, 'value':'����(������)'},
	{'id':31, 'value':'ʡ��(ʡ�縩)'},
	{'id':32, 'value':'��̾��(ʡ�縩)'},
	{'id':33, 'value':'�㾾(ʡ�縩)'},
	{'id':34, 'value':'�Ų�(�Ų���)'},
	{'id':35, 'value':'����(�Ų���)'},
	{'id':36, 'value':'����(�Ų���)'},
	{'id':37, 'value':'�;�(�Ų���)'},
	{'id':38, 'value':'̾�Ų�(���θ�)'},
	{'id':39, 'value':'˭��(���θ�)'},
	{'id':40, 'value':'����(���츩)'},
	{'id':41, 'value':'�⻳(���츩)'},
	{'id':42, 'value':'��(���Ÿ�)'},
	{'id':43, 'value':'����(���Ÿ�)'},
	{'id':44, 'value':'�ٻ�(�ٻ���)'},
	{'id':45, 'value':'����(�ٻ���)'},
	{'id':46, 'value':'����(���)'},
	{'id':47, 'value':'����(���)'},
	{'id':48, 'value':'ʡ��(ʡ�温)'},
	{'id':49, 'value':'�ز�(ʡ�温)'},
	{'id':50, 'value':'����(���㸩)'},
	{'id':51, 'value':'Ĺ��(���㸩)'},
	{'id':52, 'value':'����(���㸩)'},
	{'id':53, 'value':'����(���㸩)'},
	{'id':54, 'value':'���(��븩)'},
	{'id':55, 'value':'�ڱ�(��븩)'},
	{'id':56, 'value':'���Ե�(���ڸ�)'},
	{'id':57, 'value':'���ĸ�(���ڸ�)'},
	{'id':58, 'value':'����(���ϸ�)'},
	{'id':59, 'value':'���(���ϸ�)'},
	{'id':60, 'value':'���(��̸�)'},
	{'id':61, 'value':'��ë(��̸�)'},
	{'id':62, 'value':'����(��̸�)'},
	{'id':63, 'value':'���(�����)'},
	{'id':64, 'value':'����(�����)'},
	{'id':65, 'value':'Ȭ����(�����)'},
	{'id':66, 'value':'����(�����)'},
	{'id':67, 'value':'����(���ո�)'},
	{'id':68, 'value':'ĸ��(���ո�)'},
	{'id':69, 'value':'�ۻ�(���ո�)'},
	{'id':70, 'value':'����(�����)'},
	{'id':71, 'value':'���ĸ�(�����)'},
	{'id':72, 'value':'Ĺ��(Ĺ�)'},
	{'id':73, 'value':'����(Ĺ�)'},
	{'id':74, 'value':'����(Ĺ�)'},
	{'id':75, 'value':'����(������)'},
	{'id':76, 'value':'�ϸ���(������)'},
	{'id':77, 'value':'����(���츩)'},
	{'id':78, 'value':'ɧ��(���츩)'},
	{'id':79, 'value':'����(������)'},
	{'id':80, 'value':'����(������)'},
	{'id':81, 'value':'���(�����)'},
	{'id':82, 'value':'����(ʼ�˸�)'},
	{'id':83, 'value':'�ٲ�(ʼ�˸�)'},
	{'id':84, 'value':'����(���ɸ�)'},
	{'id':85, 'value':'����(���ɸ�)'},
	{'id':86, 'value':'�²λ�(�²λ���)'},
	{'id':87, 'value':'Į̆(�²λ���)'},
	{'id':88, 'value':'����(������)'},
	{'id':89, 'value':'�Ż�(������)'},
	{'id':90, 'value':'����(���縩)'},
	{'id':91, 'value':'����(���縩)'},
	{'id':92, 'value':'����(�纬��)'},
	{'id':93, 'value':'����(�纬��)'},
	{'id':94, 'value':'����(�纬��)'},
	{'id':95, 'value':'Ļ��(Ļ�踩)'},
	{'id':96, 'value':'�ƻ�(Ļ�踩)'},
	{'id':97, 'value':'����(������)'},
	{'id':98, 'value':'����(������)'},
	{'id':99, 'value':'����(������)'},
	{'id':100, 'value':'��(������)'},
	{'id':101, 'value':'����(���縩)'},
	{'id':102, 'value':'���º�(���縩)'},
	{'id':103, 'value':'�⾾(���)'},
	{'id':104, 'value':'����(��ɲ��)'},
	{'id':105, 'value':'������(��ɲ��)'},
	{'id':106, 'value':'������(��ɲ��)'},
	{'id':107, 'value':'����(���θ�)'},
	{'id':108, 'value':'����(���θ�)'},
	{'id':109, 'value':'­��(���θ�)'},
	{'id':110, 'value':'ʡ��(ʡ����)'},
	{'id':111, 'value':'ȬȨ(ʡ����)'},
	{'id':112, 'value':'����(ʡ����)'},
	{'id':113, 'value':'��α��(ʡ����)'},
	{'id':114, 'value':'��ʬ(��ʬ��)'},
	{'id':115, 'value':'����(��ʬ��)'},
	{'id':116, 'value':'����(��ʬ��)'},
	{'id':117, 'value':'����(��ʬ��)'},
	{'id':118, 'value':'Ĺ��(Ĺ�긩)'},
	{'id':119, 'value':'������(Ĺ�긩)'},
	{'id':120, 'value':'����(Ĺ�긩)'},
	{'id':121, 'value':'ʡ��(Ĺ�긩)'},
	{'id':122, 'value':'����(���츩)'},
	{'id':123, 'value':'����Τ(���츩)'},
	{'id':124, 'value':'����(���ܸ�)'},
	{'id':125, 'value':'���ɲ�ɱ(���ܸ�)'},
	{'id':126, 'value':'��(���ܸ�)'},
	{'id':127, 'value':'�͵�(���ܸ�)'},
	{'id':128, 'value':'�ܺ�(�ܺ긩)'},
	{'id':129, 'value':'�䲬(�ܺ긩)'},
	{'id':130, 'value':'�Ծ�(�ܺ긩)'},
	{'id':131, 'value':'������(�ܺ긩)'},
	{'id':132, 'value':'������(�����縩)'},
	{'id':133, 'value':'����(�����縩)'},
	{'id':134, 'value':'��Ƿɽ(�����縩)'},
	{'id':135, 'value':'̾��(�����縩)'},
	{'id':136, 'value':'����(���츩)'},
	{'id':137, 'value':'̾��(���츩)'},
	{'id':138, 'value':'������(���츩)'},
	{'id':139, 'value':'��������(���츩)'},
	{'id':140, 'value':'�ܸ���(���츩)'},
	{'id':141, 'value':'�г���(���츩)'},
	{'id':142, 'value':'Ϳ�����(���츩)'}
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
