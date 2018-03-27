package netgloo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {


  @RequestMapping("/")
 // @ResponseBody
  public String index() {
	return "http://localhost:8080/Id.jsp";
     
  }
 
	  @Controller
	  public class HomeController {
	  	@RequestMapping("/home")
	  	public String home() {
	  		return "index";
	  	}
	  } 
	   

  
}
  
  
  /*public String index() {
    return "Proudly handcrafted by " +
        "<a href='http://netgloo.com/en'>Netgloo</a> :)";
  }

}*/
