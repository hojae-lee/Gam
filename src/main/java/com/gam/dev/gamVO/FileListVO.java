package com.gam.dev.gamVO;

public class FileListVO {

	private int file_seq;
	private String file_nm;
	private String file_path;
	private String file_create_user_seq;
	private String file_create_dt;
	
	public FileListVO() {}

	public FileListVO(int file_seq, String file_nm, String file_path, String file_create_user_seq,
			String file_create_dt) {
		super();
		this.file_seq = file_seq;
		this.file_nm = file_nm;
		this.file_path = file_path;
		this.file_create_user_seq = file_create_user_seq;
		this.file_create_dt = file_create_dt;
	}

	public int getFile_seq() {
		return file_seq;
	}

	public void setFile_seq(int file_seq) {
		this.file_seq = file_seq;
	}

	public String getFile_nm() {
		return file_nm;
	}

	public void setFile_nm(String file_nm) {
		this.file_nm = file_nm;
	}

	public String getFile_path() {
		return file_path;
	}

	public void setFile_path(String file_path) {
		this.file_path = file_path;
	}

	public String getFile_create_user_seq() {
		return file_create_user_seq;
	}

	public void setFile_create_user_seq(String file_create_user_seq) {
		this.file_create_user_seq = file_create_user_seq;
	}

	public String getFile_create_dt() {
		return file_create_dt;
	}

	public void setFile_create_dt(String file_create_dt) {
		this.file_create_dt = file_create_dt;
	}
	
}
