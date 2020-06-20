package com.gam.dev.gamImpl;

import java.util.ArrayList;

import com.gam.dev.gamVO.ListVO;

/*
 	getMapper�� ����� ��� �������̽� Ÿ�� ���� ��  mapper id���� �����ϰ� ������ּ���.
 */
public interface GamImpl {
	//�׽�Ʈ ���� ī���� Ƚ��
	public String testSelect();
	
	/*
	 작성자 : 이재호
	 기능 : autoSelect, autoSelectName
	 */
	public ArrayList<ListVO> autoSelect(String searchValue);
	public ArrayList<ListVO> autoSelectName(String searchValue);
}