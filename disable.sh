#!/bin/bash
# Directory containing the files
folder="src/date-fns"

# Text to insert at the beginning
insert_text_begin="/* eslint-disable eslint-comments/no-unlimited-disable */\n/* eslint-disable */\n// @ts-nocheck\n"

# Text to insert at the end
insert_text_end="\n/* eslint-enable */"

# Loop over each file in the folder (adjust the glob as needed, e.g. *.txt)
for file in "$folder"/*; do
  if [ -f "$file" ]; then
    # Create a temporary file that contains the new text followed by the original file contents
    { printf "%b\n" "$insert_text_begin"; cat "$file"; printf "%b\n" "$insert_text_end"; } > "${file}.tmp" && mv "${file}.tmp" "$file"
    echo "Updated: $file"
  fi
done