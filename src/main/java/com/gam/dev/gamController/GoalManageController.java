package com.gam.dev.gamController;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

public class GoalManageController {

		// sqlSessionTemplate
		@Autowired
		private SqlSession sqlS;
		
		// ��ǥ �߰�, ����, ����
		public String goalManage() {
			return "";
		}
		
		// ��ǥī��
		public void goalCopy() {
			
		}
}
