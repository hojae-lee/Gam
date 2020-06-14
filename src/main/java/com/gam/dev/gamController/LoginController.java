package com.gam.dev.gamController;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class LoginController {

		// sqlSessionTemplate
		@Autowired
		private SqlSession sqlS;
		
		// 아이디 중복 방지
		public void idcheckProcess() {
			
		}
		
		//로그인
		public void loginProcess() {
			
		}
		
		//로그아웃
		public void logout() {
			
		}
	
}
