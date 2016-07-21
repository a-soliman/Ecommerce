//the customer section 


//customer section ===> seller corner
// identifing the ouuput
var customerDiv =document.getElementById('customer')

//seller corner
	//the col-sm-6
sellerCol = document.createElement('div')
	sellerCol.setAttribute('class', 'col-xs-12')
	//the seller Div
sellerDiv = document.createElement('div')
	sellerDiv.setAttribute('class', 'sellerDiv')
	
	//seller header
sellerH4 = document.createElement('h4')
sellerP = document.createElement('p')

	sellerH4.textContent = "Seller"
	sellerP.textContent = 'Sell your old phone here..'
	
	//make
sellerMakeLabel =document.createElement('label')
sellerMakeInput = document.createElement('input')

	sellerMakeLabel.textContent = 'Make: '
	//setting the attributes for the input
	sellerMakeInput.setAttribute('class', 'form-control')
	sellerMakeInput.setAttribute('type', 'text')
	sellerMakeInput.setAttribute('placeholder', 'Apple, Samsung, Sony')
	sellerMakeInput.setAttribute('id', 'sellerMake')

	//model
sellerModelLabel =document.createElement('label')
sellerModelInput = document.createElement('input')

	sellerModelLabel.textContent = 'Model: '
	//setting the attributes for the input
	sellerModelInput.setAttribute('class', 'form-control')
	sellerModelInput.setAttribute('type', 'text')
	sellerModelInput.setAttribute('placeholder', 'Galaxy S7, 6s-plus, xperia')
	sellerModelInput.setAttribute('id', 'sellerModel')

	//Color
sellerColorLabel =document.createElement('label')
sellerColorInput = document.createElement('input')

	sellerColorLabel.textContent = 'Color: '
	//setting the attributes for the input
	sellerColorInput.setAttribute('class', 'form-control')
	sellerColorInput.setAttribute('type', 'text')
	sellerColorInput.setAttribute('placeholder', 'pink, white, dark-blue')
	sellerColorInput.setAttribute('id', 'sellerColor')

	//Image
sellerImageLabel =document.createElement('label')
sellerImageInput = document.createElement('input')

	sellerImageLabel.textContent = 'Image Link: '
	//setting the attributes for the input
	sellerImageInput.setAttribute('class', 'form-control')
	sellerImageInput.setAttribute('type', 'text')
	sellerImageInput.setAttribute('placeholder', 'http://www.google.image.jpg')
	sellerImageInput.setAttribute('id', 'sellerImage')
	//price
sellerPriceLabel =document.createElement('label')
sellerPriceInput = document.createElement('input')

	sellerPriceLabel.textContent = 'Price: '
	//setting the attributes for the input
	sellerPriceInput.setAttribute('class', 'form-control')
	sellerPriceInput.setAttribute('type', 'num')
	sellerPriceInput.setAttribute('placeholder', '500, 950, 400')
	sellerPriceInput.setAttribute('id', 'sellerPrice')
	//post item
sellerButton = document.createElement('button')
	sellerButton.textContent = 'Post'
	sellerButton.setAttribute('class', 'btn btn-md')
	sellerButton.setAttribute('onclick', 'postNewPhone()')

// appending childs to sellerDiv
sellerDiv.appendChild(sellerH4)
sellerDiv.appendChild(sellerP)
sellerDiv.appendChild(sellerMakeLabel)
sellerDiv.appendChild(sellerMakeInput)
sellerDiv.appendChild(sellerModelLabel)
sellerDiv.appendChild(sellerModelInput)
sellerDiv.appendChild(sellerColorLabel)
sellerDiv.appendChild(sellerColorInput)
sellerDiv.appendChild(sellerImageLabel)
sellerDiv.appendChild(sellerImageInput)
sellerDiv.appendChild(sellerPriceLabel)
sellerDiv.appendChild(sellerPriceInput)
sellerDiv.appendChild(sellerButton)

// appending sellerDiv to sellerCol sm-6
sellerCol.appendChild(sellerDiv)

// appending the col to the HTML <div id='customer'>
customerDiv.appendChild(sellerCol)

// show/hide button prepration
	showHideButton = document.createElement('button')
	showHideButton.className = 'btn btn-lg btn-success'
	showHideButton.textContent = 'SHOW / HIDE'

	showHideDiv = document.createElement('div')
	showHideDiv.appendChild(showHideButton)
	showHideDiv.setAttribute('class', 'showHideDiv col-xs-12')

	newRow = document.createElement('div')
	newRow.setAttribute('class', 'row')

	newRow.appendChild(showHideDiv)

	customerDiv.appendChild(newRow)

// End of the seller corner
//=================================================================

//=================================================================
// End of the customer section
//=================================================================


// the items object
function phone(make, model, image, color, price, sold){
	this.make = make
	this.model = model
	this.image = image
	this.color = color
	this.price = price
	this.sold = sold
} 
// creating an array
var phoneArray = []

//creating objects for my phones
var s3 = new phone('samsung', 'S3', "img/s3.png", 'white', 400, false)
var s4 = new phone('samsung', 'S4', 'img/s4.png', 'blue', 500, false)
var s5 = new phone('samsung', 'S5', 'img/s5.jpg', 'silver', 600, false)
var i5c = new phone('iphone', '5C', 'img/iphone-5c.png', 'yellow', 300, false)
var s6 = new phone('samsung', 'S6', 'img/s6.png', 'gold', 700, false)
var i6s = new phone('iphone', '6S', 'img/iphone-6s.png', 'silver', 900, false)
var s7 = new phone('samsung', 'S7', 'img/s7.png', 'dark blue', 800, false)

//pushing the phones into the array
phoneArray.push(s3)
phoneArray.push(s4)
phoneArray.push(s5)
phoneArray.push(i5c)
phoneArray.push(s6)
phoneArray.push(i6s)
phoneArray.push(s7)


// the for loop 
for (var i = 0; i < phoneArray.length; i++) {
	//creating the text node
	var phoneMake = document.createTextNode(phoneArray[i].make)
	var phoneModel = document.createTextNode('Model: ' + phoneArray[i].model)
	var phoneImage = phoneArray[i].image
	var phoneColor = document.createTextNode('Color: ' + phoneArray[i].color)
	var phonePrice = document.createTextNode(phoneArray[i].price + ' USD')

	//creating the new elements 
		//this is for the bootstrap col-xs-4
	var newCol = document.createElement('div')
		//this is an item wrapper
	var newDiv = document.createElement('div')
		//this is the h1 for the make 
	var newh1 = document.createElement('h1')
		//this is the h2 for the model 
	var newh2 = document.createElement('h2')
		//this is the h3 for the color 
	var newh3 = document.createElement('h3')
		//this is the img  
	var newImg = document.createElement('img')
		//this is the price in h4
	var newh4 = document.createElement('h4')
		// this is the buy now button
	var newbutton = document.createElement('button') 


	// appending childs
	newh1.appendChild(phoneMake)
	newh2.appendChild(phoneModel)
	newh3.appendChild(phoneColor)
	newImg.setAttribute('src', phoneImage)
	newImg.setAttribute('class', 'img-responsive')
	newh4.appendChild(phonePrice)
	newbutton.textContent = 'Buy Now'
	newbutton.setAttribute('class', 'btn btn-lg')
	
	
	// appending to the newDiv
	newDiv.appendChild(newh1)
	newDiv.appendChild(newh2)
	newDiv.appendChild(newh3)
	newDiv.appendChild(newImg)
	newDiv.appendChild(newh4)
	newDiv.appendChild(newbutton)
	// adding class item to the newDiv
	newDiv.setAttribute('class', 'item')
	// appending to the bootstrap col
	newCol.appendChild(newDiv)
	newCol.setAttribute('class', 'col-xs-12 col-md-3 col-sm-6')

	//ntredusing the output Div and appending to it
	var divHere =document.getElementById('here')
	divHere.appendChild(newCol)

	

	

}

function postNewPhone() {

	//getting the entred data .value
	var newMake = document.getElementById('sellerMake').value.toUpperCase()
	var newModel = document.getElementById('sellerModel').value.toUpperCase()
	var newColor = document.getElementById('sellerColor').value.toLowerCase()
	var newImage = document.getElementById('sellerImage').value
	var newPrice = document.getElementById('sellerPrice').value

	if (newMake == "" || newColor == "" || newImage == "" || newPrice == "") {
		var text = "You must fill out all the data in order to post your phone!"
		var youMustP = document.createElement('p')
		youMustP.textContent = text
		sellerDiv.appendChild(youMustP)
		console.log('is not working')
	} //if
	else {


		var postedPhone = new phone (newMake, newModel, newColor, newImage, newPrice, false)
		phoneArray.push(postedPhone)

		console.log(phoneArray[i].make)

			var postedPhoneMake = document.createTextNode(newMake)
			var postedPhoneModel = document.createTextNode('Model: ' + newModel)
			var postedPhoneImage = newImage
			var postedPhoneColor = document.createTextNode('Color: ' + newColor)
			var postedPhonePrice = document.createTextNode(newPrice + ' USD')

		//creating the new elements 
				//this is for the bootstrap col-xs-4
			var newCol = document.createElement('div')
				//this is an item wrapper
			var newDiv = document.createElement('div')
				//this is the h1 for the make 
			var newh1 = document.createElement('h1')
				//this is the h2 for the model 
			var newh2 = document.createElement('h2')
				//this is the h3 for the color 
			var newh3 = document.createElement('h3')
				//this is the img  
			var newImg = document.createElement('img')
				//this is the price in h4
			var newh4 = document.createElement('h4')
				// this is the buy now button
			var newbutton = document.createElement('button') 


			// appending childs
			newh1.appendChild(postedPhoneMake)
			newh2.appendChild(postedPhoneModel)
			newh3.appendChild(postedPhoneColor)
			newImg.setAttribute('src', postedPhoneImage)
			newImg.setAttribute('class', 'img-responsive')
			newh4.appendChild(postedPhonePrice)
			newbutton.textContent = 'Buy Now'
			newbutton.setAttribute('class', 'btn btn-lg')
			
			
			// appending to the newDiv
			newDiv.appendChild(newh1)
			newDiv.appendChild(newh2)
			newDiv.appendChild(newh3)
			newDiv.appendChild(newImg)
			newDiv.appendChild(newh4)
			newDiv.appendChild(newbutton)
			// adding class item to the newDiv
			newDiv.setAttribute('class', 'item')
			// appending to the bootstrap col
			newCol.appendChild(newDiv)
			newCol.setAttribute('class', 'col-xs-12 col-md-3 col-sm-6')

			//ntredusing the output Div and appending to it
			var divHere =document.getElementById('here')
			
			// like appending but to have it as a first child
			divHere.insertBefore( newCol, divHere.firstChild )

		} //else
} // postNewPhone()

