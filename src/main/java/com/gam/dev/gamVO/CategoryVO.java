package com.gam.dev.gamVO;

public class CategoryVO {
	private int category_seq;
	private String category_nm;
	private String category_sort_order;
	
	public CategoryVO() {}

	public CategoryVO(int category_seq, String category_nm, String category_sort_order) {
		super();
		this.category_seq = category_seq;
		this.category_nm = category_nm;
		this.category_sort_order = category_sort_order;
	}

	public int getCategory_seq() {
		return category_seq;
	}

	public void setCategory_seq(int category_seq) {
		this.category_seq = category_seq;
	}

	public String getCategory_nm() {
		return category_nm;
	}

	public void setCategory_nm(String category_nm) {
		this.category_nm = category_nm;
	}

	public String getCategory_sort_order() {
		return category_sort_order;
	}

	public void setCategory_sort_order(String category_sort_order) {
		this.category_sort_order = category_sort_order;
	}
	
}
