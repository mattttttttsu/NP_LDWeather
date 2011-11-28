<?php

/**
 * Livedoor��WeatherHacks��XML����Ϥ��륯�饹�Ǥ���
 *
 * @version: 1.0.1
 * @author: �Ҥ�
 * @link: http://hrgs.itbdns.com/
 * @copyright: GASOLINE STAND
 */


/**
 * ���ϻ��Υǥե���Ȥ�ʸ��������
 */
define('LWWSPARSER_DEFAULT_ENCODING', 'EUC-JP');


class LWWS_Parser
{
	/**
	 * DOMDocument���饹�Υ��󥹥���
	 * @private
	 * @var object
	 */
	var $xmldoc;
	
	/**
	 * ���ϻ��Υ��󥳡��ǥ���
	 * @private
	 * @var string
	 */
	var $output_encoding;
	
	/**
	 * ���ݾ���Υ����ȥ�
	 * @private
	 * @var string
	 */
	var $title='';
	
	/**
	 * ͽ����
	 * @private
	 * @var string
	 */
	var $fdate='';
	
	
	/**
	 * ȯɽ��
	 * @private
	 * @var string
	 */
	var $pub_time='';
	
	/**
	 * ŷ����ʸ�������졢�ޤ�ʤɡ�
	 * @private
	 * @var string
	 */
	var $telop='';
	
	/**
	 * �ǹⵤ��
	 * @private
	 * @var string
	 */
	var $temp_max = '';
	
	/**
	 * ���㵤��
	 * @private
	 * @var string
	 */
	var $temp_min = '';
	
	/**
	 * ŷ���ξܺپ���
	 * @private
	 * @var string
	 */
	var $desc;
	
	/**
	 * livedoor weather�ؤΥ��(URL)
	 * @private
	 * @var string
	 */
	var $link_url;
	
	/**
	 * �����β���
	 * @private
	 * @var int
	 */
	var $img_w;
	
	/**
	 * �����ν���
	 * @private
	 * @var int
	 */
	var $img_h;
	
	/**
	 * ������URL
	 * @private
	 * @var int
	 */
	var $img_url;
	
	
	/**
	 * XML��������Ʋ��Ϥ�Ԥ��ޤ���
	 * 
	 * @param array $opt_arr ���ץ����ξ����ޤ�����
	 *                       $arr['id']  --- ��¬������ID
	 *                       $arr['day'] --- ����(=0)������(=1)��������(=2)
	 *                       $arr['output_encoding']  --- ���ϻ��Υ��󥳡��ǥ��󥰡�mb_convert_encodign��Ʊ��������ˡ�Ǥ���
	 * @return boolean true  => ��������
	 *                 false => ���ϼ���
	 */
	function init($opt_arr)
	{
		$id  = isset($opt_arr['id'])  ? $opt_arr['id']  : 63;
		$day = isset($opt_arr['day']) ? $opt_arr['day'] : 0;
		$output_encoding = isset($opt_arr['output_encoding']) ? $opt_arr['output_encoding'] : LWWSPARSER_DEFAULT_ENCODING;
		
		//ID�����դ����ͤǤϤʤ�
		if($id  === '' || !ctype_digit((string)$id))  return false;
		if($day === '' || !ctype_digit((string)$day)) return false;
		
		$this->output_encoding = $output_encoding;
		$data = &$this->_doHttpRequest($id, $day);
		
		$this->xmldoc = new DOMDocument('1.0', 'UTF-8');
		if(!$this->xmldoc->loadXML($data))
		{
			return false;
		}
		
		if( !$this->parseLWWSNode() )
		{
			return false;
		}
		
		return true;
	}
	
	
	/**
	 * ���ݾ���Υ����ȥ���֤��ޤ���
	 * ��.�֡����� ���� - ������ŷ����
	 * 
	 * @return string �����ȥ�
	 */
	function getTitle()
	{
		return $this->title;
	}
	
	
	/**
	 * ŷ�����֤��ޤ���
	 * ��.������ס����ޤ�פʤɡ�
	 * 
	 * @return string ŷ����ʸ����
	 */
	function getTelop()
	{
		return $this->telop;
	}

	
	/**
	 * ���ݤξܺپ�����֤��ޤ���
	 * 
	 * @return string �ܺپ����ʸ����
	 */
	function getDesc()
	{
		return $this->desc;
	}


	/**
	 * ͽ��������ꤷ���ե����ޥåȤ��Ѵ������֤��ޤ���
	 * ��.2��12����ͽ��ξ�硢��2006ǯ02��12���פʤɡ�
	 * 
	 * @param string $format date�ؿ���Ʊ�������եե����ޥåȤ�ʸ����
	 * @return string ͽ����
	 */
	function getDate($format='Yǯm��d��')
	{
		if($this->fdate == '')
			return '';
		
		return date($format, strtotime($this->fdate));
	}
	
	
	/**
	 * ȯɽ������ꤷ���ե����ޥåȤ��Ѵ������֤��ޤ���
	 * ��.��2006ǯ02��12�� 13���פʤɡ�
	 * 
	 * @param string $format date�ؿ���Ʊ�������եե����ޥåȤ�ʸ����
	 * @return string ȯɽ��
	 */
	function getPubTime($format='Yǯm��d�� H��')
	{
		if($this->pub_time == '')
			return '';
		
		return date($format, strtotime($this->pub_time));
	}
	
	
	/**
	 * �ǹⵤ�����֤��ޤ���
	 * 
	 * @return string �ǹⵤ��
	 */
	function getTempMax()
	{
		return $this->temp_max;
	}
	
	
	/**
	 * ���㵤��
	 * 
	 * @return string ���㵤��
	 */
	function getTempMin()
	{
		return $this->temp_min;
	}
	
	
	/**
	 * Livedoor Weather�ؤΥ�󥯤�URL���֤�
	 * 
	 * @return string URLʸ����
	 */
	function getLinkURL()
	{
		return $this->link_url;
	}
	
	
	/**
	 * �����β������֤���
	 * 
	 * @return int �����β���
	 */
	function getImageW()
	{
		return (int)$this->img_w;
	}
	
	
	/**
	 * �����ν������֤���
	 * 
	 * @return int �����ν���
	 */
	function getImageH()
	{
		return (int)$this->img_h;
	}
	
	
	/**
	 * ������URL���֤�
	 * 
	 * @return string ������URL
	 */
	function getImageURL()
	{
		return $this->img_url;
	}
	
	
	/**
	 * lwws��������Ϥ���
	 * 
	 * @param void
	 * @return boolean true  => ��������
	 *                 false => ���ϼ���
	 */
	function &parseLWWSNode()
	{
		$node_list = $this->xmldoc->getElementsByTagName('lwws');
		if($node_list->length == 0)
		{
			//lwws���������Ĥ���ʤ���
			return false;
		}
		
		$lwws = &$node_list->item(0);
		$node_list = &$lwws->childNodes;
		for($i=0; $i<$node_list->length; $i++)
		{
			//lwws������γƥΡ��ɤ�Ĵ�٤Ƥ�����
			$node = &$node_list->item($i);
			$this->parseNode($node);
		}
		return true;
	}
	
	
	/**
	 * lwws����������Ǥν�����Ԥ��ޤ���
	 * 
	 * @param object &$node DOMNode ���֥�������
	 */
	function parseNode(&$node)
	{
		if($node->nodeType != XML_ELEMENT_NODE)
		{
			//���ߤΥΡ��ɤ������Ǥʤ���н������ʤ�
			return;
		}
		
		//�����μ���˱����ƽ�����ʬ������
		switch($node->tagName)
		{
		case 'title':
			$this->title = $this->_convertEncoding($node->nodeValue);
			break;
		
		case 'forecastdate':
			$this->fdate = $node->nodeValue;
			break;
		
		case 'publictime':
			$this->pub_time = $node->nodeValue;
			break;
		
		case 'telop':
			$this->telop = $this->_convertEncoding($node->nodeValue);
			break;
		
		case 'temperature':
			
			//<temperature>���������Ĥ��ä�����
			//temperature�����β��Ϥ򳫻Ϥ��롣
			$node_list = $node->childNodes;
			for($i=0; $i<$node_list->length; $i++)
			{
				$child_node = $node_list->item($i);
				$this->parseTemperature($child_node);
			}
			break;
		
		case 'image':
			$this->img_w   = $this->_getChildNodeValue($node, 'width');
			$this->img_h   = $this->_getChildNodeValue($node, 'height');
			$this->img_url = $this->_getChildNodeValue($node, 'url');
			break;
		
		case 'link':
			$this->link_url = $node->nodeValue;
			break;
		
		case 'description':
			$this->desc = $this->_convertEncoding($node->nodeValue);
			break;
		}
	}
	
	
	/**
	 * temperature�����β��Ϥ�Ԥ��ޤ���
	 * 
	 * @private
	 * @param object &$node DOMNode���֥�������
	 */
	function parseTemperature(&$node)
	{
		if($node->nodeType != XML_ELEMENT_NODE)
		{
			//�����Ǥʤ���н������ʤ�
			return;
		}
		
		//���������Ƥ˱����ƽ�����ʬ��
		//min��max�ξ�硢�������celcius�������ͤ��٤Ȥ�����¸���롣
		switch($node->tagName)
		{
		case 'max':
			$this->temp_max = $this->_getChildNodeValue($node, 'celsius');
			break;
		
		case 'min':
			$this->temp_min = $this->_getChildNodeValue($node, 'celsius');
			break;
		}
	}
	
	
	/**
	 * LWWS�Υꥯ�����Ȥ�¹Ԥ��ޤ���
	 * 
	 * @private
	 * @param int $id ���������¬������ID
	 * @param int $day ����������������(=0��)����(=1)��������(=2)
	 * @return string �ꥯ�����Ȥμ¹Է�̤�XML
	 */
	function _doRequest($id, $day)
	{
		$empty = '';
		$day_str = '';
		switch($day)
		{
		case 0: $day_str = 'today';            break;
		case 1: $day_str = 'tomorrow';         break;
		case 2: $day_str = 'dayaftertomorrow'; break;
		default:
			return $empty;
		}
	
		$request = 'http://weather.livedoor.com/forecast/webservice/rest/v1?city='.$id.'&day='.$day_str;
		$fp = fopen($request, 'r');
		if(!$fp)
		{
			return $empty;
		}
		
		$buffer = '';
		while(!feof($fp))
		{
			$buffer .= fread($fp, 8192);
		}
		fclose($fp);
		
		return $buffer;
	}
	
	
	/**
	 * ���ꤷ�������Ǥ��ͤ���������֤��ޤ���
	 * 
	 * @private
	 * @param object &$node �ƤȤʤ����Ǥ�DOMNode���֥�������
	 * @param string $tag_name �ͤ��������ҥ�����̾��
	 * @return string �ҥ�����̾��
	 */
	function _getChildNodeValue(&$node, $tag_name)
	{
		if($node->nodeType != XML_ELEMENT_NODE)
		{
			return '';
		}
		
		$node_list = $node->childNodes;
		for($i=0; $i<$node_list->length; $i++)
		{
			$child_node = $node_list->item($i);
			if($child_node->nodeType != XML_ELEMENT_NODE)
			{
				continue;
			}
			
			$name = $child_node->tagName;
			if( strcmp($name, $tag_name) != 0 )
			{
				continue;
			}
			
			return $child_node->nodeValue;
		}
		return '';
	}
	
	
	/**
	 * ���󥳡��ǥ��󥰤��Ѵ���Ԥ��ޤ���
	 * 
	 * @private
	 * @param string $text �Ѵ����оݤȤʤ�ƥ�����
	 * @return string �Ѵ���Υƥ�����
	 */
	function _convertEncoding($text)
	{

		if($this->output_encoding != 'UTF-8')
		{
			return mb_convert_encoding($text, $this->output_encoding, 'UTF-8');
		}

		return $text;
	}
	
	
	/**
	 * LWWS�Υꥯ�����Ȥ�¹Ԥ��ޤ���
	 * 
	 * @private
	 * @param int $id ���������¬������ID
	 * @param int $day ����������������(=0��)����(=1)��������(=2)
	 * @return string �ꥯ�����Ȥμ¹Է�̤�XML
	 */
	function &_doHttpRequest($id, $day)
	{
		$empty = '';
		$day_str = '';
		switch($day)
		{
		case 0: $day_str = 'today';            break;
		case 1: $day_str = 'tomorrow';         break;
		case 2: $day_str = 'dayaftertomorrow'; break;
		default:
			return $empty;
		}
		
		$errno = 0;
		$errstr = '';
		$soc = fsockopen('weather.livedoor.com', '80', $errno, $errstr);
		if(!$soc)
		{
			return $empty;
		}
		
		fputs($soc, 'GET /forecast/webservice/rest/v1?city='.$id.'&day='.$day_str."\n");
		
		$buffer = '';
		while(!feof($soc))
		{
			$buffer .= fread($soc, 8192);
		}
		fclose($soc);
		
		return $buffer;
	}
}


?>