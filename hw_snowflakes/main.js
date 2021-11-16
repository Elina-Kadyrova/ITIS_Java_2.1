window.addEventListener("DOMContentLoaded", () => {

    snowmax = 50 //кол-во снежинок
    snowcolor = new Array("#d5dfe5","#a1bccf","#74a3c4","#4487b8","#2374ad") //массив с цветами снежинок
    snowtype = "Times" //шрифт
    snowletter1 = "&#10052;" //символы снежинок
    snowletter2 = "&#10053;"
    snowspeed = 0.4 //скорость падения снежинок
    snowmaxsize = 45 //макс размер
    snowminsize = 10 //мин размер

    snow = new Array() //снежинки
    marginbottom = document.documentElement.clientHeight
    marginright = document.documentElement.clientWidth
    x_mv=new Array();
    crds=new Array();
    lftrght=new Array();

    for (i=0; i<=snowmax; i++) { //создаем снежинки, текст, стиль
        if(i%2 == 0){
          document.write("<span id='snowflake"+i+"' style='position:absolute;"+snowmaxsize+"'>"+snowletter1+"</span>")  
        }
        else{
            document.write("<span id='snowflake"+i+"' style='position:absolute;"+snowmaxsize+"'>"+snowletter2+"</span>")
        }
    }
    document.write("<h3>Тут находится новогодний сайт.</h3><br><h3>С наступающим!</h3><br>");
    document.write("<style>body{background-color: #151c59;justify-content: center;margin: 200px;}h3{text-align: center;font-size: 30px;font-family: Arial, sans-serif;color: #fff;line-height:5px;}</style>");

    for (i = 0; i <= snowmax; i++) {
        crds[i] = 0; //потом будут радианы
        lftrght[i] = Math.random()*20; //коэффициент отклонения вправо-влево
        x_mv[i] = 0.03 + Math.random()/10; //изменение радиан

        snow[i]=document.getElementById("snowflake"+i)
        snow[i].style.fontFamily=snowtype
        snow[i].size=randommaker(snowmaxsize-snowminsize)+snowminsize
        snow[i].style.fontSize=snow[i].size;
        snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
        snow[i].style.zIndex = -1 //чтобы все другие элементы были перед снежинками, а те на фоне
        snow[i].speed=snowspeed*snow[i].size/6 //маленькие падают медленнее, чем большие
        snow[i].posx=randommaker(marginright-snow[i].size) //устанавливаем расположение появившейся снежинки по x
        snow[i].style.left=snow[i].posx;
        snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)//устанавливаем расположение появившейся снежинки по y
        snow[i].style.top=snow[i].posy;
    }
    movesnow()

    function randommaker(range) { //рандомные значения по диапазону
        rand = Math.floor(range*Math.random())
        return rand
    }

    function movesnow() { //движение снега
        for (i=0; i<= snowmax; i++) {
            crds[i] += x_mv[i]; //к 0 прибавляем сдвиг радиан
            snow[i].style.left=snow[i].posx+lftrght[i]*Math.cos(crds[i]); //по x сдвигаем по траектории cos в зависимости от кооэффициента отклонения
            snow[i].posy+=snow[i].speed //по y сдвигаем в зависимости от установленной скорости
            snow[i].style.top=snow[i].posy;

            if (snow[i].posy>=marginbottom-2*snow[i].size){
                snow[i].posx=randommaker(marginright-snow[i].size)
                snow[i].posy=0
            }
        }
        setTimeout(movesnow, 50)
    }
})
