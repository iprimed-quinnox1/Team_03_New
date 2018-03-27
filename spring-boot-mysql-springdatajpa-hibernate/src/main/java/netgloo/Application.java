package netgloo;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import netgloo.models.Gender;
import netgloo.models.User;
import netgloo.models.UserProfile;
import netgloo.models.UserProfileRepository;

@SpringBootApplication
public class Application {
	
	@Autowired
    private UserProfileRepository userRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
  
 
  public void run(String... args) throws Exception {
      // Clean up database tables
      userProfileRepository.deleteAllInBatch();
      userRepository.deleteAllInBatch();

      //=========================================

      // Create a User instance
      User user = new User();

      Calendar dateOfBirth = Calendar.getInstance();
      dateOfBirth.set(1992, 7, 21);

      // Create a UserProfile instance
      UserProfile userProfile = new UserProfile("+91-8197882053", Gender.MALE, dateOfBirth.getTime(),
              "747", "2nd Cross", "Golf View Road, Kodihalli", "Bangalore",
              "Karnataka", "India", "560008");


      // Set child reference(userProfile) in parent entity(user)
      user.setUserProfile(userProfile);

      // Set parent reference(user) in child entity(userProfile)
      userProfile.setUser(user);

      // Save Parent Reference (which will save the child as well)
  //    userRepository.save(User);

      //=========================================
  }
}

