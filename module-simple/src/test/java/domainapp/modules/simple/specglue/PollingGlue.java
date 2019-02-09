package domainapp.modules.simple.specglue;


import java.util.Date;
import java.util.HashMap;

import org.mockito.Mockito;
//import org.mockito.Mockito;
import org.quartz.JobDataMap;
import org.quartz.JobDetail;
import org.quartz.JobExecutionContext;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import domainapp.modules.simple.jobs.SimpleJob;


public class PollingGlue {
	
//@After
//public void cleanUp() {
//	serviceBus.shutdown();
//}

@Given("^quartz scheduler is active$")
public void quartz_scheduler_is_active() throws Throwable {
	
	HashMap<String, String> map = new HashMap<String, String>();
	map.put("user", "scheduler");
	map.put("roles", "admin_role");
	map.put("batch_size", "1");
	JobDataMap jobDataMap = new JobDataMap(map);
	JobDetail jobDetail = Mockito.mock(JobDetail.class);
	Mockito.when(jobDetail.getJobDataMap()).thenReturn(jobDataMap);

	context = Mockito.mock(JobExecutionContext.class);
	Mockito.when(context.getMergedJobDataMap()).thenReturn(jobDataMap);
	Mockito.when(context.getJobDetail()).thenReturn(jobDetail);
	Mockito.when(context.getFireTime()).thenReturn(new Date());

	job = new SimpleJob();
}

@When("^quartz trigger is called$")
public void quartz_trigger_is_called() throws Throwable {
	job.execute(context);
	
}


//@Inject
//J300eSessions j300eSessions;
//
//@Inject
//ServiceBus serviceBus;

private JobExecutionContext context;

private SimpleJob job;

//@Inject
//Scenario scenario;
}
