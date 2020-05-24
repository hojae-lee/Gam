package com.gam.dev.gamController;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

public class GoalManageController {

		// sqlSessionTemplate
		@Autowired
		private SqlSession sqlS;
		
		// 목표 추가, 수정, 삭제
		public String goalManage() {
			return "";
		}
		
		// 목표카피
		public void goalCopy() {
			
		}
}
