<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="tonyk3303@gmail.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
// Принимаем данные с формы 
 
$firstName=$_POST['firstName'];
$lastName=$_POST['lastName'];
$email=$_POST['email'];
$phone=$_POST['phoneNumber']; 
$feedback=$_POST['message'];

// Проверяем валидность e-mail 
 


$msg=" 
Ім'я: $firstName
Прізвище: $lastName
E-mail: $email
Телефон: $phone 
Коментар: $feedback
"; 

 // Отправляем письмо админу  
mail("$adminemail", "$date $time Повідомлення від $name", "$msg");  
 
// Выводим сообщение пользователю 
 

?>