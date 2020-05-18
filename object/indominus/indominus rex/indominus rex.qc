// Created by Crowbar 0.51.0.0

$modelname "INDOMINUS REX/INDOMINUS REX.mdl"

$bodygroup "studio"
{
	studio "indominus rex_body.smd"
}
$bodygroup "studio"
{
	studio "indominus rex_eyes.smd"
}
$bodygroup "studio"
{
	studio "indominus rex_iris.smd"
}
$bodygroup "studio"
{
	studio "indominus rex_spikes.smd"
}
$bodygroup "studio"
{
	studio "indominus rex_teeth.smd"
}
$bodygroup "studio"
{
	studio "indominus rex_tongue.smd"
}


$surfaceprop "flesh"

$contents "solid"

$maxeyedeflection 90

$mostlyopaque

$cdmaterials "models\INDOMINUS REX\"

$texturegroup "skinfamilies"
{
	{ "Body"   }
	{ "Bloody" }
}

$cbox 0 0 0 0 0 0

$bbox -13 -13 0 13 13 72


$sequence "reference" {
	"indominus rex_anims\reference.smd"
	fadein 0.2
	fadeout 0.2
	fps 1
}
