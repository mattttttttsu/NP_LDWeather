<?php

/**
 * NP_LDWeather�ץ饰����
 *
 * ���������<%LDWeather%>�����������ŷ��ͽ���ɽ�����ޤ���
 */ 


if (!function_exists('sql_table'))
{
	function sql_table($name)
	{
		return 'nucleus_' . $name;
	}
}

class NP_LDWeather extends NucleusPlugin
{
	function getName()       { return 'Livedoor Weather Hacks Plugin'; }
	function getAuthor()     { return '�Ҥ�'; }
	function getURL()        { return 'http://hrgs.itbdns.com/'; }
	function getVersion()    { return '1.0.2'; }
	function getDescription(){ return '���������&lt;%LDWeather%&gt;�����������ŷ��ͽ���ɽ�����ޤ���'; } 


	function supportsFeature($feature)
	{
		switch($feature)
		{
		case 'SqlTablePrefix':  return 1;
		case 'HelpPage':        return 1;
		default:
			return 0;
		}
	}

	function install()
	{
		// create some options
		$html = &$this->getDefaultDesignHTML();
		$this->createOption('design','ŷ��ͽ����Υǥ�����','textarea',$html);
		$this->createOption('jsurl','aj.php��js�ե������URL(�ǥե���Ȥϥץ饰����ǥ��쥯�ȥ�)','text','');
		$this->createOption('imgurl','ŷ�������Υǥ��쥯�ȥ��URL(�ǥե���Ȥϥץ饰����ǥ��쥯�ȥ�)','text','');
	}

	function doSkinVar($skinType, $mode = '')
	{ 
		$design = $this->getOption('design');
		echo $design;
		
		$this->writeJS();
	}


	/**
	 * ŷ��ͽ��Υǥե���ȤΥǥ������HTML���֤�
	 * @return string HTMLʸ����
	 */
	function &getDefaultDesignHTML()
	{
		$buffer = <<<DESIGN
<table cellspacing="1" cellpadding="3" bgcolor="000000">
	<tr>
		<td bgcolor="white">LIVEDOOR WEATHER</td>
	</tr>
	<tr>
		<td bgcolor="white" align="left" valign="top" width="240">
			
			<select id="weather_city_menu"></select><br>
			
			<br>
			
			<table >
				<tr>
					<td align="right">ȯɽ���</td>
					<td><div id="weather_pub_time0"></div></td>
				</tr>
				<tr>
					<td align="right">������</td>
					<td><div id="weather_date0"></div></td>
				</tr>
			</table>
			
			<br>
			
			<div align="center">
			<table bgcolor="gray" cellspacing="1" cellpadding="3">
				<tr align="center" bgcolor="white">
					<td>����</td>
					<td>����</td>
					<td>������</td>
				</tr>
				<tr align="center" bgcolor="white">
					<td><img id="weather_img0" border="0"><div id="weather_telop0"></div></td>
					<td><img id="weather_img1" border="0"><div id="weather_telop1"></div></td>
					<td><img id="weather_img2" border="0"><div id="weather_telop2"></div></td>
				</tr>
				<tr align="center" bgcolor="white">
					<td><font class="weather_tbl_temp_max" id="weather_temp_max0"></font>&nbsp;/&nbsp;<font class="weather_tbl_temp_min" id="weather_temp_min0"></font></td>
					<td><font class="weather_tbl_temp_max" id="weather_temp_max1"></font>&nbsp;/&nbsp;<font class="weather_tbl_temp_min" id="weather_temp_min1"></font></td>
					<td><font class="weather_tbl_temp_max" id="weather_temp_max2"></font>&nbsp;/&nbsp;<font class="weather_tbl_temp_min" id="weather_temp_min2"></font></td>
				</tr>
			</table>
			</div>
			
			<br>
			
			<table>
				<tr>
					<td>�ܺپ���</td>
				</tr>
				<tr>
					<td><div id="weather_desc0"></div></td>
				</tr>
			</table>
			
			<br>
			
			<br>
			<div align="right">
				<a id="weather_link0" target="_blank">����ŷ��ͽ��</a><br>
				powered by <a href="http://weather.livedoor.com/weather_hacks/" target="_blank">Weather Hacks</a>.
			</div>
		</td>
	</tr>
</table>
DESIGN;
		return $buffer;
	}
	
	
	/**
	 * ŷ��ͽ�󥹥���ץȤ�ư���ɬ�פ�javascript�μ����ߤ�
	 * �������Ԥ������ɤ���Ϥ���
	 */
	function writeJS()
	{
		//js�ե�������֤���Ƥ���ǥ��쥯�ȥ��URL���������
		$dir = $this->getOption('jsurl');
		if($dir == '')
		{
			//js�ե�����Υǥ��쥯�ȥ�̾������ξ��ϥץ饰����ǥ��쥯�ȥ��URL����ˤ���
			$dir = $this->getAdminURL();
			if(substr($dir, -1) != '/') $dir .= '/';
		}
		
		//�����ե�����Υǥ��쥯�ȥ��URL���������
		$img_dir = $this->getOption('imgurl');
		if(strlen($img_dir) > 0 && substr($img_dir, -1) != '/') $img_dir .= '/';
		
		echo '<script type="text/javascript" src="'.$dir.'js/ajlib.js" charset="EUC-JP"></script>'."\n";
		echo '<script type="text/javascript" src="'.$dir.'js/combolist.js" charset="EUC-JP"></script>'."\n";
		echo '<script type="text/javascript" src="'.$dir.'js/weather.js" charset="EUC-JP"></script>'."\n";
		
		echo '<script type="text/javascript" charset="EUC-JP">'."\n";
		echo '<!--'."\n";
		echo "Weather_init('".$dir."', '".$img_dir."');"."\n";
		
		echo '//-->'."\n";
		echo '</script>'."\n";
	}
};

?>