<html>
<title>zhesahahha</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body id="myPage">

<!-- Side Navigation on click -->
<nav class="w3-sidenav w3-white w3-card-2 w3-animate-left" style="display:none;z-index:2" id="mySidenav">
    <a href="javascript:void(0)" onclick="w3_close()" class="w3-closenav w3-xxxlarge w3-text-teal">Close
        <i class="fa fa-remove"></i>
    </a>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    <a href="#">Link 4</a>
    <a href="#">Link 5</a>
</nav>

<!-- Navbar -->
<div class="w3-top">
    <ul class="w3-navbar w3-theme-d2 w3-left-align">
        <li class="w3-hide-medium w3-hide-large w3-opennav w3-right">
            <a class="w3-hover-white w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
        </li>
        <li><a href="#" class="w3-teal"><i class="fa fa-home w3-margin-right"></i>Logo</a></li>
        <li class="w3-hide-small"><a href="/Add" class="w3-hover-white">Add Request</a></li>
        <li class="w3-hide-small"><a href="/Show" class="w3-hover-white">Show</a></li>
        <li class="w3-hide-small"><a href="/ShowTwo" class="w3-hover-white">Surt by name</a></li>
        <li class="w3-hide-small"><a href="/Delete" class="w3-hover-white">Delete</a></li>
        <li class="w3-hide-small"><a href="/Change" class="w3-hover-white">Change</a></li>
        <li class="w3-hide-small w3-right"><a href="/Search" class="w3-hover-teal" title="Search"><i class="fa fa-search"></i></a></li>
    </ul>

    <!-- Navbar on small screens -->
    <div id="navDemo" class="w3-hide w3-hide-large w3-hide-medium">
        <ul class="w3-navbar w3-left-align w3-theme">
            <li><a href="/Add">qqq</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#pricing">Price</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Search</a></li>
            <li class="w3-dropdown-hover">
                <a href="javascript:void(0);" title="Notifications">Dropdown <i class="fa fa-caret-down"></i></a>
                <div class="w3-dropdown-content w3-light-grey w3-card-4">
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </div>
            </li>
        </ul>
    </div>
</div>

<!-- Image Header -->
<div class="w3-display-container w3-animate-opacity">
    <img src="http://www.nedwiga.by/wp-content/uploads/2014/12/100_2492_result.jpg" alt="boat" style="width:100%;min-height:350px;max-height:600px;">
</div>

<!-- Modal -->
<div id="id01" class="w3-modal">
    <div class="w3-modal-content w3-card-8 w3-animate-top">
        <header class="w3-container w3-teal">
            <span onclick="document.getElementById('id01').style.display='none'" class="w3-closebtn"><i class="fa fa-remove"></i></span>
            <h4>Oh snap! We just showed you a modal..</h4>
            <h5>Because we can <i class="fa fa-smile-o"></i></h5>
        </header>
        <div class="w3-container">
            <p>Cool huh? Ok, enough teasing around..</p>
            <p>Go to our <a class="w3-btn" href="/w3css/default.asp">W3.CSS Tutorial</a> to learn more!</p>
        </div>
        <footer class="w3-container w3-teal">
            <p>Modal footer</p>
        </footer>
    </div>
</div>

<!-- Team Container -->
<div class="w3-container w3-padding-64 w3-center" id="team">
    <h2>OUR TEAM</h2>
    <p>Meet the team - our office rats:</p>

    <div class="w3-row"><br>

        <div class="w3-quarter">
            <img src="https://pp.vk.me/c629315/v629315024/c30b/fVliERNPceU.jpg" alt="Boss" style="width:45%" class="w3-circle w3-hover-opacity">
            <h3>EvgenZap</h3>
            <p>Web Designer</p>
        </div>

        <div class="w3-quarter">
            <img src="https://pp.vk.me/c629315/v629315024/c30b/fVliERNPceU.jpg" alt="Boss" style="width:45%" class="w3-circle w3-hover-opacity">
            <h3>EvgenZap</h3>
            <p>Support</p>
        </div>

        <div class="w3-quarter">
            <img src="https://pp.vk.me/c629315/v629315024/c30b/fVliERNPceU.jpg" alt="Boss" style="width:45%" class="w3-circle w3-hover-opacity">
            <h3>EvgenZap</h3>
            <p>Boss man</p>
        </div>

        <div class="w3-quarter">
            <img src="https://pp.vk.me/c629315/v629315024/c30b/fVliERNPceU.jpg" alt="Boss" style="width:45%" class="w3-circle w3-hover-opacity">
            <h3>EvgenZap</h3>
            <p>Fixer</p>
        </div>

    </div>
</div>

<!-- Work Row -->
<div class="w3-row-padding w3-padding-64 w3-theme-l1" id="work">

    <div class="w3-quarter">
        <h2>Our Work</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div class="w3-quarter">
        <div class="w3-card-2 w3-white">
            <img src="https://content.onliner.by/news/2015/06/default/c022663fa8614b584f409bff08867053.jpg" alt="Vernazza" style="width:100%">
            <div class="w3-container">
                <h3>Customer 1</h3>
                <h4>Trade</h4>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
            </div>
        </div>
    </div>

    <div class="w3-quarter">
        <div class="w3-card-2 w3-white">
            <img src="http://s9.stc.all.kpcdn.net/share/i/4/1140796/" alt="Cinque Terre" style="width:100%">
            <div class="w3-container">
                <h3>Customer 2</h3>
                <h4>Trade</h4>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
            </div>
        </div>
    </div>

    <div class="w3-quarter">
        <div class="w3-card-2 w3-white">
            <img src="http://content.onliner.by/news/2013/09/default/3f5c8f4a6675956ef263c8f5dc691c23_1380197351.jpg" alt="Monterosso" style="width:100%">
            <div class="w3-container">
                <h3>Customer 3</h3>
                <h4>Trade</h4>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
            </div>
        </div>
    </div>

</div>

<!-- Container -->
<div class="w3-container" style="position:relative">
    <a onclick="w3_open()" class="w3-btn-floating-large w3-teal" style="position:absolute;top:-28px;right:24px;z-index:0;">
        <i class="fa fa-plus"></i></a>
</div>

<!-- Pricing Row -->
<div class="w3-row-padding w3-center w3-padding-64" id="pricing">
    <h2>PRICING</h2>
    <p>Choose a pricing plan that fits your needs.</p><br>
    <div class="w3-third w3-margin-bottom">
        <ul class="w3-ul w3-border w3-hover-shadow">
            <li class="w3-theme">
                <p class="w3-xlarge">Basic</p>
            </li>
            <li class="w3-padding-16"><b>10</b> Clean</li>
            <li class="w3-padding-16"><b>Endless</b> Support</li>
            <li class="w3-padding-16">
                <h2 class="w3-wide"><i class="fa fa-usd"></i> 300</h2>
                <span class="w3-opacity">per month</span>
            </li>
            <li class="w3-theme-l5 w3-padding-24">
                <button class="w3-btn w3-teal w3-padding-large"><i class="fa fa-check"></i> Sign Up</button>
            </li>
        </ul>
    </div>

    <div class="w3-third w3-margin-bottom">
        <ul class="w3-ul w3-border w3-hover-shadow">
            <li class="w3-theme-l2">
                <p class="w3-xlarge">Pro</p>
            </li>
            <li class="w3-padding-16"><b>20</b> Clean</li>
            <li class="w3-padding-16"><b>Endless</b> Support</li>
            <li class="w3-padding-16">
                <h2 class="w3-wide"><i class="fa fa-usd"></i> 400</h2>
                <span class="w3-opacity">per month</span>
            </li>
            <li class="w3-theme-l5 w3-padding-24">
                <button class="w3-btn w3-teal w3-padding-large"><i class="fa fa-check"></i> Sign Up</button>
            </li>
        </ul>
    </div>

    <div class="w3-third w3-margin-bottom">
        <ul class="w3-ul w3-border w3-hover-shadow">
            <li class="w3-theme">
                <p class="w3-xlarge">Premium</p>
            </li>
            <li class="w3-padding-16"><b>30</b> Clean</li>
            <li class="w3-padding-16"><b>Endless</b> Support</li>
            <li class="w3-padding-16">
                <h2 class="w3-wide"><i class="fa fa-usd"></i> 500</h2>
                <span class="w3-opacity">per month</span>
            </li>
            <li class="w3-theme-l5 w3-padding-24">
                <button class="w3-btn w3-teal w3-padding-large"><i class="fa fa-check"></i> Sign Up</button>
            </li>
        </ul>
    </div>
</div>

<!-- Contact Container -->
<div class="w3-container w3-padding-64 w3-theme-l5" id="contact">
    <div class="w3-row">
        <div class="w3-col m5">
            <div class="w3-padding-16"><span class="w3-xlarge w3-border-teal w3-bottombar">Contact Us</span></div>
            <h3>Address</h3>
            <p>Swing by for a cup of coffee, or whatever.</p>
            <p><i class="fa fa-map-marker w3-text-teal w3-xlarge"></i>  Minsk</p>
            <p><i class="fa fa-phone w3-text-teal w3-xlarge"></i>  +8800 5553535</p>
            <p><i class="fa fa-envelope-o w3-text-teal w3-xlarge"></i>  zhenyazap@mail.ru</p>
        </div>
        <div class="w3-col m7">
            <form class="w3-container w3-card-4 w3-padding-16 w3-white" target="_blank" action="/Add" method="POST">
                <div class="w3-group">
                    <label class="w3-label">Name</label>
                    <input class="w3-input" type="text" name="name" required>
                </div>
                <div class="w3-group">
                    <label class="w3-label">Email</label>
                    <input class="w3-input" type="text" name="number" required>
                </div>
                <div class="w3-group">
                    <label class="w3-label">Message</label>
                    <input class="w3-input" type="text" name="type" required>
                </div>
                <input class="w3-check" type="checkbox" checked name="Like">
                <label class="w3-validate">I Like it!</label>
                <button type="submit" class="w3-btn w3-right w3-theme">Send</button>
            </form>
        </div>
    </div>
</div>

<!-- Google Maps -->
<div id="googleMap" style="width:100%;height:420px;"></div>
<script src="https://maps.googleapis.com/maps/api/js"></script>
<script>
    var myCenter = new google.maps.LatLng(53.9117617,27.5964286);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 5,
            scrollwheel: false,
            draggable: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

        var marker = new google.maps.Marker({
            position: myCenter,
        });

        marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
</script>

<!-- Footer -->
<footer class="w3-container w3-padding-32 w3-theme-d1 w3-center">
    <h4>Follow Us</h4>
    <a class="w3-btn-floating w3-teal" href="javascript:void(0)" title="Facebook"><i class="fa fa-facebook"></i></a>
    <a class="w3-btn-floating w3-teal" href="javascript:void(0)" title="Twitter"><i class="fa fa-twitter"></i></a>
    <a class="w3-btn-floating w3-teal" href="javascript:void(0)" title="Google +"><i class="fa fa-google-plus"></i></a>
    <a class="w3-btn-floating w3-teal" href="javascript:void(0)" title="Google +"><i class="fa fa-instagram"></i></a>
    <a class="w3-btn-floating w3-teal w3-hide-small" href="javascript:void(0)" title="Linkedin"><i class="fa fa-linkedin"></i></a>
    <p>Powered by <a href="https://vk.com/zhenyazap" target="_blank">zhenyazap</a></p>

    <div style="position:relative;bottom:100px;z-index:1;" class="w3-tooltip w3-right">
        <span class="w3-text w3-padding w3-teal w3-hide-small">Go To Top</span>
        <a class="w3-btn w3-theme" href="#myPage"><span class="w3-xlarge">
    <i class="fa fa-chevron-circle-up"></i></span></a>
    </div>
</footer>

<!-- Script For Side Navigation -->
<script>
    function w3_open() {
        var x = document.getElementById("mySidenav");
        x.style.width = "300px";
        x.style.textAlign = "center";
        x.style.fontSize = "40px";
        x.style.paddingTop = "10%";
        x.style.display = "block";
    }
    function w3_close() {
        document.getElementById("mySidenav").style.display = "none";
    }

    // Used to toggle the menu on smaller screens when clicking on the menu button
    function openNav() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
</script>

</body>
<script>
    $(function(){
        $('#AddButton').bind('click', function(){
           open("/Add");
        });
    });
    $(function(){
        $('#ShowButton').bind('click', function(){
            open("/Show");
        });
    });
    $(function(){
        $('#DeleteButton').bind('click', function(){
            open("/Delete");
        });
    });
    $(function(){
        $('#ChangeButton').bind('click', function(){
            open("/Change");
        });
    });
    $(function(){
        $('#SearchButton').bind('click', function(){
            open("/Search");
        });
    });
</script>
</html>
