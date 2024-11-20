Write-Host "Removing unused UI components..."

$componentsToRemove = @(
    "dropdown-menu.tsx"
)

$baseDir = "components/ui"

foreach ($component in $componentsToRemove) {
    $filePath = Join-Path $baseDir $component
    if (Test-Path $filePath) {
        Remove-Item $filePath -Force
        Write-Host "Removed $component"
    } else {
        Write-Host "$component not found"
    }
}

Write-Host "Cleanup completed!"
