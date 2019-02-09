package domainapp.modules.simple.jobs;

import java.util.List;

import javax.inject.Inject;

import org.apache.isis.core.runtime.sessiontemplate.AbstractIsisSessionTemplate;
import org.apache.isis.core.security.authentication.AuthenticationSession;
import org.apache.isis.core.security.authentication.standard.SimpleSession;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.base.Splitter;
import com.google.common.collect.Iterables;

import domainapp.modules.simple.dom.impl.SimpleObject;
import domainapp.modules.simple.dom.impl.SimpleObjects;

public class SimpleJob implements Job {

	private static final Logger LOG = LoggerFactory.getLogger(SimpleJob.class);

	public void execute(final JobExecutionContext context) {

		final AuthenticationSession authSession = newAuthSession(context);
		new JobExecution().execute(authSession, context);

//        Thread thread = new Thread(new Runnable() {
//			
//			@Override
//			public void run() {
//			   final AuthenticationSession authSession = newAuthSession(context);
//				new JobExecution().execute(authSession, context);
//			}
//		});
//         thread.start();
//         try {
//			thread.join(60000);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}

	}

	protected String getKey(JobExecutionContext context, String key) {
		return context.getMergedJobDataMap().getString(key);
	}

	protected AuthenticationSession newAuthSession(JobExecutionContext context) {
		String user = getKey(context, "user");
		String rolesStr = getKey(context, "roles");
		String[] roles = Iterables.toArray(Splitter.on(",").split(rolesStr), String.class);
		return new SimpleSession(user, roles);
	}

	public static class JobExecution extends AbstractIsisSessionTemplate {
		private final static Logger LOG = LoggerFactory.getLogger(JobExecution.class);

		@Override
		public void execute(AuthenticationSession authSession, Object context) {
			// TODO Auto-generated method stub
			super.execute(authSession, context);
		}

		@Override
		protected void doExecute(Object objContext) {

			JobExecutionContext context = (JobExecutionContext) objContext;
			LOG.info("Running Simple Job at " + context.getFireTime());
			Object objPollBatchSize = context.getJobDetail().getJobDataMap().get("batch_size");
			Integer pollBatchSize = Integer.valueOf(objPollBatchSize.toString());
			List<SimpleObject> allSimpleObjects = null;
			try {
				allSimpleObjects = simpleObjects.listAll();
			} catch (Exception e) {
				System.err.println("error listing SimpleObjects");
				e.printStackTrace();
				return;
			}
			allSimpleObjects.stream().limit(pollBatchSize).forEach(o -> {
				LOG.info("inspecting object: " + o.getName());
			});
			LOG.info("Simple processing complete.");
		}

		@Inject
		SimpleObjects simpleObjects;

	}

}
