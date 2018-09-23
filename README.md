Create First Protractor Script
=====

**This project demonstrates following**

1) Install nodejs using brew or download ( by default npm will also be installed)
2) using npm install protractor
3) Download eclipse for JavaScript
4) Start
4) Create first script and make use of 
	
	a) Jasmine keywords - describe, it, assertion method expect
	
	b) Protractor global variables like browser and element.
	
	c) JavaScript promise to handle Asynchronous feature
	
	d) Most of the Protractor methods are synchronous (80 to 90%), few need to be handled 


**Install node.js**

this will install node along with npm

```
brew install node

node -v

npm -v
```

npm is node package manager which downloads modules from node repository

**Install protractor**

```
sudo npm install -g protractor
```


g stands for global/system level installation

output:

```
/usr/local/bin/protractor -> /usr/local/lib/node_modules/protractor/bin/protractor
/usr/local/bin/webdriver-manager -> /usr/local/lib/node_modules/protractor/bin/webdriver-manager
+ protractor@5.4.1
added 126 packages from 191 contributors in 5.614s
```


```
protractor --version
```

**Update Webdriver and Start**

```
webdriver-manager update
webdriver-manager start

```

**download eclipse and install plugins:**

1) nodejs - to create run as nodejs task
2) AngularJS Eclipse 1.2.0 for AutoComplete



**Create spec.js file**

declare describe and it

add browser.get("https://angularjs.org/")


**Place protractor folder from /usr/local/lib/node_modules into eclipse javascript project**

**Create configuration file**

**Create Runner task as nodejs**

Project Name : <task runner>ProtractorRunner

path_file : protractor/built/cli.js

Application Arguments : <configuration file name> configuration

**To enable AngujarJs Auto Suggestion**

Select Project --> Configure --> Convert to Tern Project

Select Protector and click on Dependencies tab

**Demo Website to practice**

http://juliemr.github.io/protractor-demo/

