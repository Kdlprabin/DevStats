<?php
$Host = "localhost";
$username = "root";
$password = "Chitwannepal#4";
$database = "DevStats";
$connection = mysqli_connect($Host, $username, $password, $database);
//21232f297a57a5a743894a0e4a801fc3
if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = md5($_POST['password']);
    $get_query = "SELECT * FROM login";
    $getter = mysqli_query($connection,$get_query);
    if ($connection) {
        $rowdata = mysqli_fetch_object($getter);
        $db_email = $rowdata->email;
        $db_password = $rowdata->password;
        if(($email == $db_email)&&($password == $db_password)){
            header("Location:DevStats\index.html");
        }else{
            echo $password;
            echo "wrong password or email";
        }
    } else {
        echo "Connection failed";
    }
}
