package com.gukulkan.repository;

import com.gukulkan.entity.SiteUser;
import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RestResource;

@org.springframework.stereotype.Repository
@RestResource(exported = false)
public interface SiteUserRepository extends Repository<SiteUser, Long>{
    SiteUser findByUsername(String username);
}
