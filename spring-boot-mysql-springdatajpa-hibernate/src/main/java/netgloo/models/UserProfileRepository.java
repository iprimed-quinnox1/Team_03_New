package netgloo.models;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {

	
}
