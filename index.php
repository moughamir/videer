<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>ViDeer</title>
    <link rel="stylesheet" href="card.css" type="text/css" />
</head>

<body>
    <div class="container">
        <div class="row">

            <div class="col-6">
                <div class="feed">
                    <ol class="feed-items" v-if="feed">
                        <li class="feed-single" v-for="item in feed">
                            <div class="card">
                                <div class="content">
                                    <a :href="item.user.link">
                                    <div class="feed-item--header">
                                        
                                            <img :src="item.user.pictures['sizes']['0'].link" :alt="item.user.name" class="feed-item__user-image">
                                            <span class="feed-item__user-name">{{item.user.name}}</span> 
                                            <small class="feed-item__date"> {{item.modified_time | dateformat}}</small>
                                        
                                        
                                    </div>
                                    </a>
                                    <div class="feed-item--content">
                                        <a :href="item.link" :title="item.name">
                                            <div class="feed-item__video">
                                                <div class="feed-item__video-picture">
                                                    <img v-bind:src="item.pictures.sizes[2].link" :alt="item.name" />
                                                </div>
                                                <div class="feed-item__video-description">
                                                    <p>{{item.description | truncate}}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="feed-item--footer">
                                        <ul class="feed-item--meta">
                                            <li class="feed-item--meta__likes"><span class="icon"><i class="fa fa-love"></i></span> {{item.metadata.connections.likes.total}}</li>
                                            <li class="feed-item--meta__comments"><span class="icon"><i class="fa fa-comment"></i></span> {{item.metadata.connections.comments.total}}</li>
                                            <li class="feed-item--meta__views"><span class="icon"><i class="fa fa-view"></i></span> {{item.stats.plays}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </ol>
                </div>

            </div>
        </div>


        <script type="text/javascript" src="//cdn.jsdelivr.net/g/lodash@4.17.4,vue@2.3.2,vue.resource@1.3.1,jquery@3.2.1,momentjs@2.18.1"></script>
        <!--script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script-->
        <script type="text/javascript" src="js/app.js"></script>
</body>

</html>
<!--
  
            -->
