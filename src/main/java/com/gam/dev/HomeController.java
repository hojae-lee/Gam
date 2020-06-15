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
	 占싱몌옙: 占쏙옙占쏙옙호, 占싼듸옙占쏙옙
	 占쏙옙짜: 20200524 
	 占쏙옙占�: 占쏙옙占쏙옙占쏙옙 占쏙옙占쏙옙 占쏙옙占쏙옙
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView home() {
		ModelAndView mv = new ModelAndView();
		
		/*
		 getMapper(占쏙옙占쏙옙占쏙옙占싱쏙옙) 占쏙옙캅占� selectOne(占쏙옙占쏙옙 占쏙옙) 占쏙옙占�
		 */
//		String result = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).testSelect();
//		String result = sqlS.selectOne("com.gam.dev.gamImpl.GamImpl.testSelect");
		
		mv.setViewName("main/home");
		//mv.setViewName("main/test");
		return mv;
	}
	
	@RequestMapping(value = "/mstest", method = RequestMethod.GET)
	public ModelAndView mstest() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("set/mstest");
		return mv;
	}
	
}
