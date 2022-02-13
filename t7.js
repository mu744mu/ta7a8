}
            
            
var Walltop = [];
function checkTopWall() {
    var leng;
    Walltop = Walltop.sort((a,b) => b.top - a.top);
    leng = 3;
        $(".topWall3 div").addClass("toptop").css("backgroundImage","").find("span").text("")
    $(".topWall10").html("")
    Walltop.forEach(function(i,x){
        if(x<3){
            var it = $(".topWall3 .top"+(x+1));
            it.removeClass("toptop")
            it.css("backgroundImage","url("+i.pic+")")
            console.log(it.css("backgroundImage"),i.pic)
            it.find("span").text(i.topic)
        } else {
            
            var it = $(`<div class="fl top" >
                            <span class="corner fl dots">`+(x+1)+`</span>
                            <img style="background-image: url('`+i.pic+`');" class="fitimg fl u-pic">
                            <div class="fl">
                                <span class="corner dots topic"></span>
                                <div class="fr">
                                    <span title="اجمالي عدد منشوراتك" class="fr fa fa-pencil-square-o">`+i.pc+`</span>
                                    <span title="اجمالي عدد التعليقات التي حصلت عليها منشوراتك" class="fr fa fa-commenting-o" style="margin: -6px 4px 0;width: 33%;">`+i.com+`</span>
                                    <span title="اجمالي عدد الايكات التي حصلت عليها منشوراتك" class="fr fa fa-thumbs-up">`+i.like+`</span>
                                </div>
                            </div>
                        </div>`).appendTo(".topWall10");
            it.find(".topic").text(i.topic)
            leng += 1;
        }
    })
    for (var i = 0;i<(10-leng);i++){
        var ht = `<div class="fl top toptop" >
                    <span class="corner fl dots">`+(i+(leng+1))+`</span>
                    <img style="" class="fitimg fl u-pic">
                    <div class="fl">
                        <span class="corner dots topic"></span>
                        <div class="fr">
                            <span class="fr fa fa-pencil-square-o"></span>
                            <span class="fr fa fa-commenting-o" style="margin: -6px 4px 0;width: 33%;"></span>
                            <span class="fr fa fa-thumbs-up"></span>
                        </div>
                    </div>
                </div>`     
        $(ht).appendTo(".topWall10");
    }
    $('.dpnl').show();
}
        </script>
        <style>
            .ustop .u-pic {
                width: 45px!important;
                height: 45px!important;
            }
            .ustop .ustat {
                height: 45px!important;
            }
            .wisam::-webkit-scrollbar {
                height: 4px;
            }
            .wisam::-webkit-scrollbar-thumb {
              background: #f3a219; 
            }
            .wisam::-webkit-scrollbar-thumb:hover {
              background: #b97503; 
            }
            .top1 .label-primary, .top1 .btn-primary {
                background-color: #f3a219!important;
            }
            .top2 .label-primary, .top2 .btn-primary {
                background-color: #959696!important;
            }
            .top3 .label-primary, .top3 .btn-primary {
                background-color: #d68352!important;
            }
            .top1 .primaryborder ,.top1 .borderg,.top1 hr{
                border-color: #f3a219!important;
            }            
            .top2 .primaryborder ,.top2 .borderg,.top2 hr{
                border-color: #959696!important;
            }            
            .top3 .primaryborder ,.top3 .borderg,.top3 hr{
                border-color: #d68352!important;
            }            
            .mony {
                width: max-content;
                border-radius: 0 3px 3px 0;
                margin: 2px 0;
                background-image: url(imgs/z7.png);
                height: 25px;
                background-position: 3%;
                text-align: left;
                color: #e64d21;
                font-size: 20px !important;
                line-height: 25px;
                padding: 0 5px 0 25px;
                font-family: monospace,serif;
                border: 1px solid;
            }
            
            .loginDiv{
                float: right;
                width: 99%;
                margin-right: -200%;
                margin-top: 20px;
                background-color: #f93634;
                -webkit-animation: daa 7s 1 linear;
                -moz-animation: daa 7s 1 linear;
                -o-animation: daa 7s 1 linear;
                animation: daa 7s 1 linear; 
                -webkit-animation-fill-mode: forwards; 
                -moz-animation-fill-mode: forwards; 
                -o-animation-fill-mode: forwards; 
                animation-fill-mode: forwards;
                -webkit-animation-delay: 1s;
                -moz-animation-delay: 1s;
                -o-animation-delay: 1s;
                animation-delay: 1s;
                border: 2px solid #af020b;
                border-radius: 25px 0 0 25px;
                background-image: url(imgs/hfall2.png);
                background-repeat: no-repeat;
                background-size: contain;
            }
            .loginItms{
                position: absolute;
                overflow: hidden;
                right: 2px;
                top: 30px;
                width: 250px;
            }
            .loginImg{
                float: right;
                width: 36px;
                height: 36px;
                border: 1px solid #ed5555;
                margin: 1px;
                background-size: contain;
                background-repeat: no-repeat;
                border-radius: 10px;
            }
            .loginLogo{
                float: right;
                margin: 1px;
                margin-top: -20px
            }
            .loginIco{
                float: right;
                margin: 0px 1px 1px;
                max-height: 18px;
                background-color: white;
                padding: 1px;
                border-radius: 2px;
            }
            .loginFlog{
                float: left;
                margin: 2px 0 5px 5px;
                max-height: 15px;
            }
            .loginUserName{
                font-variant: petite-caps;
                font-size: 16px!important;
                float: right;
                max-width: 170px;
                min-width: 100px;
                text-align: right;
                text-shadow: -1px 1px 2px #fff;
                color: #842c2a;
                white-space: nowrap;
                overflow: hidden!important;
                text-overflow: ellipsis;
            }
            @keyframes daa{
                0%{margin-right: -100%;}
                5%{margin-right: 0%;}
                20%,40%,60%,80%,95%{border-color: #b9941c;margin-right: 0%;}
                30%,50%,70%,90%{border-color: #af020b;margin-right: 0%;}
                100%{border-color: #af020b;margin-right: -100%;}
            }		
            @-webkit-keyframes daa{
                0%{margin-right: -100%;}
                5%{margin-right: 0%;}
                20%,40%,60%,80%,95%{border-color: #b9941c;margin-right: 0%;}
                30%,50%,70%,90%{border-color: #af020b;margin-right: 0%;}
                100%{border-color: #af020b;margin-right: -100%;}
            }
            @-moz-keyframes daa{
                0%{margin-right: -100%;}
                5%{margin-right: 0%;}
                20%,40%,60%,80%,95%{border-color: #b9941c;margin-right: 0%;}
                30%,50%,70%,90%{border-color: #af020b;margin-right: 0%;}
                100%{border-color: #af020b;margin-right: -100%;}
            }
            @-o-keyframes daa{
                0%{margin-right: -100%;}
                5%{margin-right: 0%;}
                20%,40%,60%,80%,95%{border-color: #b9941c;margin-right: 0%;}
                30%,50%,70%,90%{border-color: #af020b;margin-right: 0%;}
                100%{border-color: #af020b;margin-right: -100%;}
            }






            





            

        </style>




        <style>
            * {
                font-family: serif;
                font-weight: bold;
                text-shadow: none!important;
                font-size: 15px !important;
            }
            .ae {
                border: 1px solid black;
                border-radius: 2px;
                margin: 1px;
                float: left; 
                padding: 6px 2px;
            }
            .pmsgc {
                background-color: rgba(0, 77, 255, 0.08)!important;
            }
            .hmsg {
                background-color: linen!important;
            }
            .label-primary,
            .btn-primary,
            .bg-primary,
            .label-primary:hover,
            .btn-primary:hover,
            .btn-primary:focus {
                background-color: #438ac7;
                background-image: none;
            } 
            .bg {
                background-color: #39576E;
            } 
            .bgg {
                background-color: lightslategray;
            } 
            .pophead {
                background-color: slategrey;
            }

            .light {
                background-color: #F7F7F7;
            }
            .label-primary,.btn-primary{  
                background-color: #39576E!important;
            }
            .hid {
                display: none;
            }
            .primaryborder{  
                border-color: #39576E!important;
            }
            .rating-box {
                color: #a2a2a2;
                text-shadow: 0px 1px 10px black;
                margin: -19px auto 2px auto;
                height: 20px;
            }
            .rating-star {
                font-size: 20px !important;
                width: 15px;
                height: 20px;
                padding: 0 2px;
                position: relative;
                display: block;
                float: left;
            }
            .full-star:before {
                color: #f2b01e;
                content: "\2605";
                position: absolute;
                left: 0;
                overflow: hidden;
            }
            .empty-star:before {
                content: "\2605";
                position: absolute;
                left: 0;
                overflow: hidden;
            }
            .half-star:before {
                color: #f2b01e;
                content: "\2605";
                width: 60%;
                position: absolute;
                left: 0;
                overflow: hidden;
            }
            .half-star:after {
                content: '\2605';
                position: absolute;
                left: 9px;
                width: 75%;
                text-indent: -0.7rem;
                overflow: hidden;
            }
            .sco .form{
                width: 100%;
                position: relative;
                height: 40px;
                background: blue;
                overflow: hidden;
                margin: 5px 0;
            }
            .sco .form input{
                width: 100%;
                height: 100%;
                color: #595f6e;
                padding-top: 10px;
                border: none;
                outline: none;
            }
            .sco .form label{
                position: absolute;
                bottom: 0px;
                right: 0%;
                width: 100%;
                /*		height: 100%;*/
                color: #616161;
                pointer-events: none;
                border-bottom: 2px solid #eee;
            }
            .sco .form label::after{
                content: "";
                position: absolute;
                bottom: -1px;
                right: 0px;
                width: 100%;
                /*		height: 100%;*/
                pointer-events: none;
                border-bottom: 2px solid #616161;
                transform: translateX(100%);
                transition:transform 0.5s ease;
            }
            .sco .content-name{
                position: absolute;
                bottom: 5px;
                right: 0px;
                transition: all 0.5s ease;
            }
            .sco .form input:focus + .label-name .content-name,
            .sco .form input:valid + .label-name .content-name{
                transform: translateY(-140%);
                font-size: 12px;
                color: #5fa8d3
            }
            .sco .form input:focus + .label-name::after,
            .sco .form input:valid + .label-name::after{
                transform: translateY(0%);
            }
            #topWall div span:before {
                float: left;
                font-weight: 100!important;
            }
            .topWall3 {
                margin-top: 5px;
                width: 100%;
                height: 150px;
                background: url(imgs/topWall.png) white;
                background-size: 100% auto;
                background-repeat: no-repeat;
                background-position: bottom;
            }
            .topWall3>div{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 2px solid;
                background-size: contain;
            }
            .topWall3>div>span{
                margin-top: 62px;
                padding: 0px 1px;
                text-align: center;
                margin-left: -10%;
                min-width: 120%;
                border-radius: 3px;
                text-overflow: clip;
                border-right: none!important;
                border-left: none!important;
                border-top: none!important;
                font-size: 13px !important;
            }
            .topWall3 .toptop {
                background-color: rgba(0, 0, 0, 0.1);
            }
            .topWall3 .toptop span.corner.dots {
                background-color: rgba(0, 0, 0, 0.1);
                height: 20px;
                border-radius: 0;
                border: none;
            }


            .topWall10 {
                width: 100%;
                height: 75%;
                margin-top: 5px;
                border-top: 2px solid;
            }
            .topWall10>div.top {
                width: 99%;
                margin: 0px 1px -1px 2px!important;
                padding: 1px;
                border-bottom: 2px solid;
            }
            .topWall10>div.top>span.dots {
                padding: 0px;
                width: 18px;
                text-align: center;
                margin: 15px 2px 0px;
                border-top: 1px solid;
                border-bottom: 1px solid;
                border-radius: 1px;
            }
            .topWall10>div.top>img {
                margin-bottom: 4px;
                border-radius: 50%;
                border: 1px solid;
                width: 45px;
                height: 45px;
                margin-left: 1px;
                margin-top: 2px;
                background-color: white;
            }
            .topWall10>div.top>div {
                width: 70%;
                margin-top: 6px;
            }
            .topWall10>div.top>div>span.dots {
                padding: 0px 2px;
            }
            .topWall10>div.top>div>div {
                width: 100%;
            }
            .topWall10>div.top>div>div>span {
                margin-top: -6px;
                padding: 1px 4px;
                width: 31%;
                text-align: center;
                border-bottom: 1px solid;
            }


            .topWall10>div.toptop>div>span.dots {
                background-color: rgba(0, 0, 0, 0.1);
                border-radius: 0;
                width: 100%;
                margin-left: 4px;
                height: 20px;
            }
            .topWall10>div.toptop>img {
                background-color: rgba(0, 0, 0, 0.1);
                border: none;
            }
            .topWall10>div.toptop>div>div>span {
                background-color: rgba(0, 0, 0, 0.1);
                color: rgb(229 229 229);
                margin-top: -3px!important;
            }
            .topWall10>div.toptop>span.dots {
                background-color: rgba(0, 0, 0, 0.1);
                color: #ffffff;
                text-shadow: -2px 1px 2px black!important;
                border-color: #9b9b9b;
            }
            .topWall10>div.toptop>div>div {
                width: 96%;
                margin-left: 6px;
            }

            
        </style>
        <style>
            .divColorLo{
                display: none;
                width: 100%;
                background-color: white;
                margin: auto auto;
                position: absolute;
                right: 0;
                left: 0;
                top: 0;
                z-index: 999;
                padding: 2px 0;
                border-bottom: 1px solid #d0d0d0;
            }
            .dots2{
                padding: 9px!important;
                width: 20px;
                height: 20px;
                border-radius: 5px;
                border: 1px solid #d0d0d0;
            }
            .inpDiv{
                float: right;
                width: 25%;
                padding: 0;
                margin: 0;
                text-align: center;
            }
            .broadcasters {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                margin-left: 2px;
                color: #ffffff;
                border: 1px solid#f9f9f9!important;
                border-radius: 0px;
                background-color: #4c6a8c!important;
                background-image: url(https://i.imgur.com/eqGvZEC.gif)!important;
                font-family: 'Almarai', sans-serif;
            }
            .broadcasters>div {
                width: 100%;
                max-width: 260px;
                margin: 1px;
                float: left;
            }
            .broadcasters>div>.prod {
                float: left;
                width: 45px;
                height: 45px;
                border: 2px solid #989594;
                margin: 0 1px;
                text-align: center;
                border-radius: 50%;
                color: #000;
                background-color: white;
                background-image: url(https://k.top4top.io/p_1871wwqvi1.gif);
            }
            .broadcasters>div>.muted:after {
                position: absolute;
                top: 50%;
                height: 2px;
                background: #000;
                content: "";
                width: inherit;
                display: block;
                transform: rotate(135deg);
            }
            .broadcasters>.mutAll {
                background: #fff;
                width: 37px;
                height: 37px;
                border-radius: 50%;
                padding: 0.2rem;
                display: inline-block;
                float: right;
                margin-right: 0.2rem;
                margin-top: 0.2rem;
                border: 1px solid;
                box-shadow: 0 0 5px 0 #5d5d5d;
                cursor: pointer;
                background-size: contain;
                background-image: url(/sound-on.png);
            }
            .broadcasters>.mutAll.muted {
                background-image: url(sound-off.png);
            }
            .broadcasters>div>.prod>.fa-microphone {
                font-size: 22px !important;
                text-align: center;
                margin-top: 2px;
                font-weight: 100!important;
            }
            .broadcasters>div>.prod>.number{
                display: block;
            }
            .broadcasters>div>.prod>hr{
                display: none!important;
                margin: -2px 0 0;
                border-top-color: #d9534f;
            }
            .broadcasters .evant>i{
                font-style: normal;
                color: #ffffff;
                width: 100%;
                float: left;
                text-align: center;
                margin-top: 2px;
                background-color: #ffffffc7;
                padding: 0px 8px;
                border: 1px solid;
            }
            span.usid.fr {
                line-height: 9px;
                margin: 0!important;
            }
            .fitimg {
                background-size: cover!important;
            }
        </style>
