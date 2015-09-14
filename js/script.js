	   var shipping = document.querySelector("#shipping");
	   var guarantee = document.querySelector("#guarantee");
	   var credit = document.querySelector("#credit");
	   var shipping_description = document.querySelector(".shipping");
	   var guarantee_description = document.querySelector(".guarantee");
	   var credit_description = document.querySelector(".credit");

	   function select_service(service) {
	   	shipping.classList.remove("service-menu-active");
	   	guarantee.classList.remove("service-menu-active");
	   	credit.classList.remove("service-menu-active");
	   	shipping_description.classList.remove("show-service-menu-info");
	   	guarantee_description.classList.remove("show-service-menu-info");
	   	credit_description.classList.remove("show-service-menu-info");

	   	service.classList.add("service-menu-active");
	   	document.querySelector("." + service.id).classList.add("show-service-menu-info");
	   }
	   shipping.addEventListener("click", function (event) {
	   	select_service(shipping);
	   }, false);

	   guarantee.addEventListener("click", function (event) {
	   	select_service(guarantee);
	   }, false);
	   credit.addEventListener("click", function (event) {
	   	select_service(credit);
	   }, false);


	   var link = document.querySelector(".contacts-btn");
	   var popap = document.querySelector(".contact-form");
	   var close = document.querySelector(".contact-form-close");

	   link.addEventListener("click", function (event) {
	   	event.preventDefault();
	   	popap.classList.add("contact-form-show");
	   });

	   close.addEventListener("click", function (event) {
	   	event.preventDefault();
	   	popap.classList.remove("contact-form-show");
	   });

	   window.addEventListener("keydown", function (event) {
	   	if (event.keyCode == 27) {
	   		popap.classList.remove("contact-form-show")
	   	}
	   })

	  