// 导航切换
$(function(){
	$('.nav>ul>li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})

//登录
$(function(){
	// 点击登录按钮 登录框显示
	$('#login').on('click',function(){
		$('#login-wrap').show();
	})
	// 单击关闭按钮，隐藏元素
	// $('#close').click(function(){
	// 	$('#login-wrap').hide();
	// });
	// 关闭登录框
	$('#login-wrap').on('click',function(){
		// 判断下次自动登录是否选中,如果选中不清空内容
		isCheckbox();
	})
	// 阻止事件冒泡
	$('#login-pop').on('click',function(e){
		e.stopPropagation();
	})
})
// 登录用户
$(function(){

	// 判断是否验证成功
	var isOK = false;

	// 登录按钮 验证用户名密码是否为空
	$('#btn_login').on('click',function(){
		var uname = $('#uname').val().trim();
		var pwd = $('#pwd').val().trim();
		if(uname == "" && pwd == ""){
			$('.loginPrompt').html('请输入用户名和密码');
			$('.loginPrompt').css({
				display:'block'
			});
			return false;
		}
		if(uname == ""){
			$('.loginPrompt').html('用户名不不能为空');
			$('.loginPrompt').css({
				display:'block'
			});
			return false;
		}
		if(pwd == ""){
			$('.loginPrompt').html('密码不能为空');
			$('.loginPrompt').css({
				display:'block'
			});
			return false;
		}

		// ajax去服务器中验证
		$.ajax({
			url : '/checkUser',
			data : {
				uname : uname,
				pwd : pwd
			},
			type : 'post',
			success : function(data){
				// console.log(data);
				if(data === 'ok'){
					isCheckbox();
					isOK = true;
					location.reload();
					//登录成功回首页
					// loginSuccess(uname);
					// $('.login-help').css({'display':'none'});
					// $('.login-help-Success').css({'display':'block'});
					
				}else if(data == 'used'){
					$('.loginPrompt').html('用户名未注册，请注册后登录');
					$('.loginPrompt').css({
						display:'block'
					});
					return false;
				}else if(data == 'upwd'){
					$('.loginPrompt').html('密码输入错误，请从新输入');
					$('.loginPrompt').css({
						display:'block'
					});
					return false;
				}
			},
			error : function(error){
				console.log(error);
			}
		})

	})
	// 表单提交事件
	$('#formName').submit(function(){
		// 检测用户
		if(!isOK){
			//终止提交
			return false;
		}
	})
})
//注册
$(function(){
	//点击立即注册
	$('#signUp').on('click',function(){
		// 判断下次自动登录是否选中,如果选中不清空内容
		isCheckbox();
		$('#reg-wrap').show();
	})
	// 关闭注册框
	$('#reg-wrap').on('click',function(){
		// 清空所有信息
		$('#reg_uname').val("");
		$('#reg_pwd').val("");
		$('#reg_tel').val("");
		$('#reg_yzm').val("");
		$('.loginPrompt-reg').hide();
		$('#reg-wrap').hide();
	})
	// 阻止事件冒泡
	$('#reg-pop').on('click',function(e){
		e.stopPropagation();
	})

	// 用来保存验证码的变量
	var code;

	// 调用验证码
	createCode();

	// 检测用户名条件
	var isUnameOk = false;

	// 检测用户名是否重复
	$('#reg_uname').blur(function() {

		var uname = $(this).val().trim();

		// 判断是否为空
		if (uname == '') {
			$('.loginPrompt-reg').html('用户名不不能为空');
			$('.loginPrompt-reg').css({
				display:'block'
			});
			// 终止程序
			return;
		}

		// 将用户输入的数据发送给服务器，进行验证
		$.ajax({
			url: '/checkUserName',
			data: {
				uname: uname
			},
			type: 'get',
			context: $(this),
			success: function(data){
				if(data == 'ok'){
					$('.loginPrompt-reg').css({
						display:'none'
					});
					isUnameOk = true;
				}else if(data == 'used'){
					$('.loginPrompt-reg').html('此用户名已经存在。');
					$('.loginPrompt-reg').css({
						display:'block'
					});
				}
			},
			error: function(error){
				console.log(error);
			}
		})

	});

	// 检测手机号是否正确
	$('#reg_tel').blur(function() {

		var tel = $(this).val().trim();

		// 判断是否为空
		if (tel == '') {
			$('.loginPrompt-reg').html('手机号不能为空');
			$('.loginPrompt-reg').css({
				display:'block'
			});
			// 终止程序
			return;
		}else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(tel))){
			$('.loginPrompt-reg').html('请输入正确的手机号');
			$('.loginPrompt-reg').css({
				display:'block'
			});
			// 终止程序
	        return; 
		}else{
			$('.loginPrompt-reg').css({
				display:'none'
			});
		}

	})

	// 生成验证码;
	function createCode(){
		// 验证码组成库
		var arrays=new Array(  
			'1','2','3','4','5','6','7','8','9','0',  
			'a','b','c','d','e','f','g','h','i','j',  
			'k','l','m','n','o','p','q','r','s','t',  
			'u','v','w','x','y','z',  
			'A','B','C','D','E','F','G','H','I','J',  
			'K','L','M','N','O','P','Q','R','S','T',  
			'U','V','W','X','Y','Z'               
		); 
		// 重新初始化验证码
		code ='';
		// 随机从数组中获取四个元素组成验证码
		for(var i = 0; i<4; i++){
			// 随机获取一个数组的下标
			var r = parseInt(Math.random()*arrays.length);
			code += arrays[r];
		}
		// 验证码写入span区域
		$('#code').html(code);
	}

	// 点击切换验证码
	$('#code').click(function(){
		createCode();
	})

	// 检测验证码是否正确
	$('#reg_yzm').blur(function() {

		var yzm = $(this).val().trim();

		// 判断是否为空
		if (yzm == '') {
			$('.loginPrompt-reg').html('验证码不能为空');
			$('.loginPrompt-reg').css({
				display:'block'
			});
			// 终止程序
			return;
		}else if(yzm.toLowerCase() == code.toLowerCase()){
			$('.loginPrompt-reg').html();
			$('.loginPrompt-reg').css({
				display:'none'
			});
		}else{
			$('.loginPrompt-reg').html('验证码输入错误，请从新输入');
			$('.loginPrompt-reg').css({
				display:'block'
			});
			// 终止程序
			return;
		}
	})

	// 表单的提交事件
	$('#formName_reg').submit(function() {
		// 检测用户名是否已OK
		if (!isUnameOk) {
			// 终止提交
			return false;
		}else if($('#chkBox_reg').is(':checked')){
			$('#login-wrap').css({display:'block'});
		}else{
			$('.loginPrompt-reg').html('请阅读用户协议');
			$('.loginPrompt-reg').css({
				display:'block'
			});
			return false;
		}
	})
})

// 判断下次自动登录是否选中,如果选中不清空内容
function isCheckbox(){
	if(!$('#chkBox').is(':checked')){
		$('#uname').val("");
		$('#pwd').val("");
		$('.loginPrompt').hide();
	}
	$('#login-wrap').hide();
}

// 登录成功回首页
function loginSuccess(uname){
	$.ajax({
		url: '/loginSuccess',
		data: {
			uname : uname
		},
		type : 'get',
		success: function(data){
			if(data === 'ok'){
				console.log('成功');
			}
		},	
		error: function(error){
			console.log(error);
		}
	})
}

// 鼠标移入头像或名字效果
$(function(){
	$('.login-help-Success').mouseover(function(){
		$('.login-help-signUp').css({display:'block'});
	}).mouseout(function(){
		$('.login-help-signUp').css({display:'none'});
	})
})

// 退出登录
$(function(){
	$('#dropOutLogin').on('click',function(){
		var uname = $('.login-success>span').html().trim();
		$.ajax({
			url: '/lognUp',
			data: {
				uname: uname
			},
			type: 'get',
			success: function(data){
				if(data === "ok"){
					console.log('退出成功');
					location.reload();
				}
			},
			error: function(error){
				console.log(error);
			}
		})
	})
})

