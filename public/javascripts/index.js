$(function(){
	$('.leftnav li').on('click',function(){
		//局部页面地址$(this).attr('p')
		$('.content').load($(this).attr('p'));

	});

	//模拟点击.初始显示页面
	$('.leftnav li').eq(0).trigger('click');
});