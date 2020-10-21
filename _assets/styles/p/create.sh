for dir in */; do
   echo "/* Custom styles for ${dir/\//} */ \n\n.page__${dir/\//} { }" >| "$dir/main.scss"
done