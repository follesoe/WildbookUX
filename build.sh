harp compile public ../WildbookUX-www
cd ..
cd WildbookUX-www
git add .
git commit -am "Publishing new version..."
git push origin gh-pages
echo "View updated page at http://follesoe.github.io/WildbookUX/"