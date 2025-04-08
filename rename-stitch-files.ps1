# PowerShell script para renombrar los archivos de Stitch al alemán
cd .\public\images\

# Array de pares [nombre original, nuevo nombre]
$fileRenames = @(
    @("desenho-do-stitch-bravo-para-colorir.jpeg", "malvorlage-wuetender-stitch-zum-ausmalen.jpeg"),
    @("desenho-do-david-kawena-surfando-para-imprimir.jpeg", "malvorlage-david-kawena-beim-surfen-zum-ausdrucken.jpeg"),
    @("desenho-do-personagens-lilo-stitch-para-colorir.jpeg", "malvorlage-lilo-stitch-figuren-zum-ausmalen.jpeg"),
    @("imagem-do-lilo-e-familia-para-imprimir.jpeg", "malvorlage-lilo-und-familie-zum-ausdrucken.jpeg"),
    @("imagem-do-stitch-dirigindo-para-colorir.jpeg", "malvorlage-stitch-beim-fahren-zum-ausmalen.jpeg"),
    @("desenho-do-lilo-e-stitch-na-bicicleta-para-imprimir.jpeg", "malvorlage-lilo-und-stitch-auf-dem-fahrrad-zum-ausdrucken.jpeg"),
    @("imagem-do-stitch-e-lilo-divertidos-para-colorir.jpeg", "malvorlage-lustiger-stitch-und-lilo-zum-ausmalen.jpeg"),
    @("desenho-da-lilo-dando-banho-no-stitch-para-colorir.jpeg", "malvorlage-lilo-badet-stitch-zum-ausmalen.jpeg"),
    @("desenho-do-lilo-e-stitch-com-violao-para-imprimir.jpeg", "malvorlage-lilo-und-stitch-mit-gitarre-zum-ausdrucken.jpeg"),
    @("desenho-do-Stitch-com-tabla-para-imprimir.jpeg", "malvorlage-stitch-mit-surfbrett-zum-ausdrucken.jpeg"),
    @("desenho-da-lilo-e-nani-surfando-com-stitch-para-imprimir.jpeg", "malvorlage-lilo-und-nani-surfen-mit-stitch-zum-ausdrucken.jpeg"),
    @("desenho-do-stitch-andando-de-bicicleta-para-colorir.jpeg", "malvorlage-stitch-auf-dem-fahrrad-zum-ausmalen.jpeg"),
    @("imagem-do-stitch-bebendo-agua-de-coco-para-imprimir.jpeg", "malvorlage-stitch-trinkt-kokosnusswasser-zum-ausdrucken.jpeg"),
    @("desenho-da-angel-de-lilo-e-stitch-e-personagem-alienigena-para-colorir.jpeg", "malvorlage-angel-aus-lilo-und-stitch-und-ausserirdische-figur-zum-ausmalen.jpeg"),
    @("Desenho do Gantu e Pleakley de Lilo e Stitch para colorir.jpeg", "malvorlage-gantu-und-pleakley-aus-lilo-und-stitch-zum-ausmalen.jpeg"),
    @("desenho do Jumba Jookiba e Stitch para colorir.jpeg", "malvorlage-jumba-jookiba-und-stitch-zum-ausmalen.jpeg"),
    @("desenho da angel de lilo e stitch com sapo para colorir.jpeg", "malvorlage-angel-aus-lilo-und-stitch-mit-frosch-zum-ausmalen.jpeg")
)

# Renombrar cada archivo
foreach ($pair in $fileRenames) {
    $oldName = $pair[0]
    $newName = $pair[1]
    
    if (Test-Path $oldName) {
        Write-Host "Renombrando $oldName a $newName"
        Rename-Item -Path $oldName -NewName $newName
    } else {
        Write-Host "Archivo no encontrado: $oldName"
    }
}

Write-Host "¡Proceso de renombrado completado!" 