<?php

$conexion= mysqli_connect("localhost","root","","registro");

if (!$conexion) {
	echo 'Error al conectar a la base de datos';
	# code...
}else {
 echo 'hola'; 
}

