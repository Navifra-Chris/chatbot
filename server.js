const express = require('express')
const app = express()
app.use(express.json()) 
app.use(express.static('public'))


app.listen(8080);

const fs = require('fs')

const dataBuffer = fs.readFileSync('data.json')
const dataJson = dataBuffer.toString()

const data = JSON.parse(dataJson)

app.get('/', (req, res) => {
	var result = "welcome to my chatbot\n"
	res.writeHead(200)
	res.write("welcome to my chatbot\n")
	res.write("1.name : {chatbot ip}:8080/name\n")
	res.write("2.age : {chatbot ip}:8080/age\n")
	res.write("3.nationality : {chatbot ip}:8080/nationality\n")
	res.write("4.word : {chatbot ip}:8080/word\n")
	res.end()
	})

app.get('/name', (req, res) => {
	var result = "my name is"
	try {
      result = result.concat(" ", data.name)
    } catch (err) {
      result = err
    }
    res.writeHead(200)
		res.end(result)
	})

app.get('/age', (req, res) => {
	var result = 'what is your name\nmy age is'
	try {
			result = result.concat(" ", data.age)
		} catch (err) {
			result = err
		}
		res.writeHead(200)
		res.end(result)
	})

app.get('/nationality', (req, res) => {
	var result = "my nationality is"
	try {
			result = result.concat(" ", data.nationality)
		} catch (err) {
			result = err
		}
		res.writeHead(200)
		res.end(result)
	})
	
app.get('/word', (req, res) => {
	var result = ""
	try {
			result = result.concat(" ", data.word)
		} catch (err) {
			result = err
		}
		res.writeHead(200)
		res.end(result)
	})