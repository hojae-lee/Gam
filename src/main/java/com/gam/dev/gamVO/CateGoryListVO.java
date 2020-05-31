package com.gam.dev.gamVO;

public class CateGoryListVO {
	private int user_seq;
	private int category_seq;
	
	public CateGoryListVO() {}
	
	public CateGoryListVO(int user_seq, int category_seq) {
		this.user_seq = user_seq;
		this.category_seq = category_seq;
	}

	public int getUser_seq() {
		return user_seq;
	}
	public void setUser_seq(int user_seq) {
		this.user_seq = user_seq;
	}
	public int getCategory_seq() {
		return category_seq;
	}
	public void setCategory_seq(int category_seq) {
		this.category_seq = category_seq;
	}
	
	
}
