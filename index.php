<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>ViDeer</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://use.fontawesome.com/e55ab844c0.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="feed row" id="feed-app">
            <header class="jumbotron jumbotron-fluid w-100">
                <div class="container text-center">
                    <h1 class="display-3">Fluid jumbotron</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </header>


            <div class="container">
                <section class="feed-items row d-flex justify-content-center flex-column" v-if="user">
                    <div class="feed-single d-flex justify-content-center" v-for="(post, index) in feed">
                        <article class="card w-75 mb-1 mt-1">
                            <div class="card-block p-2">
                                <div class="media">
                                    <a :href="post.user.link"><img class="user-picture d-flex mr-1 rounded-circle" :src="userPicture[index].sizes[1].link" :alt="post.user.name"></a>
                                    <div class="media-body ">

                                        <h5 class="mt-0 card-title"><a :href="post.user.link" class="">{{post.user.name}}&nbsp;<small class="text-muted">{{post.user.link | pseudofy}}</small></a></h5>



                                        <a :href="post.link">
                                            <h6 class="card-subtitle text-muted">{{post.name}}</h6>
                                        </a>
                                        <p class="card-text"><small class="text-muted">{{post.release_time | dateformat}}</small></p>
                                        <p class="card-text">{{post.description | truncate}}</p>
                                        <a :href="post.link">
                                            <img :src="post.pictures.sizes['3'].link_with_play_button" class="img-fluid" :alt="post.name" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <footer class="card-footer text-muted">
                                <ul class="nav  card-header-tabs nav-pills nav-fill">
                                    <li class="nav-item">
                                        <a class="nav-link text-muted" href="#">
                                            <i class="fa fa-heart-o" aria-hidden="true"></i>&nbsp;{{post.metadata.connections.likes.total}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-muted" href="#">
                                            <i class="fa fa-comment-o" aria-hidden="true"></i>&nbsp;{{post.metadata.connections.comments.total}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-muted" href="#">
                                            <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;{{post.stats.plays === null ? 'N/A' : null}}
                                        </a>
                                    </li>
                                </ul>
                            </footer>
                        </article>
                    </div>
                </section>

                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>

    </div>


    <script type="text/javascript" src="//cdn.jsdelivr.net/g/lodash@4.17.4,vue@2.3.2,jquery@3.2.1,momentjs@2.18.1,axios@0.16.1"></script>
    <script type="text/javascript" src="js/app.js"></script>
</body>

</html>
<!--
  
            -->
