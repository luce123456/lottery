@echo off
set Folder=./images/C
cd /d "%Folder%"
(for /f "delims=" %%i in ('dir /b /s /a-d *') do (
    echo;%%~ni
))>"../Canada0.txt"

setlocal enabledelayedexpansion
set "SrcFile=../Canada0.txt"
set "DstFile=../Canada.txt"
set "MergeNum=50"
set "Delimiter=,"

type nul>"%DstFile%"
for /f "usebackq tokens=*" %%a in ("%SrcFile%") do (
    set /a RowTotal+=1
    set /a Count+=1
    set "RowMerge=!RowMerge!%Delimiter%%%a"
    if !Count! equ !MergeNum! (
        >>"%DstFile%" echo,!RowMerge:~1!
        set RowMerge=
        set Count=0
    )
)

set /a RowMod=RowTotal%%MergeNum
if !RowMod! equ 0 (
    goto :end
)
>>"%DstFile%" echo,!RowMerge:~1!

del /f /s /q ..\Canada0.txt
set enabledelayedexpansion=<nul
set RowMerge=<nul
set Count=<nul


set Folder=../S
cd /d "%Folder%"
(for /f "delims=" %%i in ('dir /b /s /a-d *') do (
    echo;%%~ni
))>"../Shanghai0.txt"

setlocal enabledelayedexpansion
set "SrcFile=../Shanghai0.txt"
set "DstFile=../Shanghai.txt"
set "MergeNum=50"
set "Delimiter=,"

type nul>"%DstFile%"
for /f "usebackq tokens=*" %%a in ("%SrcFile%") do (
    set /a RowTotal+=1
    set /a Count+=1
    set "RowMerge=!RowMerge!%Delimiter%%%a"
    if !Count! equ !MergeNum! (
        >>"%DstFile%" echo,!RowMerge:~1!
        set RowMerge=
        set Count=0
    )
)

set /a RowMod=RowTotal%%MergeNum
if !RowMod! equ 0 (
    goto :end
)
>>"%DstFile%" echo,!RowMerge:~1!

del /f /s /q ..\Shanghai0.txt
