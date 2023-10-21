package edu.rice.shortit.shortit.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AccessLog {
    private Long id;
    private Long time;
    private String ip;

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    public Long getId() {
        return id;
    }
}
