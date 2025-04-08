# Script para renombrar las imágenes de Homem-Aranha (Spider-Man) con nombres en alemán
# Cambiando a la carpeta de imágenes
Set-Location .\public\images\

# Mapeo de archivos y sus nuevos nombres
$fileMapping = @{
    "desenho-da-mascara-do-homem-aranha-para-colorir.jpg" = "malvorlage-spiderman-maske-zum-ausmalen.jpg"
    "desenho-do-homem-aranha-agachado-para-colorir.jpg" = "malvorlage-spiderman-hockend-zum-ausmalen.jpg"
    "desenho-do-homem-aranha-com-logo-atras-para-colorir.jpg" = "malvorlage-spiderman-mit-logo-zum-ausmalen.jpg"
    "desenho-do-homem-aranha-e-hulk-para-colorir.jpg" = "malvorlage-spiderman-und-hulk-zum-ausmalen.jpg"
    "desenho-do-homem-aranha-na-rua-para-colorir.jpg" = "malvorlage-spiderman-auf-der-strasse-zum-ausmalen.jpg"
    "desenho-do-homem-aranha-no-ar-para-colorir.jpg" = "malvorlage-spiderman-in-der-luft-zum-ausmalen.jpg"
    "desenho-do-homem-aranha-pendurado-em-uma-corda-para-colorir.jpg" = "malvorlage-spiderman-an-faden-haengend-zum-ausmalen.jpg"
    "desenho-homem-aranha-para-colorir.jpg" = "malvorlage-spiderman-zum-ausmalen.jpg"
}

# Renombrar cada archivo
foreach ($file in $fileMapping.Keys) {
    if (Test-Path $file) {
        $newName = $fileMapping[$file]
        Rename-Item -Path $file -NewName $newName
        Write-Host "Renombrando: $file a $newName"
    } else {
        Write-Host "Archivo no encontrado: $file" -ForegroundColor Red
    }
}

Write-Host "Proceso de renombrado completado." -ForegroundColor Green 