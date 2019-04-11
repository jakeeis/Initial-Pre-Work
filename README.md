# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Clicking the link makes the browser send a request to a DNS server, giving the domain name and asking for the associated IP address. If the DNS server has the associated IP address cached, then it simply sends it back to the client. However if the IP address is not in the DNS server's cache, it will ask other DNS servers for the information first and then send the IP address back. With the IP address associated with the domain name, the browser then sends an HTTP request to the web server. Upon receiving the request, he server-side code may run, processing the request which may involve accessing a database. The server then sends an HTTP response back to the browser. The browser then runs the received HTML which may call upon CSS files, javascript files, images, other assets, etc. and renders the webpage based on the result.

## From start to finish, how does data reach you to be rendered in the browser?

Data reaches the browser following the steps outlined above. However, the HTTP response does not have to be a whole website. It might be plain text, XML or a JSON object (as a string).

## What code is rendered in the browser?

HTML form the skeleton of the web page, providing structure for the elements. This is then styled with CSS for aesthetics. The DOM can then be manipulated with javascript to make the page more dynamic. All three of these codes affect how the webpage is rendered by the browser client side.

## What is the server-side code’s main function?

The server side code's main function is to process requests made by the client. This may include accessing a database or sending back information. Additionally, server-side codes such as PHP can manipulate the DOM before the file is even sent to the browser.

## What is the client-side code’s main function?

The main function of the client side code is to relay information to the user. It achieves this by taking and processing data from the user as well as the server. Additionally, the client-side code may send requests to the server.

## What is runtime?

Runtime is the time period when the code is actually executed. The code does nothing before or after runtime.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance of the client-side assets is created for every tab of the webpage that is open. There is no upper bound on this number.

## How many instances of the server-side code are available at any given time?

The client-side code may send many requests to the server, creating many instances of the server-side code. This means there is no upper bound on the number of instances of server-side code that are available.

## How many instances of the databases connected to the server application are created?

A server-side script may connect to one database, many databases or even no databases. The maximum number of instances of the server connected to databases is the number of server-side scripts running multiplied by the number of databases.
