package com.medfinder.medfinder.dto;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ResponseHandler {

    public static ResponseEntity<Object> generateResponse(String message, HttpStatus httpStatus, Object responseObj, HttpServletResponse response) {
        Map<String, Object> map =  new HashMap<String, Object>();
        map.put("message", message);
        map.put("data", responseObj);
        response.se
        return new ResponseEntity<Object>(map,httpStatus);
    }
}
