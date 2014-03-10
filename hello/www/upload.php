<?php
    echo(1);
	exit();
    if($_POST["NewResult"])
    {
        $Result = $_POST["NewResult"];
		if($Result=="barvaz")
		{
			exit("yaron");
		}
		exit("franky");
    }
 return(200);
   
?>
