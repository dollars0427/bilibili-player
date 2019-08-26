#!/usr/bin/env bash

# Maintainer Mr.Twister

path=`pwd`
nativefier --name "BiliBili" --inject $path/custom.js --internal-urls ".*?" --width 858 --height 531 --icon "./icon.icns" --always-on-top www.bilibili.com
