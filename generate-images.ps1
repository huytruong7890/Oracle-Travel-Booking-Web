Add-Type -AssemblyName System.Drawing
$images = @{ 'halong' = '#0077CC'; 'sapa' = '#28A745'; 'danang' = '#FFC107'; 'phuquoc' = '#6610F2'; 'vungtau' = '#DC3545'; 'dalat' = '#20C997' }
foreach ($name in $images.Keys) {
    $bmp = New-Object System.Drawing.Bitmap 900, 600
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $color = [System.Drawing.ColorTranslator]::FromHtml($images[$name])
    $g.Clear($color)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $font = New-Object System.Drawing.Font('Segoe UI', 48, [System.Drawing.FontStyle]::Bold)
    $text = $name.ToUpper()
    $size = $g.MeasureString($text, $font)
    $x = ($bmp.Width - $size.Width) / 2
    $y = ($bmp.Height - $size.Height) / 2
    $g.DrawString($text, $font, $brush, $x, $y)
    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 15)
    $g.DrawRectangle($pen, 15, 15, $bmp.Width - 30, $bmp.Height - 30)
    $path = "f:\webtour\wwwroot\images\$name.jpg"
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
}
