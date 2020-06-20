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

@Controller
public class GoalSearchController {

		// sqlSessionTemplate
		@Autowired
		private SqlSession sqlS;
		
		// 목표 검색
		@RequestMapping(value = "/search/goalSearch.do", method = RequestMethod.GET)
		public String goalSearch() {
			System.out.println("");
			return "search/goalSearch";
		}
		
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
