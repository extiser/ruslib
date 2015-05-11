var inputElement = document.getElementsByTagName('input');

for (var i = 0; i < inputElement.length; i++) {
	if (inputElement[i].hasAttribute('placeholder')) {
		var placeholderText = inputElement[i].getAttribute('placeholder');

		inputElement[i].setAttribute('value', placeholderText);
		inputElement[i].setAttribute('onfocus', 'if (this.value=="'+placeholderText+'") this.value="";');
		inputElement[i].setAttribute('onblur', 'if (this.value=="") {this.value="'+placeholderText+'"}');
	}
}


