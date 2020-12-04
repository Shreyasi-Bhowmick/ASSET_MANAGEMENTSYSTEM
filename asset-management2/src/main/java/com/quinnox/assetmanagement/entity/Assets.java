package com.quinnox.assetmanagement.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import lombok.Data;

@Entity
@Table(name = "asset")
//@Data
public class Assets {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "title")
	private String title;

	@Column(name = "category")
	private String category;

	@Column(name = "quantity")
	private int quantity;

	@Column(name = "price")
	private int price;

//	@Column(name = "totalprice")
//	private int totalprice;

	@Column(name = "additionaldetails")
	private String additionaldetails;

//	public int getTotalprice() {
//		return totalprice;
//	}
//
//	public void setTotalprice(int totalprice) {
//		this.totalprice = totalprice;
//	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getPrice() {
		return price;
	}

	public String getAdditionaldetails() {
		return additionaldetails;
	}

	public void setAdditionaldetails(String additionaldetails) {
		this.additionaldetails = additionaldetails;
	}

	public void setPrice(int price) {
		this.price = price;
	}

}
