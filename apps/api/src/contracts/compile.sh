#!/bin/bash

####################################################
# script to compile the contracts
####################################################

contracts_to_compile=()

while true; do
    echo ""
    echo "[*] What do you want to compile: "
    echo "     [1] all"
    echo "     [2] buynow"
    echo "     [3] auction"
    read -p "Choice:" choice
    case $choice in
        1 ) contracts_to_compile+=("auction", "buynow"); break;;
        2 ) contracts_to_compile+=("buynow"); break;;
        3 ) contracts_to_compile+=("auction"); break;;
        * ) echo "Please enter 1, 2 or 3";;
    esac
done

for i in "${contracts_to_compile[@]%,}"
do
    reach compile "./rsh/$i.rsh"
    mv "./rsh/build/$i.main.mjs" "./compiled/$i.main.js"
done