$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("domainapp/application/bdd/specs/ScheduleSpec.feature");
formatter.feature({
  "line": 2,
  "name": "Run Simple Job on a schedule",
  "description": "In order to show that SimpleObjects can be seen by a headless process\r\nAs a daemon process\r\nI want to list all SimpleObjects",
  "id": "run-simple-job-on-a-schedule",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DomainAppDemo"
    }
  ]
});
formatter.before({
  "duration": 2870308865,
  "status": "passed"
});
formatter.before({
  "duration": 242798768,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "List SimpleObjects",
  "description": "",
  "id": "run-simple-job-on-a-schedule;list-simpleobjects",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "there are 10 simple objects",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "quartz scheduler is active",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "quartz trigger is called",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "there are 10 simple objects",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 10
    }
  ],
  "location": "SimpleObjectsGlue.there_are_N_simple_objects(int)"
});
formatter.result({
  "duration": 212962715,
  "status": "passed"
});
formatter.match({
  "location": "PollingGlue.quartz_scheduler_is_active()"
});
formatter.result({
  "duration": 168394121,
  "status": "passed"
});
formatter.match({
  "location": "PollingGlue.quartz_trigger_is_called()"
});
formatter.result({
  "duration": 23914303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 10
    }
  ],
  "location": "SimpleObjectsGlue.there_are_N_simple_objects(int)"
});
formatter.result({
  "duration": 4240431,
  "error_message": "org.apache.isis.applib.NonRecoverableException: No IsisSession on current thread.\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.lambda$getPersistenceSession$0(PersistenceSessionServiceInternalDefault.java:213)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.getPersistenceSession(PersistenceSessionServiceInternalDefault.java:213)\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.getObjectAdapterProvider(PersistenceSessionServiceInternalDefault.java:63)\r\n\tat org.apache.isis.core.metamodel.adapter.ObjectAdapterProvider$Delegating.adapterFor(ObjectAdapterProvider.java:117)\r\n\tat org.apache.isis.core.wrapper.handlers.DomainObjectInvocationHandler.adapterFor(DomainObjectInvocationHandler.java:818)\r\n\tat org.apache.isis.core.wrapper.handlers.DomainObjectInvocationHandler.invoke(DomainObjectInvocationHandler.java:174)\r\n\tat domainapp.modules.simple.dom.impl.SimpleObjects$bb$BqblvDQg.listAll(Unknown Source)\r\n\tat domainapp.modules.simple.specglue.SimpleObjectsGlue.there_are_N_simple_objects(SimpleObjectsGlue.java:37)\r\n\tat ✽.Then there are 10 simple objects(domainapp/application/bdd/specs/ScheduleSpec.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 88872462,
  "error_message": "org.apache.isis.applib.NonRecoverableException: No IsisSession on current thread.\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.lambda$getPersistenceSession$0(PersistenceSessionServiceInternalDefault.java:213)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.getPersistenceSession(PersistenceSessionServiceInternalDefault.java:213)\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.getTransactionManager(PersistenceSessionServiceInternalDefault.java:222)\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.getTransactionState(PersistenceSessionServiceInternalDefault.java:202)\r\n\tat org.apache.isis.core.runtime.services.xactn.TransactionServiceDefault.getTransactionState(TransactionServiceDefault.java:104)\r\n\tat org.apache.isis.core.runtime.services.xactn.TransactionServiceDefault.nextTransaction(TransactionServiceDefault.java:63)\r\n\tat org.apache.isis.core.runtime.services.xactn.TransactionServiceDefault.nextTransaction(TransactionServiceDefault.java:58)\r\n\tat org.apache.isis.core.runtime.headless.HeadlessWithBootstrappingAbstract.tearDownAllModules(HeadlessWithBootstrappingAbstract.java:138)\r\n\tat domainapp.application.bdd.specglue.BootstrappingGlue.afterScenario(BootstrappingGlue.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:39)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:79)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:70)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:220)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:188)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:202)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:181)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:128)\r\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invokeAllTests(JUnitPlatformProvider.java:142)\r\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invoke(JUnitPlatformProvider.java:117)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.uri("domainapp/application/bdd/specs/SimpleObjectSpec_listAllAndCreate.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#"
    },
    {
      "line": 2,
      "value": "#  Licensed to the Apache Software Foundation (ASF) under one or more"
    },
    {
      "line": 3,
      "value": "#  contributor license agreements.  See the NOTICE file distributed with"
    },
    {
      "line": 4,
      "value": "#  this work for additional information regarding copyright ownership."
    },
    {
      "line": 5,
      "value": "#  The ASF licenses this file to You under the Apache License, Version 2.0"
    },
    {
      "line": 6,
      "value": "#  (the \"License\"); you may not use this file except in compliance with"
    },
    {
      "line": 7,
      "value": "#  the License.  You may obtain a copy of the License at"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "#     http://www.apache.org/licenses/LICENSE-2.0"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#  Unless required by applicable law or agreed to in writing, software"
    },
    {
      "line": 12,
      "value": "#  distributed under the License is distributed on an \"AS IS\" BASIS,"
    },
    {
      "line": 13,
      "value": "#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied."
    },
    {
      "line": 14,
      "value": "#  See the License for the specific language governing permissions and"
    },
    {
      "line": 15,
      "value": "#  limitations under the License."
    },
    {
      "line": 16,
      "value": "#"
    }
  ],
  "line": 18,
  "name": "List and Create New Simple Objects",
  "description": "",
  "id": "list-and-create-new-simple-objects",
  "keyword": "Feature",
  "tags": [
    {
      "line": 17,
      "name": "@DomainAppDemo"
    }
  ]
});
formatter.before({
  "duration": 73172786,
  "error_message": "java.lang.NullPointerException\r\n\tat org.apache.isis.core.integtestsupport.components.HeadlessTransactionSupportDefault.getPersistenceSession(HeadlessTransactionSupportDefault.java:170)\r\n\tat org.apache.isis.core.integtestsupport.components.HeadlessTransactionSupportDefault.getTransactionManager(HeadlessTransactionSupportDefault.java:166)\r\n\tat org.apache.isis.core.integtestsupport.components.HeadlessTransactionSupportDefault.beginTransaction(HeadlessTransactionSupportDefault.java:40)\r\n\tat org.apache.isis.core.runtime.headless.HeadlessWithBootstrappingAbstract.beginTransaction(HeadlessWithBootstrappingAbstract.java:127)\r\n\tat org.apache.isis.core.runtime.headless.HeadlessWithBootstrappingAbstract.bootstrapAndSetupIfRequired(HeadlessWithBootstrappingAbstract.java:119)\r\n\tat domainapp.application.bdd.specglue.BootstrappingGlue.beforeScenario(BootstrappingGlue.java:27)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:39)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:79)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:70)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:220)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:188)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:202)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:181)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:128)\r\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invokeAllTests(JUnitPlatformProvider.java:142)\r\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invoke(JUnitPlatformProvider.java:117)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 1341133,
  "error_message": "java.lang.NullPointerException\r\n\tat org.apache.isis.applib.services.jdosupport.IsisJdoSupportDN5.getPersistenceSession(IsisJdoSupportDN5.java:223)\r\n\tat org.apache.isis.applib.services.jdosupport.IsisJdoSupportDN5.getJdoPersistenceManager(IsisJdoSupportDN5.java:233)\r\n\tat org.apache.isis.applib.fixturescripts.teardown.TeardownFixtureAbstract2.getPersistenceManagerFactory(TeardownFixtureAbstract2.java:122)\r\n\tat org.apache.isis.applib.fixturescripts.teardown.TeardownFixtureAbstract2.doDiscriminatorOf(TeardownFixtureAbstract2.java:104)\r\n\tat org.apache.isis.applib.fixturescripts.teardown.TeardownFixtureAbstract2.discriminatorColumnOf(TeardownFixtureAbstract2.java:99)\r\n\tat org.apache.isis.applib.fixturescripts.teardown.TeardownFixtureAbstract2.deleteFrom(TeardownFixtureAbstract2.java:37)\r\n\tat domainapp.modules.simple.SimpleModule$1.execute(SimpleModule.java:37)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript$ExecutionContext.executeChildIfNotAlready(FixtureScript.java:648)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript$ExecutionContext.executeChildT(FixtureScript.java:605)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript$ExecutionContext.executeChildT(FixtureScript.java:570)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript$ExecutionContext.executeChild(FixtureScript.java:533)\r\n\tat org.apache.isis.applib.AppManifestAbstract2$2.execute(AppManifestAbstract2.java:72)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript$ExecutionContext.executeChildIfNotAlready(FixtureScript.java:648)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript$ExecutionContext.executeChildT(FixtureScript.java:605)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript$ExecutionContext.executeChildT(FixtureScript.java:570)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript$ExecutionContext.executeChild(FixtureScript.java:533)\r\n\tat domainapp.application.fixture.scenarios.DomainAppDemo.execute(DomainAppDemo.java:38)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript$ExecutionContext.executeChildIfNotAlready(FixtureScript.java:648)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript$ExecutionContext.access$100(FixtureScript.java:273)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScript.run(FixtureScript.java:880)\r\n\tat org.apache.isis.applib.fixturescripts.FixtureScripts.runFixtureScript(FixtureScripts.java:309)\r\n\tat org.apache.isis.applib.services.fixturespec.FixtureScriptsDefault.runFixtureScript(FixtureScriptsDefault.java:119)\r\n\tat domainapp.application.bdd.specglue.CatalogOfFixturesGlue.runDomainAppDemo(CatalogOfFixturesGlue.java:27)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:39)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:79)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:70)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:220)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:188)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:202)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:181)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:128)\r\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invokeAllTests(JUnitPlatformProvider.java:142)\r\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invoke(JUnitPlatformProvider.java:117)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 20,
  "name": "Existing simple objects can be listed and new ones created",
  "description": "",
  "id": "list-and-create-new-simple-objects;existing-simple-objects-can-be-listed-and-new-ones-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "there are initially 10 simple objects",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I create a new simple object",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "there are 11 simple objects",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    }
  ],
  "location": "SimpleObjectsGlue.there_are_N_simple_objects(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SimpleObjectsGlue.create_a_simple_object()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 10
    }
  ],
  "location": "SimpleObjectsGlue.there_are_N_simple_objects(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 107158,
  "error_message": "org.apache.isis.applib.NonRecoverableException: No IsisSession on current thread.\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.lambda$getPersistenceSession$0(PersistenceSessionServiceInternalDefault.java:213)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.getPersistenceSession(PersistenceSessionServiceInternalDefault.java:213)\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.getTransactionManager(PersistenceSessionServiceInternalDefault.java:222)\r\n\tat org.apache.isis.core.runtime.services.persistsession.PersistenceSessionServiceInternalDefault.getTransactionState(PersistenceSessionServiceInternalDefault.java:202)\r\n\tat org.apache.isis.core.runtime.services.xactn.TransactionServiceDefault.getTransactionState(TransactionServiceDefault.java:104)\r\n\tat org.apache.isis.core.runtime.services.xactn.TransactionServiceDefault.nextTransaction(TransactionServiceDefault.java:63)\r\n\tat org.apache.isis.core.runtime.services.xactn.TransactionServiceDefault.nextTransaction(TransactionServiceDefault.java:58)\r\n\tat org.apache.isis.core.runtime.headless.HeadlessWithBootstrappingAbstract.tearDownAllModules(HeadlessWithBootstrappingAbstract.java:138)\r\n\tat domainapp.application.bdd.specglue.BootstrappingGlue.afterScenario(BootstrappingGlue.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:39)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:79)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:70)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:220)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:188)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:202)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:181)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:128)\r\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invokeAllTests(JUnitPlatformProvider.java:142)\r\n\tat org.apache.maven.surefire.junitplatform.JUnitPlatformProvider.invoke(JUnitPlatformProvider.java:117)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
});