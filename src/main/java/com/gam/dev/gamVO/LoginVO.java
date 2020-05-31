package com.gam.dev.gamVO;

public class LoginVO {

	private String localstorage_key;
	private int user_seq;
	private String logout_dt;
	
	public LoginVO() {}

	public LoginVO(String localstorage_key, int user_seq, String logout_dt) {
		super();
		this.localstorage_key = localstorage_key;
		this.user_seq = user_seq;
		this.logout_dt = logout_dt;
	}

	public String getLocalstorage_key() {
		return localstorage_key;
	}

	public void setLocalstorage_key(String localstorage_key) {
		this.localstorage_key = localstorage_key;
	}

	public int getUser_seq() {
		return user_seq;
	}

	public void setUser_seq(int user_seq) {
		this.user_seq = user_seq;
	}

	public String getLogout_dt() {
		return logout_dt;
	}

	public void setLogout_dt(String logout_dt) {
		this.logout_dt = logout_dt;
	}
	
}
