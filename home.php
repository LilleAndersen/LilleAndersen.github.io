<!DOCTYPE html>
 <!-- Forteller browseren at nettsiden er norsk -->
<html lang="NB-no">
    <!-- Gjør at nettsiden tillater ÆØÅ -->
    <meta charset="UTF-8">
<head>
  <!-- Forteller HTML dokumentet hvor den skal leite for CSS dokumentet -->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
<title>Tobias' Skoleside</title>

<link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-touch-icon.png?v=2">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png?v=2">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png?v=2">
<link rel="manifest" href="/site.webmanifest?v=2">
<link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg?v=2" color="#da532c">
<link rel="shortcut icon" href="/assets/icons/favicon.ico?v=2">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#da532c">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Gjør at previewen blir fin -->

<meta property="og:title" content="Tobias' Skoleside">

<meta property="og:image" content="/icon.png">

<meta property="og:site_name" content="TSA">

<meta property="og:link" content="https://LilleAndersen.github.io">

<meta property="og:description" content="Tobias Strømme Andersen sin skolenettside for videregående skole. Inneholder alle oppgaver og prosjekter som skjer innen programfagene. Siden oppdateres fortløpende.">

</head>
<body class="body">

<!-- Alt som er inne i grid-container -->
    <div class="grid-container">
    <div class="header">
        <div class="headergrid noselect">
            <!-- Gjør at knappen leder den som trykker der den skal -->
            <div class="header1">
                <a href="home.php" class="link1">  <button class="dropbtn">Tobias' Skoleside</button></a>
    </div>
        <div class="header8">
            <!-- Dropdown menyen -->
            <div class="dropdown">
                <button class="dropbtn">Fag VG1</button>
                <div class="dropdown-content">
                  <a href="content/teknologi.php" >Teknologiforståelse</a>
                  <a href="content/programmering.php">Konseptutvikling og Programmering</a>
                  <a href="content/medie.php">Produksjon og Historiefortelling</a>
                </div>
              </div> 
            </div>
        <div class="header9">
            <!-- Dropdown menyen -->
            <div class="dropdown">
                <button class="dropbtn"> Fag VG2</button>
                <div class="dropdown-content">
                    <a href="#">Teknologiforståelse</a>
                    <a href="#">Konseptutvikling og Programmering</a>
                    <a href="#">Produksjon og Historiefortelling</a>
                </div>
              </div> 
            </div>
        <div class="header10">
            <!-- Dropdown menyen -->
            <div class="dropdown">
                <button class="dropbtn"> Egne Prosjekter </button>
                <div class="dropdown-content">
                  <a href="#">Bilde og Video</a>
                  <a href="#">Spill</a>
                  <a href="#">Andre Ting</a>
                </div>
              </div> 
            </div>
    </div> 
    </div>

<!-- Innholdet under navigasjonsbaren -->
<div class="main">
<div class="imagegrid">

    <div class="emptyspace">
        </div>

    <div class="overskrift">
        <div class="overskrift1">
        <h1 class="navn1">Tobias Strømme Andersen <br> Amalie Skram VGS</h1> <!-- Overskriften -->

        <div class="info2">
            <!-- Informasjonen på startsiden -->
            <p class="p2"> Jeg heter Tobias Strømme Andersen. Jeg går på Amalie Skram <br>
                VGS på Informasjonsteknologi og Medieproduksjon (IM). <br>
                Denne nettsiden tilhører en oppgave som går ut på å <br>
                lage en felles plass for alle mine prosjekter gjennom <br>
                videregående. Siden oppdateres fortløpende.</p>
            </div>
            </div>
        </div>
    </div>
</div>

        <a href="https://github.com/LilleAndersen/LilleAndersen.github.io"> <img src="assets/logos/mark-github-512.png" class="mainGithub" alt="Github logo"> </a>

        <!-- Bunninfo -->        
    <div class="footer">
        <footer class="footer-text"> <br> <br> LilleAndersen © 2020-2021</footer></div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="js/auto_resize.js"></script>
</body>
</html>