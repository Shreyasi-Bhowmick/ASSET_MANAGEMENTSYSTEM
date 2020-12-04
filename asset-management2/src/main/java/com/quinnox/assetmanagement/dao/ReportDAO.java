package com.quinnox.assetmanagement.dao;

import java.util.List;

import com.quinnox.assetmanagement.entity.Reports;

public interface ReportDAO {

	public boolean addReport(Reports reports);
	public List<Reports> getReport();

}
