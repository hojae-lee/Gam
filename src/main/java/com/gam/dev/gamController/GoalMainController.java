package com.gam.dev.gamController;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class GoalMainController {

		// sqlSessionTemplate
		@Autowired
		private SqlSession sqlS;
		
		// 목표 메인
		public void goalMain() {
			
		}
}
