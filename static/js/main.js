// declare vars
var title = document.getElementById('title');

var views = [
    {
        id : "personal_id",
        title : 'البيانات الشخصية'
    },
    
    {
        id : "about",
        title : 'تكلم عن نفسك'
    },
    {
        id : "projects",
        title : 'أضف بعض من مشاريعك'
    },
    {
        id : "cv_type",
        title : 'شكل السيرة الذاتية'
    },

]
let current_view = 0;

var nextBtn = document.getElementById('next');
var data_containers = document.querySelectorAll('.data');
var btnsElement = document.querySelector('.btns');

var projects = [];



// declare functions

function ActiveProjectElements(){

    btnsElement.classList.add('j-spacebetween')
    var btn = document.createElement('button');
    btn.setAttribute('class','add-proj')
    btn.setAttribute('type','button')
    btn.textContent = 'اضافة مشروع اخر'

    btnsElement.appendChild(btn)

    btn.addEventListener('click',()=>{

        var proj_title = document.getElementById('projects').querySelector('.proj-title');
        var proj_des = document.getElementById('projects').querySelector('textarea');

        console.log(proj_title)
        console.log(proj_des)
        projects.push({
            title : proj_title.value,
            description : proj_des.value
        })

        proj_title.value = '';
        proj_des.value = '';

        

    })


}

function ChooseCvType (){

    document.getElementById('projects-value').value = JSON.stringify(projects);

    btnsElement.classList.remove('j-spacebetween')

    btnsElement.innerHTML = `<button id="create" type="submit">انشاء</button>`; 


}


function NextPage () {
    current_view++

    if ( current_view <= 3 ){
        console.log(current_view)
        
        data_containers.forEach(i=>{
            i.classList.add('hide')
        })


        if (2 == current_view){
            ActiveProjectElements()
        }
         if ( 3 == current_view){
            ChooseCvType()
        }
        
  
        title.textContent = views[current_view].title;
        document.getElementById(views[current_view].id).classList.remove('hide');

    }

}


nextBtn.addEventListener('click',()=>{
    NextPage();
})


var cv_type = document.getElementById('cv_type').querySelector('input');
var boxes = document.querySelectorAll('.box');

boxes.forEach(box =>{
    box.addEventListener('click',function(){
        cv_type.value = box.id;
        
        boxes.forEach(_=>_.classList.remove('active'))

        box.classList.add('active')
    })
})