package edu.rice.shortit.shortit.model;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ResponseWrapper {
    public static final String OK_MESSAGE = "OK";

    private String message;
    private Object data;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
