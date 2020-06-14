package com.gam.dev.gamController;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class GoalSearchController {

		// sqlSessionTemplate
		@Autowired
		private SqlSession sqlS;
		
		// 목표 검색
		@RequestMapping(value = "/search/goalSearch", method = RequestMethod.GET)
		public String goalSearch() {
			System.out.println("");
			return "search/goalSearch";
		}
		
		// 목표 디테일
		public void goalDetail() {
			
		}
}
