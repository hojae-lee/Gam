package com.gam.dev.gamVO;

public class ListVO {

	private int list_seq;
	private int file_seq;
	private int category_seq;
	private int gam_seq;
	private int list_level;
	private int list_upper_list_seq;
	private int list_sort_order;
	private String list_nm;
	private String list_desc;
	private int list_status;
	private String list_start_dt;
	private String list_end_dt;
	private int list_create_user_seq;
	private String list_create_dt;
	private int list_update_user_seq;
	private String list_update_dt;
	
	public ListVO() {}

	public ListVO(int list_seq, int file_seq, int category_seq, int gam_seq, int list_level, int list_upper_list_seq,
			int list_sort_order, String list_nm, String list_desc, int list_status, String list_start_dt,
			String list_end_dt, int list_create_user_seq, String list_create_dt, int list_update_user_seq,
			String list_update_dt) {
		super();
		this.list_seq = list_seq;
		this.file_seq = file_seq;
		this.category_seq = category_seq;
		this.gam_seq = gam_seq;
		this.list_level = list_level;
		this.list_upper_list_seq = list_upper_list_seq;
		this.list_sort_order = list_sort_order;
		this.list_nm = list_nm;
		this.list_desc = list_desc;
		this.list_status = list_status;
		this.list_start_dt = list_start_dt;
		this.list_end_dt = list_end_dt;
		this.list_create_user_seq = list_create_user_seq;
		this.list_create_dt = list_create_dt;
		this.list_update_user_seq = list_update_user_seq;
		this.list_update_dt = list_update_dt;
	}

	public int getList_seq() {
		return list_seq;
	}

	public void setList_seq(int list_seq) {
		this.list_seq = list_seq;
	}

	public int getFile_seq() {
		return file_seq;
	}

	public void setFile_seq(int file_seq) {
		this.file_seq = file_seq;
	}

	public int getCategory_seq() {
		return category_seq;
	}

	public void setCategory_seq(int category_seq) {
		this.category_seq = category_seq;
	}

	public int getGam_seq() {
		return gam_seq;
	}

	public void setGam_seq(int gam_seq) {
		this.gam_seq = gam_seq;
	}

	public int getList_level() {
		return list_level;
	}

	public void setList_level(int list_level) {
		this.list_level = list_level;
	}

	public int getList_upper_list_seq() {
		return list_upper_list_seq;
	}

	public void setList_upper_list_seq(int list_upper_list_seq) {
		this.list_upper_list_seq = list_upper_list_seq;
	}

	public int getList_sort_order() {
		return list_sort_order;
	}

	public void setList_sort_order(int list_sort_order) {
		this.list_sort_order = list_sort_order;
	}

	public String getList_nm() {
		return list_nm;
	}

	public void setList_nm(String list_nm) {
		this.list_nm = list_nm;
	}

	public String getList_desc() {
		return list_desc;
	}

	public void setList_desc(String list_desc) {
		this.list_desc = list_desc;
	}

	public int getList_status() {
		return list_status;
	}

	public void setList_status(int list_status) {
		this.list_status = list_status;
	}

	public String getList_start_dt() {
		return list_start_dt;
	}

	public void setList_start_dt(String list_start_dt) {
		this.list_start_dt = list_start_dt;
	}

	public String getList_end_dt() {
		return list_end_dt;
	}

	public void setList_end_dt(String list_end_dt) {
		this.list_end_dt = list_end_dt;
	}

	public int getList_create_user_seq() {
		return list_create_user_seq;
	}

	public void setList_create_user_seq(int list_create_user_seq) {
		this.list_create_user_seq = list_create_user_seq;
	}

	public String getList_create_dt() {
		return list_create_dt;
	}

	public void setList_create_dt(String list_create_dt) {
		this.list_create_dt = list_create_dt;
	}

	public int getList_update_user_seq() {
		return list_update_user_seq;
	}

	public void setList_update_user_seq(int list_update_user_seq) {
		this.list_update_user_seq = list_update_user_seq;
	}

	public String getList_update_dt() {
		return list_update_dt;
	}

	public void setList_update_dt(String list_update_dt) {
		this.list_update_dt = list_update_dt;
	}
	
}
