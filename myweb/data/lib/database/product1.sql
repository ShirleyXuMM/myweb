-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 02:04:46
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `h5-1903-shirley`
--

-- --------------------------------------------------------

--
-- 表的结构 `product1`
--

CREATE TABLE `product1` (
  `id` int(10) NOT NULL COMMENT '商品id',
  `title` varchar(100) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(100) NOT NULL COMMENT '商品库存',
  `pic` varchar(300) NOT NULL COMMENT '商品图片',
  `details` varchar(500) NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product1`
--

INSERT INTO `product1` (`id`, `title`, `price`, `num`, `pic`, `details`) VALUES
(100001, '[亲肤体验 纵享舒适]多奇曼POCHME--生态雅韵健康被', 188, 55, '[{"title":"small","src":"../img/1_main_264911_360.jpg"}]', '水洗棉被，定位绗缝，针脚细密，走线流畅。'),
(100002, '[冰丝面料 可水洗机洗]夏季裸睡舒适纯色天丝空调被冰丝夏被', 185, 188, '[{"title":"small","src":"../img/1_main_264608_360.jpg"}]\r\n', '一条夏被2种体验，正面冰丝面料，反面亲肤磨毛，定位绗缝，针脚细密，走线流畅。'),
(100003, '[纯棉船袜 亲肤透气]俞兆林男士时尚拼色船袜棉袜休闲袜子5双装', 50, 100, '[{"title":"small","src":"../img/1_main_264611_360.jpg"}]', '精选棉面料，天然健康，柔软舒适，透气清爽，整齐隐蔽的缝线，让袜子牢固更耐穿，Y形立体袜跟，符合人体工学，穿着舒适不勒脚，罗文袜口设计，内置舒适橡皮经，穿着不勒，不易脱落。'),
(100004, '日本内野（UCHINO）素色静雅浴巾礼盒JD14672-N', 158, 100, '[{"title":"small","src":"../img/1_main_256771_360.jpg"}]', '采用优质纯棉精织而成，简约大方，手感蓬松柔软，如棉花拭脸般柔软，呵护肌肤');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
