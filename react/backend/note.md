## data travel
Data into packets gone from mobile to nearest tower and tower company check its whitelisted or black one
if whitelisted then tower convert them into electrical signal and send through cables 
### through router
if your device not directed connnect to internet and connect to wifi then first message goes to router (which in house) and then this router send the msg also router has mac-address of each device connected to it that why it send msg to it correct device.

### server
a computer system designed to receive request and response with the data required in request and send that data is callled server.

#### http: hyper text transfer protocol 
based on this protocol internet serve without it nothing run and these are specific rules have to follow inorder to send and recieve the data

so the data eject from device into packets and if its http then i can see data throgh a special router but if its https then dont bcz data is encrypted 

#### https: hyper text transfer protocol secured

### ports:
 these are numbers like 3000 so we use to connect client with server
some are open and some are closed ports
When a device communicates over a network, data packets are sent to its IP address. Each packet also includes a port number, which tells the operating system which application or service should receive that data.

Port numbers identify services: Each application listens on a specific port, so incoming data reaches the correct program.
IP + Port + Protocol = Socket: This combination ensures that network traffic is delivered precisely to the right process on the right device.

#### Ports act like entry doors for data — the IP brings the data to the device, and the port directs it to the correct application.


## import and export
for export we write module.exports = d; and one file only export one time
if more than one data then module.exports = {first:a, second:b;}
for import we write const d= require('./filename')

### v8 engine code has the power to create server not the js itself
first the code of c++ extract from google chrome engine so we cant write code in js instead of c++ to tackle this problem the man wrap the c++ code with js so now our code first goes to js then it convert into c++ and send to that c++ code of v8 engine.

so now if this c++ and js code combine then this will be called Nodejs.

## run any file js in backend ' node ./filename ' in terminal