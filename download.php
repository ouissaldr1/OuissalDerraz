<?php
  
header("Content-Type: application/octet-stream");
  
$file = "Ouissal_derrazCv.pdf";
  
header("Content-Disposition: attachment; filename=" . urlencode($file));   
header("Content-Type: application/download");
header("Content-Description: File Transfer");            
header("Content-Length: " . filesize($file));
  
ob_clean(); 
flush();  
$fp = fopen($file, "r");
while (!feof($fp)) {
    echo fread($fp, 8192);
    flush(); // This is essential for large downloads
} 
  
fclose($fp); 
?>