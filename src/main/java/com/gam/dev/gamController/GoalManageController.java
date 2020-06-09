package com.gam.dev.gamController;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

public class GoalManageController {

		// sqlSessionTemplate
		@Autowired
		private SqlSession sqlS;
		
		// 목표 조회(상세보기 조회지.)

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
