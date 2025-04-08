# PowerShell script para cambiar "malvorlage" por "ausmalbilder" en los nombres de archivo
Set-Location .\public\images\

# Obtener todos los archivos que comienzan con "malvorlage"
$files = Get-ChildItem -Filter "malvorlage-*"

# Renombrar cada archivo
foreach ($file in $files) {
    $newName = $file.Name -replace "^malvorlage-", "ausmalbilder-"
    
    Write-Host "Renombrando $($file.Name) a $newName"
    Rename-Item -Path $file.Name -NewName $newName
}

Write-Host "¡Proceso de renombrado completado!" 