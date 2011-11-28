<?php

/**
 * LivedoorのWeatherHacksのXMLを解析するクラスです。
 *
 * @version: 1.0.1
 * @author: ひろき
 * @link: http://hrgs.itbdns.com/
 * @copyright: GASOLINE STAND
 */


/**
 * 出力時のデフォルトの文字コード
 */
define('LWWSPARSER_DEFAULT_ENCODING', 'EUC-JP');


class LWWS_Parser
{
	/**
	 * DOMDocumentクラスのインスタンス
	 * @private
	 * @var object
	 */
	var $xmldoc;
	
	/**
	 * 出力時のエンコーディング
	 * @private
	 * @var string
	 */
	var $output_encoding;
	
	/**
	 * 気象情報のタイトル
	 * @private
	 * @var string
	 */
	var $title='';
	
	/**
	 * 予報日
	 * @private
	 * @var string
	 */
	var $fdate='';
	
	
	/**
	 * 発表日
	 * @private
	 * @var string
	 */
	var $pub_time='';
	
	/**
	 * 天気の文字列。晴れ、曇りなど。
	 * @private
	 * @var string
	 */
	var $telop='';
	
	/**
	 * 最高気温
	 * @private
	 * @var string
	 */
	var $temp_max = '';
	
	/**
	 * 最低気温
	 * @private
	 * @var string
	 */
	var $temp_min = '';
	
	/**
	 * 天気の詳細情報
	 * @private
	 * @var string
	 */
	var $desc;
	
	/**
	 * livedoor weatherへのリンク(URL)
	 * @private
	 * @var string
	 */
	var $link_url;
	
	/**
	 * 画像の横幅
	 * @private
	 * @var int
	 */
	var $img_w;
	
	/**
	 * 画像の縦幅
	 * @private
	 * @var int
	 */
	var $img_h;
	
	/**
	 * 画像のURL
	 * @private
	 * @var int
	 */
	var $img_url;
	
	
	/**
	 * XMLを取得して解析を行います。
	 * 
	 * @param array $opt_arr オプションの情報を含む配列
	 *                       $arr['id']  --- 観測地点のID
	 *                       $arr['day'] --- 今日(=0)、明日(=1)、明後日(=2)
	 *                       $arr['output_encoding']  --- 出力時のエンコーディング。mb_convert_encodignと同じ指定方法です。
	 * @return boolean true  => 解析成功
	 *                 false => 解析失敗
	 */
	function init($opt_arr)
	{
		$id  = isset($opt_arr['id'])  ? $opt_arr['id']  : 63;
		$day = isset($opt_arr['day']) ? $opt_arr['day'] : 0;
		$output_encoding = isset($opt_arr['output_encoding']) ? $opt_arr['output_encoding'] : LWWSPARSER_DEFAULT_ENCODING;
		
		//ID、日付が数値ではない
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
	 * 気象情報のタイトルを返します。
	 * 例.「○○県 ○○ - 明日の天気」
	 * 
	 * @return string タイトル
	 */
	function getTitle()
	{
		return $this->title;
	}
	
	
	/**
	 * 天気を返します。
	 * 例.「晴れ」、「曇り」など。
	 * 
	 * @return string 天気の文字列
	 */
	function getTelop()
	{
		return $this->telop;
	}

	
	/**
	 * 気象の詳細情報を返します。
	 * 
	 * @return string 詳細情報の文字列
	 */
	function getDesc()
	{
		return $this->desc;
	}


	/**
	 * 予報日を指定したフォーマットに変換して返します。
	 * 例.2月12日の予報の場合、「2006年02月12日」など。
	 * 
	 * @param string $format date関数と同じ、日付フォーマットの文字列
	 * @return string 予報日
	 */
	function getDate($format='Y年m月d日')
	{
		if($this->fdate == '')
			return '';
		
		return date($format, strtotime($this->fdate));
	}
	
	
	/**
	 * 発表日を指定したフォーマットに変換して返します。
	 * 例.「2006年02月12日 13時」など。
	 * 
	 * @param string $format date関数と同じ、日付フォーマットの文字列
	 * @return string 発表日
	 */
	function getPubTime($format='Y年m月d日 H時')
	{
		if($this->pub_time == '')
			return '';
		
		return date($format, strtotime($this->pub_time));
	}
	
	
	/**
	 * 最高気温を返します。
	 * 
	 * @return string 最高気温
	 */
	function getTempMax()
	{
		return $this->temp_max;
	}
	
	
	/**
	 * 最低気温
	 * 
	 * @return string 最低気温
	 */
	function getTempMin()
	{
		return $this->temp_min;
	}
	
	
	/**
	 * Livedoor WeatherへのリンクのURLを返す
	 * 
	 * @return string URL文字列
	 */
	function getLinkURL()
	{
		return $this->link_url;
	}
	
	
	/**
	 * 画像の横幅を返す。
	 * 
	 * @return int 画像の横幅
	 */
	function getImageW()
	{
		return (int)$this->img_w;
	}
	
	
	/**
	 * 画像の縦幅を返す。
	 * 
	 * @return int 画像の縦幅
	 */
	function getImageH()
	{
		return (int)$this->img_h;
	}
	
	
	/**
	 * 画像のURLを返す
	 * 
	 * @return string 画像のURL
	 */
	function getImageURL()
	{
		return $this->img_url;
	}
	
	
	/**
	 * lwwsタグを解析する
	 * 
	 * @param void
	 * @return boolean true  => 解析成功
	 *                 false => 解析失敗
	 */
	function &parseLWWSNode()
	{
		$node_list = $this->xmldoc->getElementsByTagName('lwws');
		if($node_list->length == 0)
		{
			//lwwsタグが見つからない。
			return false;
		}
		
		$lwws = &$node_list->item(0);
		$node_list = &$lwws->childNodes;
		for($i=0; $i<$node_list->length; $i++)
		{
			//lwwsタグ内の各ノードを調べていく。
			$node = &$node_list->item($i);
			$this->parseNode($node);
		}
		return true;
	}
	
	
	/**
	 * lwwsタグ内の要素の処理を行います。
	 * 
	 * @param object &$node DOMNode オブジェクト
	 */
	function parseNode(&$node)
	{
		if($node->nodeType != XML_ELEMENT_NODE)
		{
			//現在のノードがタグでなければ処理しない
			return;
		}
		
		//タグの種類に応じて処理を分岐する
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
			
			//<temperature>タグが見つかった場合は
			//temperatureタグの解析を開始する。
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
	 * temperatureタグの解析を行います。
	 * 
	 * @private
	 * @param object &$node DOMNodeオブジェクト
	 */
	function parseTemperature(&$node)
	{
		if($node->nodeType != XML_ELEMENT_NODE)
		{
			//タグでなければ処理しない
			return;
		}
		
		//タグの内容に応じて処理を分岐
		//min、maxの場合、その中のcelciusタグの値を温度として保存する。
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
	 * LWWSのリクエストを実行します。
	 * 
	 * @private
	 * @param int $id 取得する観測地点のID
	 * @param int $day 取得する日。今日(=0、)明日(=1)、明後日(=2)
	 * @return string リクエストの実行結果のXML
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
	 * 指定した子要素の値を取得して返します。
	 * 
	 * @private
	 * @param object &$node 親となる要素のDOMNodeオブジェクト
	 * @param string $tag_name 値を取得する子タグの名前
	 * @return string 子タグの名前
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
	 * エンコーディングの変換を行います。
	 * 
	 * @private
	 * @param string $text 変換の対象となるテキスト
	 * @return string 変換後のテキスト
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
	 * LWWSのリクエストを実行します。
	 * 
	 * @private
	 * @param int $id 取得する観測地点のID
	 * @param int $day 取得する日。今日(=0、)明日(=1)、明後日(=2)
	 * @return string リクエストの実行結果のXML
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