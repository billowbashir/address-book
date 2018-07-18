//Business logic
function contact(first, last){
  this.firstName=first;
  this.lastName=last;
  this.address=[];
}
function address(street, city, county){
  this.street=street;
  this.city=city
  this.county=county
}
contact.prototype.fullName=function(){
  return this.firstName+" "+this.lastName;
}

//user interface
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    var inputtedFirstName=$("input#new-first-name").val();
    var inputtedLastName=$("input#new-last-name").val();

    var newContact=new contact (inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function(){
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
  });
  });
});
