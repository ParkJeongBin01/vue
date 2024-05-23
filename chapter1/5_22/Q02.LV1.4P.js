function addContact(name, mobile, home = '없음', address = '없음', email = '없음') {
  let str = `name=${name}, mobile=${mobile},home=${home},` + `address=${address},email=${email}`;
  console.log(str);
}
addContact('박정빈', '010-4489-2710');
addContact('최종현', '010-5294-4460', '서울시');
