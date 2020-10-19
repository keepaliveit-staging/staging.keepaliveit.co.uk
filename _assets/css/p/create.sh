for dir in */; do
   echo "/* Custom styles for ${dir/\//} */ \n\n.${dir/\//} { }" >| "$dir/main.scss"
done