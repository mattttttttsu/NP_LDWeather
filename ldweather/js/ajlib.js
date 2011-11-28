function createHttpRequest()
{
	//Win ie��
	if(window.ActiveXObject)
	{
		try
		{
			//MSXML2�ʹ���
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try
			{
				//��MSXML��
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
		//Win ie�ʳ���XMLHttpRequest���֥������ȼ����֥饦����
		return new XMLHttpRequest();
	}
	else
	{
		return null;
	}
}


//�ե�����˥����������������Ƥ��ǧ���ޤ�
function requestFile( data , method , fileName , async, callback_fn)
{
	//XMLHttpRequest���֥�����������
	var httpoj = createHttpRequest();

	//open �᥽�å�
	httpoj.open( method , fileName , async );

	//�������˵�ư���륤�٥��
	httpoj.onreadystatechange = function()
	{
		//readyState�ͤ�4�Ǽ�����λ
		if (httpoj.readyState==4)
		{ 
			//������Хå�
			callback_fn(httpoj);
		}
	}

	//send �᥽�å�
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
