#!/usr/bin/sh
git commit -am "${1}"  && git tag "${2}"  && git five && echo "" && git status && echo ""
