package com.telemed.MainHealthPlus.repo;

import com.telemed.MainHealthPlus.model.Login;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface loginRepo extends JpaRepository<Login,Integer> {
}
