package com.gam.dev;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
	
	// sqlSessionTemplate
	@Autowired
	private SqlSession sqlS;
	
	/*
	 이름: 이재호, 한동욱
	 날짜: 20200524 
	 기능: 스프링 셋팅 샘플
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView home() {
		ModelAndView mv = new ModelAndView();
		
		/*
		 getMapper(인터페이스) 방식과 selectOne(단일 값) 방식
		 */
//		String result = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).testSelect();
//		String result = sqlS.selectOne("com.gam.dev.gamImpl.GamImpl.testSelect");
		
		mv.setViewName("main/home");
		return mv;
	}
	
}
