

DROP TABLE IF EXISTS `tour_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tour_user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(60) DEFAULT '云新闻用户',
  `user_phone` varchar(11) NOT NULL,
  `user_pwd` varchar(255) NOT NULL,
  `user_headpic` varchar(255) NOT NULL DEFAULT 'http://jinnangtuan.com/static/img/users/jinnangusers/head.png',
  `user_sex` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour_user`
--

LOCK TABLES `tour_user` WRITE;
/*!40000 ALTER TABLE `tour_user` DISABLE KEYS */;
INSERT INTO `tour_user` VALUES (1,'如来','13126919251','e10adc3949ba59abbe56e057f20f883e','../../static/uploads/images/headpic-1509270571762.png',1),(2,'柳生飘絮','13126919255','e10adc3949ba59abbe56e057f20f883e','../../static/uploads/images/headpic-1509270571762.png',0),(3,'成是非','13126919252','00c66aaf5f2c3f49946f15c1ad2ea0d3','http://jinnangtuan.com/static/img/users/jinnangusers/head.png',1),(4,'归海一刀','13126919253','e10adc3949ba59abbe56e057f20f883e','../../static/uploads/images/headpic-1508516716022.jpg',1),(5,'古三通','13126919254','e10adc3949ba59abbe56e057f20f883e','../../static/uploads/images/headpic-1506875379823.jpg',1),(6,'云罗郡主','13126919256','e10adc3949ba59abbe56e057f20f883e','../../static/uploads/images/headpic-1506875974089.jpg',0),(7,'朱铁胆','13126919257','e10adc3949ba59abbe56e057f20f883e','http://jinnangtuan.com/static/img/users/jinnangusers/head.png',1),(8,'海棠','13126919250','96e79218965eb72c92a549dd5a330112','http://jinnangtuan.com/static/img/users/jinnangusers/head.png',0),(9,'断天涯','13126919258','e10adc3949ba59abbe56e057f20f883e','http://jinnangtuan.com/static/img/users/jinnangusers/head.png',1),(10,'万三千','13126919221','e10adc3949ba59abbe56e057f20f883e','http://jinnangtuan.com/static/img/users/jinnangusers/head.png',0),(14,'多啦A梦','13133333333','e10adc3949ba59abbe56e057f20f883e','../../static/uploads/images/headpic-1507362358963.png',1),(13,'锦囊团用户','13111111111','e10adc3949ba59abbe56e057f20f883e','http://jinnangtuan.com/static/img/users/jinnangusers/head.png',1);
/*!40000 ALTER TABLE `tour_user` ENABLE KEYS */;
UNLOCK TABLES;

