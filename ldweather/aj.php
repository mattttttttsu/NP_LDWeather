<?php

require_once 'lwwsParser.class.php';
require_once 'Cache/Lite.php';

header('Cache-Control: no-cache');
header('Content-Type: text/html; charset=UTF-8');

//キャッシュの設定
define('WEATHER_CACHE_PREFIX',   'w_');
define('WEATHER_CACHE_DIR',      dirname(__FILE__).'/cache_data/');
define('WEATHER_CACHE_LIFETIME', 3600);


$id = isset( $_GET['id']) ? $_GET['id'] : '63';
$day_id = isset( $_GET['day']) ? $_GET['day'] : '0';


$opt_arr = array
(
	'cacheDir' => WEATHER_CACHE_DIR,
	'lifeTime' => WEATHER_CACHE_LIFETIME
);
$cache = new Cache_Lite($opt_arr);
$cache_id = WEATHER_CACHE_PREFIX.$id.'_'.$day_id;


$result = $cache->get($cache_id);
if(!$result)
{
	//キャッシュが存在しない場合。
	$lwws_parser = new LWWS_Parser();
	
	$opt_arr = array
	(
		'id'  => $id,
		'day' => $day_id
	);
	$lwws_parser->init($opt_arr);
	
	$title = $lwws_parser->getTitle();
	$telop = $lwws_parser->getTelop();
	$temp_max = $lwws_parser->getTempMax();
	$temp_min = $lwws_parser->getTempMin();
	$desc = str_replace("\n", '', $lwws_parser->getDesc());
	$date = $lwws_parser->getDate();
	$pub_time = $lwws_parser->getPubTime();
	$img_url = $lwws_parser->getImageURL();
	$img_name = basename($lwws_parser->getImageURL());
	$link_url = $lwws_parser->getLinkURL();
	
	if($temp_max == '') $temp_max = '??';
	if($temp_min == '') $temp_min = '??';
	$result = 
"
{
	'day_id':{$day_id},
	'telop':'{$telop}', 
	'date':'{$date}',
	'pub_time':'{$pub_time}',
	'temp_min':'{$temp_min}',
	'temp_max':'{$temp_max}',
	'desc':'{$desc}',
	'img_url':'{$img_url}',
	'img_name':'{$img_name}',
	'link_url':'{$link_url}'
}
";

	$result = rawurlencode(mb_convert_encoding($result, 'UTF-8', 'EUC-JP'));
	$cache->save($result);
}

//mb_http_output ( 'UTF-8' );
echo $result;
?>