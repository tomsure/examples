var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
//	    image:"@image()"  //image()方法用于生成随机的图片地址，这个随机图片是从https://dummyimage.com/网站上生成的，所以完整的图片地址前面是以https://dummyimage.com/开头
	       
/*	       生成的图片地址会作为json数据的value值,可以复制这个value值放在浏览器地址栏中会在页面显示一张图片,例如:
	           生成这样一组数据{ "image": "http://dummyimage.com/720x300" },将http://dummyimage.com/720x300放到地址栏回车，就会显示一张720x300的图片  */
	       
	       
	       
/*	    Random.image( size ) //生成随机大小尺寸的图片，尺寸大小会在下面的尺寸中随机产生：
	        [
    '300x250', '250x250', '240x400', '336x280', 
    '180x150', '720x300', '468x60', '234x60', 
    '88x31', '120x90', '120x60', '120x240', 
    '125x125', '728x90', '160x600', '120x600', 
    '300x600'
          ]
	        这些尺寸是提前定义好的，格式是  宽x高  */
//Random.image(size,background)  //用于设置随即图片的尺寸和背景色
 //        例如:
//              image1:"@image(200x100, '#FF6600')"
//Random.image( size, background, text )   //用于设置随即图片的尺寸，北京和文字
//         例如:
//              image:"@image('200x100','#f4f6f4' ,'哈哈哈')"
            //  注意:设置颜色值的时候需要使用16进制的格式
//Random.image(size, background, foreground, text )  //用于设置尺寸、北背景、前景和图片文字
//         例如:
//              image:"@image('200x200','#50B347','#FF6600','sofia,I love you!')"
//Random.image( size, background, foreground, format, text ) //同时设置或者随机生成图片的多种样式参数
//          例如:
               image:"@image('200x200','#50B347','#FF6600','jpg','sofia,I love you!')"
 //       注意:image()方法内的参数可以随机生成也可以手动设置
 
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
