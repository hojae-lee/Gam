package com.gam.dev.gamImpl;

import java.util.ArrayList;

import com.gam.dev.gamVO.ListVO;
import com.gam.dev.gamVO.TitleVO;
import com.gam.dev.gamVO.UserVO;

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
	
	/*
		최민성
		
	*/
	public ArrayList<TitleVO> regTitle(TitleVO vo);
	public ArrayList<ListVO> regList(TitleVO vo);
	
	/*
	추가 : autoSelectType 타입 일 경우도 검색 가능하도록. 
	*/
//	public ArrayList<TitleVO> autoSelect(String searchValue);
//	public ArrayList<UserVO> autoSelectName(String searchValue);
	public ArrayList<TitleVO> autoSelectType(String searchValue);
	public ArrayList<TitleVO> searchResultData(String searchContents, String searchTitle);
	public ArrayList<TitleVO> relationTitleSearchList(String searchContents);
	public ArrayList<TitleVO> relationNickSearchList(String searchContents);
	public ArrayList<TitleVO> relationTypeSearchList(String searchContents);
	
}