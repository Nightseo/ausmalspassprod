# Script PowerShell para cambiar de ausmalbilder a malvorlage
Set-Location .\public\images\

# Buscar todos los archivos que empiezan con ausmalbilder- (excepto barbie que ya está corregido)
$files = Get-ChildItem -Filter "ausmalbilder-*" | Where-Object { -not ($_.Name -like "*barbie*") }

# Renombrar cada archivo
foreach ($file in $files) {
    $newName = $file.Name -replace "^ausmalbilder-", "malvorlage-"
    
    Write-Host "Renombrando $($file.Name) a $newName"
    Rename-Item -Path $file.Name -NewName $newName
}

Write-Host "¡Proceso de renombrado completado!" 