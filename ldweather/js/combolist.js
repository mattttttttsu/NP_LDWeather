function addMenu(obj_id, data_arr)
{
	var elem = document.getElementById(obj_id);
	
	var opt = document.createElement('option');
	opt.setAttribute('value', data_arr['id']);
	opt.innerHTML = data_arr['value'];

	elem.appendChild(opt);
}

function clearMenu(obj_id)
{
	var elem = document.getElementById(obj_id);
	
	var len = elem.childNodes.length;
	for(var i=len-1; i>=0; i--)
	{
		elem.removeChild(elem.childNodes[i]);
	}
}


function getCurMenuValue(obj_id)
{
	var elem = document.getElementById(obj_id);
	var sel = elem.selectedIndex;
	
	return elem.childNodes[sel].getAttribute('value');
}


function selectMenuByValue(obj_id, value)
{
	var elem = document.getElementById(obj_id);
	
	var id = 0;
	var child = null;
	for(i=0;i<elem.childNodes.length; i++)
	{
		child = elem.childNodes[i];
		cmp_value = child.value;
		
		if(cmp_value == value)
		{
			elem.selectedIndex = i;
			return;
		}
	}
}
