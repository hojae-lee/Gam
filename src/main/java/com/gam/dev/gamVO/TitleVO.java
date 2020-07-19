package com.gam.dev.gamVO;

public class TitleVO {

	private int gam_seq;
	private int category_seq;
	private int file_seq;
	private String gam_type;
	private String gam_title_nm;
	private String gam_public_ym;
	private String gam_start_dt;
	private String gam_end_dt;
	private int gam_create_user_seq;
	private String gam_create_dt;
	private int gam_update_user_seq;
	private String gam_update_dt;
	private int gam_copy_cnt;
	private String user_nicknm;
	
	public TitleVO() {}

	public TitleVO(int gam_seq, int category_seq, int file_seq, String gam_type, String gam_title_nm,
			String gam_public_ym, String gam_start_dt, String gam_end_dt, int gam_create_user_seq, String gam_create_dt,
			int gam_update_user_seq, String gam_update_dt, int gam_copy_cnt, String user_nicknm) {
		super();
		this.gam_seq = gam_seq;
		this.category_seq = category_seq;
		this.file_seq = file_seq;
		this.gam_type = gam_type;
		this.gam_title_nm = gam_title_nm;
		this.gam_public_ym = gam_public_ym;
		this.gam_start_dt = gam_start_dt;
		this.gam_end_dt = gam_end_dt;
		this.gam_create_user_seq = gam_create_user_seq;
		this.gam_create_dt = gam_create_dt;
		this.gam_update_user_seq = gam_update_user_seq;
		this.gam_update_dt = gam_update_dt;
		this.gam_copy_cnt = gam_copy_cnt;
		this.user_nicknm = user_nicknm;
	}

	public int getGam_seq() {
		return gam_seq;
	}

	public void setGam_seq(int gam_seq) {
		this.gam_seq = gam_seq;
	}

	public int getCategory_seq() {
		return category_seq;
	}

	public void setCategory_seq(int category_seq) {
		this.category_seq = category_seq;
	}

	public int getFile_seq() {
		return file_seq;
	}

	public void setFile_seq(int file_seq) {
		this.file_seq = file_seq;
	}

	public String getGam_type() {
		return gam_type;
	}

	public void setGam_type(String gam_type) {
		this.gam_type = gam_type;
	}

	public String getGam_title_nm() {
		return gam_title_nm;
	}

	public void setGam_title_nm(String gam_title_nm) {
		this.gam_title_nm = gam_title_nm;
	}

	public String getGam_public_ym() {
		return gam_public_ym;
	}

	public void setGam_public_ym(String gam_public_ym) {
		this.gam_public_ym = gam_public_ym;
	}

	public String getGam_start_dt() {
		return gam_start_dt;
	}

	public void setGam_start_dt(String gam_start_dt) {
		this.gam_start_dt = gam_start_dt;
	}

	public String getGam_end_dt() {
		return gam_end_dt;
	}

	public void setGam_end_dt(String gam_end_dt) {
		this.gam_end_dt = gam_end_dt;
	}

	public int getGam_create_user_seq() {
		return gam_create_user_seq;
	}

	public void setGam_create_user_seq(int gam_create_user_seq) {
		this.gam_create_user_seq = gam_create_user_seq;
	}

	public String getGam_create_dt() {
		return gam_create_dt;
	}

	public void setGam_create_dt(String gam_create_dt) {
		this.gam_create_dt = gam_create_dt;
	}

	public int getGam_update_user_seq() {
		return gam_update_user_seq;
	}

	public void setGam_update_user_seq(int gam_update_user_seq) {
		this.gam_update_user_seq = gam_update_user_seq;
	}

	public String getGam_update_dt() {
		return gam_update_dt;
	}

	public void setGam_update_dt(String gam_update_dt) {
		this.gam_update_dt = gam_update_dt;
	}

	public int getGam_copy_cnt() {
		return gam_copy_cnt;
	}

	public void setGam_copy_cnt(int gam_copy_cnt) {
		this.gam_copy_cnt = gam_copy_cnt;
	}

	public String getUser_nicknm() {
		return user_nicknm;
	}

	public void setUser_nicknm(String user_nicknm) {
		this.user_nicknm = user_nicknm;
	}
	
}
