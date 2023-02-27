let n1="",n2="",scr="",op="",zflag=0

document.querySelector("#i").addEventListener("click",gdigit)
document.querySelector("#ii").addEventListener("click",gdigit)
document.querySelector("#iii").addEventListener("click",gdigit)
document.querySelector("#iv").addEventListener("click",gdigit)
document.querySelector("#v").addEventListener("click",gdigit)
document.querySelector("#vi").addEventListener("click",gdigit)
document.querySelector("#vii").addEventListener("click",gdigit)
document.querySelector("#viii").addEventListener("click",gdigit)
document.querySelector("#iiv").addEventListener("click",gdigit)
document.querySelector("#point").addEventListener("click",gdigit)

document.querySelector("#zero").addEventListener("click",fzero)

document.querySelector("#plus").addEventListener("click",operation)
document.querySelector("#min").addEventListener("click",operation)
document.querySelector("#mux").addEventListener("click",operation)
document.querySelector("#div").addEventListener("click",operation)

document.querySelector("#eql").addEventListener("click",eqlop)

document.querySelector("#clear").addEventListener("click",clear)


function fzero(event)
{
    if(zflag!=0)
    {
        scr = n1 += event.target.value
        dis(scr)
    }
}

function gdigit(event)
{
    if(event.target.value=="." && n1 == "")
    {
        scr = n1 += "0" + event.target.value 
        zflag = 1   
        dis(scr)

    }else
    {
        scr = n1 += event.target.value
        zflag = 1
        dis(scr)
    }
    

}

function operation(event)
{
    if(op=="")
    {
        op = event.target.value
        if(zflag!=0)
        {
            n2 = n1
        }else
        {
            n2=0
        }
        
        n1=""
        dis()

    }else
    {
        dis("cannot perform operation twice",true)
        clear()
    }
}

function clear(event=null)
{
    n1=n2=scr=""    
    op=""
    zflag=0

    if(event!=null)
        dis(0)
}

function eqlop(event)
{
    switch(op)
    {
        case "+":
            dis(Number(n2) + Number(n1),true)
            clear()
            break
        case "-":
            dis(Number(n2) - Number(n1),true)
            clear()
            break
        case "*":
            dis(Number(n2) * Number(n1),true)
            clear()
            break
        case "/":
            if(n1!=0)
            {
                dis(Number(n2) / Number(n1),true)
                clear()
                break
            }else
            {
                dis("cannot divide by zero",true)
                clear()
                break
            }
        default:
            dis("perform any operation!!!",true)
            clear()
            break
    }
}


function dis(str="",flag=false)
{
    if(flag)
    {
        clear(null)
    }

    document.querySelector("#accumulator").innerHTML = n2 + op + str.toString()
}