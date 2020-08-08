package com.gam.dev.gamImpl;

import java.util.ArrayList;
import java.util.List;

public interface GamMemGoalManageImpl {
	
	/*
	 * 작성자 : 한동욱 
	 * 기능 : 회원의 목표 예정 , 완료, 진행중
	 */
	public ArrayList<List<Object>> memGoalManageStart(String user_seq);
	public ArrayList<List<Object>> memGoalManageEnd(String user_seq);
	public ArrayList<List<Object>> memGoalManageSchedule(String user_seq);
}

