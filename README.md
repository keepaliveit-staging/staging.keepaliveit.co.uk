# Source code for keepaliveit.co.uk

## Modifying JS
```npm install```
```npm run uglify```


## Adding items to megamenu
The megamenu supports adding regular links, dropdown menus, megamenus, images, and blog posts.

### Regular links
```
<li>
    <a href="#">
        <span>Contact</span>
    </a>
</li>
```

### Images
```
<li class="images-drop-down">
    <a href="#">
        <span>Images</span>
    </a>
    <div class="Images">
        <div class="row">
            <div class="col-md-3">
                <h4>Images Title </h4>
                <img class="img-fluid"
                     src="https://2.bp.blogspot.com/-VG_e0pKfrDo/VcLb6JwZqfI/AAAAAAAAGCk/8ZgA9kZqTQ8/s1600/images3.jpg">
            </div>
            <div class="col-md-3">
                <h4>Images Title </h4>
                <img class="img-fluid"
                     src="https://3.bp.blogspot.com/-hUt5FrdZHio/VcLb5dlwTBI/AAAAAAAAGCU/UUH5N1JkoQc/s1600/images1.jpg">
            </div>
            <div class="col-md-3">
                <h4>Images Title </h4>
                <img class="img-fluid"
                     src="https://4.bp.blogspot.com/-A7U1uPlSq6Y/VcLb5kKHCkI/AAAAAAAAGCc/7WghyndTEuY/s1600/images2.jpg">
            </div>
            <div class="col-md-3">
                <h4>Images Title </h4>
                <img class="img-fluid"
                     src="https://3.bp.blogspot.com/-hGrnZIjzL2k/VcLb47kyQKI/AAAAAAAAGCQ/J6Q2IAHIQvQ/s1600/image4.jpg">
            </div>
        </div>
    </div>
</li>
```

### Dropdowns
```
<li class="drop-down">
    <a href="#">
        <span>Flyout</span>
    </a>
    <ul class="drop-down-ul ">
        <li class="flyout-right">
            <a href="#">Flyout Right this is some text lol and it needs to fit</a>
            <ul class="">
                <li class="drop-down-submenu">
                    <a href="#">Mobile</a>
                </li>
                <li>
                    <a href="#">Computer</a>
                </li>
                <li>
                    <a href="#">Watch</a>
                </li>
            </ul>
        </li>
        <li class="flyout-right">
            <a href="#">Flyout Right this is some text lol and it needs to fit</a>
            <ul class="">
                <li class="drop-down-submenu">
                    <a href="#">Mobile</a>
                    <ul class="">
                        <li><a href="#">Mobile 1</a></li>
                        <li><a href="#">Mobile 2</a></li>
                        <li><a href="#">Mobile 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Computer</a>
                    <ul class="">
                        <li><a href="#">Computer 1</a></li>
                        <li><a href="#">Computer 2</a></li>
                        <li><a href="#">Computer 3</a></li>
                    </ul>
                </li>
                <li><a href="#">Watch</a></li>
            </ul>
        </li>
        <li class="flyout-left">
            <a href="#">Flyout Left</a>
            <ul class="">
                <li><a href="#">Mobile</a></li>
                <li><a href="#">Computer</a></li>
                <li><a href="#">Watch</a></li>
            </ul>
        </li>
        <li>
            <a href="#">No Flyout</a>
        </li>
    </ul>
</li>
````

