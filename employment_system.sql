/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3308
 Source Server Type    : MySQL
 Source Server Version : 50728
 Source Host           : localhost:3308
 Source Schema         : employment_system

 Target Server Type    : MySQL
 Target Server Version : 50728
 File Encoding         : 65001

 Date: 19/05/2021 22:36:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `adminId` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '管理员id',
  `adminPassword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '管理员密码',
  PRIMARY KEY (`adminId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('admin', '123123');

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `comId` int(11) NOT NULL AUTO_INCREMENT COMMENT '企业账号',
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  `comName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '企业名称',
  `comCode` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '统一社会信用代码',
  `comNature` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '企业性质',
  `comLinkman` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '单位联系人',
  `comPhone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '服务电话',
  `comArea` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '单位地区',
  `comDetailAdd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '单位详细地址',
  `comIProfile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '单位简介',
  PRIMARY KEY (`comId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 204 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES (200, '123123', '上海辰友信息技术有限公司', '12345678912345678R', '民营企业', '游华晖', '021-50210000', '上海市上海市浦东新区', '金海路0000号', NULL);
INSERT INTO `company` VALUES (201, '123123', '上海五域电子有限公司', '12345678912345670R', '国企', '吉文华', '021-50210001', '上海市上海市浦东新区', '金海路0001号', NULL);
INSERT INTO `company` VALUES (202, '123123', '上海有惟金融有限公司', '12345678912345671R', '中外合资', '易文虹', '021-50210002', '上海市上海市浦东新区', '金海路0002号', NULL);
INSERT INTO `company` VALUES (203, '123123', '南京圣亚物流有限公司', '12345678912345672R', '民营企业', '管和', '025-85500000', '江苏省南京市玄武区', '阳光路0000号', NULL);

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice`  (
  `noticeId` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `noticeContent` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`noticeId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notice
-- ----------------------------
INSERT INTO `notice` VALUES ('2020/04/12/1', 'Welcome to use the employment system.');
INSERT INTO `notice` VALUES ('2020/04/12/2', '欢迎使用基于微信小程序的高校就业系统');
INSERT INTO `notice` VALUES ('2021/04/22/1', '高校就业系统服务器端使用PHP语言开发');
INSERT INTO `notice` VALUES ('2021/04/13/1', '本就业系统前端页面使用组件化开发，采用了第三方微信小程序组件库ColorUI。');

-- ----------------------------
-- Table structure for position
-- ----------------------------
DROP TABLE IF EXISTS `position`;
CREATE TABLE `position`  (
  `positionId` int(10) NOT NULL COMMENT '岗位号码',
  `comId` int(11) NOT NULL,
  `positionName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '职位名称',
  `positionIndustry` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '行业分类',
  `positionType` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '职位类型',
  `positionArea` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '工作地区',
  `positionSite` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '工作地址',
  `positionNum` int(10) NULL DEFAULT NULL COMMENT '招聘人数',
  `positionEduRequire` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学历要求',
  `positionSalary` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '职位薪资',
  `postitionResponsibility` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '职位职责',
  `positionRequirement` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '职位要求',
  `positionCompany` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '职位公司',
  PRIMARY KEY (`positionId`) USING BTREE,
  INDEX `comId`(`comId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of position
-- ----------------------------
INSERT INTO `position` VALUES (1000, 200, '前端开发工程师', '互联网|计算机', '全职', '上海市上海市浦东新区', '金海路0000号', 3, '本科', '8k~10k', '1. 与后端工程师协作，高效优质完成界面功能的实现；\r\n2. 负责前端应用 (微信小程序等) 的开发设计工作；\r\n3. 解决开发过程中产生的兼容性问题；\r\n4. 配合产品经理完成项目整体开发。', '1、本科及以上学历，计算机、通信等相关专业\r\n\r\n2、熟练掌握 ES5+，CSS，HTML，DOM、绘图、动画、协议、安全、网络、性能优化等前端技术，对主流前端框架（ React Vue 等）至少一种有深入应用并深入理解其设计原理\r\n\r\n3、熟悉安卓、iOS、flutter 开发者优先\r\n\r\n4、熟悉 webgl、three.js，有三维可视化工作经验者（仅 VR 方向要求）\r\n\r\n5、积极乐观，责任心强，工作认真细致，具备良好的服务意识，具有良好的团队沟通与协作能力\r\n\r\n6、热爱前端技术，有较强的学习能力，有强烈的求知欲、好奇心和进取心 ，能及时关注和学习业界最新的前端技术', '上海辰友信息技术有限公司');
INSERT INTO `position` VALUES (1001, 200, '前端开发实习生', '互联网|计算机', '实习', '上海市上海市浦东新区', '金海路0000号', 5, '本科', '200~250元/天', '1、负责部门研发族群项目的 Web 前端研发族群工作，参与前端框架的研发族群、维护与演进；    \r\n2、负责重点项目的支撑工作，将研发族群成果应用于项目中；    \r\n3、配合公司其他部门的工作，做好客户满意度工作；    \r\n4、研究最新的前端技术并将新技术应用于工作中。    ', '1. 熟练使用 HTML5、CSS，能快速还原设计稿；\r\n\r\n2. 熟练使用 JavaScript，对于原生 js、ES6 + 基础知识有一定的了解；\r\n\r\n3. 熟悉至少一种前端框架（react /vue），有一定的实战经验为佳；\r\n\r\n4. 对于 http 协议有一定的了解，能够根据 api 的报错快速定位问题；\r\n\r\n5. 使用过前端 UI 组件库，如 antd-design、element、iView 为佳；\r\n\r\n6. 了解前端工程化，对于常见项目构建工具有一定的了解；\r\n\r\n7. 具备良好沟通技巧，态度积极向上，能够主动学习和完成工作；', '上海辰友信息技术有限公司');
INSERT INTO `position` VALUES (2001, 202, '费用会计岗位', '金融|银行', '全职', '上海市上海市浦东新区', '金海路0001号', 1, '本科', '6k~10k', '1.     负责公司员工日常费用报销单据审核，确保各类费用的真实性、合理性；\r\n\r\n2.     负责公司员工日常费用报销单据的账务处理，并及时跟进备用金核销事宜；\r\n\r\n3.     负责公司员工日常费用报销财务支持并参与各类员工费用报销培训工作；\r\n\r\n4.     参与优化公司费用报销制度与内部工作流程，不断优化 OA 及财务系统，提高人效；\r\n\r\n5.     领导交办的其他相关工作。', '1.     本科以上学历，2 年以上费用会计或核算会计工作经验，有集团费用会计经验优先。\r\n\r\n2.     工作认真细致，有责任心、具有较好的沟通协助能力，较强的抗压能力及良好的团队合作能力。\r\n\r\n3.     能够熟练使用 Office、OA 等办公软件，熟悉金蝶财务系统，具有一定的数据敏感度。', '上海有惟金融有限公司');
INSERT INTO `position` VALUES (3000, 203, '物流管理工程师', '物流运输', '全职', '江苏省南京市玄武区', '阳光路0000号', 1, '硕士', '10k~15k', '1.     跟踪物流时间计划，跟进项目状态；\r\n\r\nFollowing LOG timeline and tracking project status;\r\n\r\n2.     在相关会议汇报物流准备状态；\r\n\r\nReport LOG status in relevant meetings;\r\n\r\n3.     参加每周 BVA 会议，讨论 BOM 变更，更新系统需求；\r\n\r\nAttend weekly BVA meeting to discuss BOM status, update part demand in system;\r\n\r\n4.     试装零件订购支持；\r\n\r\nRamp up part ordering support;\r\n\r\n5.     协调零件配线；\r\n\r\nLine feeding coordination;\r\n\r\n6.     推动物流开口问题关闭。\r\n\r\nPush LOG open topics.\r\n\r\n7.  收尾阶段试装过程，关闭系统数据以及实际问题开口项。\r\n\r\n    Close up each ramp-up phase by cleaning system redundancy data and solve real open topics.\r\n\r\n8.     保障零件到货成熟度符合当前试装要求。\r\n\r\nMake sure part maturity level accord with the request of current try-out production\r\n\r\n9.     创建装焊件试装全过程零件需求计划，保障各单位知悉并遵循。\r\n\r\nCreate BiW Part Supply Program, make sure all relevant teams are informed and comply with it.', '1．  本科及以上学历，物流相关专业；\r\n\r\nBachelor degree in Logistics or related major;\r\n\r\n2．  具有 3 年以上汽车制造行业物流或计划的相关工作经验；\r\n\r\n3 years of work experience about Logistics or Planning in Automotive industry;\r\n\r\n \r\n\r\n3.  具有相关物流管理软件（SAP 等）使用经验，深刻理解物流领域 IT 架构问题，有流程标准化相关经验者优先；\r\n\r\n Experience of using Logistics Management software such as SAP, good understanding of IT system framework for Logistics.\r\n\r\nExperience of process standardization or framework construction is preferred;\r\n\r\n4．  熟练使用办公软件（Excel、PowerPoint、Word）；\r\n\r\nGood skills with MS Office (Excel, PowerPoint, Word);\r\n\r\n5．  良好的英语听、说、读、写能力，会德语者优先\r\n\r\nGood English skills for listening, speaking, reading, and writing; German is preferred;\r\n\r\n6．  工作认真细心，责任心强，有独立解决问题的能力，有良好的社交能力和技巧；\r\n\r\nDiligent, conscientious, good communication and independent problem solving skills, good social skill;\r\n\r\n7．  具有较强的团队合作意识。\r\n\r\nGood Team work ability.', '南京圣亚物流有限公司');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '账号',
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生账号密码',
  `stuName` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生姓名',
  `stuSex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生性别',
  `stuAge` int(3) NULL DEFAULT NULL COMMENT '学生年龄',
  `stuNum` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生学号',
  `stuClass` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生班级',
  `stuPhone` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生电话号码',
  `stuMail` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生电子邮箱',
  `stuEducationExp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生教育经历',
  `stuProjectExp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生项目经历',
  `stuSkill` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生专业技能',
  `stuCertificate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生所得证书',
  `stuSelfEva` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生自我评价',
  `role` int(11) NULL DEFAULT NULL COMMENT '角色为学生',
  `stuIntention` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生意向职位',
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('001', '123123', '钱慕悦', '女', 22, '20171110000', '17电信A1', '18101830000', '193430000@qq.com', '2017年9月-2021年6月 上海第二工业大学', '恒流电源的设计', 'Labview', '2017-2018学年国家奖学金', '本人熟悉电子产品相关测试工具，热爱电子行业，能够较快的适\r\n应技术及环境的变化', 0, 'Labview工程师');
INSERT INTO `student` VALUES ('002', '123123', '尚平露', '女', 21, '20171110001', '17电信A1', '18101830001', '193430001@qq.com', '2017年9月-2021年6月 上海第二工业大学', '基于USB接口的数据采集系统设计', '电路设计', '2017-2018学年校二等奖', '本人性格开朗、稳重、有\r\n活力，待人热情、真诚。工作认真负责，积极主动', 0, '硬件工程师');
INSERT INTO `student` VALUES ('003', '123123', '巴星剑', '男', 23, '20171110002', '17电信A2', '18101830002', '193430002@qq.com', '2017年9月-2021年6月 上海第二工业大学', '粮库测问系统的设计', '嵌入式开发', '2017-2018学年校二等奖', '对于工作我坚持：喜欢在做的事，做好在做的事。相信能够胜任给予的工作。', 0, '嵌入式开发工程师');
INSERT INTO `student` VALUES ('004', '123123', '胡广', '男', 21, '20171110003', '17电信A2', '18101830003', '193430003@qq.com', '2017年9月-2021年6月 上海第二工业大学', '校园一卡通系统设计', '软件开发', '2017-2018学年校二等奖', '为人真诚坦率、性格活泼开朗，能吃苦耐劳，心理素质好，能很好地与人沟通，人际关系好；', 0, '软件开发工程师');
INSERT INTO `student` VALUES ('006', '123123', '杨华', '男', 21, '20171110006', '17电信A1', '18101830006', '193430006@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
