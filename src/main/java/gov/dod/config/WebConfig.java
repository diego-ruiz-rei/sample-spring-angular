package gov.dod.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

    /**
     * Maps all AngularJS routes to index so that they work with direct linking.
     */
    @Controller
    static class Routes {
        @RequestMapping({
                "/about",
                "/error",

        })
        public String index() {
            return "forward:/index.html";
        }
    }
}