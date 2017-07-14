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
            <div class="loading" v-if="loading">
            </div>
            <header class="jumbotron jumbotron-fluid w-100">
                <div class="container text-center">

                    <div class="form-inline">
                        <div class="form-group m-2">
                            <strong>Posts per page</strong>
                            <select class="form-control m-2" id="PostPerPage" v-model="displayPage">
                            <option v-for="displayPage in displayPerPage" :value="displayPage">{{ displayPage }}</option>
                        </select>
                        </div>
                        <button type="button" class="btn btn-outline-primary" @click.capture="fetchData(1, displayPage)">Retrieve</button>
                    </div>
                    <!--
                    <div class="form-inline">
                        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
                            <label class="form-check-label">
                          <input class="form-check-input" v-model="filtered" type="checkbox" @click="filtredVideos">> =10 likes
                        </label>
                        </div>
                    </div>
                    -->
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
                        <li class="page-item" v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
                            <a class="page-link" href="#" @click.capture="gotoPage(setPage(pageNumber))" :class="{active: currentPage === pageNumber, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
                        </li>
                    </ul>
                </nav>


            </div>


        </div>

    </div>

    <script type="text/javascript" src="//cdn.jsdelivr.net/g/lodash@4.17.4,vue@2.3.2,momentjs@2.18.1,axios@0.16.1"></script>

    <script type="text/javascript" src="js/app.js"></script>
</body>

</html>
<!--
  
            -->
