package com.gam.dev.gamController;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


import com.gam.dev.gamVO.ListVO;
import org.springframework.web.servlet.ModelAndView;

import com.gam.dev.gamVO.TitleVO;
import com.gam.dev.gamVO.UserVO;

@Controller
public class GoalSearchController {

		// sqlSessionTemplate
		@Autowired
		private SqlSession sqlS;
		

//		// 목표 검색
//		@RequestMapping(value = "/search/goalSearch.do", method = RequestMethod.GET)
//		public String goalSearch() {
//			System.out.println("");
//			return "search/goalSearch";
//
//		// 목표 검색 페이지 이동
//		@RequestMapping(value = "/search/goalSearch.do", method = RequestMethod.GET)
//		public ModelAndView goalSearch() {
//			ModelAndView mv = new ModelAndView();
//			mv.setViewName("search/goalSearch");
//			return mv;
//		}
		
//		// search => auto complete
//		@RequestMapping("/autocomplete/search.do")
//		@ResponseBody
//		public ArrayList autoSearchList(HttpServletRequest req){
//			String searchValue = req.getParameter("searchValue");
//			String searchTitle = req.getParameter("searchTitle");
//			ArrayList gam_list = null;
//			switch (searchTitle) {
//				case "gam_title_nm": 
//					gam_list = new ArrayList<TitleVO>();
//					gam_list = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).autoSelect(searchValue);
//					break;
//				case "user_nicknm":
//					gam_list = new ArrayList<UserVO>();
//					gam_list = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).autoSelectName(searchValue);
//					break;
//				case "gam_type":
//					gam_list = new ArrayList<UserVO>();
//					gam_list = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).autoSelectType(searchValue);
//					break;
//			}
//			return gam_list;
//		}
		
		// 검색 후 컨트롤러
		@RequestMapping("/search/goalSearchResult.do")
		public ModelAndView goalSearchResult(HttpServletRequest req) {
			ModelAndView mv = new ModelAndView();
			String searchContents = (req.getParameter("searchContents") == "" && req.getParameter("searchContents") == null) ? "" : req.getParameter("searchContents");
			String searchTitle = (req.getParameter("searchTitle") == "" && req.getParameter("searchTitle") == null) ? "user_nicknm" : req.getParameter("searchTitle");
			
			ArrayList gam_list = null;
			ArrayList gam_relationSearchList = new ArrayList<TitleVO>();
			switch (searchTitle) {
				case "gam_title_nm": 
					gam_relationSearchList = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).relationTitleSearchList(searchContents);
					break;
				case "user_nicknm":
					gam_relationSearchList = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).relationNickSearchList(searchContents);
					break;
				case "gam_type":
					gam_relationSearchList = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).relationTypeSearchList(searchContents);
					break;
			}
			gam_list = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).searchResultData(searchContents, searchTitle);
			if (gam_relationSearchList.size() > 0) {
				mv.addObject("relationOk", "relationOk");
				mv.addObject("relationList", gam_relationSearchList);
			}
			
			mv.addObject("list", gam_list);
			
			mv.setViewName("search/goalSearch");
			return mv;
		}
		// 스크롤 서버 페이징
		
		// search => auto complete
		@RequestMapping("/autocomplete/search.do")
		@ResponseBody
		public ArrayList<ListVO> autoSearchList(HttpServletRequest req){
			String searchValue = req.getParameter("searchValue");
			String searchTitle = req.getParameter("searchTitle");
			ArrayList<ListVO> gam_list = new ArrayList<ListVO>();
			switch (searchTitle) {
				case "list_nm": 
					gam_list = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).autoSelect(searchValue);
					break;
				case "user_nicknm":
					gam_list = sqlS.getMapper(com.gam.dev.gamImpl.GamImpl.class).autoSelectName(searchValue);
					break;
			}
			return gam_list;
		}
		
		// 목표 디테일
		public void goalDetail() {
			
		}
}
