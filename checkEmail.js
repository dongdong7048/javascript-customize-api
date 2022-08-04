/** 檢核email輸入是否合法 **/
function checkEmail() {
      let req = /^([a-zA-Z0-9]+[_|\_|\.|\-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|\-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      const input_email = $('.input-email'); // <input type="text" class="input-pwd" /> , use jquery
      if (!req.test(input_email.val()))
        alert("this email is inValid!")
      else
        alert('this email is valid!')
}
