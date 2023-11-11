#!/bin/bash
echo "Executing the @soralinks/logger build script..."

# get the current working directory so we can switch back to it at the end
current_directory=$(pwd)

# make /logger the current directory
cd ~/code/logger

# run the typescript compiler
./node_modules/typescript/bin/tsc

# now switch back to the previous current working directory
cd "$current_directory"
