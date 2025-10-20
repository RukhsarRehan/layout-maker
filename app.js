

function cont(){
    // container
let cw = document.getElementById("cw").value
let cws = document.getElementById("cws").value
document.getElementById("cont").style.width = cw + cws

// header
let hw = document.getElementById("hw").value
let hh = document.getElementById("hh").value
let hc = document.getElementById("hc").value

let hws = document.getElementById("hws").value
let hhs = document.getElementById("hhs").value


document.getElementById("head").style.width = hw + hws
document.getElementById("head").style.height = hh + hhs
document.getElementById("head").style.backgroundColor = hc

//navbar
let nw = document.getElementById("nw").value
let nh = document.getElementById("nh").value
let nc = document.getElementById("nc").value

let nws = document.getElementById("nws").value
let nhs = document.getElementById("nhs").value


document.getElementById("nav").style.width = nw + nws
document.getElementById("nav").style.height = nh + nhs
document.getElementById("nav").style.backgroundColor = nc

//main
let mw = document.getElementById("mw").value
let mh = document.getElementById("mh").value
let mc = document.getElementById("mc").value

let mws = document.getElementById("mws").value
let mhs = document.getElementById("mhs").value


document.getElementById("main").style.width = mw + mws
document.getElementById("main").style.height = mh + mhs
document.getElementById("main").style.backgroundColor = mc

// aside
let aw = document.getElementById("aw").value
let ah = document.getElementById("ah").value
let ac = document.getElementById("ac").value

let aws = document.getElementById("aws").value
let ahs = document.getElementById("ahs").value


document.getElementById("aside").style.width = aw + aws
document.getElementById("aside").style.height = ah + ahs
document.getElementById("aside").style.backgroundColor = ac

// article
let tw = document.getElementById("tw").value
let th = document.getElementById("th").value
let tc = document.getElementById("tc").value

let tws = document.getElementById("tws").value
let ths = document.getElementById("ths").value


document.getElementById("article").style.width = tw + tws
document.getElementById("article").style.height = th + ths
document.getElementById("article").style.backgroundColor = tc


//footer

let fw = document.getElementById("fw").value
let fh = document.getElementById("fh").value
let fc = document.getElementById("fc").value

let fws = document.getElementById("fws").value
let fhs = document.getElementById("fhs").value


document.getElementById("footer").style.width = fw + fws
document.getElementById("footer").style.height = fh + fhs
document.getElementById("footer").style.backgroundColor = fc

}
