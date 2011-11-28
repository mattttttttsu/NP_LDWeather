function createHttpRequest()
{
	//Win ie用
	if(window.ActiveXObject)
	{
		try
		{
			//MSXML2以降用
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try
			{
				//旧MSXML用
				return new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e2)
			{
				return null;
			}
		}
	}
	else if(window.XMLHttpRequest)
	{
		//Win ie以外のXMLHttpRequestオブジェクト実装ブラウザ用
		return new XMLHttpRequest();
	}
	else
	{
		return null;
	}
}


//ファイルにアクセスし受信内容を確認します
function requestFile( data , method , fileName , async, callback_fn)
{
	//XMLHttpRequestオブジェクト生成
	var httpoj = createHttpRequest();

	//open メソッド
	httpoj.open( method , fileName , async );

	//受信時に起動するイベント
	httpoj.onreadystatechange = function()
	{
		//readyState値は4で受信完了
		if (httpoj.readyState==4)
		{ 
			//コールバック
			callback_fn(httpoj);
		}
	}

	//send メソッド
	httpoj.send( data );
}


function updateInnerHTML(obj_id, value)
{
	var elem = document.getElementById(obj_id);
	elem.innerHTML = value;
}


function updateAttribute(obj_id, attr_name, value)
{
	var elem = document.getElementById(obj_id);
	elem.setAttribute(attr_name, value);
}


function addEvtListner(obj_id, ev, func)
{
	var elem = document.getElementById(obj_id);
	
	if(elem.attachEvent)
	{
		elem.attachEvent('on'+ev, func);
	}
	else if(elem.addEventListener)
	{
		elem.addEventListener(ev, func, true);
	}
}


function isElementExists(obj_id)
{
	var elem = document.getElementById(obj_id);
	return (!elem) ? false : true;
}
