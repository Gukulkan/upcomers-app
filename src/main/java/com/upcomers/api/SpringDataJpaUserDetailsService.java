
package com.gukulkan;

import com.gukulkan.entity.SiteUser;
import com.gukulkan.repository.SiteUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class SpringDataJpaUserDetailsService implements UserDetailsService {

	private final SiteUserRepository repository;

	@Autowired
	public SpringDataJpaUserDetailsService(SiteUserRepository repository) {
		this.repository = repository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		SiteUser siteUser = this.repository.findByUsername(username);
		return new User(siteUser.getUsername(), siteUser.getPassword(),
				AuthorityUtils.createAuthorityList(siteUser.getUserRole().name()));
	}

}
