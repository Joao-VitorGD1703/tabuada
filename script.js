function calcular(){
let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
if(num.value.length == 0){
    window.alert(' [ERRO] digite um número')
}else{
    //res.innerHTML = ' resultado: '
    let n = Number(num.value)
     for(let c = 1; c <=10; c++){
        let item = document.createElement('option')
        item.text = `${c} x ${n} = ${c*n}`
        item.value = `tab${c}`
        tab.appendChild(item)
        
     }
     
}

}