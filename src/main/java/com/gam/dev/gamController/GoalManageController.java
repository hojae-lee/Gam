package com.gam.dev.gamController;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.gam.dev.gamVO.ListVO;
import com.gam.dev.gamVO.TitleVO;

@Controller
public class GoalManageController {

		// sqlSessionTemplate
		@Autowired
		private SqlSession sqlS;
		
		// 목표 조회(상세보기 조회지.)

		// 목표 추가, 수정, 삭제
		public String goalManage() {
		/*
		 * String[] data1 = req.getParameterValues("data1"); String[] data2 =
		 * req.getParameterValues("data2"); String[] data3 =
		 * req.getParameterValues("data3");
		 * 
		 * for (lv1) { a = sql if (a == true) b = sql if (b == true) c = sql }
		 */
		
			
			
			/*
			 data 가 들어왔어.
			 data에서 LV 1, 2 3 을 판별할 수 있지?
		 	 db(lv1, d, a) => (lv2) => (lv3)
			 	     => 성공
			 	   
			 */
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
		
	/*
	 * @PostMapping("regGoal") public String regTitle(TitleVO vo) {
	 * 
	 * return ""; }
	 * 
	 * @PostMapping("regGoal") public String regList(ListVO vo) {
	 * 
	 * return ""; }
	 */
		
		// 목표카피
		public void goalCopy() {
			
		}
}
