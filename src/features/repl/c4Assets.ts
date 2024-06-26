export const c4Assets = `
' C4-PlantUML

' Global pre-settings
' ##################################
' ENABLE_ALL_PLANT_ELEMENTS
'   If ENABLE_ALL_PLANT_ELEMENTS is set BEFORE the first C4_* file is loaded, nearly "all" PlantUML elements can be used like
'     Component(StorageA, "Storage A ", $baseShape="storage")
'   ENABLE_ALL_PLANT_ELEMENTS can be set via 
'     !ENABLE_ALL_PLANT_ELEMENTS = 1
'   or with additional command line argument -DENABLE_ALL_PLANT_ELEMENTS=1

'Version
' ##################################
!function C4Version()
  ' 2 spaces and ' are used as unique marker, that the release scripts makes the correct version update
  !$c4Version  =  "2.10.0beta1"
  !return $c4Version
!end function

!procedure C4VersionDetails()
rectangle C4VersionDetailsArea <<legendArea>> [
| PlantUML | **%version()** |
| C4-PlantUML | **C4Version()** |
]
!end procedure

' Colors
' ##################################
!$ELEMENT_FONT_COLOR ?= "#FFFFFF"

!$ARROW_COLOR ?= "#666666"
!$ARROW_FONT_COLOR ?= $ARROW_COLOR

!$BOUNDARY_COLOR ?= "#444444"
!$BOUNDARY_BG_COLOR ?= "transparent"
!$BOUNDARY_BORDER_STYLE ?= "dashed"

!$LEGEND_TITLE_COLOR ?= "#000000"
!$LEGEND_FONT_COLOR ?= "#FFFFFF"
!$LEGEND_BG_COLOR ?= "transparent"
!$LEGEND_BORDER_COLOR ?= "transparent"
' %darken(darkkhaki,50), #khaki
!$LEGEND_DARK_COLOR ?= "#66622E"
!$LEGEND_LIGHT_COLOR ?= "#khaki"

!$SKETCH_BG_COLOR ?= "#EEEBDC" 
!$SKETCH_FONT_COLOR ?= ""
!$SKETCH_WARNING_COLOR ?= "red"
!$SKETCH_FONT_NAME ?= "Comic Sans MS"

' Labels
' ##################################

!$LEGEND_SHADOW_TEXT ?= "shadow"
!$LEGEND_NO_SHADOW_TEXT ?= "no shadow"
!$LEGEND_NO_FONT_BG_TEXT ?= "last text and back color"
!$LEGEND_NO_FONT_TEXT ?= "last text color"
!$LEGEND_NO_BG_TEXT ?= "last back color"
!$LEGEND_NO_LINE_TEXT ?= "last line color"
!$LEGEND_ROUNDED_BOX ?= "rounded box"
!$LEGEND_EIGHT_SIDED ?= "eight sided"
!$LEGEND_DOTTED_LINE ?= "dotted"
!$LEGEND_DASHED_LINE ?= "dashed"
!$LEGEND_BOLD_LINE ?= "bold"
!$LEGEND_SOLID_LINE ?= "solid"

!$LEGEND_BOUNDARY ?= "boundary"
' ignore (boundary) transparent atm, that the legend is smaller
' !$LEGEND_BOUNDARY_TRANSPARENT_INCL_COMA ?= "transparent, "
!$LEGEND_BOUNDARY_TRANSPARENT_INCL_COMA ?= ""
' (boundary) dashed should not be ignored atm
!$LEGEND_BOUNDARY_DASHED_INCL_COMA ?= "dashed, "
' !$LEGEND_BOUNDARY_DASHED_INCL_COMA ?= ""

!$LEGEND_THICKNESS ?= "thickness"

!$SKETCH_FOOTER_WARNING ?= "Warning:"
!$SKETCH_FOOTER_TEXT ?= "Created for discussion, needs to be validated"

' Styling
' ##################################

!$STEREOTYPE_FONT_SIZE ?= 12
!global $TRANSPARENT_STEREOTYPE_FONT_SIZE = $STEREOTYPE_FONT_SIZE/2
!$TECHN_FONT_SIZE ?= 12

!$ARROW_FONT_SIZE ?= 12

!$LEGEND_DETAILS_SMALL_SIZE ?= 10
!$LEGEND_DETAILS_NORMAL_SIZE ?= 14
!global $LEGEND_DETAILS_SIZE = $LEGEND_DETAILS_SMALL_SIZE

' element symbols typically 4 times too big in legend
!$LEGEND_IMAGE_SIZE_FACTOR ?= 0.25

!$ROUNDED_BOX_SIZE ?= 25
!$EIGHT_SIDED_SIZE ?= 18

' Default element wrap width (of an element)
!$DEFAULT_WRAP_WIDTH ?= 200
' Maximum size in pixels, of a message (in a sequence diagram?)
!$MAX_MESSAGE_SIZE ?= 150
' PlantUML supports no DETERMINISTIC/automatic line breaks of "PlantUML line" (C4 Relationships)
' therefore Rel...() implements an automatic line break based on spaces (like in all other objects).
' If a $type contains \n then these are used (and no automatic space based line breaks are done)
' $REL_TECHN_MAX_CHAR_WIDTH defines the automatic line break position
!$REL_TECHN_MAX_CHAR_WIDTH ?= 35
!$REL_DESCR_MAX_CHAR_WIDTH ?= 32

' internal 
' ##################################

!global $ROUNDED_BOX = "roundedBox"
!global $EIGHT_SIDED = "eightSided"

!global $DOTTED_LINE = "dotted"
!global $DASHED_LINE = "dashed"
!global $BOLD_LINE = "bold"
' solid is not defined in plantUML, but works as reset of all other styles too
!global $SOLID_LINE = "solid"

!global $LEGEND_DETAILS_NONE = "none"
!global $LEGEND_DETAILS_NORMAL = "normal"
!global $LEGEND_DETAILS_SMALL = "small"

skinparam defaultTextAlignment center

skinparam wrapWidth $DEFAULT_WRAP_WIDTH
skinparam maxMessageSize $MAX_MESSAGE_SIZE

skinparam LegendFontColor $LEGEND_FONT_COLOR
skinparam LegendBackgroundColor $LEGEND_BG_COLOR
skinparam LegendBorderColor $LEGEND_BORDER_COLOR

skinparam rectangle<<legendArea>> {
    backgroundcolor $LEGEND_BG_COLOR
    bordercolor $LEGEND_BORDER_COLOR
}

skinparam rectangle {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}

skinparam database {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}

skinparam queue {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}

skinparam participant {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}

skinparam arrow {
    Color $ARROW_COLOR
    FontColor $ARROW_FONT_COLOR
    FontSize $ARROW_FONT_SIZE
}

skinparam person {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}

skinparam actor {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
    style awesome
}

!if %variable_exists("ENABLE_ALL_PLANT_ELEMENTS")
skinparam agent {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam artifact {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam boundary {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam card {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam circle {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam cloud {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam collections {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam control {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam entity {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam file {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam folder {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam frame {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam hexagon {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam interface {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam label {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam stack {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam storage {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam usecase {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
skinparam person {
    StereotypeFontSize $STEREOTYPE_FONT_SIZE
}
!endif

' Some boundary skinparams have to be set as package skinparams too (PlantUML uses internal packages)
' UpdateBoundaryStyle() called in boundary section below
skinparam rectangle<<boundary>> {
    StereotypeFontSize $TRANSPARENT_STEREOTYPE_FONT_SIZE
    StereotypeFontColor $BOUNDARY_BG_COLOR
    BorderStyle $BOUNDARY_BORDER_STYLE
}

skinparam package {
    StereotypeFontSize $TRANSPARENT_STEREOTYPE_FONT_SIZE
    StereotypeFontColor $BOUNDARY_BG_COLOR
    FontStyle plain
    BackgroundColor $BOUNDARY_BG_COLOR
}

' Legend and Tags
' ##################################
!global $tagDefaultLegend = ""
!global $tagCustomLegend = ""

' rel specific
!unquoted function $toStereos($tags)
  !if (%strlen($tags) == 0)
    !return ''
  !endif
  !$stereos = ''
  !$brPos = %strpos($tags, "+")
  !while ($brPos >= 0)
    !$tag = %substr($tags, 0, $brPos)
    !$stereos = $stereos + '<<' + $tag + '>>'
%set_variable_value("$" + $tag + "_LineLegend", %true())
    !$tags = %substr($tags, $brPos+1)
    !$brPos = %strpos($tags, "+")
  !endwhile
  !if (%strlen($tags) > 0)
    !$stereos = $stereos + '<<' + $tags + '>>'
%set_variable_value("$" + $tags + "_LineLegend", %true())
  !endif
  !return $stereos
!endfunction

' if $sprite/$techn is an empty argument, try to calculate it via the defined $tag 
!unquoted function $toRelArg($arg, $tags, $varPostfix)
  !if ($arg > "")
    !return $arg
  !endif

  !if (%strlen($tags) == 0)
       !return $arg
  !endif
  !$brPos = %strpos($tags, "+")
  !while ($brPos >= 0)
    !$tag = %substr($tags, 0, $brPos)
    !$newArg = %get_variable_value("$" + $tag + $varPostfix)
    !if ($newArg > "")
       !return $newArg
    !endif
    !$tags = %substr($tags, $brPos+1)
    !$brPos = %strpos($tags, "+")
  !endwhile
  !if (%strlen($tags) > 0)
    !$newArg = %get_variable_value("$" + $tags + $varPostfix)
    !if ($newArg > "")
       !return $newArg
    !endif
  !endif
  !return $arg
!endfunction

' element specific (unused are hidden based on mask)
!unquoted function $toStereos($elementType, $tags)
  !if (%strlen($tags) == 0)
    !$stereos = '<<' + $elementType + '>>'
%set_variable_value("$" + $elementType + "Legend", %true())
    !return $stereos
  !endif
  !$stereos = ''
  !$mask = $resetMask()
  !$brPos = %strpos($tags, "+")
  !while ($brPos >= 0)
    !$tag = %substr($tags, 0, $brPos)
    !$stereos = $stereos + '<<' + $tag + '>>'
    !$mergedMask = $combineMaskWithTag($mask, $tag)
    !if ($mergedMask != $mask)
%set_variable_value("$" + $tag + "Legend", %true())
      !$mask = $mergedMask
    !endif
    !$tags = %substr($tags, $brPos+1)
    !$brPos = %strpos($tags, "+")
  !endwhile
  !if (%strlen($tags) > 0)
    !$stereos = $stereos + '<<' + $tags + '>>'
    !$mergedMask = $combineMaskWithTag($mask, $tags)
    !if ($mergedMask != $mask)
%set_variable_value("$" + $tags + "Legend", %true())
      !$mask = $mergedMask
    !endif
  !endif
  ' has to be last, otherwise PlantUML overwrites all tag specific skinparams
  !$stereos = $stereos + '<<' + $elementType + '>>'
  !$mergedMask = $combineMaskWithTag($mask, $elementType)
  !if ($mergedMask != $mask)
%set_variable_value("$" + $elementType + "Legend", %true())
    !$mask = $mergedMask
  !endif
  !return $stereos
!endfunction

' if $sprite/$techn is an empty argument, try to calculate it via the defined $tag 
!unquoted function $toElementArg($arg, $tags, $varPostfix, $elementType)
  !if ($arg > "")
    !return $arg
  !endif

  !if (%strlen($tags) == 0)
    !$newArg = %get_variable_value("$" + $elementType + $varPostfix)
    !if ($newArg > "")
       !return $newArg
    !else
       !return $arg
    !endif
  !endif
  !$brPos = %strpos($tags, "+")
  !while ($brPos >= 0)
    !$tag = %substr($tags, 0, $brPos)
    !$newArg = %get_variable_value("$" + $tag + $varPostfix)
    !if ($newArg > "")
       !return $newArg
    !endif
    !$tags = %substr($tags, $brPos+1)
    !$brPos = %strpos($tags, "+")
  !endwhile
  !if (%strlen($tags) > 0)
    !$newArg = %get_variable_value("$" + $tags + $varPostfix)
    !if ($newArg > "")
       !return $newArg
    !endif
    !$newArg = %get_variable_value("$" + $elementType + $varPostfix)
    !if ($newArg > "")
       !return $newArg
    !endif
  !endif
  !return $arg
!endfunction

' if $value is empty try to load it via variable, optional can it store the calculated value
!function $restoreEmpty($elementType, $property, $value, $store)
  !$var = "$" + $elementType + "Restore" + $property
  !if ($value == "")
    !$value = %get_variable_value($var)
  !elseif ($store)
    %set_variable_value($var, $value)
  !endif
  !return $value
!endfunction

' clear the restore property
!function $clearRestore($elementType, $property)
  !$var = "$" + $elementType + "Restore" + $property
  %set_variable_value($var, "")
  !return ""
!endfunction

!function $elementTagSkinparams($element, $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $borderStyle, $borderThickness)
  !$elementSkin = "skinparam " + $element + "<<" + $tagStereo + ">> {" + %newline()
  !if ($fontColor != "")
    !if (%strpos($tagStereo, "boundary") < 0)
      !$elementSkin = $elementSkin + "    StereotypeFontColor " + $fontColor + %newline()
    !endif
    !$elementSkin = $elementSkin + "    FontColor " + $fontColor + %newline()
  !endif
  !if ($bgColor != "")
    !$elementSkin = $elementSkin + "    BackgroundColor " + $bgColor + %newline()
  !endif
  !if ($borderColor != "")
    !$elementSkin = $elementSkin + "    BorderColor " + $borderColor+ %newline()
  !endif
  !if ($shadowing == "true")
    !$elementSkin = $elementSkin + "    Shadowing<<" + $tagStereo + ">> " + "true" + %newline()
  !endif
  !if ($shadowing == "false")
    !$elementSkin = $elementSkin + "    Shadowing<<" + $tagStereo + ">> " + "false" + %newline()
  !endif
  ' only rectangle supports shape(d corners), define both skinparam that overlays are working
  !if ($shape != "" && $element == "rectangle")
    !if ($shape == $ROUNDED_BOX)
      !$elementSkin = $elementSkin + "    RoundCorner " + $ROUNDED_BOX_SIZE+ %newline()
      !$elementSkin = $elementSkin + "    DiagonalCorner " + "0" + %newline()
    !elseif ($shape == $EIGHT_SIDED)
      !$elementSkin = $elementSkin + "    RoundCorner " + "0" + %newline()
      !$elementSkin = $elementSkin + "    DiagonalCorner " + $EIGHT_SIDED_SIZE+ %newline()
    !endif
  !endif
  !if ($borderStyle != "")
    !$elementSkin = $elementSkin + "    BorderStyle " + $borderStyle + %newline()
  !endif
  !if ($borderThickness != "")
    !$elementSkin = $elementSkin + "    BorderThickness " + $borderThickness + %newline()
  !endif
  !$elementSkin = $elementSkin + "}" + %newline()
  !return $elementSkin
!endfunction

!unquoted procedure $defineSkinparams($tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $borderStyle, $borderThickness)
  ' only rectangle supports shape(d corners)
  !$tagSkin = $elementTagSkinparams("rectangle", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $borderStyle, $borderThickness)
  !$tagSkin = $tagSkin + $elementTagSkinparams("database", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
  !$tagSkin = $tagSkin + $elementTagSkinparams("queue", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
  ' plantuml.jar bug - actor have to be after person
  !$tagSkin = $tagSkin + $elementTagSkinparams("person", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
  ' actor has style awesome, therefore $fontColor is ignored and text uses $bgColor too
  !$tagSkin = $tagSkin + $elementTagSkinparams("actor", $tagStereo, $bgColor, $bgColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
  ' sequence requires participant
  !$tagSkin = $tagSkin + $elementTagSkinparams("participant", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
  !$tagSkin = $tagSkin + $elementTagSkinparams("sequencebox", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
  !if (%strpos($tagStereo, "boundary") >= 0 && $bgColor != "")
    !$tagSkin = $tagSkin + "skinparam package<<" + $tagStereo + ">>StereotypeFontColor " + $bgColor + %newline()
    !$tagSkin = $tagSkin + "skinparam rectangle<<" + $tagStereo + ">>StereotypeFontColor " + $bgColor + %newline()
  !endif
  !if %variable_exists("ENABLE_ALL_PLANT_ELEMENTS")
    !$tagSkin = $tagSkin + $elementTagSkinparams("agent", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("artifact", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("card", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("cloud", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("collections", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("file", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("folder", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("frame", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("hexagon", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("package", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("stack", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("storage", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("usecase", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    ' elements without background: font uses $bgColor
    !$tagSkin = $tagSkin + $elementTagSkinparams("boundary", $tagStereo, $bgColor, $bgColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("circle", $tagStereo, $bgColor, $bgColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("control", $tagStereo, $bgColor, $bgColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("entity", $tagStereo, $bgColor, $bgColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    !$tagSkin = $tagSkin + $elementTagSkinparams("interface", $tagStereo, $bgColor, $bgColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
    ' label uses wrong font color? (should be $bgColor too)
    !$tagSkin = $tagSkin + $elementTagSkinparams("label", $tagStereo, $bgColor, $bgColor, $borderColor, $shadowing, "", $borderStyle, $borderThickness)
  !endif
$tagSkin
!endprocedure

' arrow colors cannot start with # (legend background has to start with #)
!function $colorWithoutHash($c)
  !if (%substr($c, 0, 1) == "#")
    !$c = %substr($c,1)
  !endif
  !return $c
!endfunction

!unquoted procedure $defineRelSkinparams($tagStereo, $textColor, $lineColor, $lineStyle, $lineThickness)
  !$elementSkin = "skinparam arrow<<" + $tagStereo + ">> {" + %newline()
  !if ($lineColor != "") || ($textColor != "") || ($lineStyle != "")
    !$elementSkin = $elementSkin + "    Color "
    !if ($lineColor != "")
      !$elementSkin = $elementSkin + $colorWithoutHash($lineColor)
    !endif
    !if ($textColor != "")
      !$elementSkin = $elementSkin + ";text:" + $colorWithoutHash($textColor)
    !endif
    !if ($lineStyle != "")
      !$elementSkin = $elementSkin + ";line." + $lineStyle
    !endif
    !$elementSkin = $elementSkin + %newline()
  !endif
  !if ($lineThickness != "")
    !$elementSkin = $elementSkin + "    thickness " + $lineThickness + %newline()
  !endif
  !$elementSkin = $elementSkin + "}" + %newline()
$elementSkin
!endprocedure

' %is_dark() requires PlantUML version >= 1.2021.6
!if (%function_exists("%is_dark"))
  !$PlantUMLSupportsDynamicLegendColor = %true()
!else
  !$PlantUMLSupportsDynamicLegendColor = %false()
  !log "dynamic undefined legend colors" requires PlantUML version >= 1.2021.6, therefore only static assigned colors are used
!endif

!unquoted function $contrastLegend($color)
  !if (%is_dark($color))
    !$value = $LEGEND_LIGHT_COLOR
  !else
    !$value = $LEGEND_DARK_COLOR
  !endif
  !return $value
!endfunction

!unquoted function $flatLegend($color)
  !if (%is_dark($color))
    !$value = $LEGEND_DARK_COLOR
  !else
    !$value = $LEGEND_LIGHT_COLOR
  !endif
  !return $value
!endfunction

' legend background has to start with #
!function $colorWithHash($c)
  !if (%substr($c, 0, 1) != "#")
    !$c = "#" + $c
  !endif
  !return $c
!endfunction

!function $addMaskFlag($mask, $attr)
  !if ($attr == "")
    !$mask = $mask + "0"
  !else
    !$mask = $mask + "1"
  !endif
  !return $mask
!endfunction

!function $orFlags($flag1, $flag2)
  !if ($flag1 == "0" && $flag2 == "0")
    !return "0"
  !endif
  !return "1"
!endfunction

!function $tagLegendMask($bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $borderStyle, $borderThickness)
  !$mask = ""
  !$mask = $addMaskFlag($mask, $bgColor)
  !$mask = $addMaskFlag($mask, $fontColor)
  !$mask = $addMaskFlag($mask, $borderColor)
  !$mask = $addMaskFlag($mask, $shadowing)
  !$mask = $addMaskFlag($mask, $shape)
  !$mask = $addMaskFlag($mask, $sprite)
  !$mask = $addMaskFlag($mask, $borderStyle)
  !$mask = $addMaskFlag($mask, $borderThickness)
  !return $mask
!endfunction

!function $resetMask()
  !return "00000000"
!endfunction

!function $combineMasks($mask1, $mask2)
  !$mask = ""
  !$mask = $mask + $orFlags(%substr($mask1, 0, 1), %substr($mask2, 0, 1))
  !$mask = $mask + $orFlags(%substr($mask1, 1, 1), %substr($mask2, 1, 1))
  !$mask = $mask + $orFlags(%substr($mask1, 2, 1), %substr($mask2, 2, 1))
  !$mask = $mask + $orFlags(%substr($mask1, 3, 1), %substr($mask2, 3, 1))
  !$mask = $mask + $orFlags(%substr($mask1, 4, 1), %substr($mask2, 4, 1))
  !$mask = $mask + $orFlags(%substr($mask1, 5, 1), %substr($mask2, 5, 1))
  !$mask = $mask + $orFlags(%substr($mask1, 6, 1), %substr($mask2, 6, 1))
  !$mask = $mask + $orFlags(%substr($mask1, 7, 1), %substr($mask2, 7, 1))
  !return $mask
!endfunction

!function $combineMaskWithTag($mask1, $tag)
  !$mask2 = %get_variable_value("$" + $tag+ "LegendMask")
  !if ($mask2 == "")
    ' !log combineMaskWithTag $mask1, $tag, ... only $mask1
    !return $mask1
  !endif

  ' !log combineMaskWithTag $mask1, $tag, $mask2 ... $combineMasks($mask1, $mask2)
  !return  $combineMasks($mask1, $mask2)
!endfunction

' element symbols typically 4 times too big in legend
!function $smallVersionSprite($sprite)
  ' ,scale= ... has to be first (...,color=black,scale=0.25... is invalid too)
  !if (%strpos($sprite, "=") < 0)
    !if (%substr($sprite, 0, 4) == "img:")
      !$smallSprite = $sprite + "{scale=" + $LEGEND_IMAGE_SIZE_FACTOR + "}"
    !else
      !$smallSprite = $sprite + ",scale=" + $LEGEND_IMAGE_SIZE_FACTOR
    !endif
  !else
    !$smallSprite = $sprite
  !endif
  !return $smallSprite
!endfunction

' format sprite that it can be used in diagram
!function $getSprite($sprite)
  ' if it starts with & it's a OpenIconic, details see https://useiconic.com/open/
  ' if it starts with img: it's an image, details see https://plantuml.com/creole
  !if (%substr($sprite, 0, 1) != "&" && %substr($sprite, 0, 4) != "img:")
    !$formatted = "<$" + $sprite + ">"
  !else
    !$formatted = "<" + $sprite + ">"
  !endif
  !return $formatted
!endfunction

!function $setTagLegendVariables($tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $legendText, $legendSprite, $borderStyle, $borderThickness)
  !$bg = $bgColor
  !$fo = $fontColor
  !$bo = $borderColor

  !if ($fo == "")
    !if ($bg != "")
!if ($PlantUMLSupportsDynamicLegendColor)
      !$fo = $contrastLegend($bg)
!else
      !$fo = $LEGEND_DARK_COLOR
!endif
    !else
      !if ($bo == "")
        !$fo = $LEGEND_DARK_COLOR
        !$bg = $LEGEND_LIGHT_COLOR
      !else
!if ($PlantUMLSupportsDynamicLegendColor)
        !$fo = $flatLegend($bo)
        !$bg = $contrastLegend($bo)
!else
        !$fo = $LEGEND_DARK_COLOR
        !$bg = $LEGEND_LIGHT_COLOR
!endif
      !endif
    !endif
  !else
    !if ($bg == "")
!if ($PlantUMLSupportsDynamicLegendColor)
      !$bg = $contrastLegend($fo)
!else
      !$bg = $LEGEND_LIGHT_COLOR
!endif
    !endif
  !endif

  !if ($bo == "")
    !$bo = $bg
  !endif

  !$tagEntry = "|"
  !$tagDetails = "("
  !$tagEntry = $tagEntry + "<" + $colorWithHash($bg) +">"
  ' <U+25AF> ..white rectangle
  !$tagEntry = $tagEntry + "<color:"+$bo+"> <U+25AF></color> "
  !$tagEntry = $tagEntry + "<color:"+$fo+">"
  !if ($legendSprite != "")
    !$tagEntry = $tagEntry + $getSprite($legendSprite) + " "
  !endif

  !$isBoundary = 0
  !if ($legendText == "")
    !if (%strpos($tagStereo, "boundary") >= 0)
      !if ($tagStereo == "boundary")
        !$isBoundary = 1
        !$tagEntry = $tagEntry + " " + $LEGEND_BOUNDARY + " "
      !else
        ' if contains/ends with _boundary remove _boundary and add "boundary (dashed)"
        !$pos = %strpos($tagStereo, "_boundary")
        !if ($pos > 0)
          !$isBoundary = 1
          !$tagEntry = $tagEntry + " " + %substr($tagStereo, 0 ,$pos) + " " +$LEGEND_BOUNDARY + " "
        !endif
      !endif
    !endif
    !if ($isBoundary == 0)
      !$tagEntry = $tagEntry + " " + $tagStereo + " "
    !endif

    !if ($isBoundary == 1 && ($bgColor == "#00000000" || %lower($bgColor) == "transparent"))
       !$tagDetails = $tagDetails + $LEGEND_BOUNDARY_TRANSPARENT_INCL_COMA
    !endif
    !if ($shadowing == "true")
      !$tagDetails = $tagDetails + $LEGEND_SHADOW_TEXT + ", "
    !endif
    !if ($shadowing == "false")
      !$tagDetails = $tagDetails + $LEGEND_NO_SHADOW_TEXT + ", "
    !endif
    !if ($shape == $ROUNDED_BOX)
      !$tagDetails = $tagDetails + $LEGEND_ROUNDED_BOX + ", "
    !endif
    !if ($shape == $EIGHT_SIDED)
      !$tagDetails = $tagDetails + $LEGEND_EIGHT_SIDED + ", "
    !endif
    !if ($fontColor == "" && $bgColor == "")
      !$tagDetails = $tagDetails + $LEGEND_NO_FONT_BG_TEXT + ", "
    !else 
      !if ($fontColor == "")
        !$tagDetails = $tagDetails + $LEGEND_NO_FONT_TEXT + ", "
      !endif
      !if ($bgColor == "")
        !$tagDetails = $tagDetails + $LEGEND_NO_BG_TEXT + ", "
      !endif
    !endif
    !if ($borderStyle != "")
      !if ($borderStyle == $DOTTED_LINE)
        !$tagDetails = $tagDetails + $LEGEND_DOTTED_LINE + ", "
      !elseif ($borderStyle == $DASHED_LINE)
        !if ($isBoundary == 1)
          !$tagDetails = $tagDetails + $LEGEND_BOUNDARY_DASHED_INCL_COMA
        !else
          !$tagDetails = $tagDetails + $LEGEND_DASHED_LINE + ", "
        !endif
      !elseif ($borderStyle == $BOLD_LINE)
        !$tagDetails = $tagDetails + $LEGEND_BOLD_LINE + ", "
      !elseif ($borderStyle == $SOLID_LINE)
        !$tagDetails = $tagDetails + $LEGEND_SOLID_LINE + ", "
      !else
        !$tagDetails = $tagDetails + $borderStyle + ", "
      !endif
    !endif
    !if ($borderThickness != "")
      !$tagDetails = $tagDetails + $LEGEND_THICKNESS + " " + $borderThickness + ", "
    !endif
    !if ($tagDetails=="(" || $tagDetails=="(, ")
      !$tagDetails = "</size>"
    !else
      !$tagDetails = %substr($tagDetails, 0, %strlen($tagDetails)-2)
      !$tagDetails = $tagDetails + ")</size>"
    !endif 
  !else
    !$brPos = %strpos($legendText, "\n")
    !if ($brPos > 0)
      !$tagEntry = $tagEntry + %substr($legendText, 0, $brPos) + " "
      !$details = %substr($legendText, $brPos + 2)
      !if ($details=="")
        !$tagDetails = "</size>"
      !else
        !$tagDetails = $tagDetails + $details + ")</size>"
      !endif
    !else
      !$tagEntry = $tagEntry + " " + $legendText + " "
      !$tagDetails = "</size>"
    !endif
  !endif

  !$tagDetails = $tagDetails + "</color> "
  !$tagDetails = $tagDetails + "|"
%set_variable_value("$" + $tagStereo + "LegendEntry", $tagEntry)
%set_variable_value("$" + $tagStereo + "LegendDetails", $tagDetails)
  !return $tagEntry
!endfunction

!function $setTagRelLegendVariables($tagStereo, $textColor, $lineColor, $lineStyle, $legendText, $legendSprite, $lineThickness)
  !$tc = $textColor
  !$lc = $lineColor

  !if ($tc == "")
    !if ($PlantUMLSupportsDynamicLegendColor)
      !$tc = $flatLegend($ARROW_FONT_COLOR)
    !else
      !$tc = $LEGEND_DARK_COLOR
    !endif
  !endif
  !if ($lc == "")
    !if ($PlantUMLSupportsDynamicLegendColor)
      !$lc = $flatLegend($ARROW_COLOR)
    !else
      !$lc = $LEGEND_DARK_COLOR
    !endif
  !endif

  !$tagEntry = "|"
  !$tagDetails = "("
  ' <U+2500> ..white line
  !$tagEntry = $tagEntry + "<color:"+$lc+"> <U+2500></color> "
  !$tagEntry = $tagEntry + "<color:"+$tc+">"
  !if ($legendSprite != "")
    !$tagEntry = $tagEntry + $getSprite($legendSprite) + " "
  !endif
  !if ($legendText == "")
    !$tagEntry = $tagEntry + " " + $tagStereo + " "
    !if ($textColor == "")
      !$tagDetails = $tagDetails + $LEGEND_NO_FONT_TEXT + ", "
    !endif
    !if ($lineColor == "")
      !$tagDetails = $tagDetails + $LEGEND_NO_LINE_TEXT + ", "
    !endif
    !if ($lineStyle != "")
      !if ($lineStyle == $DOTTED_LINE)
        !$tagDetails = $tagDetails + $LEGEND_DOTTED_LINE + ", "
      !elseif ($lineStyle == $DASHED_LINE)
        !$tagDetails = $tagDetails + $LEGEND_DASHED_LINE + ", "
      !elseif ($lineStyle == $BOLD_LINE)
        !$tagDetails = $tagDetails + $LEGEND_BOLD_LINE + ", "
      !else
        !$tagDetails = $tagDetails + $lineStyle + ", "
      !endif
    !endif
    !if ($lineThickness != "")
      !$tagDetails = $tagDetails + $LEGEND_THICKNESS + " " + $lineThickness + ", "
    !endif
    !if ($tagDetails=="(")
      !$tagDetails = "</size>"
    !else
      !$tagDetails = %substr($tagDetails, 0, %strlen($tagDetails)-2)
      !$tagDetails = $tagDetails + ")</size>"
    !endif 
  !else
    !$brPos = %strpos($legendText, "\n")
    !if ($brPos > 0)
      !$tagEntry = $tagEntry + " " + %substr($legendText, 0, $brPos) + " "
      !$details = %substr($legendText, $brPos + 2)
      !if ($details=="")
        !$tagDetails = "</size>"
      !else
        !$tagDetails = $tagDetails + $details + ")</size>"
      !endif
    !else
      !$tagEntry = $tagEntry + " " + $legendText + " "
      !$tagDetails = "</size>"
    !endif
  !endif

  !$tagDetails = $tagDetails + "</color> "
  !$tagDetails = $tagDetails + "|"
%set_variable_value("$" + $tagStereo + "_LineLegendEntry", $tagEntry)
%set_variable_value("$" + $tagStereo + "_LineLegendDetails", $tagDetails)
  !return $tagEntry
!endfunction

!unquoted procedure $addTagToLegend($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $legendText="", $legendSprite="", $borderStyle="", $borderThickness="")
'' if a combined element tag is defined (e.g. "v1.0&v1.1") then it is typically a merged color,
'' like a new $fontColor="#fdae61" therefore it should be added to the legend
'' and the & combined tags will be not removed
'  !if (%strpos($tagStereo, "&") < 0)
  !$dummyAlreadyVariables = $setTagLegendVariables($tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $legendText, $legendSprite, $borderStyle, $borderThickness)
  !$tagCustomLegend = $tagCustomLegend + $tagStereo + "\n"
  !$tagMask = $tagLegendMask( $bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $borderStyle, $borderThickness)
%set_variable_value("$" + $tagStereo + "LegendMask", $tagMask)
'  !endif
!endprocedure

!unquoted procedure $addRelTagToLegend($tagStereo, $textColor="", $lineColor="", $lineStyle="", $legendText="", $legendSprite="", $lineThickness="")
'' Arrows have a bug with stereotype/skinparams and cannot combine text colors of one stereotype
'' and the line color of another stereotype. Therefore the text color of one tag and the line color
'' of another tag have to be combined via a "workaround" tag ("v1.0&v1.1").
'' This workaround tag could be theoretically removed in the legend but after that there would
'' be an inconsistency between the element tags and the rel tags and therefore
'' & combined workaround tags are not removed too (and in unlikely cases the color itself could be changed)
'  !if (%strpos($tagStereo, "&") < 0)
     !$dummyAlreadyVariables = $setTagRelLegendVariables($tagStereo, $textColor, $lineColor, $lineStyle, $legendText, $legendSprite, $lineThickness)
     !$tagCustomLegend = $tagCustomLegend + $tagStereo + "_Line\n"
'  !endif
!endprocedure

!procedure $showActiveLegendEntries($allDefined)
  !$brPos = %strpos($allDefined, "\n")
  !while ($brPos >= 0)
    !$tagStereo = %substr($allDefined, 0, $brPos)
    !$allDefined = %substr($allDefined, $brPos+2)
    !$brPos = %strpos($allDefined, "\n")
    !if (%variable_exists("$" + $tagStereo + "Legend"))
      ' </size> is part of legendDetails
      !$part1 = %get_variable_value("$" + $tagStereo + "LegendEntry")
      !$partSize = "<size:" + $LEGEND_DETAILS_SIZE + ">"
      !$part2 = %get_variable_value("$" + $tagStereo + "LegendDetails")
      !$line = $part1 + $partSize + $part2
$line
    !endif
  !endwhile
  !if (%strlen($allDefined) > 0)
    !$tagStereo = $allDefined
    !if (%variable_exists("$" + $tagStereo + "Legend"))
      ' </size> is part of legendDetails
      !$part1 = %get_variable_value("$" + $tagStereo + "LegendEntry")
      !$partSize = "<size:" + $LEGEND_DETAILS_SIZE + ">"
      !$part2 = %get_variable_value("$" + $tagStereo + "LegendDetails")
      !$line = $part1 + $partSize + $part2
$line
    !endif
  !endif
!endprocedure

!function RoundedBoxShape()
!return $ROUNDED_BOX
!endfunction

!function EightSidedShape()
!return $EIGHT_SIDED
!endfunction

!function DottedLine()
!return $DOTTED_LINE
!endfunction

!function DashedLine()
!return $DASHED_LINE
!endfunction

!function BoldLine()
!return $BOLD_LINE
!endfunction

!function SolidLine()
!return $SOLID_LINE
!endfunction

' used by new defined tags
!unquoted procedure AddElementTag($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $techn="", $legendText="", $legendSprite="", $borderStyle="", $borderThickness="")
$defineSkinparams($tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $borderStyle, $borderThickness)
  !if ($sprite!="")
%set_variable_value("$" + $tagStereo + "ElementTagSprite", $sprite)
    !if ($legendSprite == "")
      !$legendSprite = $smallVersionSprite($sprite)
    !endif
  !endif
  !if ($techn != "")
%set_variable_value("$" + $tagStereo + "ElementTagTechn", $techn)
  !endif
$addTagToLegend($tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $legendText, $legendSprite, $borderStyle, $borderThickness)
!endprocedure

!unquoted procedure $addElementTagInclReuse($elementName, $tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $techn="", $legendText="", $legendSprite="", $borderStyle="", $borderThickness="")
  !$bgColor=$restoreEmpty($elementName, "bgColor", $bgColor, %false())
  !$fontColor=$restoreEmpty($elementName, "fontColor", $fontColor, %false())
  !$borderColor=$restoreEmpty($elementName, "borderColor", $borderColor, %false())
  !$shadowing=$restoreEmpty($elementName, "shadowing", $shadowing, %false())
  !$shape=$restoreEmpty($elementName, "shape", $shape, %false())
  !$sprite=$restoreEmpty($elementName, "sprite", $sprite, %false())
  !$techn=$restoreEmpty($elementName, "techn", $techn, %false())
  ' new style should has its own legend text
  ' !$legendText=$restoreEmpty($elementName, "legendText", $legendText, %false())
  !$legendSprite=$restoreEmpty($elementName, "legendSprite", $legendSprite, %false())
  !$borderStyle=$restoreEmpty($elementName, "borderStyle", $borderStyle, %false())
  !$borderThickness=$restoreEmpty($elementName, "borderThickness", $borderThickness, %false())

  AddElementTag($tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $techn, $legendText, $legendSprite, $borderStyle, $borderThickness)
!endprocedure

' used by new defined rel tags
!unquoted procedure AddRelTag($tagStereo, $textColor="", $lineColor="", $lineStyle="", $sprite="", $techn="", $legendText="", $legendSprite="", $lineThickness="")
$defineRelSkinparams($tagStereo, $textColor, $lineColor, $lineStyle, $lineThickness)
  !if ($sprite != "")
%set_variable_value("$" + $tagStereo + "RelTagSprite", $sprite)
    !if ($legendSprite == "")
      ' relation symbols typically 1:1 no additional scale required
      !$legendSprite = $sprite
    !endif
  !endif
  !if ($techn != "")
%set_variable_value("$" + $tagStereo + "RelTagTechn", $techn)
  !endif
$addRelTagToLegend($tagStereo, $textColor, $lineColor, $lineStyle, $legendText, $legendSprite, $lineThickness)
!endprocedure

' update the style of existing elements like person, ...
!unquoted procedure UpdateElementStyle($elementName, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $techn="", $legendText="", $legendSprite="", $borderStyle="", $borderThickness="")
!$bgColor=$restoreEmpty($elementName, "bgColor", $bgColor, %true())
!$fontColor=$restoreEmpty($elementName, "fontColor", $fontColor, %true())
!$borderColor=$restoreEmpty($elementName, "borderColor", $borderColor, %true())
!$shadowing=$restoreEmpty($elementName, "shadowing", $shadowing, %true())
!$shape=$restoreEmpty($elementName, "shape", $shape, %true())
!$sprite=$restoreEmpty($elementName, "sprite", $sprite, %true())
!$techn=$restoreEmpty($elementName, "techn", $techn, %true())
!$legendText=$restoreEmpty($elementName, "legendText", $legendText, %true())
!$legendSprite=$restoreEmpty($elementName, "legendSprite", $legendSprite, %true())
!$borderStyle=$restoreEmpty($elementName, "borderStyle", $borderStyle, %true())
!$borderThickness=$restoreEmpty($elementName, "borderThickness", $borderThickness, %true())

$defineSkinparams($elementName, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $borderStyle, $borderThickness)
  !if ($sprite != "")
%set_variable_value("$" + $elementName + "ElementTagSprite", $sprite)
    !if ($legendSprite == "")
      !$legendSprite = $smallVersionSprite($sprite)
    !endif
  !endif
  !if ($techn != "")
%set_variable_value("$" + $elementName + "ElementTagTechn", $techn)
  !endif
  !$dummyAlreadyVariables = $setTagLegendVariables($elementName, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $legendText, $legendSprite, $borderStyle, $borderThickness)
  ' default tags sets at least bgColor and fontColor
  !$tagMask = $tagLegendMask("CHANGED", "CHANGED", $borderColor, $shadowing, $shape, $sprite, $borderStyle, $borderThickness)
%set_variable_value("$" + $elementName + "LegendMask", $tagMask)
!endprocedure

/' @deprecated in favor of UpdateElementStyle '/
!unquoted procedure UpdateSkinparamsAndLegendEntry($elementName, $bgColor="", $fontColor="", $borderColor="", $shadowing="")
UpdateElementStyle($elementName, $bgColor, $fontColor, $borderColor, $shadowing)
!endprocedure

' update the style of default relation, it has to set both properties (combined statement not working)
!unquoted procedure UpdateRelStyle($textColor, $lineColor)
  !$elementSkin = "skinparam arrow {" + %newline()
  !$elementSkin = $elementSkin + "    Color " + $lineColor + %newline()
  !$elementSkin = $elementSkin + "    FontColor " + $textColor + %newline()
  !$elementSkin = $elementSkin + "}" + %newline()
$elementSkin
!endprocedure

' tags/stereotypes have to be delimited with \n
!unquoted procedure SetDefaultLegendEntries($tagStereoEntries)
  !$tagDefaultLegend = $tagStereoEntries
!endprocedure

' Links
' ##################################

!function $getLink($link)
  !if ($link != "")
    !return "[[" + $link + "]]"
  !else
    !return ""
  !endif
!endfunction

' Line breaks
' ##################################

!unquoted function $breakText($text, $usedNewLine, $widthStr="-1")
!$width = %intval($widthStr)
!$multiLine = ""
!if (%strpos($text, "\n") >= 0)
  !while (%strpos($text, "\n") >= 0)
    !$brPos = %strpos($text, "\n")
    !if ($brPos > 0)
      !$multiLine = $multiLine + %substr($text, 0, $brPos) + $usedNewLine
    !else
      ' <U+00A0> non breaking change that newLine breaks with formats can be used with \n\n 
      !$multiLine = $multiLine + "<U+00A0>" + $usedNewLine
    !endif
    !$text = %substr($text, $brPos+2)
    !if (%strlen($text) == 0)
      !$text = "<U+00A0>"
    !endif
  !endwhile
!else
  !while ($width>0 && %strlen($text) > $width)
    !$brPos = $width
    !while ($brPos > 0 && %substr($text, $brPos, 1) != ' ')
      !$brPos = $brPos - 1
    !endwhile

    !if ($brPos < 1)
      !$brPos = %strpos($text, " ")
    !else
    !endif

    !if ($brPos > 0)
      !$multiLine = $multiLine + %substr($text, 0, $brPos) + $usedNewLine
      !$text = %substr($text, $brPos + 1)
    !else
      !$multiLine = $multiLine+ $text
      !$text = ""
    !endif
  !endwhile
!endif
!if (%strlen($text) > 0)
  !$multiLine = $multiLine + $text
!endif
!return $multiLine
!endfunction

!unquoted function $breakLabel($text)
!$usedNewLine = "\n== "
!$multiLine = $breakText($text, $usedNewLine)
!return $multiLine
!endfunction

!unquoted function $breakDescr($text, $widthStr)
  !$usedNewLine = "\n"
  !return $breakText($text, $usedNewLine, $widthStr)
!endfunction

' $breakTechn() supports //...//; $breakNode() in C4_Deployment supports no //....//
!unquoted function $breakTechn($text, $widthStr)
  !$usedNewLine = '</size>//\n//<size:'+$TECHN_FONT_SIZE+'>'
  !return $breakText($text, $usedNewLine, $widthStr)
!endfunction

' Element base layout
' ##################################

!function $getElementBase($label, $techn, $descr, $sprite)
  !$element = ""
  !if ($sprite != "")
    !$element = $element + $getSprite($sprite)
    !if ($label != "")
      !$element = $element + '\n'
    !endif
  !endif
  !if ($label != "")
    !$element = $element + '== ' + $breakLabel($label)
  !else
    !$element = $element + '<size:0>.</size>'
  !endif
  !if ($techn != "")
    !$element = $element + '\n//<size:' + $TECHN_FONT_SIZE + '>[' + $breakTechn($techn, '-1') + ']</size>//'
  !endif
  !if ($descr != "")
    !$element = $element + '\n\n' + $descr
  !endif
  !return $element
!endfunction

!function $getElementLine($umlShape, $elementType, $alias, $label, $techn, $descr, $sprite, $tags, $link)
  !$sprite=$toElementArg($sprite, $tags, "ElementTagSprite", $elementType)
  !$techn=$toElementArg($techn, $tags, "ElementTagTechn", $elementType)
  !$baseProp = $getElementBase($label, $techn, $descr, $sprite) + $getProps()
  !$stereo = $toStereos($elementType,$tags)
  !$calcLink = $getLink($link)
  
  !$line = $umlShape + " " + %chr(34) + $baseProp + %chr(34) +" " + $stereo + " as " + $alias + $calcLink
  !return $line
!endfunction

' Element properties
' ##################################

' collect all defined properties as table rows
!global $propTable = ""
!global $propTableCaption = ""
!global $propColCaption = "="

!unquoted function SetPropertyHeader($col1Name, $col2Name, $col3Name = "", $col4Name = "")
  !$propColCaption = ""
  !$propTableCaption = "|= " + $col1Name + " |= " + $col2Name + " |"
  !if ($col3Name != "")
    !$propTableCaption = $propTableCaption + "= " + $col3Name + " |"
  !endif
  !if ($col4Name != "")
    !$propTableCaption = $propTableCaption + "= " + $col4Name + " |"
  !endif
  !return ""
!endfunction

!unquoted function WithoutPropertyHeader()
  !$propTableCaption = ""
  !$propColCaption = "="
  !return ""
!endfunction

!unquoted function AddProperty($col1, $col2, $col3 = "", $col4 = "")
  !if ($propTable == "")
    !if ($propTableCaption != "")
      !$propTable = $propTableCaption + "\n"
    !endif
  !else
    !$propTable = $propTable + "\n"
  !endif
  !$propTable = $propTable + "| " + $col1 + " |" + $propColCaption + " " + $col2 + " |"
  !if ($col3 != "")
    !$propTable = $propTable + " " + $col3 + " |"
  !endif
  !if ($col4 != "")
    !$propTable = $propTable + " " + $col4 + " |"
  !endif
  !return ""
!endfunction

!unquoted function $getProps($alignedNL = "\n")
  !if ($propTable != "")
    !$retTable = $alignedNL + $propTable
    !$propTable = ""
    !return $retTable
  !endif
  !return ""
!endfunction

!unquoted function $getProps_L()
  !return $getProps("\l")
!endfunction

!unquoted function $getProps_R()
  !return $getProps("\r")
!endfunction

SetPropertyHeader("Property","Value")

' Layout
' ##################################

!function $getLegendDetailsSize($detailsFormat)
  !if $detailsFormat == $LEGEND_DETAILS_NONE
    !$size = 0
  !elseif $detailsFormat == $LEGEND_DETAILS_SMALL 
    !$size = $LEGEND_DETAILS_SMALL_SIZE
  !else
    !$size = $LEGEND_DETAILS_NORMAL_SIZE
  !endif
  !return $size
!endfunction

!procedure $getHideStereotype($hideStereotype)
!if ($hideStereotype == "true")
hide stereotype
!endif
!endprocedure

!procedure $getLegendTable($detailsFormat)
!global $LEGEND_DETAILS_SIZE = $getLegendDetailsSize($detailsFormat)
<$colorWithHash(transparent),$colorWithHash(transparent)>|<color:$LEGEND_TITLE_COLOR>**Legend**</color> |
$showActiveLegendEntries($tagDefaultLegend)
$showActiveLegendEntries($tagCustomLegend)
!endprocedure

!procedure $getLegendArea($areaAlias, $hideStereotype, $details)
$getHideStereotype($hideStereotype)
rectangle $areaAlias<<legendArea>> [
$getLegendTable($details)
]
!endprocedure

!procedure HIDE_STEREOTYPE()
hide stereotype
!endprocedure

!unquoted procedure SET_SKETCH_STYLE($bgColor="_dont_change_", $fontColor="_dont_change_", $warningColor="_dont_change_", $fontName="_dont_change_", $footerWarning="_dont_change_", $footerText="_dont_change_")
!if $bgColor != "_dont_change_"
  !global $SKETCH_BG_COLOR = $bgColor
!endif
!if $fontColor != "_dont_change_"
  !global $SKETCH_FONT_COLOR = $fontColor
!endif
!if $warningColor != "_dont_change_"
  !global $SKETCH_WARNING_COLOR = $warningColor
!endif
!if $fontName != "_dont_change_"
  !global $SKETCH_FONT_NAME = $fontName
!endif
!if $footerWarning != "_dont_change_"
  !global $SKETCH_FOOTER_WARNING = $footerWarning
!endif
!if $footerText != "_dont_change_"
  !global $SKETCH_FOOTER_TEXT = $footerText
!endif
!endprocedure

!procedure LAYOUT_AS_SKETCH()
  skinparam handwritten true
!if $SKETCH_BG_COLOR > ""
  skinparam backgroundColor $SKETCH_BG_COLOR
!endif
!if $SKETCH_FONT_COLOR > ""
  skinparam footer {
    FontColor $SKETCH_FONT_COLOR
  }
  !if $ARROW_COLOR == "#666666"
    !global $ARROW_COLOR = $SKETCH_FONT_COLOR
    !global $ARROW_FONT_COLOR = $SKETCH_FONT_COLOR
    skinparam arrow {
      Color $ARROW_COLOR
      FontColor $ARROW_FONT_COLOR
    }
  !endif
  !if $BOUNDARY_COLOR == "#444444"
    !global $BOUNDARY_COLOR = $SKETCH_FONT_COLOR
    skinparam rectangle<<boundary>> {
      FontColor $BOUNDARY_COLOR
      BorderColor $BOUNDARY_COLOR
    }
  !endif
!endif
!if $SKETCH_FONT_NAMES > ""
  skinparam defaultFontName $SKETCH_FONT_NAME
!endif
!if $SKETCH_FOOTER_WARNING > "" || $SKETCH_FOOTER_TEXT > ""
  !$line = "footer <font color=" + $SKETCH_WARNING_COLOR + ">"+ $SKETCH_FOOTER_WARNING + "</font> " + $SKETCH_FOOTER_TEXT
  $line
!endif
!endprocedure

!global $fix_direction=%false()

!function $down($start,$end)
!if ($fix_direction)
!return $start+"RIGHT"+$end
!else
!return $start+"DOWN"+$end
!endif
!endfunction

!function $up($start,$end)
!if ($fix_direction)
!return $start+"LEFT"+$end
!else
!return $start+"UP"+$end
!endif
!endfunction

!function $left($start,$end)
!if ($fix_direction)
!return $start+"UP"+$end
!else
!return $start+"LEFT"+$end
!endif
!endfunction

!function $right($start,$end)
!if ($fix_direction)
!return $start+"DOWN"+$end
!else
!return $start+"RIGHT"+$end
!endif
!endfunction

!procedure LAYOUT_TOP_DOWN()
!global $fix_direction=%false()
top to bottom direction
!endprocedure

!procedure LAYOUT_LEFT_RIGHT() 
!global $fix_direction = %false()
left to right direction
!endprocedure

!procedure LAYOUT_LANDSCAPE() 
!global $fix_direction = %true()
left to right direction
!endprocedure

' legend details can displayed as Normal(), Small(), None()
!function None()
!return $LEGEND_DETAILS_NONE
!endfunction

!function Normal()
!return $LEGEND_DETAILS_NORMAL
!endfunction

!function Small()
!return $LEGEND_DETAILS_SMALL 
!endfunction

' has to be last call in diagram
!unquoted procedure SHOW_LEGEND($hideStereotype="true", $details=Small())
$getHideStereotype($hideStereotype)
legend right
$getLegendTable($details)
endlegend
!endprocedure

/' @deprecated in favor of SHOW_LEGEND '/
!unquoted procedure SHOW_DYNAMIC_LEGEND($hideStereotype="true")
SHOW_LEGEND($hideStereotype)
!endprocedure

' legend is reserved and cannot be uses as alias of SHOW_FLOATING_LEGEND() therefore
' LEGEND() is introduced. It returns the default name of the floating alias "floating_legend_alias"
' and can be used in the Lay_Distance() calls
!function LEGEND()
!return "floating_legend_alias"
!endfunction

' enables that legend can be located in drawing area of the diagram. It has to be last call in diagram followed by Lay_Distance()
!unquoted procedure SHOW_FLOATING_LEGEND($alias=LEGEND(), $hideStereotype="true", $details=Small())
$getLegendArea($alias, $hideStereotype, $details)
!endprocedure

' Boundaries
' ##################################

!unquoted procedure UpdateBoundaryStyle($elementName="", $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $type="", $legendText="", $borderStyle="", $borderThickness="")
  !if ($elementName != "")
    !$elementBoundary = $elementName + '_boundary'
    UpdateElementStyle($elementBoundary, $bgColor, $fontColor, $borderColor, $shadowing, $shape, "", $type, $legendText, "", $borderStyle, $borderThickness)
  !else
    UpdateElementStyle("boundary", $bgColor, $fontColor, $borderColor, $shadowing, $shape, "", $type, $legendText, "", $borderStyle, $borderThickness)
    ' simulate color inheritance
    UpdateBoundaryStyle("enterprise", $bgColor, $fontColor, $borderColor, $shadowing, $shape, "Enterprise", "", $borderStyle, $borderThickness)
    UpdateBoundaryStyle("system", $bgColor, $fontColor, $borderColor, $shadowing, $shape, "System", "", $borderStyle, $borderThickness)
    UpdateBoundaryStyle("container", $bgColor, $fontColor, $borderColor, $shadowing, $shape, "Container", "", $borderStyle, $borderThickness)
  !endif
!endprocedure

!unquoted procedure AddBoundaryTag($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $type="", $legendText="", $borderStyle="", $borderThickness="")
    !$tagBoundary = $tagStereo + '_boundary'
    AddElementTag($tagBoundary, $bgColor, $fontColor, $borderColor, $shadowing, $shape, "", $type, $legendText, "", $borderStyle, $borderThickness)
!endprocedure

' add _boundary to all tags that short tag version can be used
!unquoted function $addBoundaryPostfix($tags)
  !if (%strlen($tags) == 0)
    !return ''
  !endif
  !$boundaryTags = ''
  !$brPos = %strpos($tags, "+")
  !while ($brPos >= 0)
    !$tag = %substr($tags, 0, $brPos)
    !$boundaryTags = $boundaryTags + $tag + '_boundary+'
    !$tags = %substr($tags, $brPos+1)
    !$brPos = %strpos($tags, "+")
  !endwhile
  !if (%strlen($tags) > 0)
    !$boundaryTags = $boundaryTags + $tags + '_boundary'
  !endif
  !return $boundaryTags
!endfunction

!function $getBoundary($label, $type)
  !if ($type == "")
    !return '== ' + $breakLabel($label)
  !endif
  !if (type != "")
    !return '== ' + $breakLabel($label) + '\n<size:' + $TECHN_FONT_SIZE + '>[' + $type + ']</size>'
  !endif
!endfunction

!unquoted procedure Boundary($alias, $label, $type="", $tags="", $link="")
!$boundaryTags = $addBoundaryPostfix($tags)
' nodes $type reuses $techn definition of $boundaryTags
!$type=$toElementArg($type, $boundaryTags, "ElementTagTechn", "boundary")
rectangle "$getBoundary($label, $type)" $toStereos("boundary", $boundaryTags) as $alias $getLink($link)
!endprocedure

' Boundary Styling
UpdateBoundaryStyle("", $bgColor=$BOUNDARY_BG_COLOR, $fontColor=$BOUNDARY_COLOR, $borderColor=$BOUNDARY_COLOR, $borderStyle=DashedLine())

' Index
' ##################################

' Dynamic/Sequence diagram supports (automatically) numbered interactions:
'     preferred function calls
'     (Uppercase) LastIndex(): return the last used index (function which can be used as argument)
'     (Uppercase) Index($offset=1): returns current index and calculates next index (function which can be used as argument)
'     (Uppercase) SetIndex($new_index): returns new set index and calculates next index (function which can be used as argument)

'     old procedures calls
'     (lowercase) increment($offset=1): increase current index (procedure which has no direct output)
'     (lowercase) setIndex($new_index): set the new index (procedure which has no direct output)

!$lastIndex = 0
!$index = 1

!procedure increment($offset=1)
  !$lastIndex = $index
  !$index = $index + $offset
!endprocedure

!procedure setIndex($new_index)
  !$lastIndex = $index
  !$index = $new_index
!endprocedure

!function Index($offset=1)
  !$lastIndex = $index
  !$index = $lastIndex + $offset
  !return $lastIndex
!endfunction

!function LastIndex()
  !return $lastIndex
!endfunction

!function SetIndex($new_index, $offset=1)
  !$lastIndex = $new_index
  !$index = $new_index + $offset
  !return $lastIndex
!endfunction

!unquoted function $getPrefix($index)
  !if ($index == "")
    !$pre = Index() + ": "
  !else
    !$pre = $index + ": "
  !endif
  !return $pre
!endfunction

' Relationship
' ##################################

!function $getRel($direction, $alias1, $alias2, $label, $techn, $descr, $sprite, $tags, $link)
  !$sprite = $toRelArg($sprite, $tags, "RelTagSprite")
  !$techn = $toRelArg($techn, $tags, "RelTagTechn")
  !$rel = $alias1 + ' ' + $direction + ' ' + $alias2
  !if ($tags != "")
    !$rel = $rel + ' ' + $toStereos($tags)
  !endif
  !$rel = $rel + ' : '
  !if ($link != "")
    !$rel = $rel + '**[[' + $link + ' '
  !endif
  !if ($sprite != "")
    !$rel = $rel + $getSprite($sprite)
    !if ($label != "")
      !$rel = $rel + ' '
    !endif
  !endif
  !if ($link != "")
    !$usedNewLine = ']]**\n**[[' + $link + ' '
    ' if sprite and label is empty than the link url is shown (otherwise link cannot be activated at all)
    !$rel = $rel + $breakText($label, $usedNewLine) + ']]**'
  !else
    !if ($label != "")
      !$usedNewLine = '**\n**'
      !$rel = $rel + '**' + $breakText($label, $usedNewLine) + '**'
    !else
      !$rel = $rel + '<size:0>.</size>'
    !endif
  !endif
  !if ($techn != "")
    ' line break is not deterministic, calculate it
    !$rel = $rel + '\n//<size:' + $TECHN_FONT_SIZE + '>[' + $breakTechn($techn, $REL_TECHN_MAX_CHAR_WIDTH) + ']</size>//'
  !endif
  !if ($descr != "")
    ' line break is not deterministic, calculate it
    !$rel = $rel + '\n\n' + $breakDescr($descr, $REL_DESCR_MAX_CHAR_WIDTH)
  !endif
  !$prop = $getProps()
  !if ($prop != "")
    ' reuse table
    !$rel = $rel + $prop
  !endif
  !return $rel
!endfunction

!unquoted procedure Rel_($alias1, $alias2, $label, $direction)
$getRel($direction, $alias1, $alias2, $label, "", "", "", "", "")
!endprocedure
!unquoted procedure Rel_($alias1, $alias2, $label, $techn, $direction)
$getRel($direction, $alias1, $alias2, $label, $techn, "", "", "", "")
!endprocedure

!unquoted procedure Rel($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel("-->>", $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure BiRel($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel("<<-->>", $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_Back($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel("<<--", $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_Neighbor($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel("->>", $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure BiRel_Neighbor($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel("<<->>", $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_Back_Neighbor($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel("<<-", $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_D($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($down("-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Down($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($down("-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure BiRel_D($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($down("<<-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure BiRel_Down($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($down("<<-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_U($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($up("-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Up($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($up("-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure BiRel_U($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($up("<<-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure BiRel_Up($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($up("<<-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_L($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($left("-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Left($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($left("-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure BiRel_L($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($left("<<-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure BiRel_Left($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($left("<<-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_R($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($right("-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Right($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($right("-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure BiRel_R($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($right("<<-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure BiRel_Right($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($right("<<-","->>"), $from, $to, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

' Layout Helpers
' ##################################

!function $getHiddenLine($distance)
  !return '-[hidden]' + %substr('------------', 0, %intval($distance) + 1)
!endfunction

!unquoted procedure Lay_D($from, $to)
$from -[hidden]D- $to
!endprocedure
!unquoted procedure Lay_Down($from, $to)
$from -[hidden]D- $to
!endprocedure

!unquoted procedure Lay_U($from, $to)
$from -[hidden]U- $to
!endprocedure
!unquoted procedure Lay_Up($from, $to)
$from -[hidden]U- $to
!endprocedure

!unquoted procedure Lay_R($from, $to)
$from -[hidden]R- $to
!endprocedure
!unquoted procedure Lay_Right($from, $to)
$from -[hidden]R- $to
!endprocedure

!unquoted procedure Lay_L($from, $to)
$from -[hidden]L- $to
!endprocedure
!unquoted procedure Lay_Left($from, $to)
$from -[hidden]L- $to
!endprocedure

' PlantUML bug: lines which does "not match" with the orientation/direction of the diagram
' use the same length therefore the method offers no direction at all.
' If a direction is required the Lay_...() methods can be used
!unquoted procedure Lay_Distance($from, $to, $distance="0")
$from $getHiddenLine($distance) $to
!endprocedure
' convert it with additional command line argument -DRELATIVE_INCLUDE="relative/absolute" to use locally
!if %variable_exists("RELATIVE_INCLUDE")
  !include ./C4_Container.puml
!else
  !include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
!endif

' Scope: A single container.
' Primary elements: Components within the container in scope.
' Supporting elements: Containers (within the software system in scope) plus people and software systems directly connected to the components.
' Intended audience: Software architects and developers.

' Colors
' ##################################

!$COMPONENT_FONT_COLOR ?= "#000000"
!$COMPONENT_BG_COLOR ?= "#85BBF0"
!$COMPONENT_BORDER_COLOR ?= "#78A8D8"

!$EXTERNAL_COMPONENT_FONT_COLOR ?= $COMPONENT_FONT_COLOR
!$EXTERNAL_COMPONENT_BG_COLOR ?= "#CCCCCC"
!$EXTERNAL_COMPONENT_BORDER_COLOR ?= "#BFBFBF"

' Styling
' ##################################

UpdateElementStyle("component", $COMPONENT_BG_COLOR, $COMPONENT_FONT_COLOR, $COMPONENT_BORDER_COLOR)
UpdateElementStyle("external_component", $EXTERNAL_COMPONENT_BG_COLOR, $EXTERNAL_COMPONENT_FONT_COLOR, $EXTERNAL_COMPONENT_BORDER_COLOR)

' shortcuts with default colors
!unquoted procedure AddComponentTag($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $techn="", $legendText="", $legendSprite="", $borderStyle="", $borderThickness="")
  $addElementTagInclReuse("component", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $techn, $legendText, $legendSprite, $borderStyle, $borderThickness)
!endprocedure
!unquoted procedure AddExternalComponentTag($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $techn="", $legendText="", $legendSprite="", $borderStyle="", $borderThickness="")
  $addElementTagInclReuse("external_component", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $techn, $legendText, $legendSprite, $borderStyle, $borderThickness)
!endprocedure

' Layout
' ##################################

SetDefaultLegendEntries("person\nsystem\ncontainer\ncomponent\nexternal_person\nexternal_system\nexternal_container\nexternal_component\nenterprise_boundary\nsystem_boundary\ncontainer_boundary\nboundary")

!procedure LAYOUT_WITH_LEGEND()
hide stereotype
legend right
|<color:$LEGEND_TITLE_COLOR>**Legend**</color> |
|<$PERSON_BG_COLOR> person |
|<$SYSTEM_BG_COLOR> system |
|<$CONTAINER_BG_COLOR> container |
|<$COMPONENT_BG_COLOR> component |
|<$EXTERNAL_PERSON_BG_COLOR> external person |
|<$EXTERNAL_SYSTEM_BG_COLOR> external system |
|<$EXTERNAL_CONTAINER_BG_COLOR> external container |
|<$EXTERNAL_COMPONENT_BG_COLOR> external component |
endlegend
!endprocedure

' Elements
' ##################################

!unquoted procedure Component($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $baseShape="rectangle")
  $getElementLine($baseShape, "component", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure ComponentDb($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
  $getElementLine("database", "component", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure ComponentQueue($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
  $getElementLine("queue", "component", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Component_Ext($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $baseShape="rectangle")
  $getElementLine($baseShape, "external_component", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure ComponentDb_Ext($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
  $getElementLine("database", "external_component", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure ComponentQueue_Ext($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
  $getElementLine("queue", "external_component", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
' convert it with additional command line argument -DRELATIVE_INCLUDE="relative/absolute" to use locally
!if %variable_exists("RELATIVE_INCLUDE")
  !include ./C4_Context.puml
!else
  !include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml
!endif

' Scope: A single software system.
' Primary elements: Containers within the software system in scope.
' Supporting elements: People and software systems directly connected to the containers.
' Intended audience: Technical people inside and outside of the software development team; including software architects, developers and operations/support staff.

' Colors
' ##################################

!$CONTAINER_FONT_COLOR ?= $ELEMENT_FONT_COLOR
!$CONTAINER_BG_COLOR ?= "#438DD5"
!$CONTAINER_BORDER_COLOR ?= "#3C7FC0"

!$CONTAINER_BOUNDARY_COLOR ?= $BOUNDARY_COLOR
!$CONTAINER_BOUNDARY_BG_COLOR ?= $BOUNDARY_BG_COLOR
!$CONTAINER_BOUNDARY_BORDER_STYLE ?= $BOUNDARY_BORDER_STYLE

!$EXTERNAL_CONTAINER_FONT_COLOR ?= $ELEMENT_FONT_COLOR
!$EXTERNAL_CONTAINER_BG_COLOR ?= "#B3B3B3"
!$EXTERNAL_CONTAINER_BORDER_COLOR ?= "#A6A6A6"

' Styling
' ##################################
UpdateElementStyle("container", $CONTAINER_BG_COLOR, $CONTAINER_FONT_COLOR, $CONTAINER_BORDER_COLOR)
UpdateElementStyle("external_container", $EXTERNAL_CONTAINER_BG_COLOR, $EXTERNAL_CONTAINER_FONT_COLOR, $EXTERNAL_CONTAINER_BORDER_COLOR)

UpdateBoundaryStyle("container", $bgColor=$CONTAINER_BOUNDARY_BG_COLOR, $fontColor=$CONTAINER_BOUNDARY_COLOR, $borderColor=$CONTAINER_BOUNDARY_COLOR, $type="Container")

' shortcuts with default colors
!unquoted procedure AddContainerTag($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $techn="", $legendText="", $legendSprite="", $borderStyle="", $borderThickness="")
  $addElementTagInclReuse("container", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $techn, $legendText, $legendSprite, $borderStyle, $borderThickness)
!endprocedure
!unquoted procedure AddExternalContainerTag($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $techn="", $legendText="", $legendSprite="", $borderStyle="", $borderThickness="")
  $addElementTagInclReuse("external_container", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $techn, $legendText, $legendSprite, $borderStyle, $borderThickness)
!endprocedure

!unquoted procedure UpdateContainerBoundaryStyle($bgColor=$CONTAINER_BOUNDARY_BG_COLOR, $fontColor=$CONTAINER_BOUNDARY_COLOR, $borderColor=$CONTAINER_BOUNDARY_COLOR, $shadowing="", $shape="", $type="Container", $legendText="", $borderStyle="", $borderThickness="")
  UpdateBoundaryStyle("container", $bgColor, $fontColor, $borderColor, $shadowing, $shape, $type, $legendText, $borderStyle, $borderThickness)
!endprocedure

' Layout
' ##################################

SetDefaultLegendEntries("person\nsystem\ncontainer\nexternal_person\nexternal_system\nexternal_container\nenterprise_boundary\nsystem_boundary\ncontainer_boundary\nboundary")

!procedure LAYOUT_WITH_LEGEND()
hide stereotype
legend right
|<color:$LEGEND_TITLE_COLOR>**Legend**</color> |
|<$PERSON_BG_COLOR> person |
|<$SYSTEM_BG_COLOR> system |
|<$CONTAINER_BG_COLOR> container |
|<$EXTERNAL_PERSON_BG_COLOR> external person |
|<$EXTERNAL_SYSTEM_BG_COLOR> external system |
|<$EXTERNAL_CONTAINER_BG_COLOR> external container |
endlegend
!endprocedure

' Elements
' ##################################

!unquoted procedure Container($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $baseShape="rectangle")
  $getElementLine($baseShape , "container", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure ContainerDb($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
  $getElementLine("database", "container", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure ContainerQueue($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
  $getElementLine("queue", "container", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Container_Ext($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $baseShape="rectangle")
  $getElementLine($baseShape , "external_container", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure ContainerDb_Ext($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
  $getElementLine("database", "external_container", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure ContainerQueue_Ext($alias, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
  $getElementLine("queue", "external_container", $alias, $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

' Boundaries
' ##################################

!unquoted procedure Container_Boundary($alias, $label, $tags="", $link="")
  !if ($tags != "")
    !$allTags = $tags + '+container'
  !else
    !$allTags = 'container'
  !endif
  ' $type defined via $tag style
  Boundary($alias, $label, "", $allTags, $link)
!endprocedure
' convert it with additional command line argument -DRELATIVE_INCLUDE="relative/absolute" to use locally
!if %variable_exists("RELATIVE_INCLUDE")
  !include ./C4.puml
!else
  !include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4.puml
!endif

' Scope: A single software system.
' Primary elements: The software system in scope.
' Supporting elements: People and software systems directly connected to the software system in scope.
' Intended audience: Everybody, both technical and non-technical people, inside and outside of the software development team.

' Colors
' ##################################

!$PERSON_FONT_COLOR ?= $ELEMENT_FONT_COLOR
!$PERSON_BG_COLOR ?= "#08427B"
!$PERSON_BORDER_COLOR ?= "#073B6F"

!$EXTERNAL_PERSON_FONT_COLOR ?= $ELEMENT_FONT_COLOR
!$EXTERNAL_PERSON_BG_COLOR ?= "#686868"
!$EXTERNAL_PERSON_BORDER_COLOR ?= "#8A8A8A"

!$SYSTEM_FONT_COLOR ?= $ELEMENT_FONT_COLOR
!$SYSTEM_BG_COLOR ?= "#1168BD"
!$SYSTEM_BORDER_COLOR ?= "#3C7FC0"

!$SYSTEM_BOUNDARY_COLOR ?= $BOUNDARY_COLOR
!$SYSTEM_BOUNDARY_BG_COLOR ?= $BOUNDARY_BG_COLOR
!$SYSTEM_BOUNDARY_BORDER_STYLE ?= $BOUNDARY_BORDER_STYLE

!$EXTERNAL_SYSTEM_FONT_COLOR ?= $ELEMENT_FONT_COLOR
!$EXTERNAL_SYSTEM_BG_COLOR ?= "#999999"
!$EXTERNAL_SYSTEM_BORDER_COLOR ?= "#8A8A8A"

!$ENTERPRISE_BOUNDARY_COLOR ?= $BOUNDARY_COLOR
!$ENTERPRISE_BOUNDARY_BG_COLOR ?= $BOUNDARY_BG_COLOR
!$ENTERPRISE_BOUNDARY_BORDER_STYLE ?= $BOUNDARY_BORDER_STYLE

' Styling
' ##################################

UpdateElementStyle("person", $PERSON_BG_COLOR, $PERSON_FONT_COLOR, $PERSON_BORDER_COLOR)
UpdateElementStyle("external_person", $EXTERNAL_PERSON_BG_COLOR, $EXTERNAL_PERSON_FONT_COLOR, $EXTERNAL_PERSON_BORDER_COLOR)
UpdateElementStyle("system", $SYSTEM_BG_COLOR, $SYSTEM_FONT_COLOR, $SYSTEM_BORDER_COLOR)
UpdateElementStyle("external_system", $EXTERNAL_SYSTEM_BG_COLOR, $EXTERNAL_SYSTEM_FONT_COLOR, $EXTERNAL_SYSTEM_BORDER_COLOR)

UpdateBoundaryStyle("system", $bgColor=$SYSTEM_BOUNDARY_BG_COLOR, $fontColor=$SYSTEM_BOUNDARY_COLOR, $borderColor=$SYSTEM_BOUNDARY_COLOR, $type="System")
UpdateBoundaryStyle("enterprise", $bgColor=$ENTERPRISE_BOUNDARY_BG_COLOR, $fontColor=$ENTERPRISE_BOUNDARY_COLOR, $borderColor=$ENTERPRISE_BOUNDARY_COLOR, $type="Enterprise")

' shortcuts with default colors
!unquoted procedure AddPersonTag($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $legendText="", $legendSprite="", $type="", $borderStyle="", $borderThickness="")
  $addElementTagInclReuse("person", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $type, $legendText, $legendSprite, $borderStyle, $borderThickness)
!endprocedure
!unquoted procedure AddExternalPersonTag($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $legendText="", $legendSprite="", $type="", $borderStyle="", $borderThickness="")
  $addElementTagInclReuse("external_person", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $type, $legendText, $legendSprite, $borderStyle, $borderThickness)
!endprocedure
!unquoted procedure AddSystemTag($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $legendText="", $legendSprite="", $type="", $borderStyle="", $borderThickness="")
  $addElementTagInclReuse("system", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $type, $legendText, $legendSprite, $borderStyle, $borderThickness)
!endprocedure
!unquoted procedure AddExternalSystemTag($tagStereo, $bgColor="", $fontColor="", $borderColor="", $shadowing="", $shape="", $sprite="", $legendText="", $legendSprite="", $type="", $borderStyle="", $borderThickness="")
  $addElementTagInclReuse("external_system", $tagStereo, $bgColor, $fontColor, $borderColor, $shadowing, $shape, $sprite, $type, $legendText, $legendSprite, $borderStyle, $borderThickness)
!endprocedure

!unquoted procedure UpdateEnterpriseBoundaryStyle($bgColor=$ENTERPRISE_BOUNDARY_BG_COLOR, $fontColor=$ENTERPRISE_BOUNDARY_COLOR, $borderColor=$ENTERPRISE_BOUNDARY_COLOR, $shadowing="", $shape="", $type="Enterprise", $legendText="", $borderStyle="", $borderThickness="")
  UpdateBoundaryStyle("enterprise", $bgColor, $fontColor, $borderColor, $shadowing, $shape, $type, $legendText, $borderStyle, $borderThickness)
!endprocedure
!unquoted procedure UpdateSystemBoundaryStyle($bgColor=$SYSTEM_BOUNDARY_BG_COLOR, $fontColor=$SYSTEM_BOUNDARY_COLOR, $borderColor=$SYSTEM_BOUNDARY_COLOR, $shadowing="", $shape="", $type="System", $legendText="", $borderStyle="", $borderThickness="")
  UpdateBoundaryStyle("system", $bgColor, $fontColor, $borderColor, $shadowing, $shape, $type, $legendText, $borderStyle, $borderThickness)
!endprocedure

' Sprites
' ##################################

sprite $person [48x48/16] {
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
0000000000000000000049BCCA7200000000000000000000
0000000000000000006EFFFFFFFFB3000000000000000000
00000000000000001CFFFFFFFFFFFF700000000000000000
0000000000000001EFFFFFFFFFFFFFF80000000000000000
000000000000000CFFFFFFFFFFFFFFFF6000000000000000
000000000000007FFFFFFFFFFFFFFFFFF100000000000000
00000000000001FFFFFFFFFFFFFFFFFFF900000000000000
00000000000006FFFFFFFFFFFFFFFFFFFF00000000000000
0000000000000BFFFFFFFFFFFFFFFFFFFF40000000000000
0000000000000EFFFFFFFFFFFFFFFFFFFF70000000000000
0000000000000FFFFFFFFFFFFFFFFFFFFF80000000000000
0000000000000FFFFFFFFFFFFFFFFFFFFF80000000000000
0000000000000DFFFFFFFFFFFFFFFFFFFF60000000000000
0000000000000AFFFFFFFFFFFFFFFFFFFF40000000000000
00000000000006FFFFFFFFFFFFFFFFFFFE00000000000000
00000000000000EFFFFFFFFFFFFFFFFFF800000000000000
000000000000007FFFFFFFFFFFFFFFFFF100000000000000
000000000000000BFFFFFFFFFFFFFFFF5000000000000000
0000000000000001DFFFFFFFFFFFFFF70000000000000000
00000000000000000BFFFFFFFFFFFF500000000000000000
0000000000000000005DFFFFFFFFA1000000000000000000
0000000000000000000037ABB96100000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000025788300000000005886410000000000000
000000000007DFFFFFFD9643347BFFFFFFFB400000000000
0000000004EFFFFFFFFFFFFFFFFFFFFFFFFFFB1000000000
000000007FFFFFFFFFFFFFFFFFFFFFFFFFFFFFD200000000
00000006FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE10000000
0000003FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB0000000
000000BFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5000000
000003FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD000000
000009FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF200000
00000DFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF600000
00000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF800000
00001FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA00000
00001FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB00000
00001FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB00000
00001FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB00000
00001FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA00000
00000EFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF700000
000006FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE100000
0000008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD3000000
000000014555555555555555555555555555555300000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
}

sprite $person2 [48x48/16] {
0000000000000000000049BCCA7200000000000000000000
0000000000000000006EFFFFFFFFB3000000000000000000
00000000000000001CFFFFFFFFFFFF700000000000000000
0000000000000001EFFFFFFFFFFFFFF80000000000000000
000000000000000CFFFFFFFFFFFFFFFF6000000000000000
000000000000007FFFFFFFFFFFFFFFFFF100000000000000
00000000000001FFFFFFFFFFFFFFFFFFF900000000000000
00000000000006FFFFFFFFFFFFFFFFFFFF00000000000000
0000000000000BFFFFFFFFFFFFFFFFFFFF40000000000000
0000000000000EFFFFFFFFFFFFFFFFFFFF70000000000000
0000000000000FFFFFFFFFFFFFFFFFFFFF80000000000000
0000000000000FFFFFFFFFFFFFFFFFFFFF80000000000000
0000000000000DFFFFFFFFFFFFFFFFFFFF60000000000000
0000000000000AFFFFFFFFFFFFFFFFFFFF40000000000000
00000000000006FFFFFFFFFFFFFFFFFFFE00000000000000
00000000000000EFFFFFFFFFFFFFFFFFF800000000000000
000000000000007FFFFFFFFFFFFFFFFFF100000000000000
000000000000000BFFFFFFFFFFFFFFFF5000000000000000
0000000000000001DFFFFFFFFFFFFFF70000000000000000
00000000000000000BFFFFFFFFFFFF500000000000000000
0000000000000000005DFFFFFFFFA1000000000000000000
0000000000000000000037ABB96100000000000000000000
000000000002578888300000000005888864100000000000
0000000007DFFFFFFFFD9643347BFFFFFFFFFB4000000000
00000004EFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB10000000
0000007FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD2000000
000006FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE100000
00003FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB00000
0000BFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF50000
0003FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD0000
0009FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF2000
000DFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF6000
000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
001FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB000
001FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB000
001FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB000
001FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA000
000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
000DFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF6000
0009FFFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFFF2000
0003FFFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFFD0000
0000BFFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFF50000
00003FFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFB00000
000006FFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFE100000
0000007FFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFD2000000
00000004EFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFB10000000
0000000007DF8FFFFFFFFFFFFFFFFFFFFFF8FB4000000000
000000000002578888888888888888888864100000000000
}

sprite $robot [48x48/16] {
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000005BFFFFFFFFFFFFFFFFFFFFFE9100000000000
0000000000AFFFFFFFFFFFFFFFFFFFFFFFFFE30000000000
0000000007FFFFFFFFFFFFFFFFFFFFFFFFFFFE1000000000
000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000000000
000000004FFFFFFFFFFFFFFFFFFFFFFFFFFFFFC000000000
000000005FFFFFFFFFFFFFFFFFFFFFFFFFFFFFD000000000
000000005FFFFFFFFFFFFFFFFFFFFFFFFFFFFFE000000000
000000005FFFFFFFFFFFFFFFFFFFFFFFFFFFFFE000000000
000699405FFFFFFC427FFFFFFFFFC427FFFFFFE009982000
008FFF705FFFFFE10006FFFFFFFE00007FFFFFE00FFFF100
00CFFF705FFFFFA00001FFFFFFF900002FFFFFE00FFFF500
00DFFF705FFFFFB00002FFFFFFFA00003FFFFFE00FFFF500
00DFFF705FFFFFF4000AFFFFFFFF3000BFFFFFE00FFFF500
00DFFF705FFFFFFFA8DFFFFFFFFFFA8DFFFFFFE00FFFF500
00DFFF705FFFFFFFFFFFFFFFFFFFFFFFFFFFFFE00FFFF500
00DFFF705FFFFFFFFFFFFFFFFFFFFFFFFFFFFFE00FFFF500
00DFFF705FFFFFFFFFFFFFFFFFFFFFFFFFFFFFE00FFFF500
00DFFF705FFFFFFFFFFFFFFFFFFFFFFFFFFFFFE00FFFF500
00DFFF705FFFFFFFFFFFFFFFFFFFFFFFFFFFFFE00FFFF500
00CFFF705FFFFFF87777777777777777CFFFFFE00FFFF500
008FFF705FFFFFF100000000000000009FFFFFE00FFFF100
000699405FFFFFF76666666666666666CFFFFFE009982000
000000005FFFFFFFFFFFFFFFFFFFFFFFFFFFFFE000000000
000000005FFFFFFFFFFFFFFFFFFFFFFFFFFFFFE000000000
000000004FFFFFFFFFFFFFFFFFFFFFFFFFFFFFC000000000
000000000EFFFFFFFFFFFFFFFFFFFFFFFFFFFF7000000000
0000000005FFFFFFFFFFFFFFFFFFFFFFFFFFFD0000000000
00000000004CFFFFFFFFFFFFFFFFFFFFFFFF910000000000
000000000000011111111111111111111110000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
}

sprite $robot2 [48x48/16] {
000000000000000088888888888888880000000000000000
000000000000000AFFFFFFFFFFFFFFFFA000000000000000
00000000000000CFFFFFFFFFFFFFFFFFFC00000000000000
00000000000004EFFFFFFFFFFFFFFFFFFE40000000000000
0000000000000AFFFFFFFFFFFFFFFFFFFFA0000000000000
00000000000008FFFFFFFFFFFFFFFFFFFF80000000000000
00000000000008FFFFFFFFFFFFFFFFFFFF80000000000000
00000000000008FFFFFFFFFFFFFFFFFFFF80000000000000
00000000000888FFFFFFFFFFFFFFFFFFFF88800000000000
00000000008FF8FFFFFFFFFFFFFFFFFFFF8FF80000000000
00000000008FF8FFFFFFFFFFFFFFFFFFFF8FF80000000000
00000000008FF8FFFFFFFFFFFFFFFFFFFF8FF80000000000
00000000008FF8FFFFFFFFFFFFFFFFFFFF8FF80000000000
00000000008FF8FFFFFFFFFFFFFFFFFFFF8FF80000000000
00000000008FF8FFFFFFFFFFFFFFFFFFFF8FF80000000000
00000000000888FFFFFFFFFFFFFFFFFFFF88800000000000
00000000000008FFFFFFFFFFFFFFFFFFFF80000000000000
00000000000008FFFFFFFFFFFFFFFFFFFF80000000000000
00000000000008FFFFFFFFFFFFFFFFFFFF80000000000000
00000000000008FFFFFFFFFFFFFFFFFFFF80000000000000
00000000000008FFFFFFFFFFFFFFFFFFFF80000000000000
00000000000004CFFFFFFFFFFFFFFFFFFC40000000000000
000000488888848CFFFFFFFFFFFFFFFFC848888884000000
00000CFFFFFFFFC888888888888888888CFFFFFFFFC00000
00008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF80000
0000CFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8000
0008FFFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFFF8000
0008FFFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFFF8000
0008FFFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFFF8000
0008FFFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFFF8000
0000CFFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFFC0000
00008FFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFF80000
00000CFFFFFF8FFFFFFFFFFFFFFFFFFFFFF8FFFFFFC00000
000000488887578888888888888888888864688884000000
000000000000000000000000000000000000000000000000
}

' Layout
' ##################################

SetDefaultLegendEntries("person\nsystem\nexternal_person\nexternal_system\nenterprise_boundary\nsystem_boundary\nboundary")

!procedure LAYOUT_WITH_LEGEND()
hide stereotype
legend right
|<color:$LEGEND_TITLE_COLOR>**Legend**</color> |
|<$PERSON_BG_COLOR> person |
|<$SYSTEM_BG_COLOR> system|
|<$EXTERNAL_PERSON_BG_COLOR> external person |
|<$EXTERNAL_SYSTEM_BG_COLOR> external system |
endlegend
!endprocedure

!global $defaultPersonSprite = "person"
!$dummy = $restoreEmpty("person", "sprite", $defaultPersonSprite, %true())
UpdateElementStyle("person")
' workaround of plantuml.jar bug - person overwrites external_person setting
!$dummy = $restoreEmpty("external_person", "sprite", $defaultPersonSprite, %true())
UpdateElementStyle("external_person")
!global $portraitPerson = "false"

!procedure $clearPersonRestore()
  !$dummy = $clearRestore("person", "sprite")
  !$dummy = $clearRestore("person", "legendSprite")
  %set_variable_value("$" + "person" + "ElementTagSprite", "")
  UpdateElementStyle("person")
  ' workaround of plantuml.jar bug - person overwrites external_person setting
  !$dummy = $clearRestore("external_person", "sprite")
  !$dummy = $clearRestore("external_person", "legendSprite")
  %set_variable_value("$" + "external_person" + "ElementTagSprite", "")
  UpdateElementStyle("external_person")
!endprocedure

!procedure HIDE_PERSON_SPRITE()
  !$defaultPersonSprite = ""
  !$portraitPerson = "false"
  $clearPersonRestore()
!endprocedure

!unquoted procedure SHOW_PERSON_SPRITE($sprite="")
  !if ($sprite == "")
    !$defaultPersonSprite = "person"
  !else
    !$defaultPersonSprite = $sprite
  !endif
  !$dummy = $restoreEmpty("person", "sprite", $defaultPersonSprite, %true())
  UpdateElementStyle("person")
  ' workaround of plantuml.jar bug - person overwrites external_person setting
  !$dummy = $restoreEmpty("external_person", "sprite", $defaultPersonSprite, %true())
  UpdateElementStyle("external_person")
  !$portraitPerson = "false"
!endprocedure

!unquoted procedure SHOW_PERSON_PORTRAIT()
  !$defaultPersonSprite = ""
  !$portraitPerson = "portrait"
  $clearPersonRestore()
!endprocedure

!unquoted procedure SHOW_PERSON_OUTLINE()
  !$defaultPersonSprite = ""
  !$portraitPerson = "outline"
  $clearPersonRestore()
!endprocedure

' Elements
' ##################################

!function $getPerson($label, $type, $descr, $sprite)
  !if ($sprite == "") && ($defaultPersonSprite != "")
    !$sprite = $defaultPersonSprite
  !endif
  !return $getElementBase($label, $type, $descr, $sprite)
!endfunction

!unquoted procedure Person($alias, $label, $descr="", $sprite="", $tags="", $link="", $type="")
!$sprite=$toElementArg($sprite, $tags, "ElementTagSprite", "person")
' $type reuses $techn definition of $tags
!$type=$toElementArg($type, $tags, "ElementTagTechn", "person")
!if ($portraitPerson == "portrait") && ($sprite == "")
actor "$getPerson($label, $type, $descr, $sprite)$getProps()" $toStereos("person", $tags) as $alias $getLink($link)
!elseif ($portraitPerson == "outline") && ($sprite == "")
person "$getPerson($label, $type, $descr, $sprite)$getProps()" $toStereos("person", $tags) as $alias $getLink($link)
!else
rectangle "$getPerson($label, $type, $descr, $sprite)$getProps()" $toStereos("person", $tags) as $alias $getLink($link)
!endif
!endprocedure

!unquoted procedure Person_Ext($alias, $label, $descr="", $sprite="", $tags="", $link="", $type="")
!$sprite=$toElementArg($sprite, $tags, "ElementTagSprite", "external_person")
' $type reuses $techn definition of $tags
!$type=$toElementArg($type, $tags, "ElementTagTechn", "external_person")
!if ($portraitPerson == "portrait") && ($sprite == "")
actor "$getPerson($label, $type, $descr, $sprite)$getProps()" $toStereos("external_person", $tags) as $alias $getLink($link)
!elseif ($portraitPerson == "outline") && ($sprite == "")
person "$getPerson($label, $type, $descr, $sprite)$getProps()" $toStereos("external_person", $tags) as $alias $getLink($link)
!else
rectangle "$getPerson($label, $type, $descr, $sprite)$getProps()" $toStereos("external_person", $tags) as $alias $getLink($link)
!endif
!endprocedure

!unquoted procedure System($alias, $label, $descr="", $sprite="", $tags="", $link="", $type="", $baseShape="rectangle")
  ' $type reuses $techn definition of $tags
  $getElementLine($baseShape, "system", $alias, $label, $type, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure SystemDb($alias, $label, $descr="", $sprite="", $tags="", $link="", $type="")
  ' $type reuses $techn definition of $tags
  $getElementLine("database", "system", $alias, $label, $type, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure SystemQueue($alias, $label, $descr="", $sprite="", $tags="", $link="", $type="")
  ' $type reuses $techn definition of $tags
  $getElementLine("queue", "system", $alias, $label, $type, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure System_Ext($alias, $label, $descr="", $sprite="", $tags="", $link="", $type="", $baseShape="rectangle")
  ' $type reuses $techn definition of $tags
  $getElementLine($baseShape , "external_system", $alias, $label, $type, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure SystemDb_Ext($alias, $label, $descr="", $sprite="", $tags="", $link="", $type="")
  ' $type reuses $techn definition of $tags
  $getElementLine("database", "external_system", $alias, $label, $type, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure SystemQueue_Ext($alias, $label, $descr="", $sprite="", $tags="", $link="", $type="")
  ' $type reuses $techn definition of $tags
  $getElementLine("queue", "external_system", $alias, $label, $type, $descr, $sprite, $tags, $link)
!endprocedure

' Boundaries
' ##################################

!unquoted procedure Enterprise_Boundary($alias, $label, $tags="", $link="")
  !if ($tags != "")
    !$allTags = $tags + '+enterprise'
  !else
    !$allTags = 'enterprise'
  !endif
  ' $type defined via $tag style
  Boundary($alias, $label, "", $allTags, $link)
!endprocedure

!unquoted procedure System_Boundary($alias, $label, $tags="", $link="")
  !if ($tags != "")
    !$allTags = $tags + '+system'
  !else
    !$allTags = 'system'
  !endif
  ' $type defined via $tag style
  Boundary($alias, $label, "", $allTags, $link)
!endprocedure
' convert it with additional command line argument -DRELATIVE_INCLUDE="relative/absolute" to use locally
!if %variable_exists("RELATIVE_INCLUDE")
  !include ./C4_Component.puml
!else
  !include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml
!endif

' Scope: Interactions in an enterprise, software system or container.
' Primary and supporting elements: Depends on the diagram scope -
'     enterprise - people and software systems Related to the enterprise in scope
'     software system - see system context or container diagrams,
'     container - see component diagram.
' Intended audience: Technical and non-technical people, inside and outside of the software development team.

' Dynamic diagram introduces (automatically) numbered interactions:
'     (lowercase) increment($offset=1): increase current index (procedure which has no direct output)
'     (lowercase) setIndex($new_index): set the new index (procedure which has no direct output)
'
'     (Uppercase) LastIndex(): return the last used index (function which can be used as argument)
'     (Uppercase) Index($offset=1): returns current index and calculates next index (function which can be used as argument)
'     (Uppercase) SetIndex($new_index): returns new set index and calculates next index (function which can be used as argument)

' Relationship override
' ##################################

' Relationship
' ##################################

!unquoted procedure Rel_($e_index, $alias1, $alias2, $label, $direction)
$getRel($direction, $alias1, $alias2, $e_index + ": " + $label, "", "", "", "", "")
!endprocedure
!unquoted procedure Rel_($e_index, $alias1, $alias2, $label, $techn, $direction)
$getRel($direction, $alias1, $alias2, $e_index + ": " + $label, $techn, "", "", "", "")
!endprocedure

' all RelIndex... calls are outdated, Rel(..., $index=...) calls should be used !!!!

' first Rel() supports the $index argument too; second Rel() overwrites C4.puml definition
!unquoted procedure Rel($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel("-->>", $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure RelIndex($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel("-->>", $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_Back($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel("<<--", $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Back($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_Back($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure RelIndex_Back($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel("<<--", $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_Neighbor($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel("->>", $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Neighbor($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_Neighbor($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure RelIndex_Neighbor($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel("->>", $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_Back_Neighbor($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel("<<-", $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Back_Neighbor($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_Back_Neighbor($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure RelIndex_Back_Neighbor($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel("<<-", $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_D($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel($down("-","->>"), $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_D($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_D($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure Rel_Down($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel($down("-","->>"), $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Down($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_Down($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure RelIndex_D($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($down("-","->>"), $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure RelIndex_Down($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($down("-","->>"), $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_U($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel($up("-","->>"), $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_U($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_U($from, $to, $label, $techn, $descr, $sprite, $tags, $link=, "")
!endprocedure
!unquoted procedure Rel_Up($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel($up("-","->>"), $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Up($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_Up($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure RelIndex_U($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($up("-","->>"), $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure RelIndex_Up($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($up("-","->>"), $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_L($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel($left("-","->>"), $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_L($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_L($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure Rel_Left($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel($left("-","->>"), $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Left($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_Left($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure RelIndex_L($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($left("-","->>"), $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure RelIndex_Left($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($left("-","->>"), $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

!unquoted procedure Rel_R($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel($right("-","->>"), $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_R($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_R($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure Rel_Right($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="", $index="")
!$pre = $getPrefix($index)
$getRel($right("-","->>"), $from, $to, $pre + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure Rel_Right($from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
Rel_Right($from, $to, $label, $techn, $descr, $sprite, $tags, $link, "")
!endprocedure
!unquoted procedure RelIndex_R($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($right("-","->>"), $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure
!unquoted procedure RelIndex_Right($e_index, $from, $to, $label, $techn="", $descr="", $sprite="", $tags="", $link="")
$getRel($right("-","->>"), $from, $to, $e_index + ": " + $label, $techn, $descr, $sprite, $tags, $link)
!endprocedure

`;
