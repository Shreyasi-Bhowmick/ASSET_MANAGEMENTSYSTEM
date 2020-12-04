package com.quinnox.assetmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.assetmanagement.dao.UserDAO;
import com.quinnox.assetmanagement.entity.UserRegister;
import com.quinnox.assetmanagement.response.ResponseData;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class UserController {

	@Autowired
	UserDAO userDao;

	@PostMapping("/register")
	public ResponseData register(@RequestBody UserRegister userRegister) {
		userRegister.setType("customer");
		System.out.println(userRegister);
		userDao.register(userRegister);
		ResponseData response = new ResponseData();
		response.setMessage("Register successfully");
		return response;

	}

	@GetMapping("/detail")
	public ResponseData getDetail() {

		ResponseData response = new ResponseData();
		response.setMessage("User details dispalyed");
		response.setData(userDao.getDetail());
		return response;

	}

	@PutMapping("/update")
	public ResponseData updateDetails(@RequestBody UserRegister userRegister) {

		userDao.updateDetails(userRegister);
		ResponseData response = new ResponseData();
		response.setMessage("User details updated");
		response.setData(userDao.updateDetails(userRegister));
		return response;

	}

}
