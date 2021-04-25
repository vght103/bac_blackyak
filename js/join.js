
window.onload = function(){

  var policyBoxs = $(".instruction_box");
  policyBoxs.eq(0).css("display", "block");
  
  var clickItems = $(".join_instruction > label > a");
  console.log(clickItems);
  clickItems.click(function(e){
    policyBoxs.css("display", "none");
    var currentIndex = e.target.className.replace("policy_", "");
    policyBoxs.eq(currentIndex - 1).css("display", "block");
  });
}
