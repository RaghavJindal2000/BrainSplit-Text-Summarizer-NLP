# checkmate-full

## **Prerequisites**: 
Python 3.5 and above, NodeJs and pip3.

## **First time Setup**
Clone the directory.
After cloning please make sure to download the "Glove.6B.100d.txt" from [here](https://www.kaggle.com/danielwillgeorge/glove6b100dtxt)

Place the file in the root folder.

Navigate to the basic-app folder in terminal

```
~ $ cd basic-app
```
Make sure you have the latest version of NodeJs installed.

from the basic-app directory run the following to install all the dependencies
```
~ $ npm i -y
```
Once done, our front end and back end services are ready to go, but before proceeding, let's set up the tools for our ML model to work.

Install numpy and nltk  and pandas using the following command

```
~ $ pip3 install nltk, pandas,numpy
```

Now in the terminal, open up python by typing

``` 
~ $ python3
```
In the python shell that opens, type the following

```
Python 3.6.9 (default, Nov  7 2019, 10:44:02) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import nltk
>>> nltk.download('punkt')
>>> nltk.download('stopwords')
```
__Note__ : The aboce commands need to be run only once to set up our workspace.

## **Running the program**

To run the program
go into the directory 'basic-app' and run 
```
~ $ node server.js
```
Open a new terminal, and reach the 'basic-app' directory again, and run
``` 
~ $ npm start
```

* ###  App.js
  The file that will be running the front end and serving up the form. The form will take in the text file containing terms and conditions and after loading, it will output the summary of the terms and conditions text uploaded.
* ### Server.js
  The file that will be running the back end and providing the routes needed to the form as well as communicating with the machine learning model in python. It also stores the pdf in the 'public' directory so one can view what file was uploaded to the server
* ### cm.py
  The file that contains the code and will be executing the recieved text file to produce the summary of the text. It implies the TextRank summarization algorithm, using Glove Vector for Word representation to calculate the likelihood of a sentence in the terms and conditions pdf being important breach of privacy.
Various terms and conditions in text format have been also provided for anyone to be able to test the model.


