package com.gam.dev.gamImpl;

import java.util.ArrayList;
import java.util.List;

public interface GamMemGoalManageImpl {
	
	/*
	 * �ۼ��� : �ѵ��� 
	 * ��� : ȸ���� ��ǥ ���� , �Ϸ�, ������
	 */
	public ArrayList<List<Object>> memGoalManageStart(String user_seq);
	public ArrayList<List<Object>> memGoalManageEnd(String user_seq);
	public ArrayList<List<Object>> memGoalManageSchedule(String user_seq);
}

