function checkPwd() {

  /** 最少須包含一個小寫英文字母以及包含一個大寫英文字母 **/
  let req1 = /^(?=.*[a-z])(?=.*[A-Z]).*$/;

  /** 不可全為連續相同的英數字 **/
  let req2 = /^([a-zA-Z\d])\1+$/;

  let input_pwd = $('.input-pwd').val(); //use jquery

  if (!req1.test(input_pwd))
    alert("最少須包含一個小寫英文字母以及包含一個大寫英文字母")

  if (req2.test(input_pwd))
    alert("不可全為連續相同的英數字")

}