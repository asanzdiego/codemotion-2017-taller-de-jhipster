#!/bin/bash

echo "*********************************"
echo "* ADD CHANGES, COMMIT, AND PUSH *"
echo "*********************************"

git status

read -p "You want to continue? [y|*N*]: " OPTION

if [ "$OPTION" == "y" ]; then

    read -p "Write the commit message: " MESSAGE

    git add -A && \
    git commit -m "$MESSAGE" && \
    git push origin master
fi
