@DomainAppDemo
Feature: Run Simple Job on a schedule
	In order to show that SimpleObjects can be seen by a headless process
	As a daemon process
	I want to list all SimpleObjects
   Scenario: List SimpleObjects
       Given there are 10 simple objects
       And quartz scheduler is active
       When quartz trigger is called 
	   Then there are 10 simple objects