describe('Math feature',function(){
	
	it('addition', function(){
		// Protractor methods
		browser.get("http://juliemr.github.io/protractor-demo/");
		
		element(by.model('first')).sendKeys('4');
		element(by.model('second')).sendKeys('5');	
		element(by.id('gobutton')).click();
		
		// JavaScript Asynchronous resolved and print on console
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log('result : ' + text);
		});
		
		
		// JavaScript Asynchronous resolved and used Jasmine assertion
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			// Jasmine assertion
			expect('9').toBe(text);
		});
		
		// direct Jasmine assertion
		expect('9').toBe(element(by.css("h2[class='ng-binding']")).getText());
	});
});
