<?php
include 'cn.php';


$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];
$email="igmm.121198@gmail.com";

// Consulta para insertar

$insertar="INSERT INTO datos VALUES ('$nombre','$telefono','$correo','$mensaje')";

$query=mysqli_query($conexion,$insertar);

 if ($query){
 	//echo "\n REGISTRO REALIZADO CON EXITO";
 }

if (isset( $_POST["enviar"])) {
	if (!empty($_POST["nombre"]) && !empty($_POST["telefono"]) && !empty($_POST["correo"])&&  !empty($_POST["mensaje"])) {
	    

		$nombre=$_POST["nombre"];
		$telefono=$_POST["telefono"];
		$correo=$_POST["correo"];
		$mensaje=$_POST["mensaje"];
		$email="igmm.121198@gmail.com";
		$titulo= "Corona" ;

		$contenido ="Nombre: " . $nombre . "\nTelefono: " . $telefono . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;

		$mail= mail($email,$titulo,$contenido);

		if ($mail) {
			$variable =" TUS DATOS SE ENVIARON CORRECTAMENTE ";

      		echo '<script> alert("'.$variable.'");</script>';

		}else{
		   //	$variable =" ERROR ";
           // echo '<script> alert("'.$variable.'");</script>'; 

		   header("Location:datos.php");

	    }


}
}

		
