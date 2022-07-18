
// expense-chart-mon 
// expense-chart-tue 
// expense-chart-wed 
// expense-chart-thu 
// expense-chart-fri 
// expense-chart-sat 
// expense-chart-sung
 let days=[];                    //Both days and dayAmount are parallel array, days[0]=mon,days[6]=sun 
let dayAmount=[];
let date = new Date();
let d = date.getDay()-1;
const mon = document.getElementById('expense-chart-bar-mon');
const tue = document.getElementById('expense-chart-bar-tue');
const wed = document.getElementById('expense-chart-bar-wed');
const thu = document.getElementById('expense-chart-bar-thu');
const fri = document.getElementById('expense-chart-bar-fri');
const sat = document.getElementById('expense-chart-bar-sat');
const sun = document.getElementById('expense-chart-bar-sun');
function setData(data){
    for(let count of data){
        days.push(count.day)
    }
    for(let count of data){
        
        dayAmount.push(count.amount.toString()+'%')
    }
    setHeight(days,dayAmount)
}
function setHeight(days,dayAmount){
    for(let day of days){
        switch (day) {
            case 'mon':mon.style.height=dayAmount[0]
                    if(days[d]==='mon'){
                        mon.style.backgroundColor='hsl(186, 34%, 60%)'
                    }
                break;
            case 'tue':tue.style.height = dayAmount[1];
            if(days[d]==='tue'){
                tue.style.backgroundColor='hsl(186, 34%, 60%)'
            }
                break;
            case 'wed':wed.style.height = dayAmount[2];
            if(days[d]==='wed'){
                wed.style.backgroundColor='hsl(186, 34%, 60%)'
            }
                break;
            case 'thu':thu.style.height = dayAmount[3];
            if(days[d]==='thu'){
                thu.style.backgroundColor='hsl(186, 34%, 60%)'
            }
                break;
            case 'fri':fri.style.height = dayAmount[4];
            if(days[d]==='fri'){
                fri.style.backgroundColor='hsl(186, 34%, 60%)'
            }
                break;
            case 'sat':sat.style.height = dayAmount[5];
            if(days[d]==='sat'){
                sat.style.backgroundColor='hsl(186, 34%, 60%)'
            }
                break;
            case 'sun':sun.style.height = dayAmount[6];
            if(d ===-1){
                sun.style.backgroundColor='hsl(186, 34%, 60%)'
            }
                break;
        }

    }

    }


fetch('./data.json').then(res=>{
    return res.json()
}).then(data=>{
    setData(data)
})
