-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 02:04:14
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
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL COMMENT '商品id',
  `title` varchar(100) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(100) NOT NULL COMMENT '商品库存',
  `pic` varchar(300) NOT NULL COMMENT '商品图片',
  `details` varchar(500) NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`) VALUES
(100001, '调心堂薏仁香荷膏', 998, 100, '[{"title":"small","src":"../img/1_main_256771_360.jpg"}]', '多位明星的私人保健医师董峰老师亲自研发。选用二十多种、四十五斤珍贵药食材，历时72小时古法泡制精粹成膏。晶莹剔透，滴水成线，养心调理五脏排毒，针对湿气过重的人，调身调心，让湿胖远离自己~'),
(100002, '[海量食谱轻松搞定一桌菜]九阳IH智能炒菜机炒菜机器人J6', 999, 88, '[{"title":"small","src":"../img/1_main_261266_360.jpg"}]', '108道菜式烹饪无忧 ，快速烹饪、自动翻炒、智能无烟，30分钟4菜1汤，美味无需等。'),
(100003, '[感受高品质试听体验]东芝43英寸平面2K网络智能电视', 1799, 49, '[{"title":"small","src":"../img/1_main_244388b_360.jpg"}]\r\n', '[感受高品质试听体验]东芝43英寸平面2K网络智能电视');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=100012;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
