package com.gam.dev.gamController;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.gam.dev.gamImpl.GamImpl;

@Controller
public class GoalManageController {

		// sqlSessionTemplate
		@Autowired
		private SqlSession sqlS;
		
		private GamImpl gamImple;
		
		// 목표 조회(상세보기 조회지.)
		@RequestMapping("/member/goalManage/list.do")
		public ModelAndView memberGoalList(HttpServletRequest request, HttpServletResponse response) {
			ModelAndView mv = new ModelAndView("goalManage/GoalManageList");
			// 로그인된 회원의 회원 번호 더미 = 3
			String user_seq = "3";
			
			ArrayList<Object> req_Start =  (ArrayList<Object>) sqlS.selectList("com.gam.dev.gamImpl.GamMemGoalManageImpl.memGoalManageStart", user_seq);
			ArrayList<Object> req_End = (ArrayList<Object>) sqlS.selectList("com.gam.dev.gamImpl.GamMemGoalManageImpl.memGoalManageEnd", user_seq);
			ArrayList<Object> req_Schedule = (ArrayList<Object>) sqlS.selectList("com.gam.dev.gamImpl.GamMemGoalManageImpl.memGoalManageSchedule", user_seq);
			
			// 진행중
			mv.addObject("req_Start",req_Start);
			// 완료
			mv.addObject("req_End",req_End);
			// 예정
			mv.addObject("req_Schedule",req_Schedule);
			
			return mv;
		}
		
		// 목표 추가, 수정, 삭제
		public String goalManage() {
			//저장 버튼 하나로
//			파라미터가 넘어와 근데 이 파라미터가 추가에 대한 인자 인지, 수정인지, 삭제인지
//			판별을 한 뒤 DB에 넣고 그 다음 페이지를 이동시켜준다. 목표 상세페이지로
			
//			if () {
//				
//			} else if() {
//				
//			} else if() {
//				
//			}
			
			return "";
		}
		
		// 목표카피
		public void goalCopy() {
			
		}
}
