package com.gam.dev.gamVO;

public class UserVO {

	private int user_seq;
	private String user_email;
	private String user_pwd;
	private String user_nm;
	private String user_nicknm;
	private String user_tel;
	private String user_gender;
	private int user_auth;
	private String user_join_dt;
	private String user_last_login_dt;
	
	public UserVO() {}

	public UserVO(int user_seq, String user_email, String user_pwd, String user_nm, String user_nicknm, String user_tel,
			String user_gender, int user_auth, String user_join_dt, String user_last_login_dt) {
		super();
		this.user_seq = user_seq;
		this.user_email = user_email;
		this.user_pwd = user_pwd;
		this.user_nm = user_nm;
		this.user_nicknm = user_nicknm;
		this.user_tel = user_tel;
		this.user_gender = user_gender;
		this.user_auth = user_auth;
		this.user_join_dt = user_join_dt;
		this.user_last_login_dt = user_last_login_dt;
	}

	public int getUser_seq() {
		return user_seq;
	}

	public void setUser_seq(int user_seq) {
		this.user_seq = user_seq;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}

	public String getUser_pwd() {
		return user_pwd;
	}

	public void setUser_pwd(String user_pwd) {
		this.user_pwd = user_pwd;
	}

	public String getUser_nm() {
		return user_nm;
	}

	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}

	public String getuser_nicknm() {
		return user_nicknm;
	}

	public void setuser_nicknm(String user_nicknm) {
		this.user_nicknm = user_nicknm;
	}

	public String getUser_tel() {
		return user_tel;
	}

	public void setUser_tel(String user_tel) {
		this.user_tel = user_tel;
	}

	public String getUser_gender() {
		return user_gender;
	}

	public void setUser_gender(String user_gender) {
		this.user_gender = user_gender;
	}

	public int getUser_auth() {
		return user_auth;
	}

	public void setUser_auth(int user_auth) {
		this.user_auth = user_auth;
	}

	public String getUser_join_dt() {
		return user_join_dt;
	}

	public void setUser_join_dt(String user_join_dt) {
		this.user_join_dt = user_join_dt;
	}

	public String getUser_last_login_dt() {
		return user_last_login_dt;
	}

	public void setUser_last_login_dt(String user_last_login_dt) {
		this.user_last_login_dt = user_last_login_dt;
	}
	
}
