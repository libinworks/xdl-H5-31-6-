// 话题控制器
var userModel = require('../models/userModel');
var usModel = require('../models/cateModel');
var topic  = {};

// 创建话题页面

// topic.create = function(req,res){
// 	// 响应页面

// }
topic.create = function(req, res) {
	// 查询所有的话题分类
	cateModel.find({}, {}, {
		sort: { orderNum: -1}
	}, function(err, data) {
		// console.log(err, data)
		// 响应页面
		res.render('ybb_index', {data: data});
	})
}

// 处理话题提交数据
topic.doCreate = function(req, res) {
	// 获取数据
	console.log(req.session);
	console.log(req.query);
	if(req.query.a.length){
	var topicData = {
		content: req.query.a,
		// content: req.body.content,
		// 谁发表的话题 -- 当前的登录对象 
		topics: req.session.user._id,
		// 所属分类
		// cate: req.body.cate
	}
	// // console.log(topicData)
	usModel.create(topicData, function(err, data) {
		// console.log(err, data);
		if (!err && data) {
			// console.log(data);
			usModel.find({topics:req.session.user._id},function(err,data){
				if(!err && data){
					res.render('ybb_index',{data:data});
					
				}
			})
				// res.render('ybb_index',{data:data});
				// usModel.find({topics:eq.session.user._id,},function(data){
				// 	console.log(data);
				// })
			// 创建成功，增加用户的积分(发表文章+5)，跳转话题详情页
			// console.log(req.session.user._id)
			// var con = {
			// 	_id: req.query.user._id
			// };

			// 更新 $inc
			// userModel.update(con, {$inc:{score:5}}, function(err) {
				// 更新当前的session
				// req.session.user.score += 5;

				// console.log(err)
				// res.redirect('/topic/details/'+data._id);
		// 	})
		// } else {
			// 跳回去
			// res.redirect('back');
			}else{
				res.render('ybb_index',{data:data});
			}
		})
	}
}
module.exports = topic;